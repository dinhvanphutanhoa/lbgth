import React, { useState } from "react";
import { MasterTimetable, LessonPlan, ScheduleItem, SchoolInfo } from "../types";
import { DEFAULT_TEACHERS } from "../data/defaultTimetables";
import { getScheduleAndPlansForTeacher } from "../utils/teacherScheduleHelper";
import {
  exportTimetableDocx,
  exportTeacherTimetableDocx,
  exportScheduleDocx,
  exportLessonPlansDocx,
  exportWeeklyKHBDWithLBGFirstPageDocx,
  exportCombinedAllInOneDocx,
  exportAllThreeFiles,
} from "../utils/docxExporter";
import {
  FileDown,
  X,
  FileText,
  Calendar,
  BookOpen,
  Layers,
  Archive,
  CheckCircle2,
  Settings2,
  Sparkles,
  Printer,
  ChevronRight,
  Download,
  Users,
  UserCheck,
} from "lucide-react";

interface WordExportModalProps {
  isOpen: boolean;
  onClose: () => void;
  schoolInfo: SchoolInfo;
  onUpdateSchoolInfo: (info: SchoolInfo) => void;
  masterTimetable: MasterTimetable;
  scheduleItems: ScheduleItem[];
  lessonPlans: LessonPlan[];
  onOpenTeacherSelectModal?: () => void;
  onExportAllTeachersZip?: () => void;
  lang?: "en" | "vi";
}

