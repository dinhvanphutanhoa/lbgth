import { LessonInfo } from "../gradeCurriculums";

// ============================================================================
// KẾ HOẠCH DẠY HỌC KHỐI 2 - CHÍNH THỨC NĂM HỌC 2024-2025 (KẾT NỐI TRI THỨC)
// ============================================================================

export const GRADE_2_TIENG_VIET: Record<number, Array<{ title: string; sub: string; period: number; integ?: string }>> = {
  1: [
    { title: "Bài 1: Tôi là học sinh lớp 2 (Tiết 1)", sub: "Đọc", period: 1 },
    { title: "Bài 1: Tôi là học sinh lớp 2 (Tiết 2)", sub: "Đọc", period: 2 },
    { title: "Bài 1: Tôi là học sinh lớp 2 (Tiết 3: Viết)", sub: "Viết", period: 3 },
    { title: "Bài 1: Tôi là học sinh lớp 2 (Tiết 4: Nói và nghe)", sub: "Nói và nghe", period: 4 },
    { title: "Bài 2: Ngày hôm qua đâu rồi? (Tiết 1)", sub: "Đọc", period: 5 },
    { title: "Bài 2: Ngày hôm qua đâu rồi? (Tiết 2)", sub: "Đọc", period: 6 },
    { title: "Bài 2: Ngày hôm qua đâu rồi? (Tiết 3: Viết)", sub: "Viết", period: 7 },
    { title: "Bài 2: Ngày hôm qua đâu rồi? (Tiết 4: Luyện tập)", sub: "Luyện tập", period: 8 },
    { title: "Luyện tập mở rộng vốn từ Ngày và tuần (Tiết 9)", sub: "Luyện tập", period: 9 },
    { title: "Đọc mở rộng (Tiết 10)", sub: "Đọc mở rộng", period: 10 }
  ],
  2: [
    { title: "Bài 3: Niềm vui của Bi và Bống (Tiết 1)", sub: "Đọc", period: 11 },
    { title: "Bài 3: Niềm vui của Bi và Bống (Tiết 2)", sub: "Đọc", period: 12 },
    { title: "Bài 3: Niềm vui của Bi và Bống (Tiết 3: Viết)", sub: "Viết", period: 13 },
    { title: "Bài 3: Niềm vui của Bi và Bống (Tiết 4: Nói và nghe)", sub: "Nói và nghe", period: 14 },
    { title: "Bài 4: Làm việc thật là vui (Tiết 1)", sub: "Đọc", period: 15 },
    { title: "Bài 4: Làm việc thật là vui (Tiết 2)", sub: "Đọc", period: 16 },
    { title: "Bài 4: Làm việc thật là vui (Tiết 3: Viết)", sub: "Viết", period: 17 },
    { title: "Bài 4: Làm việc thật là vui (Tiết 4: Luyện tập)", sub: "Luyện tập", period: 18 },
    { title: "Luyện viết đoạn văn giới thiệu bản thân (Tiết 9)", sub: "Luyện tập", period: 19 },
    { title: "Đọc mở rộng (Tiết 10)", sub: "Đọc mở rộng", period: 20 }
  ],
  3: [
    { title: "Bài 5: Em có xinh không? (Tiết 1)", sub: "Đọc", period: 21 },
    { title: "Bài 5: Em có xinh không? (Tiết 2)", sub: "Đọc", period: 22 },
    { title: "Bài 5: Em có xinh không? (Tiết 3: Viết)", sub: "Viết", period: 23 },
    { title: "Bài 5: Em có xinh không? (Tiết 4: Nói và nghe)", sub: "Nói và nghe", period: 24 },
    { title: "Bài 6: Một giờ học (Tiết 1)", sub: "Đọc", period: 25 },
    { title: "Bài 6: Một giờ học (Tiết 2)", sub: "Đọc", period: 26 },
    { title: "Bài 6: Một giờ học (Tiết 3: Viết)", sub: "Viết", period: 27 },
    { title: "Bài 6: Một giờ học (Tiết 4: Luyện tập)", sub: "Luyện tập", period: 28 },
    { title: "Luyện tập từ chỉ sự vật, câu giới thiệu (Tiết 9)", sub: "Luyện tập", period: 29 },
    { title: "Đọc mở rộng (Tiết 10)", sub: "Đọc mở rộng", period: 30 }
  ],
  4: [
    { title: "Bài 7: Cây xấu hổ (Tiết 1)", sub: "Đọc", period: 31, integ: "Cảm nhận sự kì thú của cây cỏ tự nhiên." },
    { title: "Bài 7: Cây xấu hổ (Tiết 2)", sub: "Đọc", period: 32 },
    { title: "Bài 7: Cây xấu hổ (Tiết 3: Viết: Nghe - viết)", sub: "Viết", period: 33 },
    { title: "Bài 7: Cây xấu hổ (Tiết 4: LTVC: Từ chỉ sự vật)", sub: "Luyện từ và câu", period: 34 },
    { title: "Bài 8: Cầu thủ dự bị (Tiết 1)", sub: "Đọc", period: 35, integ: "KNS: Tinh thần đoàn kết, không tự ti khi ngồi ghế dự bị." },
    { title: "Bài 8: Cầu thủ dự bị (Tiết 2)", sub: "Đọc", period: 36 },
    { title: "Bài 8: Cầu thủ dự bị (Tiết 3: Viết: Viết chữ hoa D, Đ)", sub: "Viết", period: 37 },
    { title: "Bài 8: Cầu thủ dự bị (Tiết 4: LTVC: Dấu chấm, dấu chấm hỏi)", sub: "Luyện từ và câu", period: 38 },
    { title: "Bài 8: Cầu thủ dự bị (Tiết 5: Nói và nghe: Kể chuyện Cầu thủ dự bị)", sub: "Nói và nghe", period: 39 },
    { title: "Đọc mở rộng (Tiết 10: Đọc sách về hoạt động thể thao, vui chơi)", sub: "Đọc mở rộng", period: 40 }
  ],
  5: [
    { title: "Bài 9: Cô giáo lớp em (Tiết 1)", sub: "Đọc", period: 41, integ: "Tình cảm kính yêu cô giáo hiền như mẹ." },
    { title: "Bài 9: Cô giáo lớp em (Tiết 2)", sub: "Đọc", period: 42 },
    { title: "Bài 9: Cô giáo lớp em (Tiết 3: Viết)", sub: "Viết", period: 43 },
    { title: "Bài 9: Cô giáo lớp em (Tiết 4: LTVC)", sub: "LTVC", period: 44 },
    { title: "Bài 10: Thời khóa biểu (Tiết 1)", sub: "Đọc", period: 45, integ: "Rèn nếp sống khoa học theo thời khóa biểu." },
    { title: "Bài 10: Thời khóa biểu (Tiết 2)", sub: "Đọc", period: 46 },
    { title: "Bài 10: Thời khóa biểu (Tiết 3: Viết)", sub: "Viết", period: 47 },
    { title: "Bài 10: Thời khóa biểu (Tiết 4: LTVC)", sub: "LTVC", period: 48 },
    { title: "Luyện viết đoạn văn kể về đồ dùng học tập (Tiết 9)", sub: "Luyện tập", period: 49 },
    { title: "Đọc mở rộng (Tiết 10)", sub: "Đọc mở rộng", period: 50 }
  ],
  6: [
    { title: "Bài 11: Cái trống trường em (Tiết 1)", sub: "Đọc", period: 51, integ: "Tiếng trống trường giục giã năm học mới." },
    { title: "Bài 11: Cái trống trường em (Tiết 2)", sub: "Đọc", period: 52 },
    { title: "Bài 11: Cái trống trường em (Tiết 3: Viết)", sub: "Viết", period: 53 },
    { title: "Bài 11: Cái trống trường em (Tiết 4: LTVC)", sub: "LTVC", period: 54 },
    { title: "Bài 12: Danh sách học sinh (Tiết 1)", sub: "Đọc", period: 55 },
    { title: "Bài 12: Danh sách học sinh (Tiết 2)", sub: "Đọc", period: 56 },
    { title: "Bài 12: Danh sách học sinh (Tiết 3: Viết)", sub: "Viết", period: 57 },
    { title: "Bài 12: Danh sách học sinh (Tiết 4: LTVC)", sub: "LTVC", period: 58 },
    { title: "Luyện tập lập danh sách tổ (Tiết 9)", sub: "Luyện tập", period: 59 },
    { title: "Đọc mở rộng (Tiết 10)", sub: "Đọc mở rộng", period: 60 }
  ],
  7: [
    { title: "Bài 13: Yêu lắm trường ơi! (Tiết 1)", sub: "Đọc", period: 61, integ: "Tình yêu mái trường và thầy cô, bè bạn." },
    { title: "Bài 13: Yêu lắm trường ơi! (Tiết 2)", sub: "Đọc", period: 62 },
    { title: "Bài 13: Yêu lắm trường ơi! (Tiết 3: Viết)", sub: "Viết", period: 63 },
    { title: "Bài 13: Yêu lắm trường ơi! (Tiết 4: LTVC)", sub: "LTVC", period: 64 },
    { title: "Bài 14: Em học vẽ (Tiết 1)", sub: "Đọc", period: 65, integ: "Sáng tạo sắc màu quê hương qua tranh vẽ." },
    { title: "Bài 14: Em học vẽ (Tiết 2)", sub: "Đọc", period: 66 },
    { title: "Bài 14: Em học vẽ (Tiết 3: Viết)", sub: "Viết", period: 67 },
    { title: "Bài 14: Em học vẽ (Tiết 4: LTVC)", sub: "LTVC", period: 68 },
    { title: "Luyện viết đoạn văn giới thiệu bức tranh (Tiết 9)", sub: "Luyện tập", period: 69 },
    { title: "Đọc mở rộng (Tiết 10)", sub: "Đọc mở rộng", period: 70 }
  ],
  8: [
    { title: "Bài 15: Cuốn sách của em (Tiết 1)", sub: "Đọc", period: 71, integ: "Giữ gìn sách vở cẩn thận, không làm rách bìa." },
    { title: "Bài 15: Cuốn sách của em (Tiết 2)", sub: "Đọc", period: 72 },
    { title: "Bài 15: Cuốn sách của em (Tiết 3: Viết)", sub: "Viết", period: 73 },
    { title: "Bài 15: Cuốn sách của em (Tiết 4: LTVC)", sub: "LTVC", period: 74 },
    { title: "Bài 16: Khi trang sách mở ra (Tiết 1)", sub: "Đọc", period: 75, integ: "Sách mở ra chân trời kì diệu quanh em." },
    { title: "Bài 16: Khi trang sách mở ra (Tiết 2)", sub: "Đọc", period: 76 },
    { title: "Bài 16: Khi trang sách mở ra (Tiết 3: Viết)", sub: "Viết", period: 77 },
    { title: "Bài 16: Khi trang sách mở ra (Tiết 4: LTVC)", sub: "LTVC", period: 78 },
    { title: "Luyện tập về mục lục sách (Tiết 9)", sub: "Luyện tập", period: 79 },
    { title: "Đọc mở rộng (Tiết 10)", sub: "Đọc mở rộng", period: 80 }
  ],
  9: [
    { title: "Ôn tập giữa học kì I (Tiết 1)", sub: "Ôn tập", period: 81 },
    { title: "Ôn tập giữa học kì I (Tiết 2)", sub: "Ôn tập", period: 82 },
    { title: "Ôn tập giữa học kì I (Tiết 3)", sub: "Ôn tập", period: 83 },
    { title: "Ôn tập giữa học kì I (Tiết 4)", sub: "Ôn tập", period: 84 },
    { title: "Ôn tập giữa học kì I (Tiết 5)", sub: "Ôn tập", period: 85 },
    { title: "Ôn tập giữa học kì I (Tiết 6)", sub: "Ôn tập", period: 86 },
    { title: "Ôn tập giữa học kì I (Tiết 7)", sub: "Ôn tập", period: 87 },
    { title: "Ôn tập giữa học kì I (Tiết 8)", sub: "Ôn tập", period: 88 },
    { title: "Đánh giá định kì giữa học kì I: Đọc (Tiết 9)", sub: "Kiểm tra", period: 89 },
    { title: "Đánh giá định kì giữa học kì I: Viết (Tiết 10)", sub: "Kiểm tra", period: 90 }
  ],
  10: [
    { title: "Bài 17: Gọi bạn (Tiết 1)", sub: "Đọc", period: 91, integ: "Tình bạn chân thành của Bê Vàng và Dê Trắng." },
    { title: "Bài 17: Gọi bạn (Tiết 2)", sub: "Đọc", period: 92 },
    { title: "Bài 17: Gọi bạn (Tiết 3: Viết)", sub: "Viết", period: 93 },
    { title: "Bài 17: Gọi bạn (Tiết 4: LTVC)", sub: "LTVC", period: 94 },
    { title: "Bài 18: Tớ nhớ cậu (Tiết 1)", sub: "Đọc", period: 95 },
    { title: "Bài 18: Tớ nhớ cậu (Tiết 2)", sub: "Đọc", period: 96 },
    { title: "Bài 18: Tớ nhớ cậu (Tiết 3: Viết)", sub: "Viết", period: 97 },
    { title: "Bài 18: Tớ nhớ cậu (Tiết 4: LTVC)", sub: "LTVC", period: 98 },
    { title: "Luyện viết tin nhắn cho bạn bè (Tiết 9)", sub: "Luyện tập", period: 99 },
    { title: "Đọc mở rộng (Tiết 10)", sub: "Đọc mở rộng", period: 100 }
  ],
  11: [
    { title: "Bài 19: Chữ A và những người bạn (Tiết 1)", sub: "Đọc", period: 101 },
    { title: "Bài 19: Chữ A và những người bạn (Tiết 2)", sub: "Đọc", period: 102 },
    { title: "Bài 19: Chữ A và những người bạn (Tiết 3: Viết)", sub: "Viết", period: 103 },
    { title: "Bài 19: Chữ A và những người bạn (Tiết 4: LTVC)", sub: "LTVC", period: 104 },
    { title: "Bài 20: Nhím nâu kết bạn (Tiết 1)", sub: "Đọc", period: 105 },
    { title: "Bài 20: Nhím nâu kết bạn (Tiết 2)", sub: "Đọc", period: 106 },
    { title: "Bài 20: Nhím nâu kết bạn (Tiết 3: Viết)", sub: "Viết", period: 107 },
    { title: "Bài 20: Nhím nâu kết bạn (Tiết 4: LTVC)", sub: "LTVC", period: 108 },
    { title: "Luyện viết đoạn văn kể về bạn thân (Tiết 9)", sub: "Luyện tập", period: 109 },
    { title: "Đọc mở rộng (Tiết 10)", sub: "Đọc mở rộng", period: 110 }
  ],
  12: [
    { title: "Bài 21: Thả diều (Tiết 1)", sub: "Đọc", period: 111, integ: "Cánh diều nâng cánh ước mơ tuổi thơ." },
    { title: "Bài 21: Thả diều (Tiết 2)", sub: "Đọc", period: 112 },
    { title: "Bài 21: Thả diều (Tiết 3: Viết)", sub: "Viết", period: 113 },
    { title: "Bài 21: Thả diều (Tiết 4: LTVC)", sub: "LTVC", period: 114 },
    { title: "Bài 22: Triển lãm thiếu nhi (Tiết 1)", sub: "Đọc", period: 115 },
    { title: "Bài 22: Triển lãm thiếu nhi (Tiết 2)", sub: "Đọc", period: 116 },
    { title: "Bài 22: Triển lãm thiếu nhi (Tiết 3: Viết)", sub: "Viết", period: 117 },
    { title: "Bài 22: Triển lãm thiếu nhi (Tiết 4: LTVC)", sub: "LTVC", period: 118 },
    { title: "Luyện viết đoạn văn giới thiệu đồ chơi (Tiết 9)", sub: "Luyện tập", period: 119 },
    { title: "Đọc mở rộng (Tiết 10)", sub: "Đọc mở rộng", period: 120 }
  ],
  13: [
    { title: "Bài 23: Em mang về yêu thương (Tiết 1)", sub: "Đọc", period: 121, integ: "Tình cảm ấm áp trong gia đình." },
    { title: "Bài 23: Em mang về yêu thương (Tiết 2)", sub: "Đọc", period: 122 },
    { title: "Bài 23: Em mang về yêu thương (Tiết 3: Viết)", sub: "Viết", period: 123 },
    { title: "Bài 23: Em mang về yêu thương (Tiết 4: LTVC)", sub: "LTVC", period: 124 },
    { title: "Bài 24: Nặn đồ chơi (Tiết 1)", sub: "Đọc", period: 125 },
    { title: "Bài 24: Nặn đồ chơi (Tiết 2)", sub: "Đọc", period: 126 },
    { title: "Bài 24: Nặn đồ chơi (Tiết 3: Viết)", sub: "Viết", period: 127 },
    { title: "Bài 24: Nặn đồ chơi (Tiết 4: LTVC)", sub: "LTVC", period: 128 },
    { title: "Luyện viết đoạn văn nói về em bé (Tiết 9)", sub: "Luyện tập", period: 129 },
    { title: "Đọc mở rộng (Tiết 10)", sub: "Đọc mở rộng", period: 130 }
  ],
  14: [
    { title: "Bài 25: Sự tích hoa cúc trắng (Tiết 1)", sub: "Đọc", period: 131, integ: "Lòng hiếu thảo vô bờ bến với mẹ cha." },
    { title: "Bài 25: Sự tích hoa cúc trắng (Tiết 2)", sub: "Đọc", period: 132 },
    { title: "Bài 25: Sự tích hoa cúc trắng (Tiết 3: Viết)", sub: "Viết", period: 133 },
    { title: "Bài 25: Sự tích hoa cúc trắng (Tiết 4: LTVC)", sub: "LTVC", period: 134 },
    { title: "Bài 26: Ánh sáng của ngọn đèn (Tiết 1)", sub: "Đọc", period: 135 },
    { title: "Bài 26: Ánh sáng của ngọn đèn (Tiết 2)", sub: "Đọc", period: 136 },
    { title: "Bài 26: Ánh sáng của ngọn đèn (Tiết 3: Viết)", sub: "Viết", period: 137 },
    { title: "Bài 26: Ánh sáng của ngọn đèn (Tiết 4: LTVC)", sub: "LTVC", period: 138 },
    { title: "Luyện viết bưu thiếp chúc mừng (Tiết 9)", sub: "Luyện tập", period: 139 },
    { title: "Đọc mở rộng (Tiết 10)", sub: "Đọc mở rộng", period: 140 }
  ],
  15: [
    { title: "Bài 27: Mẹ (Tiết 1)", sub: "Đọc", period: 141, integ: "Tình thương bao la của mẹ dành cho con." },
    { title: "Bài 27: Mẹ (Tiết 2)", sub: "Đọc", period: 142 },
    { title: "Bài 27: Mẹ (Tiết 3: Viết)", sub: "Viết", period: 143 },
    { title: "Bài 27: Mẹ (Tiết 4: LTVC)", sub: "LTVC", period: 144 },
    { title: "Bài 28: Trò chơi của bố (Tiết 1)", sub: "Đọc", period: 145 },
    { title: "Bài 28: Trò chơi của bố (Tiết 2)", sub: "Đọc", period: 146 },
    { title: "Bài 28: Trò chơi của bố (Tiết 3: Viết)", sub: "Viết", period: 147 },
    { title: "Bài 28: Trò chơi của bố (Tiết 4: LTVC)", sub: "LTVC", period: 148 },
    { title: "Luyện viết đoạn văn thể hiện tình cảm với người thân (Tiết 9)", sub: "Luyện tập", period: 149 },
    { title: "Đọc mở rộng (Tiết 10)", sub: "Đọc mở rộng", period: 150 }
  ],
  16: [
    { title: "Bài 29: Cánh cửa nhớ bà (Tiết 1)", sub: "Đọc", period: 151, integ: "Nỗi nhớ và sự gắn bó sâu sắc với bà." },
    { title: "Bài 29: Cánh cửa nhớ bà (Tiết 2)", sub: "Đọc", period: 152 },
    { title: "Bài 29: Cánh cửa nhớ bà (Tiết 3: Viết)", sub: "Viết", period: 153 },
    { title: "Bài 29: Cánh cửa nhớ bà (Tiết 4: LTVC)", sub: "LTVC", period: 154 },
    { title: "Bài 30: Thương ông (Tiết 1)", sub: "Đọc", period: 155, integ: "Sự hiếu thảo, ân cần chăm sóc ông đau chân." },
    { title: "Bài 30: Thương ông (Tiết 2)", sub: "Đọc", period: 156 },
    { title: "Bài 30: Thương ông (Tiết 3: Viết)", sub: "Viết", period: 157 },
    { title: "Bài 30: Thương ông (Tiết 4: LTVC)", sub: "LTVC", period: 158 },
    { title: "Luyện viết đoạn văn kể về việc làm thể hiện tình cảm (Tiết 9)", sub: "Luyện tập", period: 159 },
    { title: "Đọc mở rộng (Tiết 10)", sub: "Đọc mở rộng", period: 160 }
  ],
  17: [
    { title: "Bài 31: Ánh Hải Đăng (Tiết 1)", sub: "Đọc", period: 161, integ: "Biển đảo quê hương và ngọn đèn dẫn đường." },
    { title: "Bài 31: Ánh Hải Đăng (Tiết 2)", sub: "Đọc", period: 162 },
    { title: "Bài 31: Ánh Hải Đăng (Tiết 3: Viết)", sub: "Viết", period: 163 },
    { title: "Bài 31: Ánh Hải Đăng (Tiết 4: LTVC)", sub: "LTVC", period: 164 },
    { title: "Bài 32: Chuyện quả bầu (Tiết 1)", sub: "Đọc", period: 165, integ: "Nguồn gốc 54 dân tộc anh em từ quả bầu mẹ." },
    { title: "Bài 32: Chuyện quả bầu (Tiết 2)", sub: "Đọc", period: 166 },
    { title: "Bài 32: Chuyện quả bầu (Tiết 3: Viết)", sub: "Viết", period: 167 },
    { title: "Bài 32: Chuyện quả bầu (Tiết 4: LTVC)", sub: "LTVC", period: 168 },
    { title: "Luyện tập tổng hợp học kì I (Tiết 9)", sub: "Luyện tập", period: 169 },
    { title: "Đọc mở rộng (Tiết 10)", sub: "Đọc mở rộng", period: 170 }
  ],
  18: [
    { title: "Ôn tập cuối học kì I (Tiết 1)", sub: "Ôn tập", period: 171 },
    { title: "Ôn tập cuối học kì I (Tiết 2)", sub: "Ôn tập", period: 172 },
    { title: "Ôn tập cuối học kì I (Tiết 3)", sub: "Ôn tập", period: 173 },
    { title: "Ôn tập cuối học kì I (Tiết 4)", sub: "Ôn tập", period: 174 },
    { title: "Ôn tập cuối học kì I (Tiết 5)", sub: "Ôn tập", period: 175 },
    { title: "Ôn tập cuối học kì I (Tiết 6)", sub: "Ôn tập", period: 176 },
    { title: "Ôn tập cuối học kì I (Tiết 7)", sub: "Ôn tập", period: 177 },
    { title: "Ôn tập cuối học kì I (Tiết 8)", sub: "Ôn tập", period: 178 },
    { title: "Đánh giá định kì cuối học kì I: Đọc (Tiết 9)", sub: "Kiểm tra", period: 179 },
    { title: "Đánh giá định kì cuối học kì I: Viết (Tiết 10)", sub: "Kiểm tra", period: 180 }
  ]
};

