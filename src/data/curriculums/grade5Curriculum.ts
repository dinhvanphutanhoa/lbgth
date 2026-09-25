import { LessonInfo } from "../gradeCurriculums";

// ============================================================================
// KẾ HOẠCH DẠY HỌC KHỐI 5 - CHÍNH THỨC NĂM HỌC 2024-2025 (KẾT NỐI TRI THỨC)
// ============================================================================

export const GRADE_5_TIENG_VIET: Record<number, Array<{ title: string; sub: string; period: number; integ?: string }>> = {
  1: [
    { title: "Bài 1: Thanh âm của gió (Tiết 1)", sub: "Đọc", period: 1, integ: "Cảm thụ âm thanh thiên nhiên kì diệu." },
    { title: "Bài 1: Thanh âm của gió (Tiết 2: LTVC: Luyện tập về danh từ, động từ, tính từ)", sub: "Luyện từ và câu", period: 2, integ: "NLS: 1.1.CB2b: Tìm kiếm dữ liệu số hỗ trợ từ loại." },
    { title: "Bài 1: Thanh âm của gió (Tiết 3: Viết: Tìm hiểu cách viết bài văn kể chuyện sáng tạo)", sub: "Viết", period: 3 },
    { title: "Bài 2: Cánh đồng hoa (Tiết 1)", sub: "Đọc", period: 4 },
    { title: "Bài 2: Cánh đồng hoa (Tiết 2)", sub: "Đọc", period: 5 },
    { title: "Bài 2: Cánh đồng hoa (Tiết 3: Viết: Tìm hiểu cách viết bài văn kể chuyện sáng tạo (tiếp theo))", sub: "Viết", period: 6 },
    { title: "Bài 2: Cánh đồng hoa (Tiết 4: Đọc mở rộng)", sub: "Đọc mở rộng", period: 7 }
  ],
  2: [
    { title: "Bài 3: Tuổi Ngựa (Tiết 1)", sub: "Đọc", period: 8 },
    { title: "Bài 3: Tuổi Ngựa (Tiết 2: LTVC: Đại từ)", sub: "Luyện từ và câu", period: 9 },
    { title: "Bài 3: Tuổi Ngựa (Tiết 3: Viết: Lập dàn ý cho bài văn kể chuyện sáng tạo)", sub: "Viết", period: 10, integ: "AI: 5.A1.1: Gợi ý ý tưởng cốt truyện sáng tạo." },
    { title: "Bài 4: Bến sông tuổi thơ (Tiết 1)", sub: "Đọc", period: 11 },
    { title: "Bài 4: Bến sông tuổi thơ (Tiết 2)", sub: "Đọc", period: 12 },
    { title: "Bài 4: Bến sông tuổi thơ (Tiết 3: Viết: Viết bài văn kể chuyện sáng tạo)", sub: "Viết", period: 13 },
    { title: "Bài 4: Bến sông tuổi thơ (Tiết 4: Nói và nghe: Những câu chuyện thú vị)", sub: "Nói và nghe", period: 14 }
  ],
  3: [
    { title: "Bài 5: Tiếng hạt nảy mầm (Tiết 1)", sub: "Đọc", period: 15, integ: "Tích hợp AI 1.A1.1, BVMT: Yêu mầm cây xanh." },
    { title: "Bài 5: Tiếng hạt nảy mầm (Tiết 2: LTVC: Luyện tập về đại từ)", sub: "Luyện từ và câu", period: 16, integ: "NLS: 1.2.CB2a: Bảng phân loại đại từ." },
    { title: "Bài 5: Tiếng hạt nảy mầm (Tiết 3: Viết: Đánh giá, chỉnh sửa bài văn kể chuyện sáng tạo)", sub: "Viết", period: 17, integ: "AI 4.A1.2: Gợi ý sửa câu văn." },
    { title: "Bài 6: Ngôi sao sân cỏ (Tiết 1)", sub: "Đọc", period: 18, integ: "QCN, Tinh thần thể thao trung thực, lành mạnh." },
    { title: "Bài 6: Ngôi sao sân cỏ (Tiết 2)", sub: "Đọc", period: 19 },
    { title: "Bài 6: Ngôi sao sân cỏ (Tiết 3: Viết: Tìm hiểu cách viết báo cáo công việc)", sub: "Viết", period: 20, integ: "NLS: 3.2.CB1a: Định dạng văn bản báo cáo." },
    { title: "Bài 6: Ngôi sao sân cỏ (Tiết 4: Đọc mở rộng)", sub: "Đọc mở rộng", period: 21, integ: "NLS: 1.1.CB1a: Tìm đọc sách an toàn." }
  ],
  4: [
    { title: "Bài 7: Bộ sưu tập độc đáo (Tiết 1)", sub: "Đọc", period: 22, integ: "Tôn trọng sở thích và sự sáng tạo cá nhân." },
    { title: "Bài 7: Bộ sưu tập độc đáo (Tiết 2: LTVC: Luyện tập về đại từ (tiếp theo))", sub: "Luyện từ và câu", period: 23, integ: "Rèn luyện sử dụng đại từ thay thế chính xác." },
    { title: "Bài 7: Bộ sưu tập độc đáo (Tiết 3: Viết: Viết báo cáo công việc)", sub: "Viết", period: 24, integ: "Kĩ năng thực hành lập báo cáo khoa học." },
    { title: "Bài 8: Hành tinh kì lạ (Tiết 1)", sub: "Đọc", period: 25, integ: "Khám phá không gian và trí tưởng tượng khoa học viễn tưởng." },
    { title: "Bài 8: Hành tinh kì lạ (Tiết 2)", sub: "Đọc", period: 26 },
    { title: "Bài 8: Hành tinh kì lạ (Tiết 3: Viết: Đánh giá, chỉnh sửa báo cáo công việc)", sub: "Viết", period: 27, integ: "NLS: 5.2.CB2a: Sử dụng công cụ số chỉnh sửa bảng biểu báo cáo." },
    { title: "Bài 8: Hành tinh kì lạ (Tiết 4: Nói và nghe: Những điểm vui chơi lí thú)", sub: "Nói và nghe", period: 28, integ: "KNS: Tự tin thuyết trình địa điểm du lịch, vui chơi lành mạnh." }
  ],
  5: [
    { title: "Bài 9: Trước cổng trời (Tiết 1)", sub: "Đọc", period: 29, integ: "Tự hào vẻ đẹp hùng vĩ của vùng cao Tây Bắc." },
    { title: "Bài 9: Trước cổng trời (Tiết 2: LTVC: Từ đồng nghĩa)", sub: "Luyện từ và câu", period: 30, integ: "NLS: 5.2.CB2a: Tra cứu từ điển số tìm từ đồng nghĩa." },
    { title: "Bài 9: Trước cổng trời (Tiết 3: Viết: Tìm hiểu cách viết bài văn tả phong cảnh)", sub: "Viết", period: 31, integ: "Phân tích cấu trúc bài văn tả cảnh thiên nhiên." },
    { title: "Bài 10: Kì diệu rừng xanh (Tiết 1)", sub: "Đọc", period: 32, integ: "BVMT: Giá trị đa dạng sinh học của rừng nguyên sinh." },
    { title: "Bài 10: Kì diệu rừng xanh (Tiết 2)", sub: "Đọc", period: 33 },
    { title: "Bài 10: Kì diệu rừng xanh (Tiết 3: Viết: Tìm hiểu cách viết bài văn tả phong cảnh (tiếp theo))", sub: "Viết", period: 34 },
    { title: "Bài 10: Kì diệu rừng xanh (Tiết 4: Đọc mở rộng)", sub: "Đọc mở rộng", period: 35, integ: "NLS: Tìm hiểu sách báo về tài nguyên rừng." }
  ],
  6: [
    { title: "Bài 11: Hang Sơn Đoòng - Những điều kì thú (Tiết 1)", sub: "Đọc", period: 36, integ: "Tự hào di sản thiên nhiên thế giới tại Việt Nam." },
    { title: "Bài 11: Hang Sơn Đoòng - Những điều kì thú (Tiết 2: LTVC: Luyện tập về từ đồng nghĩa)", sub: "Luyện từ và câu", period: 37 },
    { title: "Bài 11: Hang Sơn Đoòng - Những điều kì thú (Tiết 3: Viết: Viết mở bài và kết bài cho bài văn tả phong cảnh)", sub: "Viết", period: 38, integ: "AI: 5.C4.2: Công cụ AI gợi ý ý tưởng mở bài, kết bài." },
    { title: "Bài 12: Những hòn đảo trên vịnh Hạ Long (Tiết 1)", sub: "Đọc", period: 39, integ: "GDQPAN: Vẻ đẹp và chủ quyền biển đảo quê hương." },
    { title: "Bài 12: Những hòn đảo trên vịnh Hạ Long (Tiết 2)", sub: "Đọc", period: 40 },
    { title: "Bài 12: Những hòn đảo trên vịnh Hạ Long (Tiết 3: Viết: Quan sát phong cảnh)", sub: "Viết", period: 41, integ: "Kĩ năng ghi chép chi tiết khi quan sát thiên nhiên." },
    { title: "Bài 12: Những hòn đảo trên vịnh Hạ Long (Tiết 4: Nói và nghe: Bảo tồn động vật hoang dã)", sub: "Nói và nghe", period: 42, integ: "BVMT: Chung tay bảo vệ động vật quý hiếm." }
  ],
  7: [
    { title: "Bài 13: Mầm non (Tiết 1)", sub: "Đọc", period: 43, integ: "Cảm nhận sức sống mùa xuân trỗi dậy trong từng chồi non." },
    { title: "Bài 13: Mầm non (Tiết 2: LTVC: Từ đa nghĩa)", sub: "Luyện từ và câu", period: 44, integ: "Nhận biết nghĩa gốc và các nghĩa chuyển của từ." },
    { title: "Bài 13: Mầm non (Tiết 3: Viết: Lập dàn ý cho bài văn tả phong cảnh)", sub: "Viết", period: 45, integ: "AI: 5.A2.2: AI hỗ trợ cấu trúc dàn bài nhưng cảm xúc là của con người." },
    { title: "Bài 14: Những ngọn núi nóng rẫy (Tiết 1)", sub: "Đọc", period: 46, integ: "Khám phá hiện tượng núi lửa và địa chất tự nhiên." },
    { title: "Bài 14: Những ngọn núi nóng rẫy (Tiết 2)", sub: "Đọc", period: 47 },
    { title: "Bài 14: Những ngọn núi nóng rẫy (Tiết 3: Viết: Viết đoạn văn tả phong cảnh)", sub: "Viết", period: 48 },
    { title: "Bài 14: Những ngọn núi nóng rẫy (Tiết 4: Đọc mở rộng)", sub: "Đọc mở rộng", period: 49, integ: "Đọc tư liệu khám phá kì quan thiên nhiên." }
  ],
  8: [
    { title: "Bài 15: Bài ca về mặt trời (Tiết 1)", sub: "Đọc", period: 50, integ: "Ánh sáng mặt trời và sự sống muôn loài." },
    { title: "Bài 15: Bài ca về mặt trời (Tiết 2: LTVC: Luyện tập về từ đa nghĩa)", sub: "Luyện từ và câu", period: 51, integ: "NLS: 6.1.CB2a: Phân biệt các nét nghĩa qua ngữ cảnh số." },
    { title: "Bài 15: Bài ca về mặt trời (Tiết 3: Viết: Viết bài văn tả phong cảnh)", sub: "Viết", period: 52 },
    { title: "Bài 16: Xin chào, Xa-ha-ra (Tiết 1)", sub: "Đọc", period: 53, integ: "Hiểu biết địa lí hoang mạc Sahara rộng lớn." },
    { title: "Bài 16: Xin chào, Xa-ha-ra (Tiết 2)", sub: "Đọc", period: 54 },
    { title: "Bài 16: Xin chào, Xa-ha-ra (Tiết 3: Viết: Đánh giá, chỉnh sửa bài văn tả phong cảnh)", sub: "Viết", period: 55 },
    { title: "Bài 16: Xin chào, Xa-ha-ra (Tiết 4: Nói và nghe: Cảnh đẹp thiên nhiên)", sub: "Nói và nghe", period: 56, integ: "KNS: Thuyết trình giới thiệu danh lam thắng cảnh." }
  ],
  9: [
    { title: "Ôn tập giữa học kì I (Tiết 1)", sub: "Ôn tập", period: 57, integ: "Hệ thống hóa vốn từ và kĩ năng đọc hiểu." },
    { title: "Ôn tập giữa học kì I (Tiết 2)", sub: "Ôn tập", period: 58 },
    { title: "Ôn tập giữa học kì I (Tiết 3)", sub: "Ôn tập", period: 59 },
    { title: "Ôn tập giữa học kì I (Tiết 4)", sub: "Ôn tập", period: 60 },
    { title: "Ôn tập giữa học kì I (Tiết 5)", sub: "Ôn tập", period: 61 },
    { title: "Đánh giá định kì giữa học kì I (Tiết 6: Kĩ năng Đọc)", sub: "Kiểm tra", period: 62 },
    { title: "Đánh giá định kì giữa học kì I (Tiết 7: Kĩ năng Viết)", sub: "Kiểm tra", period: 63 }
  ],
  10: [
    { title: "Bài 17: Thư gửi các học sinh (Tiết 1)", sub: "Đọc", period: 64, integ: "Bác Hồ với sự nghiệp giáo dục non sông đất nước." },
    { title: "Bài 17: Thư gửi các học sinh (Tiết 2: LTVC: Sử dụng từ điển)", sub: "Luyện từ và câu", period: 65, integ: "Rèn kĩ năng tra cứu từ điển nhanh, chính xác." },
    { title: "Bài 17: Thư gửi các học sinh (Tiết 3: Viết: Tìm hiểu cách viết đoạn văn giới thiệu nhân vật trong một cuốn sách)", sub: "Viết", period: 66, integ: "AI: 5.A3.1: AI hỗ trợ tra cứu nhân vật sách." },
    { title: "Bài 18: Tấm gương tự học (Tiết 1)", sub: "Đọc", period: 67, integ: "Tinh thần tự học, vượt khó vươn lên thành tài." },
    { title: "Bài 18: Tấm gương tự học (Tiết 2)", sub: "Đọc", period: 68 },
    { title: "Bài 18: Tấm gương tự học (Tiết 3: Viết: Tìm ý cho đoạn văn giới thiệu nhân vật trong một cuốn sách)", sub: "Viết", period: 69 },
    { title: "Bài 18: Tấm gương tự học (Tiết 4: Đọc mở rộng)", sub: "Đọc mở rộng", period: 70, integ: "Đọc sách về các danh nhân văn hóa thế giới." }
  ],
  11: [
    { title: "Bài 19: Trải nghiệm để sáng tạo (Tiết 1)", sub: "Đọc", period: 71, integ: "Học đi đôi với hành, sáng tạo từ thực tế." },
    { title: "Bài 19: Trải nghiệm để sáng tạo (Tiết 2: LTVC: Luyện tập sử dụng từ điển)", sub: "Luyện từ và câu", period: 72, integ: "NLS: 3.1.CB2a: Thực hành tra từ điển số đơn giản." },
    { title: "Bài 19: Trải nghiệm để sáng tạo (Tiết 3: Viết: Viết đoạn văn giới thiệu nhân vật trong một cuốn sách)", sub: "Viết", period: 73 },
    { title: "Bài 20: Khổ luyện thành tài (Tiết 1)", sub: "Đọc", period: 74, integ: "Ý chí kiên trì, khổ luyện để đạt đỉnh cao." },
    { title: "Bài 20: Khổ luyện thành tài (Tiết 2)", sub: "Đọc", period: 75 },
    { title: "Bài 20: Khổ luyện thành tài (Tiết 3: Viết: Đánh giá, chỉnh sửa đoạn văn giới thiệu nhân vật sách)", sub: "Viết", period: 76 },
    { title: "Bài 20: Khổ luyện thành tài (Tiết 4: Nói và nghe: Cuốn sách tôi yêu)", sub: "Nói và nghe", period: 77, integ: "KNS: Lan tỏa văn hóa đọc đến tập thể." }
  ],
  12: [
    { title: "Bài 21: Thế giới trong trang sách (Tiết 1)", sub: "Đọc", period: 78, integ: "Sách mở ra chân trời tri thức bất tận." },
    { title: "Bài 21: Thế giới trong trang sách (Tiết 2: LTVC: Dấu gạch ngang)", sub: "Luyện từ và câu", period: 79, integ: "NLS: 1.3.CB2a: Cấu trúc định dạng văn bản có dấu gạch ngang." },
    { title: "Bài 21: Thế giới trong trang sách (Tiết 3: Viết: Tìm hiểu cách viết đoạn văn thể hiện tình cảm, cảm xúc về một câu chuyện)", sub: "Viết", period: 80 },
    { title: "Bài 22: Từ những câu chuyện ấu thơ (Tiết 1)", sub: "Đọc", period: 81, integ: "Kỉ niệm ấu thơ và tình cảm gia đình ấm áp." },
    { title: "Bài 22: Từ những câu chuyện ấu thơ (Tiết 2)", sub: "Đọc", period: 82 },
    { title: "Bài 22: Từ những câu chuyện ấu thơ (Tiết 3: Viết: Tìm ý cho đoạn văn thể hiện tình cảm, cảm xúc về một câu chuyện)", sub: "Viết", period: 83 },
    { title: "Bài 22: Từ những câu chuyện ấu thơ (Tiết 4: Đọc mở rộng)", sub: "Đọc mở rộng", period: 84 }
  ],
  13: [
    { title: "Bài 23: Giới thiệu sách Dế Mèn phiêu lưu kí (Tiết 1)", sub: "Đọc", period: 85, integ: "Tác phẩm kinh điển của nhà văn Tô Hoài." },
    { title: "Bài 23: Giới thiệu sách Dế Mèn phiêu lưu kí (Tiết 2: LTVC: Luyện tập về dấu gạch ngang)", sub: "Luyện từ và câu", period: 86, integ: "NLS: 1.2.CB2a: Phân loại công dụng dấu gạch ngang." },
    { title: "Bài 23: Giới thiệu sách Dế Mèn phiêu lưu kí (Tiết 3: Viết: Viết đoạn văn thể hiện tình cảm, cảm xúc về một câu chuyện)", sub: "Viết", period: 87 },
    { title: "Bài 24: Tinh thần học tập của nhà Phi-lít (Tiết 1)", sub: "Đọc", period: 88, integ: "Say mê nghiên cứu khoa học từ thuở thiếu thời." },
    { title: "Bài 24: Tinh thần học tập của nhà Phi-lít (Tiết 2)", sub: "Đọc", period: 89 },
    { title: "Bài 24: Tinh thần học tập của nhà Phi-lít (Tiết 3: Viết: Đánh giá, chỉnh sửa đoạn văn cảm xúc về câu chuyện)", sub: "Viết", period: 90 },
    { title: "Bài 24: Tinh thần học tập của nhà Phi-lít (Tiết 4: Nói và nghe: Lợi ích của tự học)", sub: "Nói và nghe", period: 91, integ: "KNS: Trao đổi phương pháp tự học hiệu quả." }
  ],
  14: [
    { title: "Bài 25: Tiếng đàn ba-la-lai-ca trên sông Đà (Tiết 1)", sub: "Đọc", period: 92, integ: "NLS: 5.2.CB2a: Xem video tư liệu số Thủy điện Sông Đà." },
    { title: "Bài 25: Tiếng đàn ba-la-lai-ca trên sông Đà (Tiết 2: LTVC: Biện pháp điệp từ, điệp ngữ)", sub: "Luyện từ và câu", period: 93, integ: "Giá trị gợi hình, gợi cảm của điệp ngữ trong thơ." },
    { title: "Bài 25: Tiếng đàn ba-la-lai-ca trên sông Đà (Tiết 3: Viết: Tìm hiểu cách viết đoạn văn thể hiện tình cảm, cảm xúc về một bài thơ)", sub: "Viết", period: 94 },
    { title: "Bài 26: Trí tưởng tượng phong phú (Tiết 1)", sub: "Đọc", period: 95, integ: "Tưởng tượng và sự sáng tạo nghệ thuật." },
    { title: "Bài 26: Trí tưởng tượng phong phú (Tiết 2)", sub: "Đọc", period: 96 },
    { title: "Bài 26: Trí tưởng tượng phong phú (Tiết 3: Viết: Tìm ý cho đoạn văn thể hiện tình cảm, cảm xúc về một bài thơ)", sub: "Viết", period: 97 },
    { title: "Bài 26: Trí tưởng tượng phong phú (Tiết 4: Đọc mở rộng)", sub: "Đọc mở rộng", period: 98 }
  ],
  15: [
    { title: "Bài 27: Tranh làng Hồ (Tiết 1)", sub: "Đọc", period: 99, integ: "Bản sắc văn hóa dân gian Việt Nam qua tranh Đông Hồ." },
    { title: "Bài 27: Tranh làng Hồ (Tiết 2: LTVC: Luyện tập về điệp từ, điệp ngữ)", sub: "Luyện từ và câu", period: 100 },
    { title: "Bài 27: Tranh làng Hồ (Tiết 3: Viết: Viết đoạn văn thể hiện tình cảm, cảm xúc về một bài thơ)", sub: "Viết", period: 101, integ: "AI: 5.C4.2: Gợi ý từ ngữ biểu cảm tinh tế." },
    { title: "Bài 28: Tập hát quan họ (Tiết 1)", sub: "Đọc", period: 102, integ: "Di sản văn hóa phi vật thể quan họ Bắc Ninh." },
    { title: "Bài 28: Tập hát quan họ (Tiết 2)", sub: "Đọc", period: 103 },
    { title: "Bài 28: Tập hát quan họ (Tiết 3: Viết: Đánh giá, chỉnh sửa đoạn văn cảm xúc về bài thơ)", sub: "Viết", period: 104 },
    { title: "Bài 28: Tập hát quan họ (Tiết 4: Nói và nghe: Chương trình nghệ thuật em yêu thích)", sub: "Nói và nghe", period: 105, integ: "KNS: Giới thiệu sân chơi nghệ thuật truyền thống." }
  ],
  16: [
    { title: "Bài 29: Chú ốc sên bay (Tiết 1)", sub: "Đọc", period: 106, integ: "Nuôi dưỡng ước mơ và nghị lực vươn xa." },
    { title: "Bài 29: Chú ốc sên bay (Tiết 2: LTVC: Kết từ)", sub: "Luyện từ và câu", period: 107, integ: "Tác dụng nối các thành phần câu và các câu." },
    { title: "Bài 29: Chú ốc sên bay (Tiết 3: Viết: Tìm hiểu cách viết đoạn văn giới thiệu nhân vật hoạt hình)", sub: "Viết", period: 108, integ: "AI: 5.D2.1: Cách AI dựng nhân vật hoạt hình." },
    { title: "Bài 30: Nghệ thuật múa ba lê (Tiết 1)", sub: "Đọc", period: 109, integ: "Vẻ đẹp duyên dáng và khổ luyện của nghệ thuật múa ba lê." },
    { title: "Bài 30: Nghệ thuật múa ba lê (Tiết 2)", sub: "Đọc", period: 110 },
    { title: "Bài 30: Nghệ thuật múa ba lê (Tiết 3: Viết: Tìm ý cho đoạn văn giới thiệu nhân vật hoạt hình)", sub: "Viết", period: 111 },
    { title: "Bài 30: Nghệ thuật múa ba lê (Tiết 4: Đọc mở rộng)", sub: "Đọc mở rộng", period: 112 }
  ],
  17: [
    { title: "Bài 31: Một ngôi chùa độc đáo (Tiết 1)", sub: "Đọc", period: 113, integ: "Kiến trúc Chùa Một Cột - đóa sen ngàn năm Thăng Long." },
    { title: "Bài 31: Một ngôi chùa độc đáo (Tiết 2: LTVC: Luyện tập về kết từ)", sub: "Luyện từ và câu", period: 114 },
    { title: "Bài 31: Một ngôi chùa độc đáo (Tiết 3: Viết: Viết đoạn văn giới thiệu nhân vật hoạt hình)", sub: "Viết", period: 115 },
    { title: "Bài 32: Sự tích chú Tễu (Tiết 1)", sub: "Đọc", period: 116, integ: "Nghệ thuật múa rối nước truyền thống dân tộc." },
    { title: "Bài 32: Sự tích chú Tễu (Tiết 2)", sub: "Đọc", period: 117 },
    { title: "Bài 32: Sự tích chú Tễu (Tiết 3: Viết: Đánh giá, chỉnh sửa đoạn văn giới thiệu nhân vật hoạt hình)", sub: "Viết", period: 118 },
    { title: "Bài 32: Sự tích chú Tễu (Tiết 4: Nói và nghe: Bộ phim yêu thích)", sub: "Nói và nghe", period: 119, integ: "KNS: Trình bày cảm nghĩ về bộ phim nhân văn." }
  ],
  18: [
    { title: "Ôn tập cuối học kì I (Tiết 1)", sub: "Ôn tập", period: 120 },
    { title: "Ôn tập cuối học kì I (Tiết 2)", sub: "Ôn tập", period: 121 },
    { title: "Ôn tập cuối học kì I (Tiết 3)", sub: "Ôn tập", period: 122 },
    { title: "Ôn tập cuối học kì I (Tiết 4)", sub: "Ôn tập", period: 123 },
    { title: "Ôn tập cuối học kì I (Tiết 5)", sub: "Ôn tập", period: 124 },
    { title: "Đánh giá định kì cuối học kì I (Tiết 6: Kĩ năng Đọc)", sub: "Kiểm tra", period: 125 },
    { title: "Đánh giá định kì cuối học kì I (Tiết 7: Kĩ năng Viết)", sub: "Kiểm tra", period: 126 }
  ]
};

