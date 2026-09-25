import * as XLSX from "xlsx";
import { DayOfWeek, MasterTimetable, Grade } from "../types";
import { DAYS_OF_WEEK, DEFAULT_CLASSES } from "../data/defaultTimetables";

export interface ParsedTimetableResult {
  success: boolean;
  type: "class_grid" | "day_rows_grid" | "school_grid" | "list" | "unknown";
  detectedClasses: string[];
  targetClass: string;
  totalSlots: number;
  slots: Record<string, Record<string, string>>;
  summary: string;
  previewRows: {
    day: DayOfWeek;
    session: "Sáng" | "Chiều";
    period: number;
    subject: string;
    className: string;
  }[];
  errorMessage?: string;
  sheetName?: string;
}

// Remove Vietnamese accents for resilient keyword matching
export function removeVietnameseTones(str: string): string {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D")
    .toLowerCase();
}

// Normalize Vietnamese day string with support for abbreviations, dates, and unaccented text
export function normalizeDayOfWeek(str: string): DayOfWeek | null {
  if (!str) return null;
  const clean = str.toLowerCase().trim();
  const raw = removeVietnameseTones(clean);

  // Thứ Hai
  if (
    clean.includes("thứ hai") ||
    clean.includes("thứ 2") ||
    raw.includes("thu hai") ||
    raw.includes("thu 2") ||
    clean.startsWith("t2") ||
    clean.startsWith("t.hai") ||
    clean.startsWith("t.2") ||
    clean === "hai" ||
    clean.includes("monday") ||
    clean.includes("mon")
  ) {
    return "Thứ Hai";
  }

  // Thứ Ba
  if (
    clean.includes("thứ ba") ||
    clean.includes("thứ 3") ||
    raw.includes("thu ba") ||
    raw.includes("thu 3") ||
    clean.startsWith("t3") ||
    clean.startsWith("t.ba") ||
    clean.startsWith("t.3") ||
    clean === "ba" ||
    clean.includes("tuesday") ||
    clean.includes("tue")
  ) {
    return "Thứ Ba";
  }

  // Thứ Tư
  if (
    clean.includes("thứ tư") ||
    clean.includes("thứ 4") ||
    clean.includes("thứ bốn") ||
    raw.includes("thu tu") ||
    raw.includes("thu 4") ||
    raw.includes("thu bon") ||
    clean.startsWith("t4") ||
    clean.startsWith("t.tư") ||
    clean.startsWith("t.tu") ||
    clean.startsWith("t.4") ||
    clean === "tư" ||
    clean === "tu" ||
    clean.includes("wednesday") ||
    clean.includes("wed")
  ) {
    return "Thứ Tư";
  }

  // Thứ Năm
  if (
    clean.includes("thứ năm") ||
    clean.includes("thứ 5") ||
    raw.includes("thu nam") ||
    raw.includes("thu 5") ||
    clean.startsWith("t5") ||
    clean.startsWith("t.năm") ||
    clean.startsWith("t.nam") ||
    clean.startsWith("t.5") ||
    clean === "năm" ||
    clean === "nam" ||
    clean.includes("thursday") ||
    clean.includes("thu")
  ) {
    return "Thứ Năm";
  }

  // Thứ Sáu
  if (
    clean.includes("thứ sáu") ||
    clean.includes("thứ 6") ||
    raw.includes("thu sau") ||
    raw.includes("thu 6") ||
    clean.startsWith("t6") ||
    clean.startsWith("t.sáu") ||
    clean.startsWith("t.sau") ||
    clean.startsWith("t.6") ||
    clean === "sáu" ||
    clean === "sau" ||
    clean.includes("friday") ||
    clean.includes("fri")
  ) {
    return "Thứ Sáu";
  }

  return null;
}

// Normalize session (Sáng / Chiều)
export function normalizeSession(str: string, periodNumber?: number): "Sáng" | "Chiều" {
  if (!str) {
    if (periodNumber !== undefined && periodNumber > 5) return "Chiều";
    return "Sáng";
  }
  const clean = str.toLowerCase().trim();
  const raw = removeVietnameseTones(clean);

  if (
    clean.includes("chiều") ||
    raw.includes("chieu") ||
    clean.includes("afternoon") ||
    clean.includes("pm") ||
    clean === "c"
  ) {
    return "Chiều";
  }
  if (
    clean.includes("sáng") ||
    raw.includes("sang") ||
    clean.includes("morning") ||
    clean.includes("am") ||
    clean === "s"
  ) {
    return "Sáng";
  }
  if (periodNumber !== undefined && periodNumber > 5) {
    return "Chiều";
  }
  return "Sáng";
}

