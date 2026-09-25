import { LessonPlan, SchoolInfo } from "../types";

export type SlideCategory =
  | "cover" // Slide 1: Bìa chào mừng dự giờ
  | "transition_warmup" // Slide 2: Khởi động chuyển cảnh
  | "warmup_game" // Slide 3: Trò chơi khởi động (ví dụ biển báo giao thông)
  | "warmup_picture" // Bức tranh / hoạt động mở đầu (ví dụ tranh trốn tìm, múa hát)
  | "transition_explore" // Khám phá chuyển cảnh
  | "reading_passage_1" // Bài đọc đoạn 1+2
  | "reading_passage_2" // Bài đọc đoạn 3+4
  | "reading_passage_3" // Bài đọc đoạn 5 + Tác giả
  | "transition_read" // Luyện đọc chuyển cảnh
  | "read_model" // I. Luyện đọc - 1. Đọc mẫu & chia đoạn
  | "read_correct" // 2. Luyện đọc đúng (từ khó & câu dài ngắt nghỉ / //)
  | "read_expression" // 3. Luyện đọc diễn cảm (nhóm đôi)
  | "read_relay" // 4. Luyện đọc lại (nối tiếp đoạn)
  | "transition_comprehend" // Tiết 2 - Tìm hiểu bài chuyển cảnh
  | "vocabulary" // 1. Giải nghĩa từ
  | "question_1" // Câu hỏi 1 (2 cột: Câu hỏi & Làm việc chung)
  | "question_2" // Câu hỏi 2
  | "question_3" // Câu hỏi 3
  | "question_4" // Câu hỏi 4
  | "question_5" // Câu hỏi 5
  | "lesson_core" // 3. Nội dung bài học (khung trang trọng)
  | "practice_task_1" // 4. Luyện tập theo văn bản đọc - Bài 1 (bảng 2 cột)
  | "practice_task_2" // Bài 2 (Phiếu học tập từ thay thế)
  | "matching_concepts" // Nối cột A - Cột B (Danh từ - Động từ - Tính từ)
  | "transition_practice" // Chuyển cảnh Luyện tập
  | "game_round_timer" // Trò chơi có đồng hồ đếm ngược 90 giây (Ai nhanh ai đúng)
  | "game_summary" // Tổng kết trò chơi
  | "reading_log_template" // Phiếu đọc sách trống
  | "reading_log_filled" // Phiếu đọc sách mẫu hoàn chỉnh + 5 sao
  | "group_discussion" // Sinh hoạt nhóm & Trao đổi với bạn
  | "transition_apply" // Vận dụng chuyển cảnh
  | "apply_action" // Việc nên làm / Việc không nên làm
  | "apply_writing" // Viết vào vở / Kể cho người thân nghe
  | "goodbye"; // Tạm biệt!

export interface TeachingSlide {
  id: number;
  category: SlideCategory;
  title: string;
  headerDate?: string;
  headerLesson?: string;
  badge?: string;

  subtitle?: string;
  paragraphs?: string[];
  author?: string;
  bulletPoints?: string[];
  cloudText?: string;
  imageLabel?: string;
  
  // Specific structures
  leftColumn?: {
    header: string;
    subHeader?: string;
    content: string[];
    note?: string;
  };
  rightColumn?: {
    header: string;
    subHeader?: string;
    content: string[];
    tableData?: { col1: string; col2: string }[];
    note?: string;
  };

  // For matching concepts (Slide 5 of LTVC)
  matchingData?: {
    prompt: string;
    colA: { id: string; text: string }[];
    colB: { id: string; text: string; matchId: string }[];
  };

  // For game with timer (Slide 7-10 of LTVC)
  gameRoundData?: {
    roundName: string; // "VÒNG 1", "VÒNG 2", etc.
    gameTitle: string; // "TRÒ CHƠI: AI NHANH AI ĐÚNG"
    readingPassage?: string;
    taskPrompt: string[];
    answerText: string[];
    timeSeconds: number; // 90
  };

  // For reading log (Slide 7 & 8 of Đọc mở rộng)
  readingLogData?: {
    bookTitle: string;
    author: string;
    readDate: string;
    mainContent: string;
    favoriteCharacter: string;
    interestingDetail: string;
    ratingStars?: number; // 5
    isSample?: boolean;
  };

  // For vocabulary
  vocabItems?: { term: string; definition: string; imageLabel?: string }[];

  // For warmup game
  gameGrid?: { label: string; name: string; iconType?: string }[];

  // For core lesson message
  coreMessage?: string;

  // For application
  dos?: string[];
  donts?: string[];
  applyTask?: string;
}

export interface DetailedClassroomDeck {
  lessonTitle: string;
  cleanTitle: string;
  subject: string;
  grade: number;
  className: string;
  period: string | number;
  week: number;
  schoolName: string;
  teacherName: string;
  academicYear: string;
  slides: TeachingSlide[];
}

export interface AuthenticDeckSummary {
  available: boolean;
  slideCount?: number;
  deckName?: string;
  badge?: string;
  description?: string;
}

/**
 * Checks whether this lesson has an authentic matching PowerPoint presentation
 * based strictly on the teaching presentation files provided by the user.
 */
export function isAuthenticLectureAvailable(lessonTitle: string, subject?: string): boolean {
  return getAuthenticDeckSummary(lessonTitle, subject).available;
}

/**
 * Returns detailed information about the authentic teaching deck for this lesson if available.
 * Only returns available: true for lessons that strictly match the uploaded slide decks!
 */
export function getAuthenticDeckSummary(lessonTitle: string, subject?: string): AuthenticDeckSummary {
  if (!lessonTitle) return { available: false };
  const t = lessonTitle.toLowerCase();
  const s = (subject || "").toLowerCase();

  // 1. Bài 1: Đọc: Thanh âm của gió (22 slide chuẩn)
  if (t.includes("thanh âm của gió") || t.includes("thanh am cua gio")) {
    return {
      available: true,
      slideCount: 22,
      deckName: "Đọc: Thanh âm của gió",
      badge: "22 slide chuẩn tệp mẫu",
      description: "Đầy đủ 22 slide: Khởi động trốn tìm, Luyện đọc 3 đoạn, Tìm hiểu bài 4 câu hỏi, Ghi nhớ & Vận dụng.",
    };
  }

  // 2. LTVC: Luyện tập về danh từ, động từ, tính từ (14 slide chuẩn)
  if (
    (t.includes("danh từ") && (t.includes("động từ") || t.includes("tính từ"))) ||
    (t.includes("ltvc") && (t.includes("danh từ") || t.includes("từ loại") || t.includes("luyện tập"))) ||
    t.includes("luyện tập về danh từ")
  ) {
    return {
      available: true,
      slideCount: 14,
      deckName: "LTVC: Luyện tập về danh từ, động từ, tính từ",
      badge: "14 slide chuẩn tệp mẫu",
      description: "Đầy đủ 14 slide: Nối cột A-B, Trò chơi Ai nhanh ai đúng 4 vòng có đếm ngược 90s, Tổng kết & Vận dụng.",
    };
  }

  // 3. Đọc mở rộng: Đọc truyện Người bạn tốt (12 slide chuẩn)
  if (
    t.includes("người bạn tốt") ||
    t.includes("nguoi ban tot") ||
    (t.includes("đọc mở rộng") && (s.includes("tiếng việt") || !s || s.includes("đọc")))
  ) {
    return {
      available: true,
      slideCount: 12,
      deckName: "Đọc mở rộng: Đọc truyện Người bạn tốt",
      badge: "12 slide chuẩn tệp mẫu",
      description: "Đầy đủ 12 slide: Truyện bạn Thắm & bạn Dung, Phiếu đọc sách đánh giá 5 sao, Sinh hoạt nhóm & Vận dụng.",
    };
  }

  // 4. Bài 2: Đọc: Cánh đồng hoa (25 slide chuẩn)
  if (t.includes("cánh đồng hoa") || t.includes("canh dong hoa")) {
    return {
      available: true,
      slideCount: 25,
      deckName: "Đọc: Cánh đồng hoa (T1+2)",
      badge: "25 slide chuẩn tệp mẫu",
      description: "Đầy đủ 25 slide: Trò chơi 10 biển báo, Bảng phân loại Động từ - Tính từ, Phiếu học tập từ thay thế & Vận dụng.",
    };
  }

  return { available: false };
}