export const GRADE_2_TOAN: Record<number, Array<{ title: string; period: number; integ?: string }>> = {
  1: [
    { title: "Bài 1: Ôn tập các số đến 100 (Tiết 1)", period: 1 },
    { title: "Bài 1: Ôn tập các số đến 100 (Tiết 2)", period: 2 },
    { title: "Bài 2: Tia số. Số liền trước, số liền sau (Tiết 1)", period: 3 },
    { title: "Bài 2: Tia số. Số liền trước, số liền sau (Tiết 2)", period: 4 },
    { title: "Bài 2: Tia số. Số liền trước, số liền sau (Tiết 3)", period: 5 }
  ],
  2: [
    { title: "Bài 3: Các thành phần của phép cộng, phép trừ (Tiết 1)", period: 6 },
    { title: "Bài 3: Các thành phần của phép cộng, phép trừ (Tiết 2)", period: 7 },
    { title: "Bài 3: Các thành phần của phép cộng, phép trừ (Tiết 3)", period: 8 },
    { title: "Bài 4: Hơn, kém nhau bao nhiêu (Tiết 1)", period: 9 },
    { title: "Bài 4: Hơn, kém nhau bao nhiêu (Tiết 2)", period: 10 }
  ],
  3: [
    { title: "Bài 5: Ôn tập phép cộng, phép trừ không nhớ trong phạm vi 100 (Tiết 1)", period: 11 },
    { title: "Bài 5: Ôn tập phép cộng, phép trừ không nhớ trong phạm vi 100 (Tiết 2)", period: 12 },
    { title: "Bài 6: Luyện tập chung (Tiết 1)", period: 13 },
    { title: "Bài 6: Luyện tập chung (Tiết 2)", period: 14 },
    { title: "Bài 7: Phép cộng qua 10 trong phạm vi 20 (Tiết 1)", period: 15 }
  ],
  4: [
    { title: "Bài 7: Phép cộng qua 10 trong phạm vi 20 (Tiết 2)", period: 16, integ: "Kĩ thuật tách số làm tròn 10 rồi cộng tiếp." },
    { title: "Bài 8: Bảng cộng (qua 10) (Tiết 1)", period: 17, integ: "Học thuộc bảng cộng 9, 8, 7 với một số." },
    { title: "Bài 8: Bảng cộng (qua 10) (Tiết 2)", period: 18 },
    { title: "Bài 8: Bảng cộng (qua 10) (Tiết 3)", period: 19 },
    { title: "Bài 9: Bài toán về thêm, bớt một số đơn vị (Tiết 1)", period: 20, integ: "Nhận biết ý nghĩa toán học của hành động thêm, bớt." }
  ],
  5: [
    { title: "Bài 9: Bài toán về thêm, bớt một số đơn vị (Tiết 2)", period: 21 },
    { title: "Bài 10: Luyện tập chung (Tiết 1)", period: 22 },
    { title: "Bài 10: Luyện tập chung (Tiết 2)", period: 23 },
    { title: "Bài 11: Phép trừ qua 10 trong phạm vi 20 (Tiết 1)", period: 24 },
    { title: "Bài 11: Phép trừ qua 10 trong phạm vi 20 (Tiết 2)", period: 25 }
  ],
  6: [
    { title: "Bài 12: Bảng trừ (qua 10) (Tiết 1)", period: 26 },
    { title: "Bài 12: Bảng trừ (qua 10) (Tiết 2)", period: 27 },
    { title: "Bài 12: Bảng trừ (qua 10) (Tiết 3)", period: 28 },
    { title: "Bài 13: Bài toán về nhiều hơn, ít hơn một số đơn vị (Tiết 1)", period: 29 },
    { title: "Bài 13: Bài toán về nhiều hơn, ít hơn một số đơn vị (Tiết 2)", period: 30 }
  ],
  7: [
    { title: "Bài 14: Luyện tập chung (Tiết 1)", period: 31 },
    { title: "Bài 14: Luyện tập chung (Tiết 2)", period: 32 },
    { title: "Bài 15: Ki-lô-gam (Tiết 1)", period: 33, integ: "Cân thực tế cặp sách, quả dưa chuột." },
    { title: "Bài 15: Ki-lô-gam (Tiết 2)", period: 34 },
    { title: "Bài 16: Lít (Tiết 1)", period: 35, integ: "Ca đong 1 lít nước thực hành." }
  ],
  8: [
    { title: "Bài 16: Lít (Tiết 2)", period: 36 },
    { title: "Bài 17: Thực hành và trải nghiệm với các đơn vị ki-lô-gam, lít (Tiết 1)", period: 37 },
    { title: "Bài 17: Thực hành và trải nghiệm với các đơn vị ki-lô-gam, lít (Tiết 2)", period: 38 },
    { title: "Bài 18: Luyện tập chung (Tiết 1)", period: 39 },
    { title: "Bài 18: Luyện tập chung (Tiết 2)", period: 40 }
  ],
  9: [
    { title: "Bài 19: Phép cộng (có nhớ) số có hai chữ số với số có một chữ số (Tiết 1)", period: 41 },
    { title: "Bài 19: Phép cộng (có nhớ) số có hai chữ số với số có một chữ số (Tiết 2)", period: 42 },
    { title: "Bài 20: Phép cộng (có nhớ) số có hai chữ số với số có hai chữ số (Tiết 1)", period: 43 },
    { title: "Bài 20: Phép cộng (có nhớ) số có hai chữ số với số có hai chữ số (Tiết 2)", period: 44 },
    { title: "Bài 20: Phép cộng (có nhớ) số có hai chữ số với số có hai chữ số (Tiết 3)", period: 45 }
  ],
  10: [
    { title: "Bài 21: Luyện tập chung (Tiết 1)", period: 46 },
    { title: "Bài 21: Luyện tập chung (Tiết 2)", period: 47 },
    { title: "Bài 22: Phép trừ (có nhớ) số có hai chữ số cho số có một chữ số (Tiết 1)", period: 48 },
    { title: "Bài 22: Phép trừ (có nhớ) số có hai chữ số cho số có một chữ số (Tiết 2)", period: 49 },
    { title: "Bài 23: Phép trừ (có nhớ) số có hai chữ số cho số có hai chữ số (Tiết 1)", period: 50 }
  ],
  11: [
    { title: "Bài 23: Phép trừ (có nhớ) số có hai chữ số cho số có hai chữ số (Tiết 2)", period: 51 },
    { title: "Bài 23: Phép trừ (có nhớ) số có hai chữ số cho số có hai chữ số (Tiết 3)", period: 52 },
    { title: "Bài 24: Luyện tập chung (Tiết 1)", period: 53 },
    { title: "Bài 24: Luyện tập chung (Tiết 2)", period: 54 },
    { title: "Bài 25: Điểm, đoạn thẳng (Tiết 1)", period: 55 }
  ],
  12: [
    { title: "Bài 25: Điểm, đoạn thẳng (Tiết 2)", period: 56 },
    { title: "Bài 26: Đường thẳng, đường cong, đường gấp khúc (Tiết 1)", period: 57 },
    { title: "Bài 26: Đường thẳng, đường cong, đường gấp khúc (Tiết 2)", period: 58 },
    { title: "Bài 27: Ba điểm thẳng hàng (Tiết 1)", period: 59 },
    { title: "Bài 28: Độ dài đoạn thẳng, độ dài đường gấp khúc (Tiết 1)", period: 60 }
  ],
  13: [
    { title: "Bài 28: Độ dài đoạn thẳng, độ dài đường gấp khúc (Tiết 2)", period: 61 },
    { title: "Bài 29: Thực hành vẽ đoạn thẳng (Tiết 1)", period: 62 },
    { title: "Bài 30: Ngày - giờ, giờ - phút (Tiết 1)", period: 63 },
    { title: "Bài 30: Ngày - giờ, giờ - phút (Tiết 2)", period: 64 },
    { title: "Bài 31: Ngày - tháng (Tiết 1)", period: 65 }
  ],
  14: [
    { title: "Bài 31: Ngày - tháng (Tiết 2)", period: 66 },
    { title: "Bài 32: Thực hành và trải nghiệm xem đồng hồ, xem lịch (Tiết 1)", period: 67 },
    { title: "Bài 32: Thực hành và trải nghiệm xem đồng hồ, xem lịch (Tiết 2)", period: 68 },
    { title: "Bài 33: Luyện tập chung (Tiết 1)", period: 69 },
    { title: "Bài 33: Luyện tập chung (Tiết 2)", period: 70 }
  ],
  15: [
    { title: "Bài 34: Ôn tập phép cộng, phép trừ trong phạm vi 20 (Tiết 1)", period: 71 },
    { title: "Bài 34: Ôn tập phép cộng, phép trừ trong phạm vi 20 (Tiết 2)", period: 72 },
    { title: "Bài 35: Ôn tập phép cộng, phép trừ trong phạm vi 100 (Tiết 1)", period: 73 },
    { title: "Bài 35: Ôn tập phép cộng, phép trừ trong phạm vi 100 (Tiết 2)", period: 74 },
    { title: "Bài 35: Ôn tập phép cộng, phép trừ trong phạm vi 100 (Tiết 3)", period: 75 }
  ],
  16: [
    { title: "Bài 36: Ôn tập hình học (Tiết 1)", period: 76 },
    { title: "Bài 36: Ôn tập hình học (Tiết 2)", period: 77 },
    { title: "Bài 37: Ôn tập đo lường (Tiết 1)", period: 78 },
    { title: "Bài 37: Ôn tập đo lường (Tiết 2)", period: 79 },
    { title: "Bài 38: Ôn tập chung (Tiết 1)", period: 80 }
  ],
  17: [
    { title: "Bài 38: Ôn tập chung (Tiết 2)", period: 81 },
    { title: "Bài 38: Ôn tập chung (Tiết 3)", period: 82 },
    { title: "Bài 38: Ôn tập chung (Tiết 4)", period: 83 },
    { title: "Bài 38: Ôn tập chung (Tiết 5)", period: 84 },
    { title: "Bài 38: Ôn tập chung (Tiết 6)", period: 85 }
  ],
  18: [
    { title: "Đánh giá định kì cuối học kì I (Tiết 1)", period: 86 },
    { title: "Đánh giá định kì cuối học kì I (Tiết 2)", period: 87 },
    { title: "Đánh giá định kì cuối học kì I (Tiết 3)", period: 88 },
    { title: "Đánh giá định kì cuối học kì I (Tiết 4)", period: 89 },
    { title: "Đánh giá định kì cuối học kì I (Tiết 5)", period: 90 }
  ]
};

