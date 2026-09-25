import { LessonInfo } from "../gradeCurriculums";

// ============================================================================
// KẾ HOẠCH DẠY HỌC KHỐI 1 - CHÍNH THỨC NĂM HỌC 2024-2025 (KẾT NỐI TRI THỨC)
// ============================================================================

export const GRADE_1_TIENG_VIET: Record<number, Array<{ title: string; sub: string; period: number; integ?: string }>> = {
  1: [
    { title: "Bài 1: A a - Dấu huyền (Tiết 1)", sub: "Âm vần", period: 1 },
    { title: "Bài 1: A a - Dấu huyền (Tiết 2)", sub: "Âm vần", period: 2 },
    { title: "Bài 2: B b - Dấu sắc (Tiết 1)", sub: "Âm vần", period: 3 },
    { title: "Bài 2: B b - Dấu sắc (Tiết 2)", sub: "Âm vần", period: 4 },
    { title: "Bài 3: C c - Dấu hỏi (Tiết 1)", sub: "Âm vần", period: 5 },
    { title: "Bài 3: C c - Dấu hỏi (Tiết 2)", sub: "Âm vần", period: 6 },
    { title: "Bài 4: E e - Dấu ngã (Tiết 1)", sub: "Âm vần", period: 7 },
    { title: "Bài 4: E e - Dấu ngã (Tiết 2)", sub: "Âm vần", period: 8 },
    { title: "Bài 5: Ôn tập và kể chuyện (Tiết 1)", sub: "Ôn tập", period: 9 },
    { title: "Bài 5: Ôn tập và kể chuyện (Tiết 2)", sub: "Ôn tập", period: 10 },
    { title: "Luyện đọc tăng cường âm vần (Tiết 11)", sub: "Luyện đọc", period: 11 },
    { title: "Luyện viết nét cơ bản và chữ (Tiết 12)", sub: "Luyện viết", period: 12 }
  ],
  2: [
    { title: "Bài 6: O o - Dấu nặng (Tiết 1)", sub: "Âm vần", period: 13 },
    { title: "Bài 6: O o - Dấu nặng (Tiết 2)", sub: "Âm vần", period: 14 },
    { title: "Bài 7: Ô ô - Dấu hỏi (Tiết 1)", sub: "Âm vần", period: 15 },
    { title: "Bài 7: Ô ô - Dấu hỏi (Tiết 2)", sub: "Âm vần", period: 16 },
    { title: "Bài 8: Ơ ơ (Tiết 1)", sub: "Âm vần", period: 17 },
    { title: "Bài 8: Ơ ơ (Tiết 2)", sub: "Âm vần", period: 18 },
    { title: "Bài 9: I i, K k (Tiết 1)", sub: "Âm vần", period: 19 },
    { title: "Bài 9: I i, K k (Tiết 2)", sub: "Âm vần", period: 20 },
    { title: "Bài 10: Ôn tập và kể chuyện (Tiết 1)", sub: "Ôn tập", period: 21 },
    { title: "Bài 10: Ôn tập và kể chuyện (Tiết 2)", sub: "Ôn tập", period: 22 },
    { title: "Luyện đọc và ghép tiếng (Tiết 11)", sub: "Luyện đọc", period: 23 },
    { title: "Luyện viết âm vần đã học (Tiết 12)", sub: "Luyện viết", period: 24 }
  ],
  3: [
    { title: "Bài 11: L l, H h (Tiết 1)", sub: "Âm vần", period: 25 },
    { title: "Bài 11: L l, H h (Tiết 2)", sub: "Âm vần", period: 26 },
    { title: "Bài 12: M m, N n (Tiết 1)", sub: "Âm vần", period: 27 },
    { title: "Bài 12: M m, N n (Tiết 2)", sub: "Âm vần", period: 28 },
    { title: "Bài 13: U u, Ư ư (Tiết 1)", sub: "Âm vần", period: 29 },
    { title: "Bài 13: U u, Ư ư (Tiết 2)", sub: "Âm vần", period: 30 },
    { title: "Bài 14: D d, Đ đ (Tiết 1)", sub: "Âm vần", period: 31 },
    { title: "Bài 14: D d, Đ đ (Tiết 2)", sub: "Âm vần", period: 32 },
    { title: "Bài 15: Ôn tập và kể chuyện (Tiết 1)", sub: "Ôn tập", period: 33 },
    { title: "Bài 15: Ôn tập và kể chuyện (Tiết 2)", sub: "Ôn tập", period: 34 },
    { title: "Luyện đọc câu đơn giản (Tiết 11)", sub: "Luyện đọc", period: 35 },
    { title: "Luyện viết chữ số và tiếng ghép (Tiết 12)", sub: "Luyện viết", period: 36 }
  ],
  4: [
    { title: "Bài 16: P p, Ph ph (Tiết 1)", sub: "Âm vần", period: 37, integ: "Nhận biết âm p, ph trong từ 'phố xá', 'phở bò'." },
    { title: "Bài 16: P p, Ph ph (Tiết 2)", sub: "Âm vần", period: 38 },
    { title: "Bài 17: G g, Gh gh (Tiết 1)", sub: "Âm vần", period: 39, integ: "Quy tắc chính tả: Gh ghép với e, ê, i." },
    { title: "Bài 17: G g, Gh gh (Tiết 2)", sub: "Âm vần", period: 40 },
    { title: "Bài 18: Qu qu, R r (Tiết 1)", sub: "Âm vần", period: 41, integ: "Phát âm chuẩn âm r, không nhầm với d, gi." },
    { title: "Bài 18: Qu qu, R r (Tiết 2)", sub: "Âm vần", period: 42 },
    { title: "Bài 19: S s, X x (Tiết 1)", sub: "Âm vần", period: 43, integ: "Phân biệt s (uốn lưỡi) và x (không uốn lưỡi)." },
    { title: "Bài 19: S s, X x (Tiết 2)", sub: "Âm vần", period: 44 },
    { title: "Bài 20: Ôn tập và kể chuyện: Rùa và Thỏ (Tiết 1)", sub: "Ôn tập", period: 45, integ: "Bài học: Kiên trì, không chủ quan, kiêu ngạo." },
    { title: "Bài 20: Ôn tập và kể chuyện: Rùa và Thỏ (Tiết 2)", sub: "Ôn tập", period: 46 },
    { title: "Luyện đọc mở rộng: Đọc tranh truyện (Tiết 11)", sub: "Luyện đọc", period: 47 },
    { title: "Luyện viết: Phố, gốm, quà, sẻ (Tiết 12)", sub: "Luyện viết", period: 48 }
  ],
  5: [
    { title: "Bài 21: Th th, Kh kh (Tiết 1)", sub: "Âm vần", period: 49 },
    { title: "Bài 21: Th th, Kh kh (Tiết 2)", sub: "Âm vần", period: 50 },
    { title: "Bài 22: Ch ch, Tr tr (Tiết 1)", sub: "Âm vần", period: 51 },
    { title: "Bài 22: Ch ch, Tr tr (Tiết 2)", sub: "Âm vần", period: 52 },
    { title: "Bài 23: Nh nh, Ng ng (Tiết 1)", sub: "Âm vần", period: 53 },
    { title: "Bài 23: Nh nh, Ng ng (Tiết 2)", sub: "Âm vần", period: 54 },
    { title: "Bài 24: Ngh ngh, Y y (Tiết 1)", sub: "Âm vần", period: 55 },
    { title: "Bài 24: Ngh ngh, Y y (Tiết 2)", sub: "Âm vần", period: 56 },
    { title: "Bài 25: Ôn tập và kể chuyện (Tiết 1)", sub: "Ôn tập", period: 57 },
    { title: "Bài 25: Ôn tập và kể chuyện (Tiết 2)", sub: "Ôn tập", period: 58 },
    { title: "Luyện đọc tăng cường âm đầu (Tiết 11)", sub: "Luyện đọc", period: 59 },
    { title: "Luyện viết từ ngữ ứng dụng (Tiết 12)", sub: "Luyện viết", period: 60 }
  ],
  6: [
    { title: "Bài 26: Vần an, at (Tiết 1)", sub: "Âm vần", period: 61 },
    { title: "Bài 26: Vần an, at (Tiết 2)", sub: "Âm vần", period: 62 },
    { title: "Bài 27: Vần ăn, ăt (Tiết 1)", sub: "Âm vần", period: 63 },
    { title: "Bài 27: Vần ăn, ăt (Tiết 2)", sub: "Âm vần", period: 64 },
    { title: "Bài 28: Vần ân, ât (Tiết 1)", sub: "Âm vần", period: 65 },
    { title: "Bài 28: Vần ân, ât (Tiết 2)", sub: "Âm vần", period: 66 },
    { title: "Bài 29: Vần en, et (Tiết 1)", sub: "Âm vần", period: 67 },
    { title: "Bài 29: Vần en, et (Tiết 2)", sub: "Âm vần", period: 68 },
    { title: "Bài 30: Ôn tập và kể chuyện (Tiết 1)", sub: "Ôn tập", period: 69 },
    { title: "Bài 30: Ôn tập và kể chuyện (Tiết 2)", sub: "Ôn tập", period: 70 },
    { title: "Luyện đọc vần kết thúc bằng n, t (Tiết 11)", sub: "Luyện đọc", period: 71 },
    { title: "Luyện viết từ ngữ có vần an, at, ăn, ăt (Tiết 12)", sub: "Luyện viết", period: 72 }
  ],
  7: [
    { title: "Bài 31: Vần ên, êt (Tiết 1)", sub: "Âm vần", period: 73 },
    { title: "Bài 31: Vần ên, êt (Tiết 2)", sub: "Âm vần", period: 74 },
    { title: "Bài 32: Vần in, it (Tiết 1)", sub: "Âm vần", period: 75 },
    { title: "Bài 32: Vần in, it (Tiết 2)", sub: "Âm vần", period: 76 },
    { title: "Bài 33: Vần un, ut (Tiết 1)", sub: "Âm vần", period: 77 },
    { title: "Bài 33: Vần un, ut (Tiết 2)", sub: "Âm vần", period: 78 },
    { title: "Bài 34: Vần ơn, ơt (Tiết 1)", sub: "Âm vần", period: 79 },
    { title: "Bài 34: Vần ơn, ơt (Tiết 2)", sub: "Âm vần", period: 80 },
    { title: "Bài 35: Ôn tập và kể chuyện (Tiết 1)", sub: "Ôn tập", period: 81 },
    { title: "Bài 35: Ôn tập và kể chuyện (Tiết 2)", sub: "Ôn tập", period: 82 },
    { title: "Luyện đọc câu có vần mới (Tiết 11)", sub: "Luyện đọc", period: 83 },
    { title: "Luyện viết chính tả (Tiết 12)", sub: "Luyện viết", period: 84 }
  ],
  8: [
    { title: "Bài 36: Vần am, ap (Tiết 1)", sub: "Âm vần", period: 85 },
    { title: "Bài 36: Vần am, ap (Tiết 2)", sub: "Âm vần", period: 86 },
    { title: "Bài 37: Vần ăm, ăp (Tiết 1)", sub: "Âm vần", period: 87 },
    { title: "Bài 37: Vần ăm, ăp (Tiết 2)", sub: "Âm vần", period: 88 },
    { title: "Bài 38: Vần âm, âp (Tiết 1)", sub: "Âm vần", period: 89 },
    { title: "Bài 38: Vần âm, âp (Tiết 2)", sub: "Âm vần", period: 90 },
    { title: "Bài 39: Vần em, ep (Tiết 1)", sub: "Âm vần", period: 91 },
    { title: "Bài 39: Vần em, ep (Tiết 2)", sub: "Âm vần", period: 92 },
    { title: "Bài 40: Ôn tập và kể chuyện (Tiết 1)", sub: "Ôn tập", period: 93 },
    { title: "Bài 40: Ôn tập và kể chuyện (Tiết 2)", sub: "Ôn tập", period: 94 },
    { title: "Luyện đọc vần kết thúc bằng m, p (Tiết 11)", sub: "Luyện đọc", period: 95 },
    { title: "Luyện viết từ ứng dụng (Tiết 12)", sub: "Luyện viết", period: 96 }
  ],
  9: [
    { title: "Ôn tập giữa học kì I (Tiết 1)", sub: "Ôn tập", period: 97 },
    { title: "Ôn tập giữa học kì I (Tiết 2)", sub: "Ôn tập", period: 98 },
    { title: "Ôn tập giữa học kì I (Tiết 3)", sub: "Ôn tập", period: 99 },
    { title: "Ôn tập giữa học kì I (Tiết 4)", sub: "Ôn tập", period: 100 },
    { title: "Ôn tập giữa học kì I (Tiết 5)", sub: "Ôn tập", period: 101 },
    { title: "Ôn tập giữa học kì I (Tiết 6)", sub: "Ôn tập", period: 102 },
    { title: "Đánh giá giữa học kì I: Đọc âm, vần, từ ngữ (Tiết 7)", sub: "Kiểm tra", period: 103 },
    { title: "Đánh giá giữa học kì I: Đọc câu, đoạn (Tiết 8)", sub: "Kiểm tra", period: 104 },
    { title: "Đánh giá giữa học kì I: Viết âm, vần (Tiết 9)", sub: "Kiểm tra", period: 105 },
    { title: "Đánh giá giữa học kì I: Viết từ ngữ (Tiết 10)", sub: "Kiểm tra", period: 106 },
    { title: "Luyện đọc bù đắp kiến thức (Tiết 11)", sub: "Luyện đọc", period: 107 },
    { title: "Luyện viết chính tả củng cố (Tiết 12)", sub: "Luyện viết", period: 108 }
  ],
  10: [
    { title: "Bài 41: Vần êm, êp (Tiết 1)", sub: "Âm vần", period: 109 },
    { title: "Bài 41: Vần êm, êp (Tiết 2)", sub: "Âm vần", period: 110 },
    { title: "Bài 42: Vần im, ip (Tiết 1)", sub: "Âm vần", period: 111 },
    { title: "Bài 42: Vần im, ip (Tiết 2)", sub: "Âm vần", period: 112 },
    { title: "Bài 43: Vần um, up (Tiết 1)", sub: "Âm vần", period: 113 },
    { title: "Bài 43: Vần um, up (Tiết 2)", sub: "Âm vần", period: 114 },
    { title: "Bài 44: Vần om, op (Tiết 1)", sub: "Âm vần", period: 115 },
    { title: "Bài 44: Vần om, op (Tiết 2)", sub: "Âm vần", period: 116 },
    { title: "Bài 45: Ôn tập và kể chuyện (Tiết 1)", sub: "Ôn tập", period: 117 },
    { title: "Bài 45: Ôn tập và kể chuyện (Tiết 2)", sub: "Ôn tập", period: 118 },
    { title: "Luyện đọc đoạn văn ngắn (Tiết 11)", sub: "Luyện đọc", period: 119 },
    { title: "Luyện viết chính tả (Tiết 12)", sub: "Luyện viết", period: 120 }
  ],
  11: [
    { title: "Bài 46: Vần ôm, ôp (Tiết 1)", sub: "Âm vần", period: 121 },
    { title: "Bài 46: Vần ôm, ôp (Tiết 2)", sub: "Âm vần", period: 122 },
    { title: "Bài 47: Vần ơm, ơp (Tiết 1)", sub: "Âm vần", period: 123 },
    { title: "Bài 47: Vần ơm, ơp (Tiết 2)", sub: "Âm vần", period: 124 },
    { title: "Bài 48: Vần ang, ac (Tiết 1)", sub: "Âm vần", period: 125 },
    { title: "Bài 48: Vần ang, ac (Tiết 2)", sub: "Âm vần", period: 126 },
    { title: "Bài 49: Vần ăng, ăc (Tiết 1)", sub: "Âm vần", period: 127 },
    { title: "Bài 49: Vần ăng, ăc (Tiết 2)", sub: "Âm vần", period: 128 },
    { title: "Bài 50: Ôn tập và kể chuyện (Tiết 1)", sub: "Ôn tập", period: 129 },
    { title: "Bài 50: Ôn tập và kể chuyện (Tiết 2)", sub: "Ôn tập", period: 130 },
    { title: "Luyện đọc vần kết thúc bằng ng, c (Tiết 11)", sub: "Luyện đọc", period: 131 },
    { title: "Luyện viết từ ngữ ứng dụng (Tiết 12)", sub: "Luyện viết", period: 132 }
  ],
  12: [
    { title: "Bài 51: Vần âng, âc (Tiết 1)", sub: "Âm vần", period: 133 },
    { title: "Bài 51: Vần âng, âc (Tiết 2)", sub: "Âm vần", period: 134 },
    { title: "Bài 52: Vần eng, ec (Tiết 1)", sub: "Âm vần", period: 135 },
    { title: "Bài 52: Vần eng, ec (Tiết 2)", sub: "Âm vần", period: 136 },
    { title: "Bài 53: Vần ieng, iec (Tiết 1)", sub: "Âm vần", period: 137 },
    { title: "Bài 53: Vần ieng, iec (Tiết 2)", sub: "Âm vần", period: 138 },
    { title: "Bài 54: Vần uông, uôc (Tiết 1)", sub: "Âm vần", period: 139 },
    { title: "Bài 54: Vần uông, uôc (Tiết 2)", sub: "Âm vần", period: 140 },
    { title: "Bài 55: Ôn tập và kể chuyện (Tiết 1)", sub: "Ôn tập", period: 141 },
    { title: "Bài 55: Ôn tập và kể chuyện (Tiết 2)", sub: "Ôn tập", period: 142 },
    { title: "Luyện đọc vần có nguyên âm đôi (Tiết 11)", sub: "Luyện đọc", period: 143 },
    { title: "Luyện viết từ ngữ có vần khó (Tiết 12)", sub: "Luyện viết", period: 144 }
  ],
  13: [
    { title: "Bài 56: Vần ương, ươc (Tiết 1)", sub: "Âm vần", period: 145 },
    { title: "Bài 56: Vần ương, ươc (Tiết 2)", sub: "Âm vần", period: 146 },
    { title: "Bài 57: Vần ong, oc (Tiết 1)", sub: "Âm vần", period: 147 },
    { title: "Bài 57: Vần ong, oc (Tiết 2)", sub: "Âm vần", period: 148 },
    { title: "Bài 58: Vần ông, ôc (Tiết 1)", sub: "Âm vần", period: 149 },
    { title: "Bài 58: Vần ông, ôc (Tiết 2)", sub: "Âm vần", period: 150 },
    { title: "Bài 59: Vần ung, uc (Tiết 1)", sub: "Âm vần", period: 151 },
    { title: "Bài 59: Vần ung, uc (Tiết 2)", sub: "Âm vần", period: 152 },
    { title: "Bài 60: Ôn tập và kể chuyện (Tiết 1)", sub: "Ôn tập", period: 153 },
    { title: "Bài 60: Ôn tập và kể chuyện (Tiết 2)", sub: "Ôn tập", period: 154 },
    { title: "Luyện đọc văn bản ngắn (Tiết 11)", sub: "Luyện đọc", period: 155 },
    { title: "Luyện viết chính tả nghe - viết (Tiết 12)", sub: "Luyện viết", period: 156 }
  ],
  14: [
    { title: "Bài 61: Vần ưng, ưc (Tiết 1)", sub: "Âm vần", period: 157 },
    { title: "Bài 61: Vần ưng, ưc (Tiết 2)", sub: "Âm vần", period: 158 },
    { title: "Bài 62: Vần ai, ay (Tiết 1)", sub: "Âm vần", period: 159 },
    { title: "Bài 62: Vần ai, ay (Tiết 2)", sub: "Âm vần", period: 160 },
    { title: "Bài 63: Vần ơi, ơi (Tiết 1)", sub: "Âm vần", period: 161 },
    { title: "Bài 63: Vần ơi, ơi (Tiết 2)", sub: "Âm vần", period: 162 },
    { title: "Bài 64: Vần ui, ưi (Tiết 1)", sub: "Âm vần", period: 163 },
    { title: "Bài 64: Vần ui, ưi (Tiết 2)", sub: "Âm vần", period: 164 },
    { title: "Bài 65: Ôn tập và kể chuyện (Tiết 1)", sub: "Ôn tập", period: 165 },
    { title: "Bài 65: Ôn tập và kể chuyện (Tiết 2)", sub: "Ôn tập", period: 166 },
    { title: "Luyện đọc kết thúc bằng i, y (Tiết 11)", sub: "Luyện đọc", period: 167 },
    { title: "Luyện viết đoạn câu ngắn (Tiết 12)", sub: "Luyện viết", period: 168 }
  ],
  15: [
    { title: "Bài 66: Vần uôi, ươi (Tiết 1)", sub: "Âm vần", period: 169 },
    { title: "Bài 66: Vần uôi, ươi (Tiết 2)", sub: "Âm vần", period: 170 },
    { title: "Bài 67: Vần ao, eo (Tiết 1)", sub: "Âm vần", period: 171 },
    { title: "Bài 67: Vần ao, eo (Tiết 2)", sub: "Âm vần", period: 172 },
    { title: "Bài 68: Vần au, âu (Tiết 1)", sub: "Âm vần", period: 173 },
    { title: "Bài 68: Vần au, âu (Tiết 2)", sub: "Âm vần", period: 174 },
    { title: "Bài 69: Vần iu, ưu (Tiết 1)", sub: "Âm vần", period: 175 },
    { title: "Bài 69: Vần iu, ưu (Tiết 2)", sub: "Âm vần", period: 176 },
    { title: "Bài 70: Ôn tập và kể chuyện (Tiết 1)", sub: "Ôn tập", period: 177 },
    { title: "Bài 70: Ôn tập và kể chuyện (Tiết 2)", sub: "Ôn tập", period: 178 },
    { title: "Luyện đọc trơn đoạn văn (Tiết 11)", sub: "Luyện đọc", period: 179 },
    { title: "Luyện viết chính tả củng cố (Tiết 12)", sub: "Luyện viết", period: 180 }
  ],
  16: [
    { title: "Bài 71: Vần yêu, ưu (Tiết 1)", sub: "Âm vần", period: 181 },
    { title: "Bài 71: Vần yêu, ưu (Tiết 2)", sub: "Âm vần", period: 182 },
    { title: "Bài 72: Vần oan, oat (Tiết 1)", sub: "Âm vần", period: 183 },
    { title: "Bài 72: Vần oan, oat (Tiết 2)", sub: "Âm vần", period: 184 },
    { title: "Bài 73: Vần oăn, oăt (Tiết 1)", sub: "Âm vần", period: 185 },
    { title: "Bài 73: Vần oăn, oăt (Tiết 2)", sub: "Âm vần", period: 186 },
    { title: "Bài 74: Vần oang, oac (Tiết 1)", sub: "Âm vần", period: 187 },
    { title: "Bài 74: Vần oang, oac (Tiết 2)", sub: "Âm vần", period: 188 },
    { title: "Bài 75: Ôn tập và kể chuyện (Tiết 1)", sub: "Ôn tập", period: 189 },
    { title: "Bài 75: Ôn tập và kể chuyện (Tiết 2)", sub: "Ôn tập", period: 190 },
    { title: "Luyện đọc vần đệm o (Tiết 11)", sub: "Luyện đọc", period: 191 },
    { title: "Luyện viết chính tả (Tiết 12)", sub: "Luyện viết", period: 192 }
  ],
  17: [
    { title: "Bài 76: Vần uân, uât (Tiết 1)", sub: "Âm vần", period: 193 },
    { title: "Bài 76: Vần uân, uât (Tiết 2)", sub: "Âm vần", period: 194 },
    { title: "Bài 77: Vần oai, oay (Tiết 1)", sub: "Âm vần", period: 195 },
    { title: "Bài 77: Vần oai, oay (Tiết 2)", sub: "Âm vần", period: 196 },
    { title: "Bài 78: Vần uôi, uôm (Tiết 1)", sub: "Âm vần", period: 197 },
    { title: "Bài 78: Vần uôi, uôm (Tiết 2)", sub: "Âm vần", period: 198 },
    { title: "Bài 79: Vần uy, uya (Tiết 1)", sub: "Âm vần", period: 199 },
    { title: "Bài 79: Vần uy, uya (Tiết 2)", sub: "Âm vần", period: 200 },
    { title: "Bài 80: Ôn tập và kể chuyện (Tiết 1)", sub: "Ôn tập", period: 201 },
    { title: "Bài 80: Ôn tập và kể chuyện (Tiết 2)", sub: "Ôn tập", period: 202 },
    { title: "Luyện đọc tổng hợp các vần khó (Tiết 11)", sub: "Luyện đọc", period: 203 },
    { title: "Luyện viết chính tả tổng hợp (Tiết 12)", sub: "Luyện viết", period: 204 }
  ],
  18: [
    { title: "Ôn tập cuối học kì I (Tiết 1)", sub: "Ôn tập", period: 205 },
    { title: "Ôn tập cuối học kì I (Tiết 2)", sub: "Ôn tập", period: 206 },
    { title: "Ôn tập cuối học kì I (Tiết 3)", sub: "Ôn tập", period: 207 },
    { title: "Ôn tập cuối học kì I (Tiết 4)", sub: "Ôn tập", period: 208 },
    { title: "Ôn tập cuối học kì I (Tiết 5)", sub: "Ôn tập", period: 209 },
    { title: "Ôn tập cuối học kì I (Tiết 6)", sub: "Ôn tập", period: 210 },
    { title: "Đánh giá định kì cuối học kì I: Đọc âm, vần (Tiết 7)", sub: "Kiểm tra", period: 211 },
    { title: "Đánh giá định kì cuối học kì I: Đọc từ ngữ (Tiết 8)", sub: "Kiểm tra", period: 212 },
    { title: "Đánh giá định kì cuối học kì I: Đọc bài văn (Tiết 9)", sub: "Kiểm tra", period: 213 },
    { title: "Đánh giá định kì cuối học kì I: Viết từ ngữ (Tiết 10)", sub: "Kiểm tra", period: 214 },
    { title: "Đánh giá định kì cuối học kì I: Viết câu (Tiết 11)", sub: "Kiểm tra", period: 215 },
    { title: "Tổng kết đánh giá học kì I (Tiết 12)", sub: "Tổng kết", period: 216 }
  ]
};