export const GRADE_5_TOAN: Record<number, Array<{ title: string; period: number; integ?: string }>> = {
  1: [
    { title: "Bài 1: Ôn tập số tự nhiên (Tiết 1)", period: 1 },
    { title: "Bài 1: Ôn tập số tự nhiên (Tiết 2)", period: 2 },
    { title: "Bài 2: Ôn tập các phép tính với số tự nhiên (Tiết 1)", period: 3 },
    { title: "Bài 2: Ôn tập các phép tính với số tự nhiên (Tiết 2)", period: 4 },
    { title: "Bài 3: Ôn tập phân số (Tiết 1)", period: 5 }
  ],
  2: [
    { title: "Bài 3: Ôn tập phân số (Tiết 2)", period: 6, integ: "AI: 5.D1.1: Ứng dụng giải quyết bài toán phân số." },
    { title: "Bài 4: Phân số thập phân (Tiết 1)", period: 7, integ: "NLS: 1.1.CB2b: Tìm kiếm số liệu phân số thập phân." },
    { title: "Bài 5: Ôn tập các phép tính với phân số (Tiết 1)", period: 8 },
    { title: "Bài 5: Ôn tập các phép tính với phân số (Tiết 2)", period: 9 },
    { title: "Bài 5: Ôn tập các phép tính với phân số (Tiết 3)", period: 10 }
  ],
  3: [
    { title: "Bài 6: Cộng, trừ hai phân số khác mẫu số (Tiết 1)", period: 11 },
    { title: "Bài 6: Cộng, trừ hai phân số khác mẫu số (Tiết 2)", period: 12 },
    { title: "Bài 7: Hỗn số (Tiết 1)", period: 13, integ: "STEM: Trực quan hóa khái niệm hỗn số." },
    { title: "Bài 7: Hỗn số (Tiết 2)", period: 14 },
    { title: "Bài 8: Ôn tập hình học và đo lường (Tiết 1)", period: 15 }
  ],
  4: [
    { title: "Bài 8: Ôn tập hình học và đo lường (Tiết 2)", period: 16, integ: "Đo lường thể tích, khối lượng ứng dụng đời sống." },
    { title: "Bài 9: Luyện tập chung (Tiết 1)", period: 17, integ: "Củng cố các phép toán phân số và hình học." },
    { title: "Bài 9: Luyện tập chung (Tiết 2)", period: 18 },
    { title: "Bài 9: Luyện tập chung (Tiết 3)", period: 19 },
    { title: "Bài 10: Khái niệm số thập phân (Tiết 1)", period: 20, integ: "Hình thành khái niệm số thập phân trực quan." }
  ],
  5: [
    { title: "Bài 10: Khái niệm số thập phân (Tiết 2)", period: 21, integ: "NLS: 1.1.CB2a: Hình ảnh trực quan số thập phân." },
    { title: "Bài 10: Khái niệm số thập phân (Tiết 3)", period: 22 },
    { title: "Bài 11: So sánh các số thập phân (Tiết 1)", period: 23 },
    { title: "Bài 11: So sánh các số thập phân (Tiết 2)", period: 24 },
    { title: "Bài 12: Viết số đo đại lượng dưới dạng số thập phân (Tiết 1)", period: 25 }
  ],
  6: [
    { title: "Bài 12: Viết số đo đại lượng dưới dạng số thập phân (Tiết 2)", period: 26 },
    { title: "Bài 12: Viết số đo đại lượng dưới dạng số thập phân (Tiết 3)", period: 27 },
    { title: "Bài 13: Làm tròn số thập phân (Tiết 1)", period: 28, integ: "AI: 5.A1.2: AI tự động làm tròn số trong Big Data." },
    { title: "Bài 13: Làm tròn số thập phân (Tiết 2)", period: 29 },
    { title: "Bài 14: Luyện tập chung (Tiết 1)", period: 30 }
  ],
  7: [
    { title: "Bài 14: Luyện tập chung (Tiết 2)", period: 31 },
    { title: "Bài 15: Ki-lô-mét vuông. Héc-ta (Tiết 1)", period: 32, integ: "Đại lượng đo diện tích đất nông nghiệp, rừng." },
    { title: "Bài 15: Ki-lô-mét vuông. Héc-ta (Tiết 2)", period: 33 },
    { title: "Bài 16: Các đơn vị đo diện tích (Tiết 1)", period: 34 },
    { title: "Bài 16: Các đơn vị đo diện tích (Tiết 2)", period: 35 }
  ],
  8: [
    { title: "Bài 17: Thực hành và trải nghiệm với một số đơn vị đo đại lượng (Tiết 1)", period: 36, integ: "STEM: Đo diện tích sân trường, phòng học." },
    { title: "Bài 17: Thực hành và trải nghiệm với một số đơn vị đo đại lượng (Tiết 2)", period: 37 },
    { title: "Bài 18: Luyện tập chung (Tiết 1)", period: 38 },
    { title: "Bài 18: Luyện tập chung (Tiết 2)", period: 39 },
    { title: "Bài 19: Phép cộng số thập phân (Tiết 1)", period: 40, integ: "AI: 5.A1.1: Máy tính tính toán cộng thập phân siêu tốc." }
  ],
  9: [
    { title: "Bài 19: Phép cộng số thập phân (Tiết 2)", period: 41 },
    { title: "Bài 20: Phép trừ số thập phân (Tiết 1)", period: 42 },
    { title: "Bài 20: Phép trừ số thập phân (Tiết 2)", period: 43 },
    { title: "Bài 21: Phép nhân số thập phân (Tiết 1)", period: 44 },
    { title: "Bài 21: Phép nhân số thập phân (Tiết 2)", period: 45 }
  ],
  10: [
    { title: "Bài 21: Phép nhân số thập phân (Tiết 3)", period: 46 },
    { title: "Bài 22: Phép chia số thập phân (Tiết 1)", period: 47 },
    { title: "Bài 22: Phép chia số thập phân (Tiết 2)", period: 48 },
    { title: "Bài 22: Phép chia số thập phân (Tiết 3)", period: 49 },
    { title: "Bài 22: Phép chia số thập phân (Tiết 4)", period: 50 }
  ],
  11: [
    { title: "Bài 23: Nhân, chia số thập phân với 10; 100; 1000;... hoặc với 0,1; 0,01; 0,001… (Tiết 1)", period: 51, integ: "AI: 5.C4.1: Thuật toán dịch chuyển dấu phẩy tự động." },
    { title: "Bài 23: Nhân, chia số thập phân với 10; 100; 1000;... hoặc với 0,1; 0,01; 0,001… (Tiết 2)", period: 52 },
    { title: "Bài 24: Luyện tập chung (Tiết 1)", period: 53 },
    { title: "Bài 24: Luyện tập chung (Tiết 2)", period: 54 },
    { title: "Bài 24: Luyện tập chung (Tiết 3)", period: 55 }
  ],
  12: [
    { title: "Bài 25: Hình tam giác. Diện tích hình tam giác (Tiết 1)", period: 56 },
    { title: "Bài 25: Hình tam giác. Diện tích hình tam giác (Tiết 2)", period: 57 },
    { title: "Bài 25: Hình tam giác. Diện tích hình tam giác (Tiết 3)", period: 58 },
    { title: "Bài 25: Hình tam giác. Diện tích hình tam giác (Tiết 4)", period: 59 },
    { title: "Bài 26: Hình thang. Diện tích hình thang (Tiết 1)", period: 60, integ: "NLS: 3.4.CB2a: Thuật toán tính diện tích hình học." }
  ],
  13: [
    { title: "Bài 26: Hình thang. Diện tích hình thang (Tiết 2)", period: 61 },
    { title: "Bài 26: Hình thang. Diện tích hình thang (Tiết 3)", period: 62 },
    { title: "Bài 26: Hình thang. Diện tích hình thang (Tiết 4)", period: 63 },
    { title: "Bài 27: Đường tròn. Chu vi và diện tích hình tròn (Tiết 1)", period: 64 },
    { title: "Bài 27: Đường tròn. Chu vi và diện tích hình tròn (Tiết 2)", period: 65 }
  ],
  14: [
    { title: "Bài 27: Đường tròn. Chu vi và diện tích hình tròn (Tiết 3)", period: 66, integ: "AI: 5.C4.1: Ứng dụng số Pi trong tính toán tự động." },
    { title: "Bài 27: Đường tròn. Chu vi và diện tích hình tròn (Tiết 4)", period: 67 },
    { title: "Bài 27: Đường tròn. Chu vi và diện tích hình tròn (Tiết 5)", period: 68 },
    { title: "Bài 28: Thực hành và trải nghiệm đo, vẽ, lắp ghép, tạo hình (Tiết 1)", period: 69, integ: "STEM: Tạo hình nghệ thuật từ các hình phẳng." },
    { title: "Bài 28: Thực hành và trải nghiệm đo, vẽ, lắp ghép, tạo hình (Tiết 2)", period: 70 }
  ],
  15: [
    { title: "Bài 29: Luyện tập chung (Tiết 1)", period: 71 },
    { title: "Bài 29: Luyện tập chung (Tiết 2)", period: 72 },
    { title: "Bài 29: Luyện tập chung (Tiết 3)", period: 73 },
    { title: "Bài 30: Ôn tập số thập phân (Tiết 1)", period: 74 },
    { title: "Bài 30: Ôn tập số thập phân (Tiết 2)", period: 75 }
  ],
  16: [
    { title: "Bài 30: Ôn tập số thập phân (Tiết 3)", period: 76 },
    { title: "Bài 31: Ôn tập các phép tính với số thập phân (Tiết 1)", period: 77 },
    { title: "Bài 31: Ôn tập các phép tính với số thập phân (Tiết 2)", period: 78 },
    { title: "Bài 31: Ôn tập các phép tính với số thập phân (Tiết 3)", period: 79 },
    { title: "Bài 31: Ôn tập các phép tính với số thập phân (Tiết 4)", period: 80 }
  ],
  17: [
    { title: "Bài 32: Ôn tập một số hình phẳng (Tiết 1)", period: 81 },
    { title: "Bài 32: Ôn tập một số hình phẳng (Tiết 2)", period: 82 },
    { title: "Bài 33: Ôn tập diện tích, chu vi một số hình phẳng (Tiết 1)", period: 83, integ: "NLS: 1.1.CB2b: Mô phỏng hình học qua phần mềm." },
    { title: "Bài 33: Ôn tập diện tích, chu vi một số hình phẳng (Tiết 2)", period: 84 },
    { title: "Bài 33: Ôn tập diện tích, chu vi một số hình phẳng (Tiết 3)", period: 85 }
  ],
  18: [
    { title: "Bài 34: Ôn tập đo lường (Tiết 1)", period: 86 },
    { title: "Bài 34: Ôn tập đo lường (Tiết 2)", period: 87 },
    { title: "Bài 35: Ôn tập chung (Tiết 1)", period: 88 },
    { title: "Bài 35: Ôn tập chung (Tiết 2)", period: 89 },
    { title: "Bài 35: Ôn tập chung (Tiết 3)", period: 90 }
  ]
};

