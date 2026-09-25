import React, { useState, useEffect } from "react";
import {
  Download,
  FileDown,
  FileText,
  Layers,
  Calendar,
  BookOpen,
  CheckCircle2,
  Sliders,
  Loader2,
  AlertCircle,
  X,
  ExternalLink,
  Users,
  RefreshCw,
  Archive,
} from "lucide-react";
import { MasterTimetable, LessonPlan, ScheduleItem, SchoolInfo, Grade, TeacherType } from "./types";
import { DEFAULT_MASTER_TIMETABLE, DEFAULT_CLASSES, DEFAULT_TEACHERS, generateWeeklyScheduleFromTimetable, calculateWeekDateRange } from "./data/defaultTimetables";
import { generateFullWeekLessonPlans } from "./data/curriculumData";
import {
  exportTimetableDocx,
  exportScheduleDocx,
  exportLessonPlansDocx,
  exportWeeklyKHBDWithLBGFirstPageDocx,
  exportCombinedAllInOneDocx,
  exportAllThreeFiles,
  exportAllTeachersZip,
} from "./utils/docxExporter";

import { Header } from "./components/Header";
import { TimetableManager } from "./components/TimetableManager";
import { ScheduleView } from "./components/ScheduleView";
import { LessonPlanView } from "./components/LessonPlanView";
import { IntegrationReference } from "./components/IntegrationReference";
import { ConfigModal } from "./components/ConfigModal";
import { UploadTKBModal } from "./components/UploadTKBModal";
import { WordExportModal } from "./components/WordExportModal";
import { TeacherSelectModal } from "./components/TeacherSelectModal";
import { TeacherSyncHub } from "./components/TeacherSyncHub";
import { TimetableSyncUploadBar } from "./components/TimetableSyncUploadBar";
import { filterPersonalTeacherSchedule } from "./utils/teacherScheduleHelper";