// Clean subject name
export function cleanSubjectName(raw: string): string {
  if (!raw) return "";
  let s = String(raw).replace(/^[-\t\s,;|*•]+/, "").replace(/[-\t\s,;|*•]+$/, "").trim();
  // Strip leading numbers like "1. ", "Tiết 1: "
  s = s.replace(/^(?:tiết\s*\d+\s*[:.-]\s*|\d+\s*[:.)-]\s*)/i, "").trim();
  if (s === "-" || s === "—" || s === "--" || s === "X" || s === "x") return "";
  return s;
}

// Detect class name from string (e.g. "1A", "Lớp 2B", "5C")
export function detectClassFromString(str: string): string | null {
  if (!str) return null;
  const match = str.match(/(?:Lớp|Khối|Class)?\s*([1-5][A-Za-z0-9_/-]*)/i);
  if (match && match[1]) {
    return match[1].toUpperCase().trim();
  }
  return null;
}

/**
 * Universal Grid Parser for Timetables (2D Array of string cells)
 * Handles:
 * 1. CLASS_GRID (Days in columns, Periods in rows)
 * 2. DAY_ROWS_GRID (Days in rows, Periods in columns)
 * 3. SCHOOL_GRID (Classes in columns, Days/Periods in rows)
 * 4. TABLE_SCHEDULE (Day, Session, Period, Subject column list)
 */
