import { DayOfWeek, Grade, MasterTimetable, ScheduleItem, SessionType } from "../types";
import { getDetailedMusicLesson } from "./musicLessonDetails";
import { getOfficialMusicLesson } from "./musicCurriculumOfficial";
import { getDetailedEnglishLesson } from "./englishLessonDetails";
import { getGradeCurriculumLesson } from "./gradeCurriculums";
import { cleanLessonTitle } from "../utils/lessonTitleHelper";
import { getTrafficSafetyLesson } from "./trafficSafetyCurriculum";

export interface TeacherInfo {
  id: string;
  name: string;
  role: string;
  type: "homeroom" | "specialist";
  specialistSubject?: string;
  assignedClasses?: string[];
  subjects: string[];
  teachingPeriods: number;
  concurrentPeriods?: number;
  totalPeriods?: number;
}

export const DEFAULT_TEACHERS: TeacherInfo[] = [
  // 1. GIÁO VIÊN CHỦ NHIỆM CHÍNH KHỐI 5 (THEO MẪU BỘ HỒ SƠ 5A)
  { id: "tuan_5a", name: "Nguyễn Hoàng Tuấn", role: "GVCN 5A", type: "homeroom", assignedClasses: ["5A", "5"], subjects: ["Tiếng Việt", "Toán", "Khoa học", "Lịch sử & Địa lí", "Đạo đức", "HĐTN", "TCTV"], teachingPeriods: 18, concurrentPeriods: 5, totalPeriods: 23 },
  { id: "giang_5", name: "Giang", role: "GVCN 5", type: "homeroom", assignedClasses: ["5"], subjects: ["Tiếng Việt", "Toán", "Khoa học", "Lịch sử & Địa lí", "Đạo đức", "HĐTN", "Công nghệ"], teachingPeriods: 18, concurrentPeriods: 5, totalPeriods: 23 },
  { id: "minh_thu_1_1", name: "Minh Thu", role: "GVCN 1.1", type: "homeroom", assignedClasses: ["1.1", "1A"], subjects: ["Tiếng Việt", "Toán", "HĐTN"], teachingPeriods: 19, concurrentPeriods: 4, totalPeriods: 23 },
  { id: "phuong_1_2", name: "Phượng", role: "GVCN 1.2", type: "homeroom", assignedClasses: ["1.2", "1B"], subjects: ["Tiếng Việt", "Toán", "HĐTN"], teachingPeriods: 19, concurrentPeriods: 4, totalPeriods: 23 },
  { id: "ha_2", name: "Hà", role: "GVCN 2", type: "homeroom", assignedClasses: ["2", "2A"], subjects: ["Tiếng Việt", "Toán", "HĐTN", "TCTV"], teachingPeriods: 19, concurrentPeriods: 4, totalPeriods: 23 },
  { id: "phi_3", name: "Phi", role: "GVCN 3", type: "homeroom", assignedClasses: ["3", "3A"], subjects: ["Tiếng Việt", "Toán", "Đạo đức", "HĐTN", "Công nghệ"], teachingPeriods: 16, concurrentPeriods: 7, totalPeriods: 23 },
  { id: "thuy_4_1", name: "Thuý", role: "GVCN 4.1", type: "homeroom", assignedClasses: ["4.1", "4A"], subjects: ["Tiếng Việt", "Toán", "HĐTN", "Công nghệ"], teachingPeriods: 15, concurrentPeriods: 8, totalPeriods: 23 },
  { id: "het_em_4_2", name: "Hết Em", role: "GVCN 4.2", type: "homeroom", assignedClasses: ["4.2", "4B"], subjects: ["Tiếng Việt", "Toán", "Khoa học", "Lịch sử & Địa lí", "HĐTN", "Công nghệ"], teachingPeriods: 19, concurrentPeriods: 4, totalPeriods: 23 },

  // 2. CÁC GIÁO VIÊN BỘ MÔN / CHUYÊN (TOÀN TRƯỜNG THEO MẪU TẢI LÊN)
  { id: "nuong_ta", name: "Cô Nương", role: "GV Chuyên Tiếng Anh", type: "specialist", specialistSubject: "Tiếng Anh", assignedClasses: ["3", "4.1", "4.2", "5", "5A"], subjects: ["Tiếng Anh"], teachingPeriods: 16, concurrentPeriods: 0, totalPeriods: 16 },
  { id: "thy_mt", name: "Thầy Thy", role: "GV Chuyên Mĩ thuật & HĐTN", type: "specialist", specialistSubject: "Mĩ thuật", assignedClasses: ["1.1", "1.2", "2", "3", "4.1", "4.2", "5", "5A"], subjects: ["Mĩ thuật", "Hoạt động trải nghiệm"], teachingPeriods: 16, concurrentPeriods: 0, totalPeriods: 16 },
  { id: "nhan_cn", name: "Thầy Nhàn", role: "GV Chuyên Công nghệ", type: "specialist", specialistSubject: "Công nghệ", assignedClasses: ["3", "4.1", "4.2", "5", "5A"], subjects: ["Công nghệ", "Tăng cường"], teachingPeriods: 12, concurrentPeriods: 0, totalPeriods: 12 },
  { id: "thinh_gdtc", name: "Thầy Thịnh", role: "GV Chuyên Giáo dục Thể chất", type: "specialist", specialistSubject: "Giáo dục Thể chất", assignedClasses: ["1.1", "1.2", "2", "3", "4.1", "4.2", "5", "5A"], subjects: ["Giáo dục Thể chất"], teachingPeriods: 20, concurrentPeriods: 3, totalPeriods: 23 },
  { id: "tam_an", name: "Cô Tâm", role: "GV Chuyên Âm nhạc", type: "specialist", specialistSubject: "Âm nhạc", assignedClasses: ["1.1", "1.2", "2", "3", "4.1", "4.2", "5", "5A"], subjects: ["Âm nhạc", "Bồi dưỡng Âm nhạc"], teachingPeriods: 20, concurrentPeriods: 3, totalPeriods: 23 },
  { id: "phuong_th", name: "Thầy Phương", role: "GV Chuyên Tin học", type: "specialist", specialistSubject: "Tin học", assignedClasses: ["1.1", "1.2", "2", "3", "4.1", "4.2", "5", "5A"], subjects: ["Tin học"], teachingPeriods: 12, concurrentPeriods: 2, totalPeriods: 14 },
  { id: "vu_an", name: "Thầy Vũ", role: "GV Chuyên Âm nhạc", type: "specialist", specialistSubject: "Âm nhạc", assignedClasses: ["1.1", "1.2", "2", "3", "4.1", "4.2", "5"], subjects: ["Âm nhạc", "Bồi dưỡng Âm nhạc"], teachingPeriods: 20, concurrentPeriods: 3, totalPeriods: 23 },
  { id: "luong_mt", name: "Thầy Lượng", role: "GV Chuyên Mĩ thuật", type: "specialist", specialistSubject: "Mĩ thuật", assignedClasses: ["1.1", "1.2", "2", "3", "4.1", "4.2", "5"], subjects: ["Mĩ thuật"], teachingPeriods: 7, concurrentPeriods: 0, totalPeriods: 7 },
  { id: "cang_bm", name: "Thầy Cang", role: "GV Bộ môn (TNXH, LS-ĐL, TCT, TCTV, ĐĐ)", type: "specialist", specialistSubject: "Tự nhiên và Xã hội", assignedClasses: ["1.1", "1.2", "2", "3", "4.1"], subjects: ["Tự nhiên và Xã hội", "Lịch sử và Địa lí", "Tăng cường Toán", "Tăng cường Tiếng Việt", "Đạo đức"], teachingPeriods: 20, concurrentPeriods: 3, totalPeriods: 23 },
  { id: "an_gdtc", name: "Thầy Ân", role: "GV Chuyên GDTC & HĐTN", type: "specialist", specialistSubject: "Giáo dục Thể chất", assignedClasses: ["1.1", "1.2", "2", "3", "4.1", "4.2", "5"], subjects: ["Giáo dục Thể chất", "Hoạt động trải nghiệm"], teachingPeriods: 20, concurrentPeriods: 3, totalPeriods: 23 },
  { id: "ngan_bm", name: "Cô Ngân", role: "GV Bộ môn Khoa học & Đạo đức", type: "specialist", specialistSubject: "Khoa học", assignedClasses: ["1.1", "4.1", "5"], subjects: ["Khoa học", "Đạo đức"], teachingPeriods: 5, concurrentPeriods: 0, totalPeriods: 5 },
  { id: "quyen_ta", name: "Cô Quyên", role: "GV Chuyên Tiếng Anh", type: "specialist", specialistSubject: "Tiếng Anh", assignedClasses: ["3", "4.1", "4.2", "5"], subjects: ["Tiếng Anh"], teachingPeriods: 16, concurrentPeriods: 0, totalPeriods: 16 },
  { id: "thao_th", name: "Cô Thảo", role: "GV Chuyên Tin học", type: "specialist", specialistSubject: "Tin học", assignedClasses: ["1.1", "1.2", "2", "3", "4.1", "4.2", "5"], subjects: ["Tin học"], teachingPeriods: 7, concurrentPeriods: 3, totalPeriods: 10 },
  { id: "hoai_pht", name: "Võ Văn Hoài", role: "Phó Hiệu trưởng (ĐĐ & HĐTN)", type: "specialist", specialistSubject: "Đạo đức", assignedClasses: ["1.2", "4.1", "4.2", "5"], subjects: ["Đạo đức", "Hoạt động trải nghiệm"], teachingPeriods: 4, concurrentPeriods: 0, totalPeriods: 4 },
];

export const DEFAULT_CLASSES = ["5A", "5", "4A", "4.1", "4.2", "3A", "3", "2A", "2", "1A", "1.1", "1.2", "5B", "4B", "3B", "2B", "1B"];