export const GRADE_5_KHOA_HOC: Record<number, Array<{ title: string; period: number; integ?: string }>> = {
  1: [
    { title: "Bài 1: Thành phần và vai trò của đất đối với cây trồng (Tiết 1)", period: 1, integ: "Đất là tài nguyên quý giá của sự sống." },
    { title: "Bài 1: Thành phần và vai trò của đất đối với cây trồng (Tiết 2)", period: 2 }
  ],
  2: [
    { title: "Bài 2: Ô nhiễm, xói mòn đất và bảo vệ môi trường đất (Tiết 1)", period: 3, integ: "NLS: 3.1.CB2a: Sơ đồ bảo vệ môi trường đất." },
    { title: "Bài 2: Ô nhiễm, xói mòn đất và bảo vệ môi trường đất (Tiết 2)", period: 4 }
  ],
  3: [
    { title: "Bài 2: Ô nhiễm, xói mòn đất và bảo vệ môi trường đất (Tiết 3)", period: 5, integ: "BVMT: Đất sạch nuôi dưỡng thực phẩm sạch an toàn." },
    { title: "Bài 3: Hỗn hợp và dung dịch (Tiết 1)", period: 6, integ: "STEM: Thí nghiệm hòa tan, tạo dung dịch muối, đường." }
  ],
  4: [
    { title: "Bài 3: Hỗn hợp và dung dịch (Tiết 2)", period: 7, integ: "Phân biệt hỗn hợp đồng nhất và không đồng nhất." },
    { title: "Bài 4: Đặc điểm của chất ở trạng thái rắn, lỏng, khí. Sự biến đổi trạng thái của chất (Tiết 1)", period: 8, integ: "STEM: Thí nghiệm sự bay hơi, ngưng tụ, đông đặc của nước." }
  ],
  5: [
    { title: "Bài 4: Đặc điểm của chất ở trạng thái rắn, lỏng, khí. Sự biến đổi trạng thái của chất (Tiết 2)", period: 9 },
    { title: "Bài 5: Sự biến đổi hoá học của chất (Tiết 1)", period: 10, integ: "STEM: Thí nghiệm chanh sủi bọt, đốt giấy tạo chất mới." }
  ],
  6: [
    { title: "Bài 5: Sự biến đổi hoá học của chất (Tiết 2)", period: 11 },
    { title: "Bài 6: Ôn tập chủ đề Chất", period: 12, integ: "Hệ thống hóa kiến thức trạng thái và biến đổi của chất." }
  ],
  7: [
    { title: "Bài 7: Vai trò của năng lượng (Tiết 1)", period: 13, integ: "Năng lượng làm các vật biến đổi và vận động." },
    { title: "Bài 7: Vai trò của năng lượng (Tiết 2)", period: 14 }
  ],
  8: [
    { title: "Bài 8: Sử dụng năng lượng điện (Tiết 1)", period: 15, integ: "KNS: Sử dụng điện an toàn, tiết kiệm tại gia đình và trường học." },
    { title: "Bài 8: Sử dụng năng lượng điện (Tiết 2)", period: 16 }
  ],
  9: [
    { title: "Bài 9: Mạch điện đơn giản. Vật dẫn điện và vật cách điện (Tiết 1)", period: 17, integ: "STEM: Lắp ráp mạch điện thắp sáng bóng đèn pin." },
    { title: "Ôn tập giữa học kì I", period: 18 }
  ],
  10: [
    { title: "Bài 9: Mạch điện đơn giản. Vật dẫn điện và vật cách điện (Tiết 2)", period: 19 },
    { title: "Bài 10: Năng lượng chất đốt (Tiết 1)", period: 20, integ: "PCCC: Phòng tránh cháy nổ khi dùng bếp gas, củi, xăng dầu." }
  ],
  11: [
    { title: "Bài 10: Năng lượng chất đốt (Tiết 2)", period: 21 },
    { title: "Bài 11: Sử dụng năng lượng mặt trời, năng lượng gió, năng lượng nước chảy (Tiết 1)", period: 22, integ: "BVMT: Khám phá nguồn năng lượng xanh, tái tạo." }
  ],
  12: [
    { title: "Bài 11: Sử dụng năng lượng mặt trời, năng lượng gió, năng lượng nước chảy (Tiết 2)", period: 23 },
    { title: "Bài 11: Sử dụng năng lượng mặt trời, năng lượng gió, năng lượng nước chảy (Tiết 3)", period: 24, integ: "STEM: Thiết kế chong chóng gió phát điện mini." }
  ],
  13: [
    { title: "Bài 12: Ôn tập chủ đề Năng lượng", period: 25 },
    { title: "Bài 13: Sinh sản của thực vật có hoa (Tiết 1)", period: 26, integ: "Khám phá cấu tạo nhị và nhụy hoa." }
  ],
  14: [
    { title: "Bài 13: Sinh sản của thực vật có hoa (Tiết 2)", period: 27, integ: "Quá trình thụ phấn, thụ tinh, hình thành quả và hạt." },
    { title: "Bài 14: Sự phát triển của cây con (Tiết 1)", period: 28, integ: "Thực hành gieo hạt theo dõi mầm lớn lên." }
  ],
  15: [
    { title: "Bài 14: Sự phát triển của cây con (Tiết 2)", period: 29 },
    { title: "Bài 14: Sự phát triển của cây con (Tiết 3)", period: 30, integ: "Chăm sóc cây trồng trong vườn trường." }
  ],
  16: [
    { title: "Bài 15: Sinh sản của động vật (Tiết 1)", period: 31, integ: "Hình thức đẻ trứng và đẻ con ở động vật." },
    { title: "Bài 15: Sinh sản của động vật (Tiết 2)", period: 32 }
  ],
  17: [
    { title: "Bài 16: Vòng đời và sự phát triển của động vật (Tiết 1)", period: 33, integ: "Vòng đời của bướm, ếch, muỗi." },
    { title: "Bài 16: Vòng đời và sự phát triển của động vật (Tiết 2)", period: 34 }
  ],
  18: [
    { title: "Ôn tập cuối học kì I", period: 35 },
    { title: "Kiểm tra cuối học kì I", period: 36 }
  ]
};