export function parseTimetableGrid(
  rawGrid: string[][],
  options: {
    fallbackClass?: string;
    existingTimetable?: MasterTimetable;
  } = {}
): ParsedTimetableResult {
  // 1. Clean grid and filter completely empty rows
  const grid: string[][] = rawGrid
    .map((row) => (row || []).map((cell) => String(cell ?? "").trim()))
    .filter((row) => row.some((c) => c.length > 0));

  if (grid.length === 0) {
    return {
      success: false,
      type: "unknown",
      detectedClasses: [],
      targetClass: options.fallbackClass || "1A",
      totalSlots: 0,
      slots: {},
      summary: "Bảng dữ liệu trống, không tìm thấy hàng nào chứa nội dung.",
      previewRows: [],
      errorMessage: "Dữ liệu bảng trống.",
    };
  }

  // 2. Scan for class name mention in the first 10 rows (e.g. "Thời khóa biểu Lớp 1A")
  let textClassHint: string | null = null;
  for (let r = 0; r < Math.min(10, grid.length); r++) {
    const rowText = grid[r].join(" ");
    const found = detectClassFromString(rowText);
    if (found) {
      textClassHint = found;
      break;
    }
  }

  const defaultTargetClass = (textClassHint || options.fallbackClass || "1A").toUpperCase().trim();

  // =========================================================================
  // CHECK 1: CLASS_GRID (Days are Columns: Thứ 2 -> Thứ 6)
  // =========================================================================
  let dayColumnHeaderIdx = -1;
  let dayColMap: { colIdx: number; day: DayOfWeek }[] = [];

  for (let r = 0; r < Math.min(25, grid.length); r++) {
    const row = grid[r];
    const matchedDays: { colIdx: number; day: DayOfWeek }[] = [];
    row.forEach((cell, cIdx) => {
      const d = normalizeDayOfWeek(cell);
      if (d) {
        matchedDays.push({ colIdx: cIdx, day: d });
      }
    });

    if (matchedDays.length >= 3) {
      dayColumnHeaderIdx = r;
      dayColMap = matchedDays;
      break;
    }
  }

  if (dayColumnHeaderIdx !== -1 && dayColMap.length >= 3) {
    const slots: Record<string, Record<string, string>> = {};
    const previewRows: ParsedTimetableResult["previewRows"] = [];
    let currentSession: "Sáng" | "Chiều" = "Sáng";
    let periodCounter = 1;

    for (let r = dayColumnHeaderIdx + 1; r < grid.length; r++) {
      const row = grid[r];
      if (!row || row.length === 0) continue;

      const fullLineText = row.join(" ").toLowerCase();
      if (fullLineText.includes("chiều") && !fullLineText.includes("sáng")) {
        currentSession = "Chiều";
        periodCounter = 1;
      } else if (fullLineText.includes("sáng") && !fullLineText.includes("chiều")) {
        currentSession = "Sáng";
        periodCounter = 1;
      }

      // Check for period number in the row's first 3 columns
      let rowPeriod = periodCounter;
      for (let c = 0; c < Math.min(4, row.length); c++) {
        const val = row[c];
        const numMatch = val.match(/(?:tiết\s*)?([1-8])/i);
        if (numMatch && numMatch[1]) {
          const parsedNum = parseInt(numMatch[1], 10);
          if (parsedNum >= 1 && parsedNum <= 8) {
            if (parsedNum > 5) {
              currentSession = "Chiều";
              rowPeriod = parsedNum - 5;
            } else {
              rowPeriod = parsedNum;
            }
            break;
          }
        }
      }

      // Read cells for each day
      let hasDataInRow = false;
      dayColMap.forEach(({ colIdx, day }) => {
        const rawCell = row[colIdx];
        if (rawCell) {
          const cleanSubject = cleanSubjectName(rawCell);
          if (cleanSubject) {
            const slotKey = `${day}_${currentSession}_${rowPeriod}`;
            if (!slots[slotKey]) slots[slotKey] = {};
            slots[slotKey][defaultTargetClass] = cleanSubject;

            previewRows.push({
              day,
              session: currentSession,
              period: rowPeriod,
              subject: cleanSubject,
              className: defaultTargetClass,
            });
            hasDataInRow = true;
          }
        }
      });

      if (hasDataInRow) {
        periodCounter = (rowPeriod % 5) + 1;
      }
    }

    if (previewRows.length > 0) {
      return {
        success: true,
        type: "class_grid",
        detectedClasses: [defaultTargetClass],
        targetClass: defaultTargetClass,
        totalSlots: previewRows.length,
        slots,
        summary: `Đã nhận diện thành công Thời khóa biểu Lớp ${defaultTargetClass} (Cột Thứ: ${previewRows.length} tiết).`,
        previewRows,
      };
    }
  }

  // =========================================================================
  // CHECK 2: DAY_ROWS_GRID (Days are Rows, Period numbers are Columns)
  // E.g., Col A = Thứ, Col B = Buổi, Col C = Tiết 1, Col D = Tiết 2...
  // =========================================================================
  let periodHeaderRowIdx = -1;
  let periodColMap: { colIdx: number; period: number; sessionHint?: "Sáng" | "Chiều" }[] = [];

  for (let r = 0; r < Math.min(25, grid.length); r++) {
    const row = grid[r];
    const matchedPeriods: { colIdx: number; period: number; sessionHint?: "Sáng" | "Chiều" }[] = [];
    row.forEach((cell, cIdx) => {
      const match = cell.match(/(?:tiết\s*|t\s*)([1-8])/i) || cell.match(/^([1-8])$/);
      if (match && match[1]) {
        const pNum = parseInt(match[1], 10);
        if (pNum >= 1 && pNum <= 8) {
          matchedPeriods.push({
            colIdx: cIdx,
            period: pNum > 5 ? pNum - 5 : pNum,
            sessionHint: pNum > 5 ? "Chiều" : "Sáng",
          });
        }
      }
    });

    if (matchedPeriods.length >= 3) {
      periodHeaderRowIdx = r;
      periodColMap = matchedPeriods;
      break;
    }
  }

  if (periodHeaderRowIdx !== -1 && periodColMap.length >= 3) {
    const slots: Record<string, Record<string, string>> = {};
    const previewRows: ParsedTimetableResult["previewRows"] = [];
    let currentDay: DayOfWeek = "Thứ Hai";
    let currentSession: "Sáng" | "Chiều" = "Sáng";

    for (let r = periodHeaderRowIdx + 1; r < grid.length; r++) {
      const row = grid[r];
      if (!row || row.length === 0) continue;

      // Look for day in row start (first 4 columns)
      for (let c = 0; c < Math.min(4, row.length); c++) {
        const foundDay = normalizeDayOfWeek(row[c]);
        if (foundDay) {
          currentDay = foundDay;
          break;
        }
      }

      // Look for session in row start
      for (let c = 0; c < Math.min(4, row.length); c++) {
        const s = row[c].toLowerCase();
        if (s.includes("chiều") || s.includes("chieu")) {
          currentSession = "Chiều";
          break;
        } else if (s.includes("sáng") || s.includes("sang")) {
          currentSession = "Sáng";
          break;
        }
      }

      // Read each period column
      periodColMap.forEach(({ colIdx, period, sessionHint }) => {
        const rawCell = row[colIdx];
        if (rawCell) {
          const cleanSubject = cleanSubjectName(rawCell);
          if (cleanSubject) {
            const finalSession = sessionHint || currentSession;
            const slotKey = `${currentDay}_${finalSession}_${period}`;
            if (!slots[slotKey]) slots[slotKey] = {};
            slots[slotKey][defaultTargetClass] = cleanSubject;

            previewRows.push({
              day: currentDay,
              session: finalSession,
              period,
              subject: cleanSubject,
              className: defaultTargetClass,
            });
          }
        }
      });
    }

    if (previewRows.length > 0) {
      return {
        success: true,
        type: "day_rows_grid",
        detectedClasses: [defaultTargetClass],
        targetClass: defaultTargetClass,
        totalSlots: previewRows.length,
        slots,
        summary: `Đã nhận diện thành công Thời khóa biểu Lớp ${defaultTargetClass} (Hàng Thứ / Cột Tiết: ${previewRows.length} tiết).`,
        previewRows,
      };
    }
  }

  // =========================================================================
  // CHECK 3: SCHOOL_GRID (Classes are Columns: 1A, 1B, 2A, 2B, 3A, 4A, 5A...)
  // =========================================================================
  let classColumnHeaderIdx = -1;
  let classColMap: { colIdx: number; className: string }[] = [];

  for (let r = 0; r < Math.min(25, grid.length); r++) {
    const row = grid[r];
    const matchedClasses: { colIdx: number; className: string }[] = [];
    row.forEach((cell, cIdx) => {
      const cls = detectClassFromString(cell);
      if (cls && DEFAULT_CLASSES.includes(cls)) {
        matchedClasses.push({ colIdx: cIdx, className: cls });
      }
    });

    if (matchedClasses.length >= 2) {
      classColumnHeaderIdx = r;
      classColMap = matchedClasses;
      break;
    }
  }

  if (classColumnHeaderIdx !== -1 && classColMap.length >= 2) {
    const slots: Record<string, Record<string, string>> = {};
    const previewRows: ParsedTimetableResult["previewRows"] = [];
    const detectedClassList = Array.from(new Set(classColMap.map((c) => c.className)));

    let currentDay: DayOfWeek = "Thứ Hai";
    let currentSession: "Sáng" | "Chiều" = "Sáng";
    let periodCounter = 1;

    for (let r = classColumnHeaderIdx + 1; r < grid.length; r++) {
      const row = grid[r];
      if (!row || row.length === 0) continue;

      const rowHeaderChunk = row.slice(0, 4).join(" ");
      const foundDay = normalizeDayOfWeek(rowHeaderChunk);
      if (foundDay) currentDay = foundDay;

      if (rowHeaderChunk.toLowerCase().includes("chiều")) {
        currentSession = "Chiều";
      } else if (rowHeaderChunk.toLowerCase().includes("sáng")) {
        currentSession = "Sáng";
      }

      // Check period number
      let rowPeriod = periodCounter;
      for (let c = 0; c < Math.min(4, row.length); c++) {
        const val = row[c];
        const numMatch = val.match(/(?:tiết\s*)?([1-8])/i);
        if (numMatch && numMatch[1]) {
          const parsedNum = parseInt(numMatch[1], 10);
          if (parsedNum >= 1 && parsedNum <= 8) {
            if (parsedNum > 5) {
              currentSession = "Chiều";
              rowPeriod = parsedNum - 5;
            } else {
              rowPeriod = parsedNum;
            }
            break;
          }
        }
      }

      // Extract each class
      let hasDataInRow = false;
      classColMap.forEach(({ colIdx, className }) => {
        const rawCell = row[colIdx];
        if (rawCell) {
          const cleanSubject = cleanSubjectName(rawCell);
          if (cleanSubject) {
            const slotKey = `${currentDay}_${currentSession}_${rowPeriod}`;
            if (!slots[slotKey]) slots[slotKey] = {};
            slots[slotKey][className] = cleanSubject;

            previewRows.push({
              day: currentDay,
              session: currentSession,
              period: rowPeriod,
              subject: cleanSubject,
              className,
            });
            hasDataInRow = true;
          }
        }
      });

      if (hasDataInRow) {
        periodCounter = (rowPeriod % 5) + 1;
      }
    }

    if (previewRows.length > 0) {
      return {
        success: true,
        type: "school_grid",
        detectedClasses: detectedClassList,
        targetClass: defaultTargetClass,
        totalSlots: previewRows.length,
        slots,
        summary: `Đã nhận diện Bảng TKB Toàn trường (${detectedClassList.join(", ")}) với ${previewRows.length} lượt phân công tiết.`,
        previewRows,
      };
    }
  }

  // =========================================================================
  // CHECK 4: FLAT LIST / TABLE_SCHEDULE (Row by row with day, session, period, subject)
  // =========================================================================
  const slots: Record<string, Record<string, string>> = {};
  const previewRows: ParsedTimetableResult["previewRows"] = [];
  let currentDay: DayOfWeek = "Thứ Hai";
  let currentSession: "Sáng" | "Chiều" = "Sáng";
  let currentPeriod = 1;

  grid.forEach((row) => {
    const fullLine = row.join(" ");

    // Check for day title
    const dayFound = normalizeDayOfWeek(fullLine);
    if (dayFound) {
      currentDay = dayFound;
      currentPeriod = 1;
      if (fullLine.toLowerCase().includes("chiều")) {
        currentSession = "Chiều";
      } else if (fullLine.toLowerCase().includes("sáng")) {
        currentSession = "Sáng";
      }
    }

    if (fullLine.toLowerCase().includes("chiều") && fullLine.length < 35) {
      currentSession = "Chiều";
      currentPeriod = 1;
    } else if (fullLine.toLowerCase().includes("sáng") && fullLine.length < 35) {
      currentSession = "Sáng";
      currentPeriod = 1;
    }

    // Match patterns like "Tiết 1: Toán" or row: ["Thứ Hai", "Sáng", "1", "Toán"]
    if (row.length >= 2) {
      let detectedDay = currentDay;
      let detectedSession = currentSession;
      let detectedPeriod = currentPeriod;
      let detectedSubject = "";

      // Try column positions
      if (row.length >= 4) {
        const maybeDay = normalizeDayOfWeek(row[0]);
        if (maybeDay) detectedDay = maybeDay;
        detectedSession = normalizeSession(row[1]);
        const pNum = parseInt(row[2].replace(/\D/g, ""), 10);
        if (pNum) detectedPeriod = pNum > 5 ? pNum - 5 : pNum;
        detectedSubject = cleanSubjectName(row[3]);
      } else if (row.length === 3) {
        const maybeDay = normalizeDayOfWeek(row[0]);
        if (maybeDay) detectedDay = maybeDay;
        const pNum = parseInt(row[1].replace(/\D/g, ""), 10);
        if (pNum) detectedPeriod = pNum > 5 ? pNum - 5 : pNum;
        detectedSubject = cleanSubjectName(row[2]);
      } else {
        const pNum = parseInt(row[0].replace(/\D/g, ""), 10);
        if (pNum) detectedPeriod = pNum > 5 ? pNum - 5 : pNum;
        detectedSubject = cleanSubjectName(row[1]);
      }

      if (detectedSubject) {
        const slotKey = `${detectedDay}_${detectedSession}_${detectedPeriod}`;
        if (!slots[slotKey]) slots[slotKey] = {};
        slots[slotKey][defaultTargetClass] = detectedSubject;

        previewRows.push({
          day: detectedDay,
          session: detectedSession,
          period: detectedPeriod,
          subject: detectedSubject,
          className: defaultTargetClass,
        });
        currentPeriod = (detectedPeriod % 5) + 1;
      }
    }
  });

  if (previewRows.length > 0) {
    return {
      success: true,
      type: "list",
      detectedClasses: [defaultTargetClass],
      targetClass: defaultTargetClass,
      totalSlots: previewRows.length,
      slots,
      summary: `Đã phân tích định dạng danh sách và trích xuất ${previewRows.length} tiết học cho Lớp ${defaultTargetClass}.`,
      previewRows,
    };
  }

  return {
    success: false,
    type: "unknown",
    detectedClasses: [],
    targetClass: defaultTargetClass,
    totalSlots: 0,
    slots: {},
    summary: "Không nhận diện được tiết học nào từ bảng dữ liệu. Vui lòng kiểm tra lại định dạng tệp Excel hoặc dán lại.",
    previewRows: [],
    errorMessage: "Không thể trích xuất các tiết học hợp lệ.",
  };
}