// Timetable Tuần 1 (07/09/2026 - 11/09/2026)
export const TIMETABLE_TUAN_1_SLOTS: Record<string, Record<string, string>> = {
  "Thứ Hai_Sáng_1": { "1A": "HĐTN (CC)", "1B": "HĐTN (CC)", "2A": "HĐTN (CC)", "2B": "HĐTN (CC)", "3A": "HĐTN (CC)", "3B": "HĐTN (CC)", "4A": "HĐTN (CC)", "4B": "HĐTN (CC)", "5A": "HĐTN (CC)", "5B": "HĐTN (CC)" },
  "Thứ Hai_Sáng_2": { "1A": "TV", "1B": "TV", "2A": "TV", "2B": "TV", "3A": "TV", "3B": "TV", "4A": "TV", "4B": "TV", "5A": "TV", "5B": "TV" },
  "Thứ Hai_Sáng_3": { "1A": "TV", "1B": "TV", "2A": "TV", "2B": "TV", "3A": "TV", "3B": "TV", "4A": "TV", "4B": "TV", "5A": "TV", "5B": "TV" },
  "Thứ Hai_Sáng_4": { "1A": "T", "1B": "T", "2A": "T", "2B": "T", "3A": "T", "3B": "T", "4A": "T", "4B": "T", "5A": "T", "5B": "T" },
  "Thứ Hai_Sáng_5": { "1A": "", "1B": "", "2A": "", "2B": "", "3A": "", "3B": "", "4A": "", "4B": "", "5A": "", "5B": "" },

  "Thứ Hai_Chiều_1": { "1A": "MT (Thy)", "1B": "TNXH (Phước)", "2A": "ĐĐ (Nhàn)", "2B": "TH (Phương)", "3A": "TA (Nương)", "3B": "ĐĐ", "4A": "AN (Tâm)", "4B": "LS-ĐL", "5A": "ĐĐ (Quan)", "5B": "LS-ĐL" },
  "Thứ Hai_Chiều_2": { "1A": "TV", "1B": "TV", "2A": "MT (Thy)", "2B": "TNXH (Phước)", "3A": "AN (Tâm)", "3B": "TH (Phương)", "4A": "GDTC (Thịnh)", "4B": "KH", "5A": "TA (Nương)", "5B": "KH" },
  "Thứ Hai_Chiều_3": { "1A": "TCTV", "1B": "TCTV", "2A": "AN (Tâm)", "2B": "ĐĐ (Nhàn)", "3A": "MT (Thy)", "3B": "TNXH (Phước)", "4A": "TA (Nương)", "4B": "TH (Phương)", "5A": "GDTC (Thịnh)", "5B": "ĐĐ (Quan)" },

  "Thứ Ba_Sáng_1": { "1A": "TV", "1B": "TV", "2A": "GDTC (Thịnh)", "2B": "TV", "3A": "TV", "3B": "AN (Tâm)", "4A": "TV", "4B": "TV", "5A": "TV", "5B": "TA (Nương)" },
  "Thứ Ba_Sáng_2": { "1A": "TV", "1B": "TV", "2A": "TV", "2B": "TV", "3A": "GDTC (Thịnh)", "3B": "TV", "4A": "T", "4B": "T", "5A": "T", "5B": "AN (Tâm)" },
  "Thứ Ba_Sáng_3": { "1A": "GDTC (Thịnh)", "1B": "AN (Tâm)", "2A": "TV", "2B": "MT (Thy)", "3A": "T", "3B": "T", "4A": "LS-ĐL", "4B": "TA (Nương)", "5A": "LS-ĐL", "5B": "TV" },
  "Thứ Ba_Sáng_4": { "1A": "TH (Phương)", "1B": "MT (Thy)", "2A": "T", "2B": "AN (Tâm)", "3A": "ĐĐ", "3B": "TA (Nương)", "4A": "KH", "4B": "CN (Nhàn)", "5A": "KH", "5B": "T" },
  "Thứ Ba_Sáng_5": { "1A": "", "1B": "", "2A": "", "2B": "", "3A": "", "3B": "", "4A": "", "4B": "", "5A": "", "5B": "" },

  "Thứ Ba_Chiều_1": { "1A": "TNXH (Phước)", "1B": "ĐĐ (Nhàn)", "2A": "BDAN (Tâm)", "2B": "TV", "3A": "TA (Nương)", "3B": "MT (Thy)", "4A": "TH (Phương)", "4B": "GDTC (Thịnh)", "5A": "TCTV", "5B": "KH" },
  "Thứ Ba_Chiều_2": { "1A": "TCTV", "1B": "TV", "2A": "TNXH (Phước)", "2B": "TCTV", "3A": "BDAN (Tâm)", "3B": "GDTC (Thịnh)", "4A": "TA (Nương)", "4B": "KH", "5A": "TH (Phương)", "5B": "MT (Thy)" },
  "Thứ Ba_Chiều_3": { "1A": "AN (Tâm)", "1B": "T", "2A": "TH (Phương)", "2B": "TCT (Nhàn)", "3A": "TNXH (Phước)", "3B": "CN", "4A": "ĐĐ (Quan)", "4B": "MT (Thy)", "5A": "TA (Nương)", "5B": "GDTC (Thịnh)" },

  "Thứ Tư_Sáng_1": { "1A": "TV", "1B": "TV", "2A": "TV", "2B": "GDTC (Thịnh)", "3A": "TA (Nương)", "3B": "TV", "4A": "MT (Thy)", "4B": "TV", "5A": "TV", "5B": "CN (Nhàn)" },
  "Thứ Tư_Sáng_2": { "1A": "TV", "1B": "TCT (Phước)", "2A": "TV", "2B": "TCT (Nhàn)", "3A": "HĐTN (Thy)", "3B": "GDTC (Thịnh)", "4A": "TA (Nương)", "4B": "T", "5A": "T", "5B": "TV" },
  "Thứ Tư_Sáng_3": { "1A": "T", "1B": "GDTC (Thịnh)", "2A": "TNXH (Phước)", "2B": "TV", "3A": "TV", "3B": "BDAN (Tâm)", "4A": "TV", "4B": "HĐTN (Thy)", "5A": "CN (Nhàn)", "5B": "T" },
  "Thứ Tư_Sáng_4": { "1A": "TNXH (Phước)", "1B": "HĐTN (Thy)", "2A": "TCTV (Nhàn)", "2B": "TV", "3A": "T", "3B": "T", "4A": "T", "4B": "AN (Tâm)", "5A": "TA (Nương)", "5B": "TH (Phương)" },
  "Thứ Tư_Sáng_5": { "1A": "", "1B": "", "2A": "", "2B": "", "3A": "", "3B": "", "4A": "", "4B": "", "5A": "", "5B": "" },

  "Thứ Tư_Chiều_1": { "1A": "TV", "1B": "TV", "2A": "T", "2B": "BDAN (Tâm)", "3A": "TNXH (Phước)", "3B": "HĐTN (Thy)", "4A": "CN (Nhàn)", "4B": "LS-ĐL", "5A": "LS-ĐL", "5B": "TA (Nương)" },
  "Thứ Tư_Chiều_2": { "1A": "TCT (Phước)", "1B": "TV", "2A": "TCTV (Nhàn)", "2B": "HĐTN (Thy)", "3A": "CN", "3B": "TA (Nương)", "4A": "LS-ĐL", "4B": "BDAN (Tâm)", "5A": "KH", "5B": "GDTC (Thịnh)" },
  "Thứ Tư_Chiều_3": { "1A": "ĐĐ (Nhàn)", "1B": "TNXH (Phước)", "2A": "HĐTN (Thy)", "2B": "GDTC (Thịnh)", "3A": "TH (Phương)", "3B": "TCTV", "4A": "KH", "4B": "TA (Nương)", "5A": "AN (Tâm)", "5B": "LS-ĐL" },

  "Thứ Năm_Sáng_1": { "1A": "GDTC (Thịnh)", "1B": "BDAN (Tâm)", "2A": "T", "2B": "TV", "3A": "TV", "3B": "TV", "4A": "TV", "4B": "TA (Nương)", "5A": "TV", "5B": "TV" },
  "Thứ Năm_Sáng_2": { "1A": "HĐTN (Thy)", "1B": "TV", "2A": "GDTC (Thịnh)", "2B": "TV", "3A": "TV", "3B": "TNXH (Phước)", "4A": "TV", "4B": "T", "5A": "TV", "5B": "TV" },
  "Thứ Năm_Sáng_3": { "1A": "TV", "1B": "TCT (Phước)", "2A": "TV", "2B": "TCT (Nhàn)", "3A": "TA (Nương)", "3B": "TV", "4A": "GDTC (Thịnh)", "4B": "TV", "5A": "T", "5B": "T" },
  "Thứ Năm_Sáng_4": { "1A": "TV", "1B": "TCTV (Nhàn)", "2A": "TV", "2B": "TNXH (Phước)", "3A": "T", "3B": "T", "4A": "T", "4B": "TV", "5A": "TA (Nương)", "5B": "HĐTN (Thy)" },
  "Thứ Năm_Sáng_5": { "1A": "", "1B": "", "2A": "", "2B": "", "3A": "", "3B": "", "4A": "", "4B": "", "5A": "", "5B": "" },

  "Thứ Năm_Chiều_1": { "1A": "BDAN (Tâm)", "1B": "TH (Phương)", "2A": "TCT (Phước)", "2B": "TV", "3A": "TCTV", "3B": "TCTV", "4A": "TCTV", "4B": "TV", "5A": "HĐTN (Thy)", "5B": "TA (Nương)" },
  "Thứ Năm_Chiều_2": { "1A": "TCTV (Nhàn)", "1B": "TV", "2A": "T", "2B": "T", "3A": "GDTC (Thịnh)", "3B": "TCT", "4A": "BDAN (Tâm)", "4B": "TA (Nương)", "5A": "MT (Thy)", "5B": "TCTV" },
  "Thứ Năm_Chiều_3": { "1A": "TCT (Phước)", "1B": "T", "2A": "TCTV (Nhàn)", "2B": "TCTV", "3A": "TCT", "3B": "TA (Nương)", "4A": "HĐTN (Thy)", "4B": "ĐĐ (Quan)", "5A": "GDTC (Thịnh)", "5B": "BDAN (Tâm)" },

  "Thứ Sáu_Sáng_1": { "1A": "TV", "1B": "TCT (Phước)", "2A": "TV", "2B": "T", "3A": "TV", "3B": "TA (Nương)", "4A": "TV", "4B": "GDTC (Thịnh)", "5A": "BDAN (Tâm)", "5B": "TV" },
  "Thứ Sáu_Sáng_2": { "1A": "TV", "1B": "GDTC (Thịnh)", "2A": "TV", "2B": "TV", "3A": "T", "3B": "T", "4A": "T", "4B": "TV", "5A": "TV", "5B": "TA (Nương)" },
  "Thứ Sáu_Sáng_3": { "1A": "T", "1B": "TV", "2A": "TCT (Phước)", "2B": "TV", "3A": "TCTV", "3B": "TV", "4A": "TA (Nương)", "4B": "T", "5A": "T", "5B": "T" },
  "Thứ Sáu_Sáng_4": { "1A": "HĐTN (SHL)", "1B": "HĐTN (SHL)", "2A": "HĐTN (SHL)", "2B": "HĐTN (SHL)", "3A": "HĐTN (SHL)", "3B": "HĐTN (SHL)", "4A": "HĐTN (SHL)", "4B": "HĐTN (SHL)", "5A": "HĐTN (SHL)", "5B": "HĐTN (SHL)" },
  "Thứ Sáu_Sáng_5": { "1A": "", "1B": "", "2A": "", "2B": "", "3A": "", "3B": "", "4A": "", "4B": "", "5A": "", "5B": "" },

  "Thứ Sáu_Chiều_1": { "1A": "", "1B": "", "2A": "", "2B": "", "3A": "", "3B": "", "4A": "", "4B": "", "5A": "", "5B": "" },
  "Thứ Sáu_Chiều_2": { "1A": "", "1B": "", "2A": "", "2B": "", "3A": "", "3B": "", "4A": "", "4B": "", "5A": "", "5B": "" },
  "Thứ Sáu_Chiều_3": { "1A": "", "1B": "", "2A": "", "2B": "", "3A": "", "3B": "", "4A": "", "4B": "", "5A": "", "5B": "" },
};

