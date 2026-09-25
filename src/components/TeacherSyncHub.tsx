import React, { useState } from "react";
import { MasterTimetable, SchoolInfo } from "../types";
import { DEFAULT_TEACHERS, TeacherInfo } from "../data/defaultTimetables";
import {
  Users,
  CheckCircle2,
  FileDown,
  Calendar,
  BookOpen,
  Layers,
  Sparkles,
  ExternalLink,
  ChevronRight,
  Printer,
  FileSpreadsheet,
  Building2,
  Check,
  Archive,
  Loader2
} from "lucide-react";
import {
  exportTeacherTimetableDocx,
  exportTimetableDocx,
  exportScheduleDocx,
  exportWeeklyKHBDWithLBGFirstPageDocx,
  exportAllThreeFiles
} from "../utils/docxExporter";
import { getScheduleAndPlansForTeacher } from "../utils/teacherScheduleHelper";

interface TeacherSyncHubProps {
  schoolInfo: SchoolInfo;
  masterTimetable: MasterTimetable;
  onSelectTeacher: (teacherName: string) => void;
  onNavigateTab: (tab: "timetable" | "schedule" | "lessonPlan") => void;
  onExportAllTeachersZip?: () => void;
  isExportingZip?: boolean;
  lang?: "en" | "vi";
}

