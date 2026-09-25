import { LessonPlan } from "../types";

export type WorksheetLanguage = "vi" | "en";

export interface QuestionItem {
  id: string;
  type: "mcq" | "short_answer" | "true_false";
  question: string;
  options?: string[]; // E.g. ["A. ...", "B. ...", "C. ...", "D. ..."]
  correctAnswer: string;
  explanation?: string;
  points?: number;
}

export interface SubjectWorksheet {
  subject: string;
  subjectKey: string;
  grade: number;
  week: number;
  title: string;
  subtitle: string;
  timeAllowedMinutes: number;
  loigiaihayUrl: string;
  part1_MultipleChoice: QuestionItem[];
  part2_PracticeOrEssay: QuestionItem[];
  notesForTeacher?: string;
  lang: WorksheetLanguage;
}

/**
 * Normalizes subject string into a standardized key
 */
export function getSubjectKey(subject: string): string {
  const s = (subject || "").toLowerCase().trim();
  if (s.includes("tiếng anh") || s.includes("english") || s === "ta") return "english";
  if (s.includes("toán") || s.includes("math")) return "math";
  if (s.includes("tiếng việt") || s.includes("vietnamese") || s === "tv") return "vietnamese";
  if (s.includes("tự nhiên") || s.includes("tnxh") || s.includes("social")) return "social";
  if (s.includes("lịch sử") || s.includes("địa lí") || s.includes("ls") || s.includes("history")) return "history";
  if (s.includes("khoa học") || s.includes("science")) return "science";
  if (s.includes("công nghệ") || s.includes("tech")) return "tech";
  if (s.includes("đạo đức") || s.includes("ethics") || s.includes("moral")) return "ethics";
  return "other";
}

/**
 * Build Loigiaihay URL based on grade and subject
 */
export function getLoigiaihaySubjectUrl(grade: number, subject: string, week: number): string {
  const key = getSubjectKey(subject);
  const searchBase = "https://loigiaihay.com/tim-kiem?q=";

  if (key === "english") {
    const code = grade === 1 ? "94" : grade === 2 ? "95" : grade === 3 ? "96" : grade === 4 ? "97" : "98";
    return `https://loigiaihay.com/tieng-anh-lop-${grade}-global-success-c${code}.html`;
  }
  if (key === "math") {
    const code = grade === 1 ? "70" : grade === 2 ? "71" : grade === 3 ? "72" : grade === 4 ? "73" : "74";
    return `https://loigiaihay.com/toan-lop-${grade}-ket-noi-tri-thuc-c${code}.html`;
  }
  if (key === "vietnamese") {
    const code = grade === 1 ? "75" : grade === 2 ? "76" : grade === 3 ? "77" : grade === 4 ? "78" : "79";
    return `https://loigiaihay.com/tieng-viet-lop-${grade}-ket-noi-tri-thuc-c${code}.html`;
  }
  if (key === "social") {
    const code = grade === 1 ? "80" : grade === 2 ? "81" : "82";
    return `https://loigiaihay.com/tu-nhien-va-xa-hoi-lop-${grade}-ket-noi-tri-thuc-c${code}.html`;
  }
  if (key === "history") {
    const code = grade === 4 ? "83" : "84";
    return `https://loigiaihay.com/lich-su-va-dia-li-lop-${grade}-ket-noi-tri-thuc-c${code}.html`;
  }
  if (key === "science") {
    const code = grade === 4 ? "85" : "86";
    return `https://loigiaihay.com/khoa-hoc-lop-${grade}-ket-noi-tri-thuc-c${code}.html`;
  }
  if (key === "tech") {
    const code = grade === 4 ? "87" : "88";
    return `https://loigiaihay.com/cong-nghe-lop-${grade}-ket-noi-tri-thuc-c${code}.html`;
  }
  if (key === "ethics") {
    const code = grade === 1 ? "89" : grade === 2 ? "90" : grade === 3 ? "91" : grade === 4 ? "92" : "93";
    return `https://loigiaihay.com/dao-duc-lop-${grade}-ket-noi-tri-thuc-c${code}.html`;
  }

  return `${searchBase}${encodeURIComponent(`phieu bai tap cuoi tuan ${subject} lop ${grade} tuan ${week} loigiaihay`)}`;
}

/**
 * Returns subject name translated according to language
 */
export function getSubjectDisplayName(key: string, lang: WorksheetLanguage = "en"): string {
  if (lang === "en") {
    switch (key) {
      case "english": return "English";
      case "math": return "Mathematics";
      case "vietnamese": return "Vietnamese Language";
      case "social": return "Natural & Social Science";
      case "history": return "History & Geography";
      case "science": return "Science";
      case "tech": return "Technology";
      case "ethics": return "Ethics & Morals";
      default: return "General Subject";
    }
  } else {
    switch (key) {
      case "english": return "Tiếng Anh";
      case "math": return "Toán";
      case "vietnamese": return "Tiếng Việt";
      case "social": return "Tự nhiên và Xã hội";
      case "history": return "Lịch sử và Địa lí";
      case "science": return "Khoa học";
      case "tech": return "Công nghệ";
      case "ethics": return "Đạo đức";
      default: return "Môn học";
    }
  }
}

/**
 * Generates English Worksheet (Tiếng Anh 1-5)
 */