export const GRADE_5_LICH_SU_DIA_LI: Record<number, Array<{ title: string; period: number; integ?: string }>> = {
  1: [
    { title: "Bài 1: Vị trí địa lí, lãnh thổ, đơn vị hành chính, Quốc kì, Quốc huy, Quốc ca (Tiết 1)", period: 1, integ: "GDQPAN: Tự hào chủ quyền lãnh thổ Việt Nam." },
    { title: "Bài 1: Vị trí địa lí, lãnh thổ, đơn vị hành chính, Quốc kì, Quốc huy, Quốc ca (Tiết 2)", period: 2 }
  ],
  2: [
    { title: "Bài 2: Thiên nhiên Việt Nam (Tiết 1: Địa hình và khoáng sản)", period: 3, integ: "Cảnh quan núi rừng và khoáng sản tài nguyên đất nước." },
    { title: "Bài 2: Thiên nhiên Việt Nam (Tiết 2: Địa hình và khoáng sản)", period: 4 }
  ],
  3: [
    { title: "Bài 2: Thiên nhiên Việt Nam (Tiết 3: Khí hậu và sông ngòi)", period: 5, integ: "BVMT: Bảo vệ nguồn nước sông Hồng, sông Mê Kông." },
    { title: "Bài 2: Thiên nhiên Việt Nam (Tiết 4: Đất và rừng)", period: 6 }
  ],
  4: [
    { title: "Bài 3: Biển, đảo Việt Nam (Tiết 1)", period: 7, integ: "GDQPAN: Khẳng định chủ quyền Hoàng Sa, Trường Sa của Việt Nam." },
    { title: "Bài 3: Biển, đảo Việt Nam (Tiết 2)", period: 8, integ: "Khai thác tài nguyên kinh tế biển gắn liền bảo vệ môi trường biển." }
  ],
  5: [
    { title: "Bài 4: Dân cư và dân tộc ở Việt Nam (Tiết 1)", period: 9, integ: "Đại gia đình 54 dân tộc anh em đoàn kết một lòng." },
    { title: "Bài 4: Dân cư và dân tộc ở Việt Nam (Tiết 2)", period: 10 }
  ],
  6: [
    { title: "Bài 4: Dân cư và dân tộc ở Việt Nam (Tiết 3)", period: 11 },
    { title: "Bài 4: Dân cư và dân tộc ở Việt Nam (Tiết 4)", period: 12 }
  ],
  7: [
    { title: "Bài 5: Nhà nước Văn Lang, Nhà nước Âu Lạc (Tiết 1)", period: 13, integ: "Truyền thuyết Hùng Vương dựng nước, An Dương Vương giữ nước." },
    { title: "Bài 5: Nhà nước Văn Lang, Nhà nước Âu Lạc (Tiết 2)", period: 14 }
  ],
  8: [
    { title: "Bài 5: Nhà nước Văn Lang, Nhà nước Âu Lạc (Tiết 3)", period: 15, integ: "Thành Cổ Loa và nỏ liên châu thần kì." },
    { title: "Bài 6: Vương quốc Phù Nam", period: 16, integ: "Nền văn hóa Óc Eo cổ xưa rực rỡ vùng Nam Bộ." }
  ],
  9: [
    { title: "Bài 7: Vương quốc Chăm-pa (Tiết 1)", period: 17, integ: "Di tích tháp Chăm và nền văn hóa Champa đặc sắc." },
    { title: "Bài 7: Vương quốc Chăm-pa (Tiết 2)", period: 18 }
  ],
  10: [
    { title: "Bài 8: Đấu tranh giành độc lập thời kì Bắc thuộc (Tiết 1)", period: 19, integ: "Khởi nghĩa Hai Bà Trưng, Bà Triệu quật khởi." },
    { title: "Bài 8: Đấu tranh giành độc lập thời kì Bắc thuộc (Tiết 2)", period: 20 }
  ],
  11: [
    { title: "Bài 8: Đấu tranh giành độc lập thời kì Bắc thuộc (Tiết 3)", period: 21, integ: "Chiến thắng Bạch Đằng năm 938 của Ngô Quyền." },
    { title: "Bài 9: Triều Lý và việc định đô ở Thăng Long (Tiết 1)", period: 22, integ: "Chiếu dời đô năm 1010 của vua Lý Thái Tổ." }
  ],
  12: [
    { title: "Bài 9: Triều Lý và việc định đô ở Thăng Long (Tiết 2)", period: 23, integ: "Chùa Một Cột, Quốc Tử Giám - trường đại học đầu tiên." },
    { title: "Bài 9: Triều Lý và việc định đô ở Thăng Long (Tiết 3)", period: 24 }
  ],
  13: [
    { title: "Bài 10: Triều Trần xây dựng đất nước và kháng chiến chống quân Mông – Nguyên xâm lược (Tiết 1)", period: 25, integ: "Ba lần chiến thắng oanh liệt quân Mông - Nguyên." },
    { title: "Bài 10: Triều Trần xây dựng đất nước và kháng chiến chống quân Mông – Nguyên xâm lược (Tiết 2)", period: 26, integ: "Hội nghị Diên Hồng và Hào khí Đông A rạng ngời." }
  ],
  14: [
    { title: "Bài 10: Triều Trần xây dựng đất nước và kháng chiến chống quân Mông – Nguyên xâm lược (Tiết 3)", period: 27 },
    { title: "Bài 10: Triều Trần xây dựng đất nước và kháng chiến chống quân Mông – Nguyên xâm lược (Tiết 4)", period: 28 }
  ],
  15: [
    { title: "Bài 11: Ôn tập (Tiết 1)", period: 29 },
    { title: "Bài 11: Ôn tập (Tiết 2)", period: 30 }
  ],
  16: [
    { title: "Bài 12: Khởi nghĩa Lam Sơn và Triều Hậu Lê (Tiết 1)", period: 31, integ: "Lê Lợi lãnh đạo khởi nghĩa Lam Sơn toàn thắng." },
    { title: "Bài 12: Khởi nghĩa Lam Sơn và Triều Hậu Lê (Tiết 2)", period: 32 }
  ],
  17: [
    { title: "Bài 12: Khởi nghĩa Lam Sơn và Triều Hậu Lê (Tiết 3)", period: 33, integ: "Bộ luật Hồng Đức tiến bộ thời vua Lê Thánh Tông." },
    { title: "Bài 13: Triều Nguyễn (Tiết 1)", period: 34, integ: "Kinh thành Huế - Di sản văn hóa thế giới UNESCO." }
  ],
  18: [
    { title: "Ôn tập cuối kì I", period: 35 },
    { title: "Kiểm tra và đánh giá cuối học kì I", period: 36 }
  ]
};

