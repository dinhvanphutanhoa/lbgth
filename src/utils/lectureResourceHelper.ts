import { Grade, LessonPlan, ScheduleItem, SchoolInfo } from "../types";

export type BookSeries = "all" | "kntt" | "ctst" | "canhdieu";
export type ResourceKind = "powerpoint" | "giaoan" | "hoclтельности" | "all";

export interface LectureLinkInfo {
  title: string;
  cleanTitle: string;
  subject: string;
  grade: Grade;
  className: string;
  week: number;
  curriculumPeriod?: string | number;
  dayOfWeek?: string;
  dateStr?: string;
  teacherName?: string;
  tailieuGiaoDucUrl: string;
  tailieuGiaoVienUrl: string;
  tailieuGiaoDucCategoryUrl: string;
  tailieuGiaoVienCategoryUrl: string;
}

export const BOOK_SERIES_OPTIONS: { id: BookSeries; label: string; short: string }[] = [
  { id: "all", label: "Tất cả các bộ sách", short: "Tất cả" },
  { id: "kntt", label: "Kết nối tri thức với cuộc sống", short: "KNTT" },
  { id: "ctst", label: "Chân trời sáng tạo", short: "CTST" },
  { id: "canhdieu", label: "Cánh diều", short: "Cánh diều" },
];

export const TAILIEUGIAODUC_GRADE_PORTALS: { grade: Grade; label: string; url: string }[] = [
  { grade: 1, label: "Kho Bài Giảng Lớp 1", url: "https://tailieugiaoduc.edu.vn/?s=b%C3%A0i+gi%E1%BA%A3ng+l%E1%BB%9Bp+1" },
  { grade: 2, label: "Kho Bài Giảng Lớp 2", url: "https://tailieugiaoduc.edu.vn/?s=b%C3%A0i+gi%E1%BA%A3ng+l%E1%BB%9Bp+2" },
  { grade: 3, label: "Kho Bài Giảng Lớp 3", url: "https://tailieugiaoduc.edu.vn/?s=b%C3%A0i+gi%E1%BA%A3ng+l%E1%BB%9Bp+3" },
  { grade: 4, label: "Kho Bài Giảng Lớp 4", url: "https://tailieugiaoduc.edu.vn/?s=b%C3%A0i+gi%E1%BA%A3ng+l%E1%BB%9Bp+4" },
  { grade: 5, label: "Kho Bài Giảng Lớp 5", url: "https://tailieugiaoduc.edu.vn/?s=b%C3%A0i+gi%E1%BA%A3ng+l%E1%BB%9Bp+5" },
];

export const RESOURCE_KIND_OPTIONS: { id: ResourceKind; label: string }[] = [
  { id: "powerpoint", label: "Bài giảng PowerPoint (.pptx)" },
  { id: "giaoan", label: "Giáo án / KHBD Word (.docx)" },
  { id: "all", label: "Tất cả tài liệu & học liệu số" },
];

export function cleanLessonTitleForSearch(title: string): string {
  if (!title) return "";
  return title
    .replace(/^(Đọc|Viết|Nói và nghe|Luyện từ và câu|Góc sáng tạo|Tập đọc|Chính tả|Tập làm văn|Luyện tập|Khám phá|Ôn tập):\s*/i, "")
    .replace(/^Bài\s+\d+\s*[:.-]\s*/i, "")
    .replace(/^Tiết\s+\d+\s*[:.-]\s*/i, "")
    .replace(/^Unit\s+\d+\s*[:.-]\s*/i, "")
    .trim();
}

export function buildSearchQueries(
  lessonTitle: string,
  subject: string,
  grade: Grade,
  bookSeries: BookSeries = "kntt",
  resourceKind: ResourceKind = "powerpoint"
) {
  const cleanTitle = cleanLessonTitleForSearch(lessonTitle);
  const seriesSuffix =
    bookSeries === "kntt"
      ? "Kết nối tri thức"
      : bookSeries === "ctst"
      ? "Chân trời sáng tạo"
      : bookSeries === "canhdieu"
      ? "Cánh diều"
      : "";

  const kindPrefix =
    resourceKind === "powerpoint"
      ? "Bài giảng PowerPoint"
      : resourceKind === "giaoan"
      ? "Giáo án điện tử KHBD"
      : "Tài liệu bài giảng";

  // Search string for tailieugiaoduc.edu.vn
  const queryGD = `${kindPrefix} ${cleanTitle || lessonTitle} ${subject} lớp ${grade} ${seriesSuffix}`.trim();
  
  // Search string for tailieugiaovien.edu.vn
  const queryGV = `Bài giảng ${cleanTitle || lessonTitle} ${subject} lớp ${grade} ${seriesSuffix}`.trim();

  const tailieuGiaoDucUrl = `https://tailieugiaoduc.edu.vn/?s=${encodeURIComponent(queryGD)}`;
  const tailieuGiaoVienUrl = `https://tailieugiaovien.edu.vn/?s=${encodeURIComponent(queryGV)}`;

  // Direct subject & grade portal search
  const catQueryGD = `Bài giảng ${subject} lớp ${grade} ${seriesSuffix}`.trim();
  const catQueryGV = `Bài giảng ${subject} lớp ${grade} ${seriesSuffix}`.trim();

  const tailieuGiaoDucCategoryUrl = `https://tailieugiaoduc.edu.vn/?s=${encodeURIComponent(catQueryGD)}`;
  const tailieuGiaoVienCategoryUrl = `https://tailieugiaovien.edu.vn/?s=${encodeURIComponent(catQueryGV)}`;

  return {
    cleanTitle,
    queryGD,
    queryGV,
    tailieuGiaoDucUrl,
    tailieuGiaoVienUrl,
    tailieuGiaoDucCategoryUrl,
    tailieuGiaoVienCategoryUrl,
  };
}