function generateEnglishSubjectWorksheet(
  grade: number,
  week: number,
  loigiaihayUrl: string,
  lang: WorksheetLanguage,
  lessonHint: string
): SubjectWorksheet {
  const isEn = lang === "en";
  const subject = isEn ? "English" : "Tiếng Anh";

  if (grade === 1) {
    return {
      subject,
      subjectKey: "english",
      grade,
      week,
      lang,
      title: isEn
        ? `WEEKLY WORKSHEET - WEEK ${week} - ENGLISH 1`
        : `PHIẾU BÀI TẬP CUỐI TUẦN ${week} - TIẾNG ANH 1`,
      subtitle: isEn
        ? `Global Success / Primary English - Unit Review Week ${week}${lessonHint}`
        : `Bộ sách Global Success - Ôn tập Tuần ${week}${lessonHint}`,
      timeAllowedMinutes: 35,
      loigiaihayUrl,
      part1_MultipleChoice: [
        {
          id: "en1_q1",
          type: "mcq",
          question: isEn
            ? "Look at the picture ☀️. Choose the correct greeting in the morning:"
            : "Nhìn tranh buổi sáng ☀️. Chọn lời chào đúng nhất vào buổi sáng:",
          options: ["A. Good morning", "B. Good night", "C. Goodbye", "D. See you later"],
          correctAnswer: "A",
          explanation: isEn ? "We say 'Good morning' to greet teachers and friends in the morning." : "'Good morning' có nghĩa là Chào buổi sáng.",
          points: 1,
        },
        {
          id: "en1_q2",
          type: "mcq",
          question: isEn
            ? "What is this school object: ✏️ ?"
            : "Đây là đồ dùng học tập gì: ✏️ ?",
          options: ["A. A book", "B. A pencil", "C. A bag", "D. An eraser"],
          correctAnswer: "B",
          explanation: isEn ? "✏️ is a pencil (bút chì)." : "✏️ là cây bút chì (a pencil).",
          points: 1,
        },
        {
          id: "en1_q3",
          type: "mcq",
          question: isEn
            ? "What color is the red apple 🍎 ?"
            : "Quả táo 🍎 có màu gì?",
          options: ["A. Red", "B. Blue", "C. Yellow", "D. Green"],
          correctAnswer: "A",
          explanation: isEn ? "The apple is red." : "Quả táo có màu đỏ (Red).",
          points: 1,
        },
        {
          id: "en1_q4",
          type: "mcq",
          question: isEn
            ? "How many cats are there: 🐱 🐱 ?"
            : "Có bao nhiêu chú mèo: 🐱 🐱 ?",
          options: ["A. One cat", "B. Two cats", "C. Three cats", "D. Four cats"],
          correctAnswer: "B",
          explanation: isEn ? "Count: 1, 2 cats." : "Đếm: 1, 2 chú mèo (Two cats).",
          points: 1,
        },
      ],
      part2_PracticeOrEssay: [
        {
          id: "en1_q5",
          type: "short_answer",
          question: isEn
            ? "Exercise 1. Reorder the letters to make meaningful English words: a) b-o-k-o -> [       ]    b) p-e-n -> [       ]    c) c-a-t -> [       ]"
            : "Bài 1. Sắp xếp lại các chữ cái thành từ tiếng Anh đúng: a) b-o-k-o -> [       ]    b) p-e-n -> [       ]    c) c-a-t -> [       ]",
          correctAnswer: "a) BOOK;  b) PEN;  c) CAT",
          explanation: isEn ? "Spelling: book (sách), pen (bút mực), cat (con mèo)." : "Từ vựng: book, pen, cat.",
          points: 3,
        },
        {
          id: "en1_q6",
          type: "short_answer",
          question: isEn
            ? "Exercise 2. Complete the dialogue:\nTom: Hello, I am Tom. What is your name?\nLan: Hi Tom, my name is ....................................."
            : "Bài 2. Hoàn thành đoạn hội thoại:\nTom: Hello, I am Tom. What is your name?\nLan: Hi Tom, my name is .....................................",
          correctAnswer: "Lan (hoặc: My name is Lan / Lan).",
          explanation: isEn ? "Greeting and introducing one's name: My name is [Name]." : "Cách chào hỏi và giới thiệu tên bản thân.",
          points: 3,
        },
      ],
    };
  }

  if (grade === 2) {
    return {
      subject,
      subjectKey: "english",
      grade,
      week,
      lang,
      title: isEn
        ? `WEEKLY WORKSHEET - WEEK ${week} - ENGLISH 2`
        : `PHIẾU BÀI TẬP CUỐI TUẦN ${week} - TIẾNG ANH 2`,
      subtitle: isEn
        ? `Global Success / Primary English - Family, Body Parts & Food - Week ${week}${lessonHint}`
        : `Bộ sách Global Success - Gia đình, Các bộ phận cơ thể & Đồ ăn - Tuần ${week}${lessonHint}`,
      timeAllowedMinutes: 40,
      loigiaihayUrl,
      part1_MultipleChoice: [
        {
          id: "en2_q1",
          type: "mcq",
          question: isEn
            ? "Look at the picture 👩. She is my ...:"
            : "Quan sát tranh 👩. Cô ấy là ai trong gia đình:",
          options: ["A. mother", "B. brother", "C. father", "D. grandfather"],
          correctAnswer: "A",
          explanation: isEn ? "'Mother' means mẹ." : "'Mother' nghĩa là mẹ.",
          points: 1,
        },
        {
          id: "en2_q2",
          type: "mcq",
          question: isEn
            ? "I have two 👀 ... on my face."
            : "Tôi có hai 👀 ... trên khuôn mặt:",
          options: ["A. eyes", "B. nose", "C. mouth", "D. ear"],
          correctAnswer: "A",
          explanation: isEn ? "Two eyes (đôi mắt)." : "Two eyes là đôi mắt.",
          points: 1,
        },
        {
          id: "en2_q3",
          type: "mcq",
          question: isEn
            ? "Do you like apples? - Yes, I ...:"
            : "Câu trả lời đúng: Do you like apples? - Yes, I ...",
          options: ["A. do", "B. am", "C. have", "D. can"],
          correctAnswer: "A",
          explanation: isEn ? "Short answer with 'Do you like...?': Yes, I do." : "Câu hỏi bắt đầu bằng Do you... thì trả lời: Yes, I do.",
          points: 1,
        },
        {
          id: "en2_q4",
          type: "mcq",
          question: isEn
            ? "What shape is a sandwich 🥪 ?"
            : "Miếng bánh sandwich 🥪 thường có hình gì:",
          options: ["A. Circle", "B. Triangle", "C. Star", "D. Heart"],
          correctAnswer: "B",
          explanation: isEn ? "A sandwich cut in half is a triangle." : "Hình tam giác là triangle.",
          points: 1,
        },
      ],
      part2_PracticeOrEssay: [
        {
          id: "en2_q5",
          type: "short_answer",
          question: isEn
            ? "Exercise 1. Fill in the blanks with 'This is' or 'These are':\na) .................................... my new school bag.\nb) .................................... my colorful pencils."
            : "Bài 1. Điền 'This is' hoặc 'These are' vào chỗ trống:\na) .................................... my new school bag.\nb) .................................... my colorful pencils.",
          correctAnswer: "a) This is;   b) These are",
          explanation: isEn ? "'This is' for singular noun; 'These are' for plural nouns." : "'This is' đi với danh từ số ít, 'These are' đi với danh từ số nhiều.",
          points: 3,
        },
        {
          id: "en2_q6",
          type: "short_answer",
          question: isEn
            ? "Exercise 2. Write 2 simple English sentences to introduce your best friend (his/her name and age).\nExample: This is Nam. He is seven years old."
            : "Bài 2. Viết 2 câu tiếng Anh đơn giản giới thiệu bạn thân của em (tên và tuổi).\nVí dụ: This is Nam. He is seven years old.",
          correctAnswer: "Học sinh tự viết theo mẫu: This is [Tên]. He/She is [Số tuổi] years old.",
          explanation: isEn ? "Practice sentence structure: This is [Name]. He/She is [Age] years old." : "Cấu trúc giới thiệu bạn bè.",
          points: 3,
        },
      ],
    };
  }

  if (grade === 3) {
    return {
      subject,
      subjectKey: "english",
      grade,
      week,
      lang,
      title: isEn
        ? `WEEKLY WORKSHEET - WEEK ${week} - ENGLISH 3`
        : `PHIẾU BÀI TẬP CUỐI TUẦN ${week} - TIẾNG ANH 3`,
      subtitle: isEn
        ? `Global Success / Primary English - School Activities & Abilities - Week ${week}${lessonHint}`
        : `Bộ sách Global Success - Hoạt động trường học & Khả năng - Tuần ${week}${lessonHint}`,
      timeAllowedMinutes: 40,
      loigiaihayUrl,
      part1_MultipleChoice: [
        {
          id: "en3_q1",
          type: "mcq",
          question: isEn
            ? "What do you do at break time? - I play ... with my friends."
            : "What do you do at break time? - I play ... with my friends.",
          options: ["A. badminton", "B. book", "C. pen", "D. ruler"],
          correctAnswer: "A",
          explanation: isEn ? "'Play badminton' means chơi cầu lông." : "Play badminton: chơi cầu lông.",
          points: 1,
        },
        {
          id: "en3_q2",
          type: "mcq",
          question: isEn
            ? "Where is my pencil case? - It is ... the table."
            : "Where is my pencil case? - It is ... the table.",
          options: ["A. on", "B. to", "C. with", "D. from"],
          correctAnswer: "A",
          explanation: isEn ? "'On the table' means ở trên bàn." : "On the table: ở trên bàn.",
          points: 1,
        },
        {
          id: "en3_q3",
          type: "mcq",
          question: isEn
            ? "Can you ride a bicycle? - No, I ...:"
            : "Can you ride a bicycle? - No, I ...:",
          options: ["A. can't", "B. don't", "C. not", "D. am not"],
          correctAnswer: "A",
          explanation: isEn ? "Negative answer for 'Can you...?': No, I can't." : "No, I can't (tôi không thể).",
          points: 1,
        },
        {
          id: "en3_q4",
          type: "mcq",
          question: isEn
            ? "Choose the odd one out:"
            : "Tìm từ khác loại so với các từ còn lại:",
          options: ["A. Ruler", "B. Rubber", "C. Pencil sharpener", "D. Football"],
          correctAnswer: "D",
          explanation: isEn ? "Football is a sport; the others are school supplies." : "Football là môn thể thao, còn lại là đồ dùng học tập.",
          points: 1,
        },
      ],
      part2_PracticeOrEssay: [
        {
          id: "en3_q5",
          type: "short_answer",
          question: isEn
            ? "Exercise 1. Put the words in correct order to make meaningful sentences:\na) your / is / What / name / ?  ->  ..........................................................\nb) school / This / my / new / is / .  ->  .........................................................."
            : "Bài 1. Sắp xếp các từ thành câu hoàn chỉnh:\na) your / is / What / name / ?  ->  ..........................................................\nb) school / This / my / new / is / .  ->  ..........................................................",
          correctAnswer: "a) What is your name?  b) This is my new school.",
          explanation: isEn ? "Grammar: Question word + be + subject? and This is + noun phrase." : "Cấu trúc ngữ pháp câu hỏi và câu giới thiệu.",
          points: 3,
        },
        {
          id: "en3_q6",
          type: "short_answer",
          question: isEn
            ? "Exercise 2. Read the short passage and answer the questions:\n'Hello, I am Linh. I am eight years old. At break time, I like reading comic books in the library with Mai.'\n1. How old is Linh?\n2. What does she do at break time?"
            : "Bài 2. Đọc đoạn văn ngắn và trả lời câu hỏi:\n'Hello, I am Linh. I am eight years old. At break time, I like reading comic books in the library with Mai.'\n1. How old is Linh?\n2. What does she do at break time?",
          correctAnswer: "1. Linh is eight (8) years old.\n2. She likes reading comic books in the library.",
          explanation: isEn ? "Reading comprehension: identify specific details in the text." : "Đọc hiểu: tìm thông tin về tuổi và hoạt động giờ ra chơi.",
          points: 3,
        },
      ],
    };
  }

  if (grade === 4) {
    return {
      subject,
      subjectKey: "english",
      grade,
      week,
      lang,
      title: isEn
        ? `WEEKLY WORKSHEET - WEEK ${week} - ENGLISH 4`
        : `PHIẾU BÀI TẬP CUỐI TUẦN ${week} - TIẾNG ANH 4`,
      subtitle: isEn
        ? `Global Success / Primary English - Daily Routines, Subjects & Hobbies - Week ${week}${lessonHint}`
        : `Bộ sách Global Success - Thời gian biểu, Môn học yêu thích & Sở thích - Tuần ${week}${lessonHint}`,
      timeAllowedMinutes: 40,
      loigiaihayUrl,
      part1_MultipleChoice: [
        {
          id: "en4_q1",
          type: "mcq",
          question: isEn
            ? "What time is it? - It is seven ... in the morning."
            : "What time is it? - It is seven ... in the morning.",
          options: ["A. o'clock", "B. hour", "C. minutes", "D. watch"],
          correctAnswer: "A",
          explanation: isEn ? "Exact hour time format: seven o'clock." : "Giờ chẵn dùng 'o'clock'.",
          points: 1,
        },
        {
          id: "en4_q2",
          type: "mcq",
          question: isEn
            ? "Where are you from, Akiko? - I am from ...:"
            : "Where are you from, Akiko? - I am from ...:",
          options: ["A. Japan", "B. Japanese", "C. English", "D. American"],
          correctAnswer: "A",
          explanation: isEn ? "'I am from + Country name' -> Japan." : "Sau 'from' là tên quốc gia (Japan).",
          points: 1,
        },
        {
          id: "en4_q3",
          type: "mcq",
          question: isEn
            ? "What is your favorite subject? - I like ... because I love numbers and calculations."
            : "What is your favorite subject? - I like ... because I love numbers and calculations.",
          options: ["A. Maths", "B. Music", "C. Art", "D. Physical Education"],
          correctAnswer: "A",
          explanation: isEn ? "Maths involves numbers and calculations." : "Môn Toán (Maths) gắn liền với các con số và phép tính.",
          points: 1,
        },
        {
          id: "en4_q4",
          type: "mcq",
          question: isEn
            ? "What does your father do on Sundays? - He usually ... gardening in the backyard."
            : "What does your father do on Sundays? - He usually ... gardening in the backyard.",
          options: ["A. does", "B. do", "C. doing", "D. did"],
          correctAnswer: "A",
          explanation: isEn ? "Subject 'He' takes singular verb 'does' in present simple tense." : "Chủ ngữ ngôi thứ ba số ít (He) chia động từ: does.",
          points: 1,
        },
      ],
      part2_PracticeOrEssay: [
        {
          id: "en4_q5",
          type: "short_answer",
          question: isEn
            ? "Exercise 1. Give the correct form of the verbs in brackets:\na) Everyday, Peter (walk) .................................... to school with his friends.\nb) Look! The children (play) .................................... football on the playground."
            : "Bài 1. Cho dạng đúng của động từ trong ngoặc:\na) Everyday, Peter (walk) .................................... to school with his friends.\nb) Look! The children (play) .................................... football on the playground.",
          correctAnswer: "a) walks;   b) are playing",
          explanation: isEn ? "Present Simple tense (walks) vs. Present Continuous tense (are playing)." : "Thì hiện tại đơn và hiện tại tiếp diễn.",
          points: 3,
        },
        {
          id: "en4_q6",
          type: "short_answer",
          question: isEn
            ? "Exercise 2. Write a short paragraph (3 to 4 sentences) describing your typical school day (wake-up time, favorite subjects, break-time activity)."
            : "Bài 2. Viết một đoạn văn ngắn tiếng Anh (3 đến 4 câu) về ngày đi học của em (giờ dậy, môn học yêu thích, hoạt động giờ ra chơi).",
          correctAnswer: "Bài viết mẫu: I get up at 6:30 a.m. every morning. I go to school at 7:00. My favorite subjects are English and Maths. At break time, I often play badminton with my friends.",
          explanation: isEn ? "Writing assessment: clarity, grammatical accuracy, appropriate vocabulary." : "Đánh giá kĩ năng viết câu hoàn chỉnh và dùng thì hiện tại đơn.",
          points: 3,
        },
      ],
    };
  }

  // Grade 5
  return {
    subject,
    subjectKey: "english",
    grade,
    week,
    lang,
    title: isEn
      ? `WEEKLY WORKSHEET - WEEK ${week} - ENGLISH 5`
      : `PHIẾU BÀI TẬP CUỐI TUẦN ${week} - TIẾNG ANH 5`,
    subtitle: isEn
      ? `Global Success / Primary English - Hometown, Future Careers & Health - Week ${week}${lessonHint}`
      : `Bộ sách Global Success - Quê hương, Nghề nghiệp tương lai & Sức khỏe - Tuần ${week}${lessonHint}`,
    timeAllowedMinutes: 40,
    loigiaihayUrl,
    part1_MultipleChoice: [
      {
        id: "en5_q1",
        type: "mcq",
        question: isEn
          ? "Where do you live? - I live ... Flat 18 on the third floor of Ha Noi Tower."
          : "Where do you live? - I live ... Flat 18 on the third floor of Ha Noi Tower.",
        options: ["A. in", "B. on", "C. at", "D. with"],
        correctAnswer: "A",
        explanation: isEn ? "'Live in + Flat / Apartment' -> live in Flat 18." : "Sống trong căn hộ dùng giới từ: in.",
        points: 1,
      },
      {
        id: "en5_q2",
        type: "mcq",
        question: isEn
          ? "What would you like to be in the future? - I would like to be a ... because I want to look after sick people."
          : "What would you like to be in the future? - I would like to be a ... because I want to look after sick people.",
        options: ["A. doctor", "B. pilot", "C. architect", "D. singer"],
        correctAnswer: "A",
        explanation: isEn ? "A doctor takes care of sick people." : "Doctor (bác sĩ) chăm sóc người ốm.",
        points: 1,
      },
      {
        id: "en5_q3",
        type: "mcq",
        question: isEn
          ? "How often do you have English? - I have it ...:"
          : "How often do you have English? - I have it ...:",
        options: ["A. four times a week", "B. twice day", "C. yesterday morning", "D. next week"],
        correctAnswer: "A",
        explanation: isEn ? "Frequency phrase: four times a week (4 lần một tuần)." : "Chỉ tần suất: four times a week.",
        points: 1,
      },
      {
        id: "en5_q4",
        type: "mcq",
        question: isEn
          ? "What did you do on your summer holiday? - We ... to Ha Long Bay by coach."
          : "What did you do on your summer holiday? - We ... to Ha Long Bay by coach.",
        options: ["A. went", "B. go", "C. goes", "D. going"],
        correctAnswer: "A",
        explanation: isEn ? "Past simple tense of 'go' is 'went'." : "Quá khứ của go là went.",
        points: 1,
      },
    ],
    part2_PracticeOrEssay: [
      {
        id: "en5_q5",
        type: "short_answer",
        question: isEn
          ? "Exercise 1. Rewrite the sentences without changing their meaning:\na) My favorite school subject is English.\n-> I like .........................................................................................................\nb) She gets up at 6:00 a.m. every morning.\n-> She wakes ...................................................................................................."
          : "Bài 1. Viết lại các câu sau sao cho nghĩa không đổi:\na) My favorite school subject is English.\n-> I like .........................................................................................................\nb) She gets up at 6:00 a.m. every morning.\n-> She wakes ....................................................................................................",
        correctAnswer: "a) I like English best (hoặc: I like English most).\nb) She wakes up at 6:00 a.m. every morning.",
        explanation: isEn ? "Sentence transformation exercises for Grade 5." : "Chuyển đổi câu tương đương.",
        points: 3,
      },
      {
        id: "en5_q6",
        type: "short_answer",
        question: isEn
          ? "Exercise 2. Guided Writing: Write 4 to 5 sentences about your dream career in the future. Guide questions: What job would you like to do? Why? What will you study or practice to do that job?"
          : "Bài 2. Viết đoạn văn (4 đến 5 câu) về nghề nghiệp ước mơ tương lai của em. Gợi ý: Nghề em muốn làm là gì? Tại sao? Em cần học tập và rèn luyện điều gì để đạt được ước mơ đó?",
        correctAnswer: "Bài viết mẫu: In the future, I would like to be an English teacher. I love English and I want to teach children in my hometown. To achieve my dream, I study hard every day, practice speaking English with friends, and read English storybooks.",
        explanation: isEn ? "Writing assessment: paragraph coherence, vocabulary, grammar." : "Đánh giá kĩ năng diễn đạt đoạn văn mạch lạc.",
        points: 3,
      },
    ],
  };
}