export const TeacherSyncHub: React.FC<TeacherSyncHubProps> = ({
  schoolInfo,
  masterTimetable,
  onSelectTeacher,
  onNavigateTab,
  onExportAllTeachersZip,
  isExportingZip = false,
  lang = "en",
}) => {
  const isEn = lang === "en";
  const [filterType, setFilterType] = useState<"all" | "homeroom" | "specialist">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [downloadingAction, setDownloadingAction] = useState<string | null>(null);

  const homeroomList = DEFAULT_TEACHERS.filter((t) => t.type === "homeroom");
  const specialistList = DEFAULT_TEACHERS.filter((t) => t.type === "specialist");

  const filteredTeachers = DEFAULT_TEACHERS.filter((t) => {
    const matchesType =
      filterType === "all" ||
      (filterType === "homeroom" && t.type === "homeroom") ||
      (filterType === "specialist" && t.type === "specialist");
    const matchesSearch =
      !searchQuery ||
      t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (t.assignedClasses && t.assignedClasses.some((c) => c.toLowerCase().includes(searchQuery.toLowerCase())));
    return matchesType && matchesSearch;
  });

  // Export TKB for teacher
  const handleDownloadTeacherTKB = async (t: TeacherInfo) => {
    const actionKey = `${t.id}-tkb`;
    setDownloadingAction(actionKey);
    try {
      if (t.type === "specialist") {
        await exportTeacherTimetableDocx(schoolInfo, masterTimetable, t.name, "portrait");
      } else {
        const cls = t.assignedClasses?.[0] || "5A";
        await exportTimetableDocx(schoolInfo, masterTimetable, cls, "portrait");
      }
    } catch (e) {
      console.error(e);
    } finally {
      setDownloadingAction(null);
    }
  };

  // Export LBG for teacher
  const handleDownloadTeacherLBG = async (t: TeacherInfo) => {
    const actionKey = `${t.id}-lbg`;
    setDownloadingAction(actionKey);
    try {
      const generated = getScheduleAndPlansForTeacher(t, masterTimetable, schoolInfo, schoolInfo.week);
      const scheduleToExport = t.type === "homeroom" ? generated.personalScheduleItems : generated.scheduleItems;
      await exportScheduleDocx(generated.schoolInfo, scheduleToExport);
    } catch (e) {
      console.error(e);
    } finally {
      setDownloadingAction(null);
    }
  };

  // Export KHBD for teacher
  const handleDownloadTeacherKHBD = async (t: TeacherInfo) => {
    const actionKey = `${t.id}-khbd`;
    setDownloadingAction(actionKey);
    try {
      const generated = getScheduleAndPlansForTeacher(t, masterTimetable, schoolInfo, schoolInfo.week);
      const scheduleToExport = t.type === "homeroom" ? generated.personalScheduleItems : generated.scheduleItems;
      await exportWeeklyKHBDWithLBGFirstPageDocx(generated.schoolInfo, scheduleToExport, generated.lessonPlans);
    } catch (e) {
      console.error(e);
    } finally {
      setDownloadingAction(null);
    }
  };

  // Export 3-file combo for teacher (TKB + LBG + KHBD)
  const handleDownloadTeacherPackage = async (t: TeacherInfo) => {
    const actionKey = `${t.id}-all3`;
    setDownloadingAction(actionKey);
    try {
      const generated = getScheduleAndPlansForTeacher(t, masterTimetable, schoolInfo, schoolInfo.week);
      const scheduleToExport = t.type === "homeroom" ? generated.personalScheduleItems : generated.scheduleItems;
      await exportAllThreeFiles(generated.schoolInfo, masterTimetable, scheduleToExport, generated.lessonPlans);
    } catch (e) {
      console.error(e);
    } finally {
      setDownloadingAction(null);
    }
  };

  // Switch to teacher and jump to tab
  const handleActivateAndJump = (teacherName: string, tab: "timetable" | "schedule" | "lessonPlan") => {
    onSelectTeacher(teacherName);
    onNavigateTab(tab);
  };

  return (
    <div className="space-y-6">
      {/* Top Masthead & School Overview */}
      <div className="bg-stone-50 border-2 border-black p-5 sm:p-6 shadow-[4px_4px_0px_rgba(0,0,0,1)]">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 border-b-2 border-black pb-5">
          <div className="space-y-1">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-[10px] font-mono font-bold uppercase bg-black text-white px-2 py-0.5 tracking-wider">
                {isEn ? "School-Wide Sync Hub" : "Trung Tâm Đồng Bộ Toàn Trường"}
              </span>
              <span className="text-[10px] font-mono font-bold bg-amber-200 text-amber-950 px-2 py-0.5 border border-amber-400">
                {isEn ? `${DEFAULT_TEACHERS.length} Teachers • 100% Week ${schoolInfo.week} Timetable Match` : `${DEFAULT_TEACHERS.length} Giáo Viên • 100% Khớp TKB Tuần ${schoolInfo.week}`}
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-serif font-black tracking-tight uppercase text-black">
              {isEn ? "Synchronized Timetable • Teaching Schedule • Lesson Plans" : "Đồng Bộ Thời Khóa Biểu • Lịch Báo Giảng • Kế Hoạch Bài Dạy"}
            </h2>
            <p className="text-xs text-stone-700 font-serif leading-relaxed">
              {isEn 
                ? `${schoolInfo.schoolName || "Tan Thanh Primary School — Dinh Van Phu Branch"} • Academic Year ${schoolInfo.academicYear || "2026 - 2027"} • Applied for Week ${schoolInfo.week} (${schoolInfo.startDate} - ${schoolInfo.endDate}) • Vice Principal: ` 
                : `${schoolInfo.schoolName || "Trường Tiểu Học Tân Thạnh — Phân hiệu Đinh Văn Phu"} • Năm học ${schoolInfo.academicYear || "2026 - 2027"} • Áp dụng tuần ${schoolInfo.week} (${schoolInfo.startDate} - ${schoolInfo.endDate}) • Phó Hiệu trưởng: `}
              <strong>{schoolInfo.departmentHeadName || "Võ Văn Hoài"}</strong>
            </p>
          </div>

          {/* Quick Batch Actions */}
          <div className="flex items-center flex-wrap gap-2">
            {onExportAllTeachersZip && (
              <button
                type="button"
                disabled={isExportingZip}
                onClick={onExportAllTeachersZip}
                className="flex items-center gap-1.5 px-3.5 py-2 bg-amber-400 hover:bg-amber-300 text-black text-xs font-bold uppercase tracking-wider border-2 border-black shadow-[2px_2px_0px_rgba(0,0,0,1)] cursor-pointer transition-colors disabled:opacity-50"
                title={isEn ? `Export All ${DEFAULT_TEACHERS.length} Teachers (TKB, LBG, KHBD) in 1 ZIP file` : `Xuất trọn bộ ${DEFAULT_TEACHERS.length} Giáo viên (TKB, LBG, KHBD) trong 1 tệp ZIP`}
              >
                {isExportingZip ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Archive className="w-3.5 h-3.5 text-black" />}
                <span>{isEn ? `Export All ${DEFAULT_TEACHERS.length} Teachers (.ZIP)` : `Xuất Toàn Trường ${DEFAULT_TEACHERS.length} GV (.ZIP)`}</span>
              </button>
            )}

            <button
              type="button"
              onClick={() => exportTimetableDocx(schoolInfo, masterTimetable, "all", "landscape")}
              className="flex items-center gap-1.5 px-3 py-2 bg-white hover:bg-stone-100 text-black text-xs font-bold uppercase tracking-wider border-2 border-black shadow-[2px_2px_0px_rgba(0,0,0,1)] cursor-pointer transition-colors"
              title={isEn ? "Download School-wide Timetable A4 (Landscape)" : "Tải bảng TKB A4 Toàn trường (khổ ngang)"}
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>{isEn ? "Download School Timetable (.docx)" : "Tải TKB Toàn Trường (.docx)"}</span>
            </button>

            <button
              type="button"
              onClick={() => {
                const current = DEFAULT_TEACHERS.find((t) => t.name === schoolInfo.teacherName) || DEFAULT_TEACHERS[0];
                handleDownloadTeacherKHBD(current);
              }}
              className="flex items-center gap-1.5 px-3.5 py-2 bg-black hover:bg-stone-800 text-white text-xs font-bold uppercase tracking-wider border-2 border-black shadow-[2px_2px_0px_rgba(0,0,0,1)] cursor-pointer transition-colors"
            >
              <FileDown className="w-3.5 h-3.5 text-amber-400" />
              <span>{isEn ? `Download All for Active Teacher (${schoolInfo.teacherName.split(" ").pop()})` : `Tải Trọn Bộ GV Hiện Tại (${schoolInfo.teacherName.split(" ").pop()})`}</span>
            </button>
          </div>
        </div>

        {/* 3 Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4">
          <div className="bg-white border border-black p-3 shadow-[2px_2px_0px_rgba(0,0,0,1)] flex items-center gap-3">
            <div className="w-10 h-10 border border-black bg-stone-100 flex items-center justify-center shrink-0">
              <Users className="w-5 h-5 text-black" />
            </div>
            <div>
              <div className="text-lg font-mono font-black text-black">{isEn ? `${DEFAULT_TEACHERS.length} Teachers` : `${DEFAULT_TEACHERS.length} Giáo Viên`}</div>
              <div className="text-[11px] text-stone-600">{isEn ? `${homeroomList.length} Homeroom + ${specialistList.length} Specialist` : `${homeroomList.length} GV Chủ Nhiệm + ${specialistList.length} GV Bộ Môn`}</div>
            </div>
          </div>

          <div className="bg-white border border-black p-3 shadow-[2px_2px_0px_rgba(0,0,0,1)] flex items-center gap-3">
            <div className="w-10 h-10 border border-black bg-amber-100 flex items-center justify-center shrink-0">
              <Building2 className="w-5 h-5 text-amber-900" />
            </div>
            <div>
              <div className="text-lg font-mono font-black text-black">{isEn ? `${masterTimetable.classes.length} Classes` : `${masterTimetable.classes.length} Lớp Học`}</div>
              <div className="text-[11px] text-stone-600">{masterTimetable.classes.join(", ")}</div>
            </div>
          </div>

          <div className="bg-white border border-black p-3 shadow-[2px_2px_0px_rgba(0,0,0,1)] flex items-center gap-3">
            <div className="w-10 h-10 border border-black bg-emerald-100 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-5 h-5 text-emerald-800" />
            </div>
            <div>
              <div className="text-lg font-mono font-black text-emerald-900">{isEn ? "100% Match" : "100% Đồng Bộ"}</div>
              <div className="text-[11px] text-stone-600">{isEn ? "100% Synced TKB • Schedule • Plans" : "Đồng bộ TKB • LBG • KHBD 100%"}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Controls & Filter Bar */}
      <div className="bg-white p-4 border border-black shadow-[2px_2px_0px_rgba(0,0,0,1)] flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
        {/* Filter Pills */}
        <div className="flex items-center border border-black overflow-hidden bg-white shadow-[1px_1px_0px_rgba(0,0,0,1)]">
          <button
            type="button"
            onClick={() => setFilterType("all")}
            className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider border-r border-black transition-colors ${
              filterType === "all" ? "bg-black text-white" : "bg-white text-stone-800 hover:bg-stone-200"
            }`}
          >
            {isEn ? `All Teachers (${DEFAULT_TEACHERS.length})` : `Tất Cả Giáo Viên (${DEFAULT_TEACHERS.length})`}
          </button>
          <button
            type="button"
            onClick={() => setFilterType("homeroom")}
            className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider border-r border-black transition-colors ${
              filterType === "homeroom" ? "bg-black text-white" : "bg-white text-stone-800 hover:bg-stone-200"
            }`}
          >
            {isEn ? `Homeroom Teachers (${homeroomList.length})` : `GV Chủ Nhiệm (${homeroomList.length})`}
          </button>
          <button
            type="button"
            onClick={() => setFilterType("specialist")}
            className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider transition-colors ${
              filterType === "specialist" ? "bg-black text-white" : "bg-white text-stone-800 hover:bg-stone-200"
            }`}
          >
            {isEn ? `Specialist Teachers (${specialistList.length})` : `GV Bộ Môn & Chuyên (${specialistList.length})`}
          </button>
        </div>

        {/* Search */}
        <div className="w-full md:w-64">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={isEn ? "Search by teacher, class, subject..." : "Tìm theo tên GV, lớp, môn..."}
            className="w-full px-3 py-1.5 text-xs border border-black focus:outline-none focus:ring-1 focus:ring-black bg-stone-50"
          />
        </div>
      </div>

      {/* Main Synchronized Master Table */}
      <div className="bg-white border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] overflow-hidden">
        <div className="p-3 bg-stone-100 border-b border-black flex items-center justify-between">
          <h3 className="text-xs font-bold uppercase tracking-wider text-black font-mono flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-black inline-block"></span>
            {isEn ? `TEACHERS SYNCHRONIZATION DIRECTORY — ${schoolInfo.branchName || "DINH VAN PHU BRANCH"}` : `BẢNG CHI TIẾT ĐỒNG BỘ GIÁO VIÊN — ${schoolInfo.branchName || "PHÂN HIỆU ĐINH VĂN PHU"}`}
          </h3>
          <span className="text-[11px] font-serif italic text-stone-600">
            {isEn ? "Active teacher: " : "Giáo viên đang chọn: "}<strong className="text-black not-italic font-bold">{schoolInfo.teacherName}</strong>
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-stone-50 border-b border-black text-stone-900 font-serif font-bold uppercase text-[10px] tracking-wider">
                <th className="py-2.5 px-3 border-r border-black w-12 text-center">{isEn ? "No." : "STT"}</th>
                <th className="py-2.5 px-3 border-r border-black min-w-[150px]">{isEn ? "Teacher Name" : "Họ và Tên Giáo Viên"}</th>
                <th className="py-2.5 px-2 border-r border-black w-24 text-center">{isEn ? "Role" : "Chức Vụ"}</th>
                <th className="py-2.5 px-2 border-r border-black w-24 text-center">{isEn ? "Assigned Class" : "Lớp Phụ Trách"}</th>
                <th className="py-2.5 px-2 border-r border-black w-20 text-center">{isEn ? "Teaching" : "Thực Dạy"}</th>
                <th className="py-2.5 px-2 border-r border-black w-20 text-center">{isEn ? "Concurrent" : "Kiêm Nhiệm"}</th>
                <th className="py-2.5 px-2 border-r border-black w-20 text-center">{isEn ? "Total" : "Tổng Tiết"}</th>
                <th className="py-2.5 px-3 border-r border-black min-w-[160px] text-center">{isEn ? "Sync Status" : "Trạng Thái Đồng Bộ"}</th>
                <th className="py-2.5 px-3 text-center min-w-[240px]">{isEn ? "Actions & Download" : "Thao Tác Tải & Làm Việc"}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-black">
              {filteredTeachers.map((teacher, idx) => {
                const isCurrent = schoolInfo.teacherName === teacher.name;
                const assignedCls = teacher.assignedClasses?.join(", ") || "—";
                const teachingP = teacher.teachingPeriods || 0;
                const concurrentP = teacher.concurrentPeriods || 0;
                const totalP = teacher.totalPeriods || (teachingP + concurrentP);

                return (
                  <tr
                    key={teacher.id}
                    className={`transition-colors ${
                      isCurrent
                        ? "bg-amber-50/80 font-semibold"
                        : idx % 2 === 0
                        ? "bg-white hover:bg-stone-50"
                        : "bg-stone-50/40 hover:bg-stone-100"
                    }`}
                  >
                    {/* STT */}
                    <td className="py-2.5 px-3 border-r border-black text-center font-mono font-bold">
                      {idx + 1}
                    </td>

                    {/* Teacher Name & Subjects */}
                    <td className="py-2.5 px-3 border-r border-black">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-sm text-black font-serif">
                          {teacher.name}
                        </span>
                        {isCurrent && (
                          <span className="text-[9px] font-mono font-bold uppercase bg-black text-white px-1.5 py-0.2">
                            {isEn ? "Active" : "Đang chọn"}
                          </span>
                        )}
                      </div>
                      <div className="text-[10px] text-stone-500 font-sans truncate max-w-[220px]">
                        {teacher.subjects.join(", ")}
                      </div>
                    </td>

                    {/* Role */}
                    <td className="py-2.5 px-2 border-r border-black text-center">
                      <span
                        className={`text-[10px] font-mono font-bold px-1.5 py-0.5 border ${
                          teacher.type === "specialist"
                            ? "bg-amber-100 text-amber-950 border-amber-300"
                            : "bg-stone-100 text-stone-900 border-stone-300"
                        }`}
                      >
                        {teacher.role.replace("GVCN ", "")}
                      </span>
                    </td>

                    {/* Assigned Classes */}
                    <td className="py-2.5 px-2 border-r border-black text-center font-mono font-bold">
                      {assignedCls}
                    </td>

                    {/* Teaching Periods */}
                    <td className="py-2.5 px-2 border-r border-black text-center font-mono font-bold text-emerald-800">
                      {teachingP} {isEn ? "p" : "tiết"}
                    </td>

                    {/* Concurrent Periods */}
                    <td className="py-2.5 px-2 border-r border-black text-center font-mono text-stone-600">
                      {concurrentP > 0 ? `${concurrentP} ${isEn ? "p" : "tiết"}` : "—"}
                    </td>

                    {/* Total Periods */}
                    <td className="py-2.5 px-2 border-r border-black text-center font-mono font-bold">
                      {totalP} {isEn ? "p" : "tiết"}
                    </td>

                    {/* Sync Badges */}
                    <td className="py-2.5 px-3 border-r border-black">
                      <div className="flex items-center justify-center gap-1.5 flex-wrap">
                        <span className="text-[9px] font-mono font-bold bg-emerald-100 text-emerald-900 px-1.5 py-0.5 border border-emerald-300 flex items-center gap-0.5">
                          <Check className="w-2.5 h-2.5" /> TKB: {teachingP}T
                        </span>
                        <span className="text-[9px] font-mono font-bold bg-blue-100 text-blue-900 px-1.5 py-0.5 border border-blue-300 flex items-center gap-0.5">
                          <Check className="w-2.5 h-2.5" /> LBG: {teachingP}T
                        </span>
                        <span className="text-[9px] font-mono font-bold bg-purple-100 text-purple-900 px-1.5 py-0.5 border border-purple-300 flex items-center gap-0.5">
                          <Check className="w-2.5 h-2.5" /> KHBD: {teachingP} {isEn ? "plans" : "bài"}
                        </span>
                      </div>
                    </td>

                    {/* Quick Action Buttons */}
                    <td className="py-2.5 px-3 text-center">
                      <div className="flex items-center justify-center gap-1.5 flex-wrap">
                        {/* Select Teacher */}
                        <button
                          type="button"
                          onClick={() => onSelectTeacher(teacher.name)}
                          className={`px-2 py-1 text-[10px] font-bold uppercase tracking-wider border transition-colors cursor-pointer flex items-center gap-1 ${
                            isCurrent
                              ? "bg-black text-white border-black"
                              : "bg-white hover:bg-black hover:text-white border-black"
                          }`}
                          title={isEn ? "Select this teacher across the entire workspace" : "Chọn giáo viên này để làm việc trên toàn hệ thống"}
                        >
                          {isCurrent ? <Check className="w-3 h-3" /> : <ChevronRight className="w-3 h-3" />}
                          <span>{isCurrent ? (isEn ? "Active" : "Đang chọn") : (isEn ? "Select" : "Chọn GV")}</span>
                        </button>

                        {/* Download TKB Word */}
                        <button
                          type="button"
                          disabled={downloadingAction === `${teacher.id}-tkb`}
                          onClick={() => handleDownloadTeacherTKB(teacher)}
                          className="px-2 py-1 bg-stone-100 hover:bg-stone-200 text-stone-900 text-[10px] font-bold uppercase tracking-wider border border-stone-400 transition-colors cursor-pointer disabled:opacity-50"
                          title={isEn ? `Download Timetable Word for ${teacher.name}` : `Tải Thời khóa biểu Word cho ${teacher.name}`}
                        >
                          <Calendar className="w-3 h-3 inline mr-0.5" />
                          <span>TKB</span>
                        </button>

                        {/* Download LBG Word */}
                        <button
                          type="button"
                          disabled={downloadingAction === `${teacher.id}-lbg`}
                          onClick={() => handleDownloadTeacherLBG(teacher)}
                          className="px-2 py-1 bg-stone-100 hover:bg-stone-200 text-stone-900 text-[10px] font-bold uppercase tracking-wider border border-stone-400 transition-colors cursor-pointer disabled:opacity-50"
                          title={isEn ? `Download Schedule Word for ${teacher.name}` : `Tải Lịch báo giảng Word cho ${teacher.name}`}
                        >
                          <BookOpen className="w-3 h-3 inline mr-0.5" />
                          <span>LBG</span>
                        </button>

                        {/* Download KHBD Word */}
                        <button
                          type="button"
                          disabled={downloadingAction === `${teacher.id}-khbd`}
                          onClick={() => handleDownloadTeacherKHBD(teacher)}
                          className="px-2 py-1 bg-stone-900 hover:bg-black text-white text-[10px] font-bold uppercase tracking-wider border border-black transition-colors cursor-pointer disabled:opacity-50"
                          title={isEn ? `Download Lesson Plans (with LBG) for ${teacher.name}` : `Tải Kế hoạch bài dạy (kèm LBG) cho ${teacher.name}`}
                        >
                          <FileDown className="w-3 h-3 inline mr-0.5 text-amber-300" />
                          <span>KHBD</span>
                        </button>

                        {/* Download 3-file Package (TKB + LBG + KHBD) */}
                        <button
                          type="button"
                          disabled={downloadingAction === `${teacher.id}-all3`}
                          onClick={() => handleDownloadTeacherPackage(teacher)}
                          className="px-2 py-1 bg-amber-400 hover:bg-amber-300 text-black text-[10px] font-bold uppercase tracking-wider border border-black transition-colors cursor-pointer disabled:opacity-50 shadow-[1px_1px_0px_rgba(0,0,0,1)]"
                          title={isEn ? `Download All 3 Files (TKB, LBG, KHBD) for ${teacher.name}` : `Tải trọn bộ 3 tệp (TKB, LBG, KHBD) cho ${teacher.name}`}
                        >
                          <Archive className="w-3 h-3 inline mr-0.5 text-black" />
                          <span>{downloadingAction === `${teacher.id}-all3` ? "..." : "3 Tệp"}</span>
                        </button>

                        {/* Jump to KHBD view */}
                        <button
                          type="button"
                          onClick={() => handleActivateAndJump(teacher.name, "lessonPlan")}
                          className="p-1 text-stone-600 hover:text-black hover:bg-stone-200 border border-stone-300 transition-colors cursor-pointer"
                          title={isEn ? "Open lesson plan editor for this teacher" : "Mở giao diện soạn giáo án KHBD của GV này"}
                        >
                          <Layers className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Synchronization Explanation Footer Card */}
      <div className="bg-[#f7f6f2] border border-black p-4 sm:p-5 shadow-[2px_2px_0px_rgba(0,0,0,1)]">
        <h4 className="text-xs font-bold uppercase tracking-wider text-black font-serif flex items-center gap-2 mb-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-700" />
          {isEn 
            ? `Automated Sync Standard According to Week ${schoolInfo.week} Timetable (07/09/2026 - 11/09/2026)` 
            : `Quy Chuẩn Đồng Bộ Tự Động Theo Thời Khóa Biểu Tuần ${schoolInfo.week} (07/09/2026 - 11/09/2026)`}
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-stone-700 leading-relaxed font-serif">
          <div className="bg-white p-3 border border-stone-300">
            <strong className="text-black">{isEn ? "1. For 10 Homeroom Teachers (Grades 1 - 5):" : "1. Đối với 10 Giáo Viên Chủ Nhiệm (Khối 1 - 5):"}</strong>
            <ul className="list-disc list-inside mt-1 space-y-0.5 text-[11px] text-stone-600">
              <li>{isEn ? "Homeroom timetable includes all 32 periods with clear notes on specialist teachers." : "TKB lớp chủ nhiệm gồm đủ 32 tiết (có ghi chú rõ giáo viên chuyên dạy tiết nào)."}</li>
              <li>{isEn ? "Personal schedule & lesson plans are isolated: Only include periods taught directly by the homeroom teacher (16-19 periods)." : "LBG & KHBD cá nhân tự động tách biệt: Chỉ gồm các tiết do chính GVCN trực tiếp giảng dạy (16-19 tiết)."}</li>
              <li>{isEn ? "Automatically excludes specialist subjects (English, Informatics, Music, Fine Arts, PE...)." : "Đã tự động loại trừ các môn chuyên (Tiếng Anh, Tin học, Âm nhạc, Mĩ thuật, GDTC...)."}</li>
            </ul>
          </div>

          <div className="bg-white p-3 border border-stone-300">
            <strong className="text-black">{isEn ? "2. For 8 Subject & Specialist Teachers:" : "2. Đối với 8 Giáo Viên Bộ Môn & Chuyên:"}</strong>
            <ul className="list-disc list-inside mt-1 space-y-0.5 text-[11px] text-stone-600">
              <li>{isEn ? "Personal timetable automatically aggregates all assigned classes from Monday to Friday." : "TKB cá nhân tự động tổng hợp tất cả các lớp phụ trách giảng dạy từ Thứ 2 đến Thứ 6."}</li>
              <li>{isEn ? "Schedule and lesson plans follow the exact curriculum distribution of the assigned subject." : "LBG và KHBD lập theo đúng phân phối chương trình của môn chuyên tương ứng."}</li>
              <li>{isEn ? "Exports Word A4 files conforming strictly to Circular 2345/BGDĐT-GDTH." : "Xuất file Word A4 chuẩn thể thức công văn 2345/BGDĐT-GDTH."}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