// ==============================================================================
// THỜI KHÓA BIỂU CHÍNH THỨC TUẦN 3 (Áp dụng từ 21/09/2026 - 25/09/2026)
// PHÂN HIỆU ĐINH VĂN PHU - TRƯỜNG TIỂU HỌC TÂN THẠNH
// ==============================================================================
export const TIMETABLE_DINH_VAN_PHU_SLOTS: Record<string, Record<string, string>> = {
  // THỨ HAI (21/09/2026)
  "Thứ Hai_Sáng_1": { "1.1": "HĐTN (CC)", "1.2": "HĐTN (CC)", "2": "HĐTN (CC)", "3": "HĐTN (CC)", "4.1": "HĐTN (CC)", "4.2": "HĐTN (CC)", "5": "HĐTN (CC)", "5A": "HĐTN (CC)" },
  "Thứ Hai_Sáng_2": { "1.1": "TV", "1.2": "TV", "2": "TV", "3": "TV", "4.1": "TV", "4.2": "TV", "5": "TV", "5A": "TV" },
  "Thứ Hai_Sáng_3": { "1.1": "TV", "1.2": "TV", "2": "TV", "3": "TV", "4.1": "TV", "4.2": "TV", "5": "TV", "5A": "TV" },
  "Thứ Hai_Sáng_4": { "1.1": "T", "1.2": "T", "2": "T", "3": "T", "4.1": "T", "4.2": "T", "5": "T", "5A": "T" },
  "Thứ Hai_Sáng_5": { "1.1": "", "1.2": "", "2": "", "3": "", "4.1": "", "4.2": "", "5": "", "5A": "" },

  "Thứ Hai_Chiều_1": { "1.1": "TNXH (Cang)", "1.2": "TCTV", "2": "AN (Vũ)", "3": "TA (Quyên)", "4.1": "HĐTN (ÂN)", "4.2": "TH (Thảo)", "5": "MT (Thy)", "5A": "MT (Thy)" },
  "Thứ Hai_Chiều_2": { "1.1": "AN (Vũ)", "1.2": "TNXH (Cang)", "2": "TCTV", "3": "GDTC (ÂN)", "4.1": "TH (Thảo)", "4.2": "TA (Quyên)", "5": "ĐĐ", "5A": "ĐĐ" },
  "Thứ Hai_Chiều_3": { "1.1": "TCTV", "1.2": "AN (Vũ)", "2": "TNXH (Cang)", "3": "TH (Thảo)", "4.1": "KH (Ngân)", "4.2": "GDTC (ÂN)", "5": "TA (Nương)", "5A": "TA (Nương)" },

  // THỨ BA (22/09/2026)
  "Thứ Ba_Sáng_1": { "1.1": "GDTC (ÂN)", "1.2": "TV", "2": "TV", "3": "TNXH (Cang)", "4.1": "TA (Quyên)", "4.2": "TV", "5": "CN (Nhàn)", "5A": "CN (Nhàn)" },
  "Thứ Ba_Sáng_2": { "1.1": "TV", "1.2": "GDTC (ÂN)", "2": "TV", "3": "TV", "4.1": "LS-ĐL (Cang)", "4.2": "AN (Vũ)", "5": "GDTC (Thịnh)", "5A": "GDTC (Thịnh)" },
  "Thứ Ba_Sáng_3": { "1.1": "TV", "1.2": "TV", "2": "GDTC (ÂN)", "3": "TCTV (Cang)", "4.1": "TV", "4.2": "TA (Quyên)", "5": "HĐTN (Thy)", "5A": "HĐTN (Thy)" },
  "Thứ Ba_Sáng_4": { "1.1": "BDAN (Vũ)", "1.2": "ĐĐ (Hoài)", "2": "ĐĐ (Cang)", "3": "TA (Quyên)", "4.1": "T", "4.2": "HĐTN (ÂN)", "5": "TV", "5A": "TV" },
  "Thứ Ba_Sáng_5": { "1.1": "", "1.2": "", "2": "", "3": "", "4.1": "", "4.2": "", "5": "", "5A": "" },

  "Thứ Ba_Chiều_1": { "1.1": "TNXH (Cang)", "1.2": "HĐTN (ÂN)", "2": "T", "3": "AN (Vũ)", "4.1": "ĐĐ (Hoài)", "4.2": "T", "5": "T", "5A": "T" },
  "Thứ Ba_Chiều_2": { "1.1": "T", "1.2": "TNXH (Cang)", "2": "TCTV", "3": "T", "4.1": "AN (Vũ)", "4.2": "LS-ĐL", "5": "LS-ĐL", "5A": "LS-ĐL" },
  "Thứ Ba_Chiều_3": { "1.1": "TCTV", "1.2": "TCTV", "2": "TNXH (Cang)", "3": "ĐĐ", "4.1": "GDTC (ÂN)", "4.2": "ĐĐ (Hoài)", "5": "KH", "5A": "KH" },

  // THỨ TƯ (23/09/2026)
  "Thứ Tư_Sáng_1": { "1.1": "TCT (Cang)", "1.2": "TV", "2": "GDTC (ÂN)", "3": "TV", "4.1": "TA (Quyên)", "4.2": "TV", "5": "TV", "5A": "TV" },
  "Thứ Tư_Sáng_2": { "1.1": "ĐĐ (Ngân)", "1.2": "TV", "2": "TCT (Cang)", "3": "TV", "4.1": "TV", "4.2": "TV", "5": "TV", "5A": "TV" },
  "Thứ Tư_Sáng_3": { "1.1": "TV", "1.2": "TCT (Cang)", "2": "T", "3": "GDTC (ÂN)", "4.1": "TV", "4.2": "T", "5": "T", "5A": "T" },
  "Thứ Tư_Sáng_4": { "1.1": "TV", "1.2": "T", "2": "HĐTN (ÂN)", "3": "T", "4.1": "KH (Ngân)", "4.2": "KH", "5": "AN (Tâm)", "5A": "AN (Tâm)" },
  "Thứ Tư_Sáng_5": { "1.1": "", "1.2": "", "2": "", "3": "", "4.1": "", "4.2": "", "5": "", "5A": "" },

  "Thứ Tư_Chiều_1": { "1.1": "HĐTN (ÂN)", "1.2": "TV", "2": "BDAN (Vũ)", "3": "TNXH (Cang)", "4.1": "T", "4.2": "CN", "5": "TH (Phương)", "5A": "TH (Phương)" },
  "Thứ Tư_Chiều_2": { "1.1": "TV", "1.2": "BDAN (Vũ)", "2": "TV", "3": "TA (Quyên)", "4.1": "LS-ĐL (Cang)", "4.2": "GDTC (ÂN)", "5": "BDAN (Tâm)", "5A": "BDAN (Tâm)" },
  "Thứ Tư_Chiều_3": { "1.1": "TV", "1.2": "TV", "2": "TV", "3": "HĐTN (ÂN)", "4.1": "TA (Quyên)", "4.2": "BDAN (Vũ)", "5": "TA (Nương)", "5A": "TA (Nương)" },

  // THỨ NĂM (24/09/2026)
  "Thứ Năm_Sáng_1": { "1.1": "TH (Thảo)", "1.2": "T", "2": "MT (Lượng)", "3": "BDAN (Vũ)", "4.1": "TV", "4.2": "TA (Quyên)", "5": "TV", "5A": "TV" },
  "Thứ Năm_Sáng_2": { "1.1": "TV", "1.2": "TH (Thảo)", "2": "TCT (Cang)", "3": "MT (Lượng)", "4.1": "BDAN (Vũ)", "4.2": "TV", "5": "T", "5A": "T" },
  "Thứ Năm_Sáng_3": { "1.1": "TV", "1.2": "MT (Lượng)", "2": "TH (Thảo)", "3": "TV", "4.1": "BDAN (Vũ)", "4.2": "T", "5": "GDTC (Thịnh)", "5A": "GDTC (Thịnh)" },
  "Thứ Năm_Sáng_4": { "1.1": "MT (Lượng)", "1.2": "TCT (Cang)", "2": "BDAN (Vũ)", "3": "T", "4.1": "T", "4.2": "LS-ĐL", "5": "TA (Nương)", "5A": "TA (Nương)" },
  "Thứ Năm_Sáng_5": { "1.1": "", "1.2": "", "2": "", "3": "", "4.1": "", "4.2": "", "5": "", "5A": "" },

  "Thứ Năm_Chiều_1": { "1.1": "TCT (Cang)", "1.2": "BDAN (Vũ)", "2": "TV", "3": "TA (Quyên)", "4.1": "CN", "4.2": "MT (Lượng)", "5": "LS-ĐL", "5A": "LS-ĐL" },
  "Thứ Năm_Chiều_2": { "1.1": "T", "1.2": "TV", "2": "TV", "3": "TCT (Cang)", "4.1": "GDTC (ÂN)", "4.2": "BDAN (Vũ)", "5": "KH", "5A": "KH" },
  "Thứ Năm_Chiều_3": { "1.1": "TCT (Cang)", "1.2": "TV", "2": "T", "3": "BDAN (Vũ)", "4.1": "MT (Lượng)", "4.2": "KH", "5": "TCTV", "5A": "TCTV" },

  // THỨ SÁU (25/09/2026)
  "Thứ Sáu_Sáng_1": { "1.1": "GDTC (ÂN)", "1.2": "TV", "2": "TV", "3": "TV", "4.1": "TA (Quyên)", "4.2": "TV", "5": "TA (Nương)", "5A": "TA (Nương)" },
  "Thứ Sáu_Sáng_2": { "1.1": "TV", "1.2": "GDTC (ÂN)", "2": "TV", "3": "T", "4.1": "TV", "4.2": "TA (Quyên)", "5": "TV", "5A": "TV" },
  "Thứ Sáu_Sáng_3": { "1.1": "TV", "1.2": "TV", "2": "T", "3": "CN", "4.1": "T", "4.2": "T", "5": "T", "5A": "T" },
  "Thứ Sáu_Sáng_4": { "1.1": "HĐTN (SHL)", "1.2": "HĐTN (SHL)", "2": "HĐTN (SHL)", "3": "HĐTN (SHL)", "4.1": "HĐTN (SHL)", "4.2": "HĐTN (SHL)", "5": "HĐTN (SHL)", "5A": "HĐTN (SHL)" },
  "Thứ Sáu_Sáng_5": { "1.1": "", "1.2": "", "2": "", "3": "", "4.1": "", "4.2": "", "5": "", "5A": "" },

  "Thứ Sáu_Chiều_1": { "1.1": "HỌP", "1.2": "HỌP", "2": "HỌP", "3": "HỌP", "4.1": "HỌP", "4.2": "HỌP", "5": "HỌP", "5A": "HỌP" },
  "Thứ Sáu_Chiều_2": { "1.1": "HỌP", "1.2": "HỌP", "2": "HỌP", "3": "HỌP", "4.1": "HỌP", "4.2": "HỌP", "5": "HỌP", "5A": "HỌP" },
  "Thứ Sáu_Chiều_3": { "1.1": "HỌP", "1.2": "HỌP", "2": "HỌP", "3": "HỌP", "4.1": "HỌP", "4.2": "HỌP", "5": "HỌP", "5A": "HỌP" },
};

