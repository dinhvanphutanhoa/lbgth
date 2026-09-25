import { LessonInfo } from "../gradeCurriculums";

// ============================================================================
// KẾ HOẠCH DẠY HỌC KHỐI 3 - CHÍNH THỨC NĂM HỌC 2024-2025 (KẾT NỐI TRI THỨC)
// ============================================================================

export const GRADE_3_TIENG_VIET: Record<number, Array<{ title: string; sub: string; period: number; integ?: string }>> = {
  1: [
    { title: "Bài 1: Ngày gặp lại (Tiết 1)", sub: "Đọc", period: 1 },
    { title: "Bài 1: Ngày gặp lại (Tiết 2)", sub: "Đọc", period: 2 },
    { title: "Bài 1: Ngày gặp lại (Tiết 3: Viết chữ hoa A)", sub: "Viết", period: 3 },
    { title: "Bài 1: Ngày gặp lại (Tiết 4: LTVC)", sub: "LTVC", period: 4 },
    { title: "Bài 2: Về thăm quê (Tiết 1)", sub: "Đọc", period: 5 },
    { title: "Bài 2: Về thăm quê (Tiết 2: Viết đoạn văn)", sub: "Viết", period: 6 },
    { title: "Bài 2: Về thăm quê (Tiết 3: Nói và nghe)", sub: "Nói và nghe", period: 7 }
  ],
  2: [
    { title: "Bài 3: Cánh rừng trong nắng (Tiết 1)", sub: "Đọc", period: 8 },
    { title: "Bài 3: Cánh rừng trong nắng (Tiết 2)", sub: "Đọc", period: 9 },
    { title: "Bài 3: Cánh rừng trong nắng (Tiết 3: Viết chữ hoa B)", sub: "Viết", period: 10 },
    { title: "Bài 3: Cánh rừng trong nắng (Tiết 4: LTVC)", sub: "LTVC", period: 11 },
    { title: "Bài 4: Lần đầu ra biển (Tiết 1)", sub: "Đọc", period: 12 },
    { title: "Bài 4: Lần đầu ra biển (Tiết 2: Viết)", sub: "Viết", period: 13 },
    { title: "Bài 4: Lần đầu ra biển (Tiết 3: Đọc mở rộng)", sub: "Đọc mở rộng", period: 14 }
  ],
  3: [
    { title: "Bài 5: Nhật kí chung (Tiết 1)", sub: "Đọc", period: 15 },
    { title: "Bài 5: Nhật kí chung (Tiết 2)", sub: "Đọc", period: 16 },
    { title: "Bài 5: Nhật kí chung (Tiết 3: Viết chữ hoa C)", sub: "Viết", period: 17 },
    { title: "Bài 5: Nhật kí chung (Tiết 4: LTVC)", sub: "LTVC", period: 18 },
    { title: "Bài 6: Tập nấu ăn (Tiết 1)", sub: "Đọc", period: 19 },
    { title: "Bài 6: Tập nấu ăn (Tiết 2: Viết đoạn văn)", sub: "Viết", period: 20 },
    { title: "Bài 6: Tập nấu ăn (Tiết 3: Nói và nghe)", sub: "Nói và nghe", period: 21 }
  ],
  4: [
    { title: "Bài 7: Mùa hè lấp lánh (Tiết 1)", sub: "Đọc", period: 22, integ: "Cảm nhận vẻ đẹp thiên nhiên rực rỡ sắc màu." },
    { title: "Bài 7: Mùa hè lấp lánh (Tiết 2)", sub: "Đọc", period: 23 },
    { title: "Bài 7: Mùa hè lấp lánh (Tiết 3: Viết chính tả)", sub: "Viết", period: 24 },
    { title: "Bài 7: Mùa hè lấp lánh (Tiết 4: LTVC: Từ ngữ chỉ sự vật, đặc điểm)", sub: "LTVC", period: 25 },
    { title: "Bài 8: Lời giải toán đặc biệt (Tiết 1)", sub: "Đọc", period: 26, integ: "Ý chí vượt khó và tài năng thơ ca của nhà toán học Huy-gô." },
    { title: "Bài 8: Lời giải toán đặc biệt (Tiết 2: Viết: Viết chữ hoa D, Đ)", sub: "Viết", period: 27 },
    { title: "Bài 8: Lời giải toán đặc biệt (Tiết 3: Nói và nghe: Kể chuyện)", sub: "Nói và nghe", period: 28 }
  ],
  5: [
    { title: "Bài 9: Đi học vui sao (Tiết 1)", sub: "Đọc", period: 29, integ: "Niềm hân hoan rộn rã khi từng ngày cắp sách tới trường." },
    { title: "Bài 9: Đi học vui sao (Tiết 2)", sub: "Đọc", period: 30 },
    { title: "Bài 9: Đi học vui sao (Tiết 3: Viết)", sub: "Viết", period: 31 },
    { title: "Bài 9: Đi học vui sao (Tiết 4: LTVC)", sub: "LTVC", period: 32 },
    { title: "Bài 10: Con đường đến trường (Tiết 1)", sub: "Đọc", period: 33, integ: "Tình yêu con đường quen thuộc in dấu chân tuổi thơ." },
    { title: "Bài 10: Con đường đến trường (Tiết 2: Viết đoạn văn)", sub: "Viết", period: 34 },
    { title: "Bài 10: Con đường đến trường (Tiết 3: Đọc mở rộng)", sub: "Đọc mở rộng", period: 35 }
  ],
  6: [
    { title: "Bài 11: Lời kêu gọi toàn dân tập thể dục (Tiết 1)", sub: "Đọc", period: 36, integ: "Học tập Bác Hồ rèn luyện thân thể để xây dựng đất nước." },
    { title: "Bài 11: Lời kêu gọi toàn dân tập thể dục (Tiết 2)", sub: "Đọc", period: 37 },
    { title: "Bài 11: Lời kêu gọi toàn dân tập thể dục (Tiết 3: Viết chữ hoa E, Ê)", sub: "Viết", period: 38 },
    { title: "Bài 11: Lời kêu gọi toàn dân tập thể dục (Tiết 4: LTVC)", sub: "LTVC", period: 39 },
    { title: "Bài 12: Bài tập làm văn (Tiết 1)", sub: "Đọc", period: 40, integ: "Tính trung thực và chủ động làm việc nhà giúp đỡ mẹ." },
    { title: "Bài 12: Bài tập làm văn (Tiết 2: Viết đoạn văn)", sub: "Viết", period: 41 },
    { title: "Bài 12: Bài tập làm văn (Tiết 3: Nói và nghe)", sub: "Nói và nghe", period: 42 }
  ],
  7: [
    { title: "Bài 13: Bàn tay cô giáo (Tiết 1)", sub: "Đọc", period: 43, integ: "Tấm lòng yêu thương và đôi bàn tay khéo léo của cô giáo." },
    { title: "Bài 13: Bàn tay cô giáo (Tiết 2)", sub: "Đọc", period: 44 },
    { title: "Bài 13: Bàn tay cô giáo (Tiết 3: Viết chữ hoa G)", sub: "Viết", period: 45 },
    { title: "Bài 13: Bàn tay cô giáo (Tiết 4: LTVC)", sub: "LTVC", period: 46 },
    { title: "Bài 14: Cuộc họp của chữ viết (Tiết 1)", sub: "Đọc", period: 47, integ: "Tầm quan trọng của dấu câu trong diễn đạt và viết văn." },
    { title: "Bài 14: Cuộc họp của chữ viết (Tiết 2: Viết)", sub: "Viết", period: 48 },
    { title: "Bài 14: Cuộc họp của chữ viết (Tiết 3: Đọc mở rộng)", sub: "Đọc mở rộng", period: 49 }
  ],
  8: [
    { title: "Bài 15: Thư viện (Tiết 1)", sub: "Đọc", period: 50, integ: "Văn hóa đọc sách và giữ gìn trật tự trong thư viện trường." },
    { title: "Bài 15: Thư viện (Tiết 2)", sub: "Đọc", period: 51 },
    { title: "Bài 15: Thư viện (Tiết 3: Viết chữ hoa H)", sub: "Viết", period: 52 },
    { title: "Bài 15: Thư viện (Tiết 4: LTVC)", sub: "LTVC", period: 53 },
    { title: "Bài 16: Ngày em vào Đội (Tiết 1)", sub: "Đọc", period: 54, integ: "Niềm vinh dự, tự hào khi mang trên vai chiếc khăn quàng đỏ." },
    { title: "Bài 16: Ngày em vào Đội (Tiết 2: Viết đoạn văn)", sub: "Viết", period: 55 },
    { title: "Bài 16: Ngày em vào Đội (Tiết 3: Nói và nghe)", sub: "Nói và nghe", period: 56 }
  ],
  9: [
    { title: "Ôn tập giữa học kì I (Tiết 1)", sub: "Ôn tập", period: 57 },
    { title: "Ôn tập giữa học kì I (Tiết 2)", sub: "Ôn tập", period: 58 },
    { title: "Ôn tập giữa học kì I (Tiết 3)", sub: "Ôn tập", period: 59 },
    { title: "Ôn tập giữa học kì I (Tiết 4)", sub: "Ôn tập", period: 60 },
    { title: "Ôn tập giữa học kì I (Tiết 5)", sub: "Ôn tập", period: 61 },
    { title: "Đánh giá giữa học kì I: Đọc (Tiết 6)", sub: "Kiểm tra", period: 62 },
    { title: "Đánh giá giữa học kì I: Viết (Tiết 7)", sub: "Kiểm tra", period: 63 }
  ],
  10: [
    { title: "Bài 17: Ngưỡng cửa (Tiết 1)", sub: "Đọc", period: 64, integ: "Ngưỡng cửa đầu đời nâng bước em đi tới tương lai." },
    { title: "Bài 17: Ngưỡng cửa (Tiết 2)", sub: "Đọc", period: 65 },
    { title: "Bài 17: Ngưỡng cửa (Tiết 3: Viết chữ hoa I, K)", sub: "Viết", period: 66 },
    { title: "Bài 17: Ngưỡng cửa (Tiết 4: LTVC)", sub: "LTVC", period: 67 },
    { title: "Bài 18: Cha sẽ luôn ở bên con (Tiết 1)", sub: "Đọc", period: 68, integ: "Tình phụ tử thiêng liêng, kiên định vượt qua thảm họa." },
    { title: "Bài 18: Cha sẽ luôn ở bên con (Tiết 2: Viết)", sub: "Viết", period: 69 },
    { title: "Bài 18: Cha sẽ luôn ở bên con (Tiết 3: Đọc mở rộng)", sub: "Đọc mở rộng", period: 70 }
  ],
  11: [
    { title: "Bài 19: Kì diệu ma-rốc (Tiết 1)", sub: "Đọc", period: 71 },
    { title: "Bài 19: Kì diệu ma-rốc (Tiết 2)", sub: "Đọc", period: 72 },
    { title: "Bài 19: Kì diệu ma-rốc (Tiết 3: Viết chữ hoa L)", sub: "Viết", period: 73 },
    { title: "Bài 19: Kì diệu ma-rốc (Tiết 4: LTVC)", sub: "LTVC", period: 74 },
    { title: "Bài 20: Kho báu của em (Tiết 1)", sub: "Đọc", period: 75, integ: "Tình cảm thương mến dành cho các kỉ vật gia đình." },
    { title: "Bài 20: Kho báu của em (Tiết 2: Viết đoạn văn)", sub: "Viết", period: 76 },
    { title: "Bài 20: Kho báu của em (Tiết 3: Nói và nghe)", sub: "Nói và nghe", period: 77 }
  ],
  12: [
    { title: "Bài 21: Tia nắng hạt mưa (Tiết 1)", sub: "Đọc", period: 78, integ: "Hòa nhịp cùng thiên nhiên và tiếng hát tuổi thơ." },
    { title: "Bài 21: Tia nắng hạt mưa (Tiết 2)", sub: "Đọc", period: 79 },
    { title: "Bài 21: Tia nắng hạt mưa (Tiết 3: Viết chữ hoa M)", sub: "Viết", period: 80 },
    { title: "Bài 21: Tia nắng hạt mưa (Tiết 4: LTVC)", sub: "LTVC", period: 81 },
    { title: "Bài 22: Để cháu nắm tay ông (Tiết 1)", sub: "Đọc", period: 82, integ: "Sự hiếu nghĩa, ân cần dắt tay ông già yếu." },
    { title: "Bài 22: Để cháu nắm tay ông (Tiết 2: Viết)", sub: "Viết", period: 83 },
    { title: "Bài 22: Để cháu nắm tay ông (Tiết 3: Đọc mở rộng)", sub: "Đọc mở rộng", period: 84 }
  ],
  13: [
    { title: "Bài 23: Về quê ngoại (Tiết 1)", sub: "Đọc", period: 85, integ: "Cảnh sắc thanh bình và sự đùm bọc nơi quê ngoại." },
    { title: "Bài 23: Về quê ngoại (Tiết 2)", sub: "Đọc", period: 86 },
    { title: "Bài 23: Về quê ngoại (Tiết 3: Viết chữ hoa N)", sub: "Viết", period: 87 },
    { title: "Bài 23: Về quê ngoại (Tiết 4: LTVC)", sub: "LTVC", period: 88 },
    { title: "Bài 24: Búp bê biết khóc (Tiết 1)", sub: "Đọc", period: 89, integ: "Biết giữ gìn, trân trọng đồ chơi, không vứt bỏ bừa bãi." },
    { title: "Bài 24: Búp bê biết khóc (Tiết 2: Viết đoạn văn)", sub: "Viết", period: 90 },
    { title: "Bài 24: Búp bê biết khóc (Tiết 3: Nói và nghe)", sub: "Nói và nghe", period: 91 }
  ],
  14: [
    { title: "Bài 25: Ngôi nhà trong cỏ (Tiết 1)", sub: "Đọc", period: 92 },
    { title: "Bài 25: Ngôi nhà trong cỏ (Tiết 2)", sub: "Đọc", period: 93 },
    { title: "Bài 25: Ngôi nhà trong cỏ (Tiết 3: Viết chữ hoa O, Ô, Ơ)", sub: "Viết", period: 94 },
    { title: "Bài 25: Ngôi nhà trong cỏ (Tiết 4: LTVC)", sub: "LTVC", period: 95 },
    { title: "Bài 26: Em mang về yêu thương (Tiết 1)", sub: "Đọc", period: 96, integ: "Hạnh phúc sum vầy, thương yêu chan hòa trong mái ấm." },
    { title: "Bài 26: Em mang về yêu thương (Tiết 2: Viết)", sub: "Viết", period: 97 },
    { title: "Bài 26: Em mang về yêu thương (Tiết 3: Đọc mở rộng)", sub: "Đọc mở rộng", period: 98 }
  ],
  15: [
    { title: "Bài 27: Mẹ của em (Tiết 1)", sub: "Đọc", period: 99, integ: "Công ơn sinh thành dưỡng dục như biển trời của mẹ." },
    { title: "Bài 27: Mẹ của em (Tiết 2)", sub: "Đọc", period: 100 },
    { title: "Bài 27: Mẹ của em (Tiết 3: Viết chữ hoa P)", sub: "Viết", period: 101 },
    { title: "Bài 27: Mẹ của em (Tiết 4: LTVC)", sub: "LTVC", period: 102 },
    { title: "Bài 28: Con đường của bé (Tiết 1)", sub: "Đọc", period: 103, integ: "Những ước mơ tương lai tươi đẹp của tuổi thơ." },
    { title: "Bài 28: Con đường của bé (Tiết 2: Viết đoạn văn)", sub: "Viết", period: 104 },
    { title: "Bài 28: Con đường của bé (Tiết 3: Nói và nghe)", sub: "Nói và nghe", period: 105 }
  ],
  16: [
    { title: "Bài 29: Nhà bác học và bà cụ (Tiết 1)", sub: "Đọc", period: 106, integ: "Nhà bác học Ê-đi-xơn lắng nghe người dân để chế tạo xe điện." },
    { title: "Bài 29: Nhà bác học và bà cụ (Tiết 2)", sub: "Đọc", period: 107 },
    { title: "Bài 29: Nhà bác học và bà cụ (Tiết 3: Viết chữ hoa Q)", sub: "Viết", period: 108 },
    { title: "Bài 29: Nhà bác học và bà cụ (Tiết 4: LTVC)", sub: "LTVC", period: 109 },
    { title: "Bài 30: Vệt phấn trên mặt bàn (Tiết 1)", sub: "Đọc", period: 110, integ: "Sự thấu hiểu và sẻ chia khó khăn với bạn cùng bàn tật nguyền." },
    { title: "Bài 30: Vệt phấn trên mặt bàn (Tiết 2: Viết)", sub: "Viết", period: 111 },
    { title: "Bài 30: Vệt phấn trên mặt bàn (Tiết 3: Đọc mở rộng)", sub: "Đọc mở rộng", period: 112 }
  ],
  17: [
    { title: "Bài 31: Người làm đồ chơi (Tiết 1)", sub: "Đọc", period: 113, integ: "Tấm lòng thơm thảo của bác Nhân và sự trân trọng nghề thủ công truyền thống." },
    { title: "Bài 31: Người làm đồ chơi (Tiết 2)", sub: "Đọc", period: 114 },
    { title: "Bài 31: Người làm đồ chơi (Tiết 3: Viết chữ hoa R)", sub: "Viết", period: 115 },
    { title: "Bài 31: Người làm đồ chơi (Tiết 4: LTVC)", sub: "LTVC", period: 116 },
    { title: "Bài 32: Cây bút máy (Tiết 1)", sub: "Đọc", period: 117, integ: "Giữ gìn bút viết cẩn thận, rèn nét chữ nết người." },
    { title: "Bài 32: Cây bút máy (Tiết 2: Viết đoạn văn)", sub: "Viết", period: 118 },
    { title: "Bài 32: Cây bút máy (Tiết 3: Nói và nghe)", sub: "Nói và nghe", period: 119 }
  ],
  18: [
    { title: "Ôn tập cuối học kì I (Tiết 1)", sub: "Ôn tập", period: 120 },
    { title: "Ôn tập cuối học kì I (Tiết 2)", sub: "Ôn tập", period: 121 },
    { title: "Ôn tập cuối học kì I (Tiết 3)", sub: "Ôn tập", period: 122 },
    { title: "Ôn tập cuối học kì I (Tiết 4)", sub: "Ôn tập", period: 123 },
    { title: "Ôn tập cuối học kì I (Tiết 5)", sub: "Ôn tập", period: 124 },
    { title: "Đánh giá cuối học kì I: Đọc (Tiết 6)", sub: "Kiểm tra", period: 125 },
    { title: "Đánh giá cuối học kì I: Viết (Tiết 7)", sub: "Kiểm tra", period: 126 }
  ]
};

