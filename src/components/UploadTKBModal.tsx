import React, { useState } from "react";
import { MasterTimetable, DayOfWeek } from "../types";
import { DEFAULT_MASTER_TIMETABLE, DAYS_OF_WEEK, DEFAULT_CLASSES } from "../data/defaultTimetables";
import { 
  X, 
  UploadCloud, 
  FileSpreadsheet, 
  Sparkles, 
  CheckCircle2, 
  AlertCircle,
  FileText,
  Eye,
  RefreshCw,
  ArrowRight,
  HelpCircle
} from "lucide-react";
import * as XLSX from "xlsx";
import { parseTimetableText, parseExcelWorkbook, mergeTimetableSlots, ParsedTimetableResult } from "../utils/timetableParser";

interface UploadTKBModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApplyTimetable: (newTKB: MasterTimetable, targetClassName?: string) => void;
  currentTimetable: MasterTimetable;
  currentClass?: string;
  onNavigateToTab?: (tab: "timetable" | "schedule" | "lessonPlan") => void;
  lang?: "en" | "vi";
}

export const UploadTKBModal: React.FC<UploadTKBModalProps> = ({
  isOpen,
  onClose,
  onApplyTimetable,
  currentTimetable,
  currentClass = "1A",
  onNavigateToTab,
  lang = "en",
}) => {
  const isEn = lang === "en";
  const [activeMode, setActiveMode] = useState<"paste" | "file" | "preset">("file");
  const [pastedText, setPastedText] = useState("");
  const [selectedTargetClass, setSelectedTargetClass] = useState(currentClass);
  const [replaceMode, setReplaceMode] = useState<"merge" | "replace">("replace");
  const [schoolTitle, setSchoolTitle] = useState(currentTimetable.schoolName || "Trường Tiểu học");
  const [parseStatus, setParseStatus] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [parsedResult, setParsedResult] = useState<ParsedTimetableResult | null>(null);

  if (!isOpen) return null;

  // Handle parsing the pasted text for preview
  const handleAnalyzePastedText = () => {
    if (!pastedText.trim()) {
      setParseStatus("Vui lòng dán nội dung thời khóa biểu vào ô bên dưới.");
      setIsSuccess(false);
      return;
    }

    const result = parseTimetableText(pastedText, {
      fallbackClass: selectedTargetClass,
      existingTimetable: currentTimetable,
    });

    setParsedResult(result);

    if (result.success) {
      setParseStatus(result.summary);
      setIsSuccess(true);
      if (result.targetClass && currentTimetable.classes.includes(result.targetClass)) {
        setSelectedTargetClass(result.targetClass);
      }
    } else {
      setParseStatus(result.errorMessage || "Không thể phân tích dữ liệu đã dán. Vui lòng kiểm tra lại định dạng.");
      setIsSuccess(false);
    }
  };

  // Apply the parsed timetable and synchronize
  const handleApplyParsedResult = (resultToApply?: ParsedTimetableResult) => {
    const res = resultToApply || parsedResult;
    if (!res || !res.success) {
      // Try analyzing first
      if (pastedText.trim()) {
        const directRes = parseTimetableText(pastedText, {
          fallbackClass: selectedTargetClass,
          existingTimetable: currentTimetable,
        });
        if (directRes.success) {
          applyAndSync(directRes);
          return;
        }
      }
      setParseStatus("Chưa có kết quả phân tích hợp lệ để đồng bộ.");
      setIsSuccess(false);
      return;
    }

    applyAndSync(res);
  };

  const applyAndSync = (res: ParsedTimetableResult) => {
    const updatedTKB = mergeTimetableSlots(currentTimetable, res, replaceMode);
    updatedTKB.schoolName = schoolTitle || currentTimetable.schoolName;

    onApplyTimetable(updatedTKB, selectedTargetClass);

    setParseStatus(
      `Đồng bộ thành công! Thời khóa biểu, Lịch báo giảng (LBG) và Kế hoạch bài dạy (KHBD) cho Lớp ${selectedTargetClass} đã được cập nhật tự động.`
    );
    setIsSuccess(true);
  };

  // Handle Excel File Upload
  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      const buffer = await file.arrayBuffer();
      const result = parseExcelWorkbook(buffer, {
        fallbackClass: selectedTargetClass,
        existingTimetable: currentTimetable,
      });

      setParsedResult(result);

      if (result.success && result.totalSlots > 0) {
        const updatedTKB = mergeTimetableSlots(currentTimetable, result, replaceMode);
        updatedTKB.schoolName = schoolTitle || currentTimetable.schoolName;
        const targetCls =
          result.type === "school_grid"
            ? selectedTargetClass
            : result.targetClass || selectedTargetClass;
        onApplyTimetable(updatedTKB, targetCls);
        setParseStatus(
          `Đã phân tích thành công tệp Excel "${file.name}" (${result.totalSlots} tiết)! Hệ thống đã tự động đồng bộ sang Thời khóa biểu (TKB), Lịch báo giảng (LBG) và Kế hoạch bài dạy (KHBD).`
        );
        setIsSuccess(true);
      } else {
        setParseStatus(
          `Đã đọc tệp Excel nhưng không nhận diện được tiết học: ${
            result.errorMessage || "Vui lòng kiểm tra lại định dạng bảng tính."
          }`
        );
        setIsSuccess(false);
      }
    } catch (err: any) {
      setParseStatus(`Lỗi đọc tệp Excel: ${err?.message || "Không thể xử lý tệp"}`);
      setIsSuccess(false);
    }
  };

  // Load Presets
  const handleLoadPreset = (presetName: string) => {
    let chosenSchool = "Trường Tiểu học Tân Bình";
    let targetCls = selectedTargetClass || "1A";

    if (presetName === "tanbinh" || presetName === "tanthanh") {
      chosenSchool = "Trường Tiểu học Tân Bình";
    } else if (presetName === "quangtrung") {
      chosenSchool = "Trường TH&THCS Quang Trung";
    } else if (presetName === "chibi") {
      chosenSchool = "Trường Tiểu học Chibi";
    }

    const updated = {
      ...DEFAULT_MASTER_TIMETABLE,
      version: "2026_dinhvanphu_official_sync_v2",
      schoolName: chosenSchool,
      effectiveDate: "Áp dụng Tuần 3 - Từ ngày 21/09/2026 đến 25/09/2026",
    };

    onApplyTimetable(updated, targetCls);
    setParseStatus(`Đã tải và đồng bộ thành công TKB chuẩn: ${chosenSchool}. TKB, LBG và KHBD đã được làm mới!`);
    setIsSuccess(true);
    setParsedResult(null);
  };

  // Sample texts to help user
  const loadSampleClassText = () => {
    const sample = `Buổi\tTiết\tThứ Hai\tThứ Ba\tThứ Tư\tThứ Năm\tThứ Sáu
Sáng\t1\tChào cờ (HĐTN)\tToán\tToán\tTiếng Việt\tToán
Sáng\t2\tTiếng Việt\tTiếng Việt\tTiếng Việt\tTiếng Việt\tTiếng Việt
Sáng\t3\tTiếng Việt\tTiếng Việt\tTiếng Việt\tToán\tTiếng Việt
Sáng\t4\tToán\tTiếng Anh (Nương)\tTự nhiên & Xã hội\tTiếng Anh (Nương)\tĐạo đức
Sáng\t5\tHoạt động trải nghiệm\tGDTC (Thịnh)\tÂm nhạc (Tâm)\tMĩ thuật (Thy)\tHĐTN (SHL)
Chiều\t1\tTăng cường Tiếng Việt\tTăng cường Toán\tTăng cường Tiếng Việt\tSHCM\tKĩ năng sống
Chiều\t2\tTăng cường Toán\tTăng cường Tiếng Việt\tTăng cường Toán\tSHCM\tHoạt động trải nghiệm`;
    setPastedText(sample);
  };

  const loadSampleSchoolText = () => {
    const sample = `Thứ\tBuổi\tTiết\t1A\t1B\t2A\t2B\t3A\t3B\t4A\t4B\t5A\t5B
Thứ Hai\tSáng\t1\tCC\tCC\tCC\tCC\tCC\tCC\tCC\tCC\tCC\tCC
Thứ Hai\tSáng\t2\tTV\tTV\tT\tT\tTV\tTV\tT\tT\tTV\tTV
Thứ Hai\tSáng\t3\tTV\tTV\tTV\tTV\tT\tT\tTV\tTV\tT\tT
Thứ Hai\tSáng\t4\tT\tT\tTA\tTA\tTNXH\tTNXH\tLS&ĐL\tLS&ĐL\tKH\tKH
Thứ Hai\tSáng\t5\tHĐTN\tHĐTN\tGDTC\tGDTC\tAN\tAN\tMT\tMT\tGDTC\tGDTC`;
    setPastedText(sample);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 font-serif">
      <div className="bg-white border-2 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] w-full max-w-3xl overflow-hidden flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="px-6 py-4 bg-black text-white flex items-center justify-between border-b-2 border-black shrink-0">
          <div className="flex items-center space-x-2.5">
            <div className="p-1.5 bg-white text-black border border-white">
              <UploadCloud className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-sm text-white uppercase tracking-wider">
                {isEn ? "Import & Synchronize Timetable" : "Đưa TKB Mới Lên & Đồng Bộ Toàn Hệ Thống"}
              </h3>
              <p className="text-[11px] text-stone-400 font-serif">
                {isEn
                  ? "Paste timetable text or upload file to sync Timetable, Schedule (LBG), and Lesson Plans (KHBD)"
                  : "Dán bảng hoặc tải tệp TKB để tự động đồng bộ Thời khóa biểu, Lịch báo giảng và KHBD"}
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

        {/* Content Body */}
        <div className="p-6 space-y-5 overflow-y-auto flex-1 font-serif">
          {/* Mode Switcher */}
          <div className="flex border border-black bg-white overflow-hidden shadow-[1px_1px_0px_rgba(0,0,0,1)] text-xs font-bold uppercase tracking-wider shrink-0">
            <button
              onClick={() => setActiveMode("paste")}
              className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 transition-colors border-r border-black cursor-pointer ${
                activeMode === "paste" ? "bg-black text-white" : "bg-white text-stone-700 hover:bg-stone-100"
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>{isEn ? "1. Paste Timetable Table" : "1. Dán Bảng TKB (Khuyên Dùng)"}</span>
            </button>

            <button
              onClick={() => setActiveMode("file")}
              className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 transition-colors border-r border-black cursor-pointer ${
                activeMode === "file" ? "bg-black text-white" : "bg-white text-stone-700 hover:bg-stone-100"
              }`}
            >
              <FileSpreadsheet className="w-3.5 h-3.5" />
              <span>{isEn ? "2. Upload Excel File" : "2. Tải Tệp Excel"}</span>
            </button>

            <button
              onClick={() => setActiveMode("preset")}
              className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 transition-colors cursor-pointer ${
                activeMode === "preset" ? "bg-black text-white" : "bg-white text-stone-700 hover:bg-stone-100"
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{isEn ? "3. Standard Presets" : "3. Mẫu TKB Có Sẵn"}</span>
            </button>
          </div>

          {/* Mode 1: Paste Raw Data */}
          {activeMode === "paste" && (
            <div className="space-y-4">
              {/* Target Class & Merge Mode Selection */}
              <div className="p-3 bg-stone-50 border border-black flex flex-wrap items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2">
                  <span className="font-bold uppercase tracking-wider text-black text-[11px]">
                    {isEn ? "Target Class:" : "Áp dụng cho Lớp:"}
                  </span>
                  <select
                    value={selectedTargetClass}
                    onChange={(e) => setSelectedTargetClass(e.target.value)}
                    className="px-2.5 py-1 bg-white border border-black font-bold text-black focus:outline-none shadow-[1px_1px_0px_rgba(0,0,0,1)] cursor-pointer"
                  >
                    {currentTimetable.classes.map((c) => (
                      <option key={c} value={c}>
                        Lớp {c}
                      </option>
                    ))}
                  </select>
                  <span className="text-[10px] text-stone-500 italic">
                    (Hoặc tự động nhận diện nếu dán bảng toàn trường)
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="font-bold uppercase tracking-wider text-stone-700 text-[10px]">
                    {isEn ? "Mode:" : "Cơ chế:"}
                  </span>
                  <select
                    value={replaceMode}
                    onChange={(e) => setReplaceMode(e.target.value as any)}
                    className="px-2 py-1 bg-white border border-black text-xs font-semibold text-black focus:outline-none cursor-pointer"
                  >
                    <option value="merge">Cập nhật & Ghi đè (Giữ các lớp khác)</option>
                    <option value="replace">Thay thế hoàn toàn bảng TKB</option>
                  </select>
                </div>
              </div>

              {/* Paste Textarea */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="block text-[11px] uppercase font-bold tracking-wider text-black">
                    {isEn ? "Paste table cells from Excel, Word, or text:" : "Dán bảng thời khóa biểu từ Excel, Word hoặc văn bản vào đây:"}
                  </label>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={loadSampleClassText}
                      className="text-[10px] text-stone-600 hover:text-black underline cursor-pointer"
                    >
                      Dán mẫu Lớp 1A
                    </button>
                    <span className="text-stone-300">•</span>
                    <button
                      type="button"
                      onClick={loadSampleSchoolText}
                      className="text-[10px] text-stone-600 hover:text-black underline cursor-pointer"
                    >
                      Dán mẫu Toàn trường
                    </button>
                  </div>
                </div>

                <textarea
                  rows={6}
                  value={pastedText}
                  onChange={(e) => {
                    setPastedText(e.target.value);
                    setParsedResult(null);
                    setParseStatus(null);
                  }}
                  placeholder={`Ví dụ sao chép từ Excel hoặc Word:\nBuổi\tTiết\tThứ Hai\tThứ Ba\tThứ Tư\tThứ Năm\tThứ Sáu\nSáng\t1\tChào cờ\tToán\tToán\tTiếng Việt\tToán\nSáng\t2\tTiếng Việt\tTiếng Việt\tTiếng Việt\tTiếng Việt\tTiếng Việt\n...`}
                  className="w-full px-3 py-2 text-xs font-mono border border-black bg-stone-50 focus:outline-none focus:bg-white leading-relaxed"
                />
              </div>

              {/* Action Buttons: Analyze & Sync */}
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={handleAnalyzePastedText}
                  className="flex-1 py-2 bg-white hover:bg-stone-100 text-black text-xs font-bold uppercase tracking-wider border border-black shadow-[2px_2px_0px_rgba(0,0,0,1)] transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Eye className="w-4 h-4" />
                  <span>{isEn ? "1. Analyze & Preview" : "1. Phân Tích & Xem Trước"}</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleApplyParsedResult()}
                  className="flex-1 py-2 bg-black hover:bg-stone-800 text-white text-xs font-bold uppercase tracking-wider border border-black shadow-[2px_2px_0px_rgba(0,0,0,1)] transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <RefreshCw className="w-4 h-4 text-emerald-400" />
                  <span>{isEn ? "2. Synchronize to TKB, LBG & KHBD" : "2. Đồng Bộ Sang TKB, LBG & KHBD"}</span>
                </button>
              </div>

              {/* Parsed Result Preview Card */}
              {parsedResult && parsedResult.success && (
                <div className="p-4 border-2 border-black bg-stone-50 space-y-3 animate-in fade-in duration-150">
                  <div className="flex items-center justify-between border-b border-black pb-2">
                    <div className="flex items-center gap-2">
                      <span className="bg-black text-white text-[10px] font-bold uppercase px-2 py-0.5">
                        {parsedResult.type === "school_grid" ? "TKB Toàn Trường" : `Lớp ${parsedResult.targetClass}`}
                      </span>
                      <span className="text-xs font-bold text-black">
                        Đã trích xuất thành công {parsedResult.totalSlots} tiết học
                      </span>
                    </div>
                    <span className="text-[11px] text-stone-600 italic font-mono">
                      {parsedResult.type === "class_grid" ? "Dạng bảng 5 ngày" : parsedResult.type === "school_grid" ? "Dạng phân công theo lớp" : "Dạng danh sách"}
                    </span>
                  </div>

                  {/* Mini Preview Table */}
                  <div className="overflow-x-auto border border-black bg-white max-h-48 text-xs">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-stone-100 text-black text-[10px] font-bold uppercase border-b border-black">
                          <th className="p-1.5 border-r border-black text-center w-14">Buổi</th>
                          <th className="p-1.5 border-r border-black text-center w-12">Tiết</th>
                          <th className="p-1.5 border-r border-black text-center w-14">Lớp</th>
                          <th className="p-1.5 border-r border-black">Thứ</th>
                          <th className="p-1.5">Môn Học Nhận Diện</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-stone-200 font-mono text-[11px]">
                        {parsedResult.previewRows.slice(0, 15).map((row, idx) => (
                          <tr key={idx} className={idx % 2 === 0 ? "bg-stone-50/50" : "bg-white"}>
                            <td className="p-1.5 border-r border-stone-300 text-center font-bold">{row.session}</td>
                            <td className="p-1.5 border-r border-stone-300 text-center">{row.period}</td>
                            <td className="p-1.5 border-r border-stone-300 text-center font-bold">{row.className}</td>
                            <td className="p-1.5 border-r border-stone-300">{row.day}</td>
                            <td className="p-1.5 font-bold text-black">{row.subject}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  {parsedResult.previewRows.length > 15 && (
                    <p className="text-[10px] text-stone-500 italic text-right">
                      ... và {parsedResult.previewRows.length - 15} tiết khác.
                    </p>
                  )}

                  <div className="pt-2 flex justify-end">
                    <button
                      type="button"
                      onClick={() => handleApplyParsedResult(parsedResult)}
                      className="px-4 py-1.5 bg-black text-white hover:bg-stone-800 text-xs font-bold uppercase tracking-wider border border-black shadow-[2px_2px_0px_rgba(0,0,0,1)] flex items-center gap-2 cursor-pointer"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span>Xác Nhận & Đồng Bộ Ngay</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Mode 2: File Upload */}
          {activeMode === "file" && (
            <div className="space-y-4">
              <div className="border-2 border-dashed border-black bg-stone-50 p-8 text-center hover:bg-stone-100 transition-colors cursor-pointer relative">
                <input
                  type="file"
                  accept=".xlsx, .xls, .csv"
                  onChange={handleFileUpload}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                <div className="w-10 h-10 bg-white border border-black flex items-center justify-center mx-auto mb-3 shadow-[1px_1px_0px_rgba(0,0,0,1)] text-black">
                  <FileSpreadsheet className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-sm text-black mb-1 uppercase tracking-tight">
                  {isEn ? "Click or Drag & Drop Timetable Excel file here" : "Nhấp hoặc Kéo thả tệp Excel TKB vào đây"}
                </h4>
                <p className="text-xs text-stone-600 max-w-sm mx-auto font-serif">
                  {isEn
                    ? "Supports school-wide or grade-specific timetable spreadsheets (.xlsx, .xls, .csv)"
                    : "Hệ thống hỗ trợ tệp bảng tính thời khóa biểu toàn trường hoặc từng khối lớp (.xlsx, .xls, .csv)"}
                </p>
              </div>

              {parsedResult && parsedResult.previewRows.length > 0 && (
                <div className="border border-black bg-stone-50 p-3 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase text-black">
                      {isEn ? "Excel Data Preview" : "Xem Trước Dữ Liệu Tệp Excel Đã Nhận Diện"} ({parsedResult.previewRows.length} {isEn ? "slots" : "tiết"}):
                    </span>
                    <button
                      type="button"
                      onClick={() => handleApplyParsedResult()}
                      className="px-3 py-1 bg-black text-white hover:bg-stone-800 text-xs font-bold uppercase tracking-wider border border-black shadow-[1px_1px_0px_rgba(0,0,0,1)] flex items-center gap-1.5 cursor-pointer"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Xác Nhận &amp; Đồng Bộ Lại</span>
                    </button>
                  </div>
                  <div className="max-h-48 overflow-y-auto border border-stone-300 bg-white text-xs">
                    <table className="w-full text-left border-collapse">
                      <thead className="bg-stone-100 text-[11px] font-bold border-b border-stone-300 uppercase">
                        <tr>
                          <th className="p-1.5 border-r border-stone-300">Thứ</th>
                          <th className="p-1.5 border-r border-stone-300">Buổi</th>
                          <th className="p-1.5 border-r border-stone-300">Tiết</th>
                          <th className="p-1.5 border-r border-stone-300">Lớp</th>
                          <th className="p-1.5">Môn Học</th>
                        </tr>
                      </thead>
                      <tbody>
                        {parsedResult.previewRows.slice(0, 30).map((r, i) => (
                          <tr key={i} className="border-b border-stone-200 hover:bg-stone-50">
                            <td className="p-1.5 border-r border-stone-200">{r.day}</td>
                            <td className="p-1.5 border-r border-stone-200">{r.session}</td>
                            <td className="p-1.5 border-r border-stone-200">{r.period}</td>
                            <td className="p-1.5 border-r border-stone-200 font-bold">{r.className}</td>
                            <td className="p-1.5 font-medium">{r.subject}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Mode 3: Presets */}
          {activeMode === "preset" && (
            <div className="space-y-3 font-serif">
              <label className="block text-[11px] uppercase font-bold tracking-wider text-black">
                {isEn ? "Select digitized school timetable preset:" : "Chọn mẫu Thời khóa biểu chuẩn đã số hóa:"}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <button
                  type="button"
                  onClick={() => handleLoadPreset("tanthanh")}
                  className="p-3.5 border border-black bg-white hover:bg-stone-100 text-left transition-all shadow-[2px_2px_0px_rgba(0,0,0,1)] cursor-pointer group"
                >
                  <div className="font-bold text-xs text-black group-hover:underline">
                    TH Đinh Văn Phu (21/09/2026)
                  </div>
                  <div className="text-[11px] text-stone-600 mt-1 font-serif">
                    Thời khóa biểu mới áp dụng Tuần 3 từ 21/9/2026, phân công toàn trường.
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => handleLoadPreset("quangtrung")}
                  className="p-3.5 border border-black bg-white hover:bg-stone-100 text-left transition-all shadow-[2px_2px_0px_rgba(0,0,0,1)] cursor-pointer group"
                >
                  <div className="font-bold text-xs text-black group-hover:underline">
                    TH&THCS Quang Trung
                  </div>
                  <div className="text-[11px] text-stone-600 mt-1 font-serif">
                    Khung giáo dục tiểu học 2 buổi/ngày kèm các tiết tăng cường.
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => handleLoadPreset("chibi")}
                  className="p-3.5 border border-black bg-white hover:bg-stone-100 text-left transition-all shadow-[2px_2px_0px_rgba(0,0,0,1)] cursor-pointer group"
                >
                  <div className="font-bold text-xs text-black group-hover:underline">
                    Tiểu học Chibi
                  </div>
                  <div className="text-[11px] text-stone-600 mt-1 font-serif">
                    Định mức 25 tiết chính khóa + 6 tiết tăng cường / bồi dưỡng.
                  </div>
                </button>
              </div>
            </div>
          )}

          {/* Status Message */}
          {parseStatus && (
            <div
              className={`p-3.5 text-xs flex items-start gap-2.5 border-2 border-black ${
                isSuccess
                  ? "bg-emerald-50 text-emerald-950 shadow-[2px_2px_0px_rgba(0,0,0,1)]"
                  : "bg-amber-50 text-amber-950 shadow-[2px_2px_0px_rgba(0,0,0,1)]"
              }`}
            >
              {isSuccess ? (
                <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
              ) : (
                <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
              )}
              <div className="space-y-1">
                <span className="font-serif font-semibold">{parseStatus}</span>
                {isSuccess && (
                  <div className="flex items-center gap-3 pt-1 text-[11px] font-bold uppercase">
                    {onNavigateToTab && (
                      <>
                        <button
                          type="button"
                          onClick={() => {
                            onClose();
                            onNavigateToTab("schedule");
                          }}
                          className="underline hover:text-black cursor-pointer flex items-center gap-1"
                        >
                          Xem Lịch báo giảng (LBG) <ArrowRight className="w-3 h-3" />
                        </button>
                        <span>•</span>
                        <button
                          type="button"
                          onClick={() => {
                            onClose();
                            onNavigateToTab("lessonPlan");
                          }}
                          className="underline hover:text-black cursor-pointer flex items-center gap-1"
                        >
                          Xem Kế hoạch bài dạy (KHBD) <ArrowRight className="w-3 h-3" />
                        </button>
                      </>
                    )}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 bg-stone-100 border-t-2 border-black flex items-center justify-between font-serif shrink-0">
          <span className="text-[11px] text-stone-600">
            {isEn
              ? "All timetable changes are automatically backed up to local storage."
              : "Mọi thay đổi TKB được lưu cục bộ an toàn và tự động đồng bộ sang LBG và KHBD."}
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-bold uppercase tracking-wider bg-black text-white hover:bg-stone-800 border border-black transition-colors cursor-pointer"
          >
            {isEn ? "Close" : "Đóng"}
          </button>
        </div>
      </div>
    </div>
  );
};