export function getLectureLinksForLessonPlan(
  plan: LessonPlan,
  bookSeries: BookSeries = "kntt",
  resourceKind: ResourceKind = "powerpoint"
): LectureLinkInfo {
  const queries = buildSearchQueries(
    plan.lessonTitle,
    plan.subject,
    plan.grade,
    bookSeries,
    resourceKind
  );

  return {
    title: plan.lessonTitle,
    cleanTitle: queries.cleanTitle,
    subject: plan.subject,
    grade: plan.grade,
    className: plan.className,
    week: plan.week,
    curriculumPeriod: plan.curriculumPeriod,
    dayOfWeek: plan.dayOfWeek,
    dateStr: plan.dateStr,
    teacherName: plan.teacherName,
    tailieuGiaoDucUrl: queries.tailieuGiaoDucUrl,
    tailieuGiaoVienUrl: queries.tailieuGiaoVienUrl,
    tailieuGiaoDucCategoryUrl: queries.tailieuGiaoDucCategoryUrl,
    tailieuGiaoVienCategoryUrl: queries.tailieuGiaoVienCategoryUrl,
  };
}

export function getLectureLinksForScheduleItem(
  item: ScheduleItem,
  grade: Grade,
  week: number,
  bookSeries: BookSeries = "kntt",
  resourceKind: ResourceKind = "powerpoint"
): LectureLinkInfo {
  const queries = buildSearchQueries(
    item.lessonTitle,
    item.subject,
    grade,
    bookSeries,
    resourceKind
  );

  return {
    title: item.lessonTitle,
    cleanTitle: queries.cleanTitle,
    subject: item.subject,
    grade,
    className: item.className,
    week,
    curriculumPeriod: item.curriculumPeriod,
    dayOfWeek: item.day,
    dateStr: item.dateStr,
    teacherName: item.teacherName,
    tailieuGiaoDucUrl: queries.tailieuGiaoDucUrl,
    tailieuGiaoVienUrl: queries.tailieuGiaoVienUrl,
    tailieuGiaoDucCategoryUrl: queries.tailieuGiaoDucCategoryUrl,
    tailieuGiaoVienCategoryUrl: queries.tailieuGiaoVienCategoryUrl,
  };
}

/**
 * Generate formatted text / markdown / HTML list of all lecture links for the teacher's week
 */
export function generateWeeklyLectureLinksReport(
  schoolInfo: SchoolInfo,
  links: LectureLinkInfo[],
  bookSeries: BookSeries = "kntt"
): string {
  const seriesName = BOOK_SERIES_OPTIONS.find((b) => b.id === bookSeries)?.label || "Kết nối tri thức";
  let content = `DANH MỤC LIÊN KẾT TẢI BÀI GIẢNG ĐIỆN TỬ & GIÁO ÁN\n`;
  content += `Trường: ${schoolInfo.schoolName}\n`;
  content += `Giáo viên: ${schoolInfo.teacherName} (${schoolInfo.teacherType === "homeroom" ? `GVCN Lớp ${schoolInfo.className}` : `GV Chuyên ${schoolInfo.specialistSubject}`})\n`;
  content += `Khối: ${schoolInfo.grade} - Lớp: ${schoolInfo.className} - Tuần: ${schoolInfo.week}\n`;
  content += `Bộ sách ưu tiên: ${seriesName}\n`;
  content += `Trang web nguồn: https://tailieugiaoduc.edu.vn/ | https://tailieugiaovien.edu.vn/\n`;
  content += `==========================================================\n\n`;

  links.forEach((item, idx) => {
    content += `${idx + 1}. [${item.dayOfWeek || "Tuần"} - Tiết ${item.curriculumPeriod || ""}] ${item.subject}: ${item.title}\n`;
    content += `   + Lớp: ${item.className}\n`;
    content += `   + Tải trên tailieugiaoduc.edu.vn: ${item.tailieuGiaoDucUrl}\n`;
    content += `   + Tải trên tailieugiaovien.edu.vn: ${item.tailieuGiaoVienUrl}\n\n`;
  });

  return content;
}