function cleanTitle(title: string): string {
  if (!title) return "";
  return title
    .replace(/^(Đọc|Viết|Nói và nghe|Luyện từ và câu|Góc sáng tạo|Tập đọc|Chính tả|Tập làm văn|Luyện tập|Khám phá|Ôn tập):\s*/i, "")
    .replace(/^Bài\s+\d+\s*[:.-]\s*/i, "")
    .replace(/^Tiết\s+\d+\s*[:.-]\s*/i, "")
    .replace(/^Unit\s+\d+\s*[:.-]\s*/i, "")
    .trim();
}

/**
 * Builds the complete authentic teaching deck matching the repository from tailieugiaoduc.edu.vn!
 */
export function buildDetailedClassroomDeck(
  plan: LessonPlan,
  schoolInfo: SchoolInfo
): DetailedClassroomDeck {
  const subject = plan.subject || "Tiếng Việt";
  const rawTitle = plan.lessonTitle || "Cánh đồng hoa";
  const clTitle = cleanTitle(rawTitle) || rawTitle;
  const tLower = rawTitle.toLowerCase();
  const grade = plan.grade || schoolInfo.grade || 5;
  const className = plan.className || schoolInfo.className || `${grade}A`;
  const teacherName = plan.teacherName || schoolInfo.teacherName || "Nguyễn Thị Mai";
  const schoolName = schoolInfo.schoolName || "TRƯỜNG TIỂU HỌC BẮC HỒNG";
  const academicYear = schoolInfo.academicYear || "2024 - 2025";
  const week = schoolInfo.week || 1;
  const period = plan.curriculumPeriod || 1;

  // Detect specific lessons from tailieugiaoduc.edu.vn
  const isThanhAmCuaGio = tLower.includes("thanh âm của gió") || tLower.includes("thanh am cua gio");
  const isLTVC =
    tLower.includes("danh từ") ||
    tLower.includes("động từ") ||
    tLower.includes("tính từ") ||
    (tLower.includes("ltvc") && (tLower.includes("luyện tập") || tLower.includes("từ loại")));
  const isDocMoRong =
    tLower.includes("đọc mở rộng") ||
    tLower.includes("doc mo rong") ||
    tLower.includes("người bạn tốt");
  const isCanhDongHoa =
    tLower.includes("cánh đồng hoa") || tLower.includes("canh dong hoa");

  let slides: TeachingSlide[] = [];

  if (isThanhAmCuaGio) {
    slides = buildThanhAmCuaGioSlides(schoolName, teacherName, className, grade, academicYear);
  } else if (isLTVC) {
    slides = buildLTVCDanhTuDongTuTinhTuSlides(schoolName, teacherName, className, grade, academicYear);
  } else if (isDocMoRong) {
    slides = buildDocMoRongSlides(schoolName, teacherName, className, grade, academicYear);
  } else if (isCanhDongHoa) {
    slides = buildCanhDongHoaSlides(schoolName, teacherName, className, grade, academicYear);
  } else {
    slides = buildGenericCurriculumSlides(
      rawTitle,
      clTitle,
      subject,
      grade,
      schoolName,
      teacherName,
      className,
      academicYear
    );
  }

  return {
    lessonTitle: rawTitle,
    cleanTitle: clTitle,
    subject,
    grade,
    className,
    period,
    week,
    schoolName,
    teacherName,
    academicYear,
    slides,
  };
}