export const GRADE_5_DAO_DUC: Record<number, { title: string; period: number; integ?: string }> = {
  1: { title: "Bài 1: Biết ơn những người có công với quê hương, đất nước (Tiết 1)", period: 1, integ: "Đạo lí uống nước nhớ nguồn, đền ơn đáp nghĩa." },
  2: { title: "Bài 1: Biết ơn những người có công với quê hương, đất nước (Tiết 2)", period: 2 },
  3: { title: "Bài 1: Biết ơn những người có công với quê hương, đất nước (Tiết 3)", period: 3 },
  4: { title: "Bài 1: Biết ơn những người có công với quê hương, đất nước (Tiết 4)", period: 4, integ: "Tri ân các anh hùng liệt sĩ, thương bệnh binh, Mẹ Việt Nam anh hùng." },
  5: { title: "Bài 2: Tôn trọng sự khác biệt của người khác (Tiết 1)", period: 5, integ: "QCN: Quyền bình đẳng, không phân biệt đối xử vùng miền, hoàn cảnh." },
  6: { title: "Bài 2: Tôn trọng sự khác biệt của người khác (Tiết 2)", period: 6 },
  7: { title: "Bài 2: Tôn trọng sự khác biệt của người khác (Tiết 3)", period: 7 },
  8: { title: "Bài 3: Vượt qua khó khăn (Tiết 1)", period: 8, integ: "Rèn luyện ý chí, bản lĩnh vượt khó trong cuộc sống." },
  9: { title: "Ôn tập tổng hợp giữa học kì I", period: 9 },
  10: { title: "Bài 3: Vượt qua khó khăn (Tiết 2)", period: 10 },
  11: { title: "Bài 3: Vượt qua khó khăn (Tiết 3)", period: 11 },
  12: { title: "Bài 3: Vượt qua khó khăn (Tiết 4)", period: 12 },
  13: { title: "Bài 4: Bảo vệ cái đúng, cái tốt (Tiết 1)", period: 13, integ: "Dũng cảm bênh vực lẽ phải, bài trừ thói xấu." },
  14: { title: "Bài 4: Bảo vệ cái đúng, cái tốt (Tiết 2)", period: 14 },
  15: { title: "Bài 4: Bảo vệ cái đúng, cái tốt (Tiết 3)", period: 15 },
  16: { title: "Bài 5: Bảo vệ môi trường sống (Tiết 1)", period: 16, integ: "BVMT: Giữ gìn nguồn nước, không khí, giảm thiểu rác thải nhựa." },
  17: { title: "Ôn tập tổng hợp cuối học kì I", period: 17 },
  18: { title: "Bài 5: Bảo vệ môi trường sống (Tiết 2)", period: 18 }
};