export const TIMETABLE_TUAN_3_SLOTS = TIMETABLE_DINH_VAN_PHU_SLOTS;
export const TIMETABLE_TUAN_2_SLOTS = TIMETABLE_DINH_VAN_PHU_SLOTS;

// Master timetable matrix based on the official school timetable (THỰC HIỆN TỪ TUẦN 3 - 21/09/2026 - 25/09/2026)
export const DEFAULT_MASTER_TIMETABLE: MasterTimetable = {
  schoolName: "Trường Tiểu Học Tân Thạnh - Phân hiệu Đinh Văn Phu",
  effectiveDate: "Áp dụng Tuần 3 - Từ ngày 21/09/2026 đến 25/09/2026",
  version: "2026_dinhvanphu_official_sync_v3_music",
  classes: DEFAULT_CLASSES,
  slots: TIMETABLE_DINH_VAN_PHU_SLOTS,
};

export const DAYS_OF_WEEK: DayOfWeek[] = ["Thứ Hai", "Thứ Ba", "Thứ Tư", "Thứ Năm", "Thứ Sáu"];

// Academic Year 2026 - 2027 Start Date (Week 1 = Monday 07/09/2026)
export const ACADEMIC_YEAR_START_DATE = "07/09/2026";

export interface WeekDateRange {
  week: number;
  startDate: string; // dd/mm/yyyy (Monday / Thứ Hai)
  endDate: string;   // dd/mm/yyyy (Friday / Thứ Sáu)
  dates: string[];   // [T2, T3, T4, T5, T6] in "dd/mm/yyyy"
  datesShort: string[]; // [T2, T3, T4, T5, T6] in "dd/mm"
  label: string;
}

// Robust date string parser (accepts dd/mm/yyyy or dd-mm-yyyy)
export function parseDateString(dateStr: string): Date {
  if (!dateStr) return new Date(2026, 8, 7);
  const parts = dateStr.split(/[\/\-]/);
  if (parts.length >= 2) {
    const day = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10);
    const year = parts[2] ? parseInt(parts[2], 10) : 2026;
    if (!isNaN(day) && !isNaN(month)) {
      return new Date(year, month - 1, day);
    }
  }
  return new Date(2026, 8, 7);
}

// Calculate the precise 5-day school week range (Monday to Friday) for any week (1 to 35)
// Week 1 = 07/09/2026 ... Week 2 = 14/09/2026 ... Week 35 = 03/05/2027
export function calculateWeekDateRange(
  week: number = 1,
  baseDateStr: string = ACADEMIC_YEAR_START_DATE
): WeekDateRange {
  const safeWeek = Math.max(1, Math.min(35, isNaN(week) ? 1 : Math.round(week)));
  const baseStart = parseDateString(baseDateStr);

  // Calculate Monday date of the requested week
  const monday = new Date(baseStart);
  monday.setDate(baseStart.getDate() + (safeWeek - 1) * 7);

  const dates = Array.from({ length: 5 }, (_, i) => {
    const d = new Date(monday);
    d.setDate(monday.getDate() + i);
    const dd = String(d.getDate()).padStart(2, "0");
    const mm = String(d.getMonth() + 1).padStart(2, "0");
    const yyyy = d.getFullYear();
    return `${dd}/${mm}/${yyyy}`;
  });

  const datesShort = dates.map((d) => d.substring(0, 5));
  const startDate = dates[0];
  const endDate = dates[4];

  return {
    week: safeWeek,
    startDate,
    endDate,
    dates,
    datesShort,
    label: `Tuần ${safeWeek} (${datesShort[0]} - ${datesShort[4]})`,
  };
}

// Helper to calculate weekly dates (Monday to Friday)
// Automatically synchronizes based on the week number (Week 1 = 07/09/2026, Week 2 = 14/09/2026, ..., Week 35 = 03/05/2027)
export function getWeekDates(
  startDateOrWeek?: string | number,
  explicitWeek?: number
): string[] {
  // 1. Direct week number passed as first parameter: getWeekDates(2) -> Week 2 dates
  if (typeof startDateOrWeek === "number") {
    return calculateWeekDateRange(startDateOrWeek).dates;
  }

  // 2. Explicit week number provided as second parameter: getWeekDates(startDateStr, week)
  if (typeof explicitWeek === "number" && explicitWeek >= 1 && explicitWeek <= 35) {
    if (typeof startDateOrWeek === "string" && startDateOrWeek.trim() !== "") {
      const cleanDate = startDateOrWeek.trim();
      // If caller passed the academic year start (07/09/2026) while week > 1, use the calculated week
      if (cleanDate === ACADEMIC_YEAR_START_DATE && explicitWeek > 1) {
        return calculateWeekDateRange(explicitWeek).dates;
      }
      // If the provided date is a specific Monday date (e.g., "14/09/2026" for week 2 or custom Monday),
      // compute 5 consecutive school days (Thứ 2 -> Thứ 6) directly from this base date without double-offsetting!
      const base = parseDateString(cleanDate);
      return Array.from({ length: 5 }, (_, i) => {
        const d = new Date(base);
        d.setDate(base.getDate() + i);
        const dd = String(d.getDate()).padStart(2, "0");
        const mm = String(d.getMonth() + 1).padStart(2, "0");
        const yyyy = d.getFullYear();
        return `${dd}/${mm}/${yyyy}`;
      });
    }
    return calculateWeekDateRange(explicitWeek).dates;
  }

  // 3. String provided without explicit week: calculate 5 consecutive school days from this date
  if (typeof startDateOrWeek === "string" && startDateOrWeek.trim() !== "") {
    const base = parseDateString(startDateOrWeek.trim());
    return Array.from({ length: 5 }, (_, i) => {
      const d = new Date(base);
      d.setDate(base.getDate() + i);
      const dd = String(d.getDate()).padStart(2, "0");
      const mm = String(d.getMonth() + 1).padStart(2, "0");
      const yyyy = d.getFullYear();
      return `${dd}/${mm}/${yyyy}`;
    });
  }

  return calculateWeekDateRange(1).dates;
}