export const GRADE_3_TOAN: Record<number, Array<{ title: string; period: number; integ?: string }>> = {
  1: [
    { title: "Bài 1: Ôn tập các số đến 1 000 (Tiết 1)", period: 1 },
    { title: "Bài 1: Ôn tập các số đến 1 000 (Tiết 2)", period: 2 },
    { title: "Bài 2: Ôn tập phép cộng, phép trừ trong phạm vi 1 000 (Tiết 1)", period: 3 },
    { title: "Bài 2: Ôn tập phép cộng, phép trừ trong phạm vi 1 000 (Tiết 2)", period: 4 },
    { title: "Bài 2: Ôn tập phép cộng, phép trừ trong phạm vi 1 000 (Tiết 3)", period: 5 }
  ],
  2: [
    { title: "Bài 3: Tìm thành phần trong phép cộng, phép trừ (Tiết 1)", period: 6 },
    { title: "Bài 3: Tìm thành phần trong phép cộng, phép trừ (Tiết 2)", period: 7 },
    { title: "Bài 4: Ôn tập bảng nhân 2, bảng chia 2; bảng nhân 5, bảng chia 5 (Tiết 1)", period: 8 },
    { title: "Bài 4: Ôn tập bảng nhân 2, bảng chia 2; bảng nhân 5, bảng chia 5 (Tiết 2)", period: 9 },
    { title: "Bài 4: Ôn tập bảng nhân 2, bảng chia 2; bảng nhân 5, bảng chia 5 (Tiết 3)", period: 10 }
  ],
  3: [
    { title: "Bài 5: Bảng nhân 3, bảng chia 3 (Tiết 1)", period: 11 },
    { title: "Bài 5: Bảng nhân 3, bảng chia 3 (Tiết 2)", period: 12 },
    { title: "Bài 5: Bảng nhân 3, bảng chia 3 (Tiết 3)", period: 13 },
    { title: "Bài 6: Bảng nhân 4, bảng chia 4 (Tiết 1)", period: 14 },
    { title: "Bài 6: Bảng nhân 4, bảng chia 4 (Tiết 2)", period: 15 }
  ],
  4: [
    { title: "Bài 7: Ôn tập hình học và đo lường (Tiết 1)", period: 16, integ: "Nhận biết điểm, đoạn thẳng, hình tứ giác thực tế." },
    { title: "Bài 7: Ôn tập hình học và đo lường (Tiết 2)", period: 17 },
    { title: "Bài 8: Luyện tập chung (Tiết 1)", period: 18 },
    { title: "Bài 8: Luyện tập chung (Tiết 2)", period: 19 },
    { title: "Bài 9: Bảng nhân 6, bảng chia 6 (Tiết 1)", period: 20, integ: "Hình thành bảng nhân 6 dựa trên các tích lũy tiến." }
  ],
  5: [
    { title: "Bài 9: Bảng nhân 6, bảng chia 6 (Tiết 2)", period: 21 },
    { title: "Bài 9: Bảng nhân 6, bảng chia 6 (Tiết 3)", period: 22 },
    { title: "Bài 10: Bảng nhân 7, bảng chia 7 (Tiết 1)", period: 23 },
    { title: "Bài 10: Bảng nhân 7, bảng chia 7 (Tiết 2)", period: 24 },
    { title: "Bài 10: Bảng nhân 7, bảng chia 7 (Tiết 3)", period: 25 }
  ],
  6: [
    { title: "Bài 11: Bảng nhân 8, bảng chia 8 (Tiết 1)", period: 26 },
    { title: "Bài 11: Bảng nhân 8, bảng chia 8 (Tiết 2)", period: 27 },
    { title: "Bài 11: Bảng nhân 8, bảng chia 8 (Tiết 3)", period: 28 },
    { title: "Bài 12: Bảng nhân 9, bảng chia 9 (Tiết 1)", period: 29 },
    { title: "Bài 12: Bảng nhân 9, bảng chia 9 (Tiết 2)", period: 30 }
  ],
  7: [
    { title: "Bài 12: Bảng nhân 9, bảng chia 9 (Tiết 3)", period: 31 },
    { title: "Bài 13: Tìm thành phần trong phép nhân, phép chia (Tiết 1)", period: 32 },
    { title: "Bài 13: Tìm thành phần trong phép nhân, phép chia (Tiết 2)", period: 33 },
    { title: "Bài 14: Một phần mấy (Tiết 1)", period: 34, integ: "Chia quả cam thành các phần bằng nhau." },
    { title: "Bài 14: Một phần mấy (Tiết 2)", period: 35 }
  ],
  8: [
    { title: "Bài 15: Luyện tập chung (Tiết 1)", period: 36 },
    { title: "Bài 15: Luyện tập chung (Tiết 2)", period: 37 },
    { title: "Bài 16: Điểm ở giữa, trung điểm của đoạn thẳng (Tiết 1)", period: 38 },
    { title: "Bài 16: Điểm ở giữa, trung điểm của đoạn thẳng (Tiết 2)", period: 39 },
    { title: "Bài 17: Hình tròn, tâm, bán kính, đường kính (Tiết 1)", period: 40, integ: "Thực hành sử dụng compa quay hình tròn." }
  ],
  9: [
    { title: "Bài 17: Hình tròn, tâm, bán kính, đường kính (Tiết 2)", period: 41 },
    { title: "Bài 18: Góc vuông, góc không vuông (Tiết 1)", period: 42, integ: "Sử dụng ê-ke để kiểm tra góc vuông." },
    { title: "Bài 18: Góc vuông, góc không vuông (Tiết 2)", period: 43 },
    { title: "Bài 19: Hình tam giác, hình tứ giác (Tiết 1)", period: 44 },
    { title: "Bài 20: Luyện tập chung (Tiết 1)", period: 45 }
  ],
  10: [
    { title: "Bài 20: Luyện tập chung (Tiết 2)", period: 46 },
    { title: "Bài 21: Khối lập phương, khối hộp chữ nhật (Tiết 1)", period: 47, integ: "Nhận biết khối rubik và hộp sữa." },
    { title: "Bài 21: Khối lập phương, khối hộp chữ nhật (Tiết 2)", period: 48 },
    { title: "Bài 22: Luyện tập chung (Tiết 1)", period: 49 },
    { title: "Bài 23: Nhân số có hai chữ số với số có một chữ số (có nhớ) (Tiết 1)", period: 50 }
  ],
  11: [
    { title: "Bài 23: Nhân số có hai chữ số với số có một chữ số (Tiết 2)", period: 51 },
    { title: "Bài 24: Gấp một số lên một số lần (Tiết 1)", period: 52 },
    { title: "Bài 24: Gấp một số lên một số lần (Tiết 2)", period: 53 },
    { title: "Bài 25: Phép chia hết và phép chia có dư (Tiết 1)", period: 54 },
    { title: "Bài 25: Phép chia hết và phép chia có dư (Tiết 2)", period: 55 }
  ],
  12: [
    { title: "Bài 26: Chia số có hai chữ số cho số có một chữ số (Tiết 1)", period: 56 },
    { title: "Bài 26: Chia số có hai chữ số cho số có một chữ số (Tiết 2)", period: 57 },
    { title: "Bài 26: Chia số có hai chữ số cho số có một chữ số (Tiết 3)", period: 58 },
    { title: "Bài 27: Giảm một số đi một số lần (Tiết 1)", period: 59 },
    { title: "Bài 27: Giảm một số đi một số lần (Tiết 2)", period: 60 }
  ],
  13: [
    { title: "Bài 28: Bài toán giải bằng hai bước tính (Tiết 1)", period: 61, integ: "Tư duy phân tích bài toán 2 bước." },
    { title: "Bài 28: Bài toán giải bằng hai bước tính (Tiết 2)", period: 62 },
    { title: "Bài 29: Luyện tập chung (Tiết 1)", period: 63 },
    { title: "Bài 29: Luyện tập chung (Tiết 2)", period: 64 },
    { title: "Bài 30: Mi-li-mét (Tiết 1)", period: 65, integ: "Dùng thước có vạch mi-li-mét đo bề dày cuốn sách." }
  ],
  14: [
    { title: "Bài 30: Mi-li-mét (Tiết 2)", period: 66 },
    { title: "Bài 31: Gam (Tiết 1)", period: 67, integ: "Cân gam hoa quả, gói đường." },
    { title: "Bài 31: Gam (Tiết 2)", period: 68 },
    { title: "Bài 32: Mi-li-lít (Tiết 1)", period: 69, integ: "Đo thể tích thuốc bằng ống tiêm hoặc thìa định lượng." },
    { title: "Bài 32: Mi-li-lít (Tiết 2)", period: 70 }
  ],
  15: [
    { title: "Bài 33: Nhiệt độ. Đo nhiệt độ (Tiết 1)", period: 71, integ: "Tập đo thân nhiệt bằng nhiệt kế điện tử/thủy ngân." },
    { title: "Bài 33: Nhiệt độ. Đo nhiệt độ (Tiết 2)", period: 72 },
    { title: "Bài 34: Thực hành và trải nghiệm với các đơn vị đo (Tiết 1)", period: 73 },
    { title: "Bài 34: Thực hành và trải nghiệm với các đơn vị đo (Tiết 2)", period: 74 },
    { title: "Bài 35: Luyện tập chung (Tiết 1)", period: 75 }
  ],
  16: [
    { title: "Bài 35: Luyện tập chung (Tiết 2)", period: 76 },
    { title: "Bài 36: Nhân số có ba chữ số với số có một chữ số (Tiết 1)", period: 77 },
    { title: "Bài 36: Nhân số có ba chữ số với số có một chữ số (Tiết 2)", period: 78 },
    { title: "Bài 37: Chia số có ba chữ số cho số có một chữ số (Tiết 1)", period: 79 },
    { title: "Bài 37: Chia số có ba chữ số cho số có một chữ số (Tiết 2)", period: 80 }
  ],
  17: [
    { title: "Bài 37: Chia số có ba chữ số cho số có một chữ số (Tiết 3)", period: 81 },
    { title: "Bài 38: Biểu thức số. Tính giá trị của biểu thức số (Tiết 1)", period: 82 },
    { title: "Bài 38: Biểu thức số. Tính giá trị của biểu thức số (Tiết 2)", period: 83 },
    { title: "Bài 39: So sánh số lớn gấp mấy lần số bé (Tiết 1)", period: 84 },
    { title: "Bài 40: Luyện tập chung (Tiết 1)", period: 85 }
  ],
  18: [
    { title: "Ôn tập cuối học kì I (Tiết 1)", period: 86 },
    { title: "Ôn tập cuối học kì I (Tiết 2)", period: 87 },
    { title: "Ôn tập cuối học kì I (Tiết 3)", period: 88 },
    { title: "Đánh giá định kì cuối học kì I (Tiết 4)", period: 89 },
    { title: "Đánh giá định kì cuối học kì I (Tiết 5)", period: 90 }
  ]
};

