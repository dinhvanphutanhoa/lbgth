import React, { useState, useRef, useEffect } from "react";
import { Grade, SchoolInfo } from "../types";
import { DEFAULT_TEACHERS, calculateWeekDateRange } from "../data/defaultTimetables";
import { 
  Settings, 
  FileDown, 
  UploadCloud, 
  BookOpen, 
  Sparkles,
  Calendar,
  Layers,
  ChevronDown,
  FileText,
  Archive,
  Check,
  User,
  Users,
  Languages
} from "lucide-react";

interface HeaderProps {
  schoolInfo: SchoolInfo;
  onUpdateSchoolInfo: (info: SchoolInfo) => void;
  onOpenConfigModal: () => void;
  onOpenTeacherSelectModal?: () => void;
  onOpenUploadTKB: () => void;
  onOpenWordExportModal: () => void;
  onExportTKBWord: () => void;
  onExportWeeklyWord: () => void;
  onExportScheduleWord: () => void;
  onExportKHBDWithLBGFirstPage?: () => void;
  onExportCombinedWord: () => void;
  onExportAllThreeFiles: () => void;
  onExportAllTeachersZip?: () => void;
  activeTab: "timetable" | "schedule" | "lessonPlan" | "syncHub" | "integration";
  setActiveTab: (tab: "timetable" | "schedule" | "lessonPlan" | "syncHub" | "integration") => void;
  availableClasses: string[];
  lang?: "en" | "vi";
  onToggleLang?: (lang: "en" | "vi") => void;
}