/**
 * Question banks tailored for Grade 1-3 and Grade 4-5
 */
export function generateWorksheetData(
  grade: number,
  week: number,
  subject: string,
  lessonPlans?: LessonPlan[],
  lang: WorksheetLanguage = "en"
): SubjectWorksheet {
  const normSubject = subject.trim();
  const key = getSubjectKey(normSubject);
  const loigiaihayUrl = getLoigiaihaySubjectUrl(grade, normSubject, week);
  const isEn = lang === "en";

  // Find corresponding lesson plan title if available
  const relevantPlan = lessonPlans?.find((p) => {
    const s = p.subject.toLowerCase();
    const target = normSubject.toLowerCase();
    return s.includes(target) || target.includes(s);
  });

  const lessonHint = relevantPlan ? ` (${isEn ? "Lesson" : "Bài học"}: ${relevantPlan.lessonTitle})` : "";

  // 1. TIẾNG ANH (ENGLISH)
  if (key === "english") {
    return generateEnglishSubjectWorksheet(grade, week, loigiaihayUrl, lang, lessonHint);
  }

  // 2. TOÁN (MATHEMATICS)
  if (key === "math") {
    const subjName = isEn ? "Mathematics" : "Toán";

    if (grade === 1) {
      return {
        subject: subjName,
        subjectKey: "math",
        grade,
        week,
        lang,
        title: isEn ? `WEEKLY WORKSHEET - WEEK ${week} - MATHEMATICS 1` : `PHIẾU BÀI TẬP CUỐI TUẦN ${week} - TOÁN 1`,
        subtitle: isEn ? `Primary Mathematics - Geometry, Positions & Counting - Week ${week}${lessonHint}` : `Bộ sách Kết nối tri thức với cuộc sống - Ôn tập Tuần ${week}${lessonHint}`,
        timeAllowedMinutes: 35,
        loigiaihayUrl,
        part1_MultipleChoice: [
          {
            id: "t1_q1",
            type: "mcq",
            question: isEn ? "Which item is on your RIGHT hand side when sitting upright at your desk?" : "Đâu là đồ vật ở bên tay PHẢI của em khi ngồi học ngay ngắn?",
            options: isEn ? ["A. Eraser on the left", "B. Pencil case on the right", "C. Notebook in front", "D. Blackboard behind"] : ["A. Cục tẩy đặt bên trái", "B. Hộp bút đặt bên phải", "C. Cuốn sách phía trước", "D. Bảng con phía sau"],
            correctAnswer: "B",
            explanation: isEn ? "The pencil case is on the right hand side." : "Hộp bút đặt ở phía tay phải của học sinh.",
            points: 1,
          },
          {
            id: "t1_q2",
            type: "mcq",
            question: isEn ? "Which of the following objects has a CIRCLE shape?" : "Hình nào dưới đây là hình TRÒN?",
            options: isEn ? ["A. Round wall clock face", "B. Square window frame", "C. Straight ruler", "D. Chalk box"] : ["A. Mặt đồng hồ treo tường tròn", "B. Khung cửa sổ vuông", "C. Thước kẻ thẳng", "D. Hộp phấn"],
            correctAnswer: "A",
            explanation: isEn ? "A round wall clock face has a circle shape." : "Mặt đồng hồ treo tường có dạng hình tròn.",
            points: 1,
          },
          {
            id: "t1_q3",
            type: "mcq",
            question: isEn ? "Count: How many red apples are there: 🍎 🍎 🍎 ?" : "Có bao nhiêu quả táo đỏ: 🍎 🍎 🍎 ?",
            options: isEn ? ["A. 1 apple", "B. 2 apples", "C. 3 apples", "D. 4 apples"] : ["A. 1 quả", "B. 2 quả", "C. 3 quả", "D. 4 quả"],
            correctAnswer: "C",
            explanation: isEn ? "Counting: 1, 2, 3 red apples." : "Đếm: 1, 2, 3 quả táo đỏ.",
            points: 1,
          },
          {
            id: "t1_q4",
            type: "mcq",
            question: isEn ? "Comparing numbers 0 and 1, which number is smaller?" : "Số gồm 0 và 1 đồ vật, số nào bé hơn?",
            options: isEn ? ["A. Number 1", "B. Number 0", "C. They are equal", "D. Cannot compare"] : ["A. Số 1", "B. Số 0", "C. Hai số bằng nhau", "D. Không so sánh được"],
            correctAnswer: "B",
            explanation: isEn ? "0 is smaller than 1 (0 < 1)." : "0 bé hơn 1 (0 < 1).",
            points: 1,
          },
        ],
        part2_PracticeOrEssay: [
          {
            id: "t1_q5",
            type: "short_answer",
            question: isEn ? "Exercise 1. Fill in the missing number in the blank: 1, 2, ... , 4, 5." : "Bài 1. Điền số thích hợp vào chỗ chấm: 1, 2, ... , 4, 5.",
            correctAnswer: "3",
            explanation: isEn ? "The consecutive natural sequence: 1, 2, 3, 4, 5." : "Dãy số tự nhiên liên tiếp từ 1 đến 5 là: 1, 2, 3, 4, 5.",
            points: 3,
          },
          {
            id: "t1_q6",
            type: "short_answer",
            question: isEn ? "Exercise 2. Name two objects shaped like a square and two objects shaped like a circle in your classroom or home." : "Bài 2. Nối đồ vật có dạng hình vuông và hình tròn trong thực tế xung quanh em.",
            correctAnswer: isEn ? "Square: floor tile, handkerchief. Circle: plate, bottle cap." : "Hình vuông: viên gạch men lát nền, khăn tay. Hình tròn: cái đĩa, nắp chai.",
            explanation: isEn ? "Geometry identification in daily surroundings." : "Học sinh nhận diện chính xác các hình học quen thuộc trong cuộc sống.",
            points: 3,
          },
        ],
      };
    }

    if (grade === 2) {
      return {
        subject: subjName,
        subjectKey: "math",
        grade,
        week,
        lang,
        title: isEn ? `WEEKLY WORKSHEET - WEEK ${week} - MATHEMATICS 2` : `PHIẾU BÀI TẬP CUỐI TUẦN ${week} - TOÁN 2`,
        subtitle: isEn ? `Primary Mathematics - Addition and Subtraction within 20 and 100 - Week ${week}${lessonHint}` : `Bộ sách Kết nối tri thức - Ôn tập phép cộng, phép trừ có nhớ phạm vi 20, tia số${lessonHint}`,
        timeAllowedMinutes: 40,
        loigiaihayUrl,
        part1_MultipleChoice: [
          {
            id: "t2_q1",
            type: "mcq",
            question: isEn ? "What is the number immediately preceding (predecessor of) 30?" : "Số liền trước của số 30 là số nào?",
            options: isEn ? ["A. 28", "B. 29", "C. 31", "D. 32"] : ["A. 28", "B. 29", "C. 31", "D. 32"],
            correctAnswer: "B",
            explanation: isEn ? "Predecessor is 30 - 1 = 29." : "Muốn tìm số liền trước của một số, ta lấy số đó bớt đi 1: 30 - 1 = 29.",
            points: 1,
          },
          {
            id: "t2_q2",
            type: "mcq",
            question: isEn ? "Calculate: 9 + 5 = ?" : "Kết quả của phép tính: 9 + 5 = ?",
            options: isEn ? ["A. 13", "B. 14", "C. 15", "D. 16"] : ["A. 13", "B. 14", "C. 15", "D. 16"],
            correctAnswer: "B",
            explanation: isEn ? "9 + 5 = 14." : "9 + 5 = 9 + 1 + 4 = 10 + 4 = 14.",
            points: 1,
          },
          {
            id: "t2_q3",
            type: "mcq",
            question: isEn ? "Fill in the appropriate comparison symbol: 17 - 8 ... 9 + 1" : "Điền dấu thích hợp: 17 - 8 ... 9 + 1",
            options: isEn ? ["A. >", "B. <", "C. =", "D. No sign"] : ["A. >", "B. <", "C. =", "D. Không có dấu"],
            correctAnswer: "B",
            explanation: isEn ? "17 - 8 = 9; 9 + 1 = 10. Since 9 < 10, the answer is <." : "17 - 8 = 9; 9 + 1 = 10. Vì 9 < 10 nên dấu cần điền là <.",
            points: 1,
          },
          {
            id: "t2_q4",
            type: "mcq",
            question: isEn ? "A ribbon is 15 dm long. A piece of 7 dm is cut off. How long is the remaining ribbon?" : "Một sợi dây dài 15dm, người ta cắt đi 7dm. Hỏi sợi dây còn lại dài bao nhiêu đề-xi-mét?",
            options: isEn ? ["A. 7 dm", "B. 8 dm", "C. 9 dm", "D. 10 dm"] : ["A. 7dm", "B. 8dm", "C. 9dm", "D. 10dm"],
            correctAnswer: "B",
            explanation: isEn ? "Remaining length: 15 - 7 = 8 dm." : "Độ dài sợi dây còn lại là: 15 - 7 = 8 (dm).",
            points: 1,
          },
        ],
        part2_PracticeOrEssay: [
          {
            id: "t2_q5",
            type: "short_answer",
            question: isEn ? "Exercise 1. Calculate vertically: a) 45 + 23    b) 89 - 36" : "Bài 1. Đặt tính rồi tính: a) 45 + 23    b) 89 - 36",
            correctAnswer: "a) 45 + 23 = 68;  b) 89 - 36 = 53",
            explanation: isEn ? "Calculate units first, then tens." : "Thực hiện phép tính từ phải sang trái.",
            points: 3,
          },
          {
            id: "t2_q6",
            type: "short_answer",
            question: isEn ? "Exercise 2. Class 2A has 18 boys and 16 girls. How many students are there in Class 2A in total?" : "Bài 2. Lớp 2A có 18 bạn nam và 16 bạn nữ. Hỏi lớp 2A có tất cả bao nhiêu học sinh?",
            correctAnswer: isEn ? "Total students: 18 + 16 = 34 students. Answer: 34 students." : "Số học sinh lớp 2A có tất cả là: 18 + 16 = 34 (học sinh). Đáp số: 34 học sinh.",
            explanation: isEn ? "Word problem with addition within 100." : "Bài toán giải bằng một phép cộng có nhớ trong phạm vi 100.",
            points: 3,
          },
        ],
      };
    }

    if (grade === 3) {
      return {
        subject: subjName,
        subjectKey: "math",
        grade,
        week,
        lang,
        title: isEn ? `WEEKLY WORKSHEET - WEEK ${week} - MATHEMATICS 3` : `PHIẾU BÀI TẬP CUỐI TUẦN ${week} - TOÁN 3`,
        subtitle: isEn ? `Primary Mathematics - Multiplication, Division & 3-Digit Numbers - Week ${week}${lessonHint}` : `Bộ sách Kết nối tri thức - Bảng nhân, bảng chia, số có ba chữ số${lessonHint}`,
        timeAllowedMinutes: 40,
        loigiaihayUrl,
        part1_MultipleChoice: [
          {
            id: "t3_q1",
            type: "mcq",
            question: isEn ? "The number 'Six hundred fifty-four' is written as:" : "Số 'Sáu trăm năm mươi tư' được viết là:",
            options: isEn ? ["A. 645", "B. 654", "C. 564", "D. 465"] : ["A. 645", "B. 654", "C. 564", "D. 465"],
            correctAnswer: "B",
            explanation: isEn ? "6 hundreds, 5 tens, 4 units is 654." : "Sáu trăm (600) năm mươi (50) tư (4) viết là 654.",
            points: 1,
          },
          {
            id: "t3_q2",
            type: "mcq",
            question: isEn ? "Calculate: 36 : 6 = ?" : "Kết quả của phép chia: 36 : 6 = ?",
            options: isEn ? ["A. 5", "B. 6", "C. 7", "D. 8"] : ["A. 5", "B. 6", "C. 7", "D. 8"],
            correctAnswer: "B",
            explanation: isEn ? "6 x 6 = 36, so 36 : 6 = 6." : "6 x 6 = 36 nên 36 : 6 = 6.",
            points: 1,
          },
          {
            id: "t3_q3",
            type: "mcq",
            question: isEn ? "How many hours are there in one day?" : "Một ngày có bao nhiêu giờ?",
            options: isEn ? ["A. 12 hours", "B. 24 hours", "C. 36 hours", "D. 48 hours"] : ["A. 12 giờ", "B. 24 giờ", "C. 36 giờ", "D. 48 giờ"],
            correctAnswer: "B",
            explanation: isEn ? "1 day = 24 hours." : "1 ngày = 24 giờ (từ 12 giờ đêm hôm trước đến 12 giờ đêm hôm sau).",
            points: 1,
          },
          {
            id: "t3_q4",
            type: "mcq",
            question: isEn ? "Find x, given: x : 4 = 8" : "Tìm x, biết: x : 4 = 8",
            options: isEn ? ["A. x = 2", "B. x = 32", "C. x = 12", "D. x = 24"] : ["A. x = 2", "B. x = 32", "C. x = 12", "D. x = 24"],
            correctAnswer: "B",
            explanation: isEn ? "x = 8 x 4 = 32." : "x = 8 x 4 = 32.",
            points: 1,
          },
        ],
        part2_PracticeOrEssay: [
          {
            id: "t3_q5",
            type: "short_answer",
            question: isEn ? "Exercise 1. Calculate value of expression: a) 120 + 35 x 2    b) (72 - 18) : 6" : "Bài 1. Tính giá trị biểu thức: a) 120 + 35 x 2    b) (72 - 18) : 6",
            correctAnswer: "a) 120 + 70 = 190;  b) 54 : 6 = 9",
            explanation: isEn ? "Operations order: parentheses first, multiplication/division before addition/subtraction." : "Thứ tự thực hiện: trong ngoặc trước, nhân chia trước, cộng trừ sau.",
            points: 3,
          },
          {
            id: "t3_q6",
            type: "short_answer",
            question: isEn ? "Exercise 2. A teacher has 45 notebooks and distributes them equally among 5 groups of students. How many notebooks does each group receive?" : "Bài 2. Cô giáo có 45 quyển vở, chia đều cho 5 tổ học sinh. Hỏi mỗi tổ nhận được bao nhiêu quyển vở?",
            correctAnswer: isEn ? "Each group receives: 45 : 5 = 9 notebooks. Answer: 9 notebooks." : "Mỗi tổ nhận được: 45 : 5 = 9 (quyển vở). Đáp số: 9 quyển vở.",
            explanation: isEn ? "Division problem: 45 : 5 = 9." : "Bài toán chia thành các phần bằng nhau.",
            points: 3,
          },
        ],
      };
    }

    if (grade === 4) {
      return {
        subject: subjName,
        subjectKey: "math",
        grade,
        week,
        lang,
        title: isEn ? `WEEKLY WORKSHEET - WEEK ${week} - MATHEMATICS 4` : `PHIẾU BÀI TẬP CUỐI TUẦN ${week} - TOÁN 4`,
        subtitle: isEn ? `Primary Mathematics - Multi-digit Numbers, Geometry & Angles - Week ${week}${lessonHint}` : `Bộ sách Kết nối tri thức - Số có nhiều chữ số, góc nhọn, góc tù, đơn vị đo khối lượng${lessonHint}`,
        timeAllowedMinutes: 40,
        loigiaihayUrl,
        part1_MultipleChoice: [
          {
            id: "t4_q1",
            type: "mcq",
            question: isEn ? "In the number 374,812, which place does the digit 7 belong to?" : "Chữ số 7 trong số 374 812 thuộc hàng nào, lớp nào?",
            options: isEn ? ["A. Hundreds, units class", "B. Thousands, thousands class", "C. Ten thousands, thousands class", "D. Hundred thousands"] : ["A. Hàng trăm, lớp đơn vị", "B. Hàng nghìn, lớp nghìn", "C. Hàng chục nghìn, lớp nghìn", "D. Hàng trăm nghìn, lớp nghìn"],
            correctAnswer: "C",
            explanation: isEn ? "Digit 7 is in the ten thousands place, thousands class." : "Chữ số 7 có giá trị là 70 000, thuộc hàng chục nghìn, lớp nghìn.",
            points: 1,
          },
          {
            id: "t4_q2",
            type: "mcq",
            question: isEn ? "An angle greater than a right angle (90°) and smaller than a straight angle (180°) is called:" : "Góc lớn hơn góc vuông và nhỏ hơn góc bẹt được gọi là:",
            options: isEn ? ["A. Acute angle", "B. Right angle", "C. Obtuse angle", "D. Straight angle"] : ["A. Góc nhọn", "B. Góc vuông", "C. Góc tù", "D. Góc bẹt"],
            correctAnswer: "C",
            explanation: isEn ? "An angle between 90° and 180° is an obtuse angle." : "Góc tù lớn hơn 90 độ và nhỏ hơn 180 độ.",
            points: 1,
          },
          {
            id: "t4_q3",
            type: "mcq",
            question: isEn ? "Convert: 3 tons 50 kg = ... kg:" : "Số thích hợp điền vào chỗ chấm: 3 tấn 50 kg = ... kg",
            options: isEn ? ["A. 305 kg", "B. 3050 kg", "C. 3500 kg", "D. 350 kg"] : ["A. 305 kg", "B. 3050 kg", "C. 3500 kg", "D. 350 kg"],
            correctAnswer: "B",
            explanation: isEn ? "3 tons = 3000 kg. 3000 + 50 = 3050 kg." : "3 tấn = 3000 kg. 3000 + 50 = 3050 kg.",
            points: 1,
          },
          {
            id: "t4_q4",
            type: "mcq",
            question: isEn ? "Find the average of numbers: 15, 25, and 50:" : "Số trung bình cộng của ba số 15, 25 và 50 là:",
            options: isEn ? ["A. 30", "B. 35", "C. 40", "D. 45"] : ["A. 30", "B. 35", "C. 40", "D. 45"],
            correctAnswer: "A",
            explanation: isEn ? "(15 + 25 + 50) : 3 = 90 : 3 = 30." : "Trung bình cộng = (15 + 25 + 50) : 3 = 90 : 3 = 30.",
            points: 1,
          },
        ],
        part2_PracticeOrEssay: [
          {
            id: "t4_q5",
            type: "short_answer",
            question: isEn ? "Exercise 1. Calculate conveniently: 125 x 8 x 35" : "Bài 1. Tính bằng cách thuận tiện nhất: 125 x 8 x 35",
            correctAnswer: "(125 x 8) x 35 = 1000 x 35 = 35 000",
            explanation: isEn ? "Use associative property of multiplication: 125 x 8 = 1000." : "Áp dụng tính chất kết hợp: 125 x 8 = 1000, sau đó nhân với 35.",
            points: 3,
          },
          {
            id: "t4_q6",
            type: "short_answer",
            question: isEn ? "Exercise 2. A school has 480 4th graders. The number of girls is 40 more than the number of boys. Find the number of boys and girls in 4th grade." : "Bài 2. Một trường tiểu học có 480 học sinh khối 4. Số học sinh nữ nhiều hơn số học sinh nam là 40 bạn. Hỏi khối 4 có bao nhiêu học sinh nam, bao nhiêu học sinh nữ?",
            correctAnswer: isEn ? "Boys: (480 - 40) : 2 = 220 students. Girls: 220 + 40 = 260 students." : "Số học sinh nam là: (480 - 40) : 2 = 220 (học sinh). Số học sinh nữ là: 220 + 40 = 260 (học sinh).",
            explanation: isEn ? "Problem of finding two numbers when their sum and difference are known." : "Dạng toán tìm hai số khi biết tổng và hiệu của hai số đó.",
            points: 3,
          },
        ],
      };
    }

    // Grade 5 Math
    return {
      subject: subjName,
      subjectKey: "math",
      grade,
      week,
      lang,
      title: isEn ? `WEEKLY WORKSHEET - WEEK ${week} - MATHEMATICS 5` : `PHIẾU BÀI TẬP CUỐI TUẦN ${week} - TOÁN 5`,
      subtitle: isEn ? `Primary Mathematics - Fractions, Decimals & Geometry - Week ${week}${lessonHint}` : `Bộ sách Kết nối tri thức - Ôn tập phân số, hỗn số, số thập phân và giải toán tỉ số${lessonHint}`,
      timeAllowedMinutes: 40,
      loigiaihayUrl,
      part1_MultipleChoice: [
        {
          id: "t5_q1",
          type: "mcq",
          question: isEn ? "Convert the fraction 3/100 into a decimal number:" : "Phân số thập phân 3/100 được viết dưới dạng số thập phân là:",
          options: isEn ? ["A. 0.3", "B. 0.03", "C. 0.003", "D. 3.0"] : ["A. 0,3", "B. 0,03", "C. 0,003", "D. 3,0"],
          correctAnswer: "B",
          explanation: isEn ? "3/100 = 0.03." : "Phần thập phân có 2 chữ số: 0,03.",
          points: 1,
        },
        {
          id: "t5_q2",
          type: "mcq",
          question: isEn ? "Convert the mixed number 3 and 2/5 into an improper fraction:" : "Chuyển hỗn số 3 và 2/5 thành phân số:",
          options: isEn ? ["A. 11/5", "B. 17/5", "C. 15/5", "D. 6/5"] : ["A. 11/5", "B. 17/5", "C. 15/5", "D. 6/5"],
          correctAnswer: "B",
          explanation: isEn ? "(3 x 5 + 2) / 5 = 17/5." : "Tử số = 3 x 5 + 2 = 17, mẫu số giữ nguyên là 5. Phân số là 17/5.",
          points: 1,
        },
        {
          id: "t5_q3",
          type: "mcq",
          question: isEn ? "Which of the following measurements is the largest?" : "Trong các số đo diện tích sau, số đo nào lớn nhất?",
          options: isEn ? ["A. 5 m² 4 dm²", "B. 54 dm²", "C. 540 dm²", "D. 504 dm²"] : ["A. 5 m² 4 dm²", "B. 54 dm²", "C. 540 dm²", "D. 504 dm²"],
          correctAnswer: "C",
          explanation: isEn ? "540 dm² = 5.4 m², which is the largest." : "5 m² 4 dm² = 504 dm². So sánh: 540 dm² là lớn nhất.",
          points: 1,
        },
        {
          id: "t5_q4",
          type: "mcq",
          question: isEn ? "Calculate 15% of 200 kg:" : "Tìm 15% của 200 kg:",
          options: isEn ? ["A. 15 kg", "B. 25 kg", "C. 30 kg", "D. 35 kg"] : ["A. 15 kg", "B. 25 kg", "C. 30 kg", "D. 35 kg"],
          correctAnswer: "C",
          explanation: isEn ? "200 x 15 : 100 = 30 kg." : "200 x 15 : 100 = 30 kg.",
          points: 1,
        },
      ],
      part2_PracticeOrEssay: [
        {
          id: "t5_q5",
          type: "short_answer",
          question: isEn ? "Exercise 1. Calculate: a) 3/4 + 2/5    b) 5/6 - 1/3 x 3/2" : "Bài 1. Tính: a) 3/4 + 2/5    b) 5/6 - 1/3 x 3/2",
          correctAnswer: "a) 15/20 + 8/20 = 23/20;  b) 5/6 - 1/2 = 5/6 - 3/6 = 2/6 = 1/3",
          explanation: isEn ? "Fractions arithmetic and order of operations." : "Quy đồng mẫu số và thực hiện phép tính theo thứ tự.",
          points: 3,
        },
        {
          id: "t5_q6",
          type: "short_answer",
          question: isEn ? "Exercise 2. A rectangular garden has a length of 24 m and a width equal to 2/3 of its length. Calculate the perimeter and area of this garden." : "Bài 2. Một mảnh vườn hình chữ nhật có chiều dài 24m, chiều rộng bằng 2/3 chiều dài. Tính chu vi và diện tích mảnh vườn đó.",
          correctAnswer: isEn ? "Width: 24 x 2/3 = 16 m. Perimeter: (24 + 16) x 2 = 80 m. Area: 24 x 16 = 384 m²." : "Chiều rộng là: 24 x 2/3 = 16 (m). Chu vi là: (24 + 16) x 2 = 80 (m). Diện tích là: 24 x 16 = 384 (m²). Đáp số: CV: 80m, DT: 384m².",
          explanation: isEn ? "Geometry word problem combining fractions and rectangle measurements." : "Bài toán tìm phân số của một số kết hợp hình học chu vi, diện tích.",
          points: 3,
        },
      ],
    };
  }

  // 3. TIẾNG VIỆT (VIETNAMESE LANGUAGE)
  if (key === "vietnamese") {
    const subjName = isEn ? "Vietnamese Language" : "Tiếng Việt";
    return {
      subject: subjName,
      subjectKey: "vietnamese",
      grade,
      week,
      lang,
      title: isEn ? `WEEKLY WORKSHEET - WEEK ${week} - VIETNAMESE ${grade}` : `PHIẾU BÀI TẬP CUỐI TUẦN ${week} - TIẾNG VIỆT ${grade}`,
      subtitle: isEn ? `Primary Vietnamese - Reading, Spelling, Grammar & Writing - Week ${week}${lessonHint}` : `Bộ sách Kết nối tri thức - Ôn tập Đọc hiểu, Chính tả, Luyện từ và câu Tuần ${week}${lessonHint}`,
      timeAllowedMinutes: 40,
      loigiaihayUrl,
      part1_MultipleChoice: [
        {
          id: `tv${grade}_q1`,
          type: "mcq",
          question: isEn ? "Which of the following proverbs expresses gratitude towards teachers?" : "Câu tục ngữ nào dưới đây thể hiện lòng biết ơn thầy cô giáo?",
          options: isEn
            ? ["A. Tôn sư trọng đạo (Respect teachers and moral principles)", "B. Học thầy không tày học bạn", "C. Uống nước nhớ nguồn", "D. Ăn quả nhớ kẻ trồng cây"]
            : ["A. Tôn sư trọng đạo", "B. Học thầy không tày học bạn", "C. Uống nước nhớ nguồn", "D. Ăn quả nhớ kẻ trồng cây"],
          correctAnswer: "A",
          explanation: isEn ? "'Tôn sư trọng đạo' specifically honors teachers." : "'Tôn sư trọng đạo' là truyền thống tốt đẹp tôn kính người thầy.",
          points: 1,
        },
        {
          id: `tv${grade}_q2`,
          type: "mcq",
          question: isEn ? "Identify the word spelled correctly:" : "Từ nào sau đây viết ĐÚNG chính tả?",
          options: isEn
            ? ["A. Ngoằn ngoèo", "B. Ngoằn nghèo", "C. Hoằn hoèo", "D. Ngoằn ngoeo"]
            : ["A. Ngoằn ngoèo", "B. Ngoằn nghèo", "C. Hoằn hoèo", "D. Ngoằn ngoeo"],
          correctAnswer: "A",
          explanation: isEn ? "Correct Vietnamese spelling: ngoằn ngoèo." : "Từ đúng quy tắc chính tả là 'ngoằn ngoèo'.",
          points: 1,
        },
      ],
      part2_PracticeOrEssay: [
        {
          id: `tv${grade}_q3`,
          type: "short_answer",
          question: isEn ? "Exercise: Write a short paragraph (3 to 5 sentences) describing your favorite teacher or a memorable school experience." : "Bài tập: Em hãy viết một đoạn văn ngắn (từ 3 đến 5 câu) bày tỏ tình cảm của em đối với thầy cô giáo hoặc một kỉ niệm đẹp ở trường.",
          correctAnswer: isEn ? "Student writes a sincere paragraph with proper capitalization and punctuation." : "Học sinh viết đoạn văn mạch lạc, dùng từ đúng, chữ viết sạch đẹp, nêu được tình cảm chân thành.",
          explanation: isEn ? "Writing assessment: paragraph coherence, vocabulary, and grammar." : "Rèn luyện kĩ năng viết đoạn văn biểu cảm.",
          points: 8,
        },
      ],
    };
  }

  // 4. KHOA HỌC / TỰ NHIÊN XÃ HỘI (SCIENCE / SOCIAL)
  if (key === "science" || key === "social") {
    const subjName = isEn ? (grade <= 3 ? "Natural & Social Science" : "Science") : (grade <= 3 ? "Tự nhiên và Xã hội" : "Khoa học");
    return {
      subject: subjName,
      subjectKey: key,
      grade,
      week,
      lang,
      title: isEn ? `WEEKLY WORKSHEET - WEEK ${week} - ${subjName.toUpperCase()} ${grade}` : `PHIẾU BÀI TẬP CUỐI TUẦN ${week} - ${subjName.toUpperCase()} ${grade}`,
      subtitle: isEn ? `Primary Science - Health, Environment & Observation - Week ${week}${lessonHint}` : `Bộ sách Kết nối tri thức - Khám phá tự nhiên & cuộc sống - Tuần ${week}${lessonHint}`,
      timeAllowedMinutes: 35,
      loigiaihayUrl,
      part1_MultipleChoice: [
        {
          id: "sci_q1",
          type: "mcq",
          question: isEn ? "Which of the following habits helps protect our vision and eyes while studying?" : "Hành động nào dưới đây giúp bảo vệ đôi mắt khi ngồi học?",
          options: isEn
            ? ["A. Sitting with proper posture in a well-lit room", "B. Reading in dim light", "C. Keeping eyes too close to the book", "D. Rubbing eyes frequently"]
            : ["A. Ngồi học nơi đủ ánh sáng, đúng tư thế", "B. Đọc sách dưới ánh sáng mờ", "C. Cúi gập sát mắt vào vở", "D. Thường xuyên dụi tay lên mắt"],
          correctAnswer: "A",
          explanation: isEn ? "Adequate lighting and 25-30cm posture prevent eye strain and myopia." : "Ngồi học đủ ánh sáng và đúng khoảng cách giúp phòng ngừa tật khúc xạ.",
          points: 2,
        },
        {
          id: "sci_q2",
          type: "mcq",
          question: isEn ? "Plants absorb carbon dioxide and release oxygen during which process?" : "Cây xanh hấp thụ khí các-bô-níc và thải ra khí ô-xy qua quá trình nào?",
          options: isEn ? ["A. Photosynthesis in sunlight", "B. Respiration in the dark", "C. Water evaporation", "D. Leaf shedding"] : ["A. Quang hợp dưới ánh sáng mặt trời", "B. Hô hấp ban đêm", "C. Thoát hơi nước", "D. Rụng lá"],
          correctAnswer: "A",
          explanation: isEn ? "Photosynthesis in green plants produces oxygen." : "Quang hợp giúp thanh lọc không khí và tạo dưỡng khí ô-xy.",
          points: 2,
        },
      ],
      part2_PracticeOrEssay: [
        {
          id: "sci_q3",
          type: "short_answer",
          question: isEn ? "Practical Question: List 3 everyday actions you and your family can take to save clean water and protect the environment." : "Vận dụng: Em hãy nêu 3 việc làm cụ thể hằng ngày để tiết kiệm nước sạch và bảo vệ môi trường xung quanh.",
          correctAnswer: isEn ? "1. Turn off taps when not in use; 2. Reuse water for plants; 3. Do not litter in water sources." : "1. Khóa vòi nước khi không dùng; 2. Tái sử dụng nước rửa rau để tưới cây; 3. Không xả rác bừa bãi.",
          explanation: isEn ? "Environmental stewardship and daily practical application." : "Giáo dục ý thức bảo vệ nguồn nước và môi trường sống.",
          points: 6,
        },
      ],
    };
  }

  // 5. LỊCH SỬ & ĐỊA LÍ (HISTORY & GEOGRAPHY)
  if (key === "history") {
    const subjName = isEn ? "History & Geography" : "Lịch sử và Địa lí";
    return {
      subject: subjName,
      subjectKey: "history",
      grade,
      week,
      lang,
      title: isEn ? `WEEKLY WORKSHEET - WEEK ${week} - HISTORY & GEOGRAPHY ${grade}` : `PHIẾU BÀI TẬP CUỐI TUẦN ${week} - LỊCH SỬ VÀ ĐỊA LÍ ${grade}`,
      subtitle: isEn ? `Primary Social Studies - Homeland Regions & Heritage - Week ${week}${lessonHint}` : `Bộ sách Kết nối tri thức - Khám phá lịch sử hào hùng và địa lí quê hương - Tuần ${week}${lessonHint}`,
      timeAllowedMinutes: 35,
      loigiaihayUrl,
      part1_MultipleChoice: [
        {
          id: "his_q1",
          type: "mcq",
          question: isEn ? "What is the capital city of Vietnam?" : "Thủ đô của nước Cộng hòa Xã hội Chủ nghĩa Việt Nam là thành phố nào?",
          options: isEn ? ["A. Ha Noi", "B. Ho Chi Minh City", "C. Da Nang", "D. Hue"] : ["A. Hà Nội", "B. TP. Hồ Chí Minh", "C. Đà Nẵng", "D. Huế"],
          correctAnswer: "A",
          explanation: isEn ? "Ha Noi is the political, cultural, and historic capital of Vietnam." : "Hà Nội là thủ đô ngàn năm văn hiến của Việt Nam.",
          points: 2,
        },
        {
          id: "his_q2",
          type: "mcq",
          question: isEn ? "Which major plain in Vietnam is known as the country's largest rice granary?" : "Đồng bằng nào có diện tích lớn nhất và là vựa lúa lớn nhất của nước ta?",
          options: isEn ? ["A. Mekong River Delta", "B. Red River Delta", "C. Central Coastal Plain", "D. Tay Nguyen Plateau"] : ["A. Đồng bằng sông Cửu Long", "B. Đồng bằng sông Hồng", "C. Đồng bằng duyên hải miền Trung", "D. Cao nguyên Tây Nguyên"],
          correctAnswer: "A",
          explanation: isEn ? "The Mekong River Delta is Vietnam's largest rice and fruit producing region." : "Đồng bằng sông Cửu Long là vựa lúa và trái cây lớn nhất cả nước.",
          points: 2,
        },
      ],
      part2_PracticeOrEssay: [
        {
          id: "his_q3",
          type: "short_answer",
          question: isEn ? "Essay Question: What makes you feel proud about your hometown's culture, landmarks, or famous specialties? Write 3-4 sentences." : "Tự luận: Em hãy viết 3-4 câu giới thiệu về một di tích lịch sử hoặc danh lam thắng cảnh nổi tiếng của quê hương em.",
          correctAnswer: isEn ? "Students describe a notable local landmark, historical figure, or specialty with pride." : "Học sinh giới thiệu mạch lạc về tên di tích, địa điểm và ý nghĩa lịch sử.",
          explanation: isEn ? "Nurturing love for the local homeland and heritage." : "Bồi dưỡng tình yêu quê hương, đất nước.",
          points: 6,
        },
      ],
    };
  }

  // 6. CÔNG NGHỆ (TECHNOLOGY)
  if (key === "tech") {
    const subjName = isEn ? "Technology" : "Công nghệ";
    return {
      subject: subjName,
      subjectKey: "tech",
      grade,
      week,
      lang,
      title: isEn ? `WEEKLY WORKSHEET - WEEK ${week} - TECHNOLOGY ${grade}` : `PHIẾU BÀI TẬP CUỐI TUẦN ${week} - CÔNG NGHỆ ${grade}`,
      subtitle: isEn ? `Primary Technology - Inventions, Household Devices & Safety - Week ${week}${lessonHint}` : `Bộ sách Kết nối tri thức - Đồ dùng công nghệ & An toàn sử dụng - Tuần ${week}${lessonHint}`,
      timeAllowedMinutes: 35,
      loigiaihayUrl,
      part1_MultipleChoice: [
        {
          id: "tech_q1",
          type: "mcq",
          question: isEn ? "Which of the following practices is SAFE when using electrical appliances?" : "Việc làm nào sau đây đảm bảo AN TOÀN khi sử dụng điện trong gia đình?",
          options: isEn
            ? ["A. Keeping hands dry before touching electrical plugs", "B. Touching plugs with wet hands", "C. Pulling the wire instead of the plug", "D. Inserting metal objects into sockets"]
            : ["A. Lau khô tay trước khi cắm hoặc rút phích điện", "B. Dùng tay ướt cắm điện", "C. Cầm dây điện kéo mạnh", "D. Dùng que kim loại cắm vào ổ điện"],
          correctAnswer: "A",
          explanation: isEn ? "Dry hands prevent electric shock." : "Tuyệt đối không dùng tay ướt chạm vào thiết bị điện.",
          points: 2,
        },
        {
          id: "tech_q2",
          type: "mcq",
          question: isEn ? "Which household device is primarily designed to keep food fresh for longer?" : "Thiết bị công nghệ gia đình nào có tác dụng bảo quản thực phẩm tươi ngon?",
          options: isEn ? ["A. Refrigerator", "B. Microwave", "C. Washing machine", "D. Vacuum cleaner"] : ["A. Tủ lạnh", "B. Lò vi sóng", "C. Máy giặt", "D. Máy hút bụi"],
          correctAnswer: "A",
          explanation: isEn ? "The refrigerator maintains low temperatures to preserve food." : "Tủ lạnh giúp làm chậm quá trình hư hỏng của thức ăn.",
          points: 2,
        },
      ],
      part2_PracticeOrEssay: [
        {
          id: "tech_q3",
          type: "short_answer",
          question: isEn ? "Practical Application: What should you do when you notice an electric cord has frayed or damaged plastic insulation?" : "Xử lí tình huống: Khi phát hiện dây dẫn điện của quạt máy bị hở lớp vỏ bọc nhựa, em cần xử lí như thế nào?",
          correctAnswer: isEn ? "Immediately inform parents or teachers, do not touch the cord, and avoid using the appliance until repaired safely." : "Báo ngay cho người lớn (bố mẹ, thầy cô), tuyệt đối không chạm tay vào chỗ hở và không cắm điện quạt.",
          explanation: isEn ? "Electrical safety protocol for primary students." : "Rèn luyện kĩ năng xử lí tình huống nguy hiểm.",
          points: 6,
        },
      ],
    };
  }

  // 7. ĐẠO ĐỨC (ETHICS & MORALS)
  const subjName = isEn ? "Ethics & Morals" : "Đạo đức";
  return {
    subject: subjName,
    subjectKey: "ethics",
    grade,
    week,
    lang,
    title: isEn ? `WEEKLY WORKSHEET - WEEK ${week} - ETHICS & MORALS ${grade}` : `PHIẾU BÀI TẬP CUỐI TUẦN ${week} - ĐẠO ĐỨC ${grade}`,
    subtitle: isEn ? `Primary Moral Education - Respect, Responsibility & Kindness - Week ${week}${lessonHint}` : `Bộ sách Kết nối tri thức - Rèn luyện nhân cách & kỹ năng sống - Tuần ${week}${lessonHint}`,
    timeAllowedMinutes: 35,
    loigiaihayUrl,
    part1_MultipleChoice: [
      {
        id: "dd_q1",
        type: "mcq",
        question: isEn ? "Which behavior demonstrates genuine respect toward teachers?" : "Hành động nào thể hiện sự tôn trọng thầy cô giáo?",
        options: isEn
          ? ["A. Greeting politely and listening attentively in class", "B. Whispering during lectures", "C. Neglecting homework", "D. Arriving late without permission"]
          : ["A. Chào hỏi lễ phép khi gặp thầy cô và chăm chú nghe giảng", "B. Nói chuyện riêng trong giờ học", "C. Không làm bài tập về nhà", "D. Đi học muộn không xin phép"],
        correctAnswer: "A",
        explanation: isEn ? "Showing politeness, obedience, and hard work respects teachers." : "Tôn sư trọng đạo: lễ phép, chăm ngoan vâng lời thầy cô.",
        points: 2,
      },
    ],
    part2_PracticeOrEssay: [
      {
        id: "dd_q3",
        type: "short_answer",
        question: isEn ? "Roleplay Situation: During recess, you see a classmate sitting alone looking sad. What would you do to comfort and help them?" : "Tình huống: Trong giờ ra chơi, em nhìn thấy một bạn cùng lớp ngồi một mình buồn bã. Em sẽ làm gì để an ủi và giúp đỡ bạn?",
        correctAnswer: isEn ? "I will gently approach the friend, ask if something is wrong, and invite them to join a game or talk so they feel happier." : "Cách xử lí: Em sẽ đến gần nhẹ nhàng hỏi thăm xem bạn có gặp chuyện gì buồn không, rủ bạn cùng tham gia chơi trò chơi hoặc chia sẻ để bạn cảm thấy vui vẻ hơn.",
        explanation: isEn ? "Fostering empathy, compassion, and friendship solidarity." : "Giáo dục lòng nhân ái, thấu cảm và tinh thần đoàn kết giúp đỡ bạn bè.",
        points: 8,
      },
    ],
  };
}

/**
 * Get all subjects for a specific grade
 */
export function getRequiredSubjectsForGrade(grade: number, lang: WorksheetLanguage = "en"): string[] {
  if (lang === "en") {
    if (grade <= 3) {
      return ["English", "Mathematics", "Vietnamese Language", "Natural & Social Science", "Ethics & Morals"];
    }
    return ["English", "Mathematics", "Vietnamese Language", "History & Geography", "Science", "Technology", "Ethics & Morals"];
  }

  if (grade <= 3) {
    return ["Tiếng Anh", "Toán", "Tiếng Việt", "Tự nhiên và Xã hội", "Đạo đức"];
  }
  return ["Tiếng Anh", "Toán", "Tiếng Việt", "Lịch sử và Địa lí", "Khoa học", "Công nghệ", "Đạo đức"];
}

/**
 * Get all weekly worksheets for a specific grade and week
 */
export function getAllWorksheetsForGradeAndWeek(
  grade: number,
  week: number,
  lessonPlans?: LessonPlan[],
  lang: WorksheetLanguage = "en"
): SubjectWorksheet[] {
  const subjects = getRequiredSubjectsForGrade(grade, lang);
  return subjects.map((subj) => generateWorksheetData(grade, week, subj, lessonPlans, lang));
}