// Check if a cell slot matches a specialist teacher or subject
export function isSlotMatchingTeacherOrSubject(
  cellText: string,
  teacherName: string,
  specialistSubject?: string
): boolean {
  if (!cellText || cellText.trim() === "" || cellText === "SHCM") return false;
  const lowerCell = cellText.toLowerCase();
  const lowerName = teacherName.toLowerCase();

  // Match specialist teacher tags from parentheses (both new Dinh Van Phu and previous)
  if (lowerName.includes("vũ")) {
    return lowerCell.includes("(vũ)") || lowerCell.includes("vũ");
  }
  if (lowerName.includes("lượng")) {
    return lowerCell.includes("(lượng)") || lowerCell.includes("lượng");
  }
  if (lowerName.includes("cang")) {
    return lowerCell.includes("(cang)") || lowerCell.includes("cang");
  }
  if (lowerName.includes("ân")) {
    return (
      lowerCell.includes("(ân)") ||
      lowerCell.includes("(an)") ||
      lowerCell.includes("gdtc (ân)") ||
      lowerCell.includes("hđtn (ân)")
    ) && !lowerCell.includes("ngân") && !lowerCell.includes("nhàn");
  }
  if (lowerName.includes("ngân")) {
    return lowerCell.includes("(ngân)") || lowerCell.includes("ngân");
  }
  if (lowerName.includes("quyên")) {
    return lowerCell.includes("(quyên)") || lowerCell.includes("quyên");
  }
  if (lowerName.includes("thảo")) {
    return lowerCell.includes("(thảo)") || lowerCell.includes("thảo");
  }
  if (lowerName.includes("hoài")) {
    return lowerCell.includes("(hoài)") || lowerCell.includes("hoài");
  }
  if (lowerName.includes("thịnh")) {
    return lowerCell.includes("(thịnh)") || lowerCell.includes("thịnh");
  }
  if (lowerName.includes("nương")) {
    return lowerCell.includes("(nương)") || lowerCell.includes("nương");
  }
  if (lowerName.includes("phương")) {
    return lowerCell.includes("(phương)") || lowerCell.includes("phương");
  }
  if (lowerName.includes("thy")) {
    return lowerCell.includes("(thy)") || lowerCell.includes("thy");
  }
  if (lowerName.includes("tâm")) {
    return lowerCell.includes("(tâm)") || lowerCell.includes("tâm");
  }
  if (lowerName.includes("phước")) {
    return lowerCell.includes("(phước)") || lowerCell.includes("phước");
  }
  if (lowerName.includes("nhàn")) {
    return lowerCell.includes("(nhàn)") || lowerCell.includes("nhàn");
  }
  if (lowerName.includes("quan")) {
    return lowerCell.includes("(quan)") || lowerCell.includes("quan");
  }

  // Check matching by specialist subject keywords
  if (specialistSubject) {
    const sSub = specialistSubject.toLowerCase();
    if (sSub.includes("tiếng anh") || sSub.includes("anh văn")) {
      return lowerCell.includes("ta (quyên)") || lowerCell.includes("ta (nương)") || lowerCell.includes("tiếng anh") || lowerCell.includes("ta");
    }
    if (sSub.includes("tin học")) {
      return lowerCell.includes("th (thảo)") || lowerCell.includes("th (phương)") || lowerCell.includes("tin học") || lowerCell.includes("t.học") || lowerCell.includes("th");
    }
    if (sSub.includes("âm nhạc")) {
      return lowerCell.includes("an (vũ)") || lowerCell.includes("bdan (vũ)") || lowerCell.includes("an (tâm)") || lowerCell.includes("bdan (tâm)") || lowerCell.includes("âm nhạc") || lowerCell.includes("an");
    }
    if (sSub.includes("mĩ thuật") || sSub.includes("mỹ thuật")) {
      return lowerCell.includes("mt (lượng)") || lowerCell.includes("mt (thy)") || lowerCell.includes("mĩ thuật") || lowerCell.includes("mt");
    }
    if (sSub.includes("thể chất") || sSub.includes("gdtc")) {
      return lowerCell.includes("gdtc (ân)") || lowerCell.includes("gdtc (thịnh)") || lowerCell.includes("thể chất") || lowerCell.includes("gdtc");
    }
  }

  // General tag match
  const nameParts = lowerName.split(" ");
  const lastName = nameParts[nameParts.length - 1];
  if (lastName && (lowerCell.includes(`(${lastName})`) || lowerCell.includes(lastName))) {
    return true;
  }

  return false;
}

// Helper to categorize subject shorthand for sequential weekly period counting
export function getSubjectCategory(raw: string, day: DayOfWeek, period: number): string {
  const clean = raw.trim();
  const cUpper = clean.toUpperCase();
  const cLower = clean.toLowerCase();

  // 1. Chào cờ / Sinh hoạt dưới cờ (HĐTN)
  if (
    cUpper.includes("HĐTN (CC)") ||
    cUpper.includes("HDTN (CC)") ||
    clean === "CC" ||
    cLower.includes("chào cờ") ||
    cLower.includes("chao co") ||
    cUpper.includes("SHDC") ||
    ((cUpper.includes("HĐTN") || cUpper.includes("HDTN")) && day === "Thứ Hai" && period === 1)
  ) {
    return "HDTN_SHDC";
  }

  // 2. Sinh hoạt lớp (HĐTN)
  if (
    cUpper.includes("HĐTN (SHL)") ||
    cUpper.includes("HDTN (SHL)") ||
    clean === "SHL" ||
    cLower.includes("sinh hoạt lớp") ||
    cLower.includes("sinh hoat lop") ||
    ((cUpper.includes("HĐTN") || cUpper.includes("HDTN")) && day === "Thứ Sáu" && (period === 4 || period === 5 || period === 2 || period === 3))
  ) {
    return "HDTN_SHL";
  }

  // 3. Hoạt động trải nghiệm chủ đề
  if (cUpper.includes("HĐTN") || cUpper.includes("HDTN") || cLower.includes("hoạt động trải nghiệm") || cLower.includes("trai nghiem")) {
    return "HDTN_GDCD";
  }

  // 4. Kĩ năng sống
  if (cUpper.includes("KNS") || cLower.includes("kĩ năng sống") || cLower.includes("kỹ năng sống")) {
    return "KNS";
  }

  // 5. Tăng cường / Luyện Tiếng Việt (TCTV)
  if (
    cUpper.includes("TCTV") ||
    cUpper.includes("T. CƯỜNG TV") ||
    cUpper.includes("T.CƯỜNG TV") ||
    cLower.includes("luyện tiếng việt") ||
    cLower.includes("luyện tv") ||
    cLower.includes("tăng cường tiếng việt") ||
    cLower.includes("ôn tiếng việt")
  ) {
    return "TCTV";
  }

  // 6. Tăng cường / Luyện Toán (TCT)
  if (
    cUpper.includes("TCT") ||
    cUpper.includes("T. CƯỜNG T") ||
    cUpper.includes("T.CƯỜNG T") ||
    cLower.includes("luyện toán") ||
    cLower.includes("luyện t") ||
    cLower.includes("tăng cường toán") ||
    cLower.includes("ôn toán")
  ) {
    return "TCT";
  }

  // 7. Tiếng Anh
  if (cUpper.includes("TA") || cLower.includes("tiếng anh") || cLower.includes("anh văn") || cLower.includes("english")) {
    return "TA";
  }

  // 8. Tin học
  if (cUpper.includes("TH") || cLower.includes("tin học") || cLower.includes("t.học") || cLower.includes("tin hoc")) {
    return "TH";
  }

  // 9. Công nghệ
  if (clean === "CN" || clean.startsWith("CN ") || cLower.includes("công nghệ") || cLower.includes("cong nghe")) {
    return "CN";
  }

  // 10. Giáo dục Thể chất / Thể dục
  if (cUpper.includes("GDTC") || cLower.includes("thể chất") || cLower.includes("thể dục") || clean === "TD" || cUpper.includes("THỂ CHẤT")) {
    return "GDTC";
  }

  // 11. Âm nhạc
  if (cUpper.includes("AN") || cLower.includes("âm nhạc") || cUpper.includes("BDAN") || cLower.includes("am nhac")) {
    return "AN";
  }

  // 12. Mĩ thuật
  if (cUpper.includes("MT") || cLower.includes("mĩ thuật") || cLower.includes("mỹ thuật") || cUpper.includes("BDMT")) {
    return "MT";
  }

  // 13. Tự nhiên và Xã hội
  if (cUpper.includes("TNXH") || cUpper.includes("TN&XH") || cLower.includes("tự nhiên và xã hội") || cLower.includes("tự nhiên & xã hội")) {
    return "TNXH";
  }

  // 14. Lịch sử và Địa lí
  if (cUpper.includes("LS-ĐL") || cUpper.includes("LS&ĐL") || clean === "LS" || clean === "ĐL" || cLower.includes("lịch sử") || cLower.includes("địa lí") || cLower.includes("địa lý")) {
    return "LSDL";
  }

  // 15. Khoa học
  if (clean === "KH" || cLower.includes("khoa học") || cLower.includes("khoa hoc")) {
    return "KH";
  }

  // 16. Đạo đức
  if (cUpper.includes("ĐĐ") || cLower.includes("đạo đức") || cLower.includes("dao duc")) {
    return "DD";
  }

  // 17. Giáo dục địa phương
  if (cUpper.includes("GDĐP") || cLower.includes("địa phương") || cLower.includes("gdđp")) {
    return "GDDP";
  }

  // 18. Tiếng Việt chính khóa
  if (clean === "TV" || clean.startsWith("TV ") || cLower.includes("tiếng việt") || cLower === "tv") {
    return "TV";
  }

  // 19. Toán chính khóa
  if (clean === "T" || clean.startsWith("T ") || cLower.includes("toán") || cLower === "t") {
    return "TOAN";
  }

  return clean;
}

// Helper to generate full weekly schedule items for a specific class (GVCN)
export function generateScheduleForClass(
  master: MasterTimetable,
  targetClass: string,
  week: number = 1,
  startDateStr?: string,
  teacherName: string = "Nguyễn Hoàng Tuấn"
): ScheduleItem[] {
  const items: ScheduleItem[] = [];
  const dates = getWeekDates(startDateStr, week);
  const subjectCounters: Record<string, number> = {};

  DAYS_OF_WEEK.forEach((day, dIdx) => {
    // Sáng (Tiết 1 -> 5)
    for (let p = 1; p <= 5; p++) {
      const key = `${day}_Sáng_${p}`;
      const slotRow = master.slots[key] || {};
      const subjectRaw = (
        slotRow[targetClass] ||
        slotRow[targetClass.toUpperCase()] ||
        slotRow[targetClass.toLowerCase()] ||
        ""
      ).trim();
      if (subjectRaw && subjectRaw !== "") {
        const cat = getSubjectCategory(subjectRaw, day, p);
        subjectCounters[cat] = (subjectCounters[cat] || 0) + 1;
        const pInW = subjectCounters[cat];

        const item = mapRawSubjectToScheduleItem(
          subjectRaw,
          day,
          dates[dIdx],
          "Sáng",
          p,
          targetClass,
          week,
          teacherName,
          undefined,
          pInW
        );
        if (item) items.push(item);
      }
    }

    // Chiều (Tiết 1 -> 4)
    for (let p = 1; p <= 4; p++) {
      const key = `${day}_Chiều_${p}`;
      const slotRow = master.slots[key] || {};
      const subjectRaw = (
        slotRow[targetClass] ||
        slotRow[targetClass.toUpperCase()] ||
        slotRow[targetClass.toLowerCase()] ||
        ""
      ).trim();
      if (subjectRaw && subjectRaw !== "" && subjectRaw !== "SHCM") {
        const cat = getSubjectCategory(subjectRaw, day, p);
        subjectCounters[cat] = (subjectCounters[cat] || 0) + 1;
        const pInW = subjectCounters[cat];

        const item = mapRawSubjectToScheduleItem(
          subjectRaw,
          day,
          dates[dIdx],
          "Chiều",
          p,
          targetClass,
          week,
          teacherName,
          undefined,
          pInW
        );
        if (item) items.push(item);
      }
    }
  });

  return items;
}