export const GRADE_5_CONG_NGHE: Record<number, { title: string; period: number; integ?: string }> = {
  1: { title: "Bài 1: Vai trò của công nghệ (Tiết 1)", period: 1, integ: "Công nghệ nâng cao chất lượng cuộc sống con người." },
  2: { title: "Bài 1: Vai trò của công nghệ (Tiết 2)", period: 2 },
  3: { title: "Bài 2: Nhà sáng chế (Tiết 1)", period: 3, integ: "Tìm hiểu phát minh của Thomas Edison, James Watt." },
  4: { title: "Bài 2: Nhà sáng chế (Tiết 2)", period: 4, integ: "Đặc điểm và phẩm chất của những nhà sáng chế kiệt xuất." },
  5: { title: "Bài 2: Nhà sáng chế (Tiết 3)", period: 5 },
  6: { title: "Bài 2: Nhà sáng chế (Tiết 4)", period: 6, integ: "STEM: Tập làm nhà sáng chế nhí giải quyết vấn đề đời sống." },
  7: { title: "Bài 3: Tìm hiểu thiết kế (Tiết 1)", period: 7, integ: "Quy trình thiết kế kỹ thuật từ ý tưởng đến sản phẩm." },
  8: { title: "Bài 3: Tìm hiểu thiết kế (Tiết 2)", period: 8 },
  9: { title: "Bài 4: Thiết kế sản phẩm (Tiết 1)", period: 9, integ: "Lên bản vẽ phác thảo sản phẩm đơn giản." },
  10: { title: "Bài 4: Thiết kế sản phẩm (Tiết 2)", period: 10 },
  11: { title: "Bài 4: Thiết kế sản phẩm (Tiết 3)", period: 11 },
  12: { title: "Bài 4: Thiết kế sản phẩm (Tiết 4)", period: 12, integ: "Hoàn thiện và đánh giá sản phẩm thiết kế." },
  13: { title: "Bài 5: Sử dụng điện thoại (Tiết 1)", period: 13, integ: "Kĩ năng gọi điện thoại khẩn cấp 111, 113, 114, 115." },
  14: { title: "Bài 5: Sử dụng điện thoại (Tiết 2)", period: 14, integ: "Giao tiếp lịch sự, văn minh khi nghe gọi điện thoại." },
  15: { title: "Bài 5: Sử dụng điện thoại (Tiết 3)", period: 15, integ: "Bảo vệ mắt và sức khỏe khi sử dụng thiết bị di động." },
  16: { title: "Bài 5: Sử dụng điện thoại (Tiết 4)", period: 16, integ: "NLS: An toàn thông tin và phòng tránh lừa đảo qua mạng." },
  17: { title: "Ôn tập cuối học kì I", period: 17 },
  18: { title: "Kiểm tra định kỳ cuối kì I", period: 18 }
};