export const Header: React.FC<HeaderProps> = ({
  schoolInfo,
  onUpdateSchoolInfo,
  onOpenConfigModal,
  onOpenTeacherSelectModal,
  onOpenUploadTKB,
  onOpenWordExportModal,
  onExportTKBWord,
  onExportWeeklyWord,
  onExportScheduleWord,
  onExportKHBDWithLBGFirstPage,
  onExportCombinedWord,
  onExportAllThreeFiles,
  onExportAllTeachersZip,
  activeTab,
  setActiveTab,
  availableClasses,
  lang = "en",
  onToggleLang,
}) => {
  const [isExportDropdownOpen, setIsExportDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const grades: Grade[] = [1, 2, 3, 4, 5];
  const isEn = lang === "en";

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsExportDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleGradeChange = (newGrade: Grade) => {
    const classForGrade = availableClasses.find(c => c.startsWith(String(newGrade))) || `${newGrade}A`;
    let tName = schoolInfo.teacherName;
    if (schoolInfo.teacherType === "homeroom") {
      const matched = DEFAULT_TEACHERS.find(t => t.type === "homeroom" && t.assignedClasses?.includes(classForGrade));
      if (matched) tName = matched.name;
    }
    onUpdateSchoolInfo({
      ...schoolInfo,
      grade: newGrade,
      className: classForGrade,
      teacherName: tName,
    });
  };

  const handleTeacherChange = (newTeacherName: string) => {
    const matched = DEFAULT_TEACHERS.find((t) => t.name === newTeacherName);
    if (!matched) {
      onUpdateSchoolInfo({ ...schoolInfo, teacherName: newTeacherName });
      return;
    }
    if (matched.type === "homeroom") {
      const cls = matched.assignedClasses?.[0] || schoolInfo.className;
      const gNum = parseInt(cls.charAt(0)) as Grade;
      onUpdateSchoolInfo({
        ...schoolInfo,
        teacherName: matched.name,
        teacherType: "homeroom",
        className: cls,
        grade: !isNaN(gNum) && gNum >= 1 && gNum <= 5 ? gNum : schoolInfo.grade,
        assignedClasses: [cls],
      });
    } else {
      onUpdateSchoolInfo({
        ...schoolInfo,
        teacherName: matched.name,
        teacherType: "specialist",
        specialistSubject: matched.specialistSubject || "Tiếng Anh",
        assignedClasses: matched.assignedClasses || availableClasses,
      });
    }
  };

  const handleClassChange = (newClass: string) => {
    const gradeNum = parseInt(newClass.charAt(0)) as Grade;
    let tName = schoolInfo.teacherName;
    if (schoolInfo.teacherType === "homeroom") {
      const matched = DEFAULT_TEACHERS.find(t => t.type === "homeroom" && t.assignedClasses?.includes(newClass));
      if (matched) tName = matched.name;
    }
    onUpdateSchoolInfo({
      ...schoolInfo,
      className: newClass,
      grade: !isNaN(gradeNum) && gradeNum >= 1 && gradeNum <= 5 ? gradeNum : schoolInfo.grade,
      teacherName: tName,
    });
  };

  const handleWeekChange = (newWeek: number) => {
    const validWeek = Math.max(1, Math.min(35, isNaN(newWeek) ? 1 : newWeek));
    const range = calculateWeekDateRange(validWeek);
    onUpdateSchoolInfo({
      ...schoolInfo,
      week: validWeek,
      startDate: range.startDate,
      endDate: range.endDate,
    });
  };

  return (
    <header className="bg-[#fdfdfc] text-[#1a1a1a] border-b border-black sticky top-0 z-40">
      {/* Editorial Top Masthead */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3.5 border-b border-black flex flex-col md:flex-row md:items-end md:justify-between gap-3">
        <div className="flex flex-col">
          <div className="flex items-center gap-3">
            <h1 className="text-2xl sm:text-3xl font-serif font-black tracking-tight uppercase leading-none text-black">
              EduPlan Pro
            </h1>
            <span className="text-[10px] font-mono uppercase bg-black text-white px-2 py-0.5 tracking-wider font-bold">
              Word A4 • CV 2345
            </span>

            {/* Language Switcher in Masthead */}
            <div className="flex items-center border border-black overflow-hidden bg-white shadow-[1px_1px_0px_rgba(0,0,0,1)] ml-1">
              <button
                onClick={() => onToggleLang && onToggleLang("en")}
                className={`px-2 py-0.5 text-[10px] font-bold uppercase transition-colors cursor-pointer border-r border-black flex items-center gap-1 ${
                  isEn ? "bg-black text-white" : "bg-white text-stone-700 hover:bg-stone-100"
                }`}
                title="Switch to English"
              >
                <span>🇬🇧 EN</span>
              </button>
              <button
                onClick={() => onToggleLang && onToggleLang("vi")}
                className={`px-2 py-0.5 text-[10px] font-bold uppercase transition-colors cursor-pointer flex items-center gap-1 ${
                  !isEn ? "bg-black text-white" : "bg-white text-stone-700 hover:bg-stone-100"
                }`}
                title="Chuyển sang Tiếng Việt"
              >
                <span>🇻🇳 VI</span>
              </button>
            </div>
          </div>
          <p className="text-[10px] uppercase tracking-[0.2em] mt-1.5 font-bold text-stone-600">
            {isEn
              ? "Primary School Management & A4 Word Automation (.Timetable • .Schedule • .LessonPlan)"
              : "Hệ Thống Tự Động Hoá Xuất Word A4 (.TKB • .LBG • .KHBD)"}
          </p>
        </div>

        <div className="flex flex-col md:items-end text-left md:text-right leading-snug border-l-2 md:border-l-0 border-black pl-3 md:pl-0">
          <div className="flex items-center md:justify-end gap-1.5">
            <span className="text-sm font-serif italic font-semibold text-stone-900">
              {isEn ? "Teacher:" : "GV:"} {schoolInfo.teacherName}
            </span>
            <span className={`text-[9px] uppercase px-1.5 py-0.5 border font-bold ${
              schoolInfo.teacherType === "specialist"
                ? "bg-amber-100 text-amber-950 border-amber-900"
                : "bg-black text-white border-black"
            }`}>
              {schoolInfo.teacherType === "specialist" 
                ? (isEn ? `Specialist: ${schoolInfo.specialistSubject || "English"}` : `GV Chuyên ${schoolInfo.specialistSubject || ""}`)
                : (isEn ? `Homeroom ${schoolInfo.className}` : `GVCN ${schoolInfo.className}`)}
            </span>
          </div>
          <span className="text-[11px] uppercase tracking-wider text-stone-600 font-medium">
            {schoolInfo.schoolName} {schoolInfo.branchName ? `— ${schoolInfo.branchName}` : ""}
          </span>
          <span className="text-[10px] uppercase tracking-widest text-stone-500 font-bold mt-0.5">
            {schoolInfo.teacherType === "specialist" 
              ? (isEn 
                  ? `Assigned: ${schoolInfo.assignedClasses?.length || 0} classes • Week ${schoolInfo.week} (${schoolInfo.startDate} - ${schoolInfo.endDate})`
                  : `Phân công ${schoolInfo.assignedClasses?.length || 0} lớp • Tuần ${schoolInfo.week} (${schoolInfo.startDate} - ${schoolInfo.endDate})`)
              : (isEn 
                  ? `Grade ${schoolInfo.grade} • Class ${schoolInfo.className} • Week ${schoolInfo.week} (${schoolInfo.startDate} - ${schoolInfo.endDate})`
                  : `Khối ${schoolInfo.grade} • Lớp ${schoolInfo.className} • Tuần ${schoolInfo.week} (${schoolInfo.startDate} - ${schoolInfo.endDate})`)}
          </span>
        </div>
      </div>

      {/* Control Strip */}
      <nav className="border-b border-black bg-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-wrap items-center justify-between gap-y-2 py-2">
          {/* Left: Grade, Class, and Week Switcher */}
          <div className="flex items-center flex-wrap gap-2 sm:gap-3 py-1">
            <div className="flex items-center gap-1.5">
              <span className="text-[10px] uppercase font-bold tracking-wider text-stone-700">
                {isEn ? "Grade:" : "Khối:"}
              </span>
              <div className="flex border border-black overflow-hidden bg-white shadow-[1px_1px_0px_rgba(0,0,0,1)]">
                {grades.map((g) => (
                  <button
                    key={g}
                    onClick={() => handleGradeChange(g)}
                    className={`px-2.5 py-1 text-xs font-bold transition-colors border-r last:border-r-0 border-black ${
                      schoolInfo.grade === g
                        ? "bg-black text-white"
                        : "bg-white text-stone-800 hover:bg-stone-200"
                    }`}
                  >
                    {g}
                  </button>
                ))}
              </div>
            </div>

            {/* Class Dropdown */}
            <div className="flex items-center gap-1">
              <span className="text-[10px] uppercase font-bold tracking-wider text-stone-700">
                {isEn ? "Class:" : "Lớp:"}
              </span>
              <select
                value={schoolInfo.className}
                onChange={(e) => handleClassChange(e.target.value)}
                className="bg-white text-stone-900 text-xs font-bold border border-black px-2 py-1 focus:outline-none focus:ring-1 focus:ring-black shadow-[1px_1px_0px_rgba(0,0,0,1)] cursor-pointer"
              >
                {availableClasses.map((cls) => (
                  <option key={cls} value={cls}>
                    {isEn ? `Class ${cls}` : `Lớp ${cls}`}
                  </option>
                ))}
              </select>
            </div>

            {/* Teacher Select Dropdown */}
            <div className="flex items-center gap-1">
              <span className="text-[10px] uppercase font-bold tracking-wider text-stone-700">
                {isEn ? "Teacher:" : "GV:"}
              </span>
              <select
                value={schoolInfo.teacherName}
                onChange={(e) => handleTeacherChange(e.target.value)}
                className="bg-white text-stone-900 text-xs font-bold border border-black px-2 py-1 focus:outline-none focus:ring-1 focus:ring-black shadow-[1px_1px_0px_rgba(0,0,0,1)] cursor-pointer max-w-[155px] truncate"
                title={isEn ? "Select teacher to view specific schedule and plans" : "Chọn Giáo viên để lập LBG và KHBD riêng"}
              >
                <optgroup label={isEn ? "-- 10 HOMEROOM TEACHERS --" : "-- 10 GV CHỦ NHIỆM --"}>
                  {DEFAULT_TEACHERS.filter((t) => t.type === "homeroom").map((t) => (
                    <option key={t.id} value={t.name}>
                      {t.name} ({t.assignedClasses?.[0]})
                    </option>
                  ))}
                </optgroup>
                <optgroup label={isEn ? "-- 8 SPECIALIST TEACHERS --" : "-- 8 GV BỘ MÔN & CHUYÊN --"}>
                  {DEFAULT_TEACHERS.filter((t) => t.type === "specialist").map((t) => (
                    <option key={t.id} value={t.name}>
                      {t.name} ({t.specialistSubject})
                    </option>
                  ))}
                </optgroup>
              </select>
            </div>

            {/* Week Dropdown & Stepper with Synchronized Dates */}
            <div className="flex items-center gap-1">
              <span className="text-[10px] uppercase font-bold tracking-wider text-stone-700">
                {isEn ? "Week:" : "Tuần:"}
              </span>
              <div className="flex items-center border border-black bg-white shadow-[1px_1px_0px_rgba(0,0,0,1)]">
                <button
                  type="button"
                  disabled={schoolInfo.week <= 1}
                  onClick={() => handleWeekChange(schoolInfo.week - 1)}
                  className="px-1.5 py-1 text-xs font-bold border-r border-black hover:bg-stone-200 disabled:opacity-25 cursor-pointer disabled:cursor-not-allowed transition-colors"
                  title={isEn ? "Previous week" : "Tuần trước"}
                >
                  ◀
                </button>
                <select
                  value={schoolInfo.week}
                  onChange={(e) => handleWeekChange(parseInt(e.target.value) || 1)}
                  className="bg-white text-stone-900 text-xs font-bold px-2 py-1 focus:outline-none cursor-pointer max-w-[170px] sm:max-w-none"
                  title={isEn ? "Select academic week (dates sync automatically)" : "Chọn tuần học (TKB, LBG, KHBD tự động đồng bộ ngày theo tuần)"}
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
                  onClick={() => handleWeekChange(schoolInfo.week + 1)}
                  className="px-1.5 py-1 text-xs font-bold border-l border-black hover:bg-stone-200 disabled:opacity-25 cursor-pointer disabled:cursor-not-allowed transition-colors"
                  title={isEn ? "Next week" : "Tuần tiếp theo"}
                >
                  ▶
                </button>
              </div>
            </div>
          </div>

          {/* Right: Actions, Font Size & Export Hub */}
          <div className="flex items-center flex-wrap gap-2 py-1">
            {/* Open 16 Teachers Modal Button */}
            {onOpenTeacherSelectModal && (
              <button
                type="button"
                onClick={onOpenTeacherSelectModal}
                className="flex items-center gap-1 text-[10px] uppercase font-bold px-2.5 py-1.5 border border-black bg-amber-100 hover:bg-amber-200 text-amber-950 transition-colors shadow-[1px_1px_0px_rgba(0,0,0,1)] cursor-pointer"
                title={isEn ? "Select among 16 teachers" : "Bảng chọn 16 Giáo viên và lập LBG - KHBD riêng biệt"}
              >
                <User className="w-3.5 h-3.5" />
                <span>{isEn ? "Teachers" : "16 Giáo Viên"}</span>
              </button>
            )}

            {/* Font selector */}
            <div className="flex items-center gap-1">
              <span className="text-[10px] uppercase font-bold tracking-wider text-stone-700 hidden sm:inline">
                {isEn ? "Font:" : "Cỡ Chữ:"}
              </span>
              <div className="flex border border-black overflow-hidden bg-white shadow-[1px_1px_0px_rgba(0,0,0,1)]">
                {([12, 13, 14] as const).map((sz) => (
                  <button
                    key={sz}
                    onClick={() => onUpdateSchoolInfo({ ...schoolInfo, fontSize: sz })}
                    className={`px-2 py-1 text-[10px] font-bold border-r last:border-r-0 border-black transition-colors ${
                      schoolInfo.fontSize === sz
                        ? "bg-black text-white"
                        : "bg-white text-stone-800 hover:bg-stone-200"
                    }`}
                    title={isEn ? `Export Word font size ${sz}pt` : `Cỡ chữ xuất Word ${sz}pt`}
                  >
                    {sz}pt
                  </button>
                ))}
              </div>
            </div>

            {/* Update Timetable Button */}
            <button
              onClick={onOpenUploadTKB}
              className="flex items-center gap-1 text-[10px] uppercase font-bold px-3 py-1.5 border border-dashed border-black bg-white hover:bg-stone-200 transition-colors shadow-[1px_1px_0px_rgba(0,0,0,1)] cursor-pointer"
              title={isEn ? "Upload timetable Excel file or paste table" : "Đưa tệp Excel hoặc dán TKB nhà trường"}
            >
              <UploadCloud className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{isEn ? "Import Timetable" : "Đưa TKB Lên"}</span>
            </button>

            {/* Config Teacher & School */}
            <button
              onClick={onOpenConfigModal}
              className="flex items-center gap-1 text-[10px] uppercase font-bold px-3 py-1.5 border border-black bg-white hover:bg-stone-200 transition-colors shadow-[1px_1px_0px_rgba(0,0,0,1)] cursor-pointer"
              title={isEn ? "Configure school, branch, teacher, and grade" : "Đổi thông tin Giáo viên, Trường, Phân hiệu, Lớp"}
            >
              <Settings className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{isEn ? "Settings" : "Đổi TT GV & Lớp"}</span>
            </button>

            {/* Prominent Word A4 Export Hub Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <div className="flex items-stretch shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                <button
                  onClick={onOpenWordExportModal}
                  className="flex items-center gap-1.5 px-3.5 py-1.5 bg-black text-white text-[10px] font-bold uppercase tracking-wider hover:bg-stone-800 transition-colors cursor-pointer"
                  title={isEn ? "Open full Word A4 export hub" : "Mở Bảng Xuất Word A4 Đầy Đủ"}
                >
                  <FileDown className="w-3.5 h-3.5" />
                  <span>{isEn ? "Export Word A4 (.Docx)" : "Xuất Word A4 (.TKB • .LBG • .KHBD)"}</span>
                </button>
                <button
                  onClick={() => setIsExportDropdownOpen(!isExportDropdownOpen)}
                  className="px-2 bg-stone-900 hover:bg-stone-800 text-white border-l border-stone-700 transition-colors cursor-pointer"
                  title={isEn ? "Quick download menu" : "Chọn nhanh lệnh tải Word"}
                >
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isExportDropdownOpen ? "rotate-180" : ""}`} />
                </button>
              </div>

              {/* Dropdown Menu */}
              {isExportDropdownOpen && (
                <div className="absolute right-0 mt-1.5 w-72 bg-white border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] z-50 py-1 text-xs">
                  <div className="px-3 py-1.5 bg-stone-100 border-b border-black text-[10px] uppercase font-bold text-stone-700">
                    {isEn ? `Quick Word A4 Downloads (Font ${schoolInfo.fontSize}pt)` : `Lệnh Tải Nhanh Word A4 (Font ${schoolInfo.fontSize}pt)`}
                  </div>
                  
                  <button
                    onClick={() => {
                      setIsExportDropdownOpen(false);
                      onExportTKBWord();
                    }}
                    className="w-full text-left px-3 py-2 hover:bg-stone-100 flex items-center gap-2 border-b border-stone-200 transition-colors cursor-pointer"
                  >
                    <Calendar className="w-4 h-4 text-black shrink-0" />
                    <div>
                      <div className="font-serif font-bold text-black text-xs">
                        {isEn ? "1. Download Timetable Word A4" : "1. Tải TKB Word A4"}
                      </div>
                      <div className="text-[10px] text-stone-500">
                        {isEn ? `Class ${schoolInfo.className} timetable` : `Thời khóa biểu lớp ${schoolInfo.className}`}
                      </div>
                    </div>
                  </button>

                  <button
                    onClick={() => {
                      setIsExportDropdownOpen(false);
                      onExportScheduleWord();
                    }}
                    className="w-full text-left px-3 py-2 hover:bg-stone-100 flex items-center gap-2 border-b border-stone-200 transition-colors cursor-pointer"
                  >
                    <BookOpen className="w-4 h-4 text-black shrink-0" />
                    <div>
                      <div className="font-serif font-bold text-black text-xs">
                        {isEn ? "2. Download Teaching Schedule Word A4" : "2. Tải LBG Word A4"}
                      </div>
                      <div className="text-[10px] text-stone-500">
                        {isEn ? `Week ${schoolInfo.week} teaching schedule` : `Lịch báo giảng tuần ${schoolInfo.week}`}
                      </div>
                    </div>
                  </button>

                  <button
                    onClick={() => {
                      setIsExportDropdownOpen(false);
                      onExportWeeklyWord();
                    }}
                    className="w-full text-left px-3 py-2 hover:bg-stone-100 flex items-center gap-2 border-b border-stone-200 transition-colors cursor-pointer"
                  >
                    <Layers className="w-4 h-4 text-black shrink-0" />
                    <div>
                      <div className="font-serif font-bold text-black text-xs">
                        {isEn ? "3. Download Lesson Plans Word A4" : "3. Tải KHBD Word A4"}
                      </div>
                      <div className="text-[10px] text-stone-500">
                        {isEn ? "Full week Mon-Fri (Discrete plans)" : "Cả tuần T2-T6 (Giáo án tách rời)"}
                      </div>
                    </div>
                  </button>

                  {onExportKHBDWithLBGFirstPage && (
                    <button
                      onClick={() => {
                        setIsExportDropdownOpen(false);
                        onExportKHBDWithLBGFirstPage();
                      }}
                      className="w-full text-left px-3 py-2.5 hover:bg-stone-100 flex items-center gap-2 border-b-2 border-black transition-colors bg-stone-50 cursor-pointer"
                    >
                      <FileText className="w-4 h-4 text-black shrink-0" />
                      <div>
                        <div className="font-serif font-bold text-black text-xs flex items-center gap-1.5">
                          <span>{isEn ? "4. Lesson Plans (Page 1: Schedule)" : "4. KHBD (Trang 1: LBG + KHBD T2-T6)"}</span>
                          <span className="text-[8px] bg-black text-white px-1 py-0.2 font-mono font-bold">
                            {isEn ? "STANDARD" : "CHUẨN"}
                          </span>
                        </div>
                        <div className="text-[10px] text-stone-600 font-medium">
                          {isEn ? "First page is Schedule, followed by Mon-Fri plans" : "Trang đầu LBG, kế tiếp KHBD từ T2 đến T6"}
                        </div>
                      </div>
                    </button>
                  )}

                  <button
                    onClick={() => {
                      setIsExportDropdownOpen(false);
                      onExportAllThreeFiles();
                    }}
                    className="w-full text-left px-3 py-2 hover:bg-stone-100 flex items-center gap-2 border-b border-stone-200 transition-colors cursor-pointer"
                  >
                    <Archive className="w-4 h-4 text-black shrink-0" />
                    <div>
                      <div className="font-serif font-bold text-black text-xs">
                        {isEn ? "5. Download 3 Separate Files" : "5. Tải 3 Tệp Riêng Biệt"}
                      </div>
                      <div className="text-[10px] text-stone-500">
                        {isEn ? "Auto-download Timetable, Schedule, Plans" : "Tự động tải 1_TKB, 2_LBG, 3_KHBD"}
                      </div>
                    </div>
                  </button>

                  <button
                    onClick={() => {
                      setIsExportDropdownOpen(false);
                      onExportCombinedWord();
                    }}
                    className="w-full text-left px-3 py-2 hover:bg-stone-100 flex items-center gap-2 border-b border-stone-200 transition-colors cursor-pointer"
                  >
                    <FileText className="w-4 h-4 text-black shrink-0" />
                    <div>
                      <div className="font-serif font-bold text-black text-xs">
                        {isEn ? "6. Download All-In-One Word File" : "6. Tải 1 Tệp Word Gộp Tất Cả"}
                      </div>
                      <div className="text-[10px] text-stone-500">
                        {isEn ? "Combined Timetable + Schedule + Plans" : "Gộp TKB + LBG + KHBD"}
                      </div>
                    </div>
                  </button>

                  {onExportAllTeachersZip && (
                    <button
                      onClick={() => {
                        setIsExportDropdownOpen(false);
                        onExportAllTeachersZip();
                      }}
                      className="w-full text-left px-3 py-2.5 hover:bg-amber-100 flex items-center gap-2 border-b border-stone-200 transition-colors bg-amber-50 cursor-pointer"
                    >
                      <Archive className="w-4 h-4 text-amber-900 shrink-0" />
                      <div>
                        <div className="font-serif font-bold text-black text-xs flex items-center gap-1.5">
                          {isEn ? `7. Export All ${DEFAULT_TEACHERS.length} Teachers (.ZIP)` : `7. Xuất Trọn Bộ ${DEFAULT_TEACHERS.length} GV (.ZIP)`}
                          <span className="text-[9px] bg-black text-white px-1 py-0.2 font-mono">{DEFAULT_TEACHERS.length} GV</span>
                        </div>
                        <div className="text-[10px] text-stone-600">
                          {isEn ? "Entire school TKB + LBG + KHBD" : "TKB + LBG + KHBD toàn trường"}
                        </div>
                      </div>
                    </button>
                  )}

                  <div className="p-2 bg-stone-100">
                    <button
                      onClick={() => {
                        setIsExportDropdownOpen(false);
                        onOpenWordExportModal();
                      }}
                      className="w-full py-1.5 bg-black text-white text-[10px] font-bold uppercase tracking-wider hover:bg-stone-800 text-center transition-colors cursor-pointer"
                    >
                      {isEn ? "Open Full Export Hub" : "Mở Bảng Tùy Chọn Đầy Đủ"}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Tabs Strip with Editorial Sharpness */}
      <div className="bg-[#faf9f5] border-b border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-2 flex items-center justify-between overflow-x-auto gap-2">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab("timetable")}
              className={`px-4 py-1.5 text-xs uppercase tracking-wider font-bold border transition-all whitespace-nowrap flex items-center gap-1.5 cursor-pointer ${
                activeTab === "timetable"
                  ? "bg-black text-white border-black shadow-[2px_2px_0px_rgba(0,0,0,1)]"
                  : "bg-white text-stone-800 border-stone-400 hover:border-black hover:bg-stone-100"
              }`}
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>{isEn ? "1. Master Timetable" : "1. Thời Khóa Biểu"}</span>
            </button>

            <button
              onClick={() => setActiveTab("schedule")}
              className={`px-4 py-1.5 text-xs uppercase tracking-wider font-bold border transition-all whitespace-nowrap flex items-center gap-1.5 cursor-pointer ${
                activeTab === "schedule"
                  ? "bg-black text-white border-black shadow-[2px_2px_0px_rgba(0,0,0,1)]"
                  : "bg-white text-stone-800 border-stone-400 hover:border-black hover:bg-stone-100"
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>{isEn ? "2. Teaching Schedule" : "2. Lịch Báo Giảng"}</span>
            </button>

            <button
              onClick={() => setActiveTab("lessonPlan")}
              className={`px-4 py-1.5 text-xs uppercase tracking-wider font-bold border transition-all whitespace-nowrap flex items-center gap-1.5 cursor-pointer ${
                activeTab === "lessonPlan"
                  ? "bg-black text-white border-black shadow-[2px_2px_0px_rgba(0,0,0,1)]"
                  : "bg-white text-stone-800 border-stone-400 hover:border-black hover:bg-stone-100"
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>{isEn ? "3. Lesson Plans (CV 2345)" : "3. Kế Hoạch Bài Dạy (CV 2345)"}</span>
            </button>

            <button
              onClick={() => setActiveTab("syncHub")}
              className={`px-4 py-1.5 text-xs uppercase tracking-wider font-bold border transition-all whitespace-nowrap flex items-center gap-1.5 cursor-pointer ${
                activeTab === "syncHub"
                  ? "bg-amber-400 text-black border-black shadow-[2px_2px_0px_rgba(0,0,0,1)] ring-1 ring-black"
                  : "bg-amber-100/90 text-amber-950 border-amber-800 hover:bg-amber-200"
              }`}
              title={isEn ? `View synchronized status of all ${DEFAULT_TEACHERS.length} teachers` : `Xem bảng trạng thái đồng bộ TKB - LBG - KHBD của toàn bộ ${DEFAULT_TEACHERS.length} Giáo viên nhà trường`}
            >
              <Users className="w-3.5 h-3.5 text-amber-950" />
              <span className="font-sans font-bold">{isEn ? `4. ${DEFAULT_TEACHERS.length} Teachers Sync Hub` : `4. Bảng Đồng Bộ ${DEFAULT_TEACHERS.length} GV`}</span>
            </button>

            <button
              onClick={() => setActiveTab("integration")}
              className={`px-4 py-1.5 text-xs uppercase tracking-wider font-bold border transition-all whitespace-nowrap flex items-center gap-1.5 cursor-pointer ${
                activeTab === "integration"
                  ? "bg-black text-white border-black shadow-[2px_2px_0px_rgba(0,0,0,1)]"
                  : "bg-white text-stone-800 border-stone-400 hover:border-black hover:bg-stone-100"
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{isEn ? "5. AI & Digital Skills" : "5. Khung Tích Hợp (AI & NLS)"}</span>
            </button>
          </div>

          <div className="hidden lg:flex items-center text-[10px] uppercase font-bold tracking-wider text-stone-500">
            <span>{isEn ? `Standard A4 • Margins 20-20-25-17.5mm • Font ${schoolInfo.fontSize}pt` : `Chuẩn A4 • Lề: 20-20-25-17.5mm • Font ${schoolInfo.fontSize}pt`}</span>
          </div>
        </div>
      </div>
    </header>
  );
};