// =========================================================================
// 1. THANH ÂM CỦA GIÓ (22 SLIDES CHUẨN TỪ KHO TAILIEUGIAODUC.EDU.VN)
// =========================================================================
function buildThanhAmCuaGioSlides(
  schoolName: string,
  teacherName: string,
  className: string,
  grade: number,
  academicYear: string
): TeachingSlide[] {
  const headerDate = "Thứ……ngày……tháng…..năm 2024";
  const headerLesson = "BÀI 1: ĐỌC: THANH ÂM CỦA GIÓ";

  return [
    {
      id: 1,
      category: "cover",
      title: "Bìa bài giảng dự giờ",
      headerLesson: "ĐỌC: THANH ÂM CỦA GIÓ",
      leftColumn: {
        header: schoolName.toUpperCase(),
        content: [
          "CHÀO MỪNG QUÝ THẦY CÔ VỀ DỰ GIỜ THĂM LỚP",
          `MÔN TIẾNG VIỆT LỚP ${grade}`,
          "ĐỌC: THANH ÂM CỦA GIÓ",
        ],
      },
      subtitle: `Giáo viên: ${teacherName} — Lớp: ${className}`,
    },
    {
      id: 2,
      category: "transition_warmup",
      title: "Khởi động",
      cloudText: "Khởi động",
      subtitle: "Cây trái tim tình bạn & các bạn nhỏ vui hát",
    },
    {
      id: 3,
      category: "warmup_picture",
      title: "Khởi động: Bức tranh tuổi thơ",
      paragraphs: [
        "Bức tranh vẽ cảnh các bạn nhỏ đang chơi trò chơi trốn tìm trong một khung cảnh đẹp bình yên và thơ mộng, thể hiện rõ nét về một thế giới tuổi thơ hồn nhiên và trong sáng.",
      ],
      imageLabel: "THẾ GIỚI TUỔI THƠ - Trò chơi trốn tìm",
    },
    {
      id: 4,
      category: "warmup_picture",
      title: "Khởi động: Âm vang tiếng trống",
      paragraphs: [
        "Âm thanh tiếng trống hội rộn ràng, gắn liền với tuổi thơ và những trò chơi dân gian rộn rã trên khắp nẻo đường quê.",
      ],
      imageLabel: "Mặt trống hội trường học",
    },
    {
      id: 5,
      category: "transition_explore",
      title: "Khám phá",
      cloudText: "KHÁM PHÁ",
      subtitle: "Bảng nơ hồng, bút chì và cầu vồng",
    },
    {
      id: 6,
      category: "reading_passage_1",
      title: "Văn bản bài đọc (Đoạn 1)",
      headerDate,
      headerLesson,
      paragraphs: [
        "Chúng tôi đi chăn trâu, ngày nào cũng qua suối. Cỏ gần nước tươi tốt nên trâu ăn cỏ men theo bờ suối, rồi mới lên đồi, lên núi. Suối nhỏ, nước trong vắt, nắng chiếu xuống đáy làm cát, sỏi ánh lên lấp lánh. Một bên suối là đồng cỏ rộng, tha hồ cho gió rong chơi. Thỉnh thoảng gió lại vút qua tai chúng tôi như dùa nghịch.",
        "Chiều về, đàn trâu nó cỏ đằm mình dưới suối, chúng tôi tha thẩn tìm những viên đá đẹp cho mình.",
        "Bỗng em Bống nói:",
        "– Ơ, em bịt tai lại nghe tiếng gió lạ lắm.",
        "– Bịt tai thì nghe được gì? – Tôi hỏi Bống.",
        "– Bịt tai lại rồi mở ra và cứ lặp lại như thế. Anh thử xem.",
        "– Đúng rồi, tớ cũng nghe thấy tiếng gió thổi hay lắm.",
      ],
    },
    {
      id: 7,
      category: "reading_passage_2",
      title: "Văn bản bài đọc (Đoạn 2)",
      headerDate,
      headerLesson: "BÀI 1: ĐỌC: ĐIỀU KÌ DIỆU",
      paragraphs: [
        "– Điệp reo lên.Vừa nói, nó vừa lấy tay bịt hai tai rồi mở ra như Bống chỉ. Cả hội tụ lại, lần lượt đưa hai bàn tay lên bịt tai.",
        "– Nghe “u... u…u...” – Văn cười.",
        "– Không, phải thật im lặng, đầu mình nghĩ gì sẽ nghe tiếng gió nói ra như thế. – Thành nhíu mày như đang tập trung lắm.",
        "– Đúng rồi, tớ nghe thấy “vui, vui, vui, vui...”.",
        "– Còn tớ nghe thấy “cười, cười, cười, cười....”.",
        "Mỗi đứa nghe thấy một thanh âm. Cứ thế, gió chiều thổi từ thung lũng dọc theo suối mang theo tiếng nói trong đầu mỗi đứa bay xa. Đứa nào cũng mê mải theo tiếng gió cho đến khi Văn là lên:– Gió nói “đói, đói, đói... rồi.”. ",
      ],
    },
    {
      id: 8,
      category: "reading_passage_3",
      title: "Văn bản bài đọc (Đoạn 3)",
      headerDate,
      headerLesson: "BÀI 1: ĐỌC: ĐIỀU KÌ DIỆU",
      paragraphs: [
        "Cả hội giật mình. Chiều đã muộn, mặt trời xuống thật thấp. Chúng tôi lùa trâu về, không quên đưa hai tay lên giữ tai để vẫn nghe tiếng gió.",
        "Tối đó, tôi và Bống kể cho bố mẹ nghe về trò chơi bịt tai nghe tiếng gió. Bố bảo mới nghe chúng tôi kể thôi mà bố đã thích trò chơi ấy rồi. Bố còn nói nhất định sáng mai bố sẽ thử ngay xem gió nói điều gì.",
      ],
      author: "(Theo Văn Thành Lê)",
    },
    {
      id: 9,
      category: "transition_read",
      title: "Luyện đọc",
      cloudText: "LUYỆN ĐỌC",
      subtitle: "Cô giáo cầm sách giảng giải, học sinh chăm chú",
    },
    {
      id: 10,
      category: "read_model",
      title: "I. LUYỆN ĐỌC - 1. Đọc mẫu",
      headerDate,
      headerLesson,
      leftColumn: {
        header: "1. Đọc mẫu.",
        subHeader: "I. LUYỆN ĐỌC",
        content: [
          "Đọc nhấn giọng ở những tình tiết bất ngờ, từ ngữ thể hiện tâm trạng, cảm xúc nhân vật. Đọc thay đổi ngữ điệu khi đọc lời nói trực tiếp các nhân vật, đọc đúng ngữ điệu ngạc nhiên, đồng tình, cảm thán,…",
          "* Bài đọc chia thành 3 đoạn.",
          "- Đoạn 1: Từ đầu đến tìm những viên đá đẹp cho mình.",
          "- Đoạn 2: Tiếp theo đến “cười, cười, cười,…”.",
          "- Đoạn 3: Phần còn lại.",
        ],
      },
    },
    {
      id: 11,
      category: "read_correct",
      title: "2. Luyện đọc đúng",
      headerDate,
      headerLesson,
      leftColumn: {
        header: "2. Luyện đọc đúng:",
        subHeader: "I. LUYỆN ĐỌC",
        content: [
          "2.1. Luyện đọc từ khó: lên núi, lạ lắm, lần lượt, thung lũng, la lên, lùa trâu.",
          "",
          "2.2. Luyện đọc câu dài:",
          "Chiều về,/ đàn trâu no cỏ/ đằm mình dưới suối,/ chúng tôi tha thẩn/ tìm những viên đá đẹp cho mình.//",
        ],
      },
    },
    {
      id: 12,
      category: "read_expression",
      title: "3. Luyện đọc diễn cảm",
      headerDate,
      headerLesson,
      cloudText: "LUYỆN ĐỌC DIỄN CẢM THEO NHÓM ĐÔI",
      bulletPoints: [
        "Đọc thay đổi ngữ điệu khi đọc lời nói trực tiếp các nhân vật, đọc đúng ngữ điệu ngạc nhiên, đồng tình, cảm thán,…",
      ],
    },
    {
      id: 13,
      category: "transition_comprehend",
      title: "Tìm hiểu bài",
      cloudText: "TÌM HIỂU BÀI",
      subtitle: "Cô giáo và học sinh trong đám mây hồng",
    },
    {
      id: 14,
      category: "vocabulary",
      title: "1. Giải nghĩa từ",
      headerDate,
      headerLesson,
      vocabItems: [
        {
          term: "Men theo (bờ suối)",
          definition: "di chuyển lần theo phía bên (bờ suối)",
          imageLabel: "Hình ảnh di chuyển men theo suối",
        },
        {
          term: "Đằm mình",
          definition: "ngâm mình lâu trong nước.",
          imageLabel: "Hình ảnh trâu đằm mình dưới nước",
        },
        {
          term: "Thung lũng",
          definition: "vùng đất trũng thấp giữa hai sườn dốc.",
          imageLabel: "Hình ảnh thung lũng giữa hai sườn dốc",
        },
      ],
    },
    {
      id: 15,
      category: "question_1",
      title: "Câu hỏi 1",
      headerDate,
      headerLesson,
      leftColumn: {
        header: "2. Trả lời câu hỏi",
        subHeader: "II. TÌM HIỂU BÀI",
        content: [
          "Câu 1: Khung cảnh thiên nhiên khi các bạn nhỏ đi chăn trâu được miêu tả như thế nào?",
        ],
      },
      rightColumn: {
        header: "TRẢ LỜI CÂU HỎI",
        content: [
          "Khung cảnh thiên nhiên khi các bạn nhỏ đi chăn trâu rất đẹp và hữu tình: cỏ tươi tốt, có suối nhỏ, nước trong veo. Quanh suối là đồng cỏ rộng, gió không có vật cản cứ tha hồ rong chơi, thỉnh thoảng lại vút qua tai như đùa nghịch.",
        ],
      },
    },
    {
      id: 16,
      category: "question_2",
      title: "Câu hỏi 2",
      headerDate,
      headerLesson,
      leftColumn: {
        header: "2. Trả lời câu hỏi",
        subHeader: "II. TÌM HIỂU BÀI",
        content: [
          "Câu 2: Em Bống đã phát hiện ra trò chơi gì?",
          "",
          "Câu 2b: Các chi tiết nào cho thấy các bạn rất thích (rất hào hứng) với trò chơi?",
        ],
      },
      rightColumn: {
        header: "TRẢ LỜI CÂU HỎI",
        content: [
          "- Em Bống phát hiện ra trò chơi bịt tai nghe gió, chơi bằng cách bịt nhẹ tai lại rồi mở ra và lặp lại.",
          "- Cả hội tụ lại, lần lượt đưa hai bàn tay lên bịt tai, mỗi đứa nghe thấy một thanh âm, đứa nào cũng mê mải theo tiếng gió...",
        ],
      },
    },
    {
      id: 17,
      category: "question_3",
      title: "Câu hỏi 3",
      headerDate,
      headerLesson,
      leftColumn: {
        header: "2. Trả lời câu hỏi",
        subHeader: "II. TÌM HIỂU BÀI",
        content: [
          "Câu 3: Việc bố hưởng ứng trò chơi của hai anh em nói lên điều gì? Chọn câu trả lời dưới đây hoặc nêu ý kiến của em.",
          "+ Đáp án A: Vì trò chơi rất hấp dẫn và thu hút bố muốn tham gia.",
          "+ Đáp án B: Vì bố muốn thể hiện sự hưởng ứng để ủng hộ hai anh em chơi trò chơi ngoài trời cho khoẻ và chóng lớn.",
          "+ Đáp án C: Vì bố hiểu tâm lí của con cái, yêu con và muốn hoà mình vào thế giới của con.",
        ],
      },
      rightColumn: {
        header: "ĐÁP ÁN ĐÚNG",
        content: [
          "+ Đáp án C: Vì bố hiểu tâm lí của con cái, yêu con và muốn hoà mình vào thế giới của con.",
        ],
      },
    },
    {
      id: 18,
      category: "question_4",
      title: "Câu hỏi 4",
      headerDate,
      headerLesson,
      leftColumn: {
        header: "2. Trả lời câu hỏi",
        subHeader: "II. TÌM HIỂU BÀI",
        content: [
          "Câu 4: Tưởng tượng em cũng tham gia vào trò chơi bịt tai nghe gió của các bạn nhỏ, nói với bạn điều em nghe thấy.",
        ],
      },
      rightColumn: {
        header: "GỢI Ý TRẢ LỜI",
        content: [
          "+ VD: ngoan, ngoan, ngoan,...",
          "+ VD: giỏi, giỏi, giỏi,...",
          "(Khi chúng ta mơ ước hoặc thích điều gì thì sẽ nghe được gió nói điều đó)",
        ],
      },
    },
    {
      id: 19,
      category: "lesson_core",
      title: "3. Nội dung bài học",
      headerDate,
      headerLesson,
      coreMessage:
        "Mỗi vùng miền đều có những sản vật đặc trưng mang đậm nét dấu ấn của vùng miền đó. Hiểu và tự hào về sản vật, có ý thức phát triển sản vật chính là một trong những biểu hiện của tình yêu quê hương.",
    },
    {
      id: 20,
      category: "transition_apply",
      title: "Vận dụng",
      cloudText: "VẬN DỤNG",
      subtitle: "Em bé cưỡi bút chì cầu vồng và nơ ruy băng",
    },
    {
      id: 21,
      category: "apply_writing",
      title: "Vận dụng: Cảm xúc bài học",
      headerDate,
      headerLesson,
      subtitle:
        "Em suy nghĩ cá nhân và nêu cảm xúc của mình sau khi học xong bài “Thanh âm của gió”",
      bulletPoints: [
        "+ Học xong bài Thanh âm của gió, em thấy rất thú vị vì đã giúp em biết thêm một trò chơi mới.",
        "+ Trò chơi mà các bạn nhỏ đã chơi rất hay và ấn tượng, nó đơn giản nhưng rất thú vị.",
        "+ Qua trò chơi này giúp em sáng tạo thêm nhiều trò chơi đơn giản và bổ ích,…",
      ],
    },
    {
      id: 22,
      category: "goodbye",
      title: "Tạm biệt!",
      cloudText: "TẠM BIỆT!",
      subtitle: "Chúc quý thầy cô mạnh khỏe, chúc các em chăm ngoan học giỏi!",
    },
  ];
}