export const GRADE_3_TNXH: Record<number, Array<{ title: string; period: number; integ?: string }>> = {
  1: [
    { title: "Bài 1: Họ hàng nội, ngoại (Tiết 1)", period: 1 },
    { title: "Bài 1: Họ hàng nội, ngoại (Tiết 2)", period: 2 }
  ],
  2: [
    { title: "Bài 2: Phòng tránh hỏa hoạn khi ở nhà (Tiết 1)", period: 3, integ: "KNS PCCC: Không nghịch lửa, khóa bình ga." },
    { title: "Bài 2: Phòng tránh hỏa hoạn khi ở nhà (Tiết 2)", period: 4 }
  ],
  3: [
    { title: "Bài 3: Vệ sinh xung quanh nhà ở (Tiết 1)", period: 5, integ: "BVMT: Quét dọn ngõ xóm, thông cống rãnh." },
    { title: "Bài 3: Vệ sinh xung quanh nhà ở (Tiết 2)", period: 6 }
  ],
  4: [
    { title: "Bài 4: Giữ vệ sinh môi trường xung quanh nhà ở (Tiết 1)", period: 7, integ: "Phân loại rác thải sinh hoạt tại hộ gia đình." },
    { title: "Bài 4: Giữ vệ sinh môi trường xung quanh nhà ở (Tiết 2)", period: 8 }
  ],
  5: [
    { title: "Bài 5: Ôn tập chủ đề Gia đình (Tiết 1)", period: 9 },
    { title: "Bài 5: Ôn tập chủ đề Gia đình (Tiết 2)", period: 10 }
  ],
  6: [
    { title: "Bài 6: Truyền thống nhà trường (Tiết 1)", period: 11, integ: "Tự hào về lịch sử thành lập và thành tích nhà trường." },
    { title: "Bài 6: Truyền thống nhà trường (Tiết 2)", period: 12 }
  ],
  7: [
    { title: "Bài 7: Khẩu phần ăn và an toàn thực phẩm (Tiết 1)", period: 13, integ: "Ăn chín uống sôi, không ăn hàng rong cổng trường." },
    { title: "Bài 7: Khẩu phần ăn và an toàn thực phẩm (Tiết 2)", period: 14 }
  ],
  8: [
    { title: "Bài 8: Giữ an toàn và vệ sinh ở trường (Tiết 1)", period: 15 },
    { title: "Bài 8: Giữ an toàn và vệ sinh ở trường (Tiết 2)", period: 16 }
  ],
  9: [
    { title: "Bài 9: Ôn tập chủ đề Trường học (Tiết 1)", period: 17 },
    { title: "Bài 9: Ôn tập chủ đề Trường học (Tiết 2)", period: 18 }
  ],
  10: [
    { title: "Bài 10: Di tích lịch sử - văn hóa và cảnh quan thiên nhiên (Tiết 1)", period: 19 },
    { title: "Bài 10: Di tích lịch sử - văn hóa và cảnh quan thiên nhiên (Tiết 2)", period: 20 }
  ],
  11: [
    { title: "Bài 11: Hoạt động sản xuất nông nghiệp (Tiết 1)", period: 21, integ: "Trân trọng công sức người nông dân một nắng hai sương." },
    { title: "Bài 11: Hoạt động sản xuất nông nghiệp (Tiết 2)", period: 22 }
  ],
  12: [
    { title: "Bài 12: Hoạt động sản xuất thủ công và công nghiệp (Tiết 1)", period: 23 },
    { title: "Bài 12: Hoạt động sản xuất thủ công và công nghiệp (Tiết 2)", period: 24 }
  ],
  13: [
    { title: "Bài 13: Ôn tập chủ đề Cộng đồng địa phương (Tiết 1)", period: 25 },
    { title: "Bài 13: Ôn tập chủ đề Cộng đồng địa phương (Tiết 2)", period: 26 }
  ],
  14: [
    { title: "Bài 14: Thực vật và động vật sống ở đâu? (Tiết 1)", period: 27 },
    { title: "Bài 14: Thực vật và động vật sống ở đâu? (Tiết 2)", period: 28 }
  ],
  15: [
    { title: "Bài 15: Một số bộ phận của thực vật và chức năng (Tiết 1)", period: 29 },
    { title: "Bài 15: Một số bộ phận của thực vật và chức năng (Tiết 2)", period: 30 }
  ],
  16: [
    { title: "Bài 16: Một số bộ phận của động vật và chức năng (Tiết 1)", period: 31 },
    { title: "Bài 16: Một số bộ phận của động vật và chức năng (Tiết 2)", period: 32 }
  ],
  17: [
    { title: "Bài 17: Sử dụng hợp lí thực vật và động vật (Tiết 1)", period: 33, integ: "Không tiêu thụ, mua bán động vật hoang dã nguy cấp." },
    { title: "Bài 17: Sử dụng hợp lí thực vật và động vật (Tiết 2)", period: 34 }
  ],
  18: [
    { title: "Bài 18: Ôn tập học kì I", period: 35 },
    { title: "Kiểm tra, đánh giá cuối học kì I", period: 36 }
  ]
};

