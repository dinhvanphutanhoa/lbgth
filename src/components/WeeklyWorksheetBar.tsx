import React, { useState, useMemo, useEffect } from "react";
import {
  FileDown,
  ExternalLink,
  BookOpen,
  CheckCircle2,
  HelpCircle,
  Download,
  ChevronDown,
  ChevronUp,
  Sparkles,
  Printer,
  FileText,
  Languages,
  Check
} from "lucide-react";
import { SchoolInfo, LessonPlan } from "../types";
import {
  getAllWorksheetsForGradeAndWeek,
  SubjectWorksheet,
  WorksheetLanguage
} from "../data/weeklyWorksheetsData";
import {
  exportSingleWorksheetDocx,
  exportAllWorksheetsDocx
} from "../utils/worksheetDocxExporter";

interface WeeklyWorksheetBarProps {
  schoolInfo: SchoolInfo;
  lessonPlans: LessonPlan[];
  lang?: WorksheetLanguage;
  onToggleLang?: (newLang: WorksheetLanguage) => void;
}

export const WeeklyWorksheetBar: React.FC<WeeklyWorksheetBarProps> = ({
  schoolInfo,
  lessonPlans,
  lang: externalLang,
  onToggleLang,
}) => {
  const grade = Number(schoolInfo.grade) || 1;
  const week = Number(schoolInfo.week) || 1;

  // Language state (defaults to English 'en' per user request)
  const [currentLang, setCurrentLang] = useState<WorksheetLanguage>(() => {
    return externalLang || (localStorage.getItem("app_language") as WorksheetLanguage) || "en";
  });

  useEffect(() => {
    if (externalLang && externalLang !== currentLang) {
      setCurrentLang(externalLang);
    }
  }, [externalLang]);

  const handleSwitchLanguage = (newLang: WorksheetLanguage) => {
    setCurrentLang(newLang);
    localStorage.setItem("app_language", newLang);
    if (onToggleLang) {
      onToggleLang(newLang);
    }
  };

  const isEn = currentLang === "en";

  // Generate worksheets list for current grade, week, and language
  const worksheets = useMemo(() => {
    return getAllWorksheetsForGradeAndWeek(grade, week, lessonPlans, currentLang);
  }, [grade, week, lessonPlans, currentLang]);

  const [selectedSubjectKey, setSelectedSubjectKey] = useState<string>("english");
  const [isExpanded, setIsExpanded] = useState<boolean>(true);
  const [showAnswerKey, setShowAnswerKey] = useState<boolean>(false);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
  const [downloadingStatus, setDownloadingStatus] = useState<string | null>(null);

  // Active worksheet lookup
  const activeWorksheet = useMemo(() => {
    return (
      worksheets.find((w) => w.subjectKey === selectedSubjectKey) ||
      worksheets.find((w) => w.subject === selectedSubjectKey) ||
      worksheets[0]
    );
  }, [worksheets, selectedSubjectKey]);

  // Handle single download
  const handleDownloadSingle = async (ws: SubjectWorksheet) => {
    try {
      const msg = isEn
        ? `Generating Word document for ${ws.subject}...`
        : `Đang tạo Word môn ${ws.subject}...`;
      setDownloadingStatus(msg);
      await exportSingleWorksheetDocx(schoolInfo, ws);
      const successMsg = isEn
        ? `Successfully downloaded ${ws.subject} worksheet!`
        : `Đã tải xong phiếu ${ws.subject}!`;
      setDownloadingStatus(successMsg);
      setTimeout(() => setDownloadingStatus(null), 3000);
    } catch (err) {
      console.error(err);
      alert(isEn ? "Error generating Word worksheet. Please try again!" : "Lỗi khi tạo tệp Word phiếu bài tập. Vui lòng thử lại!");
      setDownloadingStatus(null);
    }
  };

  // Handle all worksheets download
  const handleDownloadAll = async () => {
    try {
      const msg = isEn
        ? `Generating full package of ${worksheets.length} subjects...`
        : `Đang tạo tệp trọn bộ ${worksheets.length} môn...`;
      setDownloadingStatus(msg);
      await exportAllWorksheetsDocx(schoolInfo, worksheets);
      const successMsg = isEn
        ? "Successfully downloaded all subjects package!"
        : "Đã tải xong trọn bộ tất cả các môn!";
      setDownloadingStatus(successMsg);
      setTimeout(() => setDownloadingStatus(null), 3500);
    } catch (err) {
      console.error(err);
      alert(isEn ? "Error generating full package Word document. Please try again!" : "Lỗi khi tạo tệp trọn bộ Word. Vui lòng thử lại!");
      setDownloadingStatus(null);
    }
  };

  const handleSelectOption = (questionId: string, optionLetter: string) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: optionLetter,
    }));
  };

  return (
    <div className="border-2 border-blue-950 bg-white shadow-[4px_4px_0px_rgba(30,58,138,0.18)] mb-6">
      {/* Main Header Bar */}
      <div className="bg-gradient-to-r from-blue-950 via-indigo-950 to-slate-950 text-white p-3.5 sm:p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-white/10 rounded border border-white/20">
            <BookOpen className="w-5 h-5 text-amber-300" />
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="font-bold text-sm sm:text-base uppercase tracking-wide flex items-center gap-1.5">
                <span>{isEn ? "Weekly Review Worksheets (Printable A4 Word)" : "Phiếu Bài Tập Cuối Tuần Chuẩn A4 Word"}</span>
                <span className="text-[10px] bg-amber-400 text-amber-950 px-2 py-0.5 font-mono font-bold rounded">
                  Loigiaihay.com
                </span>
              </span>
              <span className="text-xs bg-white/20 px-2 py-0.5 font-mono font-semibold">
                {isEn ? `Grade ${grade} • Week ${week}` : `Khối ${grade} • Tuần ${week}`}
              </span>
            </div>
            <p className="text-xs text-blue-200 mt-0.5">
              {isEn
                ? "Aligned with Primary Curriculum • Multiple-choice & Practice • Ready to Print A4 • Free Resources"
                : "Đồng bộ nội dung KHBD • Dạng trắc nghiệm & tự luận dễ in • Miễn phí tải tài liệu"}
            </p>
          </div>
        </div>

        {/* Global Action Buttons */}
        <div className="flex items-center gap-2 flex-wrap shrink-0">
          {/* Language Switcher Pill */}
          <div className="flex items-center border border-white/30 bg-black/40 rounded overflow-hidden shadow-inner p-0.5">
            <button
              onClick={() => handleSwitchLanguage("en")}
              className={`px-2 py-1 text-[11px] font-bold uppercase transition-colors flex items-center gap-1 rounded cursor-pointer ${
                isEn ? "bg-amber-400 text-amber-950 shadow-sm" : "text-white/80 hover:text-white"
              }`}
              title="Switch worksheets and UI to English"
            >
              <span>🇬🇧 English</span>
              {isEn && <Check className="w-3 h-3 text-amber-950" />}
            </button>
            <button
              onClick={() => handleSwitchLanguage("vi")}
              className={`px-2 py-1 text-[11px] font-bold uppercase transition-colors flex items-center gap-1 rounded cursor-pointer ${
                !isEn ? "bg-amber-400 text-amber-950 shadow-sm" : "text-white/80 hover:text-white"
              }`}
              title="Chuyển phiếu bài tập và giao diện sang Tiếng Việt"
            >
              <span>🇻🇳 Tiếng Việt</span>
              {!isEn && <Check className="w-3 h-3 text-amber-950" />}
            </button>
          </div>

          <button
            onClick={handleDownloadAll}
            className="px-3.5 py-1.5 bg-amber-400 hover:bg-amber-300 text-amber-950 text-xs font-bold uppercase border border-amber-600 shadow-[1px_1px_0px_rgba(0,0,0,0.5)] transition-all flex items-center gap-1.5 cursor-pointer active:translate-y-0.5"
            title={isEn ? "Download single Word file containing all subjects of the week" : "Tải 1 file Word chứa tất cả các môn trong tuần"}
          >
            <Download className="w-4 h-4 text-amber-950" />
            <span>{isEn ? "Download All Subjects (.docx)" : "Tải Trọn Bộ Các Môn (.docx)"}</span>
          </button>

          <a
            href={activeWorksheet.loigiaihayUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 bg-white hover:bg-stone-100 text-blue-950 text-xs font-bold uppercase border border-white shadow-[1px_1px_0px_rgba(0,0,0,0.3)] transition-all flex items-center gap-1.5"
            title="Open corresponding exercises on Loigiaihay.com"
          >
            <ExternalLink className="w-3.5 h-3.5 text-blue-950" />
            <span>{isEn ? "Loigiaihay Repository" : "Kho Loigiaihay"}</span>
          </a>

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-1.5 bg-blue-900 hover:bg-blue-800 text-white rounded border border-blue-700 transition-colors cursor-pointer"
            title={isExpanded ? (isEn ? "Collapse bar" : "Thu gọn thanh lệnh") : (isEn ? "Expand bar" : "Mở rộng thanh lệnh")}
          >
            {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Downloading Notification */}
      {downloadingStatus && (
        <div className="bg-amber-50 border-b border-amber-300 px-4 py-2 text-xs font-semibold text-amber-900 flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-amber-600 animate-spin" />
          <span>{downloadingStatus}</span>
        </div>
      )}

      {/* Expandable Content Area */}
      {isExpanded && (
        <div className="p-4 bg-stone-50/60 space-y-4">
          {/* Subject Navigation Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 border-b border-stone-300">
            <span className="text-xs font-bold uppercase text-stone-600 whitespace-nowrap mr-1">
              {isEn ? "Subjects:" : "Chọn Môn:"}
            </span>
            {worksheets.map((ws) => {
              const isSelected = ws.subjectKey === activeWorksheet.subjectKey;
              return (
                <button
                  key={ws.subjectKey}
                  onClick={() => {
                    setSelectedSubjectKey(ws.subjectKey);
                    setShowAnswerKey(false);
                  }}
                  className={`px-3 py-1.5 text-xs font-bold transition-all border shrink-0 flex items-center gap-1.5 cursor-pointer ${
                    isSelected
                      ? "bg-blue-950 text-white border-blue-950 shadow-[2px_2px_0px_rgba(0,0,0,1)]"
                      : "bg-white text-stone-800 border-stone-300 hover:bg-stone-100 hover:border-black"
                  }`}
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>{ws.subject}</span>
                  {ws.subjectKey === "english" && (
                    <span className="text-[9px] bg-amber-400 text-amber-950 px-1 py-0.2 font-mono font-bold rounded">
                      ★ TOP
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Active Worksheet Preview Box */}
          <div className="bg-white border border-black p-4 sm:p-5 space-y-4 shadow-[2px_2px_0px_rgba(0,0,0,0.05)]">
            {/* Header of Active Worksheet */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-stone-200 pb-3">
              <div>
                <h3 className="font-bold text-base text-blue-950 uppercase">
                  {activeWorksheet.title}
                </h3>
                <p className="text-xs text-stone-600 mt-0.5">
                  {activeWorksheet.subtitle} • {isEn ? "Time allowed:" : "Thời gian làm bài:"} {activeWorksheet.timeAllowedMinutes} {isEn ? "minutes" : "phút"}
                </p>
              </div>

              {/* Action Buttons for this specific subject */}
              <div className="flex items-center gap-2 flex-wrap">
                <button
                  onClick={() => handleDownloadSingle(activeWorksheet)}
                  className="px-3.5 py-1.5 bg-blue-950 hover:bg-blue-900 text-white text-xs font-bold uppercase border border-black shadow-[1px_1px_0px_rgba(0,0,0,1)] transition-colors flex items-center gap-1.5 cursor-pointer active:translate-y-0.5"
                  title={isEn ? "Download printable A4 Word (.docx) file" : "Tải file Word (.docx) chuẩn A4 dễ in cho học sinh làm bài"}
                >
                  <Printer className="w-3.5 h-3.5 text-amber-300" />
                  <span>{isEn ? "Download A4 Word" : "Tải Word A4 Dễ In"}</span>
                </button>

                <button
                  onClick={() => setShowAnswerKey(!showAnswerKey)}
                  className="px-3 py-1.5 bg-stone-100 hover:bg-stone-200 text-stone-900 text-xs font-bold uppercase border border-stone-400 shadow-[1px_1px_0px_rgba(0,0,0,0.5)] transition-colors flex items-center gap-1.5 cursor-pointer"
                  title={isEn ? "View answer key and grading guide" : "Xem đáp án và hướng dẫn chấm bài"}
                >
                  <HelpCircle className="w-3.5 h-3.5 text-blue-700" />
                  <span>
                    {showAnswerKey
                      ? (isEn ? "Hide Answers" : "Ẩn Đáp Án")
                      : (isEn ? "View Answers & Rubric" : "Xem Đáp Án & Hướng Dẫn")}
                  </span>
                </button>

                <a
                  href={activeWorksheet.loigiaihayUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 bg-white hover:bg-stone-100 text-blue-900 text-xs font-semibold border border-blue-300 shadow-[1px_1px_0px_rgba(0,0,0,0.2)] transition-colors flex items-center gap-1"
                  title="Loigiaihay"
                >
                  <ExternalLink className="w-3 h-3 text-blue-700" />
                  <span>Loigiaihay: {activeWorksheet.subject} {grade}</span>
                </a>
              </div>
            </div>

            {/* Answer Key Box (if opened) */}
            {showAnswerKey && (
              <div className="bg-emerald-50 border border-emerald-500 p-4 space-y-2 text-xs">
                <div className="flex items-center gap-1.5 font-bold text-emerald-950 uppercase text-xs">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                  <span>
                    {isEn
                      ? "Answer Key & Scoring Rubric (For Teachers & Parents)"
                      : "Đáp Án & Thang Điểm Tham Khảo (Giáo Viên & Phụ Huynh)"}
                  </span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-xs mt-2">
                    <thead>
                      <tr className="bg-emerald-100/70 border border-emerald-300 text-emerald-900">
                        <th className="p-1.5 border border-emerald-300">{isEn ? "Question / Ex" : "Câu / Bài"}</th>
                        <th className="p-1.5 border border-emerald-300">{isEn ? "Correct Answer" : "Đáp án đúng"}</th>
                        <th className="p-1.5 border border-emerald-300">{isEn ? "Score" : "Điểm"}</th>
                        <th className="p-1.5 border border-emerald-300">{isEn ? "Detailed Explanation / Guide" : "Giải thích / Gợi ý chấm"}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {activeWorksheet.part1_MultipleChoice.map((q, idx) => (
                        <tr key={q.id} className="border border-emerald-200">
                          <td className="p-1.5 font-bold border border-emerald-200">
                            {isEn ? `Q.${idx + 1}` : `Câu ${idx + 1}`}
                          </td>
                          <td className="p-1.5 font-bold text-emerald-900 border border-emerald-200">{q.correctAnswer}</td>
                          <td className="p-1.5 border border-emerald-200">{q.points || 1} {isEn ? "pt" : "đ"}</td>
                          <td className="p-1.5 border border-emerald-200 text-stone-700">{q.explanation}</td>
                        </tr>
                      ))}
                      {activeWorksheet.part2_PracticeOrEssay.map((q, idx) => (
                        <tr key={q.id} className="border border-emerald-200 bg-white/50">
                          <td className="p-1.5 font-bold border border-emerald-200">
                            {isEn ? `Ex.${idx + 1}` : `Bài ${idx + 1}`}
                          </td>
                          <td className="p-1.5 font-medium border border-emerald-200 text-stone-800" colSpan={2}>
                            {q.correctAnswer} ({q.points || 3} {isEn ? "pts" : "đ"})
                          </td>
                          <td className="p-1.5 border border-emerald-200 text-stone-700">{q.explanation}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Questions Preview List */}
            <div className="space-y-4">
              {/* Part 1: Multiple Choice */}
              <div className="space-y-3">
                <div className="bg-stone-100 px-3 py-1.5 border-l-4 border-blue-900 font-bold text-xs uppercase text-stone-900">
                  {isEn ? "I. Multiple Choice Questions" : "I. Phần Trắc Nghiệm Khách Quan"}
                </div>

                <div className="space-y-3 pl-1 sm:pl-2">
                  {activeWorksheet.part1_MultipleChoice.map((q, idx) => {
                    const chosen = selectedAnswers[q.id];
                    return (
                      <div key={q.id} className="text-xs space-y-1.5 bg-stone-50/70 p-3 border border-stone-200 rounded-xs">
                        <div className="font-semibold text-stone-900">
                          <span className="font-bold text-blue-900 mr-1">
                            {isEn ? `Question ${idx + 1}.` : `Câu ${idx + 1}.`}
                          </span>
                          {q.question}
                          {q.points && (
                            <span className="text-stone-500 text-[11px] ml-1.5">
                              ({q.points} {isEn ? "pts" : "điểm"})
                            </span>
                          )}
                        </div>

                        {q.options && (
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pt-1">
                            {q.options.map((opt) => {
                              const letter = opt.trim().charAt(0);
                              const isSelected = chosen === letter;
                              const isCorrect = showAnswerKey && q.correctAnswer === letter;

                              return (
                                <button
                                  key={opt}
                                  type="button"
                                  onClick={() => handleSelectOption(q.id, letter)}
                                  className={`text-left p-2 border text-xs transition-colors rounded-xs flex items-center justify-between cursor-pointer ${
                                    isSelected
                                      ? "bg-blue-100 border-blue-600 font-semibold text-blue-950"
                                      : isCorrect
                                      ? "bg-emerald-100 border-emerald-600 font-semibold text-emerald-950"
                                      : "bg-white border-stone-300 hover:bg-stone-100 text-stone-800"
                                  }`}
                                >
                                  <span>{opt}</span>
                                  {isSelected && (
                                    <span className="text-[10px] font-bold text-blue-700">
                                      {isEn ? "✓ Selected" : "✓ Đã chọn"}
                                    </span>
                                  )}
                                  {isCorrect && !isSelected && (
                                    <span className="text-[10px] font-bold text-emerald-700">
                                      {isEn ? "★ Correct" : "★ Đúng"}
                                    </span>
                                  )}
                                </button>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Part 2: Practice / Essay */}
              <div className="space-y-3">
                <div className="bg-stone-100 px-3 py-1.5 border-l-4 border-amber-600 font-bold text-xs uppercase text-stone-900">
                  {isEn ? "II. Practice & Problem Solving" : "II. Phần Tự Luận & Vận Dụng Thực Hành"}
                </div>

                <div className="space-y-3 pl-1 sm:pl-2">
                  {activeWorksheet.part2_PracticeOrEssay.map((q, idx) => (
                    <div key={q.id} className="text-xs space-y-2 bg-stone-50/70 p-3 border border-stone-200 rounded-xs">
                      <div className="font-semibold text-stone-900">
                        <span className="font-bold text-amber-900 mr-1">
                          {isEn ? `Exercise ${idx + 1}.` : `Bài ${idx + 1}.`}
                        </span>
                        {q.question}
                        {q.points && (
                          <span className="text-stone-500 text-[11px] ml-1.5">
                            ({q.points} {isEn ? "pts" : "điểm"})
                          </span>
                        )}
                      </div>

                      <div className="p-2.5 bg-white border border-dashed border-stone-300 rounded text-stone-400 font-mono text-[11px] select-none">
                        ...................................................................................................................................................................................................................
                        <br />
                        ...................................................................................................................................................................................................................
                        <br />
                        ...................................................................................................................................................................................................................
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Download Banner */}
            <div className="pt-2 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-stone-600">
              <span className="italic">
                {isEn
                  ? "Standard A4 printable layout, 2cm margins, clean typography for students to write answers directly."
                  : "Định dạng trang in chuẩn A4, lề 2cm, trình bày rõ ràng, học sinh có thể làm bài và ghi tên trực tiếp."}
              </span>
              <button
                onClick={() => handleDownloadSingle(activeWorksheet)}
                className="px-4 py-2 bg-blue-950 hover:bg-black text-white font-bold uppercase text-xs border border-black shadow-[2px_2px_0px_rgba(0,0,0,1)] transition-transform active:translate-y-0.5 flex items-center gap-1.5 shrink-0 cursor-pointer"
              >
                <FileDown className="w-4 h-4 text-amber-300" />
                <span>
                  {isEn
                    ? `Download Word File Now (${activeWorksheet.subject})`
                    : `Tải Ngay File Word (${activeWorksheet.subject})`}
                </span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