// =========================================================================
// 2. LTVC: LUYỆN TẬP VỀ DANH TỪ, ĐỘNG TỪ, TÍNH TỪ (14 SLIDES CHUẨN)
// =========================================================================
function buildLTVCDanhTuDongTuTinhTuSlides(
  schoolName: string,
  teacherName: string,
  className: string,
  grade: number,
  academicYear: string
): TeachingSlide[] {
  const headerDate = "Thứ……ngày……tháng…..năm 2024";
  const headerLesson = "LUYỆN TẬP VỀ DANH TỪ, ĐỘNG TỪ, TÍNH TỪ";

  const passage =
    "Chúng tôi đi chăn trâu, ngày nào cũng qua suối. Cỏ gần nước tươi tốt nên trâu ăn cỏ men theo bờ suối, rồi mới lên đồi, lên núi. Suối nhỏ, nước trong vắt, nắng chiếu xuống đáy làm cát, sỏi ánh lên lấp lánh. Một bên suối là đồng cỏ rộng, tha hồ cho gió rong chơi. Thỉnh thoảng gió lại vút qua tai chúng tôi như dùa nghịch.\nChiều về, đàn trâu nó cỏ đằm mình dưới suối, chúng tôi tha thẩn tìm những viên đá đẹp cho mình.";

  return [
    {
      id: 1,
      category: "cover",
      title: "Bìa bài giảng dự giờ",
      headerLesson: "LTVC: LUYỆN TẬP VỀ DANH TỪ, ĐỘNG TỪ, TÍNH TỪ",
      leftColumn: {
        header: schoolName.toUpperCase(),
        content: [
          "CHÀO MỪNG QUÝ THẦY CÔ VỀ DỰ GIỜ THĂM LỚP",
          `MÔN TIẾNG VIỆT LỚP ${grade}`,
          "LTVC: LUYỆN TẬP VỀ DANH TỪ, ĐỘNG TỪ, TÍNH TỪ",
        ],
      },
      subtitle: `Giáo viên: ${teacherName} — Lớp: ${className}`,
    },
    {
      id: 2,
      category: "transition_warmup",
      title: "Khởi động",
      cloudText: "Khởi động",
      subtitle: "Cây trái tim tình bạn & các bạn nhỏ vui hát",
    },
    {
      id: 3,
      category: "warmup_picture",
      title: "Khởi động múa hát",
      paragraphs: ["Cả lớp cùng khởi động với bài hát múa sôi nổi, rộn ràng đón tiết học mới!"],
      imageLabel: "Học sinh múa hát chào mừng",
    },
    {
      id: 4,
      category: "transition_explore",
      title: "Khám phá",
      cloudText: "KHÁM PHÁ",
      subtitle: "Bảng nơ hồng, bút chì và cầu vồng",
    },
    {
      id: 5,
      category: "matching_concepts",
      title: "1. Nhận biết Danh từ, Động từ, Tính từ",
      headerDate,
      headerLesson,
      matchingData: {
        prompt: "1. Mỗi ý ở cột B nói về danh từ, động từ hay tính từ B.",
        colA: [
          { id: "dt", text: "Danh từ" },
          { id: "dongt", text: "Động từ" },
          { id: "tt", text: "Tính từ" },
        ],
        colB: [
          { id: "b1", text: "Từ chỉ hoạt động, trạng thái của sự vật", matchId: "dongt" },
          { id: "b2", text: "Từ chỉ đặc điểm của sự vật, hoạt động, trạng thái", matchId: "tt" },
          { id: "b3", text: "Từ chỉ sự vật (người, vật, hiện tượng tự nhiên, thời gian,…)", matchId: "dt" },
        ],
      },
    },
    {
      id: 6,
      category: "transition_practice",
      title: "Luyện tập",
      cloudText: "Luyện tập",
      subtitle: "Cầu vồng và bút chì học tập",
    },
    {
      id: 7,
      category: "game_round_timer",
      title: "Trò chơi: Ai nhanh ai đúng (Vòng 1)",
      headerDate,
      headerLesson,
      gameRoundData: {
        roundName: "VÒNG 1",
        gameTitle: "TRÒ CHƠI: AI NHANH AI ĐÚNG",
        readingPassage: passage,
        taskPrompt: [
          "Tìm danh từ theo mỗi nhóm sau:",
          "a. 1 danh từ chỉ con vật.",
          "b. 1 danh từ chỉ thời gian.",
          "c. 2 danh từ chỉ hiện tượng tự nhiên.",
        ],
        answerText: ["a. trâu", "b. ngày", "c. gió, nắng"],
        timeSeconds: 90,
      },
    },
    {
      id: 8,
      category: "game_round_timer",
      title: "Trò chơi: Ai nhanh ai đúng (Vòng 2)",
      headerDate,
      headerLesson,
      gameRoundData: {
        roundName: "VÒNG 2",
        gameTitle: "TRÒ CHƠI: AI NHANH AI ĐÚNG",
        readingPassage: passage,
        taskPrompt: ["Tìm 4 động từ chỉ hoạt động trạng thái của người hoặc vật"],
        answerText: ["Chăn, qua, ăn, lên, chiếu, rong chơi, vút, đùa nghịch"],
        timeSeconds: 90,
      },
    },
    {
      id: 9,
      category: "game_round_timer",
      title: "Trò chơi: Ai nhanh ai đúng (Vòng 3)",
      headerDate,
      headerLesson,
      gameRoundData: {
        roundName: "VÒNG 3",
        gameTitle: "TRÒ CHƠI: AI NHANH AI ĐÚNG",
        readingPassage: passage,
        taskPrompt: [
          "Tìm 4 tính từ chỉ đặc điểm của các sự vật dưới đây:",
          "Cỏ  -  suối  -  nước  -  cát, sỏi",
        ],
        answerText: [
          "Cỏ: tươi tốt  -  suối: nhỏ",
          "Nước: trong vắt  -  cát, sỏi: lấp lánh",
        ],
        timeSeconds: 90,
      },
    },
    {
      id: 10,
      category: "game_round_timer",
      title: "Trò chơi: Ai nhanh ai đúng (Vòng 4)",
      headerDate,
      headerLesson,
      gameRoundData: {
        roundName: "VÒNG 4",
        gameTitle: "TRÒ CHƠI: AI NHANH AI ĐÚNG",
        taskPrompt: [
          "Đặt một câu nói về một hiện tượng tự nhiên, trong đó có ít nhất 1 danh từ, 1 động từ, 1 tính từ.",
        ],
        answerText: ["VD: Nắng chiếu trên những cánh hoa vàng lung linh."],
        timeSeconds: 90,
      },
    },
    {
      id: 11,
      category: "game_summary",
      title: "Tổng kết trò chơi",
      cloudText: "TỔNG KẾT TRÒ CHƠI",
      subtitle: "Cô giáo và học sinh cùng tuyên dương các nhóm hoàn thành xuất sắc các vòng thi!",
    },
    {
      id: 12,
      category: "transition_apply",
      title: "Vận dụng",
      cloudText: "VẬN DỤNG",
      subtitle: "Bảng nơ xanh",
    },
    {
      id: 13,
      category: "apply_writing",
      title: "Vận dụng: Viết vào vở",
      headerDate,
      headerLesson,
      paragraphs: ["Mỗi bạn suy nghĩ và viết vào vở 5 danh từ, 5 động từ, 5 tính từ."],
    },
    {
      id: 14,
      category: "goodbye",
      title: "Tạm biệt!",
      cloudText: "TẠM BIỆT!",
      subtitle: "Chúc quý thầy cô mạnh khỏe, chúc các em chăm ngoan học giỏi!",
    },
  ];
}