/**
 * Text-based wrapper that splits text into a 2D array and delegates to parseTimetableGrid
 */
export function parseTimetableText(
  pastedText: string,
  options: {
    fallbackClass?: string;
    existingTimetable?: MasterTimetable;
  } = {}
): ParsedTimetableResult {
  const text = pastedText.trim();
  if (!text) {
    return {
      success: false,
      type: "unknown",
      detectedClasses: [],
      targetClass: options.fallbackClass || "1A",
      totalSlots: 0,
      slots: {},
      summary: "Văn bản trống, vui lòng dán dữ liệu thời khóa biểu.",
      previewRows: [],
      errorMessage: "Dữ liệu trống.",
    };
  }

  const rawLines = text.split(/\r?\n/).map((l) => l.trim()).filter(Boolean);
  const grid: string[][] = rawLines.map((line) => {
    if (line.includes("\t")) {
      return line.split("\t").map((c) => c.trim());
    }
    if (line.includes("|")) {
      return line.split("|").map((c) => c.trim()).filter(Boolean);
    }
    if (line.includes(";") || (line.includes(",") && (line.match(/,/g) || []).length >= 3)) {
      return line.split(/[;,]+/).map((c) => c.trim());
    }
    return line.split(/\s{2,}/).map((c) => c.trim()).filter(Boolean);
  });

  return parseTimetableGrid(grid, options);
}

