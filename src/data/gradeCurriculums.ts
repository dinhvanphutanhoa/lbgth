import { Grade } from "../types";
import { getDetailedMusicLesson } from "./musicLessonDetails";
import { getOfficialMusicLesson } from "./musicCurriculumOfficial";
import { getDetailedEnglishLesson } from "./englishLessonDetails";
import { findGrade5Integration } from "./grade5IntegrationPlan";
import { cleanLessonTitle } from "../utils/lessonTitleHelper";

import { GRADE_1_CURRICULUM_DATA } from "./curriculums/grade1Curriculum";
import { GRADE_2_CURRICULUM_DATA } from "./curriculums/grade2Curriculum";
import { GRADE_3_CURRICULUM_DATA } from "./curriculums/grade3Curriculum";
import { GRADE_4_CURRICULUM_DATA } from "./curriculums/grade4Curriculum";
import { GRADE_5_CURRICULUM_DATA } from "./curriculums/grade5Curriculum";

export interface LessonInfo {
  lessonTitle: string;
  subSubject?: string;
  curriculumPeriod: number | string;
  songTitle?: string;
  composer?: string;
  songLyrics?: string;
  integrationNotes?: string;
  specificCompetencies?: string[];
  aiIntegration?: string;
  digitalCompetence?: string;
  humanRights?: string;
  defense?: string;
  nutrition?: string;
  environment?: string;
  stem?: string;
  lifeSkills?: string;
  teacherMaterials?: string[];
  studentMaterials?: string[];
  act1Teacher?: string;
  act1Student?: string;
  act2Teacher?: string;
  act2Student?: string;
  act3Teacher?: string;
  act3Student?: string;
  act4Teacher?: string;
  act4Student?: string;
}

// Re-export full comprehensive grade curricula (Weeks 1 to 18+)
export const GRADE_1_CURRICULUM = GRADE_1_CURRICULUM_DATA;
export const GRADE_2_CURRICULUM = GRADE_2_CURRICULUM_DATA;
export const GRADE_3_CURRICULUM = GRADE_3_CURRICULUM_DATA;
export const GRADE_4_CURRICULUM = GRADE_4_CURRICULUM_DATA;
export const GRADE_5_CURRICULUM = GRADE_5_CURRICULUM_DATA;