// =========================================================================
// 3. ĐỌC MỞ RỘNG: NGƯỜI BẠN TỐT (12 SLIDES CHUẨN)
// =========================================================================
function buildDocMoRongSlides(
  schoolName: string,
  teacherName: string,
  className: string,
  grade: number,
  academicYear: string
): TeachingSlide[] {
  const headerDate = "Thứ……ngày……tháng…..năm 2024";
  const headerLesson = "ĐỌC TRUYỆN: NGƯỜI BẠN TỐT";

  return [
    {
      id: 1,
      category: "cover",
      title: "Bìa bài giảng dự giờ",
      headerLesson: "ĐỌC MỞ RỘNG",
      leftColumn: {
        header: schoolName.toUpperCase(),
        content: [
          "CHÀO MỪNG QUÝ THẦY CÔ VỀ DỰ GIỜ THĂM LỚP",
          `MÔN TIẾNG VIỆT LỚP ${grade}`,
          "ĐỌC MỞ RỘNG",
        ],
      },
      subtitle: `Giáo viên: ${teacherName} — Lớp: ${className}`,
    },
    {
      id: 2,
      category: "transition_warmup",
      title: "Khởi động",
      cloudText: "Khởi động",
      subtitle: "Bàn tay nâng sách và hoa bồ công anh",
    },
    {
      id: 3,
      category: "warmup_picture",
      title: "Khởi động: Tiểu phẩm lớp học",
      paragraphs: ["Các bạn học sinh cùng theo dõi một tiểu phẩm ngắn về tình bạn trong sáng dưới mái trường."],
      imageLabel: "Tiểu phẩm học sinh về tình bạn",
    },
    {
      id: 4,
      category: "transition_explore",
      title: "Khám phá",
      cloudText: "KHÁM PHÁ",
      subtitle: "Cô giáo bên bàn máy tính và các em học sinh",
    },
    {
      id: 5,
      category: "reading_passage_1",
      title: "Đọc truyện: Người bạn tốt (Đoạn 1)",
      headerDate,
      headerLesson,
      paragraphs: [
        "Bạn Thắm có hình dáng nhỏ nhắn, thân hình mảnh mai nhưng khỏe mạnh, tóc dài thường buông xõa khi ở nhà và được cột gọn gàng khi đến trường. Với gương mặt sáng và chiếc mũi thanh tú, Thắm rất thông minh. Bạn là học sinh giỏi nhiều năm liền ở lớp. Siêng năng và sáng dạ, học đâu nhớ đấy và lâu bài, Thắm được các bạn kính trọng. Thắm tốt lắm, luôn giúp đỡ những bạn gặp khó khăn về học tập và sức khỏe.",
        "Em có một người bạn rất thân, hai đứa luôn gắn bó với nhau, cùng nhau chia sẻ niềm vui và nỗi buồn. Dù Thắm đã về quê sinh sống nhưng tình bạn đẹp ấy vẫn sống mãi trong em.",
        "Em nhớ rõ một sự việc đã khiến em cảm thấy xấu hổ, nhưng đó cũng là một kỉ niệm đẹp, một bài học quý về tình bạn.",
      ],
    },
    {
      id: 6,
      category: "reading_passage_2",
      title: "Đọc truyện: Người bạn tốt (Đoạn 2)",
      headerDate,
      headerLesson,
      paragraphs: [
        "Bạn Dung nghỉ học đã hai ngày, không ai biết lý do, cô giáo và các bạn rất lo lắng. Thắm tìm đến nhà Dung và biết được về hoàn cảnh khó khăn của bạn. Mặc dù chỉ cần báo lại cho cô là đủ nhưng Thắm đã dành thời gian đến với bạn Dung. Em giận Thắm lúc đó nhưng sau này em hiểu ra rằng tình bạn thực sự quan trọng. Khi Dung trở lại lớp, cô giáo thông báo rằng bạn ấy vẫn đủ điều kiện thi học kì. Cô đã kiểm tra và nhận xét tốt về những kiến thức mà Dung đã bị lỡ trong thời gian vắng mặt. Điều này chứng tỏ công của Thắm rất lớn. Cô giáo rất hài lòng về Thắm và bà của Dung cũng gửi lời cảm ơn đến Thắm.",
        "Khi nghe Thắm mời vào thư viện xem truyện, em cảm thấy ngượng ngùng. Thắm nói rằng tình bạn rất quý giá và đáng trân trọng nhất. Điều này làm em suy nghĩ và học được nhiều.",
        "Em luôn nhớ Thắm, người bạn tốt nhất của mình. Em cố gắng học tốt để sánh kịp với bạn ấy. Thắm là người mẫu mực mà em hướng tới.",
      ],
      author: "Tác giả: Hoàng trọng Hiếu",
    },
    {
      id: 7,
      category: "reading_log_template",
      title: "2. Phiếu đọc sách (Mẫu)",
      headerDate,
      headerLesson,
      readingLogData: {
        bookTitle: "",
        author: "",
        readDate: "",
        mainContent: "",
        favoriteCharacter: "",
        interestingDetail: "",
        isSample: false,
      },
    },
    {
      id: 8,
      category: "reading_log_filled",
      title: "Phiếu đọc sách hoàn chỉnh",
      headerDate,
      headerLesson,
      readingLogData: {
        bookTitle: "Người bạn tốt",
        author: "Hoàng trọng Hiếu",
        readDate: "Hôm nay",
        mainContent:
          "Ca ngợi bạn Thắm là người bạn rất đáng yêu và đáng học tập nhưng tác giả đã hiểu nhầm cách làm của bạn ấy và đã rút ra bài học cho mình và thêm yêu mến bạn ấy.",
        favoriteCharacter: "Bạn Thắm",
        interestingDetail:
          "Thắm chăm sóc Dung nhưng tác giả hiểu nhầm là bạn ấy chơi thân với Dung mà không chơi với mình nữa",
        ratingStars: 5,
        isSample: true,
      },
    },
    {
      id: 9,
      category: "group_discussion",
      title: "3. Trao đổi với bạn & Sinh hoạt nhóm",
      headerDate,
      headerLesson,
      leftColumn: {
        header: "3. Trao đổi với bạn.",
        content: [
          "- Kể tóm tắt nội dung câu chuyện.",
          "- Nêu điều thú vị về thế giới tuổi thơ được thể hiện trong câu chuyện.",
          "- Chia sẻ những điều em học được về cách kể chuyện.",
        ],
      },
      rightColumn: {
        header: "SINH HOẠT NHÓM",
        content: [
          "- Tổ chức sinh hoạt nhóm và cùng nhau trao đổi các nội dung yêu cầu.",
          "+ Kể chuyện.",
          "+ Nêu điều thú vị trong câu chuyện.",
          "+ Chia sẻ những điều em học được về cách kể chuyện.",
        ],
      },
    },
    {
      id: 10,
      category: "transition_apply",
      title: "Vận dụng",
      cloudText: "VẬN DỤNG",
      subtitle: "Bảng nơ xanh",
    },
    {
      id: 11,
      category: "apply_writing",
      title: "Vận dụng: Kể cho người thân",
      headerDate,
      headerLesson: "ĐỌC MỞ RỘNG",
      paragraphs: [
        "Về nhà kể cho người thân nghe câu chuyện mà em đã đọc hôm nay về thế giới tuổi thơ hoặc một câu chuyện khác mà em đã đọc hoặc đã nghe.",
      ],
    },
    {
      id: 12,
      category: "goodbye",
      title: "Tạm biệt!",
      cloudText: "TẠM BIỆT!",
      subtitle: "Chúc quý thầy cô mạnh khỏe, chúc các em chăm ngoan học giỏi!",
    },
  ];
}