export const GRADE_3_TIN_HOC: Record<number, { title: string; period: number; integ?: string }> = {
  1: { title: "Bài 1: Thông tin và quyết định (Tiết 1)", period: 1 },
  2: { title: "Bài 2: Các dạng thông tin thường gặp (Tiết 1)", period: 2 },
  3: { title: "Bài 3: Máy tính - người bạn mới (Tiết 1)", period: 3 },
  4: { title: "Bài 4: Khám phá thông tin trong máy tính (Tiết 1)", period: 4, integ: "Nhận biết biểu tượng tệp, thư mục trên màn hình nền." },
  5: { title: "Bài 5: Sử dụng bàn phím (Tiết 1)", period: 5 },
  6: { title: "Bài 5: Sử dụng bàn phím (Tiết 2)", period: 6 },
  7: { title: "Bài 6: Sử dụng chuột máy tính (Tiết 1)", period: 7 },
  8: { title: "Bài 6: Sử dụng chuột máy tính (Tiết 2)", period: 8 },
  9: { title: "Bài 7: Em tập gõ hàng phím cơ sở (Tiết 1)", period: 9, integ: "Đặt tay đúng quy tắc 10 ngón trên hàng phím cơ sở F, J." },
  10: { title: "Bài 7: Em tập gõ hàng phím cơ sở (Tiết 2)", period: 10 },
  11: { title: "Bài 8: Em tập gõ hàng phím trên (Tiết 1)", period: 11 },
  12: { title: "Bài 9: Em tập gõ hàng phím dưới (Tiết 1)", period: 12 },
  13: { title: "Bài 10: Luyện gõ phím với phần mềm Typing (Tiết 1)", period: 13 },
  14: { title: "Bài 11: Thông tin của em trong môi trường số (Tiết 1)", period: 14, integ: "Bảo vệ mật khẩu và thông tin cá nhân trên mạng." },
  15: { title: "Bài 12: Tạo bài trình chiếu đơn giản (Tiết 1)", period: 15 },
  16: { title: "Bài 12: Tạo bài trình chiếu đơn giản (Tiết 2)", period: 16 },
  17: { title: "Ôn tập học kì I", period: 17 },
  18: { title: "Đánh giá định kì học kì I", period: 18 }
};