export const GRADE_2_TNXH: Record<number, Array<{ title: string; period: number; integ?: string }>> = {
  1: [
    { title: "Bài 1: Các thế hệ trong gia đình (Tiết 1)", period: 1 },
    { title: "Bài 1: Các thế hệ trong gia đình (Tiết 2)", period: 2 }
  ],
  2: [
    { title: "Bài 2: Nghề nghiệp của người lớn trong gia đình (Tiết 1)", period: 3 },
    { title: "Bài 2: Nghề nghiệp của người lớn trong gia đình (Tiết 2)", period: 4 }
  ],
  3: [
    { title: "Bài 3: Phòng tránh ngộ độc khi ở nhà (Tiết 1)", period: 5, integ: "KNS: Không uống nhầm thuốc, hóa chất độc hại." },
    { title: "Bài 3: Phòng tránh ngộ độc khi ở nhà (Tiết 2)", period: 6 }
  ],
  4: [
    { title: "Bài 4: Vệ sinh nhà ở (Tiết 1)", period: 7, integ: "Lau dọn nhà cửa, sắp xếp đồ chơi gọn gàng." },
    { title: "Bài 4: Vệ sinh nhà ở (Tiết 2)", period: 8, integ: "BVMT: Nhà sạch thì mát, bát sạch ngon cơm." }
  ],
  5: [
    { title: "Bài 5: Ôn tập chủ đề Gia đình (Tiết 1)", period: 9 },
    { title: "Bài 5: Ôn tập chủ đề Gia đình (Tiết 2)", period: 10 }
  ],
  6: [
    { title: "Bài 6: Chào đón ngày khai trường (Tiết 1)", period: 11 },
    { title: "Bài 6: Chào đón ngày khai trường (Tiết 2)", period: 12 }
  ],
  7: [
    { title: "Bài 7: Ngày hội đọc sách của chúng em (Tiết 1)", period: 13 },
    { title: "Bài 7: Ngày hội đọc sách của chúng em (Tiết 2)", period: 14 }
  ],
  8: [
    { title: "Bài 8: An toàn và giữ vệ sinh khi tham gia các hoạt động ở trường (Tiết 1)", period: 15, integ: "Phòng tránh trượt ngã cầu thang, sân trường." },
    { title: "Bài 8: An toàn và giữ vệ sinh khi tham gia các hoạt động ở trường (Tiết 2)", period: 16 }
  ],
  9: [
    { title: "Bài 9: Ôn tập chủ đề Trường học (Tiết 1)", period: 17 },
    { title: "Bài 9: Ôn tập chủ đề Trường học (Tiết 2)", period: 18 }
  ],
  10: [
    { title: "Bài 10: Hoạt động mua bán hàng hóa (Tiết 1)", period: 19, integ: "Lựa chọn thực phẩm tươi ngon, an toàn vệ sinh." },
    { title: "Bài 10: Hoạt động mua bán hàng hóa (Tiết 2)", period: 20 }
  ],
  11: [
    { title: "Bài 11: Hoạt động giao thông (Tiết 1)", period: 21, integ: "ATGT: Đội mũ bảo hiểm khi ngồi xe máy." },
    { title: "Bài 11: Hoạt động giao thông (Tiết 2)", period: 22 }
  ],
  12: [
    { title: "Bài 12: Một số di tích lịch sử - văn hóa và cảnh quan thiên nhiên (Tiết 1)", period: 23 },
    { title: "Bài 12: Một số di tích lịch sử - văn hóa và cảnh quan thiên nhiên (Tiết 2)", period: 24 }
  ],
  13: [
    { title: "Bài 13: Ôn tập chủ đề Cộng đồng địa phương (Tiết 1)", period: 25 },
    { title: "Bài 13: Ôn tập chủ đề Cộng đồng địa phương (Tiết 2)", period: 26 }
  ],
  14: [
    { title: "Bài 14: Thực vật và động vật quanh em (Tiết 1)", period: 27 },
    { title: "Bài 14: Thực vật và động vật quanh em (Tiết 2)", period: 28 }
  ],
  15: [
    { title: "Bài 15: Động vật sống ở đâu? (Tiết 1)", period: 29 },
    { title: "Bài 15: Động vật sống ở đâu? (Tiết 2)", period: 30 }
  ],
  16: [
    { title: "Bài 16: Thực vật sống ở đâu? (Tiết 1)", period: 31 },
    { title: "Bài 16: Thực vật sống ở đâu? (Tiết 2)", period: 32 }
  ],
  17: [
    { title: "Bài 17: Chăm sóc và bảo vệ cây trồng, vật nuôi (Tiết 1)", period: 33, integ: "Tình thương yêu động vật và chăm bón cây xanh." },
    { title: "Bài 17: Chăm sóc và bảo vệ cây trồng, vật nuôi (Tiết 2)", period: 34 }
  ],
  18: [
    { title: "Bài 18: Ôn tập chủ đề Thực vật và Động vật", period: 35 },
    { title: "Kiểm tra và đánh giá học kì I", period: 36 }
  ]
};