export const GRADE_1_TOAN: Record<number, Array<{ title: string; period: number; integ?: string }>> = {
  1: [
    { title: "Bài 1: Các số 0, 1, 2, 3, 4, 5 (Tiết 1)", period: 1 },
    { title: "Bài 1: Các số 0, 1, 2, 3, 4, 5 (Tiết 2)", period: 2 },
    { title: "Bài 2: Các số 6, 7, 8, 9, 10 (Tiết 1)", period: 3 }
  ],
  2: [
    { title: "Bài 2: Các số 6, 7, 8, 9, 10 (Tiết 2)", period: 4 },
    { title: "Bài 3: Nhiều hơn, ít hơn, bằng nhau (Tiết 1)", period: 5 },
    { title: "Bài 3: Nhiều hơn, ít hơn, bằng nhau (Tiết 2)", period: 6 }
  ],
  3: [
    { title: "Bài 4: So sánh số (Tiết 1)", period: 7 },
    { title: "Bài 4: So sánh số (Tiết 2)", period: 8 },
    { title: "Bài 5: Mấy và mấy (Tiết 1)", period: 9 }
  ],
  4: [
    { title: "Bài 5: Mấy và mấy (Tiết 2)", period: 10, integ: "Cấu tạo số: Tách gộp số trong phạm vi 10." },
    { title: "Bài 6: Luyện tập chung (Tiết 1)", period: 11, integ: "Thực hành đếm và so sánh số đồ vật thực tế." },
    { title: "Bài 6: Luyện tập chung (Tiết 2)", period: 12 }
  ],
  5: [
    { title: "Bài 7: Hình vuông, hình tròn, hình tam giác, hình chữ nhật (Tiết 1)", period: 13 },
    { title: "Bài 7: Hình vuông, hình tròn, hình tam giác, hình chữ nhật (Tiết 2)", period: 14 },
    { title: "Bài 8: Thực hành lắp ghép, xếp hình (Tiết 1)", period: 15 }
  ],
  6: [
    { title: "Bài 8: Thực hành lắp ghép, xếp hình (Tiết 2)", period: 16 },
    { title: "Bài 9: Luyện tập chung (Tiết 1)", period: 17 },
    { title: "Bài 9: Luyện tập chung (Tiết 2)", period: 18 }
  ],
  7: [
    { title: "Bài 10: Phép cộng trong phạm vi 10 (Tiết 1)", period: 19 },
    { title: "Bài 10: Phép cộng trong phạm vi 10 (Tiết 2)", period: 20 },
    { title: "Bài 10: Phép cộng trong phạm vi 10 (Tiết 3)", period: 21 }
  ],
  8: [
    { title: "Bài 10: Phép cộng trong phạm vi 10 (Tiết 4)", period: 22 },
    { title: "Bài 10: Phép cộng trong phạm vi 10 (Tiết 5)", period: 23 },
    { title: "Bài 11: Bảng cộng trong phạm vi 10 (Tiết 1)", period: 24 }
  ],
  9: [
    { title: "Bài 11: Bảng cộng trong phạm vi 10 (Tiết 2)", period: 25 },
    { title: "Bài 12: Luyện tập chung (Tiết 1)", period: 26 },
    { title: "Bài 12: Luyện tập chung (Tiết 2)", period: 27 }
  ],
  10: [
    { title: "Bài 13: Phép trừ trong phạm vi 10 (Tiết 1)", period: 28 },
    { title: "Bài 13: Phép trừ trong phạm vi 10 (Tiết 2)", period: 29 },
    { title: "Bài 13: Phép trừ trong phạm vi 10 (Tiết 3)", period: 30 }
  ],
  11: [
    { title: "Bài 13: Phép trừ trong phạm vi 10 (Tiết 4)", period: 31 },
    { title: "Bài 13: Phép trừ trong phạm vi 10 (Tiết 5)", period: 32 },
    { title: "Bài 14: Bảng trừ trong phạm vi 10 (Tiết 1)", period: 33 }
  ],
  12: [
    { title: "Bài 14: Bảng trừ trong phạm vi 10 (Tiết 2)", period: 34 },
    { title: "Bài 15: Luyện tập chung (Tiết 1)", period: 35 },
    { title: "Bài 15: Luyện tập chung (Tiết 2)", period: 36 }
  ],
  13: [
    { title: "Bài 16: Khối lập phương, khối hộp chữ nhật (Tiết 1)", period: 37 },
    { title: "Bài 16: Khối lập phương, khối hộp chữ nhật (Tiết 2)", period: 38 },
    { title: "Bài 17: Vị trí, định hướng trong không gian (Tiết 1)", period: 39 }
  ],
  14: [
    { title: "Bài 17: Vị trí, định hướng trong không gian (Tiết 2)", period: 40 },
    { title: "Bài 18: Luyện tập chung (Tiết 1)", period: 41 },
    { title: "Bài 18: Luyện tập chung (Tiết 2)", period: 42 }
  ],
  15: [
    { title: "Bài 19: Ôn tập phép cộng, phép trừ trong phạm vi 10 (Tiết 1)", period: 43 },
    { title: "Bài 19: Ôn tập phép cộng, phép trừ trong phạm vi 10 (Tiết 2)", period: 44 },
    { title: "Bài 19: Ôn tập phép cộng, phép trừ trong phạm vi 10 (Tiết 3)", period: 45 }
  ],
  16: [
    { title: "Bài 20: Ôn tập hình học (Tiết 1)", period: 46 },
    { title: "Bài 20: Ôn tập hình học (Tiết 2)", period: 47 },
    { title: "Bài 21: Ôn tập chung (Tiết 1)", period: 48 }
  ],
  17: [
    { title: "Bài 21: Ôn tập chung (Tiết 2)", period: 49 },
    { title: "Bài 21: Ôn tập chung (Tiết 3)", period: 50 },
    { title: "Bài 21: Ôn tập chung (Tiết 4)", period: 51 }
  ],
  18: [
    { title: "Kiểm tra, đánh giá định kì cuối học kì I (Tiết 1)", period: 52 },
    { title: "Kiểm tra, đánh giá định kì cuối học kì I (Tiết 2)", period: 53 },
    { title: "Tổng kết kiến thức học kì I (Tiết 3)", period: 54 }
  ]
};