export const GRADE_3_CONG_NGHE: Record<number, { title: string; period: number; integ?: string }> = {
  1: { title: "Bài 1: Tự nhiên và công nghệ (Tiết 1)", period: 1 },
  2: { title: "Bài 1: Tự nhiên và công nghệ (Tiết 2)", period: 2 },
  3: { title: "Bài 2: Sử dụng đèn học (Tiết 1)", period: 3 },
  4: { title: "Bài 2: Sử dụng đèn học (Tiết 2)", period: 4, integ: "Tư thế ngồi học và điều chỉnh độ sáng đèn chống cận thị." },
  5: { title: "Bài 3: Sử dụng quạt điện (Tiết 1)", period: 5 },
  6: { title: "Bài 3: Sử dụng quạt điện (Tiết 2)", period: 6 },
  7: { title: "Bài 4: Sử dụng máy thu thanh (Tiết 1)", period: 7 },
  8: { title: "Bài 4: Sử dụng máy thu thanh (Tiết 2)", period: 8 },
  9: { title: "Bài 5: Sử dụng máy thu hình (Tiết 1)", period: 9 },
  10: { title: "Bài 5: Sử dụng máy thu hình (Tiết 2)", period: 10 },
  11: { title: "Bài 6: An toàn với môi trường công nghệ trong gia đình (Tiết 1)", period: 11, integ: "Kĩ năng an toàn điện, phòng giật điện cho trẻ nhỏ." },
  12: { title: "Bài 6: An toàn với môi trường công nghệ trong gia đình (Tiết 2)", period: 12 },
  13: { title: "Bài 7: Dụng cụ và vật liệu làm thủ công (Tiết 1)", period: 13 },
  14: { title: "Bài 8: Làm đồ dùng học tập (Tiết 1)", period: 14 },
  15: { title: "Bài 8: Làm đồ dùng học tập (Tiết 2)", period: 15 },
  16: { title: "Bài 9: Làm biển báo giao thông (Tiết 1)", period: 16 },
  17: { title: "Ôn tập học kì I", period: 17 },
  18: { title: "Đánh giá định kì học kì I", period: 18 }
};

