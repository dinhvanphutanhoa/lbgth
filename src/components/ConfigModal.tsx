import React, { useState } from "react";
import { Grade, SchoolInfo, TeacherType } from "../types";
import { X, Save, User, School, Calendar, Type, Building2, BookOpen, Layers, CheckSquare, Square, Award } from "lucide-react";
import { DEFAULT_TEACHERS, DEFAULT_CLASSES, calculateWeekDateRange } from "../data/defaultTimetables";

interface ConfigModalProps {
  isOpen: boolean;
  onClose: () => void;
  schoolInfo: SchoolInfo;
  onSave: (info: SchoolInfo) => void;
  availableClasses: string[];
  lang?: "en" | "vi";
}

export const ConfigModal: React.FC<ConfigModalProps> = ({
  isOpen,
  onClose,
  schoolInfo,
  onSave,
  availableClasses,
  lang = "en",
}) => {
  const isEn = lang === "en";
  const [formData, setFormData] = useState<SchoolInfo>({
    ...schoolInfo,
    teacherType: schoolInfo.teacherType || "homeroom",
    specialistSubject: schoolInfo.specialistSubject || "Tiếng Anh",
    assignedClasses: schoolInfo.assignedClasses && schoolInfo.assignedClasses.length > 0 
      ? schoolInfo.assignedClasses 
      : DEFAULT_CLASSES,
    principalName: schoolInfo.principalName || "Lê Văn Hùng",
    departmentHeadName: schoolInfo.departmentHeadName || "Trần Thị Huế",
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  const selectPredefinedTeacher = (name: string) => {
    const matched = DEFAULT_TEACHERS.find((t) => t.name === name);
    if (matched) {
      setFormData({
        ...formData,
        teacherName: matched.name,
        teacherType: matched.type as TeacherType,
        specialistSubject: matched.specialistSubject || formData.specialistSubject || "Tiếng Anh",
        assignedClasses: matched.assignedClasses || formData.assignedClasses || DEFAULT_CLASSES,
      });
    }
  };

  const toggleAssignedClass = (cls: string) => {
    const current = formData.assignedClasses || [];
    if (current.includes(cls)) {
      if (current.length > 1) {
        setFormData({ ...formData, assignedClasses: current.filter((c) => c !== cls) });
      }
    } else {
      setFormData({ ...formData, assignedClasses: [...current, cls] });
    }
  };

  const selectAllClasses = () => {
    setFormData({ ...formData, assignedClasses: [...DEFAULT_CLASSES] });
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white border-2 border-black shadow-[6px_6px_0px_rgba(0,0,0,1)] w-full max-w-3xl overflow-hidden font-serif animate-in fade-in zoom-in-95 duration-150">
        {/* Header */}
        <div className="px-6 py-4 bg-black text-white flex items-center justify-between border-b-2 border-black">
          <div className="flex items-center space-x-2.5">
            <div className="p-1.5 bg-white text-black border border-white">
              <School className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-sm text-white uppercase tracking-wider">
                {isEn ? "Configure Teacher - School - Branch - Class" : "Cấu Hình Giáo Viên - Trường Học - Phân Hiệu - Lớp"}
              </h3>
              <p className="text-[11px] text-stone-400 font-serif">
                {isEn ? "Full support for Homeroom & Specialist teachers (Timetable, Syllabus Schedule, Lesson Plans, Word A4)" : "Hỗ trợ đầy đủ Giáo viên Chủ nhiệm & Giáo viên Chuyên bộ môn (TKB, LBG, KHBD, Xuất Word A4)"}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-stone-400 hover:text-white hover:bg-stone-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[82vh] overflow-y-auto">
          {/* Teacher Role Type Switcher */}
          <div className="p-3 bg-stone-100 border border-black">
            <label className="block text-[11px] uppercase font-bold tracking-wider text-black mb-2 flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-black" />
              {isEn ? "Teacher Role (Teaching Category):" : "Chế độ Giáo viên (Loại hình giảng dạy):"}
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setFormData({ ...formData, teacherType: "homeroom" })}
                className={`py-2 px-3 text-xs font-bold uppercase tracking-wider border border-black text-left flex items-center justify-between transition-all ${
                  formData.teacherType === "homeroom"
                    ? "bg-black text-white shadow-[2px_2px_0px_rgba(0,0,0,1)]"
                    : "bg-white text-black hover:bg-stone-200"
                }`}
              >
                <div>
                  <div className="font-bold">{isEn ? "1. Homeroom Teacher" : "1. Giáo Viên Chủ Nhiệm (GVCN)"}</div>
                  <div className={`text-[10px] normal-case ${formData.teacherType === "homeroom" ? "text-stone-300" : "text-stone-500"}`}>
                    {isEn ? "Teaches multi-subjects for a fixed class (Math, Vietnamese, Science...)" : "Dạy đa môn cho 1 lớp cố định (Toán, Tiếng Việt, Khoa học...)"}
                  </div>
                </div>
                {formData.teacherType === "homeroom" && <span className="text-xs">✓</span>}
              </button>

              <button
                type="button"
                onClick={() => setFormData({ ...formData, teacherType: "specialist" })}
                className={`py-2 px-3 text-xs font-bold uppercase tracking-wider border border-black text-left flex items-center justify-between transition-all ${
                  formData.teacherType === "specialist"
                    ? "bg-black text-white shadow-[2px_2px_0px_rgba(0,0,0,1)]"
                    : "bg-white text-black hover:bg-stone-200"
                }`}
              >
                <div>
                  <div className="font-bold">{isEn ? "2. Subject / Specialist Teacher" : "2. Giáo Viên Chuyên / Bộ Môn"}</div>
                  <div className={`text-[10px] normal-case ${formData.teacherType === "specialist" ? "text-stone-300" : "text-stone-500"}`}>
                    {isEn ? "Teaches dedicated subject across multiple classes (English, Informatics, Music, Arts...)" : "Dạy chuyên đề nhiều lớp (Tiếng Anh, Tin học, Âm nhạc, Mĩ thuật...)"}
                  </div>
                </div>
                {formData.teacherType === "specialist" && <span className="text-xs">✓</span>}
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Teacher Name */}
            <div className="sm:col-span-2">
              <label className="block text-[10px] uppercase font-bold tracking-wider text-black mb-1 flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-black" />
                {isEn ? "Instructor Full Name:" : "Họ và tên Giáo viên giảng dạy:"}
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  required
                  value={formData.teacherName}
                  onChange={(e) => setFormData({ ...formData, teacherName: e.target.value })}
                  placeholder={isEn ? "e.g., Nguyen Hoang Tuan / Ms. Nuong" : "Ví dụ: Nguyễn Hoàng Tuấn / Cô Nương / Cô D.Phương"}
                  className="flex-1 px-3 py-2 text-xs border border-black bg-stone-50 focus:outline-none focus:bg-white font-serif font-bold text-black"
                />
                <select
                  onChange={(e) => e.target.value && selectPredefinedTeacher(e.target.value)}
                  className="px-2.5 py-2 text-xs bg-stone-100 border border-black text-black font-serif cursor-pointer hover:bg-stone-200"
                  defaultValue=""
                >
                  <option value="" disabled>{isEn ? "Quick select teacher" : "Chọn nhanh GV mẫu"}</option>
                  <optgroup label={isEn ? "--- Homeroom Teachers ---" : "--- Giáo viên Chủ nhiệm (GVCN) ---"}>
                    {DEFAULT_TEACHERS.filter((t) => t.type === "homeroom").map((t) => (
                      <option key={t.id} value={t.name}>
                        {t.name} ({t.role})
                      </option>
                    ))}
                  </optgroup>
                  <optgroup label={isEn ? "--- Subject / Specialist Teachers ---" : "--- Giáo viên Chuyên / Bộ môn ---"}>
                    {DEFAULT_TEACHERS.filter((t) => t.type === "specialist").map((t) => (
                      <option key={t.id} value={t.name}>
                        {t.name} ({t.role})
                      </option>
                    ))}
                  </optgroup>
                </select>
              </div>
            </div>

            {/* Specialist subject if specialist */}
            {formData.teacherType === "specialist" && (
              <div className="sm:col-span-2 p-3 bg-amber-50 border border-amber-900/40">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                  <div>
                    <label className="block text-[10px] uppercase font-bold tracking-wider text-stone-900 mb-1 flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-stone-900" />
                      {isEn ? "Specialist Teaching Subject:" : "Môn chuyên giảng dạy:"}
                    </label>
                    <select
                      value={formData.specialistSubject || "Tiếng Anh"}
                      onChange={(e) => setFormData({ ...formData, specialistSubject: e.target.value })}
                      className="w-full px-3 py-2 text-xs border border-black bg-white focus:outline-none font-bold"
                    >
                      <option value="Tiếng Anh">{isEn ? "English" : "Tiếng Anh (TA)"}</option>
                      <option value="Tin học">{isEn ? "Informatics & Digital Literacy" : "Tin học & Năng lực số (TH / TCTH)"}</option>
                      <option value="Âm nhạc">{isEn ? "Music" : "Âm nhạc (AN / BDAN)"}</option>
                      <option value="Mĩ thuật">{isEn ? "Visual Arts" : "Mĩ thuật (MT / BDMT)"}</option>
                      <option value="Giáo dục Thể chất">{isEn ? "Physical Education" : "Giáo dục Thể chất (GDTC)"}</option>
                      <option value="Hoạt động trải nghiệm">{isEn ? "Experiential Activities" : "Hoạt động trải nghiệm (HĐTN)"}</option>
                    </select>
                  </div>

                  <div className="flex items-end justify-between">
                    <div>
                      <span className="block text-[10px] uppercase font-bold tracking-wider text-stone-900 mb-1">
                        {isEn ? "Assigned Classes:" : "Danh sách lớp được phân công:"}
                      </span>
                      <span className="text-[11px] text-stone-600">
                        {isEn ? "Selected: " : "Đang chọn: "}<strong>{formData.assignedClasses?.length || 0} {isEn ? "classes" : "lớp"}</strong>
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={selectAllClasses}
                      className="px-2 py-1 text-[10px] font-bold uppercase border border-black bg-white hover:bg-stone-100"
                    >
                      {isEn ? "Select All" : "Chọn tất cả"}
                    </button>
                  </div>
                </div>

                {/* Assigned classes multi-select chips */}
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-amber-900/20">
                  {DEFAULT_CLASSES.map((cls) => {
                    const isSelected = formData.assignedClasses?.includes(cls);
                    return (
                      <button
                        key={cls}
                        type="button"
                        onClick={() => toggleAssignedClass(cls)}
                        className={`flex items-center gap-1 px-2.5 py-1 text-xs border font-serif transition-colors ${
                          isSelected
                            ? "bg-black text-white border-black font-bold"
                            : "bg-white text-stone-700 border-stone-400 hover:border-black"
                        }`}
                      >
                        {isSelected ? <CheckSquare className="w-3 h-3 text-white" /> : <Square className="w-3 h-3 text-stone-400" />}
                        <span>{isEn ? `Class ${cls}` : `Lớp ${cls}`}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* School Name */}
            <div>
              <label className="block text-[10px] uppercase font-bold tracking-wider text-black mb-1 flex items-center gap-1.5">
                <School className="w-3.5 h-3.5 text-black" />
                {isEn ? "Primary School Name:" : "Tên Trường Tiểu học:"}
              </label>
              <input
                type="text"
                required
                value={formData.schoolName}
                onChange={(e) => setFormData({ ...formData, schoolName: e.target.value })}
                placeholder="Tan Thanh Primary School"
                className="w-full px-3 py-2 text-xs border border-black bg-stone-50 focus:outline-none focus:bg-white font-serif"
              />
            </div>

            {/* Branch / Phân hiệu */}
            <div>
              <label className="block text-[10px] uppercase font-bold tracking-wider text-black mb-1 flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5 text-black" />
                {isEn ? "School Branch / Campus (optional):" : "Phân hiệu / Điểm trường (nếu có):"}
              </label>
              <input
                type="text"
                value={formData.branchName}
                onChange={(e) => setFormData({ ...formData, branchName: e.target.value })}
                placeholder={isEn ? "e.g., Branch Tan Lap (leave empty if none)" : "Ví dụ: Phân hiệu Tân Lập (để trống nếu không có)"}
                className="w-full px-3 py-2 text-xs border border-black bg-stone-50 focus:outline-none focus:bg-white font-serif"
              />
            </div>

            {/* Department Name */}
            <div>
              <label className="block text-[10px] uppercase font-bold tracking-wider text-black mb-1">
                {isEn ? "Governing Education Authority (Division / District):" : "Cơ quan quản lý (Phòng GD&ĐT / UBND):"}
              </label>
              <input
                type="text"
                value={formData.departmentName}
                onChange={(e) => setFormData({ ...formData, departmentName: e.target.value })}
                placeholder={isEn ? "Department of Education & Training" : "UBND Xã Tân Thạnh / Phòng GD&ĐT"}
                className="w-full px-3 py-2 text-xs border border-black bg-stone-50 focus:outline-none focus:bg-white font-serif"
              />
            </div>

            {/* Grade & Class (Primary for homeroom) */}
            {formData.teacherType === "homeroom" ? (
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-[10px] uppercase font-bold tracking-wider text-black mb-1">{isEn ? "Grade:" : "Khối lớp:"}</label>
                  <select
                    value={formData.grade}
                    onChange={(e) => {
                      const g = parseInt(e.target.value) as Grade;
                      const matchedClass = availableClasses.find((c) => c.startsWith(String(g))) || `${g}A`;
                      setFormData({ ...formData, grade: g, className: matchedClass });
                    }}
                    className="w-full px-3 py-2 text-xs border border-black bg-stone-50 focus:outline-none font-bold"
                  >
                    <option value={1}>{isEn ? "Grade 1" : "Khối 1"}</option>
                    <option value={2}>{isEn ? "Grade 2" : "Khối 2"}</option>
                    <option value={3}>{isEn ? "Grade 3" : "Khối 3"}</option>
                    <option value={4}>{isEn ? "Grade 4" : "Khối 4"}</option>
                    <option value={5}>{isEn ? "Grade 5" : "Khối 5"}</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] uppercase font-bold tracking-wider text-black mb-1">{isEn ? "Class Room:" : "Lớp học:"}</label>
                  <input
                    type="text"
                    value={formData.className}
                    onChange={(e) => setFormData({ ...formData, className: e.target.value })}
                    placeholder="5A, 1A, 2/2..."
                    className="w-full px-3 py-2 text-xs border border-black bg-stone-50 focus:outline-none font-bold text-black"
                  />
                </div>
              </div>
            ) : (
              <div>
                <label className="block text-[10px] uppercase font-bold tracking-wider text-black mb-1">
                  {isEn ? "Subject Faculty / Division:" : "Tổ chuyên môn:"}
                </label>
                <input
                  type="text"
                  value={isEn ? "Arts & Foreign Languages Faculty" : "Tổ Chuyên Môn Năng Khiếu - Ngoại Ngữ"}
                  disabled
                  className="w-full px-3 py-2 text-xs border border-stone-300 bg-stone-100 text-stone-600 font-serif"
                />
              </div>
            )}

            {/* Week & Academic Year */}
            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="text-[10px] uppercase font-bold tracking-wider text-black flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-black" />
                  {isEn ? "School Week:" : "Tuần học:"}
                </label>
                <button
                  type="button"
                  onClick={() => {
                    const range = calculateWeekDateRange(formData.week);
                    setFormData({
                      ...formData,
                      startDate: range.startDate,
                      endDate: range.endDate,
                    });
                  }}
                  className="text-[10px] text-blue-800 hover:underline font-mono font-bold cursor-pointer"
                  title={isEn ? "Sync dates from Week 1 (07/09/2026)" : "Tự động tính ngày Thứ 2 - Thứ 6 theo Tuần 1 (07/09/2026)"}
                >
                  {isEn ? "↻ Auto-Sync Dates" : "↻ Tính Tự Động Ngày"}
                </button>
              </div>
              <select
                value={formData.week}
                onChange={(e) => {
                  const w = parseInt(e.target.value) || 1;
                  const range = calculateWeekDateRange(w);
                  setFormData({
                    ...formData,
                    week: w,
                    startDate: range.startDate,
                    endDate: range.endDate,
                  });
                }}
                className="w-full px-3 py-2 text-xs border border-black bg-stone-50 focus:outline-none"
              >
                {Array.from({ length: 35 }, (_, i) => i + 1).map((w) => {
                  const r = calculateWeekDateRange(w);
                  return (
                    <option key={w} value={w}>
                      {isEn 
                        ? `Week ${w} (${r.datesShort[0]} - ${r.datesShort[4]})` 
                        : `Tuần ${w} (${r.datesShort[0]} - ${r.datesShort[4]})`}
                    </option>
                  );
                })}
              </select>
            </div>

            <div>
              <label className="block text-[10px] uppercase font-bold tracking-wider text-black mb-1">{isEn ? "Academic Year:" : "Năm học:"}</label>
              <input
                type="text"
                value={formData.academicYear}
                onChange={(e) => setFormData({ ...formData, academicYear: e.target.value })}
                placeholder="2026 - 2027"
                className="w-full px-3 py-2 text-xs border border-black bg-stone-50 focus:outline-none"
              />
            </div>

            {/* Date range */}
            <div>
              <label className="block text-[10px] uppercase font-bold tracking-wider text-black mb-1">{isEn ? "From Date (Monday):" : "Từ ngày (Thứ 2):"}</label>
              <input
                type="text"
                value={formData.startDate}
                onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                placeholder="21/09/2026"
                className="w-full px-3 py-2 text-xs border border-black bg-stone-50 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-[10px] uppercase font-bold tracking-wider text-black mb-1">{isEn ? "To Date (Friday):" : "Đến ngày (Thứ 6):"}</label>
              <input
                type="text"
                value={formData.endDate}
                onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                placeholder="25/09/2026"
                className="w-full px-3 py-2 text-xs border border-black bg-stone-50 focus:outline-none"
              />
            </div>

            {/* Signatures for exported Word documents */}
            <div>
              <label className="block text-[10px] uppercase font-bold tracking-wider text-black mb-1">
                {isEn ? "School Principal / Vice Principal:" : "Người ký duyệt (Hiệu trưởng / P.Hiệu trưởng):"}
              </label>
              <input
                type="text"
                value={formData.principalName || ""}
                onChange={(e) => setFormData({ ...formData, principalName: e.target.value })}
                placeholder="e.g., Le Van Hung"
                className="w-full px-3 py-2 text-xs border border-black bg-stone-50 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-[10px] uppercase font-bold tracking-wider text-black mb-1">
                {isEn ? "Head of Subject / Academic Division:" : "Tổ trưởng Chuyên môn ký duyệt:"}
              </label>
              <input
                type="text"
                value={formData.departmentHeadName || ""}
                onChange={(e) => setFormData({ ...formData, departmentHeadName: e.target.value })}
                placeholder="e.g., Tran Thi Hue"
                className="w-full px-3 py-2 text-xs border border-black bg-stone-50 focus:outline-none"
              />
            </div>

            {/* Font settings for Word export */}
            <div>
              <label className="block text-[10px] uppercase font-bold tracking-wider text-black mb-1 flex items-center gap-1.5">
                <Type className="w-3.5 h-3.5 text-black" />
                {isEn ? "Word A4 Export Font Size:" : "Cỡ chữ xuất file Word A4:"}
              </label>
              <div className="grid grid-cols-3 gap-2">
                {([12, 13, 14] as const).map((sz) => (
                  <button
                    key={sz}
                    type="button"
                    onClick={() => setFormData({ ...formData, fontSize: sz })}
                    className={`py-1.5 text-xs font-bold uppercase tracking-wider border border-black transition-colors ${
                      formData.fontSize === sz
                        ? "bg-black text-white"
                        : "bg-stone-50 text-black hover:bg-stone-200"
                    }`}
                  >
                    Font {sz}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-[10px] uppercase font-bold tracking-wider text-black mb-1">{isEn ? "Export Font Family:" : "Phông chữ xuất Word:"}</label>
              <select
                value={formData.fontFamily}
                onChange={(e) => setFormData({ ...formData, fontFamily: e.target.value as any })}
                className="w-full px-3 py-2 text-xs border border-black bg-stone-50 focus:outline-none"
              >
                <option value="Times New Roman">Times New Roman {isEn ? "(Standard)" : "(Chuẩn văn bản)"}</option>
                <option value="Arial">Arial</option>
              </select>
            </div>

            {/* Cấu hình học sinh khuyết tật (Chỉ nêu yêu cầu cần đạt đối với những lớp có học sinh khuyết tật) */}
            <div className="sm:col-span-2 p-3 bg-amber-50/70 border border-amber-300">
              <label className="flex items-center gap-2 cursor-pointer mb-2">
                <input
                  type="checkbox"
                  checked={formData.hasDisabledStudent || false}
                  onChange={(e) => setFormData({ ...formData, hasDisabledStudent: e.target.checked })}
                  className="w-4 h-4 text-amber-600 rounded border-amber-400 focus:ring-amber-500"
                />
                <span className="text-xs font-bold text-amber-950 uppercase tracking-wide">
                  {isEn ? "Class has inclusive students with disabilities" : "Lớp có học sinh khuyết tật học hòa nhập (Hiển thị Mục 5 - Yêu cầu cần đạt cho HS khuyết tật)"}
                </span>
              </label>
              <p className="text-[11px] text-amber-800 mb-2 font-serif italic">
                {isEn 
                  ? "* Note: According to regulations, only state learning objectives for students with disabilities in classes that actually have them." 
                  : "* Lưu ý chỉ đạo: Chỉ nêu yêu cầu cần đạt đối với những lớp có học sinh khuyết tật. Nếu bỏ chọn, toàn bộ KHBD sẽ ẩn mục này."}
              </p>
              {formData.hasDisabledStudent && (
                <div className="mt-2">
                  <label className="block text-[10px] uppercase font-bold text-amber-900 mb-1">
                    {isEn ? "Standardized Learning Objectives for Students with Disabilities:" : "Yêu cầu cần đạt đối với HS khuyết tật:"}
                  </label>
                  <textarea
                    rows={2}
                    value={formData.disabledStudentObjectives || "Học sinh khuyết tật được tham gia các hoạt động học tập phù hợp với khả năng; hoàn thành các yêu cầu cơ bản dưới sự hướng dẫn, giúp đỡ của giáo viên và các bạn trong nhóm."}
                    onChange={(e) => setFormData({ ...formData, disabledStudentObjectives: e.target.value })}
                    className="w-full px-2.5 py-1.5 text-xs border border-amber-400 bg-white focus:outline-none text-stone-900 font-serif"
                  />
                </div>
              )}
            </div>
          </div>

          <div className="pt-4 border-t border-black flex items-center justify-between">
            <div className="text-[11px] text-stone-500 italic">
              {isEn ? "* Configuration changes are saved and persisted locally." : "* Dữ liệu cấu hình tự động lưu trữ an toàn và ổn định lâu dài."}
            </div>
            <div className="flex items-center space-x-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-stone-600 hover:text-black border border-stone-300 hover:bg-stone-100 transition-colors cursor-pointer"
              >
                {isEn ? "Cancel" : "Hủy bỏ"}
              </button>
              <button
                type="submit"
                className="flex items-center gap-2 px-6 py-2 text-xs font-bold uppercase tracking-wider bg-black hover:bg-stone-800 text-white border border-black shadow-[2px_2px_0px_rgba(0,0,0,1)] transition-colors cursor-pointer"
              >
                <Save className="w-3.5 h-3.5" />
                <span>{isEn ? "Save & Apply Settings" : "Lưu Cấu Hình & Cập Nhật"}</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};