// =========================================================================
// 4. CÁNH ĐỒNG HOA (25 SLIDES CHUẨN)
// =========================================================================
function buildCanhDongHoaSlides(
  schoolName: string,
  teacherName: string,
  className: string,
  grade: number,
  academicYear: string
): TeachingSlide[] {
  const headerDate = "Thứ……ngày……tháng…..năm 2024";
  const headerLesson = "BÀI 2: ĐỌC: CÁNH ĐỒNG HOA";

  return [
    {
      id: 1,
      category: "cover",
      title: "Bìa bài giảng dự giờ",
      headerLesson: "ĐỌC: CÁNH ĐỒNG HOA (T1+2)",
      leftColumn: {
        header: schoolName.toUpperCase(),
        content: [
          "CHÀO MỪNG QUÝ THẦY CÔ VỀ DỰ GIỜ THĂM LỚP",
          `MÔN TIẾNG VIỆT LỚP ${grade}`,
          "ĐỌC: CÁNH ĐỒNG HOA (T1+2)",
        ],
      },
      subtitle: `Giáo viên: ${teacherName} — Lớp: ${className}`,
    },
    {
      id: 2,
      category: "transition_warmup",
      title: "Khởi động",
      cloudText: "Khởi động",
      subtitle: "Cây tình bạn & các bạn nhỏ vui hát",
    },
    {
      id: 3,
      category: "warmup_game",
      title: "TRÒ CHƠI: BIỂN BÁO GIAO THÔNG",
      headerDate: "Thứ……ngày……tháng……năm …….",
      badge: "KHỞI ĐỘNG",
      gameGrid: [
        { label: "Biển 1", name: "Giao nhau với đường ưu tiên", iconType: "triangle-down" },
        { label: "Biển 2", name: "Có trẻ em đi qua", iconType: "triangle-children" },
        { label: "Biển 3", name: "Có đường dành cho người đi bộ", iconType: "triangle-walk" },
        { label: "Biển 4", name: "Giao nhau với đường có đèn đỏ", iconType: "triangle-light" },
        { label: "Biển 5", name: "Có đường dành cho người đi xe đạp", iconType: "triangle-bike" },
        { label: "Biển 6", name: "Cấm ô tô", iconType: "circle-car" },
        { label: "Biển 7", name: "Cấm xe máy", iconType: "circle-moto" },
        { label: "Biển 8", name: "Cấm xe đạp", iconType: "circle-bike" },
        { label: "Biển 9", name: "Cấm người đi bộ", iconType: "circle-walk" },
        { label: "Biển 10", name: "Cấm đi ngược chiều", iconType: "circle-stop" },
      ],
    },
    {
      id: 4,
      category: "transition_explore",
      title: "Khám phá",
      cloudText: "KHÁM PHÁ",
      subtitle: "Bảng nơ hồng, bút chì và cầu vồng",
    },
    {
      id: 5,
      category: "reading_passage_1",
      title: "Văn bản bài đọc (Đoạn 1 và 2)",
      headerDate,
      headerLesson,
      paragraphs: [
        "Ở đầu làng, có một đồng cỏ khá rộng. Ja Ka, Mư Hoa, Ja Prok và Mư Nhơ thường rủ nhau tới đó vui chơi. Ja Ka luôn mang theo chiếc trống nhỏ. Cậu vỗ trống rất hay. Mỗi lần Ja Ka vỗ trống, các bạn lại cùng múa hát tưng bừng.",
        "Thế nhưng gần đây, trên đồng cỏ, một bãi rác xuất hiện và cứ lớn dần lên, bốc mùi khó chịu. Các bạn nhỏ chẳng nô đùa, hò hét như mọi ngày.",
        "– Cứ thế này, đồng cỏ sẽ thành bãi rác mất thôi! – Mư Nhơ thở dài.",
        "Mư Hoa quay mặt đi, giấu những giọt nước mắt:",
        "– Bọn mình còn đâu chỗ mà vui chơi!",
        "Ja Ka, Ja Prok thì rầu rĩ:",
        "- Biết làm thế nào bây giờ?",
      ],
    },
    {
      id: 6,
      category: "reading_passage_2",
      title: "Văn bản bài đọc (Đoạn 3 và 4)",
      headerDate,
      headerLesson,
      paragraphs: [
        "Bỗng Mư Hoa hỏi:",
        "– Các cậu có thấy bầu trời như một vườn hoa không?",
        "Mư Nhơ gật đầu:",
        "– Cánh diều giống hoa ngũ sắc, đám mây giống hoa cúc trắng,....",
        "Mư Hoa bật dậy:",
        "– Chúng ta sẽ biến nơi đây thành cánh đồng hoa. Mọi người không nỡ lấy cánh đồng đẹp làm chỗ đổ rác đâu.",
        "Các bạn nhỏ chụm đầu bàn tính và quyết tâm cải tạo đồng cỏ. Biết ý tưởng đó, nhiều cô bác trong làng đã hưởng ứng. Họ hồ hởi cùng các bạn bắt tay vào dọn rác, xới đất, gieo hạt, trồng cây; ngày ngày tưới nước, nhổ cỏ, bắt sâu. Cây đâm chồi, nảy lộc, rồi như nở những bông hoa đầu tiên.",
      ],
    },
    {
      id: 7,
      category: "reading_passage_3",
      title: "Văn bản bài đọc (Đoạn 5)",
      headerDate,
      headerLesson,
      paragraphs: [
        "Ba tháng sau, hoa đã đua nhau khoe sắc: cúc bách nhật tím lịm, cúc vạn thọ vàng tươi, mào gà đỏ thắm,... Quả nhiên, không thấy ai đến đây đổ rác nữa. Nhóm bạn vui mừng nhảy múa, ca hát giữa muộn hoa rực rỡ, trong tiếng trống rộn ràng. Với cánh đồng hoa xinh đẹp, ngôi làng trở nên nổi tiếng, đón nhiều khách tới tham quan. Các bạn nhỏ và dân làng cười vui. Cánh đồng hoa cũng như dạng vui cười hạnh phúc.",
      ],
      author: "(Theo Lê Anh Vinh - Bùi Thị Diền)",
    },
    {
      id: 8,
      category: "transition_read",
      title: "Luyện đọc",
      cloudText: "LUYỆN ĐỌC",
      subtitle: "Cô giáo cầm sách giảng giải, học sinh chăm chú",
    },
    {
      id: 9,
      category: "read_model",
      title: "I. LUYỆN ĐỌC - 1. Đọc mẫu",
      headerDate,
      headerLesson,
      leftColumn: {
        header: "1. Đọc mẫu.",
        subHeader: "I. LUYỆN ĐỌC",
        content: [
          "Đọc đúng từ ngữ câu đoạn và toàn bộ câu chuyện “Cánh đồng hoa” biết đọc diễn cảm phù hợp với lời người kể chuyện, lời đối thoại của các bạn nhỏ trong câu chuyện",
          "* Bài đọc chia thành 5 đoạn.",
          "- Đoạn 1: Từ đầu đến múa hát tưng bừng.",
          "- Đoạn 2: Tiếp theo đến … thế nào bây giờ?",
          "- Đoạn 3: Tiếp theo đến … chỗ đổ rác đâu.",
          "- Đoạn 4: Tiếp theo đến … tiếng trống rộn ràng.",
          "- Đoạn 5: Phần còn lại.",
        ],
      },
    },
    {
      id: 10,
      category: "read_correct",
      title: "2. Luyện đọc đúng",
      headerDate,
      headerLesson,
      leftColumn: {
        header: "2. Luyện đọc đúng:",
        subHeader: "I. LUYỆN ĐỌC",
        content: [
          "2.1. Luyện đọc từ khó:",
          "Chọi cỏ gà,  vỗ trống,  chỗ đổ rác,  hoa ngũ sắc",
          "",
          "2.2. Luyện đọc câu dài:",
          "Họ hồ hởi/ cùng các bạn/ bắt tay vào dọn rác,/ xới đất,/ gieo hạt,/ trồng cây;// ngày ngày,/ tưới nước,/ nhổ cỏ,/ bắt sâu.//",
        ],
      },
    },
    {
      id: 11,
      category: "read_expression",
      title: "3. Luyện đọc diễn cảm",
      headerDate,
      headerLesson,
      cloudText: "LUYỆN ĐỌC DIỄN CẢM THEO NHÓM ĐÔI",
      bulletPoints: [
        "+ Đọc giọng chậm, buồn thể hiện tâm trạng của các bạn nhỏ khi thấy đồng cỏ có nguy cơ trở thành bãi rác.",
        "+ Đọc giọng nhanh, vui tươi thể hiện tâm trạng của các bạn nhỏ khi nghĩ ra ý tưởng.",
        "+ Biết đổi giọng nhân vật, giọng kể chuyện khi đọc lời thoại,…",
      ],
    },
    {
      id: 12,
      category: "read_relay",
      title: "4. Luyện đọc lại",
      headerDate,
      headerLesson,
      cloudText: "Đọc nối tiếp theo đoạn",
      bulletPoints: [
        "Học sinh nối tiếp nhau đọc từng đoạn trước lớp.",
        "Cả lớp lắng nghe, nhận xét và bình chọn bạn đọc hay nhất.",
      ],
    },
    {
      id: 13,
      category: "transition_comprehend",
      title: "Tiết 2 - Tìm hiểu bài",
      cloudText: "Tiết 2\nTÌM HIỂU BÀI",
      subtitle: "Cô giáo và học sinh trong đám mây hồng",
    },
    {
      id: 14,
      category: "vocabulary",
      title: "1. Giải nghĩa từ",
      headerDate,
      headerLesson,
      vocabItems: [
        {
          term: "Ja Ka, Mư Hoa, Ja Prok, Mư Nhơ",
          definition: "Tên các bạn nhỏ người Chăm.",
          imageLabel: "Hình ảnh các bạn nhỏ người Chăm",
        },
        {
          term: "Hoa ngũ sắc",
          definition:
            "Hoa của loài cây thân gỗ, thân nhỏ, mọc thành bụi; hoa có nhiều màu rực rỡ tạo thành chùm.",
          imageLabel: "Hình ảnh hoa ngũ sắc rực rỡ",
        },
      ],
    },
    {
      id: 15,
      category: "question_1",
      title: "Câu hỏi 1",
      headerDate,
      headerLesson,
      leftColumn: {
        header: "2. Trả lời câu hỏi",
        subHeader: "TÌM HIỂU BÀI",
        content: [
          "Câu 1: Các bạn nhỏ có những hoạt động vui chơi nào trên đồng cỏ đầu làng?",
          "Chuyện gì đã xảy ra ở đó?",
        ],
      },
      rightColumn: {
        header: "LÀM VIỆC CHUNG",
        content: [
          "+ Trên đồng cỏ các bạn thường vui chơi, vỗ trống, múa hát,... các bạn múa hát tưng bừng theo nhịp trống của Ja Ka.",
          "+ Tại chỗ vui chơi của các bạn có một bãi rác và nó lớn dần lên, bốc mùi.",
        ],
      },
    },
    {
      id: 16,
      category: "question_2",
      title: "Câu hỏi 2",
      headerDate,
      headerLesson,
      leftColumn: {
        header: "2. Trả lời câu hỏi",
        subHeader: "TÌM HIỂU BÀI",
        content: [
          "Câu 2: Khi thấy đồng cỏ có nguy cơ trở thành bãi rác, các bạn nhỏ lo buồn thế nào?",
          "Các bạn nhỏ đã có ý tưởng gì?",
        ],
      },
      rightColumn: {
        header: "LÀM VIỆC CHUNG",
        content: [
          "+ Khi thấy cánh đồng cỏ có thể thành bãi rác, các bạn nhỏ rất lo buồn (chẳng hò hét, nô đùa như mọi ngày, Mư Nhơ thở dài; Mư Hoa giấu những giọt nước mắt; Ja Ka, Ja Prok rầu rĩ,...).",
          "+ Mư Hoa đã nghĩ ra ý tưởng và được các bạn tán thành: cải tạo đồng cỏ thành cánh đồng hoa.",
        ],
      },
    },
    {
      id: 17,
      category: "question_3",
      title: "Câu hỏi 3",
      headerDate,
      headerLesson,
      leftColumn: {
        header: "2. Trả lời câu hỏi",
        subHeader: "TÌM HIỂU BÀI",
        content: [
          "Câu 3: Các bạn nhỏ đã thực hiện ý tưởng đó như thế nào và kết quả ra sao?",
        ],
      },
      rightColumn: {
        header: "LÀM VIỆC CHUNG",
        content: [
          "+ Các bạn nói với cô bác trong làng và được nhiều người hưởng ứng. Các bạn cùng cô bác dọn rác, xới đất, gieo hạt, trồng cây. Ngày ngày tưới nước, nhổ cỏ, bắt sâu.",
          "+ Kết quả: Cây đâm chồi, nảy lộc, với đồng hoa đẹp, ngôi làng trở nên nổi tiếng, đón nhiều khách tham quan....",
        ],
      },
    },
    {
      id: 18,
      category: "question_4",
      title: "Câu hỏi 4",
      headerDate,
      headerLesson,
      leftColumn: {
        header: "2. Trả lời câu hỏi",
        subHeader: "TÌM HIỂU BÀI",
        content: ["Câu 4: Kể tóm tắt nội dung câu chuyện “Cánh đồng hoa” theo gợi ý."],
      },
      rightColumn: {
        header: "LÀM VIỆC CHUNG",
        content: [
          "Ja Ka và các bạn thường vui chơi trên đồng cỏ. Gần đây trên đồng cỏ xuất hiện bãi rác lớn. Các bạn rất buồn và lo lắng vì nguy cơ đồng cỏ sẽ thành bãi rác.",
          "Bỗng Mư Hoa nghĩ ra ý tưởng biến cánh đồng cỏ thành cánh đồng hoa để mọi người không đến đổ rác. Mọi người chung tay và cánh đồng hoa rực rỡ đã ra đời.",
        ],
      },
    },
    {
      id: 19,
      category: "question_5",
      title: "Câu hỏi 5",
      headerDate,
      headerLesson,
      leftColumn: {
        header: "2. Trả lời câu hỏi",
        subHeader: "TÌM HIỂU BÀI",
        content: ["Câu 5: Em rút ra được bài học gì từ câu chuyện?"],
      },
      rightColumn: {
        header: "LÀM VIỆC CHUNG",
        content: [
          "- Em sẽ học theo các bạn sẽ bàn bạc với các bạn cùng nhau dọn vệ sinh trong trường, khu phố, thôn buôn,...",
          "- Cùng có ý thức bảo vệ môi trường, không xả rác bừa bãi và tích cực trồng cây xanh.",
        ],
      },
    },
    {
      id: 20,
      category: "lesson_core",
      title: "3. Nội dung bài học",
      headerDate,
      headerLesson,
      coreMessage:
        "Cần có những việc làm cụ thể để góp phần làm cho làng quê khu phố luôn sạch, đẹp. Việc làm đó dù là bé nhỏ cũng khiến chúng ta và mọi người đều cảm thấy hạnh phúc.",
    },
    {
      id: 21,
      category: "practice_task_1",
      title: "4. Luyện tập - Bài 1",
      headerDate,
      headerLesson,
      leftColumn: {
        header: "4. Luyện tập theo văn bản đọc",
        subHeader: "Bài 1",
        content: [
          "Bài 1. Xếp những từ in đậm dưới đây vào nhóm thích hợp: động từ - Tính từ.\n\n+ Mỗi lần Ja Ka vỗ trống, các bạn lại cùng múa hát tưng bừng.\n+ Bọn mình còn đâu chỗ mà vui chơi!\n+ Biết ý tưởng đó, nhiều cô bác trong làng đã hưởng ứng.\n+ Nhóm bạn vui mừng nhảy múa, ca hát giữa muôn hoa rực rỡ, trong tiếng trống rộn ràng.",
        ],
      },
      rightColumn: {
        header: "LÀM VIỆC NHÓM",
        subHeader: "Làm việc nhóm 4, trình bày vào bảng và báo cáo trước lớp:",
        tableData: [
          { col1: "vui chơi", col2: "tưng bừng" },
          { col1: "hưởng ứng", col2: "rộn ràng" },
        ],
        content: [],
      },
    },
    {
      id: 22,
      category: "practice_task_2",
      title: "4. Luyện tập - Bài 2",
      headerDate,
      headerLesson,
      leftColumn: {
        header: "4. Luyện tập theo văn bản đọc",
        subHeader: "Bài 2",
        content: [
          "Bài 2. Tìm từ có thể thay thế từ in đậm trong mỗi câu ở bài tập 1.\n\nLàm việc nhóm 2, trình bày vào phiếu học tập và báo cáo trước lớp.",
        ],
      },
      rightColumn: {
        header: "LÀM VIỆC NHÓM",
        subHeader: "PHIẾU HỌC TẬP",
        content: [
          "Tìm từ có thể thay thế từ in đậm trong mỗi câu ở bài tập 1:",
          "+ Tưng bừng : thay thế: rộn ràng, rộn rã, sôi nổi,...",
          "+ Vui chơi: thay thế: vui đùa, nô đùa, đùa nghịch,...",
          "+ Hưởng ứng: thay thế: ủng hộ, tán thành, đồng thuận,...",
          "+ Rộn ràng: thay thế: rộn vang, rộn rã,...",
        ],
      },
    },
    {
      id: 23,
      category: "transition_apply",
      title: "Vận dụng",
      cloudText: "VẬN DỤNG",
      subtitle: "Em bé cưỡi bút chì cầu vồng và nơ ruy băng",
    },
    {
      id: 24,
      category: "apply_action",
      title: "Vận dụng thực tế",
      headerDate,
      headerLesson,
      subtitle: "HS suy nghĩ cá nhân và nêu một số việc làm tốt tại trường, lớp hoặc nơi em ở.",
      dos: ["trồng cây", "nhặt rác", "tái chế đồ nhựa", "tưới nước chăm sóc bồn hoa"],
      donts: ["đốt rơm rạ", "xả rác bừa bãi", "chặt phá cây xanh", "bẻ cành hoa"],
    },
    {
      id: 25,
      category: "goodbye",
      title: "Tạm biệt!",
      cloudText: "TẠM BIỆT!",
      subtitle: "Chúc quý thầy cô mạnh khỏe, chúc các em chăm ngoan học giỏi!",
    },
  ];
}

