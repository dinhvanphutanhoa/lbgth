import React, { useState, useEffect } from "react";
import {
  X,
  Presentation,
  Download,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Minimize2,
  BookOpen,
  Sparkles,
  CheckCircle2,
  ExternalLink,
  Layers,
  HelpCircle,
  Eye,
  Check,
} from "lucide-react";
import { LessonPlan, SchoolInfo } from "../types";
import { downloadLessonPresentationPptx } from "../utils/pptxExportHelper";
import {
  buildDetailedClassroomDeck,
  DetailedClassroomDeck,
  TeachingSlide,
} from "../utils/classroomSlideDataHelper";

interface PresentationViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
  plan: LessonPlan;
  schoolInfo: SchoolInfo;
}

export const PresentationViewerModal: React.FC<PresentationViewerModalProps> = ({
  isOpen,
  onClose,
  plan,
  schoolInfo,
}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  // Interactive states for teaching in class
  const [revealedAnswers, setRevealedAnswers] = useState<Record<number, boolean>>({});
  const [selectedTrafficSign, setSelectedTrafficSign] = useState<number | null>(null);

  useEffect(() => {
    setCurrentSlideIndex(0);
    setRevealedAnswers({});
    setSelectedTrafficSign(null);
  }, [plan]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "ArrowRight" || e.key === "Space") {
        e.preventDefault();
        setCurrentSlideIndex((prev) => Math.min(prev + 1, deck.slides.length - 1));
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        setCurrentSlideIndex((prev) => Math.max(prev - 1, 0));
      } else if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  if (!isOpen) return null;

  const deck: DetailedClassroomDeck = buildDetailedClassroomDeck(plan, schoolInfo);
  const totalSlides = deck.slides.length;
  const currentSlide: TeachingSlide = deck.slides[currentSlideIndex] || deck.slides[0];

  const handleNext = () => {
    if (currentSlideIndex < totalSlides - 1) {
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex(currentSlideIndex - 1);
    }
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
        setIsFullscreen(false);
      }
    }
  };

  const handleDownloadPptx = async () => {
    try {
      setIsDownloading(true);
      await downloadLessonPresentationPptx(plan, schoolInfo);
      setDownloadSuccess(true);
      setTimeout(() => setDownloadSuccess(false), 3500);
    } catch (err) {
      console.error(err);
      alert("Đã xảy ra lỗi khi tạo tệp PowerPoint. Vui lòng thử lại!");
    } finally {
      setIsDownloading(false);
    }
  };

  const toggleReveal = (slideId: number) => {
    setRevealedAnswers((prev) => ({
      ...prev,
      [slideId]: !prev[slideId],
    }));
  };

  const tailieuGiaoDucUrl = `https://tailieugiaoduc.edu.vn/?s=${encodeURIComponent(
    `bài giảng ${deck.cleanTitle} ${deck.subject} lớp ${deck.grade}`
  )}`;

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4 overflow-y-auto">
      <div
        id="presentation-modal-container"
        className="relative w-full max-w-6xl bg-slate-900 rounded-2xl shadow-2xl border border-slate-700/80 flex flex-col max-h-[96vh] overflow-hidden"
      >
        {/* Modal Top Header Bar */}
        <div className="flex items-center justify-between px-5 py-3.5 bg-slate-800 border-b border-slate-700 text-white">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-red-600 flex items-center justify-center text-white font-bold shadow-md shadow-red-900/30">
              <Presentation className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-red-500/20 text-red-400 border border-red-500/30">
                  Mẫu Slide Chuẩn Sư Phạm 25 Trang
                </span>
                <span className="text-xs text-slate-400">
                  Tuần {deck.week} • Tiết {deck.period} • Lớp {deck.className}
                </span>
              </div>
              <h2 className="text-base font-bold text-white tracking-wide truncate max-w-xl">
                {deck.lessonTitle} — {deck.subject}
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={tailieuGiaoDucUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 bg-slate-700/60 hover:bg-slate-700 hover:text-white rounded-lg transition-colors border border-slate-600/60"
              title="Kho bài giảng Tailieugiaoduc.edu.vn"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Tailieugiaoduc.edu.vn
            </a>

            <button
              onClick={handleDownloadPptx}
              disabled={isDownloading}
              className={`inline-flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-lg transition-all shadow-md ${
                downloadSuccess
                  ? "bg-emerald-600 text-white shadow-emerald-900/30"
                  : "bg-red-600 hover:bg-red-500 text-white shadow-red-900/30 active:scale-95"
              } disabled:opacity-50`}
            >
              {downloadSuccess ? (
                <>
                  <CheckCircle2 className="w-4 h-4" />
                  Đã tải file .pptx!
                </>
              ) : (
                <>
                  <Download className="w-4 h-4" />
                  {isDownloading ? "Đang tạo PPTX..." : "Tải PowerPoint (.pptx)"}
                </>
              )}
            </button>

            <button
              onClick={toggleFullscreen}
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-700/60 rounded-lg transition-colors"
              title="Toàn màn hình"
            >
              {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>

            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white hover:bg-red-500/20 rounded-lg transition-colors"
              title="Đóng xem trước"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Main Stage View Area (16:9 Aspect Ratio) */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 flex flex-col items-center justify-center bg-slate-950">
          <div className="w-full max-w-4xl aspect-[16/9] bg-white rounded-xl shadow-2xl relative overflow-hidden border-4 border-blue-900 flex flex-col select-none">
            {/* Corner Floral Decorations matching the teacher's sample */}
            <div className="absolute top-2 right-2 text-amber-500 text-lg z-20 pointer-events-none">
              🌿🌸
            </div>
            <div className="absolute bottom-2 left-2 text-amber-500 text-lg z-20 pointer-events-none">
              🌸🌿
            </div>

            {/* Inner Border Frame for Content Slides */}
            {currentSlide.category !== "cover" &&
              currentSlide.category !== "transition_warmup" &&
              currentSlide.category !== "transition_explore" &&
              currentSlide.category !== "transition_read" &&
              currentSlide.category !== "transition_comprehend" &&
              currentSlide.category !== "transition_apply" &&
              currentSlide.category !== "goodbye" && (
                <div className="absolute inset-2 border-2 border-blue-800 rounded-sm pointer-events-none z-10" />
              )}

            {/* SLIDE RENDERER BASED ON CATEGORY */}
            {renderSlideContent(
              currentSlide,
              deck,
              revealedAnswers[currentSlide.id] ?? false,
              () => toggleReveal(currentSlide.id),
              selectedTrafficSign,
              setSelectedTrafficSign
            )}
          </div>

          {/* Slide Navigator strip */}
          <div className="w-full max-w-4xl mt-3 flex items-center justify-between text-xs text-slate-400 px-1">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-slate-200">
                Slide {currentSlideIndex + 1} / {totalSlides}:
              </span>
              <span className="text-slate-300 font-medium truncate max-w-xs sm:max-w-md">
                {currentSlide.title}
              </span>
            </div>

            <div className="flex items-center gap-1.5">
              <span className="hidden sm:inline text-[11px] text-slate-500 mr-2">
                Dùng phím ← / → để chuyển trang
              </span>
              <button
                onClick={handlePrev}
                disabled={currentSlideIndex === 0}
                className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white disabled:opacity-30 disabled:pointer-events-none transition-colors"
                title="Trang trước"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="px-2.5 py-1 bg-slate-800 rounded-md font-mono text-xs text-amber-400 font-bold border border-slate-700">
                {currentSlideIndex + 1} / {totalSlides}
              </span>
              <button
                onClick={handleNext}
                disabled={currentSlideIndex === totalSlides - 1}
                className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white disabled:opacity-30 disabled:pointer-events-none transition-colors"
                title="Trang sau"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Slide Thumbnail Strip for Quick Jumping */}
          <div className="w-full max-w-4xl mt-3 flex items-center gap-1.5 overflow-x-auto py-1 px-1 scrollbar-thin scrollbar-thumb-slate-700">
            {deck.slides.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => setCurrentSlideIndex(idx)}
                className={`flex-shrink-0 px-2.5 py-1 rounded text-[11px] font-medium transition-all ${
                  currentSlideIndex === idx
                    ? "bg-red-600 text-white font-bold shadow-md scale-105"
                    : "bg-slate-800/80 text-slate-400 hover:bg-slate-700 hover:text-white"
                }`}
                title={s.title}
              >
                {idx + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// =========================================================================
// SUB-RENDERER: Renders individual teaching slide layouts faithfully
// =========================================================================
function renderSlideContent(
  slide: TeachingSlide,
  deck: DetailedClassroomDeck,
  isRevealed: boolean,
  onToggleReveal: () => void,
  selectedTrafficSign: number | null,
  onSelectTrafficSign: (idx: number) => void
) {
  switch (slide.category) {
    // ------------------------------------------------------------------
    // SLIDE 1: BÌA BÀI GIẢNG DỰ GIỜ THĂM LỚP
    // ------------------------------------------------------------------
    case "cover":
      return (
        <div className="w-full h-full bg-gradient-to-b from-sky-100 via-sky-50 to-blue-50 flex flex-col justify-between p-6 sm:p-8 text-center relative overflow-hidden">
          {/* Top School Info */}
          <div className="z-10">
            <h4 className="text-sm sm:text-base font-bold text-sky-950 uppercase tracking-widest drop-shadow-xs">
              {deck.schoolName} ………………..
            </h4>
          </div>

          {/* Welcome Banner in Red/Gold */}
          <div className="z-10 my-auto">
            <h1 className="text-2xl sm:text-4xl font-extrabold text-red-600 tracking-wide uppercase leading-tight drop-shadow-[0_2px_4px_rgba(251,191,36,0.5)]">
              Chào Mừng Quý Thầy Cô
              <br />
              Về Dự Giờ Thăm Lớp
            </h1>

            <div className="mt-4 sm:mt-6">
              <h3 className="text-base sm:text-xl font-bold text-blue-900 tracking-wider">
                MÔN {deck.subject.toUpperCase()} LỚP {deck.grade}
              </h3>
              <h2 className="text-xl sm:text-3xl font-extrabold text-blue-950 mt-1 uppercase tracking-wide">
                {slide.headerLesson ||
                  (deck.lessonTitle.toLowerCase().includes("cánh đồng hoa")
                    ? "ĐỌC: CÁNH ĐỒNG HOA (T1+2)"
                    : deck.lessonTitle.toUpperCase())}
              </h2>
            </div>
          </div>

          {/* Teacher & Class Info Bottom Right Card */}
          <div className="z-10 flex justify-end">
            <div className="bg-amber-100/90 border border-amber-300 rounded-lg px-4 py-2 text-left shadow-sm text-amber-950">
              <p className="text-xs sm:text-sm font-bold">Giáo viên: {deck.teacherName}</p>
              <p className="text-xs sm:text-sm font-bold">Lớp: {deck.className}</p>
            </div>
          </div>

          {/* Bottom Lotus Blossom Strip */}
          <div className="absolute bottom-0 inset-x-0 h-6 bg-gradient-to-r from-emerald-400 via-green-400 to-emerald-400 flex items-center justify-center text-[10px] font-bold text-emerald-950 tracking-wider uppercase">
            🌸 🌸 🌸 HỒ SEN TƯƠI THẮM — CHÀO MỪNG TIẾT HỌC 🌸 🌸 🌸
          </div>
        </div>
      );

    // ------------------------------------------------------------------
    // SLIDE 2: CHUYỂN CẢNH KHỞI ĐỘNG
    // ------------------------------------------------------------------
    case "transition_warmup":
      return (
        <div className="w-full h-full bg-white flex flex-col justify-between p-6 sm:p-10 relative overflow-hidden">
          <div className="text-center text-red-500 text-xl tracking-widest">
            💖 ❤️ 💖 ❤️ 💖
          </div>

          <div className="my-auto text-center">
            <h1 className="text-5xl sm:text-7xl font-serif italic font-extrabold text-blue-700 drop-shadow-[0_4px_6px_rgba(147,197,253,0.8)]">
              Khởi động
            </h1>
            <p className="text-slate-500 text-sm mt-3 font-medium">
              Cùng hát vang bài ca vui nhộn và làm quen không khí lớp học!
            </p>
          </div>

          <div className="bg-rose-100 rounded-xl p-3 text-center border border-rose-200">
            <p className="text-rose-700 font-bold text-sm tracking-wide">
              👫 👫 👫 CẢ LỚP CÙNG HÁT VANG VÀ KHỞI ĐỘNG HỨNG KHỞI! 👫 👫 👫
            </p>
          </div>
        </div>
      );

    // ------------------------------------------------------------------
    // SLIDE 3: TRÒ CHƠI BIỂN BÁO GIAO THÔNG
    // ------------------------------------------------------------------
    case "warmup_game":
      return (
        <div className="w-full h-full p-4 sm:p-6 flex flex-col justify-between">
          <SlideTopHeader
            dateText={slide.headerDate}
            lessonTitle="KHỞI ĐỘNG"
          />

          <div className="text-center my-1">
            <h2 className="text-base sm:text-lg font-bold text-blue-900 uppercase tracking-wide">
              TRÒ CHƠI: BIỂN BÁO GIAO THÔNG
            </h2>
            <p className="text-[11px] text-slate-500">
              Nhấp vào từng ô để cùng các bạn đọc tên và ý nghĩa của biển báo
            </p>
          </div>

          {/* 10 Traffic Signs Interactive Grid */}
          <div className="grid grid-cols-5 gap-2 my-auto px-2">
            {(slide.gameGrid || []).map((sign, idx) => {
              const isSelected = selectedTrafficSign === idx;
              const isWarning = idx < 5;
              return (
                <button
                  key={idx}
                  onClick={() => onSelectTrafficSign(idx)}
                  className={`p-1.5 rounded-lg border-2 text-center transition-all flex flex-col items-center justify-between h-20 sm:h-24 ${
                    isSelected
                      ? "border-blue-600 bg-blue-50 shadow-md scale-105"
                      : "border-slate-300 hover:border-blue-400 bg-white"
                  }`}
                >
                  <div className="text-xl sm:text-2xl my-auto">
                    {isWarning ? "⚠️" : "⛔"}
                  </div>
                  <span
                    className={`text-[9px] sm:text-[10px] leading-tight font-bold line-clamp-2 ${
                      isSelected ? "text-blue-700 font-extrabold" : "text-slate-800"
                    }`}
                  >
                    {sign.name}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="text-center text-[11px] text-blue-900 font-semibold bg-blue-50 rounded py-1">
            {selectedTrafficSign !== null
              ? `👉 Đã chọn: ${(slide.gameGrid || [])[selectedTrafficSign]?.name}`
              : "Thầy cô nhấp vào từng biển báo để học sinh trả lời trước lớp!"}
          </div>
        </div>
      );

    // ------------------------------------------------------------------
    // SLIDE 4: CHUYỂN CẢNH KHÁM PHÁ
    // ------------------------------------------------------------------
    case "transition_explore":
      return (
        <div className="w-full h-full bg-white flex items-center justify-center p-6 sm:p-10 relative">
          <div className="w-full max-w-2xl grid grid-cols-3 gap-6 items-center">
            {/* Hanging Pink Board */}
            <div className="col-span-2 bg-pink-50 border-2 border-pink-400 rounded-2xl p-6 sm:p-8 text-center shadow-lg relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-pink-500 border-2 border-pink-700 shadow-sm flex items-center justify-center text-white text-xs">
                📌
              </div>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-red-600 tracking-wider">
                KHÁM PHÁ
              </h1>
              <p className="text-xs sm:text-sm text-pink-800 font-medium mt-3">
                Cùng tìm hiểu bài học mới qua từng trang sách giáo khoa
              </p>
            </div>

            {/* Rainbow, books & kids */}
            <div className="col-span-1 bg-emerald-50 border border-emerald-200 rounded-2xl p-4 text-center">
              <div className="text-4xl my-1">🌈</div>
              <div className="text-2xl my-1">📖 ✏️</div>
              <div className="text-2xl my-1">👧 👦</div>
              <p className="text-[10px] text-emerald-800 font-bold mt-2">
                Hăng say học tập
              </p>
            </div>
          </div>
        </div>
      );

    // ------------------------------------------------------------------
    // SLIDES 5, 6, 7: VĂN BẢN TOÀN BÀI ĐỌC
    // ------------------------------------------------------------------
    case "reading_passage_1":
    case "reading_passage_2":
    case "reading_passage_3":
      return (
        <div className="w-full h-full p-4 sm:p-6 flex flex-col justify-between">
          <SlideTopHeader
            dateText={slide.headerDate}
            lessonTitle={slide.headerLesson}
          />

          <div className="my-auto px-4 sm:px-6 overflow-y-auto max-h-[72%] space-y-3">
            {(slide.paragraphs || []).map((p, idx) => (
              <p
                key={idx}
                className="text-xs sm:text-sm md:text-[15px] font-serif text-blue-950 leading-relaxed indent-6 text-justify"
              >
                {p}
              </p>
            ))}

            {slide.author && (
              <p className="text-right text-xs sm:text-sm italic font-serif text-blue-900 font-semibold pt-2">
                {slide.author}
              </p>
            )}
          </div>

          <div className="text-center text-[11px] text-slate-500 italic">
            (Học sinh theo dõi sách giáo khoa và luyện đọc diễn cảm)
          </div>
        </div>
      );

    // ------------------------------------------------------------------
    // SLIDE 8: CHUYỂN CẢNH LUYỆN ĐỌC
    // ------------------------------------------------------------------
    case "transition_read":
      return (
        <div className="w-full h-full bg-white flex items-center justify-center p-6">
          <div className="w-full max-w-xl bg-rose-50 border-4 border-rose-500 rounded-3xl p-6 sm:p-8 text-center shadow-xl">
            <h1 className="text-3xl sm:text-5xl font-extrabold text-red-600 tracking-wider">
              👩‍🏫 LUYỆN ĐỌC 📖
            </h1>
            <p className="text-sm sm:text-base font-medium text-rose-800 mt-3 italic">
              Đọc đúng, đọc to, rõ ràng và diễn cảm
            </p>
          </div>
        </div>
      );

    // ------------------------------------------------------------------
    // SLIDE 9: I. LUYỆN ĐỌC - 1. ĐỌC MẪU
    // ------------------------------------------------------------------
    case "read_model":
      return (
        <div className="w-full h-full p-4 sm:p-6 flex flex-col justify-between">
          <SlideTopHeader
            dateText={slide.headerDate}
            lessonTitle={slide.headerLesson}
          />

          <div className="px-4 sm:px-6 my-auto space-y-2">
            <h3 className="text-sm sm:text-base font-bold text-red-600 underline">
              I. LUYỆN ĐỌC
            </h3>
            <h4 className="text-sm sm:text-base font-bold text-red-600 underline">
              1. Đọc mẫu.
            </h4>

            <div className="bg-blue-50/70 border border-blue-200 rounded-xl p-3 sm:p-4 text-xs sm:text-sm text-blue-950 space-y-2 leading-relaxed font-serif">
              {(slide.leftColumn?.content || []).map((line, idx) => (
                <p key={idx} className={idx === 0 ? "font-medium" : "pl-3 font-semibold"}>
                  {line}
                </p>
              ))}
            </div>
          </div>

          <div className="text-center text-[11px] text-slate-500">
            Giáo viên đọc mẫu — Cả lớp theo dõi và chú ý cách ngắt nghỉ hơi
          </div>
        </div>
      );

    // ------------------------------------------------------------------
    // SLIDE 10: 2. LUYỆN ĐỌC ĐÚNG (TỪ KHÓ & CÂU DÀI)
    // ------------------------------------------------------------------
    case "read_correct":
      return (
        <div className="w-full h-full p-4 sm:p-6 flex flex-col justify-between">
          <SlideTopHeader
            dateText={slide.headerDate}
            lessonTitle={slide.headerLesson}
          />

          <div className="px-4 sm:px-6 my-auto space-y-3">
            <h3 className="text-sm sm:text-base font-bold text-red-600 underline">
              I. LUYỆN ĐỌC
            </h3>
            <h4 className="text-sm sm:text-base font-bold text-red-600 underline">
              2. Luyện đọc đúng:
            </h4>

            {/* 2.1 Tu kho */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 bg-amber-50 border border-amber-200 p-2.5 rounded-lg">
              <span className="text-xs sm:text-sm font-bold text-red-600 underline shrink-0">
                2.1. Luyện đọc từ khó:
              </span>
              <span className="text-xs sm:text-sm font-serif italic text-blue-950 font-bold">
                Chọi cỏ gà,  vỗ trống,  chỗ đổ rác,  hoa ngũ sắc
              </span>
            </div>

            {/* 2.2 Cau dai co dau ngat nghi */}
            <div className="bg-blue-50 border border-blue-200 p-3 rounded-lg space-y-1">
              <span className="text-xs sm:text-sm font-bold text-red-600 underline block">
                2.2. Luyện đọc câu dài:
              </span>
              <p className="text-xs sm:text-sm font-serif italic text-blue-950 font-bold leading-relaxed">
                Họ hồ hởi<span className="text-red-600 font-extrabold">/</span> cùng các bạn<span className="text-red-600 font-extrabold">/</span> bắt tay vào dọn rác,<span className="text-red-600 font-extrabold">/</span> xới đất,<span className="text-red-600 font-extrabold">/</span> gieo hạt,<span className="text-red-600 font-extrabold">/</span> trồng cây;<span className="text-red-600 font-extrabold">//</span> ngày ngày,<span className="text-red-600 font-extrabold">/</span> tưới nước,<span className="text-red-600 font-extrabold">/</span> nhổ cỏ,<span className="text-red-600 font-extrabold">/</span> bắt sâu.<span className="text-red-600 font-extrabold">//</span>
              </p>
              <span className="text-[10px] text-slate-500 block pt-1">
                (Ghi chú: Dấu <span className="text-red-600 font-bold">/</span> ngắt hơi, dấu <span className="text-red-600 font-bold">//</span> nghỉ hơi)
              </span>
            </div>
          </div>

          <div className="text-center text-[11px] text-slate-500">
            Học sinh đọc cá nhân, nhóm đôi, đồng thanh trước lớp
          </div>
        </div>
      );

    // ------------------------------------------------------------------
    // SLIDE 11: 3. LUYỆN ĐỌC DIỄN CẢM
    // ------------------------------------------------------------------
    case "read_expression":
      return (
        <div className="w-full h-full p-4 sm:p-6 flex flex-col justify-between">
          <SlideTopHeader
            dateText={slide.headerDate}
            lessonTitle={slide.headerLesson}
          />

          <div className="px-4 sm:px-6 my-auto space-y-3">
            <h3 className="text-sm sm:text-base font-bold text-red-600 underline">
              I. LUYỆN ĐỌC
            </h3>
            <h4 className="text-sm sm:text-base font-bold text-red-600 underline">
              3. Luyện đọc diễn cảm:
            </h4>

            <div className="space-y-2 text-xs sm:text-sm font-serif text-blue-950">
              {(slide.bulletPoints || []).map((bp, idx) => (
                <p key={idx} className="leading-relaxed font-medium">
                  {bp}
                </p>
              ))}
            </div>

            {/* Pink Cloud Badge */}
            <div className="pt-2 flex justify-center">
              <div className="bg-rose-500 text-white font-bold text-sm sm:text-base px-6 py-2.5 rounded-full shadow-lg border-2 border-rose-700 tracking-wide uppercase text-center">
                LUYỆN ĐỌC DIỄN CẢM THEO NHÓM ĐÔI
              </div>
            </div>
          </div>

          <div className="text-center text-[11px] text-slate-500">
            Từng nhóm 2 học sinh đọc cho nhau nghe và sửa sai cho bạn
          </div>
        </div>
      );

    // ------------------------------------------------------------------
    // SLIDE 12: 4. LUYỆN ĐỌC LẠI
    // ------------------------------------------------------------------
    case "read_relay":
      return (
        <div className="w-full h-full p-4 sm:p-6 flex flex-col justify-between">
          <SlideTopHeader
            dateText={slide.headerDate}
            lessonTitle={slide.headerLesson}
          />

          <div className="px-4 sm:px-6 my-auto space-y-3">
            <h3 className="text-sm sm:text-base font-bold text-red-600 underline">
              I. LUYỆN ĐỌC
            </h3>
            <h4 className="text-sm sm:text-base font-bold text-red-600 underline">
              4. Luyện đọc lại:
            </h4>

            <div className="grid grid-cols-2 gap-4 items-center pt-2">
              {/* Dark Cloud shape */}
              <div className="bg-slate-900 text-white p-6 rounded-2xl border-2 border-blue-800 shadow-md text-center">
                <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-wide text-amber-300">
                  Đọc nối tiếp
                  <br />
                  theo đoạn
                </h3>
                <p className="text-xs text-slate-300 mt-2 font-serif">
                  Mỗi học sinh đọc 1 đoạn nối tiếp truyền điện
                </p>
              </div>

              {/* Group Discussion visual */}
              <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4 text-center">
                <div className="text-4xl my-2">👨‍🏫 👩‍🎓 👨‍🎓</div>
                <p className="text-xs sm:text-sm font-bold text-blue-900">
                  Cả lớp lắng nghe, nhận xét và bình chọn bạn đọc tốt nhất!
                </p>
              </div>
            </div>
          </div>

          <div className="text-center text-[11px] text-slate-500">
            Khen ngợi và động viên học sinh đọc tiến bộ
          </div>
        </div>
      );

    // ------------------------------------------------------------------
    // SLIDE 13: CHUYỂN CẢNH TIẾT 2 - TÌM HIỂU BÀI
    // ------------------------------------------------------------------
    case "transition_comprehend":
      return (
        <div className="w-full h-full bg-white flex items-center justify-center p-6">
          <div className="w-full max-w-xl bg-rose-50 border-4 border-rose-500 rounded-3xl p-6 sm:p-8 text-center shadow-xl">
            <h2 className="text-lg sm:text-2xl font-bold text-rose-600 uppercase tracking-widest">
              Tiết 2
            </h2>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-red-600 tracking-wider mt-1">
              TÌM HIỂU BÀI
            </h1>
            <p className="text-sm sm:text-base font-medium text-rose-800 mt-3 italic">
              Khám phá chiều sâu ý nghĩa và thông điệp của câu chuyện
            </p>
          </div>
        </div>
      );

    // ------------------------------------------------------------------
    // SLIDE 14: 1. GIẢI NGHĨA TỪ
    // ------------------------------------------------------------------
    case "vocabulary":
      return (
        <div className="w-full h-full p-4 sm:p-6 flex flex-col justify-between">
          <SlideTopHeader
            dateText={slide.headerDate}
            lessonTitle={slide.headerLesson}
          />

          <div className="grid grid-cols-2 gap-3 sm:gap-4 my-auto px-2">
            {/* Left box */}
            <div className="border-2 border-blue-800 rounded-lg p-3 sm:p-4 bg-white flex flex-col justify-start">
              <h3 className="text-xs sm:text-sm font-bold text-red-600 underline">
                TÌM HIỂU BÀI
              </h3>
              <h4 className="text-xs sm:text-sm font-bold text-red-600 underline mb-2">
                1. Giải nghĩa từ
              </h4>
              <div className="text-xs sm:text-sm font-serif text-blue-950 font-semibold space-y-2 leading-relaxed">
                {(slide.leftColumn?.content || []).map((t, idx) => (
                  <p key={idx}>{t}</p>
                ))}
              </div>
            </div>

            {/* Right box: Real photo illustration */}
            <div className="border-2 border-blue-800 rounded-lg p-3 sm:p-4 bg-white flex flex-col justify-between">
              <div className="text-xs sm:text-sm font-serif text-blue-950 font-semibold leading-relaxed">
                {(slide.rightColumn?.content || []).map((t, idx) => (
                  <p key={idx}>{t}</p>
                ))}
              </div>

              <div className="bg-amber-50 border border-amber-300 rounded-lg p-3 text-center my-auto">
                <div className="text-3xl my-1">🌺 🌸 🌼</div>
                <p className="text-[11px] font-serif italic text-amber-900 font-medium">
                  Hoa ngũ sắc nở thành chùm rực rỡ nhiều màu sắc
                </p>
              </div>
            </div>
          </div>

          <div className="text-center text-[11px] text-slate-500">
            Giúp học sinh hiểu rõ các từ ngữ khó trước khi trả lời câu hỏi
          </div>
        </div>
      );

    // ------------------------------------------------------------------
    // SLIDES 15 - 19: CÂU HỎI 1 ĐẾN 5 (2 CỘT: CÂU HỎI & LÀM VIỆC CHUNG)
    // ------------------------------------------------------------------
    case "question_1":
    case "question_2":
    case "question_3":
    case "question_4":
    case "question_5":
      return (
        <div className="w-full h-full p-4 sm:p-6 flex flex-col justify-between">
          <SlideTopHeader
            dateText={slide.headerDate}
            lessonTitle={slide.headerLesson}
          />

          <div className="grid grid-cols-2 gap-3 sm:gap-4 my-auto px-2">
            {/* Left Box: Câu hỏi */}
            <div className="border-2 border-blue-800 rounded-lg p-3 sm:p-4 bg-white flex flex-col justify-start">
              <h3 className="text-xs sm:text-sm font-bold text-red-600 underline">
                TÌM HIỂU BÀI
              </h3>
              <h4 className="text-xs sm:text-sm font-bold text-red-600 underline mb-2">
                2. Trả lời câu hỏi
              </h4>

              <div className="text-xs sm:text-sm md:text-[15px] font-serif text-red-600 font-bold space-y-2 leading-relaxed">
                {(slide.leftColumn?.content || []).map((q, idx) => (
                  <p key={idx}>{q}</p>
                ))}
              </div>
            </div>

            {/* Right Box: LÀM VIỆC CHUNG (Đáp án tương tác) */}
            <div className="border-2 border-blue-800 rounded-lg p-3 sm:p-4 bg-white flex flex-col justify-between">
              <h3 className="text-xs sm:text-base font-bold text-red-600 text-center uppercase tracking-wide mb-2">
                LÀM VIỆC CHUNG
              </h3>

              {isRevealed ? (
                <div className="text-xs sm:text-sm font-serif text-blue-950 font-bold space-y-2 leading-relaxed overflow-y-auto max-h-48 pr-1 animate-fadeIn">
                  {(slide.rightColumn?.content || []).map((ans, idx) => (
                    <p key={idx}>{ans}</p>
                  ))}
                </div>
              ) : (
                <div className="my-auto text-center py-4">
                  <p className="text-xs text-slate-500 mb-2">
                    Học sinh suy nghĩ và phát biểu ý kiến...
                  </p>
                  <button
                    onClick={onToggleReveal}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-bold shadow transition-all active:scale-95"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    Hiện câu trả lời chốt
                  </button>
                </div>
              )}

              {isRevealed && (
                <div className="pt-2 text-right">
                  <button
                    onClick={onToggleReveal}
                    className="text-[10px] text-slate-400 hover:text-slate-600 underline"
                  >
                    Ẩn đáp án
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="text-center text-[11px] text-slate-500">
            Giáo viên gọi học sinh trả lời trước khi bấm hiện nội dung chốt
          </div>
        </div>
      );

    // ------------------------------------------------------------------
    // SLIDE 20: 3. NỘI DUNG BÀI HỌC (KHUNG TRANG TRỌNG)
    // ------------------------------------------------------------------
    case "lesson_core":
      return (
        <div className="w-full h-full p-4 sm:p-6 flex flex-col justify-between">
          <SlideTopHeader
            dateText={slide.headerDate}
            lessonTitle={slide.headerLesson}
          />

          <div className="px-4 sm:px-6 my-auto space-y-3">
            <h3 className="text-sm sm:text-base font-bold text-red-600 underline">
              3. Nội dung
            </h3>

            {/* Floral Green Bordered Card */}
            <div className="bg-gradient-to-b from-emerald-50 to-green-50 border-4 border-green-600 rounded-2xl p-6 sm:p-8 text-center shadow-md relative">
              <span className="text-xs font-bold text-green-700 uppercase tracking-widest block mb-2">
                🌿 🌿 🌿 Ý NGHĨA BÀI HỌC 🌿 🌿 🌿
              </span>
              <p className="text-sm sm:text-lg md:text-xl font-serif italic font-bold text-red-600 leading-relaxed">
                "{slide.coreMessage}"
              </p>
            </div>
          </div>

          <div className="text-center text-[11px] text-slate-500">
            Cả lớp cùng đọc đồng thanh và ghi nhớ bài học ý nghĩa
          </div>
        </div>
      );

    // ------------------------------------------------------------------
    // SLIDE 21: 4. LUYỆN TẬP - BÀI 1 (BẢNG PHÂN LOẠI)
    // ------------------------------------------------------------------
    case "practice_task_1":
      return (
        <div className="w-full h-full p-4 sm:p-6 flex flex-col justify-between">
          <SlideTopHeader
            dateText={slide.headerDate}
            lessonTitle={slide.headerLesson}
          />

          <div className="grid grid-cols-2 gap-3 sm:gap-4 my-auto px-2">
            {/* Left box: De bai */}
            <div className="border-2 border-blue-800 rounded-lg p-3 sm:p-4 bg-white flex flex-col justify-start">
              <h3 className="text-xs sm:text-sm font-bold text-red-600 underline mb-2">
                4. Luyện tập theo văn bản đọc
              </h3>

              <div className="text-xs sm:text-[13px] font-serif text-red-600 font-bold space-y-2 leading-relaxed">
                {(slide.leftColumn?.content || []).map((c, idx) => (
                  <p key={idx} className="whitespace-pre-line">{c}</p>
                ))}
              </div>
            </div>

            {/* Right box: Bang 2 cot */}
            <div className="border-2 border-blue-800 rounded-lg p-3 sm:p-4 bg-white flex flex-col justify-start">
              <h3 className="text-xs sm:text-base font-bold text-red-600 text-center uppercase tracking-wide mb-1">
                LÀM VIỆC NHÓM
              </h3>
              <p className="text-[11px] text-blue-900 font-bold text-center mb-2">
                Làm việc nhóm 4, trình bày vào bảng và báo cáo trước lớp:
              </p>

              <table className="w-full border-collapse border-2 border-blue-900 text-xs sm:text-sm text-center">
                <thead>
                  <tr className="bg-blue-900 text-white font-bold">
                    <th className="border border-blue-900 py-1.5 px-2">Động từ</th>
                    <th className="border border-blue-900 py-1.5 px-2">Tính từ</th>
                  </tr>
                </thead>
                <tbody className="font-serif font-bold text-blue-950">
                  {(slide.rightColumn?.tableData || []).map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 1 ? "bg-blue-50" : ""}>
                      <td className="border border-blue-900 py-1.5 px-2">{row.col1}</td>
                      <td className="border border-blue-900 py-1.5 px-2">{row.col2}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="text-center text-[11px] text-slate-500">
            Đại diện các nhóm báo cáo kết quả trước lớp
          </div>
        </div>
      );

    // ------------------------------------------------------------------
    // SLIDE 22: BÀI 2 (PHIẾU HỌC TẬP)
    // ------------------------------------------------------------------
    case "practice_task_2":
      return (
        <div className="w-full h-full p-4 sm:p-6 flex flex-col justify-between">
          <SlideTopHeader
            dateText={slide.headerDate}
            lessonTitle={slide.headerLesson}
          />

          <div className="grid grid-cols-2 gap-3 sm:gap-4 my-auto px-2">
            {/* Left box */}
            <div className="border-2 border-blue-800 rounded-lg p-3 sm:p-4 bg-white flex flex-col justify-start">
              <h3 className="text-xs sm:text-sm font-bold text-red-600 underline mb-2">
                4. Luyện tập theo văn bản đọc
              </h3>

              <div className="text-xs sm:text-[13px] font-serif text-red-600 font-bold space-y-2 leading-relaxed">
                {(slide.leftColumn?.content || []).map((c, idx) => (
                  <p key={idx} className="whitespace-pre-line">{c}</p>
                ))}
              </div>
            </div>

            {/* Right box: Phieu hoc tap */}
            <div className="border-2 border-blue-800 rounded-lg p-3 sm:p-4 bg-white flex flex-col justify-start">
              <h3 className="text-xs sm:text-base font-bold text-red-600 text-center uppercase tracking-wide mb-0.5">
                LÀM VIỆC NHÓM
              </h3>
              <h4 className="text-xs sm:text-sm font-bold text-blue-900 text-center mb-2">
                PHIẾU HỌC TẬP
              </h4>

              <div className="text-xs sm:text-sm font-serif text-blue-950 font-bold space-y-1.5 leading-relaxed bg-blue-50/70 p-2.5 rounded-lg border border-blue-200">
                {(slide.rightColumn?.content || []).map((line, idx) => (
                  <p key={idx}>{line}</p>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center text-[11px] text-slate-500">
            Trao đổi cặp đôi và báo cáo phiếu học tập
          </div>
        </div>
      );

    // ------------------------------------------------------------------
    // SLIDE 23: CHUYỂN CẢNH VẬN DỤNG
    // ------------------------------------------------------------------
    case "transition_apply":
      return (
        <div className="w-full h-full bg-white flex items-center justify-center p-6">
          <div className="w-full max-w-xl bg-pink-50 border-4 border-pink-500 rounded-3xl p-6 sm:p-8 text-center shadow-xl">
            <h1 className="text-3xl sm:text-5xl font-extrabold text-red-600 tracking-wider">
              🎀 VẬN DỤNG 🎀
            </h1>
            <p className="text-sm sm:text-base font-medium text-pink-800 mt-3 italic">
              Liên hệ thực tế đời sống và hành động thiết thực
            </p>
          </div>
        </div>
      );

    // ------------------------------------------------------------------
    // SLIDE 24: VẬN DỤNG THỰC TẾ (NÊN LÀM / KHÔNG NÊN LÀM)
    // ------------------------------------------------------------------
    case "apply_action":
      return (
        <div className="w-full h-full p-4 sm:p-6 flex flex-col justify-between">
          <SlideTopHeader
            dateText={slide.headerDate}
            lessonTitle={slide.headerLesson}
          />

          <div className="px-4 sm:px-6 my-auto space-y-3">
            <p className="text-xs sm:text-sm font-bold text-red-600">
              {slide.subtitle}
            </p>

            <div className="grid grid-cols-3 gap-3">
              <div className="col-span-2 bg-white border-2 border-blue-800 rounded-xl p-3 sm:p-4 space-y-2">
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-blue-900 flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-emerald-600" />
                    Những việc nên làm:
                  </h4>
                  <p className="text-xs sm:text-sm font-serif text-blue-950 pl-5 font-semibold">
                    {(slide.dos || []).join(", ")}.
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-200">
                  <h4 className="text-xs sm:text-sm font-bold text-red-600 flex items-center gap-1.5">
                    <X className="w-4 h-4 text-red-600" />
                    Những việc không nên làm:
                  </h4>
                  <p className="text-xs sm:text-sm font-serif text-blue-950 pl-5 font-semibold">
                    {(slide.donts || []).join(", ")}...
                  </p>
                </div>
              </div>

              {/* Picture placeholder */}
              <div className="col-span-1 bg-amber-50 border border-amber-300 rounded-xl p-3 text-center flex flex-col items-center justify-center">
                <div className="text-4xl my-1">👫 📝</div>
                <p className="text-[11px] font-bold text-amber-900 mt-1">
                  Đoàn kết giữ gìn môi trường xanh - sạch - đẹp
                </p>
              </div>
            </div>
          </div>

          <div className="text-center text-[11px] text-slate-500">
            Học sinh nêu các việc làm thực tế tại trường, lớp hoặc nơi em ở
          </div>
        </div>
      );

    // ------------------------------------------------------------------
    // SLIDE: KHỞI ĐỘNG HÌNH ẢNH / HOẠT ĐỘNG
    // ------------------------------------------------------------------
    case "warmup_picture":
      return (
        <div className="w-full h-full p-4 sm:p-6 flex flex-col justify-between">
          <SlideTopHeader
            dateText={slide.headerDate}
            lessonTitle="KHỞI ĐỘNG"
          />

          <div className="my-auto max-w-2xl mx-auto w-full space-y-4 text-center">
            {slide.imageLabel && (
              <div className="inline-block bg-amber-500 text-white font-bold text-xs sm:text-sm px-4 py-1.5 rounded-full shadow-sm">
                🖼️ {slide.imageLabel}
              </div>
            )}

            <div className="bg-amber-50/80 border-2 border-amber-300 rounded-2xl p-5 sm:p-6 shadow-sm">
              <p className="text-sm sm:text-lg font-serif font-bold text-amber-950 leading-relaxed">
                {(slide.paragraphs || []).join("\n\n")}
              </p>
            </div>
          </div>

          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-2.5 text-center text-xs font-bold text-emerald-800">
            🌟 Chúc các em có một tiết học thật vui vẻ và bổ ích! 🌟
          </div>
        </div>
      );

    // ------------------------------------------------------------------
    // SLIDE: NỐI CỘT A - B (DANH TỪ, ĐỘNG TỪ, TÍNH TỪ)
    // ------------------------------------------------------------------
    case "matching_concepts": {
      const colA = slide.matchingData?.colA || [];
      const colB = slide.matchingData?.colB || [];
      return (
        <div className="w-full h-full p-4 sm:p-6 flex flex-col justify-between">
          <SlideTopHeader
            dateText={slide.headerDate}
            lessonTitle={slide.headerLesson || "KHÁM PHÁ"}
          />

          <div className="px-2 sm:px-4 my-auto space-y-4">
            <h3 className="text-sm sm:text-base font-bold text-blue-900">
              {slide.matchingData?.prompt || slide.title}
            </h3>

            <div className="space-y-3">
              {colA.map((item, idx) => {
                const bItem = colB[idx];
                return (
                  <div key={item.id} className="flex items-center gap-3">
                    <div className="w-36 sm:w-44 p-3 bg-blue-100 border-2 border-blue-600 rounded-xl font-bold text-blue-900 text-center text-sm sm:text-base shadow-xs">
                      {item.text}
                    </div>
                    <div className="text-red-500 font-bold text-xl sm:text-2xl">➔</div>
                    <div className="flex-1 p-3 bg-amber-50 border-2 border-amber-400 rounded-xl font-medium text-amber-950 text-xs sm:text-sm shadow-xs">
                      {bItem?.text}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="text-center text-[11px] text-slate-500">
            Học sinh đọc kĩ định nghĩa và nối chính xác từ loại
          </div>
        </div>
      );
    }

    // ------------------------------------------------------------------
    // SLIDE: CHUYỂN CẢNH LUYỆN TẬP
    // ------------------------------------------------------------------
    case "transition_practice":
      return (
        <div className="w-full h-full bg-white flex flex-col justify-between p-6 sm:p-8 relative overflow-hidden">
          <div className="text-center text-lg sm:text-xl tracking-widest text-amber-400">
            ⭐ ✨ ⭐ ✨ ⭐
          </div>

          <div className="my-auto text-center">
            <h1 className="text-4xl sm:text-7xl font-serif font-black italic text-purple-600 tracking-wider drop-shadow-sm">
              Luyện tập
            </h1>
          </div>

          <div className="bg-purple-100 border border-purple-300 rounded-xl p-2.5 text-center text-xs sm:text-sm font-bold text-purple-900">
            📝 Cả lớp cùng thực hành và hoàn thành các bài tập! 📝
          </div>
        </div>
      );

    // ------------------------------------------------------------------
    // SLIDE: TRÒ CHƠI CÓ ĐẾM NGƯỢC THỜI GIAN (90 GIÂY)
    // ------------------------------------------------------------------
    case "game_round_timer": {
      const game = slide.gameRoundData;
      return (
        <div className="w-full h-full p-4 sm:p-6 flex flex-col justify-between">
          <SlideTopHeader
            dateText={slide.headerDate}
            lessonTitle={game?.gameTitle || "TRÒ CHƠI"}
          />

          <div className="flex items-center justify-between px-2 pt-1">
            <span className="bg-blue-600 text-white text-xs sm:text-sm font-bold px-3 py-1 rounded-full shadow-xs">
              {game?.roundName || "VÒNG THI"}
            </span>
            <span className="bg-red-600 text-white text-xs sm:text-sm font-bold px-3 py-1 rounded-full shadow-xs flex items-center gap-1">
              ⏱️ {game?.timeSeconds || 90} GIÂY
            </span>
          </div>

          <div className="my-auto space-y-3 px-2">
            {game?.readingPassage && (
              <div className="bg-slate-50 border border-slate-300 rounded-xl p-3 text-xs sm:text-sm font-serif italic text-slate-700 leading-relaxed max-h-28 overflow-y-auto">
                {game.readingPassage}
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* Task Box */}
              <div className="bg-blue-50/90 border-2 border-blue-400 rounded-xl p-3 sm:p-4">
                <h4 className="text-xs sm:text-sm font-bold text-blue-900 mb-1.5 flex items-center gap-1">
                  📌 YÊU CẦU:
                </h4>
                <div className="text-xs sm:text-sm font-bold text-blue-950 space-y-1">
                  {(game?.taskPrompt || []).map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>
              </div>

              {/* Answer Box with Reveal */}
              <div className="bg-emerald-50/90 border-2 border-emerald-500 rounded-xl p-3 sm:p-4 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <h4 className="text-xs sm:text-sm font-bold text-emerald-900 flex items-center gap-1">
                      ✅ ĐÁP ÁN:
                    </h4>
                    <button
                      onClick={onToggleReveal}
                      className="text-[11px] px-2 py-0.5 rounded bg-emerald-600 hover:bg-emerald-700 text-white font-bold transition-colors"
                    >
                      {isRevealed ? "Ẩn đáp án" : "Hiện đáp án"}
                    </button>
                  </div>
                  {isRevealed ? (
                    <div className="text-xs sm:text-sm font-bold text-emerald-950 space-y-1">
                      {(game?.answerText || []).map((a, idx) => (
                        <p key={idx}>{a}</p>
                      ))}
                    </div>
                  ) : (
                    <p className="text-xs italic text-emerald-700 mt-2">
                      (Bấm "Hiện đáp án" sau khi học sinh thi xong)
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="text-center text-[11px] text-slate-500">
            Học sinh thảo luận và trả lời nhanh trong 90 giây
          </div>
        </div>
      );
    }

    // ------------------------------------------------------------------
    // SLIDE: TỔNG KẾT TRÒ CHƠI
    // ------------------------------------------------------------------
    case "game_summary":
      return (
        <div className="w-full h-full p-4 sm:p-6 flex flex-col justify-between">
          <SlideTopHeader
            dateText={slide.headerDate}
            lessonTitle="TỔNG KẾT"
          />

          <div className="my-auto max-w-xl mx-auto w-full bg-pink-50 border-4 border-pink-400 rounded-3xl p-6 sm:p-8 text-center shadow-lg space-y-3">
            <div className="text-4xl">🏆 🏆 🏆</div>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-pink-700 tracking-wide">
              {slide.cloudText || "TỔNG KẾT TRÒ CHƠI"}
            </h1>
            <p className="text-sm sm:text-base font-bold text-pink-900 font-serif leading-relaxed">
              {slide.subtitle ||
                "Cô giáo và học sinh cùng tuyên dương các nhóm đã hoàn thành xuất sắc các vòng thi!"}
            </p>
          </div>

          <div className="text-center text-[11px] text-slate-500">
            Tuyên dương các cá nhân và tập thể tích cực
          </div>
        </div>
      );

    // ------------------------------------------------------------------
    // SLIDE: PHIẾU ĐỌC SÁCH
    // ------------------------------------------------------------------
    case "reading_log_template":
    case "reading_log_filled": {
      const log = slide.readingLogData;
      return (
        <div className="w-full h-full p-4 sm:p-6 flex flex-col justify-between">
          <SlideTopHeader
            dateText={slide.headerDate}
            lessonTitle={slide.headerLesson || "PHIẾU ĐỌC SÁCH"}
          />

          <div className="my-auto px-2 sm:px-4 max-w-3xl mx-auto w-full">
            <h3 className="text-center font-bold text-blue-900 text-sm sm:text-base uppercase mb-3">
              {slide.title}
            </h3>

            <div className="bg-white border-2 border-blue-600 rounded-xl p-4 shadow-sm space-y-2.5 text-xs sm:text-sm">
              <div className="grid grid-cols-2 gap-3">
                <p className="font-bold text-blue-950">
                  Tên câu chuyện: <span className="text-emerald-800 font-semibold">{log?.bookTitle || "...................................."}</span>
                </p>
                <p className="font-bold text-blue-950">
                  Tác giả: <span className="text-emerald-800 font-semibold">{log?.author || "...................................."}</span>
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <p className="font-bold text-blue-950">
                  Ngày đọc: <span className="text-emerald-800 font-semibold">{log?.readDate || "...................................."}</span>
                </p>
                <p className="font-bold text-blue-950">
                  Nhân vật em thích: <span className="text-emerald-800 font-semibold">{log?.favoriteCharacter || "...................................."}</span>
                </p>
              </div>

              <div className="pt-1 border-t border-slate-200">
                <p className="font-bold text-blue-950 mb-0.5">Nội dung chính:</p>
                <p className="font-serif text-slate-800 bg-slate-50 p-2 rounded border border-slate-200">
                  {log?.mainContent || "........................................................................................................"}
                </p>
              </div>

              <div className="pt-1">
                <p className="font-bold text-blue-950 mb-0.5">Chi tiết thú vị:</p>
                <p className="font-serif text-slate-800 bg-slate-50 p-2 rounded border border-slate-200">
                  {log?.interestingDetail || "........................................................................................................"}
                </p>
              </div>

              <div className="pt-1 flex items-center justify-between text-amber-600 font-bold">
                <span>Mức độ yêu thích:</span>
                <span className="text-base tracking-widest">
                  {log?.isSample ? "⭐⭐⭐⭐⭐ (5 sao)" : "⭐ ⭐ ⭐ ⭐ ⭐"}
                </span>
              </div>
            </div>
          </div>

          <div className="text-center text-[11px] text-slate-500">
            Học sinh hoàn thành phiếu đọc sách sau khi đọc truyện
          </div>
        </div>
      );
    }

    // ------------------------------------------------------------------
    // SLIDE: SINH HOẠT NHÓM & TRAO ĐỔI VỚI BẠN
    // ------------------------------------------------------------------
    case "group_discussion":
      return (
        <div className="w-full h-full p-4 sm:p-6 flex flex-col justify-between">
          <SlideTopHeader
            dateText={slide.headerDate}
            lessonTitle={slide.headerLesson || "SINH HOẠT NHÓM"}
          />

          <div className="my-auto grid grid-cols-1 sm:grid-cols-2 gap-4 px-2 sm:px-4 max-w-4xl mx-auto w-full">
            <div className="bg-blue-50 border-2 border-blue-500 rounded-xl p-4">
              <h3 className="font-bold text-blue-900 text-sm sm:text-base mb-3 border-b border-blue-200 pb-1.5">
                {slide.leftColumn?.header || "3. Trao đổi với bạn"}
              </h3>
              <div className="space-y-2 text-xs sm:text-sm font-bold text-blue-950">
                {(slide.leftColumn?.content || []).map((item, idx) => (
                  <p key={idx}>{item}</p>
                ))}
              </div>
            </div>

            <div className="bg-amber-50 border-2 border-amber-400 rounded-xl p-4">
              <h3 className="font-bold text-amber-900 text-sm sm:text-base mb-3 border-b border-amber-200 pb-1.5">
                {slide.rightColumn?.header || "SINH HOẠT NHÓM"}
              </h3>
              <div className="space-y-2 text-xs sm:text-sm font-bold text-amber-950">
                {(slide.rightColumn?.content || []).map((item, idx) => (
                  <p key={idx}>{item}</p>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center text-[11px] text-slate-500">
            Tổ chức sinh hoạt nhóm 4 và trao đổi tích cực
          </div>
        </div>
      );

    // ------------------------------------------------------------------
    // SLIDE: VẬN DỤNG VIẾT VÀO VỞ / KỂ CHUYỆN
    // ------------------------------------------------------------------
    case "apply_writing":
      return (
        <div className="w-full h-full p-4 sm:p-6 flex flex-col justify-between">
          <SlideTopHeader
            dateText={slide.headerDate}
            lessonTitle={slide.headerLesson || "VẬN DỤNG"}
          />

          <div className="my-auto max-w-2xl mx-auto w-full bg-amber-50 border-2 border-amber-400 rounded-2xl p-5 sm:p-6 shadow-sm space-y-3">
            <h3 className="text-base sm:text-lg font-bold text-amber-950 flex items-center gap-2">
              ✏️ {slide.title}
            </h3>

            {slide.subtitle && (
              <p className="text-xs sm:text-sm font-bold text-amber-900">
                {slide.subtitle}
              </p>
            )}

            <div className="space-y-2 text-xs sm:text-sm font-serif font-bold text-amber-950 bg-white/80 p-4 rounded-xl border border-amber-200">
              {(slide.bulletPoints || slide.paragraphs || []).map((pt, idx) => (
                <p key={idx} className="leading-relaxed">
                  {pt}
                </p>
              ))}
            </div>
          </div>

          <div className="text-center text-[11px] text-slate-500">
            Học sinh thực hành viết vào vở hoặc chia sẻ với người thân
          </div>
        </div>
      );

    // ------------------------------------------------------------------
    // SLIDE 25: TẠM BIỆT!
    // ------------------------------------------------------------------
    case "goodbye":
      return (
        <div className="w-full h-full bg-amber-50/50 flex flex-col justify-between p-6 sm:p-10 relative overflow-hidden">
          <div className="text-center text-xl sm:text-2xl tracking-widest">
            🎈 🎈 🍬 🍭 🌈 🍭 🍬 🎈 🎈
          </div>

          <div className="my-auto text-center">
            <h1 className="text-5xl sm:text-8xl font-black text-amber-500 tracking-wider drop-shadow-[0_4px_6px_rgba(180,83,9,0.8)]">
              TẠM BIỆT!
            </h1>
          </div>

          <div className="bg-white border-2 border-amber-400 rounded-2xl p-3 sm:p-4 text-center shadow-md">
            <p className="text-xs sm:text-base font-bold text-red-600 font-serif leading-relaxed">
              💐 KÍNH CHÚC QUÝ THẦY CÔ MẠNH KHỎE!
              <br />
              CHÚC CÁC EM HỌC SINH CHĂM NGOAN, HỌC GIỎI! 💐
            </p>
          </div>
        </div>
      );

    default:
      return null;
  }
}

// Sub-component: Standard Top Slide Header matching teacher's sample
function SlideTopHeader({
  dateText = "Thứ……ngày……tháng…..năm 2024",
  lessonTitle,
}: {
  dateText?: string;
  lessonTitle?: string;
}) {
  return (
    <div className="text-center border-b border-blue-200/60 pb-1.5">
      <p className="text-[11px] sm:text-xs font-serif text-blue-900">
        {dateText}
      </p>
      {lessonTitle && (
        <h2 className="text-xs sm:text-sm font-serif font-bold text-blue-900 uppercase tracking-wide">
          {lessonTitle}
        </h2>
      )}
    </div>
  );
}