/**
 * Robust Excel Workbook Parser
 * Reads an ArrayBuffer (preserving UTF-8 Vietnamese diacritics) and scans sheets
 */
export function parseExcelWorkbook(
  buffer: ArrayBuffer,
  options: {
    fallbackClass?: string;
    existingTimetable?: MasterTimetable;
    preferredSheet?: string;
  } = {}
): ParsedTimetableResult & { sheetName: string; allSheetNames: string[] } {
  try {
    const data = new Uint8Array(buffer);
    const wb = XLSX.read(data, { type: "array", cellDates: true });

    if (!wb.SheetNames || wb.SheetNames.length === 0) {
      return {
        success: false,
        type: "unknown",
        detectedClasses: [],
        targetClass: options.fallbackClass || "1A",
        totalSlots: 0,
        slots: {},
        summary: "Tệp Excel không chứa trang tính (sheet) nào.",
        previewRows: [],
        errorMessage: "Tệp Excel rỗng.",
        sheetName: "",
        allSheetNames: [],
      };
    }

    // Select the best sheet: look for sheets containing TKB or with the highest content density
    let chosenSheetName = options.preferredSheet && wb.Sheets[options.preferredSheet]
      ? options.preferredSheet
      : wb.SheetNames[0];

    // If there are multiple sheets, find the one with keyword "tkb" or "thời khóa biểu" or highest cell count
    if (!options.preferredSheet && wb.SheetNames.length > 1) {
      const matchingName = wb.SheetNames.find((s) => {
        const lower = s.toLowerCase();
        return lower.includes("tkb") || lower.includes("thời khóa biểu") || lower.includes("lich");
      });
      if (matchingName) {
        chosenSheetName = matchingName;
      }
    }

    const ws = wb.Sheets[chosenSheetName];
    const rawGrid: any[][] = XLSX.utils.sheet_to_json(ws, { header: 1, defval: "" });

    // Stringify every cell
    const stringGrid: string[][] = rawGrid.map((row) =>
      (row || []).map((cell) => String(cell ?? "").trim())
    );

    const parseResult = parseTimetableGrid(stringGrid, options);

    return {
      ...parseResult,
      sheetName: chosenSheetName,
      allSheetNames: wb.SheetNames,
    };
  } catch (err: any) {
    return {
      success: false,
      type: "unknown",
      detectedClasses: [],
      targetClass: options.fallbackClass || "1A",
      totalSlots: 0,
      slots: {},
      summary: `Lỗi đọc tệp Excel: ${err?.message || "Không thể mở tệp"}`,
      previewRows: [],
      errorMessage: err?.message || "Lỗi đọc tệp Excel",
      sheetName: "",
      allSheetNames: [],
    };
  }
}