// -------------------------------------------------------------
// SPECIALIST SUBJECT CURRICULUM (Môn Chuyên theo từng khối)
// -------------------------------------------------------------
export function getSpecialistLessonInfo(
  specialistSubject: string,
  grade: Grade,
  week: number,
  periodInWeek: number
): LessonInfo {
  const subLower = specialistSubject.toLowerCase().trim();

  // 1. MĨ THUẬT
  if (subLower.includes("mĩ thuật") || subLower.includes("mỹ thuật") || subLower.includes("bdmt") || subLower === "mt" || subLower.startsWith("mt ") || subLower.includes("(thy)")) {
    if (grade === 5) {
      const g5Mt = findGrade5Integration("Mĩ thuật", week, periodInWeek);
      return {
        lessonTitle: cleanLessonTitle(g5Mt?.lessonTitle || `Chủ đề ${Math.min(week, 8)}: Sắc màu quê hương - Sáng tạo sản phẩm mĩ thuật`),
        curriculumPeriod: week,
        integrationNotes: g5Mt ? `${g5Mt.integrationCode}: ${g5Mt.description}` : "Tích hợp STEM: Khám phá đường nét, màu sắc và sáng tạo nghệ thuật."
      };
    }
    return {
      lessonTitle: cleanLessonTitle(`Chủ đề ${Math.min(week, 8)}: Sắc màu quê hương - Sáng tạo sản phẩm mĩ thuật (Tiết ${((periodInWeek - 1) % 2) + 1})`),
      curriculumPeriod: week,
      integrationNotes: "Tích hợp STEM: Khám phá đường nét, màu sắc và sáng tạo mĩ thuật."
    };
  }

  // 2. TIẾNG ANH (Lớp 1, 2, 3, 4, 5 - Đồng bộ chuẩn Cô Quyên & Khối 3, 4, 5 toàn trường)
  if (subLower.includes("tiếng anh") || subLower.includes("anh văn") || subLower === "ta" || subLower.startsWith("ta ") || subLower.includes("(nương)") || subLower.includes("(quyên)")) {
    const curP = (week - 1) * 4 + ((periodInWeek - 1) % 4) + 1;
    const enLesson = getDetailedEnglishLesson(grade, week, undefined, periodInWeek);
    return {
      lessonTitle: cleanLessonTitle(enLesson.lessonTitle),
      curriculumPeriod: curP,
      integrationNotes: enLesson.integrationNotes,
      specificCompetencies: enLesson.specificCompetencies
    };
  }

  // 3. TIN HỌC (Lớp 1-5)
  if (subLower.includes("tin học") || subLower.includes("t.học") || subLower === "th" || subLower.startsWith("th ") || subLower.includes("(phương)")) {
    const curP = (week - 1) * 2 + ((periodInWeek - 1) % 2) + 1;
    if (grade <= 2) {
      return {
        lessonTitle: cleanLessonTitle(`Làm quen thế giới số: Trò chơi rèn luyện tư duy logic (Tiết ${((periodInWeek - 1) % 2) + 1})`),
        curriculumPeriod: curP,
        integrationNotes: "Tích hợp phát triển Năng lực số (CV 3456) và an toàn thiết bị điện tử."
      };
    }
    if (grade === 3) {
      return {
        lessonTitle: cleanLessonTitle(`Chủ đề ${Math.min(week, 6)}: Máy tính và em - Thao tác chuột và bàn phím (Tiết ${((periodInWeek - 1) % 2) + 1})`),
        curriculumPeriod: curP,
        integrationNotes: "Tích hợp NLS 1.1.CB1a: Khám phá thiết bị số an toàn, bảo vệ mắt."
      };
    }
    if (grade === 4) {
      return {
        lessonTitle: cleanLessonTitle(`Chủ đề ${Math.min(week, 6)}: Soạn thảo văn bản và chèn hình ảnh minh họa (Tiết ${((periodInWeek - 1) % 2) + 1})`),
        curriculumPeriod: curP,
        integrationNotes: "Tích hợp NLS: Kỹ năng định dạng tài liệu số chuẩn A4, bảo mật thông tin."
      };
    }
    const g5Th = findGrade5Integration("Tin học", week, periodInWeek);
    return {
      lessonTitle: cleanLessonTitle(g5Th?.lessonTitle || `Chủ đề ${Math.min(week, 6)}: Khám phá thế giới số & Ứng dụng AI trong học tập (Tiết ${((periodInWeek - 1) % 2) + 1})`),
      curriculumPeriod: curP,
      integrationNotes: g5Th ? `${g5Th.integrationCode}: ${g5Th.description}` : "Tích hợp NLS (CV 3456): 1.1.CB1a, 5.2.CB1a, An toàn thông tin mạng."
    };
  }

  // 4. ÂM NHẠC (Đồng bộ theo Phân phối chương trình môn Âm nhạc mới nhất)
  if (subLower.includes("âm nhạc") || subLower.includes("am nhac") || subLower.includes("bdan") || subLower === "an" || subLower.startsWith("an ") || subLower.includes("(vũ)") || subLower.includes("(tâm)")) {
    const isEnhance = subLower.includes("tăng cường") || subLower.includes("bồi dưỡng") || subLower.includes("bdan") || subLower.includes("tcan") || periodInWeek > 1;
    const detail = getOfficialMusicLesson(grade, week, isEnhance, isEnhance ? "Chiều" : "Sáng");
    let integNotes = detail.integrationNotes;
    if (grade === 5) {
      const g5An = findGrade5Integration("Âm nhạc", week, periodInWeek);
      if (g5An) {
        integNotes = `${g5An.integrationCode}: ${g5An.description} (${detail.integrationNotes})`;
      }
    }
    return {
      lessonTitle: cleanLessonTitle(detail.lessonTitle),
      songTitle: detail.songTitle,
      composer: detail.composer,
      curriculumPeriod: isEnhance ? `BD${week}` : week,
      integrationNotes: integNotes,
      specificCompetencies: detail.specificCompetencies,
      teacherMaterials: detail.teacherMaterials,
      studentMaterials: detail.studentMaterials,
      act1Teacher: detail.activities[0]?.teacherActivity,
      act1Student: detail.activities[0]?.studentActivity,
      act2Teacher: detail.activities[1]?.teacherActivity,
      act2Student: detail.activities[1]?.studentActivity,
      act3Teacher: detail.activities[2]?.teacherActivity,
      act3Student: detail.activities[2]?.studentActivity,
      act4Teacher: detail.activities[3]?.teacherActivity,
      act4Student: detail.activities[3]?.studentActivity,
    };
  }

  // 5. GIÁO DỤC THỂ CHẤT
  if (subLower.includes("thể chất") || subLower.includes("gdtc")) {
    if (grade === 5) {
      const g5Gdtc = findGrade5Integration("GDTC", week, periodInWeek);
      return {
        lessonTitle: cleanLessonTitle(g5Gdtc?.lessonTitle || `Bài tập phát triển chung & Đội hình đội ngũ (Tiết ${((periodInWeek - 1) % 2) + 1})`),
        curriculumPeriod: (week - 1) * 2 + ((periodInWeek - 1) % 2) + 1,
        integrationNotes: g5Gdtc ? `${g5Gdtc.integrationCode}: ${g5Gdtc.description}` : "Tích hợp GDDD: Lợi ích vận động và chế độ uống nước đầy đủ."
      };
    }
    return {
      lessonTitle: cleanLessonTitle(`Bài tập phát triển chung & Đội hình đội ngũ (Tiết ${((periodInWeek - 1) % 2) + 1})`),
      curriculumPeriod: (week - 1) * 2 + ((periodInWeek - 1) % 2) + 1,
      integrationNotes: "Tích hợp GDDD: Lợi ích vận động và chế độ uống nước đầy đủ."
    };
  }

  // 6. HĐTN
  if (grade === 5) {
    const g5Hdtn = findGrade5Integration("HĐTN", week, periodInWeek);
    if (g5Hdtn) {
      return {
        lessonTitle: cleanLessonTitle(g5Hdtn.lessonTitle || `Hoạt động trải nghiệm: Sinh hoạt dưới cờ & GD theo chủ đề - Tuần ${week}`),
        curriculumPeriod: (week - 1) * 3 + periodInWeek,
        integrationNotes: `${g5Hdtn.integrationCode}: ${g5Hdtn.description}`
      };
    }
  }
  return {
    lessonTitle: cleanLessonTitle(`Hoạt động trải nghiệm: Hoạt động giáo dục theo chủ đề - Tuần ${week}`),
    curriculumPeriod: week,
    integrationNotes: "Tích hợp rèn nếp sống tự lập và kỹ năng giao tiếp."
  };
}