export const GRADE_3_DAO_DUC: Record<number, { title: string; period: number; integ?: string }> = {
  1: { title: "Bài 1: Chào cờ và hát Quốc ca (Tiết 1)", period: 1 },
  2: { title: "Bài 1: Chào cờ và hát Quốc ca (Tiết 2)", period: 2 },
  3: { title: "Bài 2: Tự hào truyền thống trường em (Tiết 1)", period: 3 },
  4: { title: "Bài 2: Tự hào truyền thống trường em (Tiết 2)", period: 4, integ: "Phát huy truyền thống hiếu học của nhà trường." },
  5: { title: "Bài 3: Quan tâm hàng xóm láng giềng (Tiết 1)", period: 5, integ: "Tình làng nghĩa xóm, chào hỏi lễ phép." },
  6: { title: "Bài 3: Quan tâm hàng xóm láng giềng (Tiết 2)", period: 6 },
  7: { title: "Bài 4: Ham học hỏi (Tiết 1)", period: 7, integ: "Chủ động khám phá tri thức, không giấu dốt." },
  8: { title: "Bài 4: Ham học hỏi (Tiết 2)", period: 8 },
  9: { title: "Ôn tập giữa học kì I", period: 9 },
  10: { title: "Bài 5: Giữ lời hứa (Tiết 1)", period: 10, integ: "Trọng chữ tín, đã nói là làm." },
  11: { title: "Bài 5: Giữ lời hứa (Tiết 2)", period: 11 },
  12: { title: "Bài 6: Tích cực hoàn thành nhiệm vụ (Tiết 1)", period: 12 },
  13: { title: "Bài 6: Tích cực hoàn thành nhiệm vụ (Tiết 2)", period: 13 },
  14: { title: "Bài 7: Khám phá bản thân (Tiết 1)", period: 14 },
  15: { title: "Bài 7: Khám phá bản thân (Tiết 2)", period: 15 },
  16: { title: "Bài 8: Xử lí bất hòa với bạn bè (Tiết 1)", period: 16, integ: "Kĩ năng hòa giải, giải quyết mâu thuẫn bằng lời nói." },
  17: { title: "Bài 8: Xử lí bất hòa với bạn bè (Tiết 2)", period: 17 },
  18: { title: "Ôn tập cuối học kì I", period: 18 }
};

