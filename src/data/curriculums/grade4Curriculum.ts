import { LessonInfo } from "../gradeCurriculums";

// ============================================================================
// KẾ HOẠCH DẠY HỌC KHỐI 4 - CHÍNH THỨC NĂM HỌC 2024-2025 (KẾT NỐI TRI THỨC)
// ============================================================================

export const GRADE_4_TIENG_VIET: Record<number, Array<{ title: string; sub: string; period: number; integ?: string }>> = {
  1: [
    { title: "Bài 1: Điều kì diệu (Tiết 1)", sub: "Đọc", period: 1, integ: "Khám phá nét riêng độc đáo của mỗi cá nhân." },
    { title: "Bài 1: Điều kì diệu (Tiết 2: LTVC: Danh từ)", sub: "Luyện từ và câu", period: 2 },
    { title: "Bài 1: Điều kì diệu (Tiết 3: Viết: Tìm hiểu đoạn văn và câu chủ đề)", sub: "Viết", period: 3 },
    { title: "Bài 2: Thi nhạc (Tiết 1)", sub: "Đọc", period: 4 },
    { title: "Bài 2: Thi nhạc (Tiết 2)", sub: "Đọc", period: 5 },
    { title: "Bài 2: Thi nhạc (Tiết 3: Viết: Tìm hiểu cách viết đoạn văn nêu ý kiến)", sub: "Viết", period: 6 },
    { title: "Bài 2: Thi nhạc (Tiết 4: Đọc mở rộng)", sub: "Đọc mở rộng", period: 7 }
  ],
  2: [
    { title: "Bài 3: Anh em sinh đôi (Tiết 1)", sub: "Đọc", period: 8 },
    { title: "Bài 3: Anh em sinh đôi (Tiết 2: LTVC: Danh từ chung, danh từ riêng)", sub: "Luyện từ và câu", period: 9 },
    { title: "Bài 3: Anh em sinh đôi (Tiết 3: Viết: Tìm ý cho đoạn văn nêu ý kiến)", sub: "Viết", period: 10 },
    { title: "Bài 4: Công chúa và người hạt đậu (Tiết 1)", sub: "Đọc", period: 11 },
    { title: "Bài 4: Công chúa và người hạt đậu (Tiết 2)", sub: "Đọc", period: 12 },
    { title: "Bài 4: Công chúa và người hạt đậu (Tiết 3: Viết: Viết đoạn văn nêu ý kiến)", sub: "Viết", period: 13 },
    { title: "Bài 4: Công chúa và người hạt đậu (Tiết 4: Nói và nghe: Kể chuyện)", sub: "Nói và nghe", period: 14 }
  ],
  3: [
    { title: "Bài 5: Thằn lằn xanh và tắc kè (Tiết 1)", sub: "Đọc", period: 15 },
    { title: "Bài 5: Thằn lằn xanh và tắc kè (Tiết 2: LTVC: Luyện tập về danh từ)", sub: "Luyện từ và câu", period: 16 },
    { title: "Bài 5: Thằn lằn xanh và tắc kè (Tiết 3: Viết: Đánh giá, chỉnh sửa đoạn văn nêu ý kiến)", sub: "Viết", period: 17 },
    { title: "Bài 6: Nghệ sĩ trống (Tiết 1)", sub: "Đọc", period: 18 },
    { title: "Bài 6: Nghệ sĩ trống (Tiết 2)", sub: "Đọc", period: 19 },
    { title: "Bài 6: Nghệ sĩ trống (Tiết 3: Viết: Tìm hiểu cách viết đoạn văn tưởng tượng)", sub: "Viết", period: 20 },
    { title: "Bài 6: Nghệ sĩ trống (Tiết 4: Đọc mở rộng)", sub: "Đọc mở rộng", period: 21 }
  ],
  4: [
    { title: "Bài 7: Những bức chân dung (Tiết 1)", sub: "Đọc", period: 22, integ: "Tôn trọng sự đa dạng, không áp đặt hình mẫu lên người khác." },
    { title: "Bài 7: Những bức chân dung (Tiết 2: LTVC: Quy tắc viết tên cơ quan, tổ chức)", sub: "Luyện từ và câu", period: 23, integ: "Quy tắc viết hoa danh từ riêng chuẩn ngữ pháp." },
    { title: "Bài 7: Những bức chân dung (Tiết 3: Viết: Lập dàn ý cho đoạn văn tưởng tượng)", sub: "Viết", period: 24, integ: "Phát huy trí tưởng tượng phong phú của học sinh." },
    { title: "Bài 8: Đò ngang (Tiết 1)", sub: "Đọc", period: 25, integ: "Cảm nhận giá trị lao động thầm lặng, bình dị." },
    { title: "Bài 8: Đò ngang (Tiết 2)", sub: "Đọc", period: 26 },
    { title: "Bài 8: Đò ngang (Tiết 3: Viết: Viết đoạn văn tưởng tượng)", sub: "Viết", period: 27 },
    { title: "Bài 8: Đò ngang (Tiết 4: Nói và nghe: Kể chuyện bốn mùa)", sub: "Nói và nghe", period: 28, integ: "KNS: Diễn đạt lưu loát trước tập thể." }
  ],
  5: [
    { title: "Bài 9: Bầu trời trong quả trứng (Tiết 1)", sub: "Đọc", period: 29, integ: "Cảm nhận tình mẫu tử và điều kì diệu của sự sống." },
    { title: "Bài 9: Bầu trời trong quả trứng (Tiết 2: LTVC: Động từ)", sub: "Luyện từ và câu", period: 30, integ: "Nhận biết các từ chỉ hoạt động, trạng thái." },
    { title: "Bài 9: Bầu trời trong quả trứng (Tiết 3: Viết: Tìm hiểu cách viết đoạn văn tưởng tượng (tiếp theo))", sub: "Viết", period: 31 },
    { title: "Bài 10: Tiếng nói của cỏ cây (Tiết 1)", sub: "Đọc", period: 32, integ: "BVMT: Tình yêu thiên nhiên, lắng nghe sự sống quanh mình." },
    { title: "Bài 10: Tiếng nói của cỏ cây (Tiết 2)", sub: "Đọc", period: 33 },
    { title: "Bài 10: Tiếng nói của cỏ cây (Tiết 3: Viết: Đánh giá, chỉnh sửa đoạn văn tưởng tượng)", sub: "Viết", period: 34 },
    { title: "Bài 10: Tiếng nói của cỏ cây (Tiết 4: Đọc mở rộng)", sub: "Đọc mở rộng", period: 35 }
  ],
  6: [
    { title: "Bài 11: Tập làm văn (Tiết 1)", sub: "Đọc", period: 36, integ: "Tính trung thực và tinh thần tự giác trong học tập." },
    { title: "Bài 11: Tập làm văn (Tiết 2: LTVC: Luyện tập về động từ)", sub: "Luyện từ và câu", period: 37 },
    { title: "Bài 11: Tập làm văn (Tiết 3: Viết: Lập dàn ý cho bài văn thuật lại một sự việc)", sub: "Viết", period: 38 },
    { title: "Bài 12: Nhà phát minh 6 tuổi (Tiết 1)", sub: "Đọc", period: 39, integ: "Khơi dậy tính tò mò, khám phá khoa học từ nhỏ." },
    { title: "Bài 12: Nhà phát minh 6 tuổi (Tiết 2)", sub: "Đọc", period: 40 },
    { title: "Bài 12: Nhà phát minh 6 tuổi (Tiết 3: Viết: Viết bài văn thuật lại một sự việc)", sub: "Viết", period: 41 },
    { title: "Bài 12: Nhà phát minh 6 tuổi (Tiết 4: Nói và nghe: Ước mơ của em)", sub: "Nói và nghe", period: 42, integ: "KNS: Tự tin chia sẻ ước mơ nghề nghiệp tương lai." }
  ],
  7: [
    { title: "Bài 13: Con vẹt xanh (Tiết 1)", sub: "Đọc", period: 43, integ: "Tình thương yêu và bảo vệ động vật nuôi trong nhà." },
    { title: "Bài 13: Con vẹt xanh (Tiết 2: LTVC: Luyện tập về động từ (tiếp theo))", sub: "Luyện từ và câu", period: 44 },
    { title: "Bài 13: Con vẹt xanh (Tiết 3: Viết: Đánh giá, chỉnh sửa bài văn thuật lại một sự việc)", sub: "Viết", period: 45 },
    { title: "Bài 14: Chân trời cuối phố (Tiết 1)", sub: "Đọc", period: 46, integ: "Tình cảm bạn bè gắn bó và khao khát tìm hiểu thế giới." },
    { title: "Bài 14: Chân trời cuối phố (Tiết 2)", sub: "Đọc", period: 47 },
    { title: "Bài 14: Chân trời cuối phố (Tiết 3: Viết: Tìm hiểu cách viết bài văn thuật lại một sự việc)", sub: "Viết", period: 48 },
    { title: "Bài 14: Chân trời cuối phố (Tiết 4: Đọc mở rộng)", sub: "Đọc mở rộng", period: 49 }
  ],
  8: [
    { title: "Bài 15: Gặt chữ trên non (Tiết 1)", sub: "Đọc", period: 50, integ: "Nghị lực đến trường vượt khó của trẻ em vùng cao Tây Bắc." },
    { title: "Bài 15: Gặt chữ trên non (Tiết 2: LTVC: Tính từ)", sub: "Luyện từ và câu", period: 51, integ: "Nhận biết từ chỉ đặc điểm, tính chất của sự vật." },
    { title: "Bài 15: Gặt chữ trên non (Tiết 3: Viết: Viết đoạn văn thuật lại một sự việc)", sub: "Viết", period: 52 },
    { title: "Bài 16: Trước ngày xa quê (Tiết 1)", sub: "Đọc", period: 53, integ: "Tình yêu quê hương xứ sở da diết, chân thành." },
    { title: "Bài 16: Trước ngày xa quê (Tiết 2)", sub: "Đọc", period: 54 },
    { title: "Bài 16: Trước ngày xa quê (Tiết 3: Viết: Lập dàn ý bài văn thuật lại sự việc được chứng kiến)", sub: "Viết", period: 55 },
    { title: "Bài 16: Trước ngày xa quê (Tiết 4: Nói và nghe: Chia sẻ về chuyến đi)", sub: "Nói và nghe", period: 56 }
  ],
  9: [
    { title: "Ôn tập giữa học kì I (Tiết 1)", sub: "Ôn tập", period: 57 },
    { title: "Ôn tập giữa học kì I (Tiết 2)", sub: "Ôn tập", period: 58 },
    { title: "Ôn tập giữa học kì I (Tiết 3)", sub: "Ôn tập", period: 59 },
    { title: "Ôn tập giữa học kì I (Tiết 4)", sub: "Ôn tập", period: 60 },
    { title: "Ôn tập giữa học kì I (Tiết 5)", sub: "Ôn tập", period: 61 },
    { title: "Đánh giá định kì giữa học kì I (Tiết 6: Kĩ năng Đọc)", sub: "Kiểm tra", period: 62 },
    { title: "Đánh giá định kì giữa học kì I (Tiết 7: Kĩ năng Viết)", sub: "Kiểm tra", period: 63 }
  ],
  10: [
    { title: "Bài 17: Vẽ màu (Tiết 1)", sub: "Đọc", period: 64, integ: "Vẻ đẹp sắc màu cuộc sống và tình cảm gia đình." },
    { title: "Bài 17: Vẽ màu (Tiết 2: LTVC: Luyện tập về tính từ)", sub: "Luyện từ và câu", period: 65 },
    { title: "Bài 17: Vẽ màu (Tiết 3: Viết: Tìm hiểu cách viết bài văn miêu tả con vật)", sub: "Viết", period: 66 },
    { title: "Bài 18: Đồng cỏ nở hoa (Tiết 1)", sub: "Đọc", period: 67, integ: "Tình yêu nghệ thuật hội họa và đồng quê tươi đẹp." },
    { title: "Bài 18: Đồng cỏ nở hoa (Tiết 2)", sub: "Đọc", period: 68 },
    { title: "Bài 18: Đồng cỏ nở hoa (Tiết 3: Viết: Quan sát con vật)", sub: "Viết", period: 69, integ: "Kĩ năng ghi chép các nét đặc trưng của thú cưng." },
    { title: "Bài 18: Đồng cỏ nở hoa (Tiết 4: Đọc mở rộng)", sub: "Đọc mở rộng", period: 70 }
  ],
  11: [
    { title: "Bài 19: Thanh âm của núi rừng (Tiết 1)", sub: "Đọc", period: 71, integ: "Bản sắc văn hóa các dân tộc Tây Nguyên hào sảng." },
    { title: "Bài 19: Thanh âm của núi rừng (Tiết 2: LTVC: Luyện tập về tính từ (tiếp theo))", sub: "Luyện từ và câu", period: 72 },
    { title: "Bài 19: Thanh âm của núi rừng (Tiết 3: Viết: Lập dàn ý cho bài văn miêu tả con vật)", sub: "Viết", period: 73 },
    { title: "Bài 20: Bầu trời tuổi thơ (Tiết 1)", sub: "Đọc", period: 74, integ: "Thế giới tuổi thơ êm đềm bên cánh đồng, dòng sông." },
    { title: "Bài 20: Bầu trời tuổi thơ (Tiết 2)", sub: "Đọc", period: 75 },
    { title: "Bài 20: Bầu trời tuổi thơ (Tiết 3: Viết: Viết đoạn văn miêu tả con vật)", sub: "Viết", period: 76 },
    { title: "Bài 20: Bầu trời tuổi thơ (Tiết 4: Nói và nghe: Kể lại câu chuyện về loài vật)", sub: "Nói và nghe", period: 77 }
  ],
  12: [
    { title: "Bài 21: Nếu chúng mình có phép lạ (Tiết 1)", sub: "Đọc", period: 78, integ: "Ước mơ thế giới hòa bình, không còn chiến tranh đói nghèo." },
    { title: "Bài 21: Nếu chúng mình có phép lạ (Tiết 2: LTVC: Biện pháp nhân hoá)", sub: "Luyện từ và câu", period: 79, integ: "Nghệ thuật nhân hóa làm cho sự vật trở nên sinh động." },
    { title: "Bài 21: Nếu chúng mình có phép lạ (Tiết 3: Viết: Viết bài văn miêu tả con vật)", sub: "Viết", period: 80 },
    { title: "Bài 22: Anh Ba (Tiết 1)", sub: "Đọc", period: 81, integ: "Lòng yêu nước nồng nàn của Bác Hồ khi ra đi tìm đường cứu nước." },
    { title: "Bài 22: Anh Ba (Tiết 2)", sub: "Đọc", period: 82 },
    { title: "Bài 22: Anh Ba (Tiết 3: Viết: Đánh giá, chỉnh sửa bài văn miêu tả con vật)", sub: "Viết", period: 83 },
    { title: "Bài 22: Anh Ba (Tiết 4: Đọc mở rộng)", sub: "Đọc mở rộng", period: 84 }
  ],
  13: [
    { title: "Bài 23: Hoa cúc xanh (Tiết 1)", sub: "Đọc", period: 85, integ: "Niềm tin và sự kì diệu của tình bạn chân thành." },
    { title: "Bài 23: Hoa cúc xanh (Tiết 2: LTVC: Luyện tập về nhân hoá)", sub: "Luyện từ và câu", period: 86 },
    { title: "Bài 23: Hoa cúc xanh (Tiết 3: Viết: Tìm hiểu cách viết đoạn văn nêu tình cảm, cảm xúc)", sub: "Viết", period: 87 },
    { title: "Bài 24: Vua tàu thủy Bạch Thái Bưởi (Tiết 1)", sub: "Đọc", period: 88, integ: "Ý chí tự cường dân tộc, khát vọng vươn lên làm giàu chính đáng." },
    { title: "Bài 24: Vua tàu thủy Bạch Thái Bưởi (Tiết 2)", sub: "Đọc", period: 89 },
    { title: "Bài 24: Vua tàu thủy Bạch Thái Bưởi (Tiết 3: Viết: Tìm ý cho đoạn văn nêu tình cảm, cảm xúc)", sub: "Viết", period: 90 },
    { title: "Bài 24: Vua tàu thủy Bạch Thái Bưởi (Tiết 4: Nói và nghe: Tấm gương nghị lực)", sub: "Nói và nghe", period: 91 }
  ],
  14: [
    { title: "Bài 25: Nhà bác học của đồng ruộng (Tiết 1)", sub: "Đọc", period: 92, integ: "Lương Định Của - nhà nông học cống hiến trọn đời cho nông dân." },
    { title: "Bài 25: Nhà bác học của đồng ruộng (Tiết 2: LTVC: Dấu gạch ngang)", sub: "Luyện từ và câu", period: 93, integ: "Tác dụng đánh dấu lời thoại và phần chú thích." },
    { title: "Bài 25: Nhà bác học của đồng ruộng (Tiết 3: Viết: Viết đoạn văn nêu tình cảm, cảm xúc)", sub: "Viết", period: 94 },
    { title: "Bài 26: Người làm đồ chơi (Tiết 1)", sub: "Đọc", period: 95, integ: "Tình người ấm áp, trân trọng nét đẹp văn hóa tò he dân gian." },
    { title: "Bài 26: Người làm đồ chơi (Tiết 2)", sub: "Đọc", period: 96 },
    { title: "Bài 26: Người làm đồ chơi (Tiết 3: Viết: Đánh giá, chỉnh sửa đoạn văn nêu cảm xúc)", sub: "Viết", period: 97 },
    { title: "Bài 26: Người làm đồ chơi (Tiết 4: Đọc mở rộng)", sub: "Đọc mở rộng", period: 98 }
  ],
  15: [
    { title: "Bài 27: Thầy giáo tí hon (Tiết 1)", sub: "Đọc", period: 99, integ: "Tình bạn hồn nhiên và niềm vui trong việc dạy học cho bạn." },
    { title: "Bài 27: Thầy giáo tí hon (Tiết 2: LTVC: Luyện tập về dấu gạch ngang)", sub: "Luyện từ và câu", period: 100 },
    { title: "Bài 27: Thầy giáo tí hon (Tiết 3: Viết: Tìm hiểu cách viết đơn)", sub: "Viết", period: 101, integ: "Thể thức viết một lá đơn chuẩn mực." },
    { title: "Bài 28: Kì diệu những bàn tay (Tiết 1)", sub: "Đọc", period: 102, integ: "Sức mạnh bàn tay lao động sáng tạo của con người." },
    { title: "Bài 28: Kì diệu những bàn tay (Tiết 2)", sub: "Đọc", period: 103 },
    { title: "Bài 28: Kì diệu những bàn tay (Tiết 3: Viết: Viết đơn)", sub: "Viết", period: 104 },
    { title: "Bài 28: Kì diệu những bàn tay (Tiết 4: Nói và nghe: Bàn tay kì diệu)", sub: "Nói và nghe", period: 105 }
  ],
  16: [
    { title: "Bài 29: Cánh diều tuổi thơ (Tiết 1)", sub: "Đọc", period: 106, integ: "Khát vọng bay cao cùng những cánh diều ước mơ." },
    { title: "Bài 29: Cánh diều tuổi thơ (Tiết 2: LTVC: Dấu ngoặc kép)", sub: "Luyện từ và câu", period: 107, integ: "Đánh dấu từ ngữ được dùng với ý nghĩa đặc biệt." },
    { title: "Bài 29: Cánh diều tuổi thơ (Tiết 3: Viết: Đánh giá, chỉnh sửa đơn)", sub: "Viết", period: 108 },
    { title: "Bài 30: Nỗi dằn vặt của An-đrây-ca (Tiết 1)", sub: "Đọc", period: 109, integ: "Lòng hiếu thảo, tính trung thực và trách nhiệm với người thân." },
    { title: "Bài 30: Nỗi dằn vặt của An-đrây-ca (Tiết 2)", sub: "Đọc", period: 110 },
    { title: "Bài 30: Nỗi dằn vặt của An-đrây-ca (Tiết 3: Viết: Ôn tập về viết đoạn văn)", sub: "Viết", period: 111 },
    { title: "Bài 30: Nỗi dằn vặt của An-đrây-ca (Tiết 4: Đọc mở rộng)", sub: "Đọc mở rộng", period: 112 }
  ],
  17: [
    { title: "Bài 31: Xuồng ba lá quê tôi (Tiết 1)", sub: "Đọc", period: 113, integ: "Phương tiện gắn liền với đời sống sông nước Nam Bộ." },
    { title: "Bài 31: Xuồng ba lá quê tôi (Tiết 2: LTVC: Luyện tập về dấu ngoặc kép)", sub: "Luyện từ và câu", period: 114 },
    { title: "Bài 31: Xuồng ba lá quê tôi (Tiết 3: Viết: Ôn tập về bài văn kể chuyện)", sub: "Viết", period: 115 },
    { title: "Bài 32: Bè xuôi sông La (Tiết 1)", sub: "Đọc", period: 116, integ: "Vẻ đẹp quê hương đất nước trong công cuộc xây dựng non sông." },
    { title: "Bài 32: Bè xuôi sông La (Tiết 2)", sub: "Đọc", period: 117 },
    { title: "Bài 32: Bè xuôi sông La (Tiết 3: Viết: Ôn tập về bài văn miêu tả con vật)", sub: "Viết", period: 118 },
    { title: "Bài 32: Bè xuôi sông La (Tiết 4: Nói và nghe: Vẻ đẹp sông núi quê hương)", sub: "Nói và nghe", period: 119 }
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

export const GRADE_4_TOAN: Record<number, Array<{ title: string; period: number; integ?: string }>> = {
  1: [
    { title: "Bài 1: Ôn tập các số đến 100 000 (Tiết 1)", period: 1 },
    { title: "Bài 1: Ôn tập các số đến 100 000 (Tiết 2)", period: 2 },
    { title: "Bài 1: Ôn tập các số đến 100 000 (Tiết 3)", period: 3 },
    { title: "Bài 2: Ôn tập các phép tính trong phạm vi 100 000 (Tiết 1)", period: 4 },
    { title: "Bài 2: Ôn tập các phép tính trong phạm vi 100 000 (Tiết 2)", period: 5 }
  ],
  2: [
    { title: "Bài 2: Ôn tập các phép tính trong phạm vi 100 000 (Tiết 3)", period: 6 },
    { title: "Bài 3: Số chẵn, số lẻ (Tiết 1)", period: 7 },
    { title: "Bài 3: Số chẵn, số lẻ (Tiết 2)", period: 8 },
    { title: "Bài 4: Biểu thức chứa chữ (Tiết 1)", period: 9 },
    { title: "Bài 4: Biểu thức chứa chữ (Tiết 2)", period: 10 }
  ],
  3: [
    { title: "Bài 5: Giải bài toán có ba bước tính (Tiết 1)", period: 11 },
    { title: "Bài 5: Giải bài toán có ba bước tính (Tiết 2)", period: 12 },
    { title: "Bài 6: Luyện tập chung (Tiết 1)", period: 13 },
    { title: "Bài 6: Luyện tập chung (Tiết 2)", period: 14 },
    { title: "Bài 7: Đo góc, đơn vị đo góc (Tiết 1)", period: 15 }
  ],
  4: [
    { title: "Bài 7: Đo góc, đơn vị đo góc (Tiết 2)", period: 16, integ: "Sử dụng thước đo độ đo các góc chính xác." },
    { title: "Bài 8: Góc nhọn, góc tù, góc bẹt (Tiết 1)", period: 17, integ: "Nhận biết các loại góc so với góc vuông." },
    { title: "Bài 8: Góc nhọn, góc tù, góc bẹt (Tiết 2)", period: 18 },
    { title: "Bài 9: Luyện tập chung (Tiết 1)", period: 19, integ: "Củng cố kĩ năng nhận diện góc và giải toán hình học." },
    { title: "Bài 9: Luyện tập chung (Tiết 2)", period: 20 }
  ],
  5: [
    { title: "Bài 10: Số có sáu chữ số. Số 1 000 000 (Tiết 1)", period: 21 },
    { title: "Bài 10: Số có sáu chữ số. Số 1 000 000 (Tiết 2)", period: 22 },
    { title: "Bài 11: Hàng và lớp (Tiết 1)", period: 23, integ: "Nhận biết lớp đơn vị và lớp nghìn." },
    { title: "Bài 11: Hàng và lớp (Tiết 2)", period: 24 },
    { title: "Bài 12: Các số trong phạm vi lớp triệu (Tiết 1)", period: 25 }
  ],
  6: [
    { title: "Bài 12: Các số trong phạm vi lớp triệu (Tiết 2)", period: 26 },
    { title: "Bài 12: Các số trong phạm vi lớp triệu (Tiết 3)", period: 27 },
    { title: "Bài 13: Dãy số tự nhiên (Tiết 1)", period: 28 },
    { title: "Bài 13: Dãy số tự nhiên (Tiết 2)", period: 29 },
    { title: "Bài 14: So sánh và xếp thứ tự các số tự nhiên (Tiết 1)", period: 30 }
  ],
  7: [
    { title: "Bài 14: So sánh và xếp thứ tự các số tự nhiên (Tiết 2)", period: 31 },
    { title: "Bài 15: Làm tròn số đến hàng trăm nghìn (Tiết 1)", period: 32 },
    { title: "Bài 15: Làm tròn số đến hàng trăm nghìn (Tiết 2)", period: 33 },
    { title: "Bài 16: Luyện tập chung (Tiết 1)", period: 34 },
    { title: "Bài 16: Luyện tập chung (Tiết 2)", period: 35 }
  ],
  8: [
    { title: "Bài 17: Yến, tạ, tấn (Tiết 1)", period: 36, integ: "Các đơn vị đo khối lượng lớn trong đời sống thực tế." },
    { title: "Bài 17: Yến, tạ, tấn (Tiết 2)", period: 37 },
    { title: "Bài 18: Đề-xi-mét vuông, mét vuông, mi-li-mét vuông (Tiết 1)", period: 38 },
    { title: "Bài 18: Đề-xi-mét vuông, mét vuông, mi-li-mét vuông (Tiết 2)", period: 39 },
    { title: "Bài 18: Đề-xi-mét vuông, mét vuông, mi-li-mét vuông (Tiết 3)", period: 40 }
  ],
  9: [
    { title: "Bài 19: Giây, thế kỉ (Tiết 1)", period: 41, integ: "Quy đổi thế kỉ và xác định sự kiện lịch sử." },
    { title: "Bài 19: Giây, thế kỉ (Tiết 2)", period: 42 },
    { title: "Bài 20: Thực hành và trải nghiệm sử dụng một số đơn vị đo đại lượng (Tiết 1)", period: 43 },
    { title: "Bài 20: Thực hành và trải nghiệm sử dụng một số đơn vị đo đại lượng (Tiết 2)", period: 44 },
    { title: "Bài 21: Luyện tập chung (Tiết 1)", period: 45 }
  ],
  10: [
    { title: "Bài 21: Luyện tập chung (Tiết 2)", period: 46 },
    { title: "Bài 22: Phép cộng các số có nhiều chữ số (Tiết 1)", period: 47 },
    { title: "Bài 22: Phép cộng các số có nhiều chữ số (Tiết 2)", period: 48 },
    { title: "Bài 23: Phép trừ các số có nhiều chữ số (Tiết 1)", period: 49 },
    { title: "Bài 23: Phép trừ các số có nhiều chữ số (Tiết 2)", period: 50 }
  ],
  11: [
    { title: "Bài 24: Tính chất giao hoán và kết hợp của phép cộng (Tiết 1)", period: 51 },
    { title: "Bài 24: Tính chất giao hoán và kết hợp của phép cộng (Tiết 2)", period: 52 },
    { title: "Bài 25: Tìm hai số biết tổng và hiệu của hai số đó (Tiết 1)", period: 53, integ: "Dạng toán kinh điển phát triển tư duy logic giải toán." },
    { title: "Bài 25: Tìm hai số biết tổng và hiệu của hai số đó (Tiết 2)", period: 54 },
    { title: "Bài 26: Luyện tập chung (Tiết 1)", period: 55 }
  ],
  12: [
    { title: "Bài 26: Luyện tập chung (Tiết 2)", period: 56 },
    { title: "Bài 27: Hai đường thẳng vuông góc (Tiết 1)", period: 57, integ: "Khái niệm đường thẳng vuông góc và ứng dụng thực tiễn." },
    { title: "Bài 27: Hai đường thẳng vuông góc (Tiết 2)", period: 58 },
    { title: "Bài 28: Hai đường thẳng song song (Tiết 1)", period: 59, integ: "Khái niệm đường thẳng song song trong không gian." },
    { title: "Bài 28: Hai đường thẳng song song (Tiết 2)", period: 60 }
  ],
  13: [
    { title: "Bài 29: Thực hành vẽ hai đường thẳng vuông góc (Tiết 1)", period: 61 },
    { title: "Bài 30: Thực hành vẽ hai đường thẳng song song (Tiết 1)", period: 62 },
    { title: "Bài 31: Hình bình hành, hình thoi (Tiết 1)", period: 63 },
    { title: "Bài 31: Hình bình hành, hình thoi (Tiết 2)", period: 64 },
    { title: "Bài 32: Luyện tập chung (Tiết 1)", period: 65 }
  ],
  14: [
    { title: "Bài 32: Luyện tập chung (Tiết 2)", period: 66 },
    { title: "Bài 33: Nhân với số có một chữ số (Tiết 1)", period: 67 },
    { title: "Bài 33: Nhân với số có một chữ số (Tiết 2)", period: 68 },
    { title: "Bài 34: Nhân với 10, 100, 1000,... Chia cho 10, 100, 1000,... (Tiết 1)", period: 69 },
    { title: "Bài 35: Tính chất giao hoán và kết hợp của phép nhân (Tiết 1)", period: 70 }
  ],
  15: [
    { title: "Bài 35: Tính chất giao hoán và kết hợp của phép nhân (Tiết 2)", period: 71 },
    { title: "Bài 36: Nhân một số với một tổng, nhân một số với một hiệu (Tiết 1)", period: 72 },
    { title: "Bài 36: Nhân một số với một tổng, nhân một số với một hiệu (Tiết 2)", period: 73 },
    { title: "Bài 37: Nhân với số có hai chữ số (Tiết 1)", period: 74 },
    { title: "Bài 37: Nhân với số có hai chữ số (Tiết 2)", period: 75 }
  ],
  16: [
    { title: "Bài 38: Luyện tập chung (Tiết 1)", period: 76 },
    { title: "Bài 38: Luyện tập chung (Tiết 2)", period: 77 },
    { title: "Bài 39: Chia cho số có một chữ số (Tiết 1)", period: 78 },
    { title: "Bài 39: Chia cho số có một chữ số (Tiết 2)", period: 79 },
    { title: "Bài 39: Chia cho số có một chữ số (Tiết 3)", period: 80 }
  ],
  17: [
    { title: "Bài 40: Chia cho số có hai chữ số (Tiết 1)", period: 81 },
    { title: "Bài 40: Chia cho số có hai chữ số (Tiết 2)", period: 82 },
    { title: "Bài 40: Chia cho số có hai chữ số (Tiết 3)", period: 83 },
    { title: "Bài 41: Luyện tập chung (Tiết 1)", period: 84 },
    { title: "Bài 41: Luyện tập chung (Tiết 2)", period: 85 }
  ],
  18: [
    { title: "Bài 42: Ôn tập học kì I (Tiết 1)", period: 86 },
    { title: "Bài 42: Ôn tập học kì I (Tiết 2)", period: 87 },
    { title: "Bài 43: Ôn tập các phép tính với số tự nhiên (Tiết 1)", period: 88 },
    { title: "Bài 43: Ôn tập các phép tính với số tự nhiên (Tiết 2)", period: 89 },
    { title: "Bài 44: Ôn tập hình học và đo lường (Tiết 1)", period: 90 }
  ]
};

export const GRADE_4_KHOA_HOC: Record<number, Array<{ title: string; period: number; integ?: string }>> = {
  1: [
    { title: "Bài 1: Tính chất của nước và nước với cuộc sống (Tiết 1)", period: 1 },
    { title: "Bài 1: Tính chất của nước và nước với cuộc sống (Tiết 2)", period: 2 }
  ],
  2: [
    { title: "Bài 2: Sự chuyển thể của nước (Tiết 1)", period: 3 },
    { title: "Bài 2: Sự chuyển thể của nước (Tiết 2)", period: 4 }
  ],
  3: [
    { title: "Bài 3: Ô nhiễm và bảo vệ nguồn nước (Tiết 1)", period: 5, integ: "BVMT: Giữ sạch nguồn nước giếng khơi, sông suối." },
    { title: "Bài 3: Ô nhiễm và bảo vệ nguồn nước (Tiết 2)", period: 6 }
  ],
  4: [
    { title: "Bài 3: Ô nhiễm và bảo vệ nguồn nước (Tiết 3)", period: 7, integ: "Hành động tiết kiệm nước sạch hằng ngày." },
    { title: "Bài 4: Không khí quanh ta (Tiết 1)", period: 8, integ: "STEM: Thí nghiệm không khí có ở mọi nơi và chiếm thể tích." }
  ],
  5: [
    { title: "Bài 4: Không khí quanh ta (Tiết 2)", period: 9 },
    { title: "Bài 4: Không khí quanh ta (Tiết 3)", period: 10 }
  ],
  6: [
    { title: "Bài 5: Vai trò của không khí và bảo vệ môi trường không khí (Tiết 1)", period: 11, integ: "Không khí duy trì sự cháy và sự sống của sinh vật." },
    { title: "Bài 5: Vai trò của không khí và bảo vệ môi trường không khí (Tiết 2)", period: 12, integ: "BVMT: Giảm thiểu khói bụi, khí thải độc hại." }
  ],
  7: [
    { title: "Bài 6: Gió, bão (Tiết 1)", period: 13, integ: "Nguyên nhân sinh ra gió và các cấp độ gió." },
    { title: "Bài 6: Gió, bão (Tiết 2)", period: 14, integ: "KNS & ANQP: Phòng tránh bão lũ an toàn cho gia đình." }
  ],
  8: [
    { title: "Bài 6: Gió, bão (Tiết 3)", period: 15 },
    { title: "Bài 7: Ôn tập chủ đề Chất", period: 16 }
  ],
  9: [
    { title: "Bài 8: Ánh sáng và sự truyền ánh sáng (Tiết 1)", period: 17, integ: "Vật tự phát sáng và vật được chiếu sáng." },
    { title: "Bài 8: Ánh sáng và sự truyền ánh sáng (Tiết 2)", period: 18 }
  ],
  10: [
    { title: "Bài 8: Ánh sáng và sự truyền ánh sáng (Tiết 3)", period: 19 },
    { title: "Bài 9: Vai trò của ánh sáng (Tiết 1)", period: 20, integ: "Bảo vệ mắt trước ánh sáng quá mạnh." }
  ],
  11: [
    { title: "Bài 9: Vai trò của ánh sáng (Tiết 2)", period: 21 },
    { title: "Bài 10: Âm thanh và sự truyền âm thanh (Tiết 1)", period: 22, integ: "STEM: Thí nghiệm âm thanh phát ra khi vật rung động." }
  ],
  12: [
    { title: "Bài 10: Âm thanh và sự truyền âm thanh (Tiết 2)", period: 23 },
    { title: "Bài 10: Âm thanh và sự truyền âm thanh (Tiết 3)", period: 24 }
  ],
  13: [
    { title: "Bài 11: Âm thanh trong đời sống (Tiết 1)", period: 25, integ: "Phòng chống ô nhiễm tiếng ồn nơi công cộng." },
    { title: "Bài 11: Âm thanh trong đời sống (Tiết 2)", period: 26 }
  ],
  14: [
    { title: "Bài 12: Nhiệt độ và sự truyền nhiệt (Tiết 1)", period: 27, integ: "Sử dụng nhiệt kế đo nhiệt độ cơ thể và nước sôi." },
    { title: "Bài 12: Nhiệt độ và sự truyền nhiệt (Tiết 2)", period: 28 }
  ],
  15: [
    { title: "Bài 13: Vật dẫn nhiệt tốt và vật dẫn nhiệt kém (Tiết 1)", period: 29, integ: "Ứng dụng giữ ấm mùa đông và cách nhiệt đồ dùng bếp." },
    { title: "Bài 13: Vật dẫn nhiệt tốt và vật dẫn nhiệt kém (Tiết 2)", period: 30 }
  ],
  16: [
    { title: "Bài 14: Ôn tập chủ đề Năng lượng (Tiết 1)", period: 31 },
    { title: "Bài 14: Ôn tập chủ đề Năng lượng (Tiết 2)", period: 32 }
  ],
  17: [
    { title: "Bài 15: Thực vật và động vật cần gì để sống (Tiết 1)", period: 33, integ: "Các yếu tố ánh sáng, nước, không khí, chất khoáng." },
    { title: "Bài 15: Thực vật và động vật cần gì để sống (Tiết 2)", period: 34 }
  ],
  18: [
    { title: "Ôn tập học kì I", period: 35 },
    { title: "Đánh giá cuối học kì I", period: 36 }
  ]
};

export const GRADE_4_LICH_SU_DIA_LI: Record<number, Array<{ title: string; period: number; integ?: string }>> = {
  1: [
    { title: "Bài 1: Làm quen với phương tiện học tập môn Lịch sử và Địa lí (Tiết 1)", period: 1 },
    { title: "Bài 1: Làm quen với phương tiện học tập môn Lịch sử và Địa lí (Tiết 2)", period: 2 }
  ],
  2: [
    { title: "Bài 2: Thiên nhiên vùng Trung du và miền núi Bắc Bộ (Tiết 1)", period: 3 },
    { title: "Bài 2: Thiên nhiên vùng Trung du và miền núi Bắc Bộ (Tiết 2)", period: 4 }
  ],
  3: [
    { title: "Bài 2: Thiên nhiên vùng Trung du và miền núi Bắc Bộ (Tiết 3)", period: 5 },
    { title: "Bài 2: Thiên nhiên vùng Trung du và miền núi Bắc Bộ (Tiết 4)", period: 6 }
  ],
  4: [
    { title: "Bài 3: Lịch sử và văn hóa truyền thống vùng Trung du và miền núi Bắc Bộ (Tiết 1)", period: 7, integ: "Bản sắc văn hóa nhà sàn, trang phục thổ cẩm các dân tộc." },
    { title: "Bài 3: Lịch sử và văn hóa truyền thống vùng Trung du và miền núi Bắc Bộ (Tiết 2)", period: 8, integ: "Lễ hội Lồng Tồng, Hát then đàn tính độc đáo." }
  ],
  5: [
    { title: "Bài 3: Lịch sử và văn hóa truyền thống vùng Trung du và miền núi Bắc Bộ (Tiết 3)", period: 9 },
    { title: "Bài 4: Đền Hùng và Lễ giỗ Tổ Hùng Vương (Tiết 1)", period: 10, integ: "Dù ai đi ngược về xuôi / Nhớ ngày Giỗ Tổ mùng mười tháng ba." }
  ],
  6: [
    { title: "Bài 4: Đền Hùng và Lễ giỗ Tổ Hùng Vương (Tiết 2)", period: 11, integ: "Di sản văn hóa phi vật thể Tín ngưỡng thờ cúng Hùng Vương." },
    { title: "Bài 5: Thiên nhiên vùng Đồng bằng Bắc Bộ (Tiết 1)", period: 12, integ: "Đồng bằng châu thổ sông Hồng phù sa màu mỡ." }
  ],
  7: [
    { title: "Bài 5: Thiên nhiên vùng Đồng bằng Bắc Bộ (Tiết 2)", period: 13 },
    { title: "Bài 5: Thiên nhiên vùng Đồng bằng Bắc Bộ (Tiết 3)", period: 14 }
  ],
  8: [
    { title: "Bài 6: Dân cư, hoạt động sản xuất và một số nét văn hóa ở vùng Đồng bằng Bắc Bộ (Tiết 1)", period: 15, integ: "Vựa lúa lớn thứ hai và làng nghề thủ công truyền thống." },
    { title: "Bài 6: Dân cư, hoạt động sản xuất và một số nét văn hóa ở vùng Đồng bằng Bắc Bộ (Tiết 2)", period: 16 }
  ],
  9: [
    { title: "Bài 6: Dân cư, hoạt động sản xuất và một số nét văn hóa ở vùng Đồng bằng Bắc Bộ (Tiết 3)", period: 17 },
    { title: "Bài 6: Dân cư, hoạt động sản xuất và một số nét văn hóa ở vùng Đồng bằng Bắc Bộ (Tiết 4)", period: 18 }
  ],
  10: [
    { title: "Bài 7: Sông Hồng và văn minh sông Hồng (Tiết 1)", period: 19, integ: "Hệ thống đê điều kiên cố hàng nghìn năm ngăn lũ." },
    { title: "Bài 7: Sông Hồng và văn minh sông Hồng (Tiết 2)", period: 20 }
  ],
  11: [
    { title: "Bài 8: Thăng Long - Hà Nội (Tiết 1)", period: 21, integ: "Thủ đô ngàn năm văn hiến, trái tim của cả nước." },
    { title: "Bài 8: Thăng Long - Hà Nội (Tiết 2)", period: 22 }
  ],
  12: [
    { title: "Bài 8: Thăng Long - Hà Nội (Tiết 3)", period: 23 },
    { title: "Bài 8: Thăng Long - Hà Nội (Tiết 4)", period: 24 }
  ],
  13: [
    { title: "Bài 9: Văn Miếu - Quốc Tử Giám (Tiết 1)", period: 25, integ: "82 bia Tiến sĩ - Di sản tư liệu thế giới UNESCO." },
    { title: "Bài 9: Văn Miếu - Quốc Tử Giám (Tiết 2)", period: 26, integ: "Truyền thống hiếu học và tôn vinh nhân tài của dân tộc." }
  ],
  14: [
    { title: "Bài 10: Ôn tập (Tiết 1)", period: 27 },
    { title: "Bài 10: Ôn tập (Tiết 2)", period: 28 }
  ],
  15: [
    { title: "Bài 11: Thiên nhiên vùng Duyên hải miền Trung (Tiết 1)", period: 29, integ: "Cảnh quan dải đất hẹp ven biển và đèo Hải Vân hùng vĩ." },
    { title: "Bài 11: Thiên nhiên vùng Duyên hải miền Trung (Tiết 2)", period: 30 }
  ],
  16: [
    { title: "Bài 11: Thiên nhiên vùng Duyên hải miền Trung (Tiết 3)", period: 31 },
    { title: "Bài 11: Thiên nhiên vùng Duyên hải miền Trung (Tiết 4)", period: 32 }
  ],
  17: [
    { title: "Bài 12: Dân cư, hoạt động sản xuất và một số nét văn hóa ở vùng Duyên hải miền Trung (Tiết 1)", period: 33, integ: "Nghề làm muối, đánh bắt hải sản và Lễ hội Cầu ngư." },
    { title: "Bài 12: Dân cư, hoạt động sản xuất và một số nét văn hóa ở vùng Duyên hải miền Trung (Tiết 2)", period: 34 }
  ],
  18: [
    { title: "Ôn tập học kì I", period: 35 },
    { title: "Kiểm tra định kì cuối học kì I", period: 36 }
  ]
};

export const GRADE_4_DAO_DUC: Record<number, { title: string; period: number; integ?: string }> = {
  1: { title: "Bài 1: Biết ơn người lao động (Tiết 1)", period: 1 },
  2: { title: "Bài 1: Biết ơn người lao động (Tiết 2)", period: 2 },
  3: { title: "Bài 2: Cảm thông, giúp đỡ người gặp khó khăn (Tiết 1)", period: 3 },
  4: { title: "Bài 2: Cảm thông, giúp đỡ người gặp khó khăn (Tiết 2)", period: 4, integ: "Lá lành đùm lá rách, sẻ chia tấm lòng nhân ái." },
  5: { title: "Bài 3: Yêu lao động (Tiết 1)", period: 5, integ: "Lao động là vinh quang, tự giác làm việc nhà và trường." },
  6: { title: "Bài 3: Yêu lao động (Tiết 2)", period: 6 },
  7: { title: "Bài 4: Tôn trọng tài sản của người khác (Tiết 1)", period: 7, integ: "Không tự ý lấy, dùng đồ dùng của bạn khi chưa xin phép." },
  8: { title: "Bài 4: Tôn trọng tài sản của người khác (Tiết 2)", period: 8 },
  9: { title: "Ôn tập giữa học kì I", period: 9 },
  10: { title: "Bài 5: Bảo vệ của công (Tiết 1)", period: 10, integ: "Giữ gìn bàn ghế lớp học, cây xanh công viên." },
  11: { title: "Bài 5: Bảo vệ của công (Tiết 2)", period: 11 },
  12: { title: "Bài 6: Thiết lập và duy trì quan hệ bạn bè (Tiết 1)", period: 12, integ: "Chan hòa, chân thành và thấu hiểu bạn bè." },
  13: { title: "Bài 6: Thiết lập và duy trì quan hệ bạn bè (Tiết 2)", period: 13 },
  14: { title: "Bài 7: Quý trọng đồng tiền (Tiết 1)", period: 14, integ: "Hiểu giá trị giọt mồ hôi của cha mẹ, không tiêu xài lãng phí." },
  15: { title: "Bài 7: Quý trọng đồng tiền (Tiết 2)", period: 15 },
  16: { title: "Bài 8: Quyền và bổn phận của trẻ em (Tiết 1)", period: 16, integ: "QCN: Quyền được học tập, chăm sóc và bổn phận hiếu kính." },
  17: { title: "Bài 8: Quyền và bổn phận của trẻ em (Tiết 2)", period: 17 },
  18: { title: "Ôn tập cuối kì I", period: 18 }
};

export const GRADE_4_CONG_NGHE: Record<number, { title: string; period: number; integ?: string }> = {
  1: { title: "Bài 1: Lợi ích của hoa, cây cảnh đối với đời sống (Tiết 1)", period: 1 },
  2: { title: "Bài 1: Lợi ích của hoa, cây cảnh đối với đời sống (Tiết 2)", period: 2 },
  3: { title: "Bài 2: Trồng hoa, cây cảnh trong chậu (Tiết 1)", period: 3 },
  4: { title: "Bài 2: Trồng hoa, cây cảnh trong chậu (Tiết 2)", period: 4, integ: "Thực hành chuẩn bị đất, giá thể và chậu trồng hoa." },
  5: { title: "Bài 2: Trồng hoa, cây cảnh trong chậu (Tiết 3)", period: 5 },
  6: { title: "Bài 3: Chăm sóc hoa, cây cảnh trong chậu (Tiết 1)", period: 6, integ: "Kĩ năng tưới nước, bón phân, tỉa cành an toàn." },
  7: { title: "Bài 3: Chăm sóc hoa, cây cảnh trong chậu (Tiết 2)", period: 7 },
  8: { title: "Bài 3: Chăm sóc hoa, cây cảnh trong chậu (Tiết 3)", period: 8 },
  9: { title: "Ôn tập giữa học kì I", period: 9 },
  10: { title: "Bài 4: Giới thiệu chi tiết và dụng cụ lắp ghép mô hình kĩ thuật (Tiết 1)", period: 10, integ: "Làm quen tua-vít, cờ-lê, bulông, đai ốc kĩ thuật." },
  11: { title: "Bài 4: Giới thiệu chi tiết và dụng cụ lắp ghép mô hình kĩ thuật (Tiết 2)", period: 11 },
  12: { title: "Bài 4: Giới thiệu chi tiết và dụng cụ lắp ghép mô hình kĩ thuật (Tiết 3)", period: 12 },
  13: { title: "Bài 4: Giới thiệu chi tiết và dụng cụ lắp ghép mô hình kĩ thuật (Tiết 4)", period: 13 },
  14: { title: "Bài 5: Lắp ghép mô hình bập bênh (Tiết 1)", period: 14, integ: "STEM: Lắp ghép khung giá đỡ bập bênh." },
  15: { title: "Bài 5: Lắp ghép mô hình bập bênh (Tiết 2)", period: 15 },
  16: { title: "Bài 5: Lắp ghép mô hình bập bênh (Tiết 3)", period: 16 },
  17: { title: "Bài 5: Lắp ghép mô hình bập bênh (Tiết 4)", period: 17, integ: "Kiểm tra chuyển động nhịp nhàng của mô hình bập bênh." },
  18: { title: "Kiểm tra học kì I", period: 18 }
};

export const GRADE_4_HDTN: Record<number, Array<{ title: string; period: number; integ?: string }>> = {
  1: [
    { title: "Sinh hoạt dưới cờ: VUI BƯỚC VÀO NĂM HỌC MỚI", period: 1 },
    { title: "HĐGDCĐ: LÀM QUEN VỚI LỚP HỌC MỚI", period: 2 },
    { title: "Sinh hoạt lớp: KẾ HOẠCH HỌC TẬP CÁ NHÂN", period: 3 }
  ],
  2: [
    { title: "Sinh hoạt dưới cờ: AN TOÀN TRÊN ĐƯỜNG ĐẾN TRƯỜNG", period: 4 },
    { title: "HĐGDCĐ: TỰ HÀO VỀ TRƯỜNG EM", period: 5 },
    { title: "Sinh hoạt lớp: RÈN LUYỆN NỀ NẾP LỚP HỌC", period: 6 }
  ],
  3: [
    { title: "Sinh hoạt dưới cờ: ĐÊM HỘI TRĂNG RẰM", period: 7 },
    { title: "HĐGDCĐ: VUI TRUNG THU CÙNG BẠN BÈ", period: 8 },
    { title: "Sinh hoạt lớp: BÀY MÂM CỖ TRUNG THU", period: 9 }
  ],
  4: [
    { title: "Sinh hoạt dưới cờ: TỰ HÀO TRUYỀN THỐNG TRƯỜNG EM", period: 10, integ: "Tìm hiểu bề dày thành tích của thầy và trò nhà trường." },
    { title: "HĐGDCĐ: KHÁM PHÁ SỞ THÍCH, KHẢ NĂNG CỦA BẢN THÂN", period: 11, integ: "Tự tin bộc lộ năng khiếu sở trường trước tập thể." },
    { title: "Sinh hoạt lớp: XÂY DỰNG KẾ HOẠCH PHÁT TRIỂN SỞ THÍCH", period: 12, integ: "Lập thời gian biểu rèn luyện năng khiếu hiệu quả." }
  ],
  5: [
    { title: "Sinh hoạt dưới cờ: TRUNG THU YÊU THƯƠNG", period: 13 },
    { title: "HĐGDCĐ: GIỮ GÌN TÌNH BẠN", period: 14, integ: "Ứng xử văn minh, thấu hiểu bạn bè." },
    { title: "Sinh hoạt lớp: CHIA SẺ NIỀM VUI CÙNG BẠN", period: 15 }
  ],
  6: [
    { title: "Sinh hoạt dưới cờ: NGÀY HỘI VĂN HÓA ĐỌC", period: 16 },
    { title: "HĐGDCĐ: RÈN LUYỆN THÓI QUEN NGĂN NẮP, GỌN GÀNG", period: 17 },
    { title: "Sinh hoạt lớp: GÓC HỌC TẬP NGĂN NẮP", period: 18, integ: "Sắp xếp sách vở khoa học tại nhà." }
  ],
  7: [
    { title: "Sinh hoạt dưới cờ: AN TOÀN GIAO THÔNG CHO NỤ CƯỜI NGÀY MAI", period: 19 },
    { title: "HĐGDCĐ: NHẬN BIẾT NGUY CƠ VÀ PHÒNG TRÁNH TAI NẠN", period: 20 },
    { title: "Sinh hoạt lớp: KĨ NĂNG XỬ LÍ TÌNH HUỐNG NGUY HIỂM", period: 21 }
  ],
  8: [
    { title: "Sinh hoạt dưới cờ: TÔN VINH VẺ ĐẸP NGƯỜI PHỤ NỮ VIỆT NAM 20-10", period: 22 },
    { title: "HĐGDCĐ: LÒNG BIẾT ƠN BÀ VÀ MẸ", period: 23 },
    { title: "Sinh hoạt lớp: MÓN QUÀ YÊU THƯƠNG", period: 24 }
  ],
  9: [
    { title: "Sinh hoạt dưới cờ: PHÁT ĐỘNG PHONG TRÀO TÔN SƯ TRỌNG ĐẠO", period: 25 },
    { title: "HĐGDCĐ: THẦY CÔ TRONG MẮT EM", period: 26 },
    { title: "Sinh hoạt lớp: RÈN NÉT CHỮ, LUYỆN NẾT NGƯỜI", period: 27 }
  ],
  10: [
    { title: "Sinh hoạt dưới cờ: TRI ÂN NGƯỜI THẦY", period: 28 },
    { title: "HĐGDCĐ: TỰ GIÁC TRONG HỌC TẬP VÀ SINH HOẠT", period: 29 },
    { title: "Sinh hoạt lớp: KẾ HOẠCH TUẦN HỌC TỐT", period: 30 }
  ],
  11: [
    { title: "Sinh hoạt dưới cờ: GIAO LƯU VĂN NGHỆ TRI ÂN THẦY CÔ", period: 31 },
    { title: "HĐGDCĐ: LÀM THIỆP VÀ QUÀ TẶNG THẦY CÔ", period: 32 },
    { title: "Sinh hoạt lớp: TẤM THIỆP TRI ÂN", period: 33 }
  ],
  12: [
    { title: "Sinh hoạt dưới cờ: KỈ NIỆM NGÀY NHÀ GIÁO VIỆT NAM 20-11", period: 34 },
    { title: "HĐGDCĐ: LÒNG BIẾT ƠN ĐỐI VỚI THẦY CÔ", period: 35 },
    { title: "Sinh hoạt lớp: TỰ HÀO NGHỀ DẠY HỌC", period: 36 }
  ],
  13: [
    { title: "Sinh hoạt dưới cờ: BẢO VỆ MÔI TRƯỜNG XANH - SẠCH - ĐẸP", period: 37 },
    { title: "HĐGDCĐ: TIẾT KIỆM ĐIỆN NƯỚC TRONG GIA ĐÌNH", period: 38 },
    { title: "Sinh hoạt lớp: THỰC HÀNH SỐNG XANH", period: 39 }
  ],
  14: [
    { title: "Sinh hoạt dưới cờ: PHÂN LOẠI RÁC TẠI NGUỒN", period: 40 },
    { title: "HĐGDCĐ: TÁI CHẾ RÁC THẢI NHỰA", period: 41 },
    { title: "Sinh hoạt lớp: SẢN PHẨM TÁI CHẾ SÁNG TẠO", period: 42 }
  ],
  15: [
    { title: "Sinh hoạt dưới cờ: CHÀO MỪNG NGÀY THÀNH LẬP QUÂN ĐỘI NHÂN DÂN VIỆT NAM 22-12", period: 43 },
    { title: "HĐGDCĐ: ANH BỘ ĐỘI CỤ HỒ TRONG TRÁI TIM EM", period: 44 },
    { title: "Sinh hoạt lớp: BỨC TRANH CHÚ BỘ ĐỘI", period: 45 }
  ],
  16: [
    { title: "Sinh hoạt dưới cờ: NGÀY HỘI KHỎE PHÙ ĐỔNG", period: 46 },
    { title: "HĐGDCĐ: CHĂM SÓC SỨC KHỎE MÙA ĐÔNG", period: 47 },
    { title: "Sinh hoạt lớp: RÈN LUYỆN THÂN THỂ THEO GƯƠNG BÁC HỒ", period: 48 }
  ],
  17: [
    { title: "Sinh hoạt dưới cờ: GIA ĐÌNH ẤM ÁP YÊU THƯƠNG", period: 49 },
    { title: "HĐGDCĐ: GIÚP ĐỠ CHA MẸ VIỆC NHÀ", period: 50 },
    { title: "Sinh hoạt lớp: BỮA CƠM SUM HỌP GIA ĐÌNH", period: 51 }
  ],
  18: [
    { title: "Sinh hoạt dưới cờ: CHÀO ĐÓN NĂM MỚI", period: 52 },
    { title: "HĐGDCĐ: TỔNG KẾT HOẠT ĐỘNG HỌC KÌ I", period: 53 },
    { title: "Sinh hoạt lớp: SƠ KẾT HỌC KÌ I VÀ PHƯƠNG HƯỚNG HỌC KÌ II", period: 54 }
  ]
};

export const GRADE_4_CURRICULUM_DATA: Record<string, (week: number, p: number) => LessonInfo> = {
  "tiếng việt": (week: number, p: number) => {
    const list = GRADE_4_TIENG_VIET[week];
    if (list && list[p - 1]) {
      const item = list[p - 1];
      return {
        lessonTitle: item.title,
        subSubject: item.sub,
        curriculumPeriod: item.period,
        integrationNotes: item.integ || "Chuẩn kiến thức kĩ năng Tiếng Việt 4 GDPT 2018."
      };
    }
    return {
      lessonTitle: `Tiếng Việt 4 - Tuần ${week} (Tiết ${p})`,
      subSubject: p % 2 === 1 ? "Đọc" : "Viết",
      curriculumPeriod: (week - 1) * 7 + p,
      integrationNotes: "Tiếng Việt lớp 4 GDPT 2018."
    };
  },

  "toán": (week: number, p: number) => {
    const list = GRADE_4_TOAN[week];
    if (list && list[p - 1]) {
      const item = list[p - 1];
      return {
        lessonTitle: item.title,
        curriculumPeriod: item.period,
        integrationNotes: item.integ || "Toán 4 GDPT 2018."
      };
    }
    return {
      lessonTitle: `Toán 4 - Tuần ${week} (Tiết ${p})`,
      curriculumPeriod: (week - 1) * 5 + p,
      integrationNotes: "Toán lớp 4 GDPT 2018."
    };
  },

  "khoa học": (week: number, p: number) => {
    const list = GRADE_4_KHOA_HOC[week];
    if (list && list[p - 1]) {
      const item = list[p - 1];
      return {
        lessonTitle: item.title,
        curriculumPeriod: item.period,
        integrationNotes: item.integ || "Khoa học 4 GDPT 2018."
      };
    }
    return {
      lessonTitle: `Khoa học 4 - Tuần ${week} (Tiết ${p})`,
      curriculumPeriod: (week - 1) * 2 + p,
      integrationNotes: "Khoa học lớp 4 GDPT 2018."
    };
  },

  "lịch sử và địa lí": (week: number, p: number) => {
    const list = GRADE_4_LICH_SU_DIA_LI[week];
    if (list && list[p - 1]) {
      const item = list[p - 1];
      return {
        lessonTitle: item.title,
        curriculumPeriod: item.period,
        integrationNotes: item.integ || "Lịch sử và Địa lí 4 GDPT 2018."
      };
    }
    return {
      lessonTitle: `Lịch sử & Địa lí 4 - Tuần ${week} (Tiết ${p})`,
      curriculumPeriod: (week - 1) * 2 + p,
      integrationNotes: "Lịch sử & Địa lí lớp 4."
    };
  },

  "đạo đức": (week: number) => {
    const item = GRADE_4_DAO_DUC[week];
    if (item) {
      return {
        lessonTitle: item.title,
        curriculumPeriod: item.period,
        integrationNotes: item.integ || "Đạo đức 4 GDPT 2018."
      };
    }
    return {
      lessonTitle: `Đạo đức 4 - Tuần ${week}`,
      curriculumPeriod: week,
      integrationNotes: "Đạo đức 4 GDPT 2018."
    };
  },

  "công nghệ": (week: number) => {
    const item = GRADE_4_CONG_NGHE[week];
    if (item) {
      return {
        lessonTitle: item.title,
        curriculumPeriod: item.period,
        integrationNotes: item.integ || "Công nghệ 4 GDPT 2018."
      };
    }
    return {
      lessonTitle: `Công nghệ 4 - Tuần ${week}`,
      curriculumPeriod: week,
      integrationNotes: "Công nghệ 4 GDPT 2018."
    };
  },

  "hoạt động trải nghiệm": (week: number, p: number) => {
    const list = GRADE_4_HDTN[week];
    if (list && list[p - 1]) {
      const item = list[p - 1];
      return {
        lessonTitle: item.title,
        curriculumPeriod: item.period,
        integrationNotes: item.integ || "Hoạt động trải nghiệm 4 GDPT 2018."
      };
    }
    return {
      lessonTitle: p === 1 ? `SHDC Tuần ${week}` : p === 2 ? `HĐGDCĐ Tuần ${week}` : `Sinh hoạt lớp Tuần ${week}`,
      curriculumPeriod: (week - 1) * 3 + p,
      integrationNotes: "Hoạt động trải nghiệm lớp 4."
    };
  },

  "giáo dục thể chất": (week: number, p: number) => {
    const curP = (week - 1) * 2 + p;
    return {
      lessonTitle: `Giáo dục thể chất 4: Bài tập đội hình đội ngũ & Thể dục phát triển chung (Tiết ${p})`,
      curriculumPeriod: curP,
      integrationNotes: "Rèn luyện thể lực và tác phong nhanh nhẹn, kỉ luật."
    };
  }
};