// -------------------------------------------------------------
// MASTER LOOKUP FUNCTION: GET EXACT LESSON BY GRADE & SUBJECT
// -------------------------------------------------------------
export function getGradeCurriculumLesson(
  grade: Grade,
  subject: string,
  week: number,
  periodInWeek: number = 1
): LessonInfo {
  const normSub = subject.toLowerCase().trim();

  // Pick curriculum dictionary by grade
  let gradeDict = GRADE_5_CURRICULUM;
  if (Number(grade) === 1) gradeDict = GRADE_1_CURRICULUM;
  else if (Number(grade) === 2) gradeDict = GRADE_2_CURRICULUM;
  else if (Number(grade) === 3) gradeDict = GRADE_3_CURRICULUM;
  else if (Number(grade) === 4) gradeDict = GRADE_4_CURRICULUM;
  else if (Number(grade) === 5) gradeDict = GRADE_5_CURRICULUM;

  // Match subject key
  for (const [key, fn] of Object.entries(gradeDict)) {
    if (normSub.includes(key) || key.includes(normSub)) {
      const res = fn(week, periodInWeek);
      // Synchronize Grade 5 official integration plan
      if (Number(grade) === 5) {
        const g5 = findGrade5Integration(subject, week, periodInWeek);
        if (g5) {
          if (!res.integrationNotes || !res.integrationNotes.includes(g5.integrationCode)) {
            res.integrationNotes = res.integrationNotes 
              ? `${g5.integrationCode}: ${g5.description} (${res.integrationNotes})`
              : `${g5.integrationCode}: ${g5.description}`;
          }
          if (res.lessonTitle.includes(`Tuần ${week}`) && g5.lessonTitle) {
            res.lessonTitle = g5.lessonTitle;
          }
        }
      }
      res.lessonTitle = cleanLessonTitle(res.lessonTitle);
      return res;
    }
  }

  // Fallback for specialist subjects
  if (normSub.includes("tiếng anh") || normSub.includes("anh văn") || normSub.includes("ta") ||
      normSub.includes("tin học") || normSub.includes("th") ||
      normSub.includes("âm nhạc") || normSub.includes("an") ||
      normSub.includes("mĩ thuật") || normSub.includes("mt") ||
      normSub.includes("thể chất") || normSub.includes("gdtc")) {
    const spec = getSpecialistLessonInfo(subject, grade, week, periodInWeek);
    spec.lessonTitle = cleanLessonTitle(spec.lessonTitle);
    return spec;
  }

  const g5Fallback = Number(grade) === 5 ? findGrade5Integration(subject, week, periodInWeek) : undefined;
  const fallbackTitle = cleanLessonTitle(g5Fallback?.lessonTitle || `${subject} - Phân phối chương trình tuần ${week} (Tiết ${periodInWeek})`);
  return {
    lessonTitle: fallbackTitle,
    curriculumPeriod: (week - 1) * 2 + periodInWeek,
    integrationNotes: g5Fallback 
      ? `${g5Fallback.integrationCode}: ${g5Fallback.description}`
      : `Tích hợp GDPT 2018 môn ${subject}.`
  };
}