export const GRADE_3_CURRICULUM_DATA: Record<string, (week: number, p: number) => LessonInfo> = {
  "tiếng việt": (week: number, p: number) => {
    const list = GRADE_3_TIENG_VIET[week];
    if (list && list[p - 1]) {
      const item = list[p - 1];
      return {
        lessonTitle: item.title,
        subSubject: item.sub,
        curriculumPeriod: item.period,
        integrationNotes: item.integ || "Tiếng Việt 3 Kết nối tri thức."
      };
    }
    return {
      lessonTitle: `Tiếng Việt 3 - Tuần ${week} (Tiết ${p})`,
      curriculumPeriod: (week - 1) * 7 + p,
      integrationNotes: "Tiếng Việt 3 GDPT 2018."
    };
  },

  "toán": (week: number, p: number) => {
    const list = GRADE_3_TOAN[week];
    if (list && list[p - 1]) {
      const item = list[p - 1];
      return {
        lessonTitle: item.title,
        curriculumPeriod: item.period,
        integrationNotes: item.integ || "Toán 3 GDPT 2018."
      };
    }
    return {
      lessonTitle: `Toán 3 - Tuần ${week} (Tiết ${p})`,
      curriculumPeriod: (week - 1) * 5 + p,
      integrationNotes: "Toán 3 GDPT 2018."
    };
  },

  "tự nhiên và xã hội": (week: number, p: number) => {
    const list = GRADE_3_TNXH[week];
    if (list && list[p - 1]) {
      const item = list[p - 1];
      return {
        lessonTitle: item.title,
        curriculumPeriod: item.period,
        integrationNotes: item.integ || "TNXH 3 Kết nối tri thức."
      };
    }
    return {
      lessonTitle: `TNXH 3 - Tuần ${week} (Tiết ${p})`,
      curriculumPeriod: (week - 1) * 2 + p
    };
  },

  "tin học": (week: number) => {
    const item = GRADE_3_TIN_HOC[week];
    if (item) {
      return {
        lessonTitle: item.title,
        curriculumPeriod: item.period,
        integrationNotes: item.integ || "Tin học 3 GDPT 2018."
      };
    }
    return {
      lessonTitle: `Tin học 3 - Tuần ${week}`,
      curriculumPeriod: week
    };
  },

  "công nghệ": (week: number) => {
    const item = GRADE_3_CONG_NGHE[week];
    if (item) {
      return {
        lessonTitle: item.title,
        curriculumPeriod: item.period,
        integrationNotes: item.integ || "Công nghệ 3 GDPT 2018."
      };
    }
    return {
      lessonTitle: `Công nghệ 3 - Tuần ${week}`,
      curriculumPeriod: week
    };
  },

  "đạo đức": (week: number) => {
    const item = GRADE_3_DAO_DUC[week];
    if (item) {
      return {
        lessonTitle: item.title,
        curriculumPeriod: item.period,
        integrationNotes: item.integ || "Đạo đức 3 GDPT 2018."
      };
    }
    return {
      lessonTitle: `Đạo đức 3 - Tuần ${week}`,
      curriculumPeriod: week
    };
  },

  "hoạt động trải nghiệm": (week: number, p: number) => {
    return {
      lessonTitle: p === 1 ? `SHDC Tuần ${week}: Chào cờ và sinh hoạt chủ điểm` : p === 2 ? `HĐGDCĐ Tuần ${week}: Hoạt động theo chủ đề` : `Sinh hoạt lớp Tuần ${week}: Đánh giá và kế hoạch tuần tới`,
      curriculumPeriod: (week - 1) * 3 + p,
      integrationNotes: "Hoạt động trải nghiệm 3 GDPT 2018."
    };
  },

  "giáo dục thể chất": (week: number, p: number) => {
    return {
      lessonTitle: `Giáo dục thể chất 3: Đội hình đội ngũ & Bài tập rèn luyện tư thế (Tiết ${p})`,
      curriculumPeriod: (week - 1) * 2 + p,
      integrationNotes: "Rèn luyện thể lực và tác phong nhanh nhẹn."
    };
  }
};
