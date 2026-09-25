import React, { useState } from "react";
import { ScheduleItem, SchoolInfo, DayOfWeek } from "../types";
import { DAYS_OF_WEEK, calculateWeekDateRange, getWeekDates, getDisplayLessonTitleInLBG, isSpecialistPeriodForClass } from "../data/defaultTimetables";
import { 
  FileDown, 
  Plus, 
  Trash2, 
  Edit3, 
  Check, 
  Printer, 
  BookOpen, 
  Filter,
  CalendarDays,
  User,
  Sparkles,
  ChevronRight,
  Presentation,
  ExternalLink,
  Calendar,
  RefreshCw
} from "lucide-react";
import { buildSearchQueries } from "../utils/lectureResourceHelper";
import { isAuthenticLectureAvailable } from "../utils/classroomSlideDataHelper";
import { filterPersonalTeacherSchedule } from "../utils/teacherScheduleHelper";
import { cleanLessonTitle } from "../utils/lessonTitleHelper";

interface ScheduleViewProps {
  scheduleItems: ScheduleItem[];
  onUpdateScheduleItems: (items: ScheduleItem[]) => void;
  schoolInfo: SchoolInfo;
  onExportDocx: () => void;
  onViewLessonPlan: (item: ScheduleItem) => void;
  onOpenTeacherSelectModal?: () => void;
  lang?: "vi" | "en";
  onWeekChange?: (newWeek: number) => void;
}

