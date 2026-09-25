import pptxgen from "pptxgenjs";
import JSZip from "jszip";
import { saveAs } from "file-saver";
import { LessonPlan, SchoolInfo } from "../types";
import {
  buildDetailedClassroomDeck,
  DetailedClassroomDeck,
  TeachingSlide,
  isAuthenticLectureAvailable,
} from "./classroomSlideDataHelper";

// Color helper
export function getSubjectColorTheme(subject: string) {
  const s = (subject || "").toLowerCase();
  if (s.includes("tiếng việt") || s.includes("tập đọc") || s.includes("chính tả")) {
    return {
      primary: "1E3A8A", // Deep Blue 900 (Traditional Vietnamese Primary Teaching Blue)
      secondary: "DC2626", // Red 600
      accent: "FEF2F2",
      badgeBg: "FEE2E2",
      badgeText: "991B1B",
      border: "1E3A8A",
    };
  }
  if (s.includes("toán")) {
    return {
      primary: "1E40AF",
      secondary: "2563EB",
      accent: "EFF6FF",
      badgeBg: "DBEAFE",
      badgeText: "1E3A8A",
      border: "1E40AF",
    };
  }
  return {
    primary: "1E3A8A",
    secondary: "DC2626",
    accent: "FAFAF9",
    badgeBg: "F5F5F4",
    badgeText: "1C1917",
    border: "1E3A8A",
  };
}

/**
 * Builds the exact 25-slide classroom teaching PowerPoint presentation (.pptx)
 * matching the exact pedagogical standards of the uploaded teaching slide sample!
 */