export const GRADE_1_TNXH: Record<number, Array<{ title: string; period: number; integ?: string }>> = {
  1: [
    { title: "Bài 1: Gia đình của em (Tiết 1)", period: 1 },
    { title: "Bài 1: Gia đình của em (Tiết 2)", period: 2 }
  ],
  2: [
    { title: "Bài 2: Ngôi nhà của em (Tiết 1)", period: 3 },
    { title: "Bài 2: Ngôi nhà của em (Tiết 2)", period: 4 }
  ],
  3: [
    { title: "Bài 3: Đồ dùng trong nhà (Tiết 1)", period: 5, integ: "KNS: Sử dụng an toàn dao kéo, ổ cắm điện." },
    { title: "Bài 3: Đồ dùng trong nhà (Tiết 2)", period: 6 }
  ],
  4: [
    { title: "Bài 4: Giữ nhà ở gọn gàng, ngăn nắp (Tiết 1)", period: 7, integ: "Rèn thói quen xếp dọn đồ chơi sau khi chơi xong." },
    { title: "Bài 4: Giữ nhà ở gọn gàng, ngăn nắp (Tiết 2)", period: 8 }
  ],
  5: [
    { title: "Bài 5: Ôn tập chủ đề Gia đình (Tiết 1)", period: 9 },
    { title: "Bài 5: Ôn tập chủ đề Gia đình (Tiết 2)", period: 10 }
  ],
  6: [
    { title: "Bài 6: Lớp học của em (Tiết 1)", period: 11 },
    { title: "Bài 6: Lớp học của em (Tiết 2)", period: 12 }
  ],
  7: [
    { title: "Bài 7: Các hoạt động ở lớp (Tiết 1)", period: 13 },
    { title: "Bài 7: Các hoạt động ở lớp (Tiết 2)", period: 14 }
  ],
  8: [
    { title: "Bài 8: Giữ an toàn và vệ sinh ở trường (Tiết 1)", period: 15, integ: "Không chạy nhảy xô đẩy ở hành lang lớp học." },
    { title: "Bài 8: Giữ an toàn và vệ sinh ở trường (Tiết 2)", period: 16 }
  ],
  9: [
    { title: "Bài 9: Ôn tập chủ đề Trường học (Tiết 1)", period: 17 },
    { title: "Bài 9: Ôn tập chủ đề Trường học (Tiết 2)", period: 18 }
  ],
  10: [
    { title: "Bài 10: Nơi em sống (Tiết 1)", period: 19 },
    { title: "Bài 10: Nơi em sống (Tiết 2)", period: 20 }
  ],
  11: [
    { title: "Bài 11: Công việc trong cộng đồng (Tiết 1)", period: 21 },
    { title: "Bài 11: Công việc trong cộng đồng (Tiết 2)", period: 22 }
  ],
  12: [
    { title: "Bài 12: An toàn trên đường đi học (Tiết 1)", period: 23, integ: "ATGT: Đi bộ trên vỉa hè, nắm tay người lớn sang đường." },
    { title: "Bài 12: An toàn trên đường đi học (Tiết 2)", period: 24 }
  ],
  13: [
    { title: "Bài 13: Ôn tập chủ đề Cộng đồng địa phương (Tiết 1)", period: 25 },
    { title: "Bài 13: Ôn tập chủ đề Cộng đồng địa phương (Tiết 2)", period: 26 }
  ],
  14: [
    { title: "Bài 14: Cây xung quanh em (Tiết 1)", period: 27 },
    { title: "Bài 14: Cây xung quanh em (Tiết 2)", period: 28 }
  ],
  15: [
    { title: "Bài 15: Con vật xung quanh em (Tiết 1)", period: 29 },
    { title: "Bài 15: Con vật xung quanh em (Tiết 2)", period: 30 }
  ],
  16: [
    { title: "Bài 16: Chăm sóc cây và con vật (Tiết 1)", period: 31, integ: "Yêu thương động vật và tưới nước cho cây cảnh." },
    { title: "Bài 16: Chăm sóc cây và con vật (Tiết 2)", period: 32 }
  ],
  17: [
    { title: "Bài 17: Ôn tập chủ đề Thực vật và Động vật (Tiết 1)", period: 33 },
    { title: "Bài 17: Ôn tập chủ đề Thực vật và Động vật (Tiết 2)", period: 34 }
  ],
  18: [
    { title: "Bài 18: Ôn tập và kiểm tra học kì I (Tiết 1)", period: 35 },
    { title: "Bài 18: Ôn tập và kiểm tra học kì I (Tiết 2)", period: 36 }
  ]
};

