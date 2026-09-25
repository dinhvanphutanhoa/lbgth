import React, { useState, useRef } from "react";
import {
  FileSpreadsheet,
  Upload,
  RefreshCw,
  CheckCircle2,
  AlertCircle,
  Calendar,
  BookOpen,
  FileText,
  Sliders,
  ChevronRight,
  ExternalLink,
} from "lucide-react";
import { MasterTimetable, SchoolInfo, ScheduleItem, LessonPlan } from "../types";
import { DEFAULT_CLASSES, DEFAULT_MASTER_TIMETABLE } from "../data/defaultTimetables";
import {
  parseExcelWorkbook,
  mergeTimetableSlots,
  ParsedTimetableResult,
} from "../utils/timetableParser";

interface TimetableSyncUploadBarProps {
  currentTimetable: MasterTimetable;
  schoolInfo: SchoolInfo;
  scheduleItems: ScheduleItem[];
  lessonPlans: LessonPlan[];
  onApplyTimetable: (updatedTKB: MasterTimetable, targetClassName?: string) => void;
  onForceRefresh: () => void;
  onOpenDetailedModal: () => void;
  onNavigateTab: (tabId: "schedule" | "lessonPlans" | "timetable" | "teachers") => void;
  isEn?: boolean;
}

export const TimetableSyncUploadBar: React.FC<TimetableSyncUploadBarProps> = ({
  currentTimetable,
  schoolInfo,
  scheduleItems,
  lessonPlans,
  onApplyTimetable,
  onForceRefresh,
  onOpenDetailedModal,
  onNavigateTab,
  isEn = false,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedClass, setSelectedClass] = useState<string>(schoolInfo.className || "5");
  const [syncMode, setSyncMode] = useState<"replace" | "merge">("replace");
  const [isProcessing, setIsProcessing] = useState(false);
  const [feedback, setFeedback] = useState<{
    type: "success" | "error" | "info";
    title: string;
    details: string;
    stats?: { slots: number; targetClass: string; type: string };
  } | null>(null);

  // Handle direct Excel file selection and instant 3-way synchronization
  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setIsProcessing(true);
    setFeedback({
      type: "info",
      title: "Đang đọc và phân tích tệp Excel...",
      details: file.name,
    });

    try {
      const buffer = await file.arrayBuffer();
      const parseResult = parseExcelWorkbook(buffer, {
        fallbackClass: selectedClass,
        existingTimetable: currentTimetable,
      });

      if (!parseResult.success || parseResult.totalSlots === 0) {
        setFeedback({
          type: "error",
          title: "Không thể trích xuất tiết học từ tệp Excel",
          details:
            parseResult.errorMessage ||
            "Vui lòng kiểm tra trang tính hoặc sử dụng nút 'Dán TKB Thủ Công' để xem trước cấu trúc bảng.",
        });
        setIsProcessing(false);
        if (fileInputRef.current) fileInputRef.current.value = "";
        return;
      }

      // Merge / Replace slots
      const updatedTKB = mergeTimetableSlots(currentTimetable, parseResult, syncMode);

      // Determine which class should be prioritized for viewing
      const appliedClass =
        parseResult.type === "school_grid"
          ? selectedClass
          : parseResult.targetClass || selectedClass;

      // Apply to Master State -> Automatically recalculates LBG & KHBD in App.tsx
      onApplyTimetable(updatedTKB, appliedClass);

      setFeedback({
        type: "success",
        title: `Đã cập nhật TKB mới từ tệp "${file.name}"!`,
        details: `Đồng bộ thành công ${parseResult.totalSlots} tiết học sang TKB, Lịch báo giảng (LBG) và Kế hoạch bài dạy (KHBD) cho ${
          parseResult.type === "school_grid"
            ? `Toàn trường (${parseResult.detectedClasses.join(", ")})`
            : `Lớp ${appliedClass}`
        }.`,
        stats: {
          slots: parseResult.totalSlots,
          targetClass: appliedClass,
          type: parseResult.type,
        },
      });
    } catch (err: any) {
      setFeedback({
        type: "error",
        title: "Lỗi xử lý tệp Excel",
        details: err?.message || "Định dạng tệp không được hỗ trợ hoặc tệp bị khóa.",
      });
    } finally {
      setIsProcessing(false);
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  };

  return (
    <div
      id="timetable-sync-upload-bar"
      className="mb-6 bg-white border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] transition-all"
    >
      {/* Top Banner Header */}
      <div className="bg-stone-900 text-white px-4 py-2.5 flex flex-wrap items-center justify-between gap-3 border-b border-black">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 bg-emerald-500 border border-white text-black flex items-center justify-center font-black text-xs shadow-[1px_1px_0px_rgba(0,0,0,1)]">
            <FileSpreadsheet className="w-4 h-4" />
          </div>
          <div>
            <h3 className="font-bold text-xs sm:text-sm tracking-tight uppercase flex items-center gap-2 text-white">
              <span>Thanh Đưa TKB Excel Lên</span>
              <span className="text-[10px] bg-emerald-600 text-white px-1.5 py-0.5 rounded font-mono font-normal">
                Tự Động Đồng Bộ 3 Trong 1
              </span>
            </h3>
            <p className="text-[11px] text-stone-300 font-serif hidden sm:block">
              Đưa tệp TKB mới lên sẽ tự động thay đổi đồng bộ cả Thời khóa biểu (TKB), Lịch báo giảng (LBG) &amp; Kế hoạch bài dạy (KHBD).
            </p>
          </div>
        </div>

        {/* Real-time sync counts */}
        <div className="flex items-center gap-2 text-[11px] font-mono">
          <span className="bg-stone-800 text-stone-200 border border-stone-700 px-2 py-1 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Lớp: <strong className="text-white">{schoolInfo.className}</strong></span>
          </span>
          <span className="bg-stone-800 text-stone-200 border border-stone-700 px-2 py-1 hidden md:inline-flex">
            LBG: <strong className="text-emerald-400 ml-1">{scheduleItems.length} tiết</strong>
          </span>
          <span className="bg-stone-800 text-stone-200 border border-stone-700 px-2 py-1 hidden md:inline-flex">
            KHBD: <strong className="text-amber-300 ml-1">{lessonPlans.length} kế hoạch</strong>
          </span>
        </div>
      </div>

      {/* Main Action Bar Grid */}
      <div className="p-3.5 bg-stone-50 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3">
        {/* Left Side: Upload Button & Controls */}
        <div className="flex flex-wrap items-center gap-2.5">
          {/* Hidden File Input */}
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileUpload}
            accept=".xlsx, .xls, .csv"
            className="hidden"
          />

          {/* Primary Upload Button */}
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            disabled={isProcessing}
            className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wide border-2 border-black shadow-[2px_2px_0px_rgba(0,0,0,1)] flex items-center gap-2 cursor-pointer transition-all active:translate-x-0.5 active:translate-y-0.5 disabled:opacity-50"
            title="Nhấp để tải lên tệp Excel (.xlsx, .xls) hoặc CSV"
          >
            {isProcessing ? (
              <RefreshCw className="w-4 h-4 animate-spin" />
            ) : (
              <Upload className="w-4 h-4" />
            )}
            <span>Chọn Tệp Excel TKB Mới (.xlsx)</span>
          </button>

          {/* Target Class Dropdown */}
          <div className="flex items-center gap-1.5 bg-white border border-black px-2.5 py-1.5 shadow-[1px_1px_0px_rgba(0,0,0,1)]">
            <span className="text-[11px] font-bold uppercase text-stone-600">Lớp:</span>
            <select
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
              className="text-xs font-bold bg-transparent outline-none cursor-pointer pr-1"
            >
              {DEFAULT_CLASSES.map((cls) => (
                <option key={cls} value={cls}>
                  Lớp {cls}
                </option>
              ))}
            </select>
          </div>

          {/* Replacement Mode */}
          <div className="flex items-center gap-1.5 bg-white border border-black px-2.5 py-1.5 shadow-[1px_1px_0px_rgba(0,0,0,1)]">
            <Sliders className="w-3.5 h-3.5 text-stone-600" />
            <select
              value={syncMode}
              onChange={(e) => setSyncMode(e.target.value as "replace" | "merge")}
              className="text-xs font-serif bg-transparent outline-none cursor-pointer"
            >
              <option value="replace">Thay thế mới hoàn toàn (Khuyên dùng)</option>
              <option value="merge">Ghép bổ sung vào TKB</option>
            </select>
          </div>

          {/* Manual paste / detail modal trigger */}
          <button
            type="button"
            onClick={onOpenDetailedModal}
            className="px-3 py-1.5 bg-white hover:bg-stone-100 text-stone-800 font-bold text-xs border border-black shadow-[1px_1px_0px_rgba(0,0,0,1)] flex items-center gap-1.5 cursor-pointer"
            title="Mở cửa sổ chi tiết để dán bảng, xem trước từng tiết hoặc đổi mẫu"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span>Xem Chi Tiết / Dán Bảng</span>
          </button>

          {/* Quick Apply Tuần 3 Official Timetable */}
          <button
            type="button"
            onClick={() => {
              onApplyTimetable(DEFAULT_MASTER_TIMETABLE, selectedClass);
              setFeedback({
                type: "success",
                title: "Đã đồng bộ TKB Mới Tuần 3 (21 - 25/9/2026) thành công!",
                details: "Toàn bộ Thời khóa biểu, Lịch báo giảng (LBG) và Kế hoạch bài dạy (KHBD) đã được tự động tính toán và đồng bộ chuẩn xác theo TKB mới Tuần 3.",
                stats: { slots: 160, targetClass: selectedClass, type: "school_grid" }
              });
            }}
            className="px-3 py-1.5 bg-amber-300 hover:bg-amber-400 text-stone-900 font-bold text-xs border border-black shadow-[1px_1px_0px_rgba(0,0,0,1)] flex items-center gap-1.5 cursor-pointer"
            title="Áp dụng ngay TKB mới bắt đầu từ Tuần 3 (21/09/2026 - 25/09/2026)"
          >
            <RefreshCw className="w-3.5 h-3.5 text-black" />
            <span>Đồng Bộ TKB Mới Tuần 3 (21/9)</span>
          </button>
        </div>

        {/* Right Side: Quick Check Navigation Tabs */}
        <div className="flex flex-wrap items-center gap-2 pt-2 lg:pt-0 border-t lg:border-t-0 border-stone-200">
          <span className="text-[10px] uppercase font-bold text-stone-500 font-mono tracking-wider mr-1">
            Kiểm tra ngay:
          </span>

          <button
            type="button"
            onClick={() => onNavigateTab("timetable")}
            className="px-2.5 py-1.5 bg-white hover:bg-stone-100 text-black text-xs font-bold border border-black shadow-[1px_1px_0px_rgba(0,0,0,1)] flex items-center gap-1 cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5 text-blue-600" />
            <span>1. TKB</span>
          </button>

          <button
            type="button"
            onClick={() => onNavigateTab("schedule")}
            className="px-2.5 py-1.5 bg-white hover:bg-stone-100 text-black text-xs font-bold border border-black shadow-[1px_1px_0px_rgba(0,0,0,1)] flex items-center gap-1 cursor-pointer"
          >
            <BookOpen className="w-3.5 h-3.5 text-emerald-600" />
            <span>2. Lịch Báo Giảng (LBG)</span>
          </button>

          <button
            type="button"
            onClick={() => onNavigateTab("lessonPlans")}
            className="px-2.5 py-1.5 bg-white hover:bg-stone-100 text-black text-xs font-bold border border-black shadow-[1px_1px_0px_rgba(0,0,0,1)] flex items-center gap-1 cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5 text-amber-600" />
            <span>3. Kế Hoạch Bài Dạy (KHBD)</span>
          </button>

          <button
            type="button"
            onClick={onForceRefresh}
            className="p-1.5 bg-stone-200 hover:bg-stone-300 text-black border border-black shadow-[1px_1px_0px_rgba(0,0,0,1)] cursor-pointer"
            title="Đồng bộ thủ công lại toàn bộ TKB ➔ LBG ➔ KHBD"
          >
            <RefreshCw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Feedback Banner (when an action is taken) */}
      {feedback && (
        <div
          className={`px-4 py-2.5 border-t border-black flex items-center justify-between text-xs transition-all ${
            feedback.type === "success"
              ? "bg-emerald-50 text-emerald-950"
              : feedback.type === "error"
              ? "bg-rose-50 text-rose-950"
              : "bg-blue-50 text-blue-950"
          }`}
        >
          <div className="flex items-center gap-2.5">
            {feedback.type === "success" ? (
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            ) : feedback.type === "error" ? (
              <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
            ) : (
              <RefreshCw className="w-4 h-4 text-blue-600 animate-spin shrink-0" />
            )}
            <div>
              <span className="font-bold mr-2">{feedback.title}</span>
              <span className="font-serif text-stone-700">{feedback.details}</span>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setFeedback(null)}
            className="text-[11px] font-bold text-stone-500 hover:text-black uppercase ml-4 cursor-pointer"
          >
            Đóng
          </button>
        </div>
      )}
    </div>
  );
};