export function buildClassroomTeachingPresentation(
  deck: DetailedClassroomDeck
): pptxgen {
  const pres = new pptxgen();
  pres.layout = "LAYOUT_16x9";
  pres.author = deck.teacherName;
  pres.company = deck.schoolName;
  pres.title = `Bài giảng: ${deck.lessonTitle} - Môn: ${deck.subject}`;

  const blueFrame = "1E3A8A";
  const redText = "DC2626";
  const blueText = "1E3A8A";

  // Helper: Adds standard header and double blue border frame matching the sample PDF
  const addClassroomSlideFrame = (
    slide: pptxgen.Slide,
    dateText = "Thứ……ngày……tháng…..năm 2024",
    lessonTitle = deck.slides[4]?.headerLesson || `BÀI: ${deck.cleanTitle.toUpperCase()}`
  ) => {
    // Outer border frame (Double border line style)
    slide.addShape(pres.ShapeType.rect, {
      x: 0.25,
      y: 0.25,
      w: 12.83,
      h: 7.0,
      fill: { color: "FFFFFF" },
      line: { color: blueFrame, width: 2.5 },
    });

    // Top Header Date & Lesson Title
    slide.addText(dateText, {
      x: 1.0,
      y: 0.35,
      w: 11.33,
      h: 0.35,
      fontSize: 13,
      fontFace: "Times New Roman",
      color: blueText,
      align: "center",
      valign: "middle",
    });

    slide.addText(lessonTitle, {
      x: 1.0,
      y: 0.72,
      w: 11.33,
      h: 0.45,
      fontSize: 16,
      fontFace: "Times New Roman",
      bold: true,
      color: blueText,
      align: "center",
      valign: "middle",
    });

    // Decorative corner floral accents (Yellow/Green small markers)
    slide.addShape(pres.ShapeType.roundRect, {
      x: 0.35,
      y: 6.75,
      w: 0.5,
      h: 0.4,
      rectRadius: 0.1,
      fill: { color: "FEF08A" },
      line: { color: "CA8A04", width: 1 },
    });
    slide.addText("🌸", {
      x: 0.35,
      y: 6.75,
      w: 0.5,
      h: 0.4,
      fontSize: 11,
      align: "center",
      valign: "middle",
    });

    slide.addShape(pres.ShapeType.roundRect, {
      x: 12.48,
      y: 0.35,
      w: 0.5,
      h: 0.4,
      rectRadius: 0.1,
      fill: { color: "FEF08A" },
      line: { color: "CA8A04", width: 1 },
    });
    slide.addText("🌿", {
      x: 12.48,
      y: 0.35,
      w: 0.5,
      h: 0.4,
      align: "center",
      valign: "middle",
    });
  };

  // Iterate and create all 25 slides
  deck.slides.forEach((slideData) => {
    const slide = pres.addSlide();

    switch (slideData.category) {
      // ==========================================
      // SLIDE 1: BÌA BÀI GIẢNG DỰ GIỜ THĂM LỚP
      // ==========================================
      case "cover": {
        // Sky cyan background
        slide.addShape(pres.ShapeType.rect, {
          x: 0,
          y: 0,
          w: "100%",
          h: "100%",
          fill: { color: "E0F2FE" },
        });

        // Top School Name
        slide.addText(`${deck.schoolName.toUpperCase()} ………………..`, {
          x: 0.5,
          y: 0.4,
          w: 12.33,
          h: 0.5,
          fontSize: 16,
          fontFace: "Times New Roman",
          bold: true,
          color: "FFFFFF",
          align: "center",
          shadow: { type: "outer", color: "0284C7", blur: 4, offset: 2, opacity: 0.8 },
        });

        // Main Welcome Red Text
        slide.addText("CHÀO MỪNG QUÝ THẦY CÔ\nVỀ DỰ GIỜ THĂM LỚP", {
          x: 0.5,
          y: 1.5,
          w: 12.33,
          h: 1.5,
          fontSize: 27,
          fontFace: "Times New Roman",
          bold: true,
          color: redText,
          align: "center",
          lineSpacingMultiple: 1.25,
          shadow: { type: "outer", color: "FDE047", blur: 6, offset: 2, opacity: 0.6 },
        });

        // Subject & Lesson Title
        slide.addText(`MÔN ${deck.subject.toUpperCase()} LỚP ${deck.grade}`, {
          x: 0.5,
          y: 3.3,
          w: 12.33,
          h: 0.5,
          fontSize: 18,
          fontFace: "Times New Roman",
          bold: true,
          color: blueText,
          align: "center",
        });

        slide.addText(
          deck.slides[0]?.headerLesson || deck.lessonTitle.toUpperCase(),
          {
            x: 0.5,
            y: 3.9,
            w: 12.33,
            h: 0.9,
            fontSize: 28,
            fontFace: "Times New Roman",
            bold: true,
            color: blueText,
            align: "center",
          }
        );

        // Teacher & Class Info Bottom Right
        slide.addShape(pres.ShapeType.roundRect, {
          x: 8.5,
          y: 5.6,
          w: 4.2,
          h: 1.2,
          rectRadius: 0.1,
          fill: { color: "FEF3C7" },
          line: { color: "F59E0B", width: 1 },
        });
        slide.addText(
          `Giáo viên: ${deck.teacherName}\nLớp: ${deck.className}`,
          {
            x: 8.6,
            y: 5.65,
            w: 4.0,
            h: 1.1,
            fontSize: 14,
            fontFace: "Times New Roman",
            bold: true,
            color: "78350F",
            valign: "middle",
            lineSpacingMultiple: 1.3,
          }
        );

        // Bottom Lotus Meadow Strip Banner
        slide.addShape(pres.ShapeType.rect, {
          x: 0,
          y: 6.6,
          w: "100%",
          h: 0.9,
          fill: { color: "86EFAC" },
        });
        slide.addText("🌸 🌸 🌸   HỒ SEN HOA TƯƠI SẮC THẮM - TIẾT HỌC HỨNG THÚ   🌸 🌸 🌸", {
          x: 0,
          y: 6.6,
          w: "100%",
          h: 0.9,
          fontSize: 12,
          fontFace: "Times New Roman",
          bold: true,
          color: "14532D",
          align: "center",
          valign: "middle",
        });
        break;
      }

      // ==========================================
      // SLIDE 2: CHUYỂN CẢNH KHỞI ĐỘNG
      // ==========================================
      case "transition_warmup": {
        slide.addShape(pres.ShapeType.rect, {
          x: 0,
          y: 0,
          w: "100%",
          h: "100%",
          fill: { color: "FFFFFF" },
        });

        // Top hearts & tree decoration
        slide.addText("💖  ❤️  💖  ❤️  💖", {
          x: 0.5,
          y: 0.5,
          w: 12.33,
          h: 0.5,
          fontSize: 16,
          align: "center",
        });

        // Large Script Font: Khởi động
        slide.addText("Khởi động", {
          x: 1.0,
          y: 2.2,
          w: 11.33,
          h: 1.8,
          fontSize: 55,
          fontFace: "Georgia",
          bold: true,
          italic: true,
          color: "1D4ED8",
          align: "center",
          valign: "middle",
          shadow: { type: "outer", color: "93C5FD", blur: 8, offset: 3, opacity: 0.8 },
        });

        // Bottom students singing & dancing banner
        slide.addShape(pres.ShapeType.rect, {
          x: 0,
          y: 5.8,
          w: "100%",
          h: 1.7,
          fill: { color: "FFE4E6" },
        });
        slide.addText("👫 👫 👫   CẢ LỚP CÙNG HÁT VANG VÀ KHỞI ĐỘNG HỨNG KHỞI!   👫 👫 👫", {
          x: 0,
          y: 5.8,
          w: "100%",
          h: 1.7,
          fontSize: 15,
          fontFace: "Times New Roman",
          bold: true,
          color: "BE123C",
          align: "center",
          valign: "middle",
        });
        break;
      }

      // ==========================================
      // SLIDE 3: TRÒ CHƠI KHỞI ĐỘNG (BIỂN BÁO GIAO THÔNG)
      // ==========================================
      case "warmup_game": {
        addClassroomSlideFrame(slide, slideData.headerDate, "KHỞI ĐỘNG");

        slide.addText("TRÒ CHƠI: BIỂN BÁO GIAO THÔNG", {
          x: 1.0,
          y: 1.25,
          w: 11.33,
          h: 0.5,
          fontSize: 19,
          fontFace: "Times New Roman",
          bold: true,
          color: blueText,
          align: "center",
        });

        // 10 Traffic Signs Grid (2 rows x 5 columns)
        const signs = slideData.gameGrid || [];
        signs.forEach((sign, idx) => {
          const col = idx % 5;
          const row = Math.floor(idx / 5);
          const x = 0.8 + col * 2.38;
          const y = 2.0 + row * 2.3;

          slide.addShape(pres.ShapeType.rect, {
            x,
            y,
            w: 2.25,
            h: 2.15,
            fill: { color: "FFFFFF" },
            line: { color: "1E3A8A", width: idx === 2 || idx === 8 ? 2.5 : 1 },
          });

          // Sign symbol placeholder
          const icon = row === 0 ? "⚠️" : "⛔";
          slide.addText(icon, {
            x,
            y: y + 0.15,
            w: 2.25,
            h: 0.85,
            fontSize: 32,
            align: "center",
            valign: "middle",
          });

          // Sign Name
          slide.addText(sign.name, {
            x: x + 0.1,
            y: y + 1.1,
            w: 2.05,
            h: 0.95,
            fontSize: 10.5,
            fontFace: "Times New Roman",
            bold: idx === 2 || idx === 8,
            color: idx === 2 || idx === 8 ? "1D4ED8" : "1C1917",
            align: "center",
            valign: "middle",
            lineSpacingMultiple: 1.15,
          });
        });
        break;
      }

      // ==========================================
      // SLIDE 4: CHUYỂN CẢNH KHÁM PHÁ
      // ==========================================
      case "transition_explore": {
        slide.addShape(pres.ShapeType.rect, {
          x: 0,
          y: 0,
          w: "100%",
          h: "100%",
          fill: { color: "FFFFFF" },
        });

        // Hanging Pink Notice Board
        slide.addShape(pres.ShapeType.roundRect, {
          x: 1.5,
          y: 1.4,
          w: 7.0,
          h: 4.8,
          rectRadius: 0.1,
          fill: { color: "FDF2F8" },
          line: { color: "F472B6", width: 2.5 },
          shadow: { type: "outer", color: "000000", blur: 6, offset: 3, opacity: 0.15 },
        });

        // Pin badge
        slide.addShape(pres.ShapeType.ellipse, {
          x: 4.7,
          y: 1.15,
          w: 0.6,
          h: 0.6,
          fill: { color: "EC4899" },
          line: { color: "BE185D", width: 1.5 },
        });

        slide.addText("KHÁM PHÁ", {
          x: 1.5,
          y: 2.8,
          w: 7.0,
          h: 1.8,
          fontSize: 44,
          fontFace: "Times New Roman",
          bold: true,
          color: redText,
          align: "center",
          valign: "middle",
        });

        // Right side Rainbow, books & kids representation
        slide.addShape(pres.ShapeType.roundRect, {
          x: 9.0,
          y: 2.0,
          w: 3.5,
          h: 4.2,
          rectRadius: 0.15,
          fill: { color: "F0FDF4" },
          line: { color: "86EFAC", width: 1.5 },
        });

        slide.addText("🌈\n📖  ✏️\n👧 👦", {
          x: 9.0,
          y: 2.2,
          w: 3.5,
          h: 2.8,
          fontSize: 34,
          align: "center",
          valign: "middle",
        });

        slide.addText("Cùng mở sách giáo khoa\nvà khám phá bài học mới!", {
          x: 9.1,
          y: 5.1,
          w: 3.3,
          h: 0.9,
          fontSize: 11,
          fontFace: "Times New Roman",
          italic: true,
          color: "166534",
          align: "center",
        });
        break;
      }

      // ==========================================
      // SLIDES 5, 6, 7: VĂN BẢN BÀI ĐỌC (ĐOẠN 1-2, ĐOẠN 3-4, ĐOẠN 5)
      // ==========================================
      case "reading_passage_1":
      case "reading_passage_2":
      case "reading_passage_3": {
        addClassroomSlideFrame(slide, slideData.headerDate, slideData.headerLesson);

        const paras = slideData.paragraphs || [];
        const fullText = paras.join("\n\n");

        slide.addText(fullText, {
          x: 0.8,
          y: 1.45,
          w: 11.73,
          h: slideData.author ? 4.6 : 5.1,
          fontSize: 16.5,
          fontFace: "Times New Roman",
          color: blueText,
          valign: "top",
          lineSpacingMultiple: 1.35,
        });

        if (slideData.author) {
          slide.addText(slideData.author, {
            x: 5.0,
            y: 6.2,
            w: 7.5,
            h: 0.5,
            fontSize: 15,
            fontFace: "Times New Roman",
            italic: true,
            color: blueText,
            align: "right",
          });
        }
        break;
      }

      // ==========================================
      // SLIDE 8: CHUYỂN CẢNH LUYỆN ĐỌC
      // ==========================================
      case "transition_read": {
        slide.addShape(pres.ShapeType.rect, {
          x: 0,
          y: 0,
          w: "100%",
          h: "100%",
          fill: { color: "FFFFFF" },
        });

        slide.addShape(pres.ShapeType.roundRect, {
          x: 2.0,
          y: 2.0,
          w: 9.33,
          h: 3.5,
          rectRadius: 0.3,
          fill: { color: "FFF1F2" },
          line: { color: "E11D48", width: 3 },
          shadow: { type: "outer", color: "000000", blur: 6, offset: 2, opacity: 0.15 },
        });

        slide.addText("👩‍🏫  LUYỆN ĐỌC  📖", {
          x: 2.0,
          y: 2.6,
          w: 9.33,
          h: 1.6,
          fontSize: 44,
          fontFace: "Times New Roman",
          bold: true,
          color: redText,
          align: "center",
          valign: "middle",
        });

        slide.addText("Đọc đúng, đọc to, rõ ràng và diễn cảm", {
          x: 2.0,
          y: 4.4,
          w: 9.33,
          h: 0.6,
          fontSize: 16,
          fontFace: "Times New Roman",
          italic: true,
          color: "9F1239",
          align: "center",
        });
        break;
      }

      // ==========================================
      // SLIDE 9: I. LUYỆN ĐỌC - 1. ĐỌC MẪU
      // ==========================================
      case "read_model": {
        addClassroomSlideFrame(slide, slideData.headerDate, slideData.headerLesson);

        slide.addText("I. LUYỆN ĐỌC", {
          x: 0.8,
          y: 1.4,
          w: 5.0,
          h: 0.5,
          fontSize: 18,
          fontFace: "Times New Roman",
          bold: true,
          color: redText,
          underline: { style: "sng" },
        });

        slide.addText("1. Đọc mẫu.", {
          x: 0.8,
          y: 2.0,
          w: 5.0,
          h: 0.5,
          fontSize: 18,
          fontFace: "Times New Roman",
          bold: true,
          color: redText,
          underline: { style: "sng" },
        });

        const lines = slideData.leftColumn?.content || [];
        const bodyText = lines.join("\n\n");

        slide.addText(bodyText, {
          x: 0.8,
          y: 2.65,
          w: 11.73,
          h: 4.1,
          fontSize: 16,
          fontFace: "Times New Roman",
          color: blueText,
          valign: "top",
          lineSpacingMultiple: 1.35,
        });
        break;
      }

      // ==========================================
      // SLIDE 10: 2. LUYỆN ĐỌC ĐÚNG (TỪ KHÓ & CÂU DÀI)
      // ==========================================
      case "read_correct": {
        addClassroomSlideFrame(slide, slideData.headerDate, slideData.headerLesson);

        slide.addText("I. LUYỆN ĐỌC", {
          x: 0.8,
          y: 1.35,
          w: 5.0,
          h: 0.45,
          fontSize: 18,
          fontFace: "Times New Roman",
          bold: true,
          color: redText,
          underline: { style: "sng" },
        });

        slide.addText("2. Luyện đọc đúng:", {
          x: 0.8,
          y: 1.95,
          w: 5.0,
          h: 0.45,
          fontSize: 18,
          fontFace: "Times New Roman",
          bold: true,
          color: redText,
          underline: { style: "sng" },
        });

        // 2.1 Tu kho
        slide.addText("2.1. Luyện đọc từ khó:", {
          x: 0.8,
          y: 2.7,
          w: 4.0,
          h: 0.5,
          fontSize: 17,
          fontFace: "Times New Roman",
          bold: true,
          color: redText,
          underline: { style: "sng" },
        });

        slide.addText("Chọi cỏ gà,    vỗ trống,    chỗ đổ rác,\nhoa ngũ sắc", {
          x: 5.0,
          y: 2.65,
          w: 7.5,
          h: 1.2,
          fontSize: 17,
          fontFace: "Times New Roman",
          italic: true,
          color: blueText,
          lineSpacingMultiple: 1.35,
        });

        // 2.2 Cau dai
        slide.addText("2.2. Luyện đọc câu dài:", {
          x: 0.8,
          y: 4.3,
          w: 4.0,
          h: 0.5,
          fontSize: 17,
          fontFace: "Times New Roman",
          bold: true,
          color: redText,
          underline: { style: "sng" },
        });

        slide.addText(
          "Họ hồ hởi/ cùng các bạn/ bắt tay vào dọn rác,/ xới đất,/ gieo hạt,/ trồng cây;// ngày ngày,/ tưới nước,/ nhổ cỏ,/ bắt sâu.//",
          {
            x: 0.8,
            y: 5.0,
            w: 11.73,
            h: 1.5,
            fontSize: 17,
            fontFace: "Times New Roman",
            italic: true,
            color: blueText,
            lineSpacingMultiple: 1.4,
          }
        );
        break;
      }

      // ==========================================
      // SLIDE 11: 3. LUYỆN ĐỌC DIỄN CẢM
      // ==========================================
      case "read_expression": {
        addClassroomSlideFrame(slide, slideData.headerDate, slideData.headerLesson);

        slide.addText("I. LUYỆN ĐỌC", {
          x: 0.8,
          y: 1.35,
          w: 5.0,
          h: 0.45,
          fontSize: 18,
          fontFace: "Times New Roman",
          bold: true,
          color: redText,
          underline: { style: "sng" },
        });

        slide.addText("3. Luyện đọc diễn cảm:", {
          x: 0.8,
          y: 1.95,
          w: 5.0,
          h: 0.45,
          fontSize: 18,
          fontFace: "Times New Roman",
          bold: true,
          color: redText,
          underline: { style: "sng" },
        });

        const bullets = (slideData.bulletPoints || []).join("\n\n");
        slide.addText(bullets, {
          x: 0.8,
          y: 2.65,
          w: 11.73,
          h: 2.6,
          fontSize: 16.5,
          fontFace: "Times New Roman",
          color: blueText,
          lineSpacingMultiple: 1.35,
        });

        // Magenta Cloud: LUYỆN ĐỌC DIỄN CẢM THEO NHÓM ĐÔI
        slide.addShape(pres.ShapeType.roundRect, {
          x: 3.2,
          y: 5.4,
          w: 6.93,
          h: 1.3,
          rectRadius: 0.25,
          fill: { color: "F43F5E" },
          line: { color: "BE123C", width: 2 },
          shadow: { type: "outer", color: "000000", blur: 4, offset: 2, opacity: 0.15 },
        });
        slide.addText("LUYỆN ĐỌC DIỄN CẢM\nTHEO NHÓM ĐÔI", {
          x: 3.2,
          y: 5.4,
          w: 6.93,
          h: 1.3,
          fontSize: 18,
          fontFace: "Times New Roman",
          bold: true,
          color: "FFFFFF",
          align: "center",
          valign: "middle",
          lineSpacingMultiple: 1.2,
        });
        break;
      }

      // ==========================================
      // SLIDE 12: 4. LUYỆN ĐỌC LẠI
      // ==========================================
      case "read_relay": {
        addClassroomSlideFrame(slide, slideData.headerDate, slideData.headerLesson);

        slide.addText("I. LUYỆN ĐỌC", {
          x: 0.8,
          y: 1.35,
          w: 5.0,
          h: 0.45,
          fontSize: 18,
          fontFace: "Times New Roman",
          bold: true,
          color: redText,
          underline: { style: "sng" },
        });

        slide.addText("4. Luyện đọc lại:", {
          x: 0.8,
          y: 1.95,
          w: 5.0,
          h: 0.45,
          fontSize: 18,
          fontFace: "Times New Roman",
          bold: true,
          color: redText,
          underline: { style: "sng" },
        });

        // Dark Blue Cloud: Đọc nối tiếp theo đoạn
        slide.addShape(pres.ShapeType.roundRect, {
          x: 1.0,
          y: 3.2,
          w: 5.2,
          h: 2.2,
          rectRadius: 0.3,
          fill: { color: "0F172A" },
          line: { color: "1E3A8A", width: 2 },
        });
        slide.addText("Đọc nối tiếp\ntheo đoạn", {
          x: 1.0,
          y: 3.2,
          w: 5.2,
          h: 2.2,
          fontSize: 24,
          fontFace: "Times New Roman",
          bold: true,
          color: "FFFFFF",
          align: "center",
          valign: "middle",
        });

        // Right side illustration caption
        slide.addShape(pres.ShapeType.roundRect, {
          x: 6.8,
          y: 2.6,
          w: 5.7,
          h: 3.8,
          rectRadius: 0.1,
          fill: { color: "EFF6FF" },
          line: { color: "93C5FD", width: 1.5 },
        });
        slide.addText("👨‍🏫  👩‍🎓 👨‍🎓 👩‍🎓\n\nCác nhóm học sinh cùng thi đua\nđọc nối tiếp truyền điện trước lớp", {
          x: 7.0,
          y: 2.8,
          w: 5.3,
          h: 3.4,
          fontSize: 16,
          fontFace: "Times New Roman",
          bold: true,
          color: blueText,
          align: "center",
          valign: "middle",
        });
        break;
      }

      // ==========================================
      // SLIDE 13: CHUYỂN CẢNH TIẾT 2 - TÌM HIỂU BÀI
      // ==========================================
      case "transition_comprehend": {
        slide.addShape(pres.ShapeType.rect, {
          x: 0,
          y: 0,
          w: "100%",
          h: "100%",
          fill: { color: "FFFFFF" },
        });

        slide.addShape(pres.ShapeType.roundRect, {
          x: 2.0,
          y: 1.8,
          w: 9.33,
          h: 3.8,
          rectRadius: 0.3,
          fill: { color: "FFF1F2" },
          line: { color: "E11D48", width: 3 },
          shadow: { type: "outer", color: "000000", blur: 6, offset: 2, opacity: 0.15 },
        });

        slide.addText("Tiết 2\nTÌM HIỂU BÀI", {
          x: 2.0,
          y: 2.2,
          w: 9.33,
          h: 2.4,
          fontSize: 42,
          fontFace: "Times New Roman",
          bold: true,
          color: redText,
          align: "center",
          valign: "middle",
          lineSpacingMultiple: 1.3,
        });

        slide.addText("Khám phá chi tiết, ý nghĩa và thông điệp của bài học", {
          x: 2.0,
          y: 4.8,
          w: 9.33,
          h: 0.6,
          fontSize: 16,
          fontFace: "Times New Roman",
          italic: true,
          color: "9F1239",
          align: "center",
        });
        break;
      }

      // ==========================================
      // SLIDE 14: 1. GIẢI NGHĨA TỪ
      // ==========================================
      case "vocabulary": {
        addClassroomSlideFrame(slide, slideData.headerDate, slideData.headerLesson);

        // Left box
        slide.addShape(pres.ShapeType.rect, {
          x: 0.8,
          y: 1.45,
          w: 5.7,
          h: 5.2,
          fill: { color: "FFFFFF" },
          line: { color: blueFrame, width: 2 },
        });

        slide.addText("TÌM HIỂU BÀI", {
          x: 1.0,
          y: 1.6,
          w: 5.3,
          h: 0.45,
          fontSize: 18,
          fontFace: "Times New Roman",
          bold: true,
          color: redText,
          underline: { style: "sng" },
        });

        slide.addText("1. Giải nghĩa từ", {
          x: 1.0,
          y: 2.15,
          w: 5.3,
          h: 0.45,
          fontSize: 18,
          fontFace: "Times New Roman",
          bold: true,
          color: redText,
          underline: { style: "sng" },
        });

        const leftLines = slideData.leftColumn?.content || [];
        slide.addText(leftLines.join("\n\n"), {
          x: 1.0,
          y: 2.8,
          w: 5.3,
          h: 3.5,
          fontSize: 16,
          fontFace: "Times New Roman",
          bold: true,
          color: blueText,
          valign: "top",
          lineSpacingMultiple: 1.35,
        });

        // Right box
        slide.addShape(pres.ShapeType.rect, {
          x: 6.8,
          y: 1.45,
          w: 5.7,
          h: 5.2,
          fill: { color: "FFFFFF" },
          line: { color: blueFrame, width: 2 },
        });

        const rightLines = slideData.rightColumn?.content || [];
        slide.addText(rightLines.join("\n\n"), {
          x: 7.0,
          y: 1.7,
          w: 5.3,
          h: 2.5,
          fontSize: 16,
          fontFace: "Times New Roman",
          bold: true,
          color: blueText,
          valign: "top",
          lineSpacingMultiple: 1.35,
        });

        // Image placeholder box inside right column
        slide.addShape(pres.ShapeType.roundRect, {
          x: 7.2,
          y: 4.2,
          w: 4.9,
          h: 2.2,
          rectRadius: 0.1,
          fill: { color: "FEF9C3" },
          line: { color: "EAB308", width: 1.5 },
        });
        slide.addText("🌺 🌸 🌼\n(Hình ảnh minh họa hoa ngũ sắc nở thành chùm rực rỡ)", {
          x: 7.2,
          y: 4.3,
          w: 4.9,
          h: 2.0,
          fontSize: 13,
          fontFace: "Times New Roman",
          italic: true,
          color: "713F12",
          align: "center",
          valign: "middle",
        });
        break;
      }

      // ==========================================
      // SLIDES 15, 16, 17, 18, 19: CÂU HỎI 1 ĐẾN 5 (2 CỘT)
      // ==========================================
      case "question_1":
      case "question_2":
      case "question_3":
      case "question_4":
      case "question_5": {
        addClassroomSlideFrame(slide, slideData.headerDate, slideData.headerLesson);

        // Left Column: TÌM HIỂU BÀI - Câu hỏi
        slide.addShape(pres.ShapeType.rect, {
          x: 0.8,
          y: 1.45,
          w: 5.7,
          h: 5.2,
          fill: { color: "FFFFFF" },
          line: { color: blueFrame, width: 2 },
        });

        slide.addText("TÌM HIỂU BÀI", {
          x: 1.0,
          y: 1.6,
          w: 5.3,
          h: 0.45,
          fontSize: 18,
          fontFace: "Times New Roman",
          bold: true,
          color: redText,
          underline: { style: "sng" },
        });

        slide.addText("2. Trả lời câu hỏi", {
          x: 1.0,
          y: 2.15,
          w: 5.3,
          h: 0.45,
          fontSize: 18,
          fontFace: "Times New Roman",
          bold: true,
          color: redText,
          underline: { style: "sng" },
        });

        const qLines = slideData.leftColumn?.content || [];
        slide.addText(qLines.join("\n\n"), {
          x: 1.0,
          y: 2.8,
          w: 5.3,
          h: 3.6,
          fontSize: 16.5,
          fontFace: "Times New Roman",
          bold: true,
          color: redText,
          valign: "top",
          lineSpacingMultiple: 1.35,
        });

        // Right Column: LÀM VIỆC CHUNG (Đáp án)
        slide.addShape(pres.ShapeType.rect, {
          x: 6.8,
          y: 1.45,
          w: 5.7,
          h: 5.2,
          fill: { color: "FFFFFF" },
          line: { color: blueFrame, width: 2 },
        });

        slide.addText("LÀM VIỆC CHUNG", {
          x: 7.0,
          y: 1.6,
          w: 5.3,
          h: 0.5,
          fontSize: 19,
          fontFace: "Times New Roman",
          bold: true,
          color: redText,
          align: "center",
        });

        const ansLines = slideData.rightColumn?.content || [];
        slide.addText(ansLines.join("\n\n"), {
          x: 7.0,
          y: 2.3,
          w: 5.3,
          h: 4.1,
          fontSize: 15.5,
          fontFace: "Times New Roman",
          bold: true,
          color: blueText,
          valign: "top",
          lineSpacingMultiple: 1.35,
        });
        break;
      }

      // ==========================================
      // SLIDE 20: 3. NỘI DUNG BÀI HỌC (KHUNG TRANG TRỌNG)
      // ==========================================
      case "lesson_core": {
        addClassroomSlideFrame(slide, slideData.headerDate, slideData.headerLesson);

        slide.addText("3. Nội dung", {
          x: 0.8,
          y: 1.4,
          w: 5.0,
          h: 0.5,
          fontSize: 18,
          fontFace: "Times New Roman",
          bold: true,
          color: redText,
          underline: { style: "sng" },
        });

        // Large Green Card for Core Message
        slide.addShape(pres.ShapeType.roundRect, {
          x: 1.2,
          y: 2.2,
          w: 10.93,
          h: 4.2,
          rectRadius: 0.2,
          fill: { color: "F0FDF4" },
          line: { color: "22C55E", width: 3 },
          shadow: { type: "outer", color: "000000", blur: 6, offset: 3, opacity: 0.15 },
        });

        slide.addText("🌿 🌿 🌿   Ý NGHĨA BÀI HỌC   🌿 🌿 🌿", {
          x: 1.5,
          y: 2.5,
          w: 10.33,
          h: 0.5,
          fontSize: 14,
          fontFace: "Times New Roman",
          bold: true,
          color: "15803D",
          align: "center",
        });

        slide.addText(slideData.coreMessage || "", {
          x: 1.8,
          y: 3.2,
          w: 9.73,
          h: 2.8,
          fontSize: 21,
          fontFace: "Times New Roman",
          bold: true,
          italic: true,
          color: redText,
          align: "center",
          valign: "middle",
          lineSpacingMultiple: 1.4,
        });
        break;
      }

      // ==========================================
      // SLIDE 21: 4. LUYỆN TẬP - BÀI 1 (BẢNG 2 CỘT)
      // ==========================================
      case "practice_task_1": {
        addClassroomSlideFrame(slide, slideData.headerDate, slideData.headerLesson);

        // Left box: De bai
        slide.addShape(pres.ShapeType.rect, {
          x: 0.8,
          y: 1.45,
          w: 5.7,
          h: 5.2,
          fill: { color: "FFFFFF" },
          line: { color: blueFrame, width: 2 },
        });

        slide.addText("4. Luyện tập theo văn bản đọc", {
          x: 1.0,
          y: 1.6,
          w: 5.3,
          h: 0.45,
          fontSize: 17,
          fontFace: "Times New Roman",
          bold: true,
          color: redText,
          underline: { style: "sng" },
        });

        const p1Lines = slideData.leftColumn?.content || [];
        slide.addText(p1Lines.join("\n\n"), {
          x: 1.0,
          y: 2.2,
          w: 5.3,
          h: 4.2,
          fontSize: 14.5,
          fontFace: "Times New Roman",
          bold: true,
          color: redText,
          valign: "top",
          lineSpacingMultiple: 1.3,
        });

        // Right box: Lam viec nhom & Bang 2 cot
        slide.addShape(pres.ShapeType.rect, {
          x: 6.8,
          y: 1.45,
          w: 5.7,
          h: 5.2,
          fill: { color: "FFFFFF" },
          line: { color: blueFrame, width: 2 },
        });

        slide.addText("LÀM VIỆC NHÓM", {
          x: 7.0,
          y: 1.6,
          w: 5.3,
          h: 0.45,
          fontSize: 18,
          fontFace: "Times New Roman",
          bold: true,
          color: redText,
          align: "center",
        });

        slide.addText("Làm việc nhóm 4, trình bày vào bảng và báo cáo trước lớp:", {
          x: 7.0,
          y: 2.15,
          w: 5.3,
          h: 0.6,
          fontSize: 14,
          fontFace: "Times New Roman",
          bold: true,
          color: blueText,
          align: "center",
        });

        // Table
        const tData = slideData.rightColumn?.tableData || [];
        const tableRows: pptxgen.TableRow[] = [
          [
            {
              text: "Động từ",
              options: {
                bold: true,
                fontSize: 14,
                fontFace: "Times New Roman",
                color: "FFFFFF",
                fill: { color: "1E3A8A" },
                align: "center",
              },
            },
            {
              text: "Tính từ",
              options: {
                bold: true,
                fontSize: 14,
                fontFace: "Times New Roman",
                color: "FFFFFF",
                fill: { color: "1E3A8A" },
                align: "center",
              },
            },
          ],
        ];

        tData.forEach((row) => {
          tableRows.push([
            {
              text: row.col1,
              options: {
                bold: true,
                fontSize: 14,
                fontFace: "Times New Roman",
                color: blueText,
                align: "center",
              },
            },
            {
              text: row.col2,
              options: {
                bold: true,
                fontSize: 14,
                fontFace: "Times New Roman",
                color: blueText,
                align: "center",
              },
            },
          ]);
        });

        slide.addTable(tableRows, {
          x: 7.2,
          y: 2.9,
          w: 4.9,
          colW: [2.45, 2.45],
          border: { type: "solid", pt: 1.5, color: "1E3A8A" },
        });
        break;
      }

      // ==========================================
      // SLIDE 22: BÀI 2 (PHIẾU HỌC TẬP)
      // ==========================================
      case "practice_task_2": {
        addClassroomSlideFrame(slide, slideData.headerDate, slideData.headerLesson);

        // Left box
        slide.addShape(pres.ShapeType.rect, {
          x: 0.8,
          y: 1.45,
          w: 5.7,
          h: 5.2,
          fill: { color: "FFFFFF" },
          line: { color: blueFrame, width: 2 },
        });

        slide.addText("4. Luyện tập theo văn bản đọc", {
          x: 1.0,
          y: 1.6,
          w: 5.3,
          h: 0.45,
          fontSize: 17,
          fontFace: "Times New Roman",
          bold: true,
          color: redText,
          underline: { style: "sng" },
        });

        const p2Lines = slideData.leftColumn?.content || [];
        slide.addText(p2Lines.join("\n\n"), {
          x: 1.0,
          y: 2.2,
          w: 5.3,
          h: 4.2,
          fontSize: 14.5,
          fontFace: "Times New Roman",
          bold: true,
          color: redText,
          valign: "top",
          lineSpacingMultiple: 1.3,
        });

        // Right box
        slide.addShape(pres.ShapeType.rect, {
          x: 6.8,
          y: 1.45,
          w: 5.7,
          h: 5.2,
          fill: { color: "FFFFFF" },
          line: { color: blueFrame, width: 2 },
        });

        slide.addText("LÀM VIỆC NHÓM", {
          x: 7.0,
          y: 1.6,
          w: 5.3,
          h: 0.45,
          fontSize: 18,
          fontFace: "Times New Roman",
          bold: true,
          color: redText,
          align: "center",
        });

        slide.addText("PHIẾU HỌC TẬP", {
          x: 7.0,
          y: 2.1,
          w: 5.3,
          h: 0.45,
          fontSize: 16,
          fontFace: "Times New Roman",
          bold: true,
          color: blueText,
          align: "center",
        });

        const rLines = slideData.rightColumn?.content || [];
        slide.addText(rLines.join("\n\n"), {
          x: 7.0,
          y: 2.7,
          w: 5.3,
          h: 3.7,
          fontSize: 14,
          fontFace: "Times New Roman",
          bold: true,
          color: blueText,
          valign: "top",
          lineSpacingMultiple: 1.35,
        });
        break;
      }

      // ==========================================
      // SLIDE 23: CHUYỂN CẢNH VẬN DỤNG
      // ==========================================
      case "transition_apply": {
        slide.addShape(pres.ShapeType.rect, {
          x: 0,
          y: 0,
          w: "100%",
          h: "100%",
          fill: { color: "FFFFFF" },
        });

        slide.addShape(pres.ShapeType.roundRect, {
          x: 2.0,
          y: 2.0,
          w: 9.33,
          h: 3.5,
          rectRadius: 0.2,
          fill: { color: "FDF2F8" },
          line: { color: "BE185D", width: 2.5 },
          shadow: { type: "outer", color: "000000", blur: 6, offset: 2, opacity: 0.15 },
        });

        slide.addText("🎀  VẬN DỤNG  🎀", {
          x: 2.0,
          y: 2.6,
          w: 9.33,
          h: 1.6,
          fontSize: 44,
          fontFace: "Times New Roman",
          bold: true,
          color: redText,
          align: "center",
          valign: "middle",
        });

        slide.addText("Liên hệ thực tế đời sống và hành động thiết thực", {
          x: 2.0,
          y: 4.4,
          w: 9.33,
          h: 0.6,
          fontSize: 16,
          fontFace: "Times New Roman",
          italic: true,
          color: "9D174D",
          align: "center",
        });
        break;
      }

      // ==========================================
      // SLIDE 24: VẬN DỤNG THỰC TẾ (NÊN LÀM / KHÔNG NÊN LÀM)
      // ==========================================
      case "apply_action": {
        addClassroomSlideFrame(slide, slideData.headerDate, slideData.headerLesson);

        slide.addText(
          slideData.subtitle || "HS suy nghĩ cá nhân và nêu một số việc làm tốt tại trường, lớp hoặc nơi em ở.",
          {
            x: 0.8,
            y: 1.4,
            w: 11.73,
            h: 0.6,
            fontSize: 16.5,
            fontFace: "Times New Roman",
            bold: true,
            color: redText,
          }
        );

        // Column 1: Dos and Don'ts
        slide.addShape(pres.ShapeType.roundRect, {
          x: 0.8,
          y: 2.2,
          w: 7.0,
          h: 4.5,
          rectRadius: 0.1,
          fill: { color: "FFFFFF" },
          line: { color: blueFrame, width: 2 },
        });

        const dosText = `+ Những việc nên làm:\n  ${(slideData.dos || []).join(", ")}.`;
        const dontsText = `+ Những việc không nên làm:\n  ${(slideData.donts || []).join(", ")}...`;

        slide.addText(`${dosText}\n\n${dontsText}`, {
          x: 1.1,
          y: 2.4,
          w: 6.4,
          h: 4.0,
          fontSize: 16.5,
          fontFace: "Times New Roman",
          bold: true,
          color: blueText,
          valign: "top",
          lineSpacingMultiple: 1.35,
        });

        // Column 2: Illustration representation
        slide.addShape(pres.ShapeType.roundRect, {
          x: 8.2,
          y: 2.2,
          w: 4.33,
          h: 4.5,
          rectRadius: 0.1,
          fill: { color: "FEF3C7" },
          line: { color: "F59E0B", width: 1.5 },
        });

        slide.addText("👫 📝 🌸\n\nHọc sinh tích cực thảo luận,\nđề xuất các việc làm bảo vệ môi trường", {
          x: 8.3,
          y: 2.5,
          w: 4.13,
          h: 3.8,
          fontSize: 16,
          fontFace: "Times New Roman",
          bold: true,
          color: "78350F",
          align: "center",
          valign: "middle",
        });
        break;
      }

      // ==========================================
      // SLIDE: KHỞI ĐỘNG HÌNH ẢNH / HOẠT ĐỘNG
      // ==========================================
      case "warmup_picture": {
        addClassroomSlideFrame(slide, slideData.headerDate, "KHỞI ĐỘNG");

        slide.addText(slideData.title.toUpperCase(), {
          x: 1.0,
          y: 1.25,
          w: 11.33,
          h: 0.5,
          fontSize: 19,
          fontFace: "Times New Roman",
          bold: true,
          color: blueText,
          align: "center",
        });

        // Large illustration box
        slide.addShape(pres.ShapeType.roundRect, {
          x: 1.5,
          y: 1.9,
          w: 10.33,
          h: 3.5,
          rectRadius: 0.15,
          fill: { color: "FEF3C7" },
          line: { color: "F59E0B", width: 2 },
        });

        if (slideData.imageLabel) {
          slide.addShape(pres.ShapeType.roundRect, {
            x: 2.0,
            y: 2.1,
            w: 9.33,
            h: 0.6,
            rectRadius: 0.1,
            fill: { color: "F59E0B" },
          });
          slide.addText(`🖼️ ${slideData.imageLabel}`, {
            x: 2.0,
            y: 2.1,
            w: 9.33,
            h: 0.6,
            fontSize: 14,
            fontFace: "Times New Roman",
            bold: true,
            color: "FFFFFF",
            align: "center",
            valign: "middle",
          });
        }

        const paragraphs = slideData.paragraphs || [];
        slide.addText(paragraphs.join("\n\n"), {
          x: 2.0,
          y: slideData.imageLabel ? 2.9 : 2.2,
          w: 9.33,
          h: 2.3,
          fontSize: 17,
          fontFace: "Times New Roman",
          bold: true,
          color: "78350F",
          align: "center",
          valign: "middle",
          lineSpacingMultiple: 1.35,
        });

        // Bottom cheer banner
        slide.addShape(pres.ShapeType.rect, {
          x: 0,
          y: 5.7,
          w: "100%",
          h: 1.8,
          fill: { color: "ECFDF5" },
        });
        slide.addText("🌟  CHÚC CÁC EM CÓ MỘT TIẾT HỌC THẬT VUI VẺ VÀ BỔ ÍCH!  🌟", {
          x: 0,
          y: 5.7,
          w: "100%",
          h: 1.8,
          fontSize: 16,
          fontFace: "Times New Roman",
          bold: true,
          color: "047857",
          align: "center",
          valign: "middle",
        });
        break;
      }

      // ==========================================
      // SLIDE: NỐI CỘT A - B (DANH TỪ, ĐỘNG TỪ, TÍNH TỪ)
      // ==========================================
      case "matching_concepts": {
        addClassroomSlideFrame(slide, slideData.headerDate, slideData.headerLesson || "KHÁM PHÁ");

        const prompt = slideData.matchingData?.prompt || slideData.title;
        slide.addText(prompt, {
          x: 0.8,
          y: 1.25,
          w: 11.73,
          h: 0.5,
          fontSize: 18,
          fontFace: "Times New Roman",
          bold: true,
          color: blueText,
          align: "left",
        });

        const colA = slideData.matchingData?.colA || [];
        const colB = slideData.matchingData?.colB || [];

        // Column A items (Left)
        colA.forEach((item, idx) => {
          const yPos = 2.0 + idx * 1.5;
          slide.addShape(pres.ShapeType.roundRect, {
            x: 0.8,
            y: yPos,
            w: 3.2,
            h: 1.2,
            rectRadius: 0.15,
            fill: { color: "DBEAFE" },
            line: { color: "2563EB", width: 2 },
          });
          slide.addText(item.text, {
            x: 0.8,
            y: yPos,
            w: 3.2,
            h: 1.2,
            fontSize: 18,
            fontFace: "Times New Roman",
            bold: true,
            color: "1E40AF",
            align: "center",
            valign: "middle",
          });
        });

        // Center arrows
        colA.forEach((_, idx) => {
          const yPos = 2.0 + idx * 1.5;
          slide.addText("➔", {
            x: 4.1,
            y: yPos,
            w: 0.8,
            h: 1.2,
            fontSize: 26,
            bold: true,
            color: redText,
            align: "center",
            valign: "middle",
          });
        });

        // Column B items (Right)
        colB.forEach((item, idx) => {
          const yPos = 2.0 + idx * 1.5;
          slide.addShape(pres.ShapeType.roundRect, {
            x: 5.0,
            y: yPos,
            w: 7.5,
            h: 1.2,
            rectRadius: 0.15,
            fill: { color: "FEF3C7" },
            line: { color: "F59E0B", width: 2 },
          });
          slide.addText(item.text, {
            x: 5.2,
            y: yPos,
            w: 7.1,
            h: 1.2,
            fontSize: 15,
            fontFace: "Times New Roman",
            bold: true,
            color: "78350F",
            align: "left",
            valign: "middle",
          });
        });
        break;
      }

      // ==========================================
      // SLIDE: CHUYỂN CẢNH LUYỆN TẬP
      // ==========================================
      case "transition_practice": {
        slide.addShape(pres.ShapeType.rect, {
          x: 0,
          y: 0,
          w: "100%",
          h: "100%",
          fill: { color: "FFFFFF" },
        });

        slide.addText("⭐  ✨  ⭐  ✨  ⭐", {
          x: 0.5,
          y: 0.5,
          w: 12.33,
          h: 0.5,
          fontSize: 18,
          align: "center",
        });

        slide.addText("Luyện tập", {
          x: 1.0,
          y: 2.0,
          w: 11.33,
          h: 1.8,
          fontSize: 56,
          fontFace: "Georgia",
          bold: true,
          italic: true,
          color: "7C3AED",
          align: "center",
          valign: "middle",
          shadow: { type: "outer", color: "C4B5FD", blur: 8, offset: 3, opacity: 0.8 },
        });

        slide.addShape(pres.ShapeType.rect, {
          x: 0,
          y: 5.8,
          w: "100%",
          h: 1.7,
          fill: { color: "EDE9FE" },
        });
        slide.addText("📝 📝 📝   CẢ LỚP CÙNG THỰC HÀNH VÀ HOÀN THÀNH BÀI TẬP!   📝 📝 📝", {
          x: 0,
          y: 5.8,
          w: "100%",
          h: 1.7,
          fontSize: 15,
          fontFace: "Times New Roman",
          bold: true,
          color: "5B21B6",
          align: "center",
          valign: "middle",
        });
        break;
      }

      // ==========================================
      // SLIDE: TRÒ CHƠI CÓ ĐẾM NGƯỢC THỜI GIAN (90 GIÂY)
      // ==========================================
      case "game_round_timer": {
        const game = slideData.gameRoundData;
        addClassroomSlideFrame(slide, slideData.headerDate, game?.gameTitle || "TRÒ CHƠI");

        // Top Left: Round Badge
        if (game?.roundName) {
          slide.addShape(pres.ShapeType.roundRect, {
            x: 0.8,
            y: 1.2,
            w: 2.2,
            h: 0.55,
            rectRadius: 0.1,
            fill: { color: "2563EB" },
          });
          slide.addText(game.roundName, {
            x: 0.8,
            y: 1.2,
            w: 2.2,
            h: 0.55,
            fontSize: 14,
            fontFace: "Times New Roman",
            bold: true,
            color: "FFFFFF",
            align: "center",
            valign: "middle",
          });
        }

        // Top Right: 90 Seconds Timer Badge
        slide.addShape(pres.ShapeType.roundRect, {
          x: 10.2,
          y: 1.2,
          w: 2.3,
          h: 0.55,
          rectRadius: 0.1,
          fill: { color: "DC2626" },
        });
        slide.addText(`⏱️ ${game?.timeSeconds || 90} GIÂY`, {
          x: 10.2,
          y: 1.2,
          w: 2.3,
          h: 0.55,
          fontSize: 14,
          fontFace: "Times New Roman",
          bold: true,
          color: "FFFFFF",
          align: "center",
          valign: "middle",
        });

        let yOffset = 1.9;

        // Passage box if provided
        if (game?.readingPassage) {
          slide.addShape(pres.ShapeType.roundRect, {
            x: 0.8,
            y: yOffset,
            w: 11.73,
            h: 1.7,
            rectRadius: 0.1,
            fill: { color: "F8FAFC" },
            line: { color: "CBD5E1", width: 1 },
          });
          slide.addText(game.readingPassage, {
            x: 1.0,
            y: yOffset + 0.1,
            w: 11.33,
            h: 1.5,
            fontSize: 12.5,
            fontFace: "Times New Roman",
            italic: true,
            color: "334155",
            align: "justify",
            valign: "top",
            lineSpacingMultiple: 1.2,
          });
          yOffset += 1.85;
        }

        const bottomBoxH = 6.8 - yOffset;

        // Left Box: Tasks / Questions
        slide.addShape(pres.ShapeType.roundRect, {
          x: 0.8,
          y: yOffset,
          w: 5.7,
          h: bottomBoxH,
          rectRadius: 0.1,
          fill: { color: "EFF6FF" },
          line: { color: "3B82F6", width: 1.5 },
        });
        slide.addText("📌 YÊU CẦU:", {
          x: 1.0,
          y: yOffset + 0.1,
          w: 5.3,
          h: 0.35,
          fontSize: 13,
          fontFace: "Times New Roman",
          bold: true,
          color: "1D4ED8",
        });
        slide.addText((game?.taskPrompt || []).join("\n"), {
          x: 1.0,
          y: yOffset + 0.45,
          w: 5.3,
          h: bottomBoxH - 0.55,
          fontSize: 14,
          fontFace: "Times New Roman",
          bold: true,
          color: "1E3A8A",
          valign: "top",
          lineSpacingMultiple: 1.3,
        });

        // Right Box: Answers
        slide.addShape(pres.ShapeType.roundRect, {
          x: 6.8,
          y: yOffset,
          w: 5.7,
          h: bottomBoxH,
          rectRadius: 0.1,
          fill: { color: "F0FDF4" },
          line: { color: "16A34A", width: 1.5 },
        });
        slide.addText("✅ ĐÁP ÁN:", {
          x: 7.0,
          y: yOffset + 0.1,
          w: 5.3,
          h: 0.35,
          fontSize: 13,
          fontFace: "Times New Roman",
          bold: true,
          color: "15803D",
        });
        slide.addText((game?.answerText || []).join("\n\n"), {
          x: 7.0,
          y: yOffset + 0.45,
          w: 5.3,
          h: bottomBoxH - 0.55,
          fontSize: 14,
          fontFace: "Times New Roman",
          bold: true,
          color: "14532D",
          valign: "top",
          lineSpacingMultiple: 1.3,
        });
        break;
      }

      // ==========================================
      // SLIDE: TỔNG KẾT TRÒ CHƠI
      // ==========================================
      case "game_summary": {
        addClassroomSlideFrame(slide, slideData.headerDate, "TỔNG KẾT");

        slide.addShape(pres.ShapeType.roundRect, {
          x: 1.5,
          y: 1.8,
          w: 10.33,
          h: 4.0,
          rectRadius: 0.2,
          fill: { color: "FDF2F8" },
          line: { color: "EC4899", width: 2 },
        });

        slide.addText("🏆 🏆 🏆", {
          x: 1.5,
          y: 2.0,
          w: 10.33,
          h: 0.6,
          fontSize: 28,
          align: "center",
        });

        slide.addText(slideData.cloudText || "TỔNG KẾT TRÒ CHƠI", {
          x: 1.5,
          y: 2.7,
          w: 10.33,
          h: 0.8,
          fontSize: 32,
          fontFace: "Times New Roman",
          bold: true,
          color: "BE185D",
          align: "center",
          valign: "middle",
        });

        slide.addText(
          slideData.subtitle ||
            "Cô giáo và học sinh cùng tuyên dương các nhóm đã hoàn thành xuất sắc các vòng thi!",
          {
            x: 2.0,
            y: 3.7,
            w: 9.33,
            h: 1.5,
            fontSize: 18,
            fontFace: "Times New Roman",
            bold: true,
            color: "831843",
            align: "center",
            valign: "middle",
            lineSpacingMultiple: 1.35,
          }
        );
        break;
      }

      // ==========================================
      // SLIDE: PHIẾU ĐỌC SÁCH (MẪU TRỐNG HOẶC ĐÃ ĐIỀN)
      // ==========================================
      case "reading_log_template":
      case "reading_log_filled": {
        addClassroomSlideFrame(slide, slideData.headerDate, slideData.headerLesson || "PHIẾU ĐỌC SÁCH");

        const log = slideData.readingLogData;
        slide.addText(slideData.title.toUpperCase(), {
          x: 0.8,
          y: 1.25,
          w: 11.73,
          h: 0.5,
          fontSize: 18,
          fontFace: "Times New Roman",
          bold: true,
          color: blueText,
          align: "center",
        });

        // Main table card
        slide.addShape(pres.ShapeType.roundRect, {
          x: 1.0,
          y: 1.8,
          w: 11.33,
          h: 4.8,
          rectRadius: 0.1,
          fill: { color: "FFFFFF" },
          line: { color: "3B82F6", width: 2 },
        });

        // Row 1: Book Title & Author
        slide.addText(`Tên câu chuyện: ${log?.bookTitle || "..........................................................."}`, {
          x: 1.3,
          y: 2.0,
          w: 5.5,
          h: 0.6,
          fontSize: 14,
          fontFace: "Times New Roman",
          bold: true,
          color: "1E3A8A",
        });
        slide.addText(`Tác giả: ${log?.author || "..........................................................."}`, {
          x: 6.9,
          y: 2.0,
          w: 5.2,
          h: 0.6,
          fontSize: 14,
          fontFace: "Times New Roman",
          bold: true,
          color: "1E3A8A",
        });

        // Row 2: Date & Favorite character
        slide.addText(`Ngày đọc: ${log?.readDate || "..........................................................."}`, {
          x: 1.3,
          y: 2.65,
          w: 5.5,
          h: 0.6,
          fontSize: 14,
          fontFace: "Times New Roman",
          bold: true,
          color: "1E3A8A",
        });
        slide.addText(`Nhân vật em thích: ${log?.favoriteCharacter || "..........................................................."}`, {
          x: 6.9,
          y: 2.65,
          w: 5.2,
          h: 0.6,
          fontSize: 14,
          fontFace: "Times New Roman",
          bold: true,
          color: "1E3A8A",
        });

        // Row 3: Main content
        slide.addText("Nội dung chính câu chuyện:", {
          x: 1.3,
          y: 3.3,
          w: 10.7,
          h: 0.35,
          fontSize: 14,
          fontFace: "Times New Roman",
          bold: true,
          color: "1E3A8A",
        });
        slide.addText(log?.mainContent || ".....................................................................................................................................................................................................", {
          x: 1.3,
          y: 3.65,
          w: 10.7,
          h: 0.8,
          fontSize: 13.5,
          fontFace: "Times New Roman",
          color: log?.isSample ? "14532D" : "64748B",
          bold: log?.isSample,
          lineSpacingMultiple: 1.25,
        });

        // Row 4: Interesting Detail
        slide.addText("Chi tiết thú vị hoặc sự việc đáng nhớ:", {
          x: 1.3,
          y: 4.5,
          w: 10.7,
          h: 0.35,
          fontSize: 14,
          fontFace: "Times New Roman",
          bold: true,
          color: "1E3A8A",
        });
        slide.addText(log?.interestingDetail || ".....................................................................................................................................................................................................", {
          x: 1.3,
          y: 4.85,
          w: 10.7,
          h: 0.8,
          fontSize: 13.5,
          fontFace: "Times New Roman",
          color: log?.isSample ? "14532D" : "64748B",
          bold: log?.isSample,
          lineSpacingMultiple: 1.25,
        });

        // Row 5: Stars
        slide.addText(
          `Mức độ yêu thích: ${log?.isSample ? "⭐⭐⭐⭐⭐ (5 sao vàng)" : "⭐ ⭐ ⭐ ⭐ ⭐"}`,
          {
            x: 1.3,
            y: 5.75,
            w: 10.7,
            h: 0.6,
            fontSize: 15,
            fontFace: "Times New Roman",
            bold: true,
            color: "D97706",
          }
        );
        break;
      }

      // ==========================================
      // SLIDE: SINH HOẠT NHÓM & TRAO ĐỔI VỚI BẠN
      // ==========================================
      case "group_discussion": {
        addClassroomSlideFrame(slide, slideData.headerDate, slideData.headerLesson || "SINH HOẠT NHÓM");

        slide.addShape(pres.ShapeType.roundRect, {
          x: 0.8,
          y: 1.4,
          w: 5.7,
          h: 5.2,
          rectRadius: 0.1,
          fill: { color: "EFF6FF" },
          line: { color: "3B82F6", width: 2 },
        });
        slide.addText(slideData.leftColumn?.header || "3. Trao đổi với bạn", {
          x: 1.0,
          y: 1.55,
          w: 5.3,
          h: 0.5,
          fontSize: 17,
          fontFace: "Times New Roman",
          bold: true,
          color: "1D4ED8",
        });
        slide.addText((slideData.leftColumn?.content || []).join("\n\n"), {
          x: 1.0,
          y: 2.2,
          w: 5.3,
          h: 4.2,
          fontSize: 15,
          fontFace: "Times New Roman",
          bold: true,
          color: "1E3A8A",
          lineSpacingMultiple: 1.35,
        });

        slide.addShape(pres.ShapeType.roundRect, {
          x: 6.8,
          y: 1.4,
          w: 5.7,
          h: 5.2,
          rectRadius: 0.1,
          fill: { color: "FEF3C7" },
          line: { color: "F59E0B", width: 2 },
        });
        slide.addText(slideData.rightColumn?.header || "SINH HOẠT NHÓM", {
          x: 7.0,
          y: 1.55,
          w: 5.3,
          h: 0.5,
          fontSize: 17,
          fontFace: "Times New Roman",
          bold: true,
          color: "B45309",
        });
        slide.addText((slideData.rightColumn?.content || []).join("\n\n"), {
          x: 7.0,
          y: 2.2,
          w: 5.3,
          h: 4.2,
          fontSize: 15,
          fontFace: "Times New Roman",
          bold: true,
          color: "78350F",
          lineSpacingMultiple: 1.35,
        });
        break;
      }

      // ==========================================
      // SLIDE: VẬN DỤNG VIẾT VÀO VỞ / KỂ CHUYỆN
      // ==========================================
      case "apply_writing": {
        addClassroomSlideFrame(slide, slideData.headerDate, slideData.headerLesson || "VẬN DỤNG");

        slide.addShape(pres.ShapeType.roundRect, {
          x: 1.2,
          y: 1.5,
          w: 10.93,
          h: 5.0,
          rectRadius: 0.15,
          fill: { color: "FEF9C3" },
          line: { color: "EAB308", width: 2 },
        });

        slide.addText("✏️ " + slideData.title.toUpperCase(), {
          x: 1.5,
          y: 1.7,
          w: 10.33,
          h: 0.6,
          fontSize: 20,
          fontFace: "Times New Roman",
          bold: true,
          color: "A16207",
          align: "center",
        });

        if (slideData.subtitle) {
          slide.addText(slideData.subtitle, {
            x: 1.5,
            y: 2.4,
            w: 10.33,
            h: 0.6,
            fontSize: 16,
            fontFace: "Times New Roman",
            bold: true,
            color: "713F12",
            align: "center",
          });
        }

        const bulletList = slideData.bulletPoints || slideData.paragraphs || [];
        slide.addText(bulletList.join("\n\n"), {
          x: 1.6,
          y: slideData.subtitle ? 3.1 : 2.6,
          w: 10.13,
          h: 3.0,
          fontSize: 17,
          fontFace: "Times New Roman",
          bold: true,
          color: "451A03",
          valign: "top",
          lineSpacingMultiple: 1.4,
        });
        break;
      }

      // ==========================================
      // SLIDE 25: TẠM BIỆT!
      // ==========================================
      case "goodbye": {
        slide.addShape(pres.ShapeType.rect, {
          x: 0,
          y: 0,
          w: "100%",
          h: "100%",
          fill: { color: "FFFBEB" },
        });

        // Celebratory Balloons & Candies
        slide.addText("🎈 🎈  🍬  🍭  🌈  🍭  🍬  🎈 🎈", {
          x: 0.5,
          y: 0.6,
          w: 12.33,
          h: 0.6,
          fontSize: 24,
          align: "center",
        });

        // Huge 3D Gold "TẠM BIỆT!"
        slide.addText("TẠM BIỆT!", {
          x: 1.0,
          y: 1.8,
          w: 11.33,
          h: 2.2,
          fontSize: 68,
          fontFace: "Times New Roman",
          bold: true,
          color: "F59E0B",
          align: "center",
          valign: "middle",
          shadow: { type: "outer", color: "B45309", blur: 8, offset: 4, opacity: 0.8 },
        });

        // Blessing note for teachers and students
        slide.addShape(pres.ShapeType.roundRect, {
          x: 1.5,
          y: 4.6,
          w: 10.33,
          h: 1.5,
          rectRadius: 0.15,
          fill: { color: "FFFFFF" },
          line: { color: "F59E0B", width: 2 },
          shadow: { type: "outer", color: "000000", blur: 6, offset: 2, opacity: 0.1 },
        });

        slide.addText(
          "💐 KÍNH CHÚC QUÝ THẦY CÔ MẠNH KHỎE!\nCHÚC CÁC EM HỌC SINH CHĂM NGOAN, HỌC GIỎI! 💐",
          {
            x: 1.5,
            y: 4.65,
            w: 10.33,
            h: 1.4,
            fontSize: 18,
            fontFace: "Times New Roman",
            bold: true,
            color: redText,
            align: "center",
            valign: "middle",
            lineSpacingMultiple: 1.3,
          }
        );
        break;
      }
    }
  });

  return pres;
}