// =========================================================================
// 5. BÀI DẠY KHÁC THEO CHƯƠNG TRÌNH (TOÁN, KHOA HỌC, LỊCH SỬ ĐỊA LÝ, V.V.)
// =========================================================================
function buildGenericCurriculumSlides(
  rawTitle: string,
  clTitle: string,
  subject: string,
  grade: number,
  schoolName: string,
  teacherName: string,
  className: string,
  academicYear: string
): TeachingSlide[] {
  const headerDate = "Thứ……ngày……tháng…..năm 2024";
  const headerLesson = `MÔN ${subject.toUpperCase()}: ${clTitle.toUpperCase()}`;

  return [
    {
      id: 1,
      category: "cover",
      title: "Bìa bài giảng",
      headerLesson: clTitle.toUpperCase(),
      leftColumn: {
        header: schoolName.toUpperCase(),
        content: [
          "CHÀO MỪNG QUÝ THẦY CÔ VỀ DỰ GIỜ THĂM LỚP",
          `MÔN ${subject.toUpperCase()} LỚP ${grade}`,
          clTitle.toUpperCase(),
        ],
      },
      subtitle: `Giáo viên: ${teacherName} — Lớp: ${className}`,
    },
    {
      id: 2,
      category: "transition_warmup",
      title: "Khởi động",
      cloudText: "Khởi động",
      subtitle: "Khởi động hứng khởi trước giờ học",
    },
    {
      id: 3,
      category: "warmup_picture",
      title: "Khởi động: Trò chơi kết nối tri thức",
      paragraphs: [
        `Các em học sinh cùng tham gia trò chơi tương tác khởi động để chuẩn bị tâm thế bước vào bài học "${clTitle}".`,
      ],
      imageLabel: "Hoạt động khởi động tương tác lớp học",
    },
    {
      id: 4,
      category: "transition_explore",
      title: "Khám phá",
      cloudText: "KHÁM PHÁ",
      subtitle: "Bảng nơ hồng, bút chì và cầu vồng",
    },
    {
      id: 5,
      category: "reading_passage_1",
      title: "1. Khám phá kiến thức mới",
      headerDate,
      headerLesson,
      paragraphs: [
        `Nội dung trọng tâm của bài học "${clTitle}":`,
        "- Học sinh quan sát, phân tích tình huống thực tế hoặc ngữ liệu chuẩn.",
        "- Rút ra kiến thức, quy tắc, công thức hoặc bài học quan trọng cần ghi nhớ.",
      ],
    },
    {
      id: 6,
      category: "reading_passage_2",
      title: "2. Phân tích & Hình thành kiến thức",
      headerDate,
      headerLesson,
      paragraphs: [
        "- Thảo luận nhóm đôi hoặc nhóm 4 để làm rõ các khái niệm, quy tắc.",
        "- Đại diện các nhóm báo cáo kết quả trước lớp, thầy cô và các bạn cùng nhận xét.",
      ],
    },
    {
      id: 7,
      category: "transition_practice",
      title: "Luyện tập - Thực hành",
      cloudText: "Luyện tập",
      subtitle: "Cầu vồng và bút chì học tập",
    },
    {
      id: 8,
      category: "practice_task_1",
      title: "Bài tập 1: Luyện tập cơ bản",
      headerDate,
      headerLesson,
      leftColumn: {
        header: "Bài tập 1",
        subHeader: "Luyện tập",
        content: [`Vận dụng trực tiếp kiến thức bài học "${clTitle}" để hoàn thành bài tập 1.`],
      },
      rightColumn: {
        header: "ĐÁP ÁN VÀ HƯỚNG DẪN",
        content: [
          "- Đọc kĩ đề bài, xác định yêu cầu.",
          "- Thực hiện giải từng bước cẩn thận và chính xác.",
        ],
      },
    },
    {
      id: 9,
      category: "practice_task_2",
      title: "Bài tập 2: Luyện tập mở rộng",
      headerDate,
      headerLesson,
      leftColumn: {
        header: "Bài tập 2",
        subHeader: "Luyện tập",
        content: ["Thực hành giải bài tập nâng cao hoặc xử lý tình huống thực tế."],
      },
      rightColumn: {
        header: "LÀM VIỆC NHÓM",
        subHeader: "PHIẾU HỌC TẬP",
        content: [
          "- Hoàn thành vào vở hoặc phiếu học tập cá nhân.",
          "- Trao đổi, chữa bài cùng bạn bên cạnh.",
        ],
      },
    },
    {
      id: 10,
      category: "lesson_core",
      title: "Ghi nhớ trọng tâm",
      headerDate,
      headerLesson,
      coreMessage: `Kiến thức cốt lõi của bài học "${clTitle}" giúp các em nắm vững phương pháp và tự tin vận dụng vào đời sống hàng ngày.`,
    },
    {
      id: 11,
      category: "transition_apply",
      title: "Vận dụng",
      cloudText: "VẬN DỤNG",
      subtitle: "Bảng nơ xanh",
    },
    {
      id: 12,
      category: "apply_writing",
      title: "Vận dụng thực tế",
      headerDate,
      headerLesson,
      paragraphs: [
        `Về nhà thực hành hoặc chia sẻ với bố mẹ, người thân về những điều thú vị em đã học được trong bài "${clTitle}".`,
      ],
    },
    {
      id: 13,
      category: "goodbye",
      title: "Tạm biệt!",
      cloudText: "TẠM BIỆT!",
      subtitle: "Chúc quý thầy cô mạnh khỏe, chúc các em chăm ngoan học giỏi!",
    },
  ];
}