export const GRADE_5_HDTN: Record<number, Array<{ title: string; period: number; integ?: string }>> = {
  1: [
    { title: "Sinh hoạt dưới cờ: CHÀO NĂM HỌC MỚI", period: 1 },
    { title: "HĐGDCĐ: CHÚNG MÌNH ĐÃ LỚN", period: 2 },
    { title: "Sinh hoạt lớp: BẬC THANG TRƯỞNG THÀNH", period: 3 }
  ],
  2: [
    { title: "Sinh hoạt dưới cờ: NGÀY HỘI CÂU LẠC BỘ", period: 4 },
    { title: "HĐGDCĐ: TỪNG BƯỚC TRƯỞNG THÀNH", period: 5 },
    { title: "Sinh hoạt lớp: TIẾN BỘ TRONG VIỆC NHÀ", period: 6 }
  ],
  3: [
    { title: "Sinh hoạt dưới cờ: HOẠT ĐỘNG VUI TRUNG THU", period: 7 },
    { title: "HĐGDCĐ: NIỀM VUI NHÂN ĐÔI, NỖI BUỒN CHIA NỬA", period: 8 },
    { title: "Sinh hoạt lớp: CÂN BẰNG CẢM XÚC", period: 9 }
  ],
  4: [
    { title: "Sinh hoạt dưới cờ: THỰC HÀNH CÂN BẰNG CẢM XÚC", period: 10, integ: "KNS: Phương pháp hít thở sâu, giữ bình tĩnh khi tức giận." },
    { title: "HĐGDCĐ: SỰ TRƯỞNG THÀNH CỦA HỌC SINH LỚP 5", period: 11, integ: "Tác phong chững chạc, gương mẫu của học sinh cuối cấp." },
    { title: "Sinh hoạt lớp: THỂ HIỆN CẢM XÚC PHÙ HỢP", period: 12, integ: "Ứng xử lịch thiệp, đồng cảm với bạn bè xung quanh." }
  ],
  5: [
    { title: "Sinh hoạt dưới cờ: VUI TRUNG THU CÙNG BẠN", period: 13 },
    { title: "HĐGDCĐ: CÁC VẤN ĐỀ NẢY SINH TRONG MỐI QUAN HỆ BẠN BÈ VÀ CÁCH GIẢI QUYẾT", period: 14, integ: "KNS: Giải quyết bất đồng hòa giải, không bạo lực." },
    { title: "Sinh hoạt lớp: THỰC HÀNH GIẢI QUYẾT VẤN ĐỀ NẢY SINH TRONG TÌNH BẠN", period: 15 }
  ],
  6: [
    { title: "Sinh hoạt dưới cờ: SÁCH BÚT ĐỒNG HÀNH CÙNG EM", period: 16 },
    { title: "HĐGDCĐ: NHỮNG VẤN ĐỀ NẢY SINH GIỮA TÌNH BẠN TRONG HỌC TẬP VÀ RÈN LUYỆN", period: 17 },
    { title: "Sinh hoạt lớp: HỢP TÁC ĐỂ THỰC HIỆN SẢN PHẨM CHUNG", period: 18, integ: "Kĩ năng làm việc nhóm hiệu quả." }
  ],
  7: [
    { title: "Sinh hoạt dưới cờ: NGÀY HỘI TRAO ĐỔI SÁCH", period: 19 },
    { title: "HĐGDCĐ: GIỮ GÌN TÌNH BẠN", period: 20 },
    { title: "Sinh hoạt lớp: NUÔI DƯỠNG TÌNH BẠN", period: 21 }
  ],
  8: [
    { title: "Sinh hoạt dưới cờ: TRÒ CHUYỆN VỀ CHỦ ĐỀ KHOA HỌC SÁNG TẠO", period: 22 },
    { title: "HĐGDCĐ: KẾ HOẠCH HOẠT ĐỘNG CÙNG LÀM NÊN KỈ NIỆM", period: 23 },
    { title: "Sinh hoạt lớp: CÙNG LÀM NÊN KỈ NIỆM", period: 24 }
  ],
  9: [
    { title: "Sinh hoạt dưới cờ: PHÁT ĐỘNG TỔ CHỨC SỰ KIỆN VỀ TRUYỀN THỐNG TÔN SƯ TRỌNG ĐẠO", period: 25 },
    { title: "HĐGDCĐ: SỰ KIỆN VỀ TRUYỀN THỐNG TÔN SƯ TRỌNG ĐẠO", period: 26 },
    { title: "Sinh hoạt lớp: GIỚI THIỆU VỀ TRUYỀN THỐNG NHÀ TRƯỜNG", period: 27 }
  ],
  10: [
    { title: "Sinh hoạt dưới cờ: CÁC TRUYỀN THỐNG CỦA NHÀ TRƯỜNG", period: 28 },
    { title: "HĐGDCĐ: TÂM SỰ THẦY - TRÒ", period: 29 },
    { title: "Sinh hoạt lớp: GIẢI QUYẾT MỘT SỐ VẤN ĐỀ NẢY SINH TRONG MỐI QUAN HỆ THẦY TRÒ", period: 30 }
  ],
  11: [
    { title: "Sinh hoạt dưới cờ: VĂN NGHỆ VỀ CHỦ ĐỀ TÌNH THẦY TRÒ", period: 31 },
    { title: "HĐGDCĐ: VUN ĐẮP TÌNH THẦY TRÒ", period: 32 },
    { title: "Sinh hoạt lớp: SẢN PHẨM TRI ÂN THẦY CÔ", period: 33 }
  ],
  12: [
    { title: "Sinh hoạt dưới cờ: LỄ KỈ NIỆM NGÀY NHÀ GIÁO VIỆT NAM 20-11", period: 34 },
    { title: "HĐGDCĐ: CHUẨN BỊ CHÀO MỪNG NGÀY NHÀ GIÁO VIỆT NAM 20-11", period: 35 },
    { title: "Sinh hoạt lớp: CHÀO MỪNG NGÀY NHÀ GIÁO VIỆT NAM 20-11", period: 36 }
  ],
  13: [
    { title: "Sinh hoạt dưới cờ: CHỦ ĐỘNG THAM GIA CHI TIÊU TIẾT KIỆM", period: 37 },
    { title: "HĐGDCĐ: SỔ TAY GHI CHÉP CHI TIÊU TRONG GIA ĐÌNH", period: 38 },
    { title: "Sinh hoạt lớp: GHI CHÉP CHI TIÊU", period: 39 }
  ],
  14: [
    { title: "Sinh hoạt dưới cờ: PHÁT TRIỂN THƯ VIỆN", period: 40 },
    { title: "HĐGDCĐ: Ý TƯỞNG KINH DOANH", period: 41 },
    { title: "Sinh hoạt lớp: THỰC HIỆN KHẢO SÁT NHU CẦU KHÁCH HÀNG", period: 42 }
  ],
  15: [
    { title: "Sinh hoạt dưới cờ: CHÀO MỪNG NGÀY THÀNH LẬP QUÂN ĐỘI NHÂN DÂN VIỆT NAM 22-12", period: 43 },
    { title: "HĐGDCĐ: VIỆC CẦN LÀM ĐỂ THỰC HIỆN KẾ HOẠCH KINH DOANH", period: 44 },
    { title: "Sinh hoạt lớp: KINH DOANH HIỆU QUẢ", period: 45 }
  ],
  16: [
    { title: "Sinh hoạt dưới cờ: XÂY DỰNG QUỸ NHÂN ÁI", period: 46 },
    { title: "HĐGDCĐ: XÂY DỰNG KẾ HOẠCH KINH DOANH", period: 47 },
    { title: "Sinh hoạt lớp: KẾ HOẠCH KINH DOANH CỦA LỚP", period: 48 }
  ],
  17: [
    { title: "Sinh hoạt dưới cờ: GIA ĐÌNH YÊU THƯƠNG", period: 49 },
    { title: "HĐGDCĐ: TRÁCH NHIỆM CỦA EM TRONG GIA ĐÌNH", period: 50 },
    { title: "Sinh hoạt lớp: NHỮNG VIỆC LÀM GÂY LÃNG PHÍ TRONG CUỘC SỐNG HẰNG NGÀY", period: 51 }
  ],
  18: [
    { title: "Sinh hoạt dưới cờ: LÒNG BIẾT ƠN", period: 52 },
    { title: "HĐGDCĐ: BIẾT ƠN NGƯỜI THÂN TRONG GIA ĐÌNH", period: 53 },
    { title: "Sinh hoạt lớp: THỂ HIỆN LÒNG BIẾT ƠN VỚI NGƯỜI THÂN", period: 54 }
  ]
};