/**
 * Creates a complete presentation-ready PowerPoint (.pptx) file for a single LessonPlan.
 * Produces the full 25-slide deck matching the exact PDF uploaded by the teacher!
 */
export function buildLessonPresentation(
  plan: LessonPlan,
  schoolInfo: SchoolInfo
): pptxgen {
  const deck = buildDetailedClassroomDeck(plan, schoolInfo);
  return buildClassroomTeachingPresentation(deck);
}

/**
 * Directly downloads a single lesson plan's PowerPoint presentation (.pptx) to the user's computer.
 */
export async function downloadLessonPresentationPptx(
  plan: LessonPlan,
  schoolInfo: SchoolInfo
): Promise<{ success: boolean; filename: string }> {
  try {
    const pres = buildLessonPresentation(plan, schoolInfo);
    const cleanTitleStr = (plan.lessonTitle || "BaiGiang")
      .replace(/[/\\?%*:|"<>]/g, "-")
      .replace(/\s+/g, "_");
    const cleanSubject = (plan.subject || "MonHoc")
      .replace(/[/\\?%*:|"<>]/g, "-")
      .replace(/\s+/g, "_");
    const filename = `BaiGiang_ChuanLop_${cleanSubject}_Lop${plan.className}_TietPPCT_${plan.curriculumPeriod || 1}_${cleanTitleStr}.pptx`;

    await pres.writeFile({ fileName: filename });
    return { success: true, filename };
  } catch (err) {
    console.error("Lỗi khi tạo và tải bài giảng PowerPoint:", err);
    throw err;
  }
}

/**
 * Generates and downloads a ZIP package containing all lesson presentations (.pptx)
 * for the given list of lesson plans for the entire week directly to the computer!
 */
export async function downloadWeeklyPresentationPackageZip(
  plans: LessonPlan[],
  schoolInfo: SchoolInfo,
  onProgress?: (current: number, total: number, currentPlanName: string) => void
): Promise<{ success: boolean; filename: string; totalFiles: number }> {
  try {
    const authenticPlans = plans.filter((p) => isAuthenticLectureAvailable(p.lessonTitle, p.subject));
    if (authenticPlans.length === 0) {
      throw new Error("Không có bài giảng PowerPoint mẫu nào tương thích với tệp gửi lên trong danh sách để đóng gói.");
    }

    const zip = new JSZip();
    const folderName = `BoBaiGiang_PowerPoint_Tuan_${schoolInfo.week}_GV_${(schoolInfo.teacherName || "GiaoVien").replace(/\s+/g, "_")}`;
    const rootFolder = zip.folder(folderName) || zip;

    const total = authenticPlans.length;
    for (let i = 0; i < total; i++) {
      const plan = authenticPlans[i];
      if (onProgress) {
        onProgress(i + 1, total, plan.lessonTitle);
      }

      const pres = buildLessonPresentation(plan, schoolInfo);
      const blob = (await pres.write({ outputType: "blob" })) as Blob;

      const cleanTitleStr = (plan.lessonTitle || "BaiGiang")
        .replace(/[/\\?%*:|"<>]/g, "-")
        .replace(/\s+/g, "_");
      const cleanSubject = (plan.subject || "MonHoc")
        .replace(/[/\\?%*:|"<>]/g, "-")
        .replace(/\s+/g, "_");
      const dayStr = (plan.dayOfWeek || "Thu").replace(/\s+/g, "");
      const fileName = `${i + 1}_${dayStr}_${cleanSubject}_Lop${plan.className}_Tiet${plan.curriculumPeriod || 1}_${cleanTitleStr}.pptx`;

      rootFolder.file(fileName, blob);
    }

    // Add a README info file in the ZIP
    const readmeContent = `TRỌN BỘ BÀI GIẢNG ĐIỆN TỬ POWERPOINT (.PPTX) SOẠN SẴN GIẢNG TRÊN LỚP TUẦN ${schoolInfo.week}
(Chuẩn 25 Slide sư phạm tương tác thực tế - Mẫu bài giảng dự giờ thăm lớp Tiểu học)

Trường: ${schoolInfo.schoolName}
Giáo viên: ${schoolInfo.teacherName} (Lớp: ${schoolInfo.className})
Năm học: ${schoolInfo.academicYear || "2024 - 2025"}
Tổng số bài giảng: ${total} bài PowerPoint chuẩn tỷ lệ 16:9

Cấu trúc từng bài giảng PowerPoint gồm 25 Slide đầy đủ theo mẫu giáo viên gửi:
- Slide 1: Bìa bài giảng Chào mừng quý thầy cô về dự giờ thăm lớp
- Slide 2: Slide chuyển cảnh KHỞI ĐỘNG (cây tình bạn, các bạn nhỏ vui hát)
- Slide 3: Trò chơi Khởi động: BIỂN BÁO GIAO THÔNG (bảng 10 ô biển báo giao thông)
- Slide 4: Slide chuyển cảnh KHÁM PHÁ (bảng nơ hồng, bút chì, cầu vồng)
- Slide 5: Văn bản bài đọc - Đoạn 1 và Đoạn 2
- Slide 6: Văn bản bài đọc - Đoạn 3 và Đoạn 4
- Slide 7: Văn bản bài đọc - Đoạn 5 và Tên tác giả
- Slide 8: Slide chuyển cảnh LUYỆN ĐỌC
- Slide 9: I. Luyện đọc - 1. Đọc mẫu & Chia 5 đoạn
- Slide 10: 2. Luyện đọc đúng - 2.1. Từ khó; 2.2. Câu dài (ngắt / và nghỉ //)
- Slide 11: 3. Luyện đọc diễn cảm theo nhóm đôi
- Slide 12: 4. Luyện đọc lại - Đọc nối tiếp theo đoạn
- Slide 13: Slide chuyển cảnh TIẾT 2 - TÌM HIỂU BÀI
- Slide 14: 1. Giải nghĩa từ (Minh họa thực tế)
- Slide 15: Câu hỏi 1 (2 cột: Câu hỏi & Làm việc chung)
- Slide 16: Câu hỏi 2 (2 cột)
- Slide 17: Câu hỏi 3 (2 cột)
- Slide 18: Câu hỏi 4 (2 cột)
- Slide 19: Câu hỏi 5 (2 cột)
- Slide 20: 3. Nội dung bài học (khung hoa lá xanh trang trọng)
- Slide 21: 4. Luyện tập theo văn bản đọc - Bài 1 (Bảng phân loại Động từ - Tính từ)
- Slide 22: Bài 2 (Phiếu học tập tìm từ thay thế)
- Slide 23: Slide chuyển cảnh VẬN DỤNG
- Slide 24: Vận dụng thực tế (Những việc nên làm / Những việc không nên làm)
- Slide 25: TẠM BIỆT! (Kính chúc quý thầy cô mạnh khỏe, chúc các em chăm ngoan học giỏi)

Tệp được tự động xuất bởi Hệ thống Quản Lý TKB & Soạn KHBD Tiểu Học.`;

    rootFolder.file("ThongTin_BoBaiGiang_25Slide.txt", readmeContent);

    const zipBlob = await zip.generateAsync({
      type: "blob",
      compression: "DEFLATE",
      compressionOptions: { level: 6 },
    });

    const zipFilename = `TronBo_BaiGiang_25Slide_Tuan_${schoolInfo.week}_GV_${(schoolInfo.teacherName || "GiaoVien").replace(/\s+/g, "_")}.zip`;
    saveAs(zipBlob, zipFilename);

    return { success: true, filename: zipFilename, totalFiles: total };
  } catch (err) {
    console.error("Lỗi khi đóng gói tải bộ bài giảng zip:", err);
    throw err;
  }
}