// Helper to generate full weekly schedule items for a Specialist Teacher (GV Chuyên Bộ Môn)
export function generateSpecialistSchedule(
  master: MasterTimetable,
  teacherName: string,
  specialistSubject: string,
  week: number = 1,
  startDateStr?: string,
  assignedClasses: string[] = DEFAULT_CLASSES
): ScheduleItem[] {
  const items: ScheduleItem[] = [];
  const dates = getWeekDates(startDateStr, week);
  const classSubjectCounters: Record<string, Record<string, number>> = {};

  DAYS_OF_WEEK.forEach((day, dIdx) => {
    // Sáng (Tiết 1 -> 5)
    for (let p = 1; p <= 5; p++) {
      const key = `${day}_Sáng_${p}`;
      const slotRow = master.slots[key] || {};

      assignedClasses.forEach((cls) => {
        const cell = (slotRow[cls] || "").trim();
        if (cell && isSlotMatchingTeacherOrSubject(cell, teacherName, specialistSubject)) {
          if (!classSubjectCounters[cls]) classSubjectCounters[cls] = {};
          const cat = getSubjectCategory(cell, day, p);
          classSubjectCounters[cls][cat] = (classSubjectCounters[cls][cat] || 0) + 1;
          const pInW = classSubjectCounters[cls][cat];

          const item = mapRawSubjectToScheduleItem(
            cell,
            day,
            dates[dIdx],
            "Sáng",
            p,
            cls,
            week,
            teacherName,
            specialistSubject,
            pInW
          );
          if (item) items.push(item);
        }
      });
    }

    // Chiều (Tiết 1 -> 3)
    for (let p = 1; p <= 3; p++) {
      const key = `${day}_Chiều_${p}`;
      const slotRow = master.slots[key] || {};

      assignedClasses.forEach((cls) => {
        const cell = (slotRow[cls] || "").trim();
        if (cell && cell !== "SHCM" && isSlotMatchingTeacherOrSubject(cell, teacherName, specialistSubject)) {
          if (!classSubjectCounters[cls]) classSubjectCounters[cls] = {};
          const cat = getSubjectCategory(cell, day, p);
          classSubjectCounters[cls][cat] = (classSubjectCounters[cls][cat] || 0) + 1;
          const pInW = classSubjectCounters[cls][cat];

          const item = mapRawSubjectToScheduleItem(
            cell,
            day,
            dates[dIdx],
            "Chiều",
            p,
            cls,
            week,
            teacherName,
            specialistSubject,
            pInW
          );
          if (item) items.push(item);
        }
      });
    }
  });

  return items;
}

// Unified weekly schedule generator based on SchoolInfo
export function generateWeeklyScheduleFromTimetable(
  master: MasterTimetable,
  targetClass: string,
  teacherName: string,
  week: number,
  startDateStr: string,
  teacherType: "homeroom" | "specialist" = "homeroom",
  specialistSubject: string = "Tiếng Anh",
  assignedClasses: string[] = DEFAULT_CLASSES
): ScheduleItem[] {
  if (teacherType === "specialist") {
    return generateSpecialistSchedule(master, teacherName, specialistSubject, week, startDateStr, assignedClasses);
  }
  return generateScheduleForClass(master, targetClass, week, startDateStr, teacherName);
}