export const GRADE_5_GDTC: Record<number, Array<{ title: string; period: number }>> = {
  1: [{ title: "Bài 1: Bài tập phối hợp đội hình đội ngũ (Tiết 1)", period: 1 }, { title: "Bài 1: Bài tập phối hợp đội hình đội ngũ (Tiết 2)", period: 2 }],
  2: [{ title: "Bài 1: Bài tập phối hợp đội hình đội ngũ (Tiết 3)", period: 3 }, { title: "Bài 1: Bài tập phối hợp đội hình đội ngũ (Tiết 4)", period: 4 }],
  3: [{ title: "Bài 2: Bài tập phối hợp biến đổi đội hình (Tiết 1)", period: 5 }, { title: "Bài 2: Bài tập phối hợp biến đổi đội hình (Tiết 2)", period: 6 }],
  4: [{ title: "Bài 2: Bài tập phối hợp biến đổi đội hình (Tiết 3)", period: 7 }, { title: "Bài 2: Bài tập phối hợp biến đổi đội hình (Tiết 4)", period: 8 }],
  5: [{ title: "Bài 2: Bài tập phối hợp biến đổi đội hình (Tiết 5)", period: 9 }, { title: "Bài 2: Bài tập phối hợp biến đổi đội hình (Tiết 6)", period: 10 }],
  6: [{ title: "Bài 3: Bài tập phối hợp đi đều vòng các hướng (Tiết 1)", period: 11 }, { title: "Bài 3: Bài tập phối hợp đi đều vòng các hướng (Tiết 2)", period: 12 }],
  7: [{ title: "Bài 3: Bài tập phối hợp đi đều vòng các hướng (Tiết 3)", period: 13 }, { title: "Bài 3: Bài tập phối hợp đi đều vòng các hướng (Tiết 4)", period: 14 }],
  8: [{ title: "Bài 1: Động tác vươn thở, động tác tay, động tác chân với gậy (Tiết 1)", period: 15 }, { title: "Bài 1: Động tác vươn thở, động tác tay, động tác chân với gậy (Tiết 2)", period: 16 }],
  9: [{ title: "Bài 2: Động tác bụng, động tác vặn mình, động tác toàn thân với gậy (Tiết 1)", period: 17 }, { title: "Bài 2: Động tác bụng, động tác vặn mình, động tác toàn thân với gậy (Tiết 2)", period: 18 }],
  10: [{ title: "Bài 2: Động tác bụng, động tác vặn mình, động tác toàn thân với gậy (Tiết 3)", period: 19 }, { title: "Bài 3: Động tác nhảy và động tác điều hòa với gậy (Tiết 1)", period: 20 }],
  11: [{ title: "Bài 3: Động tác nhảy và động tác điều hòa với gậy (Tiết 2)", period: 21 }, { title: "Hoàn thiện bài thể dục phát triển chung với gậy (Tiết 1)", period: 22 }],
  12: [{ title: "Hoàn thiện bài thể dục phát triển chung với gậy (Tiết 2)", period: 23 }, { title: "Ôn bài thể dục phát triển chung với gậy", period: 24 }],
  13: [{ title: "Bài 1: Bài tập rèn luyện kĩ năng lăn (Tiết 1)", period: 25 }, { title: "Bài 1: Bài tập rèn luyện kĩ năng lăn (Tiết 2)", period: 26 }],
  14: [{ title: "Bài 1: Bài tập rèn luyện kĩ năng lăn (Tiết 3)", period: 27 }, { title: "Bài 1: Bài tập rèn luyện kĩ năng lăn (Tiết 4)", period: 28 }],
  15: [{ title: "Bài 1: Bài tập rèn luyện kĩ năng lăn (Tiết 5)", period: 29 }, { title: "Bài 1: Bài tập rèn luyện kĩ năng lăn (Tiết 6)", period: 30 }],
  16: [{ title: "Bài 2: Bài tập rèn luyện kĩ năng lộn xuôi (Tiết 1)", period: 31 }, { title: "Bài 2: Bài tập rèn luyện kĩ năng lộn xuôi (Tiết 2)", period: 32 }],
  17: [{ title: "Bài 2: Bài tập rèn luyện kĩ năng lộn xuôi (Tiết 3)", period: 33 }, { title: "Bài 2: Bài tập rèn luyện kĩ năng lộn xuôi (Tiết 4)", period: 34 }],
  18: [{ title: "Ôn tập và đánh giá học kì 1", period: 35 }, { title: "Sơ kết đánh giá học kì 1", period: 36 }]
};

export const GRADE_5_CURRICULUM_DATA: Record<string, (week: number, p: number) => LessonInfo> = {
  "tiếng việt": (week: number, p: number) => {
    const list = GRADE_5_TIENG_VIET[week];
    if (list && list[p - 1]) {
      const item = list[p - 1];
      return {
        lessonTitle: item.title,
        subSubject: item.sub,
        curriculumPeriod: item.period,
        integrationNotes: item.integ || "Chuẩn kiến thức kĩ năng Tiếng Việt 5 GDPT 2018."
      };
    }
    return {
      lessonTitle: `Tiếng Việt 5 - Tuần ${week} (Tiết ${p})`,
      subSubject: p % 2 === 1 ? "Đọc" : "Viết",
      curriculumPeriod: (week - 1) * 7 + p,
      integrationNotes: "Tiếng Việt lớp 5 GDPT 2018."
    };
  },

  "toán": (week: number, p: number) => {
    const list = GRADE_5_TOAN[week];
    if (list && list[p - 1]) {
      const item = list[p - 1];
      return {
        lessonTitle: item.title,
        curriculumPeriod: item.period,
        integrationNotes: item.integ || "Toán học ứng dụng và tư duy phân số, số thập phân."
      };
    }
    return {
      lessonTitle: `Toán 5 - Tuần ${week} (Tiết ${p})`,
      curriculumPeriod: (week - 1) * 5 + p,
      integrationNotes: "Toán lớp 5 GDPT 2018."
    };
  },

  "khoa học": (week: number, p: number) => {
    const list = GRADE_5_KHOA_HOC[week];
    if (list && list[p - 1]) {
      const item = list[p - 1];
      return {
        lessonTitle: item.title,
        curriculumPeriod: item.period,
        integrationNotes: item.integ || "Khám phá khoa học tự nhiên lớp 5."
      };
    }
    return {
      lessonTitle: `Khoa học 5 - Tuần ${week} (Tiết ${p})`,
      curriculumPeriod: (week - 1) * 2 + p,
      integrationNotes: "Khoa học lớp 5 GDPT 2018."
    };
  },

  "lịch sử và địa lí": (week: number, p: number) => {
    const list = GRADE_5_LICH_SU_DIA_LI[week];
    if (list && list[p - 1]) {
      const item = list[p - 1];
      return {
        lessonTitle: item.title,
        curriculumPeriod: item.period,
        integrationNotes: item.integ || "Lịch sử hào hùng và địa lí Việt Nam."
      };
    }
    return {
      lessonTitle: `Lịch sử & Địa lí 5 - Tuần ${week} (Tiết ${p})`,
      curriculumPeriod: (week - 1) * 2 + p,
      integrationNotes: "Lịch sử & Địa lí lớp 5 GDPT 2018."
    };
  },

  "đạo đức": (week: number) => {
    const item = GRADE_5_DAO_DUC[week];
    if (item) {
      return {
        lessonTitle: item.title,
        curriculumPeriod: item.period,
        integrationNotes: item.integ || "Bồi dưỡng phẩm chất công dân."
      };
    }
    return {
      lessonTitle: `Đạo đức 5 - Tuần ${week}`,
      curriculumPeriod: week,
      integrationNotes: "Đạo đức 5 GDPT 2018."
    };
  },

  "công nghệ": (week: number) => {
    const item = GRADE_5_CONG_NGHE[week];
    if (item) {
      return {
        lessonTitle: item.title,
        curriculumPeriod: item.period,
        integrationNotes: item.integ || "Công nghệ và đời sống lớp 5."
      };
    }
    return {
      lessonTitle: `Công nghệ 5 - Tuần ${week}`,
      curriculumPeriod: week,
      integrationNotes: "Công nghệ lớp 5 GDPT 2018."
    };
  },

  "hoạt động trải nghiệm": (week: number, p: number) => {
    const list = GRADE_5_HDTN[week];
    if (list && list[p - 1]) {
      const item = list[p - 1];
      return {
        lessonTitle: item.title,
        curriculumPeriod: item.period,
        integrationNotes: item.integ || "Hoạt động trải nghiệm sáng tạo và rèn kỹ năng sống."
      };
    }
    return {
      lessonTitle: p === 1 ? `SHDC Tuần ${week}` : p === 2 ? `HĐGDCĐ Tuần ${week}` : `Sinh hoạt lớp Tuần ${week}`,
      curriculumPeriod: (week - 1) * 3 + p,
      integrationNotes: "Hoạt động trải nghiệm lớp 5 GDPT 2018."
    };
  },

  "giáo dục thể chất": (week: number, p: number) => {
    const list = GRADE_5_GDTC[week];
    if (list && list[p - 1]) {
      const item = list[p - 1];
      return {
        lessonTitle: item.title,
        curriculumPeriod: item.period,
        integrationNotes: "Tích hợp rèn luyện thể lực và tác phong nhanh nhẹn."
      };
    }
    return {
      lessonTitle: `Giáo dục thể chất 5 - Tuần ${week} (Tiết ${p})`,
      curriculumPeriod: (week - 1) * 2 + p,
      integrationNotes: "Giáo dục thể chất lớp 5."
    };
  }
};