/**
 * Merge parsed timetable slots into current master timetable
 * Default mode: "replace" so that the new TKB completely updates the class/school schedule
 */
export function mergeTimetableSlots(
  currentTimetable: MasterTimetable,
  parsedResult: ParsedTimetableResult,
  mode: "merge" | "replace" = "replace"
): MasterTimetable {
  let finalSlots: Record<string, Record<string, string>> = {};

  if (mode === "merge") {
    // Clone existing slots
    finalSlots = JSON.parse(JSON.stringify(currentTimetable.slots || {}));
    // Overwrite with parsed slots
    Object.entries(parsedResult.slots).forEach(([slotKey, classMap]) => {
      if (!finalSlots[slotKey]) finalSlots[slotKey] = {};
      Object.entries(classMap).forEach(([cls, subject]) => {
        finalSlots[slotKey][cls.toUpperCase()] = subject;
      });
    });
  } else {
    // In "replace" mode:
    // If it's for a single class, clear that class from all existing slots first
    if (parsedResult.type === "class_grid" || parsedResult.type === "day_rows_grid" || parsedResult.type === "list") {
      finalSlots = JSON.parse(JSON.stringify(currentTimetable.slots || {}));
      const targetCls = parsedResult.targetClass.toUpperCase().trim();

      // Clear target class from ALL slots
      Object.keys(finalSlots).forEach((k) => {
        if (finalSlots[k][targetCls]) {
          delete finalSlots[k][targetCls];
        }
      });

      // Apply new slots for target class
      Object.entries(parsedResult.slots).forEach(([slotKey, classMap]) => {
        if (!finalSlots[slotKey]) finalSlots[slotKey] = {};
        if (classMap[targetCls]) {
          finalSlots[slotKey][targetCls] = classMap[targetCls];
        }
      });
    } else {
      // Whole school replacement or multi-class grid
      finalSlots = JSON.parse(JSON.stringify(currentTimetable.slots || {}));
      const classesToClear = parsedResult.detectedClasses.map((c) => c.toUpperCase());

      // Clear all detected classes
      Object.keys(finalSlots).forEach((k) => {
        classesToClear.forEach((cls) => {
          if (finalSlots[k][cls]) {
            delete finalSlots[k][cls];
          }
        });
      });

      // Apply newly parsed slots
      Object.entries(parsedResult.slots).forEach(([slotKey, classMap]) => {
        if (!finalSlots[slotKey]) finalSlots[slotKey] = {};
        Object.entries(classMap).forEach(([cls, subject]) => {
          finalSlots[slotKey][cls.toUpperCase()] = subject;
        });
      });
    }
  }

  // Ensure classes array contains any newly detected classes
  const mergedClasses = Array.from(
    new Set([
      ...currentTimetable.classes.map((c) => c.toUpperCase()),
      ...parsedResult.detectedClasses.map((c) => c.toUpperCase()),
      parsedResult.targetClass.toUpperCase(),
    ])
  ).filter(Boolean);

  return {
    ...currentTimetable,
    version: "2026_v4_tuan2_1409",
    effectiveDate: currentTimetable.effectiveDate || "Áp dụng Tuần 2 - Từ ngày 14 - 18/9/2026",
    classes: mergedClasses.length > 0 ? mergedClasses : currentTimetable.classes,
    slots: finalSlots,
  };
}