// Helper to map shorthand cell string to detailed Lesson Plan Item
export function mapRawSubjectToScheduleItem(
  raw: string,
  day: DayOfWeek,
  dateStr: string,
  session: SessionType,
  period: number,
  className: string,
  week: number,
  teacherName: string,
  specialistSubject?: string,
  subjectPeriodInWeek?: number
): ScheduleItem {
  const clean = raw.trim();
  const gradeNum = ((parseInt(className.charAt(0)) as Grade) || 5) as Grade;

  let subject = `TIẾNG VIỆT ${gradeNum}`;
  let subSubject = "";
  let lessonTitle = clean;
  let curriculumPeriod: string | number = week * 4 + period;
  let integrationNotes = "";
  let note = "";

  // 1. Detect Teacher Annotation Note from parenthesis
  if (clean.includes("(Vũ)") || clean.includes("(vũ)")) {
    note = "GV Chuyên AN: Thầy Vũ";
  } else if (clean.includes("(Lượng)") || clean.includes("(lượng)")) {
    note = "GV Chuyên MT: Thầy Lượng";
  } else if (clean.includes("(Cang)") || clean.includes("(cang)")) {
    note = "GV Bộ môn: Thầy Cang";
  } else if (clean.includes("(ÂN)") || clean.includes("(Ân)") || clean.includes("(ân)")) {
    note = "GV Chuyên GDTC/HĐTN: Thầy Ân";
  } else if (clean.includes("(Ngân)") || clean.includes("(ngân)")) {
    note = "GV Bộ môn: Cô Ngân";
  } else if (clean.includes("(Quyên)") || clean.includes("(quyên)")) {
    note = "GV Chuyên TA: Cô Quyên";
  } else if (clean.includes("(Thảo)") || clean.includes("(thảo)")) {
    note = "GV Chuyên TH: Cô Thảo";
  } else if (clean.includes("(Hoài)") || clean.includes("(hoài)")) {
    note = "PHT: Võ Văn Hoài";
  } else if (clean.includes("(Thịnh)")) {
    note = "GV Chuyên GDTC: Thầy Thịnh";
  } else if (clean.includes("(Nương)")) {
    note = "GV Chuyên TA: Cô Nương";
  } else if (clean.includes("(Phương)")) {
    note = "GV Chuyên TH: Cô D.Phương";
  } else if (clean.includes("(Thy)")) {
    note = "GV Chuyên MT: Cô Thy";
  } else if (clean.includes("(Tâm)")) {
    note = "GV Chuyên AN: Cô Nguyễn Thị Thanh Tâm";
  } else if (clean.includes("(Phước)")) {
    note = "GV Bộ môn: Thầy Phước";
  } else if (clean.includes("(Nhàn)")) {
    note = "GV Bộ môn: Cô Nhàn";
  } else if (clean.includes("(Quan)")) {
    note = "PHT: Phan Ngọc Quan";
  }

  // 2. TIẾNG ANH (TA)
  if ((clean.includes("TA") || clean.includes("Anh văn") || clean.includes("Tiếng Anh")) && !clean.includes("HĐTN") && !clean.includes("HDTN")) {
    subject = `TIẾNG ANH ${gradeNum}`;
    if (!note) note = "GV Chuyên TA: Cô Quyên";
    const pInW = subjectPeriodInWeek || ((period % 4) + 1);
    const englishDetail = getDetailedEnglishLesson(gradeNum, week, undefined, pInW);
    lessonTitle = englishDetail.lessonTitle;
    curriculumPeriod = (week - 1) * 4 + ((pInW - 1) % 4) + 1;
    integrationNotes = englishDetail.integrationNotes;
  }

  // 3. TIN HỌC (TH)
  else if ((clean.includes("TH") || clean.includes("T.học") || clean.includes("Tin học")) && !clean.includes("CN") && !clean.includes("HĐTN") && !clean.includes("HDTN")) {
    subject = `TIN HỌC ${gradeNum}`;
    if (!note) note = "GV Chuyên TH: Cô Thảo";
    const pInW = subjectPeriodInWeek || ((period % 2) + 1);
    const info = getGradeCurriculumLesson(gradeNum, "Tin học", week, pInW);
    lessonTitle = info.lessonTitle;
    curriculumPeriod = info.curriculumPeriod;
    integrationNotes = info.integrationNotes || "Tích hợp NLS (CV 3456/BGDĐT-GDTH)";
  }

  // 4. CÔNG NGHỆ (CN)
  else if (clean === "CN" || clean.startsWith("CN ") || clean.includes("Công nghệ") || clean.includes("CN (Nhàn)")) {
    subject = `CÔNG NGHỆ ${gradeNum}`;
    if (!note && clean.includes("Nhàn")) note = "GV Bộ môn: Cô Nhàn";
    const pInW = subjectPeriodInWeek || 1;
    const info = getGradeCurriculumLesson(gradeNum, "công nghệ", week, pInW);
    lessonTitle = info.lessonTitle;
    curriculumPeriod = info.curriculumPeriod;
    integrationNotes = info.integrationNotes || "Tích hợp STEM sáng tạo & Kĩ năng ứng dụng";
  }

  // 5. ÂM NHẠC (AN / BDAN) - Đồng bộ theo Phân phối chương trình môn Âm nhạc mới
  else if ((clean.includes("AN") || clean.includes("Âm nhạc") || clean.includes("BDAN")) && !clean.includes("HĐTN") && !clean.includes("HDTN") && !clean.includes("Quan")) {
    subject = `ÂM NHẠC ${gradeNum}`;
    const isEnhance = clean.includes("BDAN") || clean.includes("Bồi dưỡng") || session === "Chiều";
    subSubject = isEnhance ? "Bồi dưỡng Âm nhạc" : "Âm nhạc";
    if (!note) note = "GV Chuyên AN: Thầy Vũ";
    const musicDetail = getOfficialMusicLesson(gradeNum, week, isEnhance, session as any);
    lessonTitle = musicDetail.lessonTitle;
    curriculumPeriod = isEnhance ? `BD${week}` : week;
    integrationNotes = musicDetail.integrationNotes;
  }

  // 6. MĨ THUẬT (MT / BDMT)
  else if ((clean.includes("MT") || clean.includes("Mĩ thuật") || clean.includes("BDMT")) && !clean.includes("HĐTN") && !clean.includes("HDTN")) {
    subject = `MĨ THUẬT ${gradeNum}`;
    const isEnhance = clean.includes("BDMT") || clean.includes("Bồi dưỡng");
    subSubject = isEnhance ? "Bồi dưỡng Mĩ thuật" : "Mĩ thuật";
    if (!note) note = "GV Chuyên MT: Thầy Lượng";
    const pInW = subjectPeriodInWeek || 1;
    const info = getGradeCurriculumLesson(gradeNum, "Mĩ thuật", week, pInW);
    lessonTitle = info.lessonTitle;
    curriculumPeriod = info.curriculumPeriod;
    integrationNotes = info.integrationNotes || "Tích hợp STEM sáng tạo & QCN";
  }

  // 7. GIÁO DỤC THỂ CHẤT / THỂ DỤC (GDTC, TD)
  else if (
    (clean.includes("GDTC") || clean.toLowerCase().includes("thể chất") || clean.toLowerCase().includes("thể dục") || clean === "TD") &&
    !clean.includes("HĐTN") && !clean.includes("HDTN")
  ) {
    subject = `GIÁO DỤC THỂ CHẤT ${gradeNum}`;
    subSubject = gradeNum === 5 ? "Thể dục" : "Giáo dục thể chất";
    if (!note) note = "GV Chuyên GDTC: Thầy Ân";
    const pInW = subjectPeriodInWeek || ((period % 2) + 1);
    const info = getGradeCurriculumLesson(gradeNum, "Giáo dục thể chất", week, pInW);
    lessonTitle = info.lessonTitle;
    curriculumPeriod = info.curriculumPeriod;
    integrationNotes = info.integrationNotes || "Tích hợp rèn luyện thể lực & tác phong nhanh nhẹn";
  }

  // 8. HOẠT ĐỘNG TRẢI NGHIỆM (HĐTN)
  // 8a. Chào cờ / Sinh hoạt dưới cờ
  else if (
    clean.includes("HĐTN (CC)") ||
    clean.includes("HDTN (CC)") ||
    clean === "CC" ||
    clean.toLowerCase().includes("chào cờ") ||
    clean.toLowerCase().includes("sinh hoạt dưới cờ") ||
    clean.toUpperCase().includes("SHDC") ||
    ((clean.includes("HĐTN") || clean.includes("HDTN")) && day === "Thứ Hai" && period === 1)
  ) {
    subject = "HĐTN";
    subSubject = "Sinh hoạt dưới cờ";
    if (!note) note = "Chào cờ đầu tuần";
    const info = getGradeCurriculumLesson(gradeNum, "hoạt động trải nghiệm", week, 1);
    lessonTitle = info.lessonTitle;
    curriculumPeriod = info.curriculumPeriod;
    integrationNotes = info.integrationNotes || "Tích hợp QCN, KNS, Giáo dục truyền thống";
  } 
  // 8b. Sinh hoạt lớp (Ghép nội dung An toàn giao thông theo đúng CV và mẫu PDF)
  else if (
    clean.includes("HĐTN (SHL)") ||
    clean.includes("HDTN (SHL)") ||
    clean === "SHL" ||
    clean.toLowerCase().includes("sinh hoạt lớp") ||
    ((clean.includes("HĐTN") || clean.includes("HDTN")) && day === "Thứ Sáu" && (period === 4 || period === 5 || period === 2 || period === 3))
  ) {
    subject = "HĐTN";
    subSubject = "Sinh hoạt lớp";
    note = "Sinh hoạt cuối tuần";
    const info = getGradeCurriculumLesson(gradeNum, "hoạt động trải nghiệm", week, 3);
    const trafficLesson = getTrafficSafetyLesson(gradeNum, week);
    // Ghép nội dung ATGT vào tiết HĐTN (SHL): mỗi lớp 10 bài, 1 bài dạy 2 tiết vào tiết HĐTN(SHL) trong 2 tuần
    const cleanTheme = info.lessonTitle.replace(/^sinh\s+hoạt\s+lớp\s*[:–-]?\s*/i, "").trim();
    lessonTitle = `Sinh hoạt lớp: ${cleanTheme.toUpperCase()} & AN TOÀN GIAO THÔNG (${trafficLesson.title})`;
    curriculumPeriod = info.curriculumPeriod;
    integrationNotes = `Tích hợp An toàn giao thông: ${trafficLesson.title} - ${trafficLesson.subTitle}; KNS, Quản lý cảm xúc, Tự đánh giá nề nếp`;
  } 
  // 8c. Hoạt động giáo dục theo chủ đề
  else if (clean.includes("HĐTN") || clean.includes("HDTN") || clean.toLowerCase().includes("trải nghiệm")) {
    subject = "HĐTN";
    subSubject = "Hoạt động giáo dục theo chủ đề";
    if (!note && clean.includes("Thy")) note = "GV Chuyên MT: Cô Thy";
    if (!note && clean.includes("Nhàn")) note = "GV Bộ môn: Cô Nhàn";
    const info = getGradeCurriculumLesson(gradeNum, "hoạt động trải nghiệm", week, 2);
    lessonTitle = info.lessonTitle;
    curriculumPeriod = info.curriculumPeriod;
    integrationNotes = info.integrationNotes || "Tích hợp KNS & QCN";
  }

  // 9. KĨ NĂNG SỐNG (KNS)
  else if (clean.toUpperCase().includes("KNS") || clean.toLowerCase().includes("kĩ năng sống") || clean.toLowerCase().includes("kỹ năng sống")) {
    subject = `KĨ NĂNG SỐNG ${gradeNum}`;
    subSubject = "Kĩ năng sống";
    const pInW = subjectPeriodInWeek || 1;
    lessonTitle = `Giáo dục Kĩ năng sống tuần ${week}: Kĩ năng tự phục vụ và giao tiếp văn minh`;
    curriculumPeriod = `KNS${pInW}`;
    integrationNotes = "Tích hợp rèn thói quen tự lập, tôn trọng và hợp tác";
  }

  // 10. LỊCH SỬ VÀ ĐỊA LÍ (LS-ĐL, LS, ĐL)
  else if (
    clean.includes("LS-ĐL") ||
    clean.includes("LS&ĐL") ||
    clean === "LS" ||
    clean === "ĐL" ||
    clean.toLowerCase().includes("lịch sử") ||
    clean.toLowerCase().includes("địa lí") ||
    clean.toLowerCase().includes("địa lý")
  ) {
    subject = `LỊCH SỬ VÀ ĐỊA LÍ ${gradeNum}`;
    subSubject = clean.includes("ĐL") && !clean.includes("LS") ? "Địa lí" : (clean.includes("LS") && !clean.includes("ĐL") ? "Lịch sử" : "Lịch sử và Địa lí");
    const pInW = subjectPeriodInWeek || ((day === "Thứ Hai" || day === "Thứ Ba") ? 1 : 2);
    const info = getGradeCurriculumLesson(gradeNum, "lịch sử và địa lí", week, pInW);
    lessonTitle = info.lessonTitle;
    curriculumPeriod = info.curriculumPeriod;
    integrationNotes = info.integrationNotes || "Giáo dục lòng yêu nước, bảo vệ chủ quyền biên giới & biển đảo";
  }

  // 11. TỰ NHIÊN VÀ XÃ HỘI (TNXH)
  else if (
    clean.toUpperCase().includes("TNXH") ||
    clean.toUpperCase().includes("TN&XH") ||
    clean.toLowerCase().includes("tự nhiên và xã hội") ||
    clean.toLowerCase().includes("tự nhiên & xã hội") ||
    clean.toLowerCase().includes("tu nhien va xa hoi")
  ) {
    subject = `TỰ NHIÊN VÀ XÃ HỘI ${gradeNum}`;
    if (!note) note = clean.includes("Phước") ? "GV Bộ môn: Thầy Phước" : "";
    const pInW = subjectPeriodInWeek || ((day === "Thứ Hai" || day === "Thứ Ba") ? 1 : 2);
    const info = getGradeCurriculumLesson(gradeNum, "tự nhiên và xã hội", week, pInW);
    lessonTitle = info.lessonTitle;
    curriculumPeriod = info.curriculumPeriod;
    integrationNotes = info.integrationNotes || "Tích hợp giáo dục môi trường & chăm sóc sức khỏe";
  }

  // 12. KHOA HỌC (KH)
  else if (clean === "KH" || clean.toLowerCase().includes("khoa học") || clean.toLowerCase().includes("khoa hoc")) {
    subject = `KHOA HỌC ${gradeNum}`;
    const pInW = subjectPeriodInWeek || ((day === "Thứ Hai" || day === "Thứ Ba") ? 1 : 2);
    const info = getGradeCurriculumLesson(gradeNum, "khoa học", week, pInW);
    lessonTitle = info.lessonTitle;
    curriculumPeriod = info.curriculumPeriod;
    integrationNotes = info.integrationNotes || "Tích hợp tư duy khoa học thực nghiệm & STEM";
  }

  // 13. ĐẠO ĐỨC (ĐĐ)
  else if (clean.includes("ĐĐ") || clean.toLowerCase().includes("đạo đức") || clean.toLowerCase().includes("dao duc")) {
    subject = `ĐẠO ĐỨC ${gradeNum}`;
    if (!note && clean.includes("Quan")) note = "PHT: Phan Ngọc Quan";
    if (!note && clean.includes("Nhàn")) note = "GV Bộ môn: Cô Nhàn";
    const pInW = subjectPeriodInWeek || 1;
    const info = getGradeCurriculumLesson(gradeNum, "đạo đức", week, pInW);
    lessonTitle = info.lessonTitle;
    curriculumPeriod = info.curriculumPeriod;
    integrationNotes = info.integrationNotes || "Giáo dục đạo đức & Quyền con người";
  }

  // 14. GIÁO DỤC ĐỊA PHƯƠNG (GDĐP)
  else if (clean.toUpperCase().includes("GDĐP") || clean.toLowerCase().includes("địa phương")) {
    subject = `GIÁO DỤC ĐỊA PHƯƠNG ${gradeNum}`;
    subSubject = "Tài liệu giáo dục địa phương";
    lessonTitle = `Tài liệu Giáo dục địa phương tuần ${week}`;
    curriculumPeriod = `GDĐP${week}`;
    integrationNotes = "Giáo dục truyền thống văn hóa quê hương";
  }

  // 15. TĂNG CƯỜNG TIẾNG VIỆT (TCTV, Luyện TV)
  else if (
    clean === "TCTV" ||
    clean.includes("TCTV") ||
    clean.includes("T. cường TV") ||
    clean.includes("T.cường TV") ||
    clean.toLowerCase().includes("luyện tiếng việt") ||
    clean.toLowerCase().includes("luyện tv") ||
    clean.toLowerCase().includes("tăng cường tiếng việt")
  ) {
    subject = `TIẾNG VIỆT ${gradeNum}`;
    subSubject = "Tăng cường Tiếng Việt";
    if (!note && clean.includes("Nhàn")) note = "GV Bộ môn: Cô Nhàn";
    const pInW = subjectPeriodInWeek || 1;
    lessonTitle = `Luyện tập Tiếng Việt: Củng cố rèn chữ, từ và câu tuần ${week}`;
    curriculumPeriod = `TCTV${pInW}`;
    integrationNotes = "Rèn luyện kĩ năng đọc, viết và diễn đạt lưu loát";
  }

  // 16. TĂNG CƯỜNG TOÁN (TCT, Luyện Toán)
  else if (
    clean === "TCT" ||
    clean.includes("TCT") ||
    clean.includes("T. cường T") ||
    clean.includes("T.cường T") ||
    clean.toLowerCase().includes("luyện toán") ||
    clean.toLowerCase().includes("luyện t") ||
    clean.toLowerCase().includes("tăng cường toán")
  ) {
    subject = `TOÁN ${gradeNum}`;
    subSubject = "Tăng cường Toán";
    if (!note && clean.includes("Phước")) note = "GV Bộ môn: Thầy Phước";
    if (!note && clean.includes("Nhàn")) note = "GV Bộ môn: Cô Nhàn";
    const pInW = subjectPeriodInWeek || 1;
    lessonTitle = `Luyện tập thực hành Toán tuần ${week}`;
    curriculumPeriod = `TCT${pInW}`;
    integrationNotes = "Củng cố kĩ năng tính toán và giải toán có lời văn";
  }

  // 17. TIẾNG VIỆT CHÍNH KHÓA (TV)
  else if (
    clean === "TV" ||
    clean.startsWith("TV ") ||
    clean === "Tiếng Việt" ||
    clean.toLowerCase().includes("tiếng việt") ||
    clean.toLowerCase().includes("tieng viet")
  ) {
    subject = `TIẾNG VIỆT ${gradeNum}`;
    const pInW = subjectPeriodInWeek || 1;
    const info = getGradeCurriculumLesson(gradeNum, "tiếng việt", week, Math.min(pInW, 12));
    lessonTitle = info.lessonTitle;
    subSubject = info.subSubject || "";
    curriculumPeriod = info.curriculumPeriod;
    integrationNotes = info.integrationNotes || "";
  }

  // 18. TOÁN CHÍNH KHÓA (T)
  else if (
    clean === "T" ||
    clean.startsWith("T ") ||
    clean === "Toán" ||
    clean.toLowerCase().includes("toán") ||
    clean.toLowerCase().includes("toan")
  ) {
    subject = `TOÁN ${gradeNum}`;
    const pInW = subjectPeriodInWeek || 1;
    const info = getGradeCurriculumLesson(gradeNum, "toán", week, Math.min(pInW, 5));
    lessonTitle = info.lessonTitle;
    curriculumPeriod = info.curriculumPeriod;
    integrationNotes = info.integrationNotes || "";
  }

  // 19. HỌP TOÀN TRƯỜNG / HỘI ĐỒNG SƯ PHẠM
  else if (clean.toUpperCase() === "HỌP" || clean.toUpperCase().includes("HỌP")) {
    subject = "HỌP";
    subSubject = "Hội đồng sư phạm";
    lessonTitle = "Họp hội đồng sư phạm / Sinh hoạt chuyên môn";
    curriculumPeriod = "";
    if (!note) note = "Họp toàn trường";
    integrationNotes = "";
  }

  // 20. TỰ CHỌN HOẶC MÔN HỌC KHÁC
  else {
    subject = clean.toUpperCase();
    subSubject = "";
    lessonTitle = clean;
    curriculumPeriod = period;
    integrationNotes = "Thực hiện theo kế hoạch nhà trường";
  }

  return {
    id: `item-${day}-${session}-${period}-${className}-${Math.random().toString(36).substring(2, 7)}`,
    day,
    dateStr,
    session,
    period,
    subject,
    subSubject,
    curriculumPeriod,
    lessonTitle: cleanLessonTitle(lessonTitle),
    integrationNotes,
    note,
    teacherName,
    className,
  };
}

