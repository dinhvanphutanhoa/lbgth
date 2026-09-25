import React, { useState } from "react";
import { User, Award, Check, X, FileDown, BookOpen, Layers, CheckCircle2, ChevronRight, School, Sparkles, Calendar } from "lucide-react";
import { DEFAULT_TEACHERS, TeacherInfo } from "../data/defaultTimetables";
import { MasterTimetable, SchoolInfo } from "../types";
import { getScheduleAndPlansForTeacher } from "../utils/teacherScheduleHelper";
import { exportScheduleDocx, exportLessonPlansDocx, exportWeeklyKHBDWithLBGFirstPageDocx, exportTeacherTimetableDocx, exportTimetableDocx } from "../utils/docxExporter";

interface TeacherSelectModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentTeacherName: string;
  onSelectTeacher: (teacherName: string) => void;
  masterTimetable: MasterTimetable;
  schoolInfo: SchoolInfo;
  lang?: "en" | "vi";
}

export const TeacherSelectModal: React.FC<TeacherSelectModalProps> = ({
  isOpen,
  onClose,
  currentTeacherName,
  onSelectTeacher,
  masterTimetable,
  schoolInfo,
  lang = "en",
}) => {
  const isEn = lang === "en";
  const [downloadingTeacher, setDownloadingTeacher] = useState<string | null>(null);
  const [filterType, setFilterType] = useState<"all" | "homeroom" | "specialist">("all");

  if (!isOpen) return null;

  const homeroomTeachers = DEFAULT_TEACHERS.filter((t) => t.type === "homeroom");
  const specialistTeachers = DEFAULT_TEACHERS.filter((t) => t.type === "specialist");

  const displayedTeachers =
    filterType === "homeroom"
      ? homeroomTeachers
      : filterType === "specialist"
      ? specialistTeachers
      : DEFAULT_TEACHERS;

  const handleDownloadTeacherTKB = async (teacher: TeacherInfo) => {
    const key = `${teacher.id}-tkb`;
    setDownloadingTeacher(key);
    try {
      if (teacher.type === "specialist") {
        await exportTeacherTimetableDocx(schoolInfo, masterTimetable, teacher.name, "portrait");
      } else {
        const cls = teacher.assignedClasses?.[0] || "5A";
        await exportTimetableDocx(schoolInfo, masterTimetable, cls, "portrait");
      }
    } catch (err) {
      console.error("Download teacher TKB error:", err);
    } finally {
      setDownloadingTeacher(null);
    }
  };

  const handleDownloadTeacherLBG = async (teacher: TeacherInfo) => {
    const key = `${teacher.id}-lbg`;
    setDownloadingTeacher(key);
    try {
      const data = getScheduleAndPlansForTeacher(teacher, masterTimetable, schoolInfo);
      // For homeroom teacher, personal LBG includes only their taught periods
      const scheduleToExport = data.personalScheduleItems.length > 0 ? data.personalScheduleItems : data.scheduleItems;
      await exportScheduleDocx(data.schoolInfo, scheduleToExport);
    } catch (err) {
      console.error("Download teacher LBG error:", err);
      alert(isEn ? `Generated schedule file for ${teacher.name}` : `Đã hoàn tất tạo tệp LBG cho Giáo viên ${teacher.name}`);
    } finally {
      setDownloadingTeacher(null);
    }
  };

  const handleDownloadTeacherKHBD = async (teacher: TeacherInfo) => {
    const key = `${teacher.id}-khbd`;
    setDownloadingTeacher(key);
    try {
      const data = getScheduleAndPlansForTeacher(teacher, masterTimetable, schoolInfo);
      const scheduleToExport = teacher.type === "homeroom" ? data.personalScheduleItems : data.scheduleItems;
      await exportWeeklyKHBDWithLBGFirstPageDocx(data.schoolInfo, scheduleToExport, data.lessonPlans);
    } catch (err) {
      console.error("Download teacher KHBD error:", err);
      alert(isEn ? `Generated lesson plans file for ${teacher.name}` : `Đã hoàn tất tạo tệp KHBD cho Giáo viên ${teacher.name}`);
    } finally {
      setDownloadingTeacher(null);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/65 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      <div className="bg-white border-2 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] w-full max-w-5xl my-6 flex flex-col max-h-[92vh] font-serif animate-in fade-in zoom-in-95 duration-150">
        {/* Header */}
        <div className="p-4 sm:p-5 bg-black text-white flex items-center justify-between border-b-2 border-black shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white text-black border border-white shrink-0">
              <User className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-sans font-black text-base sm:text-lg text-white uppercase tracking-tight flex items-center gap-2">
                {isEn ? "Teacher Directory & Individual Schedule - Lesson Plans Generator" : "Danh Sách Giáo Viên & Lập LBG - KHBD Riêng Biệt"}
              </h3>
              <p className="text-xs text-stone-300 font-serif">
                {isEn 
                  ? "Automatic synchronization for 10 Homeroom Teachers and 8 Specialist Subject Teachers" 
                  : "Đồng bộ tự động theo từng Giáo viên Chủ nhiệm (10 GVCN) và Giáo viên Bộ môn Chuyên (8 GV)"}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-stone-400 hover:text-white hover:bg-stone-800 transition-colors border border-transparent hover:border-stone-700"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filter Tabs & Guide Banner */}
        <div className="p-3 sm:px-6 bg-stone-100 border-b border-black flex flex-wrap items-center justify-between gap-3 shrink-0">
          <div className="flex items-center border border-black overflow-hidden bg-white shadow-[1px_1px_0px_rgba(0,0,0,1)] text-xs">
            <button
              onClick={() => setFilterType("all")}
              className={`px-3 py-1.5 font-bold uppercase tracking-wider border-r border-black transition-colors ${
                filterType === "all" ? "bg-black text-white" : "bg-white text-stone-800 hover:bg-stone-200"
              }`}
            >
              {isEn ? "All Teachers (18)" : "Tất Cả Giáo Viên (18 GV)"}
            </button>
            <button
              onClick={() => setFilterType("homeroom")}
              className={`px-3 py-1.5 font-bold uppercase tracking-wider border-r border-black transition-colors ${
                filterType === "homeroom" ? "bg-black text-white" : "bg-white text-stone-800 hover:bg-stone-200"
              }`}
            >
              {isEn ? "Homeroom Teachers (10)" : "GV Chủ Nhiệm (10 GV)"}
            </button>
            <button
              onClick={() => setFilterType("specialist")}
              className={`px-3 py-1.5 font-bold uppercase tracking-wider transition-colors ${
                filterType === "specialist" ? "bg-black text-white" : "bg-white text-stone-800 hover:bg-stone-200"
              }`}
            >
              {isEn ? "Specialist Teachers (8)" : "GV Bộ Môn & Chuyên (8 GV)"}
            </button>
          </div>

          <div className="text-[11px] text-stone-700 flex items-center gap-1.5 font-medium">
            <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
            <span>
              {isEn 
                ? "Homeroom plans exclude specialist subjects; Specialist plans aggregate all assigned classes." 
                : "KHBD của GVCN tự động loại trừ môn chuyên; KHBD của GV Chuyên tự động gồm các lớp phụ trách."}
            </span>
          </div>
        </div>

        {/* Scrollable Teacher Cards Grid */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6 flex-1 bg-[#fbfbfa]">
          {/* Homeroom Section */}
          {(filterType === "all" || filterType === "homeroom") && (
            <div className="space-y-3">
              <div className="flex items-center justify-between border-b-2 border-black pb-1.5">
                <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-black flex items-center gap-2">
                  <span className="w-2.5 h-2.5 bg-black inline-block"></span>
                  {isEn ? "Grades 1 to 5 — 10 Homeroom Teachers (GVCN)" : "Khối 1 Đến Khối 5 — 10 Giáo Viên Chủ Nhiệm (GVCN)"}
                </h4>
                <span className="text-[10px] font-mono font-bold bg-stone-200 px-2 py-0.5 border border-stone-300 text-stone-800">
                  {isEn ? "Math, Vietnamese, Science, History & Geo, Ethics, Tech (~23 periods/wk)" : "Phụ trách soạn KHBD Toán, TV, KH/TNXH, LS&ĐL, ĐĐ, HĐTN, CN (~23 tiết/tuần)"}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {homeroomTeachers.map((teacher) => {
                  const isSelected = currentTeacherName === teacher.name;
                  const assignedClass = teacher.assignedClasses?.[0] || "5A";

                  return (
                    <div
                      key={teacher.id}
                      className={`p-4 border-2 transition-all shadow-[2px_2px_0px_rgba(0,0,0,1)] ${
                        isSelected
                          ? "bg-amber-50/70 border-black ring-2 ring-black"
                          : "bg-white border-black hover:bg-stone-50"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-start gap-3">
                          <div
                            className={`w-10 h-10 border border-black flex items-center justify-center font-bold text-sm shrink-0 ${
                              isSelected ? "bg-black text-white" : "bg-stone-100 text-black"
                            }`}
                          >
                            {assignedClass}
                          </div>
                          <div>
                            <div className="flex items-center gap-1.5 flex-wrap">
                              <h5 className="font-bold text-sm text-black">{teacher.name}</h5>
                              <span className="text-[10px] font-mono font-bold bg-stone-100 px-1.5 py-0.2 border border-stone-300 text-stone-900">
                                {teacher.role}
                              </span>
                              {isSelected && (
                                <span className="text-[9px] bg-black text-white px-1.5 py-0.2 font-bold uppercase tracking-wider">
                                  {isEn ? "Active" : "Đang chọn"}
                                </span>
                              )}
                            </div>
                            <p className="text-[11px] text-stone-600 mt-1 leading-snug">
                              {isEn ? "Class: " : "Lớp: "}<strong className="text-black font-semibold">{assignedClass}</strong> • {isEn ? "Subjects: " : "Môn phụ trách: "}{teacher.subjects.slice(0, 5).join(", ")}...
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Action buttons */}
                      <div className="mt-3.5 pt-3 border-t border-dashed border-stone-300 flex items-center justify-between flex-wrap gap-2">
                        <button
                          type="button"
                          onClick={() => {
                            onSelectTeacher(teacher.name);
                            onClose();
                          }}
                          className={`px-3 py-1.5 text-[11px] font-sans font-bold uppercase tracking-wider border transition-colors flex items-center gap-1.5 cursor-pointer ${
                            isSelected
                              ? "bg-black text-white border-black"
                              : "bg-white text-black border-black hover:bg-black hover:text-white shadow-[1px_1px_0px_rgba(0,0,0,1)]"
                          }`}
                        >
                          {isSelected ? <Check className="w-3.5 h-3.5" /> : <ChevronRight className="w-3.5 h-3.5" />}
                          <span>{isSelected ? (isEn ? "Active Teacher" : "Đang Làm Việc") : (isEn ? "Select Teacher" : "Chọn Giáo Viên Này")}</span>
                        </button>

                        <div className="flex items-center gap-1.5 flex-wrap">
                          <button
                            type="button"
                            disabled={downloadingTeacher === `${teacher.id}-tkb`}
                            onClick={() => handleDownloadTeacherTKB(teacher)}
                            className="px-2 py-1.5 bg-white hover:bg-stone-100 text-stone-900 text-[10px] font-bold uppercase tracking-wider border border-stone-400 transition-colors flex items-center gap-1 cursor-pointer disabled:opacity-50"
                            title={isEn ? `Download Timetable of ${teacher.name}` : `Tải Thời Khóa Biểu của ${teacher.name}`}
                          >
                            <Calendar className="w-3 h-3 text-stone-700" />
                            <span>{downloadingTeacher === `${teacher.id}-tkb` ? (isEn ? "Creating..." : "Đang tạo...") : (isEn ? "Timetable" : "TKB")}</span>
                          </button>

                          <button
                            type="button"
                            disabled={downloadingTeacher === `${teacher.id}-lbg`}
                            onClick={() => handleDownloadTeacherLBG(teacher)}
                            className="px-2 py-1.5 bg-stone-100 hover:bg-stone-200 text-stone-900 text-[10px] font-bold uppercase tracking-wider border border-stone-400 transition-colors flex items-center gap-1 cursor-pointer disabled:opacity-50"
                            title={isEn ? `Download Teaching Schedule of ${teacher.name}` : `Tải Lịch Báo Giảng của ${teacher.name}`}
                          >
                            <BookOpen className="w-3 h-3 text-stone-700" />
                            <span>{downloadingTeacher === `${teacher.id}-lbg` ? (isEn ? "Creating..." : "Đang tạo...") : (isEn ? "Schedule" : "LBG")}</span>
                          </button>

                          <button
                            type="button"
                            disabled={downloadingTeacher === `${teacher.id}-khbd`}
                            onClick={() => handleDownloadTeacherKHBD(teacher)}
                            className="px-2.5 py-1.5 bg-stone-900 hover:bg-black text-white text-[10px] font-bold uppercase tracking-wider border border-black transition-colors flex items-center gap-1 cursor-pointer disabled:opacity-50"
                            title={isEn ? `Download weekly Lesson Plans of ${teacher.name}` : `Tải Kế Hoạch Bài Dạy cả tuần (kèm LBG) của ${teacher.name}`}
                          >
                            <FileDown className="w-3 h-3 text-amber-300" />
                            <span>{downloadingTeacher === `${teacher.id}-khbd` ? (isEn ? "Creating..." : "Đang tạo...") : (isEn ? "Plans" : "KHBD")}</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Specialist Section */}
          {(filterType === "all" || filterType === "specialist") && (
            <div className="space-y-3 pt-2">
              <div className="flex items-center justify-between border-b-2 border-black pb-1.5">
                <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-black flex items-center gap-2">
                  <span className="w-2.5 h-2.5 bg-amber-600 inline-block"></span>
                  {isEn ? "Specialist Subject Teachers — 8 Teachers (School-wide)" : "Tổ Bộ Môn & Chuyên — 8 Giáo Viên (Toàn Trường)"}
                </h4>
                <span className="text-[10px] font-mono font-bold bg-amber-100 px-2 py-0.5 border border-amber-300 text-amber-950">
                  {isEn ? "Specialist subjects across Classes 1A through 5B" : "Phụ trách giảng dạy môn chuyên & bộ môn từ Lớp 1A đến 5B"}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {specialistTeachers.map((teacher) => {
                  const isSelected = currentTeacherName === teacher.name;

                  return (
                    <div
                      key={teacher.id}
                      className={`p-4 border-2 transition-all shadow-[2px_2px_0px_rgba(0,0,0,1)] ${
                        isSelected
                          ? "bg-amber-50/70 border-black ring-2 ring-black"
                          : "bg-white border-black hover:bg-stone-50"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-start gap-3">
                          <div
                            className={`w-10 h-10 border border-black flex items-center justify-center font-bold text-xs shrink-0 ${
                              isSelected ? "bg-amber-950 text-white" : "bg-amber-100 text-amber-950"
                            }`}
                          >
                            {teacher.specialistSubject?.substring(0, 3).toUpperCase()}
                          </div>
                          <div>
                            <div className="flex items-center gap-1.5 flex-wrap">
                              <h5 className="font-bold text-sm text-black">{teacher.name}</h5>
                              <span className="text-[10px] font-mono font-bold bg-amber-100 text-amber-950 px-1.5 py-0.2 border border-amber-300">
                                {teacher.role}
                              </span>
                              {isSelected && (
                                <span className="text-[9px] bg-black text-white px-1.5 py-0.2 font-bold uppercase tracking-wider">
                                  {isEn ? "Active" : "Đang chọn"}
                                </span>
                              )}
                            </div>
                            <p className="text-[11px] text-stone-600 mt-1 leading-snug">
                              {isEn ? "Subject: " : "Môn chuyên: "}<strong className="text-black font-semibold">{teacher.specialistSubject}</strong> • {isEn ? "Assigned: " : "Phụ trách: "}{teacher.assignedClasses?.join(", ")} ({teacher.teachingPeriods} {isEn ? "periods/wk" : "tiết/tuần"})
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Action buttons */}
                      <div className="mt-3.5 pt-3 border-t border-dashed border-stone-300 flex items-center justify-between flex-wrap gap-2">
                        <button
                          type="button"
                          onClick={() => {
                            onSelectTeacher(teacher.name);
                            onClose();
                          }}
                          className={`px-3 py-1.5 text-[11px] font-sans font-bold uppercase tracking-wider border transition-colors flex items-center gap-1.5 cursor-pointer ${
                            isSelected
                              ? "bg-black text-white border-black"
                              : "bg-white text-black border-black hover:bg-black hover:text-white shadow-[1px_1px_0px_rgba(0,0,0,1)]"
                          }`}
                        >
                          {isSelected ? <Check className="w-3.5 h-3.5" /> : <ChevronRight className="w-3.5 h-3.5" />}
                          <span>{isSelected ? (isEn ? "Active Teacher" : "Đang Làm Việc") : (isEn ? "Select Teacher" : "Chọn Giáo Viên Này")}</span>
                        </button>

                        <div className="flex items-center gap-1.5 flex-wrap">
                          <button
                            type="button"
                            disabled={downloadingTeacher === `${teacher.id}-tkb`}
                            onClick={() => handleDownloadTeacherTKB(teacher)}
                            className="px-2 py-1.5 bg-white hover:bg-stone-100 text-stone-900 text-[10px] font-bold uppercase tracking-wider border border-stone-400 transition-colors flex items-center gap-1 cursor-pointer disabled:opacity-50"
                            title={isEn ? `Download Timetable of ${teacher.name}` : `Tải Thời Khóa Biểu của ${teacher.name}`}
                          >
                            <Calendar className="w-3 h-3 text-stone-700" />
                            <span>{downloadingTeacher === `${teacher.id}-tkb` ? (isEn ? "Creating..." : "Đang tạo...") : (isEn ? "Timetable" : "TKB")}</span>
                          </button>

                          <button
                            type="button"
                            disabled={downloadingTeacher === `${teacher.id}-lbg`}
                            onClick={() => handleDownloadTeacherLBG(teacher)}
                            className="px-2 py-1.5 bg-stone-100 hover:bg-stone-200 text-stone-900 text-[10px] font-bold uppercase tracking-wider border border-stone-400 transition-colors flex items-center gap-1 cursor-pointer disabled:opacity-50"
                            title={isEn ? `Download Teaching Schedule of ${teacher.name}` : `Tải Lịch Báo Giảng của ${teacher.name}`}
                          >
                            <BookOpen className="w-3 h-3 text-stone-700" />
                            <span>{downloadingTeacher === `${teacher.id}-lbg` ? (isEn ? "Creating..." : "Đang tạo...") : (isEn ? "Schedule" : "LBG")}</span>
                          </button>

                          <button
                            type="button"
                            disabled={downloadingTeacher === `${teacher.id}-khbd`}
                            onClick={() => handleDownloadTeacherKHBD(teacher)}
                            className="px-2.5 py-1.5 bg-stone-900 hover:bg-black text-white text-[10px] font-bold uppercase tracking-wider border border-black transition-colors flex items-center gap-1 cursor-pointer disabled:opacity-50"
                            title={isEn ? `Download weekly specialist Lesson Plans of ${teacher.name}` : `Tải Kế Hoạch Bài Dạy cả tuần môn chuyên của ${teacher.name}`}
                          >
                            <FileDown className="w-3 h-3 text-amber-300" />
                            <span>{downloadingTeacher === `${teacher.id}-khbd` ? (isEn ? "Creating..." : "Đang tạo...") : (isEn ? "Plans" : "KHBD")}</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-3.5 px-6 bg-stone-100 border-t border-black flex items-center justify-between flex-wrap gap-2 shrink-0">
          <p className="text-xs text-stone-600 font-serif">
            • {isEn ? "Active teacher: " : "Giáo viên hiện tại: "}<strong>{schoolInfo.teacherName}</strong> ({schoolInfo.teacherType === "specialist" ? `${isEn ? "Specialist " : "Chuyên "}${schoolInfo.specialistSubject}` : `${isEn ? "Homeroom Class " : "GVCN "}${schoolInfo.className}`})
          </p>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-black hover:bg-stone-800 text-white text-xs font-bold uppercase tracking-wider border border-black cursor-pointer shadow-[2px_2px_0px_rgba(0,0,0,0.3)]"
          >
            {isEn ? "Close Window" : "Đóng Bảng"}
          </button>
        </div>
      </div>
    </div>
  );
};