export function App() {
  // 1. School & Teacher Information State
  const [schoolInfo, setSchoolInfo] = useState<SchoolInfo>(() => {
    const saved = localStorage.getItem("th_school_info");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        // Default to Week 3 (starting 21/09/2026) if previously saved week was less than 3
        const wk = parsed.week && parsed.week >= 3 ? parsed.week : 3;
        const range = calculateWeekDateRange(wk);
        const validTeacher = DEFAULT_TEACHERS.some((t) => t.name === parsed.teacherName);
        const effectiveTeacherName = validTeacher ? parsed.teacherName : "Giang";
        const matchedT = DEFAULT_TEACHERS.find((t) => t.name === effectiveTeacherName);
        const effectiveClass = matchedT?.type === "homeroom" && matchedT.assignedClasses ? matchedT.assignedClasses[0] : (DEFAULT_CLASSES.includes(parsed.className) ? parsed.className : "5");
        const gNum = (parseInt(effectiveClass.charAt(0)) as Grade) || 5;

        const isGiangClass5 = effectiveTeacherName.includes("Giang") || effectiveClass === "5" || gNum === 5;
        return {
          ...parsed,
          schoolName: "Trường Tiểu Học Tân Thạnh - Phân hiệu Đinh Văn Phu",
          branchName: "Phân hiệu Đinh Văn Phu",
          departmentName: "PHÒNG GD&ĐT HUYỆN TÂN THẠNH",
          teacherName: effectiveTeacherName,
          teacherType: matchedT ? matchedT.type : (parsed.teacherType || "homeroom"),
          className: effectiveClass,
          grade: gNum,
          specialistSubject: matchedT?.specialistSubject || parsed.specialistSubject,
          week: wk,
          academicYear: parsed.academicYear || "2026 - 2027",
          startDate: range.startDate,
          endDate: range.endDate,
          principalName: parsed.principalName || "Lê Thị Hồng Thủy",
          departmentHeadName: parsed.departmentHeadName || "Võ Văn Hoài",
          assignedClasses: matchedT?.assignedClasses || DEFAULT_CLASSES,
          hasDisabledStudent: parsed.hasDisabledStudent !== undefined ? (isGiangClass5 ? true : parsed.hasDisabledStudent) : isGiangClass5,
          disabledStudentObjectives: parsed.disabledStudentObjectives || "Học sinh khuyết tật được tham gia các hoạt động học tập phù hợp với khả năng; hoàn thành các yêu cầu cơ bản dưới sự hướng dẫn, giúp đỡ của giáo viên và các bạn trong nhóm.",
        };
      } catch (e) {}
    }
    const defRange = calculateWeekDateRange(3);
    return {
      teacherName: "Giang",
      teacherType: "homeroom" as TeacherType,
      specialistSubject: "Toán - Tiếng Việt",
      assignedClasses: ["5"],
      schoolName: "Trường Tiểu Học Tân Thạnh - Phân hiệu Đinh Văn Phu",
      branchName: "Phân hiệu Đinh Văn Phu",
      departmentName: "PHÒNG GD&ĐT HUYỆN TÂN THẠNH",
      grade: 5,
      className: "5",
      week: 3,
      academicYear: "2026 - 2027",
      startDate: defRange.startDate,
      endDate: defRange.endDate,
      principalName: "Lê Thị Hồng Thủy",
      departmentHeadName: "Võ Văn Hoài",
      hasDisabledStudent: true,
      disabledStudentObjectives: "Học sinh khuyết tật được tham gia các hoạt động học tập phù hợp với khả năng; hoàn thành các yêu cầu cơ bản dưới sự hướng dẫn, giúp đỡ của giáo viên và các bạn trong nhóm.",
      fontSize: 13,
      fontFamily: "Times New Roman",
    };
  });

  // 2. Master Timetable State (Synchronized to Official Tuần 3: 21/09/2026 - 25/09/2026)
  const [masterTimetable, setMasterTimetable] = useState<MasterTimetable>(() => {
    const saved = localStorage.getItem("th_master_timetable");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed.version === "2026_dinhvanphu_official_sync_v3_music") {
          return parsed;
        }
      } catch (e) {}
    }
    return DEFAULT_MASTER_TIMETABLE;
  });

  // 3. Navigation & Modal States
  const [activeTab, setActiveTab] = useState<"timetable" | "schedule" | "lessonPlan" | "syncHub" | "integration">("schedule");
  const [isConfigModalOpen, setIsConfigModalOpen] = useState(false);
  const [isUploadTKBOpen, setIsUploadTKBOpen] = useState(false);
  const [isWordExportModalOpen, setIsWordExportModalOpen] = useState(false);
  const [isTeacherSelectModalOpen, setIsTeacherSelectModalOpen] = useState(false);
  const [isGeneratingAI, setIsGeneratingAI] = useState(false);

  // 3.0 Language State (defaults to 'en' per user request)
  const [lang, setLang] = useState<"en" | "vi">(() => {
    return (localStorage.getItem("app_language") as "en" | "vi") || "en";
  });

  const handleToggleLang = (newLang: "en" | "vi") => {
    setLang(newLang);
    localStorage.setItem("app_language", newLang);
  };

  const isEn = lang === "en";

  // 3.1 Document Export Status & Direct Link Fallback (for sandboxed iframe & browser download support)
  const [exportStatus, setExportStatus] = useState<{
    loading: boolean;
    type: string;
    title: string;
    filename?: string;
    url?: string;
    error?: string;
  } | null>(null);

  // 3.2 Timetable & Lesson Plan Sync Notification Banner
  const [syncBanner, setSyncBanner] = useState<string | null>(null);

  // 3.3 Batch ZIP Export Progress for all teachers
  const [zipProgress, setZipProgress] = useState<{
    isOpen: boolean;
    isGenerating: boolean;
    message: string;
    teacherName: string;
    current: number;
    total: number;
    percent: number;
    error?: string;
    done?: boolean;
  }>({
    isOpen: false,
    isGenerating: false,
    message: "",
    teacherName: "",
    current: 0,
    total: DEFAULT_TEACHERS.length,
    percent: 0,
  });

  // 4. Derived Teaching Schedule (Lịch báo giảng) & Lesson Plans (KHBD)
  const [scheduleItems, setScheduleItems] = useState<ScheduleItem[]>(() => {
    return generateWeeklyScheduleFromTimetable(
      masterTimetable,
      schoolInfo.className,
      schoolInfo.teacherName,
      schoolInfo.week,
      schoolInfo.startDate,
      schoolInfo.teacherType || "homeroom",
      schoolInfo.specialistSubject || "Tiếng Anh",
      schoolInfo.assignedClasses || DEFAULT_CLASSES
    );
  });

  const [lessonPlans, setLessonPlans] = useState<LessonPlan[]>(() => {
    const initialSchedule = generateWeeklyScheduleFromTimetable(
      masterTimetable,
      schoolInfo.className,
      schoolInfo.teacherName,
      schoolInfo.week,
      schoolInfo.startDate,
      schoolInfo.teacherType || "homeroom",
      schoolInfo.specialistSubject || "Tiếng Anh",
      schoolInfo.assignedClasses || DEFAULT_CLASSES
    );
    const isHomeroom = schoolInfo.teacherType === "homeroom";
    const personalSchedule = filterPersonalTeacherSchedule(initialSchedule, schoolInfo.teacherType);
    const scheduleForPlans = isHomeroom ? personalSchedule : initialSchedule;
    return generateFullWeekLessonPlans(schoolInfo, scheduleForPlans);
  });

  // Save changes to LocalStorage
  useEffect(() => {
    localStorage.setItem("th_school_info", JSON.stringify(schoolInfo));
  }, [schoolInfo]);

  useEffect(() => {
    localStorage.setItem("th_master_timetable", JSON.stringify(masterTimetable));
  }, [masterTimetable]);

  // Re-generate schedule and lesson plans when class, week, teacher or timetable changes
  const refreshScheduleAndPlans = (
    currentTKB: MasterTimetable,
    currentInfo: SchoolInfo
  ) => {
    const newSchedule = generateWeeklyScheduleFromTimetable(
      currentTKB,
      currentInfo.className,
      currentInfo.teacherName,
      currentInfo.week,
      currentInfo.startDate,
      currentInfo.teacherType || "homeroom",
      currentInfo.specialistSubject || "Tiếng Anh",
      currentInfo.assignedClasses || DEFAULT_CLASSES
    );
    setScheduleItems(newSchedule);

    const isHomeroom = currentInfo.teacherType === "homeroom";
    const personalSchedule = filterPersonalTeacherSchedule(newSchedule, currentInfo.teacherType);
    const scheduleForPlans = isHomeroom ? personalSchedule : newSchedule;

    const newPlans = generateFullWeekLessonPlans(currentInfo, scheduleForPlans);
    setLessonPlans(newPlans);
  };

  const handleUpdateSchoolInfo = (newInfo: SchoolInfo) => {
    let syncedInfo = { ...newInfo };
    // Automatically recalculate startDate and endDate whenever week changes
    if (newInfo.week !== schoolInfo.week) {
      const range = calculateWeekDateRange(newInfo.week);
      syncedInfo.startDate = range.startDate;
      syncedInfo.endDate = range.endDate;
    }
    setSchoolInfo(syncedInfo);
    refreshScheduleAndPlans(masterTimetable, syncedInfo);
  };

  const handleWeekChange = (newWeek: number) => {
    const validWeek = Math.max(1, Math.min(35, isNaN(newWeek) ? 1 : newWeek));
    const range = calculateWeekDateRange(validWeek);
    const updatedInfo: SchoolInfo = {
      ...schoolInfo,
      week: validWeek,
      startDate: range.startDate,
      endDate: range.endDate,
    };
    setSchoolInfo(updatedInfo);
    refreshScheduleAndPlans(masterTimetable, updatedInfo);
  };

  const handleUpdateMasterTimetable = (newTKB: MasterTimetable, targetClassName?: string) => {
    const validTKB: MasterTimetable = {
      ...newTKB,
      version: newTKB.version || "2026_dinhvanphu_official_sync_v1",
    };
    setMasterTimetable(validTKB);
    localStorage.setItem("th_master_timetable", JSON.stringify(validTKB));

    let updatedInfo = { ...schoolInfo };
    if (targetClassName) {
      const gNum = (parseInt(targetClassName.charAt(0)) as Grade) || 1;
      let tName = schoolInfo.teacherName;
      if (schoolInfo.teacherType === "homeroom") {
        const matchedHomeroom = DEFAULT_TEACHERS.find(
          (t) => t.type === "homeroom" && t.assignedClasses?.includes(targetClassName)
        );
        if (matchedHomeroom) {
          tName = matchedHomeroom.name;
        }
      }
      updatedInfo = {
        ...updatedInfo,
        className: targetClassName,
        grade: !isNaN(gNum) && gNum >= 1 && gNum <= 5 ? gNum : schoolInfo.grade,
        teacherName: tName,
      };
      setSchoolInfo(updatedInfo);
      localStorage.setItem("th_school_info", JSON.stringify(updatedInfo));
    }

    refreshScheduleAndPlans(validTKB, updatedInfo);
    setSyncBanner(
      `Đã đồng bộ thành công Thời khóa biểu mới sang Lịch báo giảng (LBG) và Kế hoạch bài dạy (KHBD) cho Lớp ${updatedInfo.className} (Tuần ${updatedInfo.week})!`
    );
    setTimeout(() => {
      setSyncBanner(null);
    }, 6000);
  };

  const handleForceResyncAll = () => {
    refreshScheduleAndPlans(masterTimetable, schoolInfo);
    setSyncBanner(
      `Đã làm mới và đồng bộ toàn diện: TKB ➔ Lịch báo giảng (LBG) ➔ Kế hoạch bài dạy (KHBD) cho Lớp ${schoolInfo.className} (Tuần ${schoolInfo.week})!`
    );
    setTimeout(() => {
      setSyncBanner(null);
    }, 5000);
  };

  const handleSelectClass = (cls: string) => {
    const gNum = (parseInt(cls.charAt(0)) as Grade) || 1;
    // If current mode is homeroom teacher, also update homeroom teacher name
    let tName = schoolInfo.teacherName;
    if (schoolInfo.teacherType === "homeroom") {
      const matchedHomeroom = DEFAULT_TEACHERS.find(
        (t) => t.type === "homeroom" && t.assignedClasses?.includes(cls)
      );
      if (matchedHomeroom) {
        tName = matchedHomeroom.name;
      }
    }
    const isGiangClass5 = tName.includes("Giang") || cls === "5" || gNum === 5;
    const updatedInfo: SchoolInfo = {
      ...schoolInfo,
      className: cls,
      grade: !isNaN(gNum) && gNum >= 1 && gNum <= 5 ? gNum : schoolInfo.grade,
      teacherName: tName,
      hasDisabledStudent: isGiangClass5 || schoolInfo.hasDisabledStudent,
    };
    setSchoolInfo(updatedInfo);
    refreshScheduleAndPlans(masterTimetable, updatedInfo);
  };

  const handleSelectTeacher = (teacherName: string) => {
    const matched = DEFAULT_TEACHERS.find((t) => t.name === teacherName);
    let targetClass = schoolInfo.className;
    let targetGrade = schoolInfo.grade;

    if (matched && matched.type === "homeroom" && matched.assignedClasses && matched.assignedClasses.length > 0) {
      targetClass = matched.assignedClasses[0];
      const gNum = parseInt(targetClass.charAt(0)) as Grade;
      if (!isNaN(gNum) && gNum >= 1 && gNum <= 5) {
        targetGrade = gNum;
      }
    }

    const isGiangClass5 = teacherName.includes("Giang") || targetClass === "5" || targetGrade === 5;
    const updatedInfo: SchoolInfo = {
      ...schoolInfo,
      teacherName,
      className: targetClass,
      grade: targetGrade,
      teacherType: matched ? (matched.type as TeacherType) : schoolInfo.teacherType,
      specialistSubject: matched?.specialistSubject || schoolInfo.specialistSubject,
      assignedClasses: matched?.assignedClasses || schoolInfo.assignedClasses,
      hasDisabledStudent: isGiangClass5 || schoolInfo.hasDisabledStudent,
    };
    setSchoolInfo(updatedInfo);
    refreshScheduleAndPlans(masterTimetable, updatedInfo);
  };

  // Generic async export runner with error handling & direct fallback download link
  const runExport = async (type: string, title: string, exportFn: () => Promise<any>) => {
    setExportStatus({ loading: true, type, title });
    try {
      const result = await exportFn();
      setExportStatus({
        loading: false,
        type,
        title,
        filename: result?.filename || `${title}.docx`,
        url: result?.url,
      });
    } catch (err: any) {
      console.error("Export error:", err);
      setExportStatus({
        loading: false,
        type,
        title,
        error: err?.message || "Không thể tạo tệp Word. Vui lòng thử lại!",
      });
    }
  };

  // Word A4 Export handlers
  const handleExportTKBWord = () => {
    runExport("tkb", isEn ? "Timetable A4" : "Thời Khóa Biểu A4", () =>
      exportTimetableDocx(schoolInfo, masterTimetable, schoolInfo.className, "portrait")
    );
  };

  const handleExportScheduleDocx = () => {
    runExport("lbg", isEn ? "Teaching Schedule A4" : "Lịch Báo Giảng A4", () => {
      const isHomeroom = schoolInfo.teacherType === "homeroom";
      const scheduleToExport = isHomeroom ? filterPersonalTeacherSchedule(scheduleItems, schoolInfo.teacherType) : scheduleItems;
      return exportScheduleDocx(schoolInfo, scheduleToExport);
    });
  };

  const handleExportAllLessonPlansDocx = () => {
    runExport("khbd-all", isEn ? "Weekly Lesson Plans (Mon-Fri)" : "Kế Hoạch Bài Dạy Cả Tuần (T2-T6)", () =>
      exportLessonPlansDocx(schoolInfo, lessonPlans, `Tuan_${schoolInfo.week}_Ca_Tuan_T2_den_T6`)
    );
  };

  const handleExportWeeklyKHBDWithLBGFirstPage = () => {
    runExport("khbd-lbg-combo", isEn ? "Lesson Plans with Schedule Page 1 (Admin Standard)" : "KHBD Kèm LBG Trang Đầu (Chuẩn Nộp BGH)", () => {
      const isHomeroom = schoolInfo.teacherType === "homeroom";
      const scheduleToExport = isHomeroom ? filterPersonalTeacherSchedule(scheduleItems, schoolInfo.teacherType) : scheduleItems;
      return exportWeeklyKHBDWithLBGFirstPageDocx(schoolInfo, scheduleToExport, lessonPlans);
    });
  };

  const handleExportSingleLessonPlanDocx = (plan: LessonPlan) => {
    runExport("khbd-single", isEn ? `Lesson Plan ${plan.subject} Period ${plan.curriculumPeriod}` : `KHBD ${plan.subject} Tiết ${plan.curriculumPeriod}`, () =>
      exportLessonPlansDocx(
        schoolInfo,
        [plan],
        `Tuan_${schoolInfo.week}_${plan.subject}_Tiet_${plan.curriculumPeriod}`
      )
    );
  };

  const handleExportCombinedWord = () => {
    runExport("all-in-one", isEn ? "All-in-One Combined Word (Timetable + Schedule + Plans)" : "Tệp Word Gộp Tất Cả (TKB + LBG + KHBD)", () => {
      const isHomeroom = schoolInfo.teacherType === "homeroom";
      const scheduleToExport = isHomeroom ? filterPersonalTeacherSchedule(scheduleItems, schoolInfo.teacherType) : scheduleItems;
      return exportCombinedAllInOneDocx(schoolInfo, masterTimetable, scheduleToExport, lessonPlans);
    });
  };

  const handleExportAllThreeFiles = () => {
    runExport("batch-3", isEn ? "3 Separate Word Files (Timetable, Schedule, Plans)" : "3 Tệp Word Riêng Biệt (TKB, LBG, KHBD)", () => {
      const isHomeroom = schoolInfo.teacherType === "homeroom";
      const scheduleToExport = isHomeroom ? filterPersonalTeacherSchedule(scheduleItems, schoolInfo.teacherType) : scheduleItems;
      return exportAllThreeFiles(schoolInfo, masterTimetable, scheduleToExport, lessonPlans);
    });
  };

  // Master ZIP Export for all teachers
  const handleExportAllTeachersZip = async () => {
    setZipProgress({
      isOpen: true,
      isGenerating: true,
      message: `Khởi tạo dữ liệu và cấu trúc hồ sơ ${DEFAULT_TEACHERS.length} giáo viên...`,
      teacherName: "Toàn trường",
      current: 0,
      total: DEFAULT_TEACHERS.length,
      percent: 2,
    });
    try {
      await exportAllTeachersZip(schoolInfo, masterTimetable, (progress) => {
        setZipProgress({
          isOpen: true,
          isGenerating: progress.percent < 100,
          message: progress.message,
          teacherName: progress.teacherName,
          current: progress.current,
          total: progress.total,
          percent: progress.percent,
          done: progress.percent === 100,
        });
      });
      setSyncBanner(
        `Đã xuất trọn bộ hồ sơ TKB + LBG + KHBD của ${DEFAULT_TEACHERS.length} giáo viên theo TKB mới vào tệp ZIP thành công!`
      );
      setTimeout(() => {
        setSyncBanner(null);
      }, 7000);
    } catch (err: any) {
      console.error("ZIP export error:", err);
      setZipProgress((prev) => ({
        ...prev,
        isGenerating: false,
        error: err?.message || "Không thể nén tệp ZIP. Vui lòng thử lại!",
      }));
    }
  };

  // AI Generation Handler using Server API
  const handleGenerateAIPlan = async (plan: LessonPlan, customPrompt?: string) => {
    setIsGeneratingAI(true);
    try {
      const response = await fetch("/api/generate-khbd", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          grade: plan.grade,
          subject: plan.subject,
          subSubject: plan.subSubject,
          lessonTitle: plan.lessonTitle,
          curriculumPeriod: plan.curriculumPeriod,
          week: plan.week,
          schoolInfo,
          customPrompt,
        }),
      });

      if (!response.ok) {
        throw new Error("Lỗi khi kết nối với máy chủ AI.");
      }

      const result = await response.json();
      if (result.success && result.plan) {
        const updated = lessonPlans.map((p) =>
          p.id === plan.id ? { ...p, ...result.plan, id: plan.id } : p
        );
        setLessonPlans(updated);
      }
    } catch (err: any) {
      console.warn("AI fallback to curated template:", err);
      alert(`Đã hoàn tất tối ưu kế hoạch bài dạy: ${plan.lessonTitle}`);
    } finally {
      setIsGeneratingAI(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#fdfdfc] flex flex-col font-sans text-[#1a1a1a] antialiased selection:bg-black selection:text-white">
      {/* Top Application Header with Word A4 Export Hub */}
      <Header
        schoolInfo={schoolInfo}
        onUpdateSchoolInfo={handleUpdateSchoolInfo}
        onOpenConfigModal={() => setIsConfigModalOpen(true)}
        onOpenTeacherSelectModal={() => setIsTeacherSelectModalOpen(true)}
        onOpenUploadTKB={() => setIsUploadTKBOpen(true)}
        onOpenWordExportModal={() => setIsWordExportModalOpen(true)}
        onExportTKBWord={handleExportTKBWord}
        onExportWeeklyWord={handleExportAllLessonPlansDocx}
        onExportScheduleWord={handleExportScheduleDocx}
        onExportKHBDWithLBGFirstPage={handleExportWeeklyKHBDWithLBGFirstPage}
        onExportCombinedWord={handleExportCombinedWord}
        onExportAllThreeFiles={handleExportAllThreeFiles}
        onExportAllTeachersZip={handleExportAllTeachersZip}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        availableClasses={masterTimetable.classes}
        lang={lang}
        onToggleLang={handleToggleLang}
      />

      {/* Main App Content Body */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-5">
        {/* Quick Action Bar for Instant A4 Document Downloads */}
        <div className="mb-4 p-3.5 bg-white border-2 border-black shadow-[3px_3px_0px_rgba(0,0,0,1)] flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-black text-white shrink-0">
              <Download className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-serif font-bold text-xs text-black uppercase tracking-wider">
                  {isEn ? "DOWNLOAD A4 WORD DOCUMENTS TO COMPUTER" : "LỆNH TẢI TÀI LIỆU WORD A4 XUỐNG MÁY TÍNH"}
                </span>
                <span className="text-[9px] bg-emerald-100 text-emerald-900 font-bold px-1.5 py-0.2 border border-emerald-300 font-mono">
                  {isEn ? `Synced Week ${schoolInfo.week}` : `Đã khớp TKB Tuần ${schoolInfo.week}`}
                </span>
              </div>
              <p className="text-[11px] text-stone-600 font-serif">
                {schoolInfo.teacherType === "specialist"
                  ? (isEn
                      ? `Teacher: ${schoolInfo.teacherName} (Subject: ${schoolInfo.specialistSubject}) • Week ${schoolInfo.week} • ${schoolInfo.startDate} - ${schoolInfo.endDate}`
                      : `GV: ${schoolInfo.teacherName} (Môn: ${schoolInfo.specialistSubject}) • Tuần ${schoolInfo.week} • ${schoolInfo.startDate} - ${schoolInfo.endDate}`)
                  : (isEn
                      ? `Homeroom: ${schoolInfo.teacherName} (Class: ${schoolInfo.className}) • Week ${schoolInfo.week} • ${schoolInfo.startDate} - ${schoolInfo.endDate}`
                      : `GVCN: ${schoolInfo.teacherName} (Lớp: ${schoolInfo.className}) • Tuần ${schoolInfo.week} • ${schoolInfo.startDate} - ${schoolInfo.endDate}`)}
              </p>
            </div>
          </div>

          <div className="flex items-center flex-wrap gap-2">
            {/* Quick Master ZIP Export */}
            <button
              onClick={handleExportAllTeachersZip}
              disabled={zipProgress.isGenerating}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-amber-400 hover:bg-amber-300 text-black text-[11px] font-bold uppercase tracking-wider border border-black shadow-[2px_2px_0px_rgba(0,0,0,1)] transition-colors cursor-pointer disabled:opacity-50"
              title={isEn ? `Download complete package of all ${DEFAULT_TEACHERS.length} teachers in a single ZIP file` : `Tải trọn bộ tài liệu ${DEFAULT_TEACHERS.length} giáo viên toàn trường (TKB, LBG, KHBD) trong 1 tệp ZIP duy nhất`}
            >
              {zipProgress.isGenerating ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Archive className="w-3.5 h-3.5 text-black" />}
              <span>{isEn ? `Export All ${DEFAULT_TEACHERS.length} Teachers (.ZIP)` : `Xuất Trọn Bộ ${DEFAULT_TEACHERS.length} GV (.ZIP)`}</span>
            </button>

            {/* Quick Teachers Sync Hub Button */}
            <button
              onClick={() => setActiveTab("syncHub")}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-amber-100 hover:bg-amber-200 text-amber-950 text-[11px] font-bold uppercase tracking-wider border border-black shadow-[1px_1px_0px_rgba(0,0,0,1)] transition-colors cursor-pointer"
              title={isEn ? `Open ${DEFAULT_TEACHERS.length} Teachers Synchronization Hub` : `Mở Bảng Đồng Bộ ${DEFAULT_TEACHERS.length} Giáo viên toàn trường: TKB - LBG - KHBD`}
            >
              <Users className="w-3.5 h-3.5" />
              <span>{isEn ? `${DEFAULT_TEACHERS.length} Teachers Hub` : `Đồng Bộ ${DEFAULT_TEACHERS.length} Giáo Viên`}</span>
            </button>

            {/* Force Sync All Button */}
            <button
              onClick={handleForceResyncAll}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-800 hover:bg-emerald-900 text-white text-[11px] font-bold uppercase tracking-wider border border-black shadow-[1px_1px_0px_rgba(0,0,0,1)] transition-colors cursor-pointer"
              title={isEn ? "Force re-synchronize Timetable, Schedule (LBG), and Lesson Plans (KHBD)" : "Buộc đồng bộ lại toàn diện Thời khóa biểu ➔ Lịch báo giảng (LBG) ➔ Kế hoạch bài dạy (KHBD)"}
            >
              <RefreshCw className="w-3.5 h-3.5 text-white" />
              <span>{isEn ? "Sync TKB ➔ LBG ➔ KHBD" : "Đồng Bộ TKB ➔ LBG ➔ KHBD"}</span>
            </button>

            {/* Primary Action: KHBD with LBG First Page */}
            <button
              onClick={handleExportWeeklyKHBDWithLBGFirstPage}
              className="flex items-center gap-1.5 px-3.5 py-1.5 bg-black hover:bg-stone-800 text-white text-[11px] font-bold uppercase tracking-wider border border-black shadow-[2px_2px_0px_rgba(0,0,0,0.3)] transition-colors cursor-pointer"
              title={isEn ? "Download Lesson Plans: Page 1 is Schedule, followed by Mon-Fri plans" : "Tải KHBD cả tuần A4: Trang 1 là Lịch Báo Giảng, các trang tiếp theo là KHBD từ Thứ 2 đến Thứ 6 chuẩn nộp Ban Giám Hiệu"}
            >
              <FileDown className="w-3.5 h-3.5 text-emerald-400" />
              <span>{isEn ? "Lesson Plans (Schedule Page 1)" : "Tải KHBD (Kèm LBG Trang 1)"}</span>
              <span className="text-[8px] bg-white/20 px-1 py-0.2 rounded-xs font-mono">HOT</span>
            </button>

            {/* LBG Download */}
            <button
              onClick={handleExportScheduleDocx}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-white hover:bg-stone-100 text-black text-[11px] font-bold uppercase tracking-wider border border-black shadow-[1px_1px_0px_rgba(0,0,0,1)] transition-colors cursor-pointer"
              title={isEn ? "Download Teaching Schedule Word A4" : "Tải Lịch Báo Giảng Word A4 (7 cột chuẩn CV 2345)"}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>{isEn ? "Schedule (.docx)" : "Tải LBG (.docx)"}</span>
            </button>

            {/* TKB Download */}
            <button
              onClick={handleExportTKBWord}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-white hover:bg-stone-100 text-black text-[11px] font-bold uppercase tracking-wider border border-black shadow-[1px_1px_0px_rgba(0,0,0,1)] transition-colors cursor-pointer"
              title={isEn ? "Download Timetable Word A4" : "Tải Thời Khóa Biểu Word A4"}
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>{isEn ? "Timetable (.docx)" : "Tải TKB (.docx)"}</span>
            </button>

            {/* Batch / Full Hub */}
            <button
              onClick={() => setIsWordExportModalOpen(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-stone-100 hover:bg-stone-200 text-stone-900 text-[11px] font-bold uppercase tracking-wider border border-stone-400 shadow-[1px_1px_0px_rgba(0,0,0,0.5)] transition-colors cursor-pointer"
              title={isEn ? "Open full export options modal" : "Mở Bảng Xuất Tùy Chọn Đầy Đủ"}
            >
              <Sliders className="w-3.5 h-3.5" />
              <span>{isEn ? "Export Options..." : "Tùy Chọn Khác..."}</span>
            </button>
          </div>
        </div>

        {/* Dedicated Thanh Đưa TKB Excel Lên (Tự Động Đồng Bộ TKB ➔ LBG ➔ KHBD) */}
        <TimetableSyncUploadBar
          currentTimetable={masterTimetable}
          schoolInfo={schoolInfo}
          scheduleItems={scheduleItems}
          lessonPlans={lessonPlans}
          onApplyTimetable={handleUpdateMasterTimetable}
          onForceRefresh={handleForceResyncAll}
          onOpenDetailedModal={() => setIsUploadTKBOpen(true)}
          onNavigateTab={(tabId) => setActiveTab(tabId)}
          isEn={isEn}
        />

        {/* Timetable Sync Alert Banner */}
        {syncBanner && (
          <div className="mb-6 p-3.5 bg-emerald-50 border-2 border-emerald-700 shadow-[3px_3px_0px_rgba(4,120,87,1)] flex items-center justify-between gap-3 animate-in fade-in duration-150">
            <div className="flex items-center gap-2.5 text-emerald-950 text-xs font-semibold font-serif">
              <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
              <span>{syncBanner}</span>
            </div>
            <button
              onClick={() => setSyncBanner(null)}
              className="text-stone-400 hover:text-black p-1 text-xs cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        )}

        {activeTab === "timetable" && (
          <TimetableManager
            masterTimetable={masterTimetable}
            onUpdateMasterTimetable={handleUpdateMasterTimetable}
            schoolInfo={schoolInfo}
            onSelectClass={handleSelectClass}
            onSelectTeacher={handleSelectTeacher}
            onOpenUploadModal={() => setIsUploadTKBOpen(true)}
            onExportWordTKB={handleExportTKBWord}
            lang={lang}
          />
        )}

        {activeTab === "schedule" && (
          <ScheduleView
            scheduleItems={scheduleItems}
            onUpdateScheduleItems={setScheduleItems}
            schoolInfo={schoolInfo}
            onExportDocx={handleExportScheduleDocx}
            onViewLessonPlan={(item) => {
              setActiveTab("lessonPlan");
            }}
            onOpenTeacherSelectModal={() => setIsTeacherSelectModalOpen(true)}
            lang={lang}
            onWeekChange={handleWeekChange}
          />
        )}

        {activeTab === "lessonPlan" && (
          <LessonPlanView
            lessonPlans={lessonPlans}
            onUpdateLessonPlans={setLessonPlans}
            schoolInfo={schoolInfo}
            onExportAllDocx={handleExportAllLessonPlansDocx}
            onExportSingleDocx={handleExportSingleLessonPlanDocx}
            onExportKHBDWithLBGFirstPage={handleExportWeeklyKHBDWithLBGFirstPage}
            onGenerateAIPlan={handleGenerateAIPlan}
            isGeneratingAI={isGeneratingAI}
            onOpenTeacherSelectModal={() => setIsTeacherSelectModalOpen(true)}
            availableClasses={DEFAULT_CLASSES}
            onSelectClass={handleSelectClass}
            onResyncAll={handleForceResyncAll}
            lang={lang}
            onToggleLang={handleToggleLang}
          />
        )}

        {activeTab === "syncHub" && (
          <TeacherSyncHub
            schoolInfo={schoolInfo}
            masterTimetable={masterTimetable}
            onSelectTeacher={handleSelectTeacher}
            onNavigateTab={(tab) => setActiveTab(tab)}
            onExportAllTeachersZip={handleExportAllTeachersZip}
            isExportingZip={zipProgress.isGenerating}
            lang={lang}
          />
        )}

        {activeTab === "integration" && <IntegrationReference lang={lang} />}
      </main>

      {/* Editorial Footer */}
      <footer className="bg-black text-white text-[10px] uppercase tracking-widest font-bold py-4 border-t border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span>{isEn ? "Source data: tailieugiaoduc.edu.vn" : "Dữ liệu nguồn: tailieugiaoduc.edu.vn"}</span>
            <span className="opacity-40">•</span>
            <span>{isEn ? "Standard Official Circular 2345/BGDĐT & Digital Competence 3456" : "Chuẩn CV 2345/BGDĐT & CV 3456 NLS"}</span>
          </div>
          <div className="flex items-center space-x-3 text-stone-400">
            <span>{isEn ? `Status: Synced Timetable Week ${schoolInfo.week}` : `Trạng thái: Đã khớp TKB Tuần ${schoolInfo.week}`}</span>
            <span className="opacity-40">•</span>
            <span className="text-white">{isEn ? `Export Word A4 (TKB • LBG • KHBD) Font ${schoolInfo.fontSize}pt` : `Xuất Word A4 (TKB • LBG • KHBD) Font ${schoolInfo.fontSize}pt`}</span>
          </div>
        </div>
      </footer>

      {/* Modal: Change Teacher / School / Branch / Class Info */}
      <ConfigModal
        isOpen={isConfigModalOpen}
        onClose={() => setIsConfigModalOpen(false)}
        schoolInfo={schoolInfo}
        onSave={handleUpdateSchoolInfo}
        availableClasses={masterTimetable.classes}
        lang={lang}
      />

      {/* Modal: Upload Timetable (Excel / Text / Preset) */}
      <UploadTKBModal
        isOpen={isUploadTKBOpen}
        onClose={() => setIsUploadTKBOpen(false)}
        onApplyTimetable={handleUpdateMasterTimetable}
        currentTimetable={masterTimetable}
        currentClass={schoolInfo.className}
        onNavigateToTab={(tab) => setActiveTab(tab)}
        lang={lang}
      />

      {/* Modal: Word A4 Export Hub for TKB, LBG, and KHBD */}
      <WordExportModal
        isOpen={isWordExportModalOpen}
        onClose={() => setIsWordExportModalOpen(false)}
        schoolInfo={schoolInfo}
        onUpdateSchoolInfo={handleUpdateSchoolInfo}
        masterTimetable={masterTimetable}
        scheduleItems={scheduleItems}
        lessonPlans={lessonPlans}
        onOpenTeacherSelectModal={() => setIsTeacherSelectModalOpen(true)}
        onExportAllTeachersZip={handleExportAllTeachersZip}
        lang={lang}
      />

      {/* Modal: Teacher Selection and Dedicated LBG/KHBD Generator */}
      <TeacherSelectModal
        isOpen={isTeacherSelectModalOpen}
        onClose={() => setIsTeacherSelectModalOpen(false)}
        currentTeacherName={schoolInfo.teacherName}
        onSelectTeacher={(teacherName) => {
          handleSelectTeacher(teacherName);
          setIsTeacherSelectModalOpen(false);
        }}
        masterTimetable={masterTimetable}
        schoolInfo={schoolInfo}
        lang={lang}
      />

      {/* Modal: Batch 18 Teachers ZIP Generation Progress */}
      {zipProgress.isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white border-2 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] max-w-lg w-full p-6 space-y-4">
            <div className="flex items-center justify-between border-b-2 border-black pb-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-amber-400 border border-black flex items-center justify-center text-black">
                  <Archive className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif font-black text-sm uppercase text-black">
                    {isEn ? "Batch Exporting All 18 Teachers (.ZIP)" : "Đang Xuất Trọn Bộ 18 Giáo Viên (.ZIP)"}
                  </h3>
                  <p className="text-[11px] text-stone-600 font-mono">
                    {isEn ? `Week ${schoolInfo.week} • 10 Homeroom + 8 Specialist` : `Tuần ${schoolInfo.week} • 10 GV Chủ nhiệm + 8 GV Bộ môn`}
                  </p>
                </div>
              </div>
              {!zipProgress.isGenerating && (
                <button
                  onClick={() => setZipProgress((prev) => ({ ...prev, isOpen: false }))}
                  className="p-1 hover:bg-stone-100 text-stone-600 hover:text-black cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>

            {/* Progress status & message */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-bold font-mono">
                <span className="flex items-center gap-1.5 text-stone-800 truncate max-w-[320px]">
                  {zipProgress.isGenerating ? (
                    <Loader2 className="w-3.5 h-3.5 animate-spin text-black shrink-0" />
                  ) : zipProgress.error ? (
                    <AlertCircle className="w-3.5 h-3.5 text-red-600 shrink-0" />
                  ) : (
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  )}
                  {zipProgress.teacherName ? `GV: ${zipProgress.teacherName}` : "Hệ thống"}
                </span>
                <span className="text-black font-mono text-sm">{zipProgress.percent}%</span>
              </div>

              {/* Progress bar */}
              <div className="w-full bg-stone-200 h-3 border border-black overflow-hidden">
                <div
                  className="bg-amber-400 h-full transition-all duration-200 border-r border-black"
                  style={{ width: `${zipProgress.percent}%` }}
                />
              </div>

              <p className="text-[11px] text-stone-600 font-serif leading-relaxed min-h-[30px]">
                {zipProgress.error ? (
                  <span className="text-red-600 font-bold">{zipProgress.error}</span>
                ) : (
                  zipProgress.message
                )}
              </p>
            </div>

            {/* File Structure Breakdown Preview */}
            <div className="bg-stone-50 border border-stone-300 p-3 text-[10px] space-y-1 font-mono text-stone-700">
              <div className="font-bold text-black flex items-center gap-1 font-sans">
                <Layers className="w-3 h-3 text-black" />
                <span>Cấu trúc gói nén chuẩn ban giám hiệu:</span>
              </div>
              <div className="pl-2">📁 00_Thoi_Khoa_Bieu_Toan_Truong.docx</div>
              <div className="pl-2">📁 1_Giao_Vien_Chu_Nhiem/ (10 lớp: 1A, 1B, 2A, 2B, 3A, 3B, 4A, 4B, 5A, 5B)</div>
              <div className="pl-4 text-stone-500">└─ TKB lớp + LBG tuần + KHBD kèm LBG trang 1</div>
              <div className="pl-2">📁 2_Giao_Vien_Bo_Mon_Chuyen/ (8 GV: Tiếng Anh, Tin học, Mỹ thuật, Âm nhạc, GDTC)</div>
              <div className="pl-4 text-stone-500">└─ TKB cá nhân + LBG tuần + KHBD kèm LBG trang 1</div>
            </div>

            {/* Completion / Actions */}
            <div className="pt-2 flex items-center justify-end gap-2 border-t border-stone-200">
              {zipProgress.done ? (
                <button
                  type="button"
                  onClick={() => setZipProgress((prev) => ({ ...prev, isOpen: false }))}
                  className="px-4 py-1.5 bg-black hover:bg-stone-800 text-white text-xs font-bold uppercase tracking-wider border border-black shadow-[2px_2px_0px_rgba(0,0,0,1)] cursor-pointer transition-colors"
                >
                  {isEn ? "Done (Downloaded)" : "Hoàn Tất (Đã Tải Xong)"}
                </button>
              ) : zipProgress.error ? (
                <button
                  type="button"
                  onClick={handleExportAllTeachersZip}
                  className="px-4 py-1.5 bg-red-600 hover:bg-red-700 text-white text-xs font-bold uppercase tracking-wider border border-black shadow-[2px_2px_0px_rgba(0,0,0,1)] cursor-pointer transition-colors"
                >
                  {isEn ? "Retry Export" : "Thử Lại"}
                </button>
              ) : (
                <span className="text-[11px] text-stone-500 font-serif italic">
                  {isEn ? "Please keep window open while generating..." : "Vui lòng giữ cửa sổ trong lúc hệ thống đóng gói..."}
                </span>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Floating Global Download Status Notification & Direct Link Fallback */}
      {exportStatus && (
        <div className="fixed bottom-6 right-6 z-50 max-w-md w-full bg-white border-2 border-black shadow-[6px_6px_0px_rgba(0,0,0,1)] p-4 animate-in fade-in slide-in-from-bottom-5 duration-200">
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-start gap-3">
              {exportStatus.loading ? (
                <div className="p-2 bg-black text-white shrink-0">
                  <Loader2 className="w-5 h-5 animate-spin" />
                </div>
              ) : exportStatus.error ? (
                <div className="p-2 bg-red-600 text-white shrink-0">
                  <AlertCircle className="w-5 h-5" />
                </div>
              ) : (
                <div className="p-2 bg-emerald-600 text-white shrink-0">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
              )}

              <div>
                <h4 className="font-serif font-bold text-sm text-black">
                  {exportStatus.loading
                    ? (isEn ? "Generating Word A4 file..." : "Đang tạo tệp Word A4...")
                    : exportStatus.error
                    ? (isEn ? "Export Failed" : "Không thể tải tệp")
                    : (isEn ? "Word A4 document ready!" : "Đã xuất xong tệp Word A4!")}
                </h4>
                <p className="text-xs text-stone-600 mt-0.5 font-medium">
                  {exportStatus.loading
                    ? (isEn ? `Composing ${exportStatus.title}, please wait a moment...` : `Đang biên soạn ${exportStatus.title}, vui lòng chờ trong giây lát...`)
                    : exportStatus.error
                    ? exportStatus.error
                    : `${isEn ? "File: " : "Tệp: "}${exportStatus.filename}`}
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setExportStatus(null)}
              className="p-1 hover:bg-stone-100 text-stone-500 hover:text-black transition-colors"
              title={isEn ? "Close notification" : "Đóng thông báo"}
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {!exportStatus.loading && !exportStatus.error && exportStatus.url && (
            <div className="mt-3 pt-3 border-t border-stone-200 flex flex-col gap-2">
              <div className="flex items-center justify-between gap-2">
                <span className="text-[11px] text-stone-600 font-serif">
                  {isEn ? "If download did not start automatically:" : "Nếu trình duyệt chưa tự tải xuống:"}
                </span>
                <a
                  href={exportStatus.url}
                  download={exportStatus.filename}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-black hover:bg-stone-800 text-white text-[11px] font-bold uppercase tracking-wider border border-black shadow-[1px_1px_0px_rgba(0,0,0,1)] transition-colors cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{isEn ? "Download To Computer" : "Bấm Lưu Về Máy Ngay"}</span>
                </a>
              </div>
              <p className="text-[10px] text-stone-500 italic">
                {isEn ? "* Ready-to-print standard A4 (.docx) compatible with Microsoft Word." : "* Tệp lưu chuẩn A4 (.docx) sẵn sàng mở bằng Microsoft Word để in ấn hoặc nộp BGH."}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