export const GRADE_2_DAO_DUC: Record<number, { title: string; period: number; integ?: string }> = {
  1: { title: "Bài 1: Vẻ đẹp quê hương em (Tiết 1)", period: 1 },
  2: { title: "Bài 1: Vẻ đẹp quê hương em (Tiết 2)", period: 2 },
  3: { title: "Bài 2: Em yêu quê hương (Tiết 1)", period: 3 },
  4: { title: "Bài 2: Em yêu quê hương (Tiết 2)", period: 4, integ: "Bảo vệ di tích lịch sử và giữ gìn cảnh quan sạch đẹp." },
  5: { title: "Bài 3: Kính trọng thầy giáo, cô giáo (Tiết 1)", period: 5, integ: "Lễ phép, vâng lời thầy cô." },
  6: { title: "Bài 3: Kính trọng thầy giáo, cô giáo (Tiết 2)", period: 6 },
  7: { title: "Bài 4: Yêu quý bạn bè (Tiết 1)", period: 7, integ: "Đoàn kết, giúp đỡ bạn bè cùng tiến bộ." },
  8: { title: "Bài 4: Yêu quý bạn bè (Tiết 2)", period: 8 },
  9: { title: "Ôn tập giữa học kì I", period: 9 },
  10: { title: "Bài 5: Quý trọng thời gian (Tiết 1)", period: 10, integ: "Đi học đúng giờ, giờ nào việc nấy." },
  11: { title: "Bài 5: Quý trọng thời gian (Tiết 2)", period: 11 },
  12: { title: "Bài 6: Nhận lỗi và sửa lỗi (Tiết 1)", period: 12, integ: "Dũng cảm nhận lỗi khi làm sai." },
  13: { title: "Bài 6: Nhận lỗi và sửa lỗi (Tiết 2)", period: 13 },
  14: { title: "Bài 7: Bảo vệ của công (Tiết 1)", period: 14 },
  15: { title: "Bài 7: Bảo vệ của công (Tiết 2)", period: 15 },
  16: { title: "Bài 8: Giữ trật tự nơi công cộng (Tiết 1)", period: 16, integ: "Không đùa nghịch to tiếng trong bệnh viện, thư viện." },
  17: { title: "Bài 8: Giữ trật tự nơi công cộng (Tiết 2)", period: 17 },
  18: { title: "Ôn tập cuối học kì I", period: 18 }
};