/**
 * Trích xuất tên giáo viên chuyên cho tiết chuyên môn
 * (Ví dụ: Thầy Thy, Cô Nương, Thầy Nhàn, Thầy Thịnh, Cô Tâm, Thầy Phương, Thầy Vũ, Thầy Lượng...)
 */
export function getSpecialistTeacherName(rawCell: string = "", subject: string = "", note: string = ""): string | null {
  const combined = `${rawCell} ${subject} ${note}`.toLowerCase();

  // Khớp theo tên cụ thể trong TKB / Ghi chú
  if (combined.includes("nương")) return "Cô Nương";
  if (combined.includes("thy")) return "Thầy Thy";
  if (combined.includes("nhàn")) return "Thầy Nhàn";
  if (combined.includes("thịnh")) return "Thầy Thịnh";
  if (combined.includes("tâm")) return "Cô Tâm";
  if (combined.includes("phương")) return "Thầy Phương";
  if (combined.includes("vũ")) return "Thầy Vũ";
  if (combined.includes("lượng")) return "Thầy Lượng";
  if (combined.includes("thảo")) return "Cô Thảo";
  if (combined.includes("quyên")) return "Cô Quyên";
  if (combined.includes("ân") && !combined.includes("ngân") && !combined.includes("nhàn")) return "Thầy Ân";
  if (combined.includes("ngân")) return "Cô Ngân";
  if (combined.includes("cang")) return "Thầy Cang";
  if (combined.includes("hoài")) return "Thầy Hoài";
  if (combined.includes("phước")) return "Thầy Phước";
  if (combined.includes("quan")) return "Thầy Quan";

  // Khớp mặc định theo môn học chuyên nếu không có tên trong cell
  const sUpper = subject.toUpperCase();
  if (sUpper.includes("TIẾNG ANH") || sUpper.includes("ANH VĂN") || sUpper === "TA") return "Cô Nương";
  if (sUpper.includes("MĨ THUẬT") || sUpper.includes("MỸ THUẬT") || sUpper === "MT") return "Thầy Thy";
  if (sUpper.includes("ÂM NHẠC") || sUpper.includes("AN") || sUpper.includes("BDAN")) return "Cô Tâm";
  if (sUpper.includes("TIN HỌC") || sUpper === "TH") return "Thầy Phương";
  if (sUpper.includes("THỂ CHẤT") || sUpper.includes("GDTC") || sUpper === "TD") return "Thầy Thịnh";
  if (sUpper.includes("CÔNG NGHỆ") || sUpper === "CN") return "Thầy Nhàn";

  return null;
}

/**
 * Kiểm tra xem tiết học trong LBG của lớp có phải là tiết do Giáo viên chuyên giảng dạy hay không
 */
export function isSpecialistPeriodForClass(item: ScheduleItem): boolean {
  const sub = item.subject.toUpperCase();

  // Các môn do GVCN dạy chính không phải chuyên:
  if (
    sub.includes("TIẾNG VIỆT") ||
    sub.includes("TOÁN") ||
    sub.includes("TCTV") ||
    sub.includes("TCT")
  ) {
    return false;
  }

  // Tiết Chào cờ và Sinh hoạt lớp do GVCN chủ trì
  if (
    item.subSubject?.includes("Sinh hoạt dưới cờ") ||
    item.subSubject?.includes("Sinh hoạt lớp") ||
    item.lessonTitle?.toLowerCase().includes("chào cờ") ||
    item.lessonTitle?.toLowerCase().includes("sinh hoạt lớp")
  ) {
    return false;
  }

  // Tiết Họp hội đồng sư phạm / chuyên môn
  if (sub === "HỌP" || item.lessonTitle?.toLowerCase().includes("họp")) {
    return false;
  }

  // Tiết HĐTN do GV chuyên dạy (ví dụ Thầy Thy, Thầy Ân)
  if (sub.includes("HĐTN") && (item.note?.includes("Thy") || item.note?.includes("ÂN") || item.note?.includes("Ân") || item.note?.includes("Nhàn"))) {
    return true;
  }

  // Các môn chuyên biệt
  if (
    sub.includes("TIẾNG ANH") ||
    sub.includes("TIN HỌC") ||
    sub.includes("MĨ THUẬT") ||
    sub.includes("MỸ THUẬT") ||
    sub.includes("ÂM NHẠC") ||
    sub.includes("THỂ CHẤT") ||
    sub.includes("GDTC") ||
    sub.includes("CÔNG NGHỆ")
  ) {
    return true;
  }

  // Kiểm tra qua ghi chú
  if (item.note?.includes("GV Chuyên") || item.note?.includes("GV Bộ môn")) {
    // Đạo đức, Khoa học, LS&ĐL nếu GVCN dạy thì không tính
    if (sub.includes("ĐẠO ĐỨC") || sub.includes("KHOA HỌC") || sub.includes("LỊCH SỬ")) {
      return false;
    }
    return true;
  }

  return false;
}

/**
 * Lấy tên bài học hiển thị trong Lịch báo giảng (LBG):
 * "Lưu ý LBG của lớp thì các tiết dạy GV chuyên thì chỉ ghi tên gv chuyên, không ghi tên bài"
 */
export function getDisplayLessonTitleInLBG(item: ScheduleItem, isHomeroomClassView: boolean = true): string {
  // Nếu là lịch báo giảng của lớp và là tiết do GV chuyên đảm nhận:
  if (isHomeroomClassView && isSpecialistPeriodForClass(item)) {
    const specTeacher = getSpecialistTeacherName("", item.subject, item.note || "");
    if (specTeacher) {
      return specTeacher; // Chỉ ghi tên GV chuyên (ví dụ: "Thầy Thy", "Cô Nương", "Thầy Nhàn"...)
    }
  }

  // Tiết họp
  if (item.subject === "HỌP" || item.lessonTitle?.toLowerCase().includes("họp")) {
    return "Họp hội đồng sư phạm / Sinh hoạt chuyên môn";
  }

  return cleanLessonTitle(item.lessonTitle);
}