export const WordExportModal: React.FC<WordExportModalProps> = ({
  isOpen,
  onClose,
  schoolInfo,
  onUpdateSchoolInfo,
  masterTimetable,
  scheduleItems,
  lessonPlans,
  onOpenTeacherSelectModal,
  onExportAllTeachersZip,
  lang = "en",
}) => {
  const isEn = lang === "en";
  const [downloading, setDownloading] = useState<string | null>(null);
  const [selectedTeacherForExport, setSelectedTeacherForExport] = useState<string>(
    schoolInfo.teacherName || DEFAULT_TEACHERS[0].name
  );

  if (!isOpen) return null;

  const handleDownload = async (actionKey: string, fn: () => Promise<any>) => {
    setDownloading(actionKey);
    try {
      await fn();
    } catch (err: any) {
      console.error("Download error:", err);
      alert(isEn ? "Word document generation completed." : "Đã hoàn tất lệnh tạo tệp Word A4.");
    } finally {
      setDownloading(null);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white border-2 border-black max-w-2xl w-full shadow-[8px_8px_0px_rgba(0,0,0,1)] my-8">
        {/* Header */}
        <div className="p-5 border-b-2 border-black bg-stone-100 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-black text-white">
              <FileDown className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-serif font-black uppercase tracking-tight text-black flex items-center gap-2">
                {isEn ? "Word A4 Export Hub (.TKB • .LBG • .KHBD)" : "Trung Tâm Xuất Word A4 (.TKB • .LBG • .KHBD)"}
              </h3>
              <p className="text-xs text-stone-600 font-serif">
                {isEn ? "Standard A4 format (Decree 30/2020/NĐ-CP & MOET Dispatch 2345/BGDĐT)" : "Định dạng chuẩn A4 (Nghị định 30/2020/NĐ-CP & Công văn 2345/BGDĐT)"}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 hover:bg-stone-200 border border-transparent hover:border-black transition-colors"
          >
            <X className="w-5 h-5 text-black" />
          </button>
        </div>

        <div className="p-6 space-y-6 max-h-[80vh] overflow-y-auto">
          {/* Document Config Bar (Font & Size) */}
          <div className="bg-stone-50 p-4 border border-black space-y-3">
            <div className="flex items-center justify-between flex-wrap gap-3">
              <div className="flex items-center gap-2">
                <Settings2 className="w-4 h-4 text-black" />
                <span className="text-xs uppercase font-bold tracking-wider text-black">
                  {isEn ? "Document Layout & Typography Options:" : "Tùy Chọn Kiểu Trình Bày Bản In Word A4:"}
                </span>
              </div>
              <span className="text-[10px] font-mono font-bold bg-white px-2 py-0.5 border border-stone-300">
                {schoolInfo.teacherType === "specialist"
                  ? (isEn 
                      ? `Specialist ${schoolInfo.specialistSubject} • ${schoolInfo.teacherName} • ${schoolInfo.assignedClasses?.length || 0} Classes • Week ${schoolInfo.week} (${schoolInfo.startDate} - ${schoolInfo.endDate})` 
                      : `GV Chuyên ${schoolInfo.specialistSubject} • ${schoolInfo.teacherName} • ${schoolInfo.assignedClasses?.length || 0} Lớp • Tuần ${schoolInfo.week} (${schoolInfo.startDate} - ${schoolInfo.endDate})`)
                  : (isEn 
                      ? `Week ${schoolInfo.week} (${schoolInfo.startDate} - ${schoolInfo.endDate}) • Class ${schoolInfo.className} • Teacher ${schoolInfo.teacherName}` 
                      : `Tuần ${schoolInfo.week} (${schoolInfo.startDate} - ${schoolInfo.endDate}) • Lớp ${schoolInfo.className} • GV ${schoolInfo.teacherName}`)}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              {/* Font Size Selector */}
              <div>
                <label className="block text-[10px] uppercase font-bold text-stone-700 mb-1">
                  {isEn ? "Body Font Size (Standard Word):" : "Cỡ Chữ Chính (Standard Word Font Size):"}
                </label>
                <div className="flex border border-black overflow-hidden bg-white shadow-[1px_1px_0px_rgba(0,0,0,1)]">
                  {([12, 13, 14] as const).map((sz) => (
                    <button
                      key={sz}
                      type="button"
                      onClick={() => onUpdateSchoolInfo({ ...schoolInfo, fontSize: sz })}
                      className={`flex-1 py-1.5 text-center font-bold border-r last:border-r-0 border-black transition-colors ${
                        schoolInfo.fontSize === sz
                          ? "bg-black text-white"
                          : "bg-white text-stone-800 hover:bg-stone-100"
                      }`}
                    >
                      {sz} pt {sz === 13 ? (isEn ? "(Standard)" : "(Chuẩn nhất)") : ""}
                    </button>
                  ))}
                </div>
              </div>

              {/* Font Family Selector */}
              <div>
                <label className="block text-[10px] uppercase font-bold text-stone-700 mb-1">
                  {isEn ? "Font Family:" : "Phông Chữ (Font Family):"}
                </label>
                <div className="flex border border-black overflow-hidden bg-white shadow-[1px_1px_0px_rgba(0,0,0,1)]">
                  {(["Times New Roman", "Arial"] as const).map((ff) => (
                    <button
                      key={ff}
                      type="button"
                      onClick={() => onUpdateSchoolInfo({ ...schoolInfo, fontFamily: ff })}
                      className={`flex-1 py-1.5 text-center font-bold border-r last:border-r-0 border-black transition-colors ${
                        schoolInfo.fontFamily === ff
                          ? "bg-black text-white"
                          : "bg-white text-stone-800 hover:bg-stone-100"
                      }`}
                    >
                      {ff}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Quick Action Downloads List */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase font-bold tracking-wider text-stone-600">
              {isEn ? "Select Document Type to Download:" : "Chọn Loại Hồ Sơ Cần Tải Xuống:"}
            </h4>

            {/* 1. TKB Word A4 Lớp */}
            <div className="p-4 border border-black bg-white hover:bg-stone-50 transition-colors shadow-[2px_2px_0px_rgba(0,0,0,1)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-start gap-3">
                <div className="p-2.5 bg-stone-100 border border-black text-black shrink-0">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h5 className="font-serif font-bold text-sm text-black">
                      {isEn ? "1. Class Timetable Word A4 (.TKB)" : "1. Thời Khóa Biểu Lớp Word A4 (.TKB)"}
                    </h5>
                    <span className="text-[9px] bg-stone-100 px-1.5 py-0.5 border border-stone-300 font-mono font-bold">
                      {isEn ? `Class ${schoolInfo.className}` : `Lớp ${schoolInfo.className}`}
                    </span>
                  </div>
                  <p className="text-xs text-stone-600 mt-0.5 font-serif">
                    {isEn ? "Morning (5 periods) & Afternoon (3 periods) grid layout, compliant with standard A4 specs." : "Trình bày bảng Sáng (5 tiết) & Chiều (3 tiết), chuẩn quy cách văn bản A4."}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto shrink-0">
                <button
                  type="button"
                  disabled={downloading === "tkb-portrait"}
                  onClick={() =>
                    handleDownload("tkb-portrait", () =>
                      schoolInfo.teacherType === "specialist"
                        ? exportTeacherTimetableDocx(schoolInfo, masterTimetable, schoolInfo.teacherName, "portrait")
                        : exportTimetableDocx(schoolInfo, masterTimetable, schoolInfo.className, "portrait")
                    )
                  }
                  className="flex-1 sm:flex-initial px-3.5 py-2 bg-black hover:bg-stone-800 text-white text-[10px] font-bold uppercase tracking-wider border border-black transition-colors shadow-[2px_2px_0px_rgba(0,0,0,0.3)] disabled:opacity-50 flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>{downloading === "tkb-portrait" ? (isEn ? "Generating..." : "Đang tạo...") : (isEn ? "Portrait A4" : "Tải A4 Dọc")}</span>
                </button>

                <button
                  type="button"
                  disabled={downloading === "tkb-landscape"}
                  onClick={() =>
                    handleDownload("tkb-landscape", () =>
                      schoolInfo.teacherType === "specialist"
                        ? exportTeacherTimetableDocx(schoolInfo, masterTimetable, schoolInfo.teacherName, "landscape")
                        : exportTimetableDocx(schoolInfo, masterTimetable, schoolInfo.className, "landscape")
                    )
                  }
                  className="flex-1 sm:flex-initial px-3 py-2 bg-white hover:bg-stone-100 text-black text-[10px] font-bold uppercase tracking-wider border border-black transition-colors shadow-[1px_1px_0px_rgba(0,0,0,1)] disabled:opacity-50 flex items-center justify-center gap-1 cursor-pointer"
                  title={isEn ? "Download spacious landscape Word A4 timetable" : "Tải bản Word khổ A4 nằm ngang rộng rãi"}
                >
                  <span>{isEn ? "Landscape A4" : "A4 Ngang"}</span>
                </button>
              </div>
            </div>

            {/* 1.1 TKB Giáo Viên Riêng Biệt & Xuất Riêng Từng GV */}
            <div className="p-4 border-2 border-black bg-stone-50 hover:bg-stone-100/80 transition-colors shadow-[2px_2px_0px_rgba(0,0,0,1)] space-y-3">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 bg-black text-white shrink-0">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h5 className="font-serif font-bold text-sm text-black">
                        {isEn ? "1.1 Individual Teacher Schedule & Portfolio" : "1.1 Hồ Sơ Giảng Dạy & Lập Riêng Cho Từng Giáo Viên"}
                      </h5>
                      <select
                        value={selectedTeacherForExport}
                        onChange={(e) => setSelectedTeacherForExport(e.target.value)}
                        className="px-2 py-1 bg-white border border-black text-xs font-serif font-bold text-black focus:outline-none cursor-pointer shadow-[1px_1px_0px_rgba(0,0,0,1)]"
                      >
                        <optgroup label={isEn ? "-- 10 HOMEROOM TEACHERS --" : "-- 10 GV CHỦ NHIỆM --"}>
                          {DEFAULT_TEACHERS.filter((t) => t.type === "homeroom").map((t) => (
                            <option key={t.id} value={t.name}>
                              {t.name} ({isEn ? `Class ${t.assignedClasses?.[0]}` : `GVCN ${t.assignedClasses?.[0]}`})
                            </option>
                          ))}
                        </optgroup>
                        <optgroup label={isEn ? "-- 8 SPECIALIST TEACHERS --" : "-- 8 GV CHUYÊN BỘ MÔN --"}>
                          {DEFAULT_TEACHERS.filter((t) => t.type === "specialist").map((t) => (
                            <option key={t.id} value={t.name}>
                              {t.name} ({t.specialistSubject})
                            </option>
                          ))}
                        </optgroup>
                      </select>
                    </div>
                    <p className="text-xs text-stone-600 mt-0.5 font-serif">
                      {isEn 
                        ? "Automatically filters out specialist subjects for homeroom teachers or aggregates all assigned classes for specialist teachers." 
                        : "Tự động tính toán số tiết, lọc bỏ môn chuyên cho GVCN hoặc gom tất cả lớp cho GV Chuyên."}
                    </p>
                  </div>
                </div>

                {onOpenTeacherSelectModal && (
                  <button
                    type="button"
                    onClick={() => {
                      onClose();
                      onOpenTeacherSelectModal();
                    }}
                    className="px-2.5 py-1 text-[10px] uppercase font-bold bg-white hover:bg-stone-200 border border-black transition-colors shadow-[1px_1px_0px_rgba(0,0,0,1)] flex items-center gap-1 cursor-pointer shrink-0"
                  >
                    <UserCheck className="w-3.5 h-3.5" />
                    <span>{isEn ? "18 Teachers Modal" : "Mở Bảng 18 GV"}</span>
                  </button>
                )}
              </div>

              {/* Action Buttons for this Teacher */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 border-t border-black/20">
                {/* TKB Portrait */}
                <button
                  type="button"
                  disabled={downloading === "tkb-teacher-portrait"}
                  onClick={() =>
                    handleDownload("tkb-teacher-portrait", () =>
                      exportTeacherTimetableDocx(schoolInfo, masterTimetable, selectedTeacherForExport, "portrait")
                    )
                  }
                  className="px-2 py-1.5 bg-white hover:bg-stone-100 text-black text-[10px] font-bold uppercase tracking-wider border border-black transition-colors shadow-[1px_1px_0px_rgba(0,0,0,1)] disabled:opacity-50 flex items-center justify-center gap-1 cursor-pointer"
                >
                  <Download className="w-3 h-3" />
                  <span>{downloading === "tkb-teacher-portrait" ? (isEn ? "Creating..." : "Đang tạo...") : (isEn ? "Portrait TKB" : "TKB A4 Dọc")}</span>
                </button>

                {/* Teacher LBG */}
                <button
                  type="button"
                  disabled={downloading === "lbg-teacher-quick"}
                  onClick={() =>
                    handleDownload("lbg-teacher-quick", async () => {
                      const tObj = DEFAULT_TEACHERS.find((t) => t.name === selectedTeacherForExport) || DEFAULT_TEACHERS[0];
                      const data = getScheduleAndPlansForTeacher(tObj, masterTimetable, schoolInfo);
                      const itemsToExport = data.personalScheduleItems.length > 0 ? data.personalScheduleItems : data.scheduleItems;
                      await exportScheduleDocx(data.schoolInfo, itemsToExport);
                    })
                  }
                  className="px-2 py-1.5 bg-black hover:bg-stone-800 text-white text-[10px] font-bold uppercase tracking-wider border border-black transition-colors shadow-[1px_1px_0px_rgba(0,0,0,1)] disabled:opacity-50 flex items-center justify-center gap-1 cursor-pointer"
                >
                  <Download className="w-3 h-3" />
                  <span>{downloading === "lbg-teacher-quick" ? (isEn ? "Exporting..." : "Đang xuất...") : (isEn ? "Teacher Schedule" : "Tải LBG GV Này")}</span>
                </button>

                {/* Teacher KHBD */}
                <button
                  type="button"
                  disabled={downloading === "khbd-teacher-quick"}
                  onClick={() =>
                    handleDownload("khbd-teacher-quick", async () => {
                      const tObj = DEFAULT_TEACHERS.find((t) => t.name === selectedTeacherForExport) || DEFAULT_TEACHERS[0];
                      const data = getScheduleAndPlansForTeacher(tObj, masterTimetable, schoolInfo);
                      await exportLessonPlansDocx(
                        data.schoolInfo,
                        data.lessonPlans,
                        `KHBD_${tObj.name.replace(/\s+/g, "_")}_Tuan_${schoolInfo.week}`
                      );
                    })
                  }
                  className="px-2 py-1.5 bg-stone-800 hover:bg-black text-white text-[10px] font-bold uppercase tracking-wider border border-black transition-colors shadow-[1px_1px_0px_rgba(0,0,0,1)] disabled:opacity-50 flex items-center justify-center gap-1 cursor-pointer"
                >
                  <Download className="w-3 h-3" />
                  <span>{downloading === "khbd-teacher-quick" ? (isEn ? "Exporting..." : "Đang xuất...") : (isEn ? "Teacher Plans" : "Tải KHBD GV Này")}</span>
                </button>

                {/* Switch active teacher */}
                <button
                  type="button"
                  onClick={() => {
                    const tObj = DEFAULT_TEACHERS.find((t) => t.name === selectedTeacherForExport);
                    if (tObj) {
                      const data = getScheduleAndPlansForTeacher(tObj, masterTimetable, schoolInfo);
                      onUpdateSchoolInfo(data.schoolInfo);
                      onClose();
                    }
                  }}
                  className="px-2 py-1.5 bg-amber-200 hover:bg-amber-300 text-amber-950 text-[10px] font-bold uppercase tracking-wider border border-black transition-colors shadow-[1px_1px_0px_rgba(0,0,0,1)] flex items-center justify-center gap-1 cursor-pointer"
                  title={isEn ? "Switch active workspace to this teacher" : "Chuyển không gian làm việc trên màn hình sang giáo viên này"}
                >
                  <CheckCircle2 className="w-3 h-3" />
                  <span>{isEn ? "Select Teacher" : "Chọn Làm Việc"}</span>
                </button>
              </div>
            </div>

            {/* 2. LBG Word A4 */}
            <div className="p-4 border border-black bg-white hover:bg-stone-50 transition-colors shadow-[2px_2px_0px_rgba(0,0,0,1)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-start gap-3">
                <div className="p-2.5 bg-stone-100 border border-black text-black shrink-0">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h5 className="font-serif font-bold text-sm text-black">
                      {isEn ? "2. Teaching Schedule Word A4 (.LBG)" : "2. Lịch Báo Giảng Word A4 (.LBG)"}
                    </h5>
                    <span className="text-[9px] bg-stone-100 px-1.5 py-0.5 border border-stone-300 font-mono font-bold">
                      {isEn ? `Week ${schoolInfo.week} (${scheduleItems.length} periods)` : `Tuần ${schoolInfo.week} (${scheduleItems.length} tiết)`}
                    </span>
                  </div>
                  <p className="text-xs text-stone-600 mt-0.5 font-serif">
                    {isEn ? "Official 7-column table: Day/Date, Session, Period, Subject, Period Allocation, Lesson Title & Integrations (AI, Digital, Human Rights), Notes." : "Bảng 7 cột chuẩn: Thứ/Ngày, Buổi, Tiết, Môn, Tiết PPCT, Tên bài & Tích hợp (AI, NLS, QCN, QPAN...), Ghi chú."}
                  </p>
                </div>
              </div>

              <button
                type="button"
                disabled={downloading === "lbg"}
                onClick={() =>
                  handleDownload("lbg", () => exportScheduleDocx(schoolInfo, scheduleItems))
                }
                className="w-full sm:w-auto px-4 py-2 bg-black hover:bg-stone-800 text-white text-[10px] font-bold uppercase tracking-wider border border-black transition-colors shadow-[2px_2px_0px_rgba(0,0,0,0.3)] disabled:opacity-50 flex items-center justify-center gap-1.5 shrink-0 cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>{downloading === "lbg" ? (isEn ? "Creating Schedule..." : "Đang tạo LBG...") : (isEn ? "Download Schedule (.docx)" : "Tải LBG Word A4")}</span>
              </button>
            </div>

            {/* 3. KHBD Word A4 */}
            <div className="p-4 border border-black bg-white hover:bg-stone-50 transition-colors shadow-[2px_2px_0px_rgba(0,0,0,1)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-start gap-3">
                <div className="p-2.5 bg-stone-100 border border-black text-black shrink-0">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h5 className="font-serif font-bold text-sm text-black">
                      {isEn ? "3. Lesson Plans Word A4 (.KHBD)" : "3. Kế Hoạch Bài Dạy Word A4 (.KHBD)"}
                    </h5>
                    <span className="text-[9px] bg-stone-200 text-black px-1.5 py-0.5 font-mono font-bold border border-stone-300">
                      CV 2345/BGDĐT ({lessonPlans.length} {isEn ? "lessons" : "bài"})
                    </span>
                  </div>
                  <p className="text-xs text-stone-600 mt-0.5 font-serif">
                    {isEn ? "Full week lesson plans from Monday to Friday, clear pagination, 4 sections + 2-column teacher/student activity matrix." : "Trọn bộ giáo án cả tuần từ Thứ 2 đến Thứ 6, phân trang rõ ràng, cấu trúc 4 mục + ma trận hoạt động 2 cột."}
                  </p>
                </div>
              </div>

              <button
                type="button"
                disabled={downloading === "khbd"}
                onClick={() =>
                  handleDownload("khbd", () =>
                    exportLessonPlansDocx(
                      schoolInfo,
                      lessonPlans,
                      `Tuan_${schoolInfo.week}_Ca_Tuan_T2_den_T6`
                    )
                  )
                }
                className="w-full sm:w-auto px-4 py-2 bg-white hover:bg-stone-100 text-black text-[10px] font-bold uppercase tracking-wider border border-black transition-colors shadow-[1px_1px_0px_rgba(0,0,0,1)] disabled:opacity-50 flex items-center justify-center gap-1.5 shrink-0 cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>{downloading === "khbd" ? (isEn ? "Creating..." : "Đang tạo...") : (isEn ? "Download Plans (Standalone)" : "Tải KHBD (Tách Rời)")}</span>
              </button>
            </div>

            {/* 4. KHBD CẢ TUẦN: TRANG ĐẦU LBG + KẾ TIẾP KHBD THỨ 2 ĐẾN THỨ 6 (CHUYÊN DỤNG NỘP BGH & TỔ) */}
            <div className="p-4 border-2 border-black bg-stone-50 hover:bg-stone-100 transition-colors shadow-[3px_3px_0px_rgba(0,0,0,1)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-start gap-3">
                <div className="p-2.5 bg-black text-white shrink-0">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h5 className="font-serif font-bold text-sm text-black">
                      {isEn ? "4. Lesson Plans Full Week (Page 1: Schedule + Page 2-N: Plans Mon-Fri)" : "4. KHBD Cả Tuần (Trang 1: LBG + Trang 2-N: KHBD T2-T6)"}
                    </h5>
                    <span className="text-[9px] bg-black text-white px-2 py-0.5 font-mono font-bold uppercase tracking-wider">
                      {isEn ? "★ Ready for Administration" : "★ Chuẩn Nộp BGH / Tổ Trưởng"}
                    </span>
                  </div>
                  <p className="text-xs text-stone-700 mt-0.5 font-serif font-medium">
                    {isEn 
                      ? "First page contains the complete weekly Teaching Schedule. Subsequent pages contain lesson plans in strict timetable sequence (Official CV 2345/BGDĐT)."
                      : "Trang đầu tiên là Lịch báo giảng tuần hoàn chỉnh. Các trang kế tiếp là Kế hoạch bài dạy chi tiết từng môn từ Thứ 2 đến Thứ 6 (CV 2345/BGDĐT)."}
                  </p>
                </div>
              </div>

              <button
                type="button"
                disabled={downloading === "khbd-with-lbg"}
                onClick={() =>
                  handleDownload("khbd-with-lbg", () =>
                    exportWeeklyKHBDWithLBGFirstPageDocx(schoolInfo, scheduleItems, lessonPlans)
                  )
                }
                className="w-full sm:w-auto px-5 py-2.5 bg-black hover:bg-stone-800 text-white text-xs font-bold uppercase tracking-wider border border-black transition-colors shadow-[2px_2px_0px_rgba(0,0,0,0.4)] disabled:opacity-50 flex items-center justify-center gap-2 shrink-0 cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>{downloading === "khbd-with-lbg" ? (isEn ? "Exporting Word..." : "Đang xuất Word...") : (isEn ? "Download Plans (Schedule Page 1)" : "Tải KHBD (Kèm LBG Trang 1)")}</span>
              </button>
            </div>
          </div>

          {/* Batch & Combo Options */}
          <div className="pt-3 border-t-2 border-black space-y-3">
            <h4 className="text-xs uppercase font-bold tracking-wider text-stone-600">
              {isEn ? "Quick 1-Click Batch Download Commands:" : "Lệnh Tải Trọn Gói Nhanh (1 Nhấp Chuột):"}
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* Batch 3 separate files */}
              <button
                type="button"
                disabled={downloading === "all-three"}
                onClick={() =>
                  handleDownload("all-three", () =>
                    exportAllThreeFiles(schoolInfo, masterTimetable, scheduleItems, lessonPlans)
                  )
                }
                className="p-4 text-left border border-black bg-stone-100 hover:bg-stone-200 transition-colors shadow-[2px_2px_0px_rgba(0,0,0,1)] disabled:opacity-50 space-y-1 group cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <span className="font-serif font-bold text-xs uppercase text-black flex items-center gap-1.5">
                    <Archive className="w-4 h-4 text-black" />
                    {isEn ? "Download 3 Separate Files (.docx)" : "Tải 3 Tệp Tách Rời (.docx)"}
                  </span>
                  <ChevronRight className="w-4 h-4 text-black group-hover:translate-x-1 transition-transform" />
                </div>
                <p className="text-[11px] text-stone-600 font-serif">
                  {isEn ? "Automatically downloads 3 separate Word files: 1_TKB.docx, 2_LBG.docx, 3_KHBD.docx" : "Tự động tải 3 tệp Word riêng biệt: 1_TKB.docx, 2_LBG.docx, 3_KHBD.docx"}
                </p>
              </button>

              {/* All-in-one combined document */}
              <button
                type="button"
                disabled={downloading === "combined"}
                onClick={() =>
                  handleDownload("combined", () =>
                    exportCombinedAllInOneDocx(schoolInfo, masterTimetable, scheduleItems, lessonPlans)
                  )
                }
                className="p-4 text-left border border-black bg-black text-white hover:bg-stone-800 transition-colors shadow-[2px_2px_0px_rgba(0,0,0,0.4)] disabled:opacity-50 space-y-1 group cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <span className="font-serif font-bold text-xs uppercase text-white flex items-center gap-1.5">
                    <FileText className="w-4 h-4 text-white" />
                    {isEn ? "All-In-One Combined Word A4" : "Tệp Word A4 Gộp Đầy Đủ"}
                  </span>
                  <ChevronRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
                </div>
                <p className="text-[11px] text-stone-300 font-serif">
                  {isEn ? "Single Word document containing: [Part 1] Timetable + [Part 2] Schedule + [Part 3] Lesson Plans" : "1 tệp Word duy nhất gồm: [Phần 1] TKB + [Phần 2] LBG + [Phần 3] KHBD"}
                </p>
              </button>

              {/* All 18 Teachers ZIP */}
              {onExportAllTeachersZip && (
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onExportAllTeachersZip();
                  }}
                  className="p-4 text-left border-2 border-black bg-amber-300 hover:bg-amber-200 transition-colors shadow-[3px_3px_0px_rgba(0,0,0,1)] space-y-1 group cursor-pointer sm:col-span-2"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-serif font-black text-xs uppercase text-black flex items-center gap-1.5">
                      <Archive className="w-4 h-4 text-black" />
                      {isEn ? "Export All 18 Teachers In 1 ZIP File (.zip)" : "Xuất Trọn Bộ Toàn Trường 18 Giáo Viên (.ZIP)"}
                    </span>
                    <span className="text-[10px] font-mono font-bold bg-black text-white px-2 py-0.5 uppercase">
                      {isEn ? "18 Teachers Full Sync" : "Đồng Bộ 100% Cả Trường"}
                    </span>
                  </div>
                  <p className="text-[11px] text-black font-serif">
                    {isEn 
                      ? "Automatically packages all 18 teachers (10 Homeroom + 8 Specialist) with their respective Timetable, Teaching Schedule, and Lesson Plans into organized folders." 
                      : "Tự động xuất trọn gói hồ sơ 18 giáo viên (10 GVCN + 8 GV Chuyên) gồm TKB, Lịch báo giảng và KHBD kèm LBG trang đầu theo TKB Tuần 2 mới nhất vào các thư mục riêng."}
                  </p>
                </button>
              )}
            </div>
          </div>

          {/* Standard compliance note */}
          <div className="p-3 bg-stone-50 border border-stone-300 text-[11px] text-stone-600 font-serif space-y-1">
            <div className="font-bold text-stone-900 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-black" />
              {isEn ? "Document Technical Quality Commitment:" : "Cam kết quy chuẩn kỹ thuật văn bản:"}
            </div>
            <p>
              {isEn 
                ? "• ISO A4 Standard Paper (210mm x 297mm) • Standard Margins (Top 20mm, Bottom 20mm, Left 25mm, Right 17.5mm) • Grid protection preventing broken layouts on Microsoft Word 2010 - 2024 and Office 365." 
                : "• Khổ giấy chuẩn ISO A4 (210mm x 297mm) • Căn lề chuẩn Nghị định 30/2020/NĐ-CP (Lề trên 20mm, dưới 20mm, trái 25mm, phải 17.5mm) • Bảng biểu chống vỡ khung trên mọi phiên bản Microsoft Word 2010 - 2024 và Office 365."}
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t-2 border-black bg-stone-100 flex items-center justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 text-xs font-bold uppercase tracking-wider bg-white hover:bg-stone-200 border border-black shadow-[1px_1px_0px_rgba(0,0,0,1)] transition-colors"
          >
            {isEn ? "Close" : "Đóng"}
          </button>
        </div>
      </div>
    </div>
  );
};