export const GRADE_2_CURRICULUM_DATA: Record<string, (week: number, p: number) => LessonInfo> = {
  "tiếng việt": (week: number, p: number) => {
    const list = GRADE_2_TIENG_VIET[week];
    if (list && list[p - 1]) {
      const item = list[p - 1];
      return {
        lessonTitle: item.title,
        subSubject: item.sub,
        curriculumPeriod: item.period,
        integrationNotes: item.integ || "Tiếng Việt 2 Kết nối tri thức."
      };
    }
    return {
      lessonTitle: `Tiếng Việt 2 - Tuần ${week} (Tiết ${p})`,
      curriculumPeriod: (week - 1) * 10 + p,
      integrationNotes: "Tiếng Việt 2 GDPT 2018."
    };
  },

  "toán": (week: number, p: number) => {
    const list = GRADE_2_TOAN[week];
    if (list && list[p - 1]) {
      const item = list[p - 1];
      return {
        lessonTitle: item.title,
        curriculumPeriod: item.period,
        integrationNotes: item.integ || "Toán 2 GDPT 2018."
      };
    }
    return {
      lessonTitle: `Toán 2 - Tuần ${week} (Tiết ${p})`,
      curriculumPeriod: (week - 1) * 5 + p,
      integrationNotes: "Toán 2 GDPT 2018."
    };
  },

  "tự nhiên và xã hội": (week: number, p: number) => {
    const list = GRADE_2_TNXH[week];
    if (list && list[p - 1]) {
      const item = list[p - 1];
      return {
        lessonTitle: item.title,
        curriculumPeriod: item.period,
        integrationNotes: item.integ || "TNXH 2 Kết nối tri thức."
      };
    }
    return {
      lessonTitle: `TNXH 2 - Tuần ${week} (Tiết ${p})`,
      curriculumPeriod: (week - 1) * 2 + p
    };
  },

  "đạo đức": (week: number) => {
    const item = GRADE_2_DAO_DUC[week];
    if (item) {
      return {
        lessonTitle: item.title,
        curriculumPeriod: item.period,
        integrationNotes: item.integ || "Đạo đức 2 GDPT 2018."
      };
    }
    return {
      lessonTitle: `Đạo đức 2 - Tuần ${week}`,
      curriculumPeriod: week
    };
  },

  "hoạt động trải nghiệm": (week: number, p: number) => {
    return {
      lessonTitle: p === 1 ? `SHDC Tuần ${week}: Nề nếp học tập` : p === 2 ? `HĐGDCĐ Tuần ${week}: Rèn luyện kĩ năng` : `Sinh hoạt lớp Tuần ${week}: Sơ kết thi đua`,
      curriculumPeriod: (week - 1) * 3 + p,
      integrationNotes: "Hoạt động trải nghiệm 2."
    };
  },

  "giáo dục thể chất": (week: number, p: number) => {
    return {
      lessonTitle: `Giáo dục thể chất 2: Đội hình đội ngũ & Bài tập phát triển chung (Tiết ${p})`,
      curriculumPeriod: (week - 1) * 2 + p,
      integrationNotes: "Rèn luyện thể lực và tác phong nhanh nhẹn."
    };
  }
};