export const GRADE_1_DAO_DUC: Record<number, { title: string; period: number; integ?: string }> = {
  1: { title: "Bài 1: Em yêu thương người thân trong gia đình (Tiết 1)", period: 1 },
  2: { title: "Bài 1: Em yêu thương người thân trong gia đình (Tiết 2)", period: 2 },
  3: { title: "Bài 2: Giữ gìn đồ dùng học tập (Tiết 1)", period: 3 },
  4: { title: "Bài 2: Giữ gìn đồ dùng học tập (Tiết 2)", period: 4, integ: "Bảo quản sách vở, hộp bút cẩn thận." },
  5: { title: "Bài 3: Ngồi học ngay ngắn (Tiết 1)", period: 5, integ: "Tư thế ngồi học phòng chống vẹo cột sống và cận thị." },
  6: { title: "Bài 3: Ngồi học ngay ngắn (Tiết 2)", period: 6 },
  7: { title: "Bài 4: Đi học đều và đúng giờ (Tiết 1)", period: 7, integ: "Rèn thói quen dậy sớm, chuẩn bị sách vở từ tối hôm trước." },
  8: { title: "Bài 4: Đi học đều và đúng giờ (Tiết 2)", period: 8 },
  9: { title: "Ôn tập giữa học kì I", period: 9 },
  10: { title: "Bài 5: Tự giác làm việc của mình (Tiết 1)", period: 10, integ: "Tự mặc quần áo, đánh răng, dọn dẹp đồ dùng." },
  11: { title: "Bài 5: Tự giác làm việc của mình (Tiết 2)", period: 11 },
  12: { title: "Bài 6: Nói lời chào hỏi, cảm ơn, xin lỗi (Tiết 1)", period: 12, integ: "Văn hóa giao tiếp lễ phép với ông bà, thầy cô." },
  13: { title: "Bài 6: Nói lời chào hỏi, cảm ơn, xin lỗi (Tiết 2)", period: 13 },
  14: { title: "Bài 7: Yêu thương người thân trong gia đình (Tiết 1)", period: 14 },
  15: { title: "Bài 7: Yêu thương người thân trong gia đình (Tiết 2)", period: 15 },
  16: { title: "Bài 8: Giúp đỡ người thân việc nhà (Tiết 1)", period: 16, integ: "Làm việc nhà vừa sức: nhặt rau, cất đồ chơi." },
  17: { title: "Bài 8: Giúp đỡ người thân việc nhà (Tiết 2)", period: 17 },
  18: { title: "Ôn tập cuối học kì I", period: 18 }
};