export const ScheduleView: React.FC<ScheduleViewProps> = ({
  scheduleItems,
  onUpdateScheduleItems,
  schoolInfo,
  onExportDocx,
  onViewLessonPlan,
  onOpenTeacherSelectModal,
  lang = "vi",
  onWeekChange,
}) => {
  const isEn = lang === "en";

  const getDayDisplay = (d: string) => {
    if (!isEn) return d;
    const map: Record<string, string> = {
      "Thứ Hai": "Monday",
      "Thứ Ba": "Tuesday",
      "Thứ Tư": "Wednesday",
      "Thứ Năm": "Thursday",
      "Thứ Sáu": "Friday",
      "Thứ Bảy": "Saturday",
      "Chủ Nhật": "Sunday",
    };
    return map[d] || d;
  };

  const getSessionDisplay = (s: string) => {
    if (!isEn) return s;
    return s === "Sáng" ? "Morning" : "Afternoon";
  };

  const [selectedDay, setSelectedDay] = useState<string>("all");
  const [viewScope, setViewScope] = useState<"personal" | "all">("personal");
  const [editingItemId, setEditingItemId] = useState<string | null>(null);
  const [editForm, setEditForm] = useState<Partial<ScheduleItem>>({});
  const [editingDayDate, setEditingDayDate] = useState<string | null>(null);
  const [dayDateValue, setDayDateValue] = useState<string>("");

  const isHomeroom = schoolInfo.teacherType === "homeroom";
  const personalItems = filterPersonalTeacherSchedule(scheduleItems, schoolInfo.teacherType);

  const baseItems = isHomeroom && viewScope === "personal" ? personalItems : scheduleItems;

  const weekDates = getWeekDates(schoolInfo.startDate, schoolInfo.week);
  const dayOrder = ["Thứ Hai", "Thứ Ba", "Thứ Tư", "Thứ Năm", "Thứ Sáu", "Thứ Bảy", "Chủ Nhật"];

  const filteredItems = selectedDay === "all" 
    ? baseItems 
    : baseItems.filter(item => item.day === selectedDay);

  // Group items by day for 1 thứ - 1 ngày cho 7 tiết
  const groupedDays: { day: string; dateStr: string; items: ScheduleItem[] }[] = [];
  const activeDays = selectedDay === "all" ? dayOrder : [selectedDay];

  activeDays.forEach((d) => {
    const items = filteredItems.filter((it) => it.day === d);
    if (items.length > 0) {
      const dayIdx = dayOrder.indexOf(d);
      const fallbackDate = dayIdx >= 0 && dayIdx < 5 ? weekDates[dayIdx] : "";
      groupedDays.push({
        day: d,
        dateStr: items[0]?.dateStr || fallbackDate,
        items,
      });
    }
  });

  // Handle saving date for all periods in a day (1 thứ, 1 ngày cho cả ngày/7 tiết)
  const handleSaveDayDate = (day: string) => {
    if (!dayDateValue.trim()) {
      setEditingDayDate(null);
      return;
    }
    const updated = scheduleItems.map((it) => 
      it.day === day ? { ...it, dateStr: dayDateValue.trim() } : it
    );
    onUpdateScheduleItems(updated);
    setEditingDayDate(null);
  };

  // Re-synchronize all day dates strictly according to the academic calendar of the current week
  const handleAutoSyncDatesToWeek = () => {
    const standardDates = getWeekDates(schoolInfo.startDate, schoolInfo.week);
    const updated = scheduleItems.map((item) => {
      const dayIdx = dayOrder.indexOf(item.day);
      if (dayIdx >= 0 && dayIdx < 5) {
        return { ...item, dateStr: standardDates[dayIdx] };
      }
      return item;
    });
    onUpdateScheduleItems(updated);
  };

  const handleStartEdit = (item: ScheduleItem) => {
    setEditingItemId(item.id);
    setEditForm({ ...item });
  };

  const handleSaveEdit = () => {
    if (!editingItemId) return;
    const updated = scheduleItems.map(it => it.id === editingItemId ? { ...it, ...editForm } as ScheduleItem : it);
    onUpdateScheduleItems(updated);
    setEditingItemId(null);
  };

  const handleDeleteItem = (id: string) => {
    if (window.confirm(isEn ? "Are you sure you want to remove this period from the Teaching Schedule?" : "Bạn có chắc chắn muốn xóa tiết học này khỏi Lịch báo giảng?")) {
      onUpdateScheduleItems(scheduleItems.filter(it => it.id !== id));
    }
  };

  const handleAddNewItem = (day: DayOfWeek) => {
    // Find existing date for this day if any
    const existingDate = scheduleItems.find(it => it.day === day)?.dateStr || schoolInfo.startDate.split("/").slice(0, 2).join("/");
    const existingCount = scheduleItems.filter(it => it.day === day).length;

    const newItem: ScheduleItem = {
      id: `custom-${Date.now()}`,
      day: day,
      dateStr: existingDate,
      session: existingCount >= 4 ? "Chiều" : "Sáng",
      period: (existingCount % 4) + 1,
      subject: isEn ? "English" : "Tiếng Việt",
      curriculumPeriod: 1,
      lessonTitle: isEn ? "New Lesson" : "Bài dạy mới",
      integrationNotes: "",
      className: schoolInfo.className,
      teacherName: schoolInfo.teacherName,
    };
    onUpdateScheduleItems([...scheduleItems, newItem]);
    handleStartEdit(newItem);
  };

  return (
    <div className="space-y-6">
      {/* Teacher Status & Quick Switch Banner */}
      <div className="bg-stone-50 border-2 border-black p-3.5 sm:p-4 shadow-[3px_3px_0px_rgba(0,0,0,1)] flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 border border-black bg-black text-white flex items-center justify-center shrink-0">
            <User className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="font-bold text-sm text-black">
                {schoolInfo.teacherName}
              </span>
              <span className="text-[10px] font-mono font-bold bg-white px-2 py-0.5 border border-black text-stone-900">
                {schoolInfo.teacherType === "specialist"
                  ? (isEn ? `Specialist (${schoolInfo.specialistSubject}) - ${schoolInfo.assignedClasses?.length || 10} Classes` : `GV Chuyên ${schoolInfo.specialistSubject} (${schoolInfo.assignedClasses?.length || 10} Lớp)`)
                  : (isEn ? `Homeroom Teacher - Class ${schoolInfo.className} (Grade ${schoolInfo.grade})` : `GVCN Lớp ${schoolInfo.className} (Khối ${schoolInfo.grade})`)}
              </span>
              <span className="text-[10px] font-mono bg-stone-200 px-1.5 py-0.5 text-stone-800 border border-stone-300">
                {baseItems.length} {isEn ? "periods" : "tiết giảng dạy"}
              </span>
            </div>
            <p className="text-[11px] text-stone-600 font-serif mt-0.5">
              {isHomeroom
                ? (isEn ? `Weekly schedule automatically aligned with curriculum distribution for week ${schoolInfo.week}` : "Lịch báo giảng tự động cập nhật môn dạy & đồng bộ theo phân phối chương trình tuần " + schoolInfo.week)
                : (isEn ? `Specialist schedule for ${schoolInfo.specialistSubject} across assigned classes for week ${schoolInfo.week}` : `Lịch báo giảng chuyên trách môn ${schoolInfo.specialistSubject} phủ khắp các lớp tuần ` + schoolInfo.week)}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 flex-wrap w-full md:w-auto justify-end">
          {/* Homeroom View Scope Toggle */}
          {isHomeroom && (
            <div className="flex border border-black overflow-hidden bg-white shadow-[1px_1px_0px_rgba(0,0,0,1)] text-[10px]">
              <button
                type="button"
                onClick={() => setViewScope("personal")}
                className={`px-2.5 py-1.5 font-bold uppercase tracking-wider border-r border-black transition-colors cursor-pointer ${
                  viewScope === "personal"
                    ? "bg-black text-white"
                    : "bg-white text-stone-800 hover:bg-stone-200"
                }`}
                title={isEn ? "Only show periods directly taught by homeroom teacher" : "Chỉ hiển thị các tiết do GVCN trực tiếp giảng dạy"}
              >
                {isEn ? `Taught by Me (${personalItems.length})` : `Tiết GV Dạy (${personalItems.length})`}
              </button>
              <button
                type="button"
                onClick={() => setViewScope("all")}
                className={`px-2.5 py-1.5 font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                  viewScope === "all"
                    ? "bg-black text-white"
                    : "bg-white text-stone-800 hover:bg-stone-200"
                }`}
                title={isEn ? "Show all class periods (including specialist teachers)" : "Hiển thị toàn bộ các tiết của lớp (bao gồm tiết GV Chuyên)"}
              >
                {isEn ? `Whole Class (${scheduleItems.length})` : `Cả Lớp (${scheduleItems.length})`}
              </button>
            </div>
          )}

          {onOpenTeacherSelectModal && (
            <button
              type="button"
              onClick={onOpenTeacherSelectModal}
              className="px-3 py-1.5 bg-amber-100 hover:bg-amber-200 text-amber-950 text-[10px] font-bold uppercase tracking-wider border border-black transition-colors shadow-[1px_1px_0px_rgba(0,0,0,1)] flex items-center gap-1.5 cursor-pointer"
            >
              <User className="w-3 h-3" />
              <span>{isEn ? "Switch Teacher / Custom" : "Đổi Giáo Viên / Lập Riêng"}</span>
            </button>
          )}
        </div>
      </div>

      {/* Top Bar with Week Selector, Filter & Export */}
      <div className="bg-white p-4 border border-black shadow-[2px_2px_0px_rgba(0,0,0,1)] flex flex-col gap-3">
        {/* Row 1: Week Selector & Auto-Sync Dates */}
        <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-stone-200">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[10px] uppercase font-bold tracking-wider text-stone-700 flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-black" />
              {isEn ? "Week Calendar:" : "Tuần & Ngày tháng:"}
            </span>

            {onWeekChange && (
              <div className="flex items-center border border-black bg-white shadow-[1px_1px_0px_rgba(0,0,0,1)]">
                <button
                  type="button"
                  disabled={schoolInfo.week <= 1}
                  onClick={() => onWeekChange(schoolInfo.week - 1)}
                  className="px-2 py-1 text-xs font-bold border-r border-black hover:bg-stone-200 disabled:opacity-25 cursor-pointer disabled:cursor-not-allowed"
                  title={isEn ? "Previous week" : "Tuần trước"}
                >
                  ◀
                </button>
                <select
                  value={schoolInfo.week}
                  onChange={(e) => onWeekChange(parseInt(e.target.value) || 1)}
                  className="bg-white text-stone-900 text-xs font-bold px-2 py-1 focus:outline-none cursor-pointer"
                  title={isEn ? "Select academic week" : "Chọn tuần học (TKB, LBG, KHBD tự động cập nhật ngày theo tuần)"}
                >
                  {Array.from({ length: 35 }, (_, i) => i + 1).map((w) => {
                    const range = calculateWeekDateRange(w);
                    return (
                      <option key={w} value={w}>
                        {isEn 
                          ? `Week ${w} (${range.datesShort[0]} - ${range.datesShort[4]})` 
                          : `Tuần ${w} (${range.datesShort[0]} - ${range.datesShort[4]})`}
                      </option>
                    );
                  })}
                </select>
                <button
                  type="button"
                  disabled={schoolInfo.week >= 35}
                  onClick={() => onWeekChange(schoolInfo.week + 1)}
                  className="px-2 py-1 text-xs font-bold border-l border-black hover:bg-stone-200 disabled:opacity-25 cursor-pointer disabled:cursor-not-allowed"
                  title={isEn ? "Next week" : "Tuần tiếp theo"}
                >
                  ▶
                </button>
              </div>
            )}

            <div className="text-xs text-stone-700 font-mono bg-stone-100 px-2 py-1 border border-stone-300">
              {isEn ? "From " : "Từ: "}<strong>{schoolInfo.startDate}</strong> {isEn ? "to " : "đến: "}<strong>{schoolInfo.endDate}</strong>
            </div>

            <button
              type="button"
              onClick={handleAutoSyncDatesToWeek}
              className="px-2.5 py-1 text-[11px] font-bold border border-black bg-amber-50 hover:bg-amber-100 text-stone-900 flex items-center gap-1 cursor-pointer transition-colors shadow-[1px_1px_0px_rgba(0,0,0,1)]"
              title={isEn ? "Sync all dates strictly according to current week" : "Tự động đồng bộ chuẩn lại ngày Thứ 2 đến Thứ 6 cho tất cả các tiết trong tuần"}
            >
              <RefreshCw className="w-3 h-3 text-stone-700" />
              <span>{isEn ? "Sync Dates to Week" : "↻ Đồng bộ ngày theo tuần"}</span>
            </button>
          </div>

          {/* Action Export Buttons */}
          <div className="flex items-center space-x-2 flex-wrap gap-y-2">
            <button
              onClick={onExportDocx}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-black hover:bg-stone-800 text-white text-[10px] font-bold uppercase tracking-widest border border-black shadow-[2px_2px_0px_rgba(0,0,0,0.3)] transition-colors active:translate-y-0.5 cursor-pointer"
              title={isEn ? "Download official 7-column teaching schedule Word A4 document" : "Tải file Word A4 Lịch báo giảng 7 cột chuẩn"}
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>{isEn ? "Export Word A4" : "Tải LBG Word A4"}</span>
            </button>

            <button
              onClick={() => window.print()}
              className="flex items-center gap-1.5 px-2.5 py-1.5 bg-white hover:bg-stone-100 text-black border border-black text-[10px] font-bold uppercase tracking-wider transition-colors shadow-[1px_1px_0px_rgba(0,0,0,1)]"
              title={isEn ? "Print teaching schedule" : "In lịch báo giảng"}
            >
              <Printer className="w-3.5 h-3.5" />
              <span>{isEn ? "Print" : "In Bảng"}</span>
            </button>
          </div>
        </div>

        {/* Row 2: Day Filter Tabs */}
        <div className="flex items-center space-x-1.5 overflow-x-auto pb-1">
          <span className="text-[10px] uppercase font-bold tracking-wider text-stone-600 mr-1 whitespace-nowrap flex items-center gap-1">
            <Filter className="w-3.5 h-3.5 text-black" />
            {isEn ? "Filter day:" : "Lọc ngày:"}
          </span>
          <button
            onClick={() => setSelectedDay("all")}
            className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider border border-black transition-colors ${
              selectedDay === "all"
                ? "bg-black text-white"
                : "bg-stone-100 text-stone-800 hover:bg-stone-200"
            }`}
          >
            {isEn ? `All Week (${scheduleItems.length})` : `Cả Tuần (${scheduleItems.length})`}
          </button>
          {DAYS_OF_WEEK.map((day, dIdx) => {
            const datePart = weekDates[dIdx] ? weekDates[dIdx].substring(0, 5) : "";
            return (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                className={`px-2.5 py-1.5 text-xs font-bold uppercase tracking-wider border border-black transition-colors ${
                  selectedDay === day
                    ? "bg-black text-white"
                    : "bg-white text-stone-800 hover:bg-stone-200"
                }`}
                title={`${day} - ${weekDates[dIdx] || ""}`}
              >
                {getDayDisplay(day)} {datePart ? `(${datePart})` : ""}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Schedule Table Paper */}
      <div className="bg-white border border-black p-6 sm:p-8 space-y-6 shadow-[4px_4px_0px_rgba(0,0,0,0.1)] relative">
        <div className="absolute top-0 right-0 p-4 opacity-5 font-serif text-7xl font-bold pointer-events-none select-none">
          {isEn ? "SCH" : "LBG"}
        </div>

        {/* Official Header */}
        <div className="border-b border-black pb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="text-center md:text-left space-y-1">
              <p className="font-semibold text-stone-600 uppercase tracking-wider text-[11px]">
                {schoolInfo.departmentName || (isEn ? "DIVISION OF EDUCATION & TRAINING" : "ỦY BAN NHÂN DÂN / PHÒNG GD&ĐT")}
              </p>
              <p className="font-serif font-bold text-black text-base uppercase tracking-tight">
                {schoolInfo.schoolName}
              </p>
              {schoolInfo.branchName && (
                <p className="text-stone-700">{isEn ? "Branch: " : "Phân hiệu: "}<span className="font-serif font-bold italic">{schoolInfo.branchName}</span></p>
              )}
              <p className="text-stone-900 font-medium">
                {schoolInfo.teacherType === "specialist"
                  ? <>{isEn ? "Specialist: " : "Môn chuyên: "}<strong className="font-mono bg-stone-100 px-1.5 py-0.5 border border-stone-300">{schoolInfo.specialistSubject}</strong> | {isEn ? "Teacher: " : "Giáo viên: "}<span className="font-serif italic font-semibold">{schoolInfo.teacherName}</span></>
                  : <>{isEn ? "Class: " : "Lớp: "}<strong className="font-mono bg-stone-100 px-1.5 py-0.5 border border-stone-300">{schoolInfo.className}</strong> | {isEn ? "Teacher: " : "Giáo viên: "}<span className="font-serif italic font-semibold">{schoolInfo.teacherName}</span></>}
              </p>
            </div>

            <div className="text-center md:text-right space-y-1">
              <p className="font-bold text-black uppercase tracking-wider text-[11px]">
                {isEn ? "SOCIALIST REPUBLIC OF VIETNAM" : "CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM"}
              </p>
              <p className="font-serif italic font-semibold text-stone-800">
                {isEn ? "Independence - Freedom - Happiness" : "Độc lập - Tự do - Hạnh phúc"}
              </p>
              <p className="text-stone-400 font-mono text-[10px]">---------------------------</p>
              <p className="text-stone-600 text-[11px] uppercase tracking-wider">{isEn ? "School Year: " : "Năm học: "}<b>{schoolInfo.academicYear}</b></p>
            </div>
          </div>

          <div className="text-center mt-6 pt-4 border-t border-dashed border-stone-300">
            <h2 className="text-2xl font-serif font-bold text-black tracking-tight uppercase">
              {isEn ? `TEACHING SCHEDULE - WEEK ${schoolInfo.week}` : `LỊCH BÁO GIẢNG TUẦN ${schoolInfo.week}`}
            </h2>
            <p className="text-xs text-stone-600 mt-1 font-serif italic">
              {isEn ? "From " : "Từ ngày "}<strong>{schoolInfo.startDate}</strong> {isEn ? "to " : "đến ngày "}<strong>{schoolInfo.endDate}</strong> — {isEn ? "School Year: " : "Năm học: "}<strong>{schoolInfo.academicYear}</strong>
            </p>
            <div className="inline-flex items-center gap-3 mt-2 px-3 py-1 border border-black bg-stone-100 text-stone-900 text-[10px] font-bold uppercase tracking-wider">
              <span>{isEn ? "WEEK: " : "TUẦN THỨ: "}{schoolInfo.week}</span>
              <span className="opacity-40">|</span>
              {schoolInfo.teacherType === "specialist" ? (
                <span>{isEn ? "SPECIALIST SUBJECT: " : "MÔN CHUYÊN: "}{schoolInfo.specialistSubject?.toUpperCase()}</span>
              ) : (
                <>
                  <span>{isEn ? "GRADE: " : "KHỐI: "}{schoolInfo.grade}</span>
                  <span className="opacity-40">|</span>
                  <span>{isEn ? "CLASS: " : "LỚP: "}{schoolInfo.className}</span>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Schedule Table (Mẫu LBG chuẩn tải lên: 6 cột, tiết chuyên chỉ ghi tên GV chuyên) */}
        <div className="overflow-x-auto border-2 border-black">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-[#1E4E79] text-white font-serif uppercase tracking-wider text-[11px] font-bold border-b-2 border-black">
                <th className="py-3 px-3 border-r border-stone-400 text-center w-32">{isEn ? "Day / Date" : "Thứ / Ngày"}</th>
                <th className="py-3 px-2 border-r border-stone-400 text-center w-16">{isEn ? "Session" : "Buổi"}</th>
                <th className="py-3 px-2 border-r border-stone-400 text-center w-12">{isEn ? "Period" : "Tiết"}</th>
                <th className="py-3 px-3 border-r border-stone-400 text-left w-40">{isEn ? "Subject / Discipline" : "Môn / Phân môn"}</th>
                <th className="py-3 px-2 border-r border-stone-400 text-center w-20">{isEn ? "Curriculum P." : "Tiết PPCT"}</th>
                <th className="py-3 px-4 border-r border-stone-400 text-left">{isEn ? "Lesson Title" : "Tên bài dạy"}</th>
                <th className="py-3 px-2 text-center w-16 bg-[#163B5C]">{isEn ? "Actions" : "Sửa"}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-black">
              {groupedDays.length === 0 ? (
                <tr>
                  <td colSpan={7} className="py-8 text-center text-stone-500 font-serif italic">
                    {isEn ? "No schedule items for this day. Click 'Add Period' or configure timetable." : "Chưa có dữ liệu tiết dạy cho ngày này. Hãy bấm \"Thêm tiết học\" hoặc chọn TKB nhà trường."}
                  </td>
                </tr>
              ) : (
                groupedDays.map((group) => {
                  // Calculate session spans for each session block in the day
                  const sessionSpans: number[] = [];
                  let i = 0;
                  while (i < group.items.length) {
                    let count = 1;
                    while (i + count < group.items.length && group.items[i + count].session === group.items[i].session) {
                      count++;
                    }
                    for (let c = 0; c < count; c++) {
                      sessionSpans.push(c === 0 ? count : 0);
                    }
                    i += count;
                  }

                  return group.items.map((item, itemIdx) => {
                    const isEditing = editingItemId === item.id;
                    const isFirstInDay = itemIdx === 0;
                    const sessionSpan = sessionSpans[itemIdx];

                    return (
                      <tr
                        key={item.id}
                        className={`hover:bg-stone-100/70 transition-colors ${
                          itemIdx % 2 === 0 ? "bg-white" : "bg-stone-50/60"
                        }`}
                      >
                        {/* Day & Date: Gộp 1 Thứ, 1 Ngày cho tất cả các tiết trong ngày */}
                        {isFirstInDay && (
                          <td
                            rowSpan={group.items.length}
                            className="py-3 px-2 border-r-2 border-black text-center align-middle bg-stone-50/80 font-bold text-black border-b border-black"
                          >
                            <div className="font-serif text-sm font-bold text-black">{getDayDisplay(group.day)}</div>
                            
                            {editingDayDate === group.day ? (
                              <div className="mt-1.5 flex items-center justify-center gap-1">
                                <input
                                  type="text"
                                  value={dayDateValue}
                                  onChange={(e) => setDayDateValue(e.target.value)}
                                  placeholder="dd/mm"
                                  className="w-16 px-1 py-0.5 text-[10px] font-mono border border-black bg-white text-center focus:outline-none"
                                  autoFocus
                                />
                                <button
                                  type="button"
                                  onClick={() => handleSaveDayDate(group.day)}
                                  className="p-1 bg-black text-white hover:bg-stone-800 text-[9px] border border-black cursor-pointer"
                                  title={isEn ? "Save date for all periods" : "Lưu ngày cho cả ngày"}
                                >
                                  <Check className="w-3 h-3" />
                                </button>
                              </div>
                            ) : (
                              <div
                                onClick={() => {
                                  setEditingDayDate(group.day);
                                  setDayDateValue(group.dateStr || "");
                                }}
                                className="mt-1 text-[11px] font-mono font-medium text-stone-600 hover:text-black hover:bg-stone-200 px-1 py-0.5 border border-dashed border-stone-300 cursor-pointer rounded-xs inline-flex items-center gap-1"
                                title={isEn ? "Click to edit date for all periods today" : "Bấm để sửa ngày cho tất cả các tiết trong ngày này"}
                              >
                                <CalendarDays className="w-3 h-3 text-stone-500" />
                                <span>{group.dateStr || (isEn ? "Enter date" : "Nhập ngày")}</span>
                              </div>
                            )}
                            <div className="text-[9px] text-stone-400 font-mono mt-1">({group.items.length} {isEn ? "periods" : "tiết"})</div>
                          </td>
                        )}

                        {/* Session: Gộp hiển thị 1 lần cho Sáng / Chiều */}
                        {sessionSpan > 0 && (
                          <td
                            rowSpan={sessionSpan}
                            className="py-2 px-2 border-r border-black text-center align-middle bg-stone-50/50"
                          >
                            <span className={`px-1.5 py-0.5 border text-[10px] font-bold uppercase tracking-wider inline-block ${
                              item.session === "Sáng" ? "bg-stone-100 border-stone-400 text-stone-900" : "bg-stone-200 border-stone-500 text-stone-900"
                            }`}>
                              {getSessionDisplay(item.session)}
                            </span>
                          </td>
                        )}

                        {/* Period */}
                        <td className="py-2 px-2 border-r border-black text-center font-mono font-bold text-black">
                          {item.period}
                        </td>

                        {/* Subject */}
                        <td className="py-2 px-3 border-r border-black font-semibold text-black">
                          {isEditing ? (
                            <input
                              type="text"
                              value={editForm.subject || ""}
                              onChange={(e) => setEditForm({ ...editForm, subject: e.target.value })}
                              className="w-full px-2 py-1 border border-black bg-white text-xs font-semibold focus:outline-none"
                            />
                          ) : (
                            <div className="flex items-center flex-wrap gap-1">
                              <span className="font-serif">{item.subject}</span>
                              {(schoolInfo.teacherType === "specialist" || (item.className && item.className !== schoolInfo.className)) && (
                                <span className="text-[9px] bg-black text-white px-1.5 py-0.2 font-mono font-bold">
                                  {item.className}
                                </span>
                              )}
                            </div>
                          )}
                        </td>

                        {/* Curriculum Period (Tiết PPCT) */}
                        <td className="py-2 px-2 border-r border-black text-center font-mono font-bold text-black">
                          {isEditing ? (
                            <input
                              type="text"
                              value={editForm.curriculumPeriod || ""}
                              onChange={(e) => setEditForm({ ...editForm, curriculumPeriod: e.target.value })}
                              className="w-full px-1 py-1 border border-black bg-white text-xs text-center font-bold font-mono focus:outline-none"
                            />
                          ) : (
                            item.curriculumPeriod || "-"
                          )}
                        </td>

                        {/* Lesson Title: Chuẩn mẫu LBG (tiết GV chuyên thì chỉ ghi tên GV chuyên, không ghi tên bài) */}
                        <td className="py-2.5 px-4 border-r border-black">
                          {isEditing ? (
                            <input
                              type="text"
                              value={editForm.lessonTitle || ""}
                              onChange={(e) => setEditForm({ ...editForm, lessonTitle: e.target.value })}
                              placeholder={isEn ? "Lesson title / Teacher..." : "Tên bài dạy / Tên GV chuyên..."}
                              className="w-full px-2 py-1 border border-black text-xs font-semibold focus:outline-none"
                              autoFocus
                            />
                          ) : (
                            <div className="font-semibold text-black leading-snug">
                              {getDisplayLessonTitleInLBG(item, isHomeroom) || (isEn ? "Lesson" : "Bài dạy")}
                            </div>
                          )}
                        </td>

                        {/* Actions */}
                        <td className="py-2 px-2 text-center space-x-1 whitespace-nowrap">
                          {isEditing ? (
                            <button
                              onClick={handleSaveEdit}
                              className="p-1 bg-black text-white hover:bg-stone-800 transition-colors border border-black"
                              title={isEn ? "Save row" : "Lưu dòng"}
                            >
                              <Check className="w-3.5 h-3.5" />
                            </button>
                          ) : (
                            <>
                              <button
                                onClick={() => handleStartEdit(item)}
                                className="p-1 text-stone-700 hover:text-black hover:bg-stone-200 border border-stone-300 transition-colors"
                                title={isEn ? "Edit period details" : "Sửa thông tin tiết"}
                              >
                                <Edit3 className="w-3.5 h-3.5" />
                              </button>
                              <button
                                onClick={() => onViewLessonPlan(item)}
                                className="p-1 text-stone-700 hover:text-black hover:bg-stone-200 border border-stone-300 transition-colors"
                                title={isEn ? "View Detailed Lesson Plan" : "Xem Kế hoạch bài dạy chi tiết (CV 2345)"}
                              >
                                <BookOpen className="w-3.5 h-3.5" />
                              </button>
                              {/* Chỉ hiển thị biểu tượng Bài giảng cho các bài có tệp slide mẫu chuẩn */}
                              {isAuthenticLectureAvailable(item.lessonTitle, item.subject) && (
                                <button
                                  type="button"
                                  onClick={() => onViewLessonPlan(item)}
                                  className="p-1 text-emerald-800 hover:text-white hover:bg-emerald-700 bg-emerald-50 border border-emerald-400 transition-colors inline-flex items-center"
                                  title={isEn ? `PowerPoint slide deck available for: "${item.lessonTitle}"` : `Bài giảng PowerPoint (.pptx) chuẩn có sẵn cho: "${item.lessonTitle}"`}
                                >
                                  <Presentation className="w-3.5 h-3.5" />
                                </button>
                              )}
                              <button
                                onClick={() => handleDeleteItem(item.id)}
                                className="p-1 text-stone-400 hover:text-red-600 hover:bg-stone-100 border border-stone-200 transition-colors"
                                title={isEn ? "Delete period" : "Xóa tiết"}
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </>
                          )}
                        </td>
                      </tr>
                    );
                  });
                })
              )}
            </tbody>
          </table>
        </div>

        {/* Quick Add Button & Clean Note */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
          <button
            onClick={() => handleAddNewItem(selectedDay !== "all" ? (selectedDay as DayOfWeek) : "Thứ Hai")}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-white text-black border border-black hover:bg-stone-100 text-[10px] font-bold uppercase tracking-wider shadow-[1px_1px_0px_rgba(0,0,0,1)] transition-colors cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            <span>{isEn ? `Add Period to ${getDayDisplay(selectedDay !== "all" ? selectedDay : "Thứ Hai")}` : `Thêm Tiết Học Vào ${selectedDay !== "all" ? selectedDay : "Thứ Hai"}`}</span>
          </button>
          
          <div className="text-[10px] uppercase font-bold tracking-wider text-stone-500 font-mono">
            {isEn ? "* Official 7-column layout • Direct lesson titles • Ready for A4 export." : "* Cấu trúc: 1 Thứ, 1 Ngày gộp cho các tiết trong ngày • Tên bài dạy tinh gọn • Ghi chú để trống."}
          </div>
        </div>
      </div>
    </div>
  );
};