export const GRADE_1_CURRICULUM_DATA: Record<string, (week: number, p: number) => LessonInfo> = {
  "tiếng việt": (week: number, p: number) => {
    const list = GRADE_1_TIENG_VIET[week];
    if (list && list[p - 1]) {
      const item = list[p - 1];
      return {
        lessonTitle: item.title,
        subSubject: item.sub,
        curriculumPeriod: item.period,
        integrationNotes: item.integ || "Tiếng Việt 1 Kết nối tri thức."
      };
    }
    return {
      lessonTitle: `Tiếng Việt 1 - Tuần ${week} (Tiết ${p})`,
      curriculumPeriod: (week - 1) * 12 + p,
      integrationNotes: "Tiếng Việt 1 GDPT 2018."
    };
  },

  "toán": (week: number, p: number) => {
    const list = GRADE_1_TOAN[week];
    if (list && list[p - 1]) {
      const item = list[p - 1];
      return {
        lessonTitle: item.title,
        curriculumPeriod: item.period,
        integrationNotes: item.integ || "Toán 1 GDPT 2018."
      };
    }
    return {
      lessonTitle: `Toán 1 - Tuần ${week} (Tiết ${p})`,
      curriculumPeriod: (week - 1) * 3 + p,
      integrationNotes: "Toán 1 GDPT 2018."
    };
  },

  "tự nhiên và xã hội": (week: number, p: number) => {
    const list = GRADE_1_TNXH[week];
    if (list && list[p - 1]) {
      const item = list[p - 1];
      return {
        lessonTitle: item.title,
        curriculumPeriod: item.period,
        integrationNotes: item.integ || "TNXH 1 Kết nối tri thức."
      };
    }
    return {
      lessonTitle: `TNXH 1 - Tuần ${week} (Tiết ${p})`,
      curriculumPeriod: (week - 1) * 2 + p
    };
  },

  "đạo đức": (week: number) => {
    const item = GRADE_1_DAO_DUC[week];
    if (item) {
      return {
        lessonTitle: item.title,
        curriculumPeriod: item.period,
        integrationNotes: item.integ || "Đạo đức 1 GDPT 2018."
      };
    }
    return {
      lessonTitle: `Đạo đức 1 - Tuần ${week}`,
      curriculumPeriod: week
    };
  },

  "hoạt động trải nghiệm": (week: number, p: number) => {
    return {
      lessonTitle: p === 1 ? `SHDC Tuần ${week}: Nề nếp chào cờ` : p === 2 ? `HĐGDCĐ Tuần ${week}: Hoạt động theo chủ đề` : `Sinh hoạt lớp Tuần ${week}: Đánh giá nề nếp tuần`,
      curriculumPeriod: (week - 1) * 3 + p,
      integrationNotes: "Hoạt động trải nghiệm 1 GDPT 2018."
    };
  },

  "giáo dục thể chất": (week: number, p: number) => {
    return {
      lessonTitle: `Giáo dục thể chất 1: Đội hình đội ngũ & Tư thế cơ bản (Tiết ${p})`,
      curriculumPeriod: (week - 1) * 2 + p,
      integrationNotes: "Rèn luyện tư thế vận động cơ bản."
    };
  }
};
