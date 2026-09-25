import { Grade, LessonActivity } from "../types";

export interface OfficialMusicWeekItem {
  theme: string;
  lessonTitle: string;
  period: number;
  adjustments?: string;
  songTitle?: string;
  composer?: string;
}

// --------------------------------------------------------------------------
// PHÂN PHỐI CHƯƠNG TRÌNH MÔN ÂM NHẠC MỚI (1 tiết/tuần x 35 tuần = 35 tiết/năm)
// Khối 1, 2, 3, 4, 5 theo Quyết định / Kế hoạch giáo dục mới nhất
// --------------------------------------------------------------------------

export const MUSIC_GRADE_1: Record<number, OfficialMusicWeekItem> = {
  1: {
    theme: "Âm thanh kì diệu",
    lessonTitle: "Thường thức âm nhạc: Âm thanh kì diệu - Hát: Vào rừng hoa",
    period: 1,
    songTitle: "Vào rừng hoa",
    composer: "Việt Anh",
  },
  2: {
    theme: "Âm thanh kì diệu",
    lessonTitle: "Ôn tập bài hát: Vào rừng hoa - Đọc nhạc: Bậc thang Đô – Rê – Mi",
    period: 2,
    songTitle: "Vào rừng hoa",
    composer: "Việt Anh",
  },
  3: {
    theme: "Âm thanh kì diệu",
    lessonTitle: "Ôn tập bài hát: Vào rừng hoa - Ôn tập đọc nhạc: Bậc thang Đô-Rê-Mi",
    period: 3,
    adjustments: "Năng lực số: 1.1.CB1a Theo dõi video bài hát 'Vào rừng hoa' trên màn hình máy chiếu để hát kết hợp vỗ tay, gõ đệm theo tiết tấu.",
    songTitle: "Vào rừng hoa",
    composer: "Việt Anh",
  },
  4: {
    theme: "Âm thanh kì diệu",
    lessonTitle: "Ôn tập bài hát: Vào rừng hoa - Ôn tập đọc nhạc: Bậc thang Đô-Rê-Mi",
    period: 4,
    songTitle: "Vào rừng hoa",
    composer: "Việt Anh",
  },
  5: {
    theme: "Việt Nam yêu thương",
    lessonTitle: "Hát: Tổ quốc ta",
    period: 5,
    adjustments: "* Lồng ghép GD QPAN: Giáo dục cho học sinh về tình yêu quê hương, yêu hòa bình, yêu Tổ quốc Việt Nam xã hội chủ nghĩa. | Năng lực số: 1.1.CB1a; 2.1.CB1a; 4.3.CB1a: Nhận biết, tương tác với máy tính/loa/tivi để nghe nhạc, quan sát hình ảnh quê hương; biết điều chỉnh âm lượng phù hợp. | Năng lực AI: Nhận biết con người có cảm xúc yêu quê hương khi nghe/hát, AI không có cảm xúc thật mà chỉ mô phỏng âm thanh.",
    songTitle: "Tổ quốc ta",
    composer: "Mộng Lân",
  },
  6: {
    theme: "Việt Nam yêu thương",
    lessonTitle: "Ôn tập bài hát: Tổ quốc ta - Nhạc cụ: Trống con",
    period: 6,
    songTitle: "Tổ quốc ta",
    composer: "Mộng Lân",
  },
  7: {
    theme: "Việt Nam yêu thương",
    lessonTitle: "Nghe nhạc: Bài hát Quốc ca - Ôn tập Nhạc cụ: Trống con",
    period: 7,
    adjustments: "Năng lực số: 1.1.CB1a; 4.1.CB1a; Sử dụng thiết bị số để nghe Quốc ca và ôn nhạc cụ Trống con; biết bảo quản máy tính, loa trong lớp học. | Năng lực AI: Nhận biết cảm xúc trang nghiêm, tự hào của con người khi nghe Quốc ca; AI chỉ mô phỏng âm thanh.",
    songTitle: "Quốc ca",
    composer: "Văn Cao",
  },
  8: {
    theme: "Việt Nam yêu thương",
    lessonTitle: "Ôn tập bài hát: Tổ quốc ta",
    period: 8,
    songTitle: "Tổ quốc ta",
    composer: "Mộng Lân",
  },
  9: {
    theme: "Mái trường thân yêu",
    lessonTitle: "Hát: Lớp Một thân yêu",
    period: 9,
    songTitle: "Lớp Một thân yêu",
    composer: "Bùi Anh Tôn",
  },
  10: {
    theme: "Mái trường thân yêu",
    lessonTitle: "Ôn tập bài hát: Lớp Một thân yêu - Đọc nhạc: Ban nhạc Đô – Rê - Mi",
    period: 10,
    songTitle: "Lớp Một thân yêu",
    composer: "Bùi Anh Tôn",
  },
  11: {
    theme: "Mái trường thân yêu",
    lessonTitle: "Ôn tập đọc nhạc: Ban nhạc Đô – Rê - Mi - Nghe nhạc: Những bông hoa những bài ca",
    period: 11,
    adjustments: "Năng lực số: 2.1.CB1a: Lắng nghe, cảm nhận giai điệu bài hát được phát từ loa bluetooth/máy tính/danh sách phát nhạc số. | Năng lực AI: Nhận biết tìm kiếm bằng giọng nói AI có thể giúp tìm bài hát 'Những bông hoa những bài ca' dưới sự hướng dẫn của giáo viên.",
  },
  12: {
    theme: "Mái trường thân yêu",
    lessonTitle: "Ôn tập bài hát: Lớp Một thân yêu - Ôn tập đọc nhạc: Ban nhạc Đô – Rê - Mi",
    period: 12,
    adjustments: "Năng lực số: 1.1.CB1a; 4.3.CB1a; Ôn tập bài hát, đọc nhạc qua tranh, bản nhạc và trò chơi trình chiếu; giữ khoảng cách an toàn khi quan sát thiết bị số. | Năng lực AI: Nhận biết robot/trợ lý ảo trả lời hoặc phát nhạc theo lập trình, không có cảm xúc thật như con người.",
  },
  13: {
    theme: "Vòng tay bè bạn",
    lessonTitle: "Hát: Chào người bạn mới đến",
    period: 13,
    songTitle: "Chào người bạn mới đến",
    composer: "Phạm Tuyên",
  },
  14: {
    theme: "Vòng tay bè bạn",
    lessonTitle: "Ôn tập bài hát: Chào người bạn mới đến - Nhạc cụ: Trống con",
    period: 14,
    songTitle: "Chào người bạn mới đến",
    composer: "Phạm Tuyên",
  },
  15: {
    theme: "Vòng tay bè bạn",
    lessonTitle: "Thường thức âm nhạc: Trống cái - Nghe nhạc: Vũ khúc thiên nga",
    period: 15,
    adjustments: "Năng lực số: 1.1.CB1a; 4.3.CB1a; Nhận biết hình dáng, âm thanh Trống cái qua hình ảnh/video; giữ khoảng cách an toàn cho mắt khi quan sát màn hình. | Năng lực AI: Nhận biết con người có cảm xúc vui tươi khi nghe 'Vũ khúc thiên nga', còn thiết bị AI/loa thông minh chỉ thực hiện lệnh phát âm thanh.",
  },
  16: {
    theme: "Ôn tập và đánh giá cuối học kì I",
    lessonTitle: "Ôn tập cuối học kì I",
    period: 16,
    adjustments: "Năng lực số: 1.1.CB1a: Ôn tập cao độ Đô - Rê - Mi qua bản nhạc số, mẫu tiết tấu và tranh chủ đề trình chiếu trên thiết bị lớp học. | Năng lực AI: Nhận biết công cụ số/AI có thể hỗ trợ hiển thị, phát mẫu nhưng không thay thế việc luyện tập của học sinh.",
  },
  17: {
    theme: "Ôn tập và đánh giá cuối học kì I",
    lessonTitle: "Ôn tập cuối học kì I",
    period: 17,
  },
  18: {
    theme: "Ôn tập và đánh giá cuối học kì I",
    lessonTitle: "Đánh giá cuối học kì I",
    period: 18,
  },
  19: {
    theme: "Nhịp điệu mùa xuân",
    lessonTitle: "Hát: Xúc xắc xúc xẻ",
    period: 19,
    adjustments: "Năng lực số: 1.1.CB1a: Nhận biết thông tin dạng âm thanh, hình ảnh về ngày Tết trên tivi/máy tính của giáo viên khi học bài 'Xúc xắc xúc xẻ'. | Năng lực AI: Nhận biết điện thoại/loa có trợ lý ảo AI chỉ hỗ trợ phát thông tin, âm thanh theo lệnh của con người.",
    songTitle: "Xúc xắc xúc xẻ",
    composer: "Dân ca",
  },
  20: {
    theme: "Nhịp điệu mùa xuân",
    lessonTitle: "Ôn tập bài hát: Xúc xắc xúc xẻ - Đọc nhạc: Những người bạn của Đô – Rê – Mi",
    period: 20,
    songTitle: "Xúc xắc xúc xẻ",
  },
  21: {
    theme: "Nhịp điệu mùa xuân",
    lessonTitle: "Ôn tập đọc nhạc: Những người bạn của Đô – Rê – Mi - Thường thức âm nhạc: Nhạc sĩ Vôn-găng A-ma-đớt Mô-da",
    period: 21,
    adjustments: "Năng lực số: 1.1.CB1a: Nhận biết thông tin dạng hình ảnh và âm thanh về nhạc sĩ Mô-da trên thiết bị số. | Năng lực AI: Nhận biết công cụ số/AI có thể tìm và phát tư liệu, học sinh cần nghe, cảm nhận và trả lời bằng suy nghĩ của mình.",
  },
  22: {
    theme: "Nhịp điệu mùa xuân",
    lessonTitle: "Ôn tập bài hát: Xúc xắc xúc xẻ",
    period: 22,
    songTitle: "Xúc xắc xúc xẻ",
  },
  23: {
    theme: "Về miền dân ca",
    lessonTitle: "Hát: Gà gáy",
    period: 23,
    songTitle: "Gà gáy",
    composer: "Dân ca Cống Khao",
  },
  24: {
    theme: "Về miền dân ca",
    lessonTitle: "Ôn tập bài hát: Gà gáy - Nhạc cụ: Thanh phách",
    period: 24,
    adjustments: "Năng lực số: 1.1.CB1a: Sử dụng máy tính bảng để mở tệp âm thanh bài 'Gà gáy' phục vụ ôn tập theo nhóm. | Năng lực AI: Nhận biết thiết bị số/AI hỗ trợ phát mẫu, còn thao tác gõ thanh phách và biểu diễn do học sinh thực hiện.",
    songTitle: "Gà gáy",
  },
  25: {
    theme: "Về miền dân ca",
    lessonTitle: "Thường thức âm nhạc: Câu chuyện về thanh phách",
    period: 25,
    adjustments: "Năng lực số: 2.1.CB1a: Tương tác đơn giản bằng cách chạm màn hình máy tính bảng để xem tranh minh họa câu chuyện về thanh phách. | Năng lực AI: Nhận biết thiết bị thông minh có thể hỗ trợ trình chiếu/kể chuyện, nhưng không thay thế người kể chuyện và cảm nhận âm nhạc dân tộc.",
  },
  26: {
    theme: "Về miền dân ca",
    lessonTitle: "Ôn tập bài hát: Gà gáy - Nghe nhạc: Bài hát Lí cây bông",
    period: 26,
    adjustments: "Năng lực số: 1.1.CB1a: Sử dụng máy tính bảng để mở, nghe lại giai điệu bài 'Gà gáy' phục vụ tự ôn tập. | Năng lực AI: Nhận biết loa thông minh có thể tự động phát bài 'Lí cây bông' khi nhận lệnh bằng giọng nói.",
    songTitle: "Lí cây bông",
  },
  27: {
    theme: "Gia đình",
    lessonTitle: "Hát: Cây gia đình",
    period: 27,
    songTitle: "Cây gia đình",
  },
  28: {
    theme: "Gia đình",
    lessonTitle: "Ôn tập bài hát: Cây gia đình - Đọc nhạc: Hát cùng Đô- Rê - Mi-Pha-Son",
    period: 28,
    adjustments: "Năng lực số: 4.3.CB1a; 2.1.CB1a; 1.1.CB1a: Nghe file âm thanh trên máy tính, quan sát nốt Đô - Rê - Mi - Pha - Son trên màn hình, giữ tư thế an toàn khi học. | Năng lực AI: Nhận biết công cụ số/AI có thể phát mẫu âm, nhưng học sinh cần tự đọc và thể hiện cao độ.",
  },
  29: {
    theme: "Gia đình",
    lessonTitle: "Ôn tập đọc nhạc: Hát cùng Đô – Rê – Mi – Pha - Son - Nghe nhạc: Bài hát Con chim Vành Khuyên",
    period: 29,
    adjustments: "Năng lực số: 1.1.CB1a: Quan sát hình ảnh/video chú chim vành khuyên trên màn hình máy tính để nhận biết đặc điểm, âm thanh. | Năng lực AI: Biết chim ảo/trợ lý ảo phát lời chào là do lập trình; chỉ con người có cảm xúc lễ phép, kính trọng thật sự.",
  },
  30: {
    theme: "Gia đình",
    lessonTitle: "Ôn tập bài hát: Cây gia đình",
    period: 30,
    songTitle: "Cây gia đình",
  },
  31: {
    theme: "Vui đón hè",
    lessonTitle: "Hát: Ngôi sao lấp lánh",
    period: 31,
    songTitle: "Ngôi sao lấp lánh",
  },
  32: {
    theme: "Vui đón hè",
    lessonTitle: "Ôn tập bài hát: Ngôi sao lấp lánh - Nhạc cụ: Trai-eng-gồ",
    period: 32,
    songTitle: "Ngôi sao lấp lánh",
  },
  33: {
    theme: "Ôn tập và đánh giá cuối năm học",
    lessonTitle: "Ôn tập cuối năm",
    period: 33,
  },
  34: {
    theme: "Ôn tập và đánh giá cuối năm học",
    lessonTitle: "Ôn tập cuối năm",
    period: 34,
  },
  35: {
    theme: "Ôn tập và đánh giá cuối năm học",
    lessonTitle: "Đánh giá cuối năm",
    period: 35,
  }
};

export const MUSIC_GRADE_2: Record<number, OfficialMusicWeekItem> = {
  1: {
    theme: "Sắc màu âm thanh",
    lessonTitle: "Hát: Dàn nhạc trong vườn",
    period: 1,
    adjustments: "Năng lực số: 1.1.CB1a: Lắng nghe, nhận biết âm thanh bài hát từ máy tính/loa thông minh; tìm kiếm, mở video bài hát trên internet dưới sự hướng dẫn của người lớn. | Năng lực AI: Nhận biết bài hát do nhạc sĩ Tô Đông Hải sáng tác, phân biệt với đoạn nhạc ngắn do AI tạo ra.",
    songTitle: "Dàn nhạc trong vườn",
    composer: "Tô Đông Hải",
  },
  2: {
    theme: "Sắc màu âm thanh",
    lessonTitle: "Ôn tập bài hát: Dàn nhạc trong vườn - TTAN: Ước mơ của bạn Đô",
    period: 2,
    songTitle: "Dàn nhạc trong vườn",
    composer: "Tô Đông Hải",
  },
  3: {
    theme: "Sắc màu âm thanh",
    lessonTitle: "Đọc nhạc: Bài số 1",
    period: 3,
  },
  4: {
    theme: "Sắc màu âm thanh",
    lessonTitle: "Ôn đọc nhạc: Bài số 1 - Ôn tập bài hát: Dàn nhạc trong vườn",
    period: 4,
    adjustments: "Năng lực số: 2.2.CB1a: Chia sẻ tệp ghi âm bài hát/bài đọc nhạc với người thân qua ứng dụng liên lạc dưới sự giám sát của bố mẹ.",
    songTitle: "Dàn nhạc trong vườn",
  },
  5: {
    theme: "Em yêu làn điệu dân ca",
    lessonTitle: "Hát: Con chim chích chòe",
    period: 5,
    adjustments: "Năng lực số: 4.3.CB1a: Giữ tư thế ngồi, khoảng cách an toàn khi quan sát hình ảnh/video trên tivi hoặc máy chiếu. | Năng lực AI: Nhận biết loa thông minh/thiết bị tích hợp AI có thể hỗ trợ tìm kiếm và phát bài hát nhanh chóng.",
    songTitle: "Con chim chích chòe",
    composer: "Dân ca",
  },
  6: {
    theme: "Em yêu làn điệu dân ca",
    lessonTitle: "Ôn tập bài hát: Con chim chích chòe - Nhạc cụ: Song loan",
    period: 6,
    songTitle: "Con chim chích chòe",
  },
  7: {
    theme: "Em yêu làn điệu dân ca",
    lessonTitle: "TTAN: Đàn bầu Việt Nam - Vận dụng - sáng tạo",
    period: 7,
    adjustments: "Năng lực số: 1.1.CB1a: Quan sát, nhận biết biểu tượng âm thanh, hình ảnh trên trang web chia sẻ video khi giáo viên tìm kiếm tư liệu về đàn bầu.",
  },
  8: {
    theme: "Em yêu làn điệu dân ca",
    lessonTitle: "Ôn tập bài hát: Con chim chích chòe",
    period: 8,
    songTitle: "Con chim chích chòe",
  },
  9: {
    theme: "Mái trường thân yêu",
    lessonTitle: "Hát: Học sinh lớp Hai chăm ngoan",
    period: 9,
    adjustments: "Năng lực số: 4.3.CB1a: Tự điều chỉnh âm lượng loa/tai nghe ở mức vừa phải khi nghe nhạc mẫu để bảo vệ thính giác. | Năng lực AI: Nhận biết loa thông minh có thể tìm kiếm, phát bài hát bằng giọng nói để tiết kiệm thời gian.",
    songTitle: "Học sinh lớp Hai chăm ngoan",
  },
  10: {
    theme: "Mái trường thân yêu",
    lessonTitle: "Ôn tập bài hát: Học sinh lớp Hai chăm ngoan - Đọc nhạc: Bài số 2",
    period: 10,
    songTitle: "Học sinh lớp Hai chăm ngoan",
  },
  11: {
    theme: "Mái trường thân yêu",
    lessonTitle: "Ôn tập đọc nhạc: Bài số 2 - Nghe nhạc: Vui tới trường",
    period: 11,
  },
  12: {
    theme: "Mái trường thân yêu",
    lessonTitle: "Ôn đọc nhạc: Bài số 2 - Ôn tập bài hát: Học sinh lớp Hai chăm ngoan",
    period: 12,
    adjustments: "Năng lực số: 1.1.CB1a: Tìm kiếm và lựa chọn đúng video bài hát trên môi trường số dưới sự giám sát của người lớn để tự ôn tập.",
    songTitle: "Học sinh lớp Hai chăm ngoan",
  },
  13: {
    theme: "Tuổi thơ",
    lessonTitle: "Hát: Chú chim nhỏ dễ thương",
    period: 13,
    adjustments: "Năng lực số: 1.1.CB1a; 4.3.CB1a: Tìm kiếm hình ảnh chú chim nhỏ trên internet; giữ tư thế, khoảng cách an toàn khi xem bản đồ nước Pháp trên máy chiếu. | Năng lực AI: Nhận biết tình huống dùng công cụ tìm kiếm thông minh để hỗ trợ tìm nhanh hình ảnh các loài chim.",
    songTitle: "Chú chim nhỏ dễ thương",
  },
  14: {
    theme: "Tuổi thơ",
    lessonTitle: "Ôn tập bài hát: Chú chim nhỏ dễ thương - Nghe nhạc: Múa sư tử thật là vui",
    period: 14,
    songTitle: "Chú chim nhỏ dễ thương",
  },
  15: {
    theme: "Tuổi thơ",
    lessonTitle: "Nhạc cụ: Dùng nhạc cụ gõ thể hiện hình tiết tấu",
    period: 15,
  },
  16: {
    theme: "Tuổi thơ",
    lessonTitle: "Ôn tập cuối học kì I",
    period: 16,
    adjustments: "Năng lực số: 1.1.CB1a; 4.3.CB1a Tìm kiếm và mở lại video các bài hát đã học trong học kì I trên kênh an toàn cho trẻ; bảo vệ mắt khi ôn tập qua màn hình.",
  },
  17: {
    theme: "Tuổi thơ",
    lessonTitle: "Ôn tập cuối học kì I",
    period: 17,
  },
  18: {
    theme: "Tuổi thơ",
    lessonTitle: "Kiểm tra đánh giá cuối học kì I - Biểu diễn bài hát đã học",
    period: 18,
  },
  19: {
    theme: "Mùa xuân",
    lessonTitle: "Hát: Hoa lá mùa xuân",
    period: 19,
    adjustments: "Năng lực số: 4.1.CB1a; 1.1.CB1b; Nhận biết, khởi động thiết bị số để chuẩn bị mở file âm thanh; quan sát giáo viên mở trình duyệt tìm video bài hát. | Năng lực AI: Nhận biết trợ lý ảo trên tivi/loa thông minh có thể tìm kiếm và phát bài hát nhanh chóng, hiệu quả.",
    songTitle: "Hoa lá mùa xuân",
  },
  20: {
    theme: "Mùa xuân",
    lessonTitle: "Ôn tập bài hát: Hoa lá mùa xuân - Đọc nhạc: Bài số 3",
    period: 20,
    songTitle: "Hoa lá mùa xuân",
  },
  21: {
    theme: "Mùa xuân",
    lessonTitle: "Ôn đọc nhạc: Bài số 3 - TTAN: Câu chuyện về bài hát Chú voi con ở Bản Đôn - Vận dụng - sáng tạo",
    period: 21,
    adjustments: "Năng lực số: 2.1.CB1a: Chạm màn hình/nhấp chuột để dừng, phát video câu chuyện âm nhạc trên máy tính dưới sự hướng dẫn.",
  },
  22: {
    theme: "Mùa xuân",
    lessonTitle: "Ôn tập: Hát và đọc nhạc - Vận dụng - sáng tạo",
    period: 22,
    adjustments: "Năng lực số: 4.1.CB1c: Biết bảo quản, không tự ý chạm vào dây cắm, nguồn điện của loa và máy tính để đảm bảo an toàn thiết bị và bản thân.",
  },
  23: {
    theme: "Gia đình yêu thương",
    lessonTitle: "Hát: Mẹ ơi có biết",
    period: 23,
    adjustments: "Năng lực số: 1.1.CB1a: Truy cập tệp âm thanh bài hát trên máy tính giáo viên để nghe mẫu. | Năng lực AI: Nhận biết loa thông minh/tivi thông minh có thể tự động tìm kiếm, phát bài hát để hỗ trợ sinh hoạt gia đình.",
    songTitle: "Mẹ ơi có biết",
  },
  24: {
    theme: "Gia đình yêu thương",
    lessonTitle: "Ôn tập bài hát: Mẹ ơi có biết - Nghe nhạc: Ru con",
    period: 24,
    songTitle: "Mẹ ơi có biết",
  },
  25: {
    theme: "Gia đình yêu thương",
    lessonTitle: "TTAN - Nhạc cụ: Ma-ra-cát (Maracas) - Vận dụng - sáng tạo",
    period: 25,
    adjustments: "Năng lực số: 1.1.CB: Nhận biết hình ảnh và âm thanh nhạc cụ ma-ra-cát qua video clip ngắn trên máy tính của giáo viên.",
  },
  26: {
    theme: "Gia đình yêu thương",
    lessonTitle: "Luyện tập và biểu diễn: Mẹ ơi có biết",
    period: 26,
    adjustments: "Năng lực số: 2.1.CB1a: Hợp tác trong nhóm để quan sát video biểu diễn mẫu trên màn hình máy tính trước khi lên sân khấu biểu diễn.",
    songTitle: "Mẹ ơi có biết",
  },
  27: {
    theme: "Những con vật quanh em",
    lessonTitle: "Hát: Trang trại vui vẻ",
    period: 27,
    adjustments: "Năng lực số: 2.1.CB1a: Sử dụng thiết bị số để nghe và xem video bài hát mẫu một cách chủ động dưới sự hướng dẫn của giáo viên.",
    songTitle: "Trang trại vui vẻ",
  },
  28: {
    theme: "Những con vật quanh em",
    lessonTitle: "Ôn bài hát: Trang trại vui vẻ - Đọc nhạc: Bài số 4",
    period: 28,
    songTitle: "Trang trại vui vẻ",
  },
  29: {
    theme: "Những con vật quanh em",
    lessonTitle: "Ôn đọc nhạc: Bài số 4 - Nghe nhạc: Vũ khúc Đàn gà con",
    period: 29,
  },
  30: {
    theme: "Những con vật quanh em",
    lessonTitle: "Ôn tập: Hát và đọc nhạc - Vận dụng - sáng tạo",
    period: 30,
  },
  31: {
    theme: "Mùa hè vui",
    lessonTitle: "Hát: Ngày hè vui",
    period: 31,
    adjustments: "Năng lực số: 1.1.CB1a; 4.1.CB1a: Tìm kiếm bài hát đơn giản trên môi trường số; tắt tivi/máy chiếu đúng cách để bảo vệ thiết bị. | Năng lực AI: Nhận biết loa thông minh hỗ trợ tìm kiếm và phát nhạc bằng giọng nói.",
    songTitle: "Ngày hè vui",
  },
  32: {
    theme: "Mùa hè vui",
    lessonTitle: "Ôn bài hát: Ngày hè vui - Nhạc cụ: Dùng nhạc cụ gõ thể hiện hình tiết tấu",
    period: 32,
    songTitle: "Ngày hè vui",
  },
  33: {
    theme: "Mùa hè vui",
    lessonTitle: "Nghe nhạc: Mùa hè ước mong - Vận dụng - sáng tạo",
    period: 33,
  },
  34: {
    theme: "Mùa hè vui",
    lessonTitle: "Ôn tập cuối năm",
    period: 34,
  },
  35: {
    theme: "Mùa hè vui",
    lessonTitle: "Kiểm tra đánh giá cuối năm",
    period: 35,
  }
};

export const MUSIC_GRADE_3: Record<number, OfficialMusicWeekItem> = {
  1: {
    theme: "Lễ hội âm thanh",
    lessonTitle: "Hát: Múa lân",
    period: 1,
    songTitle: "Múa lân",
  },
  2: {
    theme: "Lễ hội âm thanh",
    lessonTitle: "Ôn tập bài hát: Múa lân - Đọc nhạc: Bài số 1",
    period: 2,
    songTitle: "Múa lân",
  },
  3: {
    theme: "Lễ hội âm thanh",
    lessonTitle: "Ôn đọc nhạc: Bài số 1 - TTAN: Dàn trống dân tộc",
    period: 3,
    adjustments: "Năng lực số: 1.1.CB1a: Tìm kiếm, xem video biểu diễn dàn trống dân tộc trên trang web chia sẻ video an toàn. | Năng lực AI: Phân biệt âm thanh trống thật với âm thanh trống giả lập do AI tạo ra.",
  },
  4: {
    theme: "Lễ hội âm thanh",
    lessonTitle: "Tổ chức hoạt động Vận dụng - Sáng tạo",
    period: 4,
    adjustments: "Năng lực số: 4.1.CB1a: Tắt/mở thiết bị âm thanh số như loa cầm tay, máy nghe nhạc đúng quy trình và an toàn sau hoạt động biểu diễn nhóm.",
  },
  5: {
    theme: "Em yêu Tổ quốc Việt Nam",
    lessonTitle: "Hát: Quốc ca Việt Nam",
    period: 5,
    adjustments: "Năng lực số: 1.1.CB1a: Quan sát giáo viên truy cập thư mục và mở file âm thanh mp3 bài Quốc ca Việt Nam trên máy tính. | Năng lực AI: Nhận biết trợ lý giọng nói có thể hỗ trợ tìm kiếm nhanh bài hát, nhưng cần chọn nguồn chính thống.",
    songTitle: "Quốc ca Việt Nam",
    composer: "Văn Cao",
  },
  6: {
    theme: "Em yêu Tổ quốc Việt Nam",
    lessonTitle: "Ôn bài hát: Quốc ca Việt Nam - Nghe nhạc: Ca ngợi Tổ quốc",
    period: 6,
    songTitle: "Quốc ca Việt Nam",
    composer: "Văn Cao",
  },
  7: {
    theme: "Em yêu Tổ quốc Việt Nam",
    lessonTitle: "Nhạc cụ: Ma-ra-cát (Maracas)",
    period: 7,
    adjustments: "Năng lực số: 1.1.CB1a: Quan sát hình ảnh, video giới thiệu cấu tạo và âm thanh nhạc cụ ma-ra-cát trên thiết bị số của giáo viên.",
  },
  8: {
    theme: "Em yêu Tổ quốc Việt Nam",
    lessonTitle: "Tổ chức hoạt động Vận dụng - Sáng tạo",
    period: 8,
  },
  9: {
    theme: "Vui đến trường",
    lessonTitle: "Hát: Vui đến trường",
    period: 9,
    adjustments: "Năng lực số: 1.1.CB1a: Tìm kiếm và mở video bài hát Vui đến trường trên Youtube theo hướng dẫn của giáo viên.",
    songTitle: "Vui đến trường",
  },
  10: {
    theme: "Vui đến trường",
    lessonTitle: "Ôn bài hát: Vui đến trường - Đọc nhạc: Bài số 2",
    period: 10,
    songTitle: "Vui đến trường",
  },
  11: {
    theme: "Vui đến trường",
    lessonTitle: "Ôn đọc nhạc: Bài số 2 - Nghe nhạc: Đi học",
    period: 11,
  },
  12: {
    theme: "Vui đến trường",
    lessonTitle: "Tổ chức hoạt động Vận dụng - Sáng tạo",
    period: 12,
    adjustments: "Năng lực số: 3.1.CB1a: Sử dụng công cụ ghi âm đơn giản trên máy tính bảng để ghi lại phần biểu diễn hát kết hợp vận động cơ thể của nhóm.",
  },
  13: {
    theme: "Em yêu làn điệu dân ca",
    lessonTitle: "Hát: Khúc nhạc trên nương xa",
    period: 13,
    songTitle: "Khúc nhạc trên nương xa",
  },
  14: {
    theme: "Em yêu làn điệu dân ca",
    lessonTitle: "Ôn bài hát: Khúc nhạc trên nương xa - Nhạc cụ: Thể hiện hình tiết tấu bằng nhạc cụ gõ",
    period: 14,
    adjustments: "Năng lực số: 4.3.CB1a: Điều chỉnh tư thế ngồi và khoảng cách mắt an toàn khi quan sát hình ảnh tiết tấu trên tivi/máy chiếu.",
    songTitle: "Khúc nhạc trên nương xa",
  },
  15: {
    theme: "Em yêu làn điệu dân ca",
    lessonTitle: "Nghe nhạc: Suối đàn t'rưng - TTAN: Những khúc hát ru",
    period: 15,
    adjustments: "Năng lực số: 4.3.CB1a: Điều chỉnh âm lượng loa hoặc thiết bị nghe nhạc số ở mức vừa phải để bảo vệ thính giác khi nghe nhạc.",
  },
  16: {
    theme: "Em yêu làn điệu dân ca",
    lessonTitle: "Tổ chức hoạt động Vận dụng - Sáng tạo",
    period: 16,
  },
  17: {
    theme: "Ôn tập cuối học kì I",
    lessonTitle: "Ôn tập cuối học kì I",
    period: 17,
  },
  18: {
    theme: "Ôn tập cuối học kì I",
    lessonTitle: "Tập biểu diễn/đánh giá cuối học kì I",
    period: 18,
  },
  19: {
    theme: "Đón xuân về",
    lessonTitle: "Hát: Đón xuân về",
    period: 19,
    adjustments: "Năng lực số: 1.1.CB1a: Tìm kiếm và mở video bài hát Đón xuân về trên Youtube bằng từ khóa hoặc giọng nói. | Năng lực AI: Nhận biết tìm kiếm bằng giọng nói là ứng dụng AI hỗ trợ tìm kiếm nhanh.",
    songTitle: "Đón xuân về",
  },
  20: {
    theme: "Đón xuân về",
    lessonTitle: "Ôn bài hát: Đón xuân về - Đọc nhạc: Bài số 3",
    period: 20,
    songTitle: "Đón xuân về",
  },
  21: {
    theme: "Đón xuân về",
    lessonTitle: "Ôn đọc nhạc: Bài số 3 - TTAN: Giới thiệu đàn vi-ô-lông - Nghe nhạc: Mùa xuân ơi",
    period: 21,
    adjustments: "Năng lực số: 1.3.CB1a: Quan sát hình ảnh và nghe âm thanh đàn vi-ô-lông qua phần mềm học tập/trang web âm nhạc. | Năng lực AI: Nhận biết AI có thể nhận diện âm thanh nhạc cụ, nhưng con người mới cảm nhận vẻ đẹp và cảm xúc âm nhạc.",
  },
  22: {
    theme: "Đón xuân về",
    lessonTitle: "Tổ chức hoạt động Vận dụng - Sáng tạo",
    period: 22,
  },
  23: {
    theme: "Đẹp mãi tuổi thơ",
    lessonTitle: "Hát: Đẹp mãi tuổi thơ",
    period: 23,
    adjustments: "Năng lực số: 1.1.CB1a: Tìm kiếm, truy cập video bài hát Đẹp mãi tuổi thơ trên Youtube để luyện tập hát tại nhà. | Năng lực AI: Nhận biết trợ lý ảo hỗ trợ tìm kiếm, phát nhạc tự động nhưng không phụ thuộc hoàn toàn khi rèn luyện giọng hát.",
    songTitle: "Đẹp mãi tuổi thơ",
  },
  24: {
    theme: "Đẹp mãi tuổi thơ",
    lessonTitle: "Nghe nhạc: Ước mơ hồng - Ôn bài hát: Đẹp mãi tuổi thơ",
    period: 24,
    songTitle: "Đẹp mãi tuổi thơ",
  },
  25: {
    theme: "Đẹp mãi tuổi thơ",
    lessonTitle: "Nhạc cụ: Thể hiện các hình tiết tấu bằng nhạc cụ gõ",
    period: 25,
  },
  26: {
    theme: "Đẹp mãi tuổi thơ",
    lessonTitle: "Tổ chức hoạt động Vận dụng - Sáng tạo",
    period: 26,
  },
  27: {
    theme: "Âm nhạc nước ngoài",
    lessonTitle: "Hát: Con chim non",
    period: 27,
    adjustments: "Năng lực số: 1.1.CB1a: Tìm kiếm và xem hình ảnh, thông tin đơn giản về nước Pháp trên internet theo hướng dẫn. | Năng lực AI: Nhận biết công cụ tìm kiếm thông minh/trợ lý AI có thể gợi ý thông tin nhưng cần kiểm tra với SGK.",
    songTitle: "Con chim non",
  },
  28: {
    theme: "Âm nhạc nước ngoài",
    lessonTitle: "Ôn bài hát: Con chim non - Đọc nhạc: Bài số 4",
    period: 28,
    songTitle: "Con chim non",
  },
  29: {
    theme: "Âm nhạc nước ngoài",
    lessonTitle: "Ôn đọc nhạc: Bài số 4 - Nghe nhạc: Van-xơ Pha-vô-rít",
    period: 29,
    adjustments: "Năng lực số: 1.1.CB1a: Tìm kiếm, xem video biểu diễn điệu Valse cổ điển trên internet theo hướng dẫn.",
  },
  30: {
    theme: "Âm nhạc nước ngoài",
    lessonTitle: "Tổ chức hoạt động Vận dụng - Sáng tạo",
    period: 30,
    adjustments: "Năng lực số: 3.1.CB1a: Sử dụng phần mềm ghi âm đơn giản trên máy tính hoặc máy tính bảng để ghi âm giọng hát của nhóm.",
  },
  31: {
    theme: "Vui đón hè",
    lessonTitle: "Hát: Hè về vui quá",
    period: 31,
    adjustments: "Năng lực số: 1.1.CB1a: Tìm kiếm và truy cập video bài hát Hè về vui quá trên Youtube bằng máy tính/máy tính bảng.",
    songTitle: "Hè về vui quá",
  },
  32: {
    theme: "Vui đón hè",
    lessonTitle: "Ôn bài hát: Hè về vui quá - Nhạc cụ: Thể hiện hình tiết tấu bằng nhạc cụ gõ",
    period: 32,
    adjustments: "Năng lực số: 4.1.CB1a: Bật/tắt loa bluetooth hoặc máy nghe nhạc của lớp để phát file âm thanh hình tiết tấu an toàn.",
    songTitle: "Hè về vui quá",
  },
  33: {
    theme: "Vui đón hè",
    lessonTitle: "TTAN: Cá heo với âm nhạc - Hoạt động Vận dụng - Trải nghiệm",
    period: 33,
    adjustments: "Năng lực số: 4.1.CB1a: Khởi động và tắt an toàn máy tính bảng/máy tính sau khi xem video câu chuyện âm nhạc. | Năng lực AI: Nhận biết âm thanh mô phỏng tiếng cá heo hoặc nhạc nền do AI tạo ra có thể chưa giống tiếng thật.",
  },
  34: {
    theme: "Vui đón hè",
    lessonTitle: "Ôn tập cuối năm",
    period: 34,
    adjustments: "Năng lực số: 3.1.CB1a: Dùng chuột hoặc màn hình cảm ứng để chọn và mở các file âm thanh bài đọc nhạc trên máy tính của lớp.",
  },
  35: {
    theme: "Vui đón hè",
    lessonTitle: "Kiểm tra đánh giá cuối năm",
    period: 35,
  }
};

export const MUSIC_GRADE_4: Record<number, OfficialMusicWeekItem> = {
  1: {
    theme: "Âm thanh ngày mới",
    lessonTitle: "Lí thuyết âm nhạc: Một số kí hiệu ghi nhạc - Đọc nhạc: Bài số 1",
    period: 1,
  },
  2: {
    theme: "Âm thanh ngày mới",
    lessonTitle: "Ôn đọc nhạc: Bài số 1 - Hát: Chuông gió leng keng",
    period: 2,
    adjustments: "Năng lực số: 1.1.CB2a Tìm kiếm thông tin về nhạc sĩ Lê Vinh Phúc và bài hát Chuông gió leng keng trên Google.",
    songTitle: "Chuông gió leng keng",
    composer: "Lê Vinh Phúc",
  },
  3: {
    theme: "Âm thanh ngày mới",
    lessonTitle: "Ôn tập bài hát: Chuông gió leng keng - TTAN: Hình thức biểu diễn trong ca hát",
    period: 3,
    adjustments: "Năng lực số: 3.1.CB2a Sử dụng phần mềm ghi âm hoặc quay video trên điện thoại/máy tính bảng để ghi lại phần biểu diễn của nhóm, xem lại để tự đánh giá và điều chỉnh.",
    songTitle: "Chuông gió leng keng",
    composer: "Lê Vinh Phúc",
  },
  4: {
    theme: "Âm thanh ngày mới",
    lessonTitle: "Tổ chức hoạt động Vận dụng - Sáng tạo",
    period: 4,
  },
  5: {
    theme: "Giai điệu quê hương",
    lessonTitle: "Hát: Chim sáo",
    period: 5,
    adjustments: "Năng lực số: 1.1.CB2a: Truy cập và mở video luyện giọng, video bài hát Chim sáo trên Internet dưới sự hướng dẫn của giáo viên. | Năng lực AI: NLa Hiểu AI có thể hỗ trợ tạo nhạc đệm nhưng không thay thế cảm xúc, sự sáng tạo khi hát dân ca.",
    songTitle: "Chim sáo",
    composer: "Dân ca Nam Bộ",
  },
  6: {
    theme: "Giai điệu quê hương",
    lessonTitle: "Ôn bài hát: Chim sáo - Nhạc cụ: Thể hiện nhạc cụ gõ hoặc nhạc cụ giai điệu",
    period: 6,
    adjustments: "Năng lực số: 1.1.CB2a Sử dụng thiết bị số để xem video hướng dẫn tư thế thổi recorder/kèn phím; quan sát và thực hành theo hướng dẫn để gõ đệm, thổi nốt đúng.",
    songTitle: "Chim sáo",
  },
  7: {
    theme: "Giai điệu quê hương",
    lessonTitle: "TTAN: Giới thiệu đàn tranh - Nghe nhạc: Lí ngựa ô",
    period: 7,
    adjustments: "Năng lực số: 1.1.CB2a Tìm kiếm, lựa chọn video độc tấu/hòa tấu đàn tranh trên Internet để nhận biết hình dáng, cách chơi và âm sắc nhạc cụ dân tộc.",
  },
  8: {
    theme: "Giai điệu quê hương",
    lessonTitle: "Tổ chức hoạt động Vận dụng - Sáng tạo",
    period: 8,
  },
  9: {
    theme: "Thầy cô với chúng em",
    lessonTitle: "Lí thuyết âm nhạc: Giới thiệu các hình nốt - Đọc nhạc: Bài số 2",
    period: 9,
  },
  10: {
    theme: "Thầy cô với chúng em",
    lessonTitle: "Ôn đọc nhạc: Bài số 2 - Hát: Nếu em là...",
    period: 10,
    songTitle: "Nếu em là...",
  },
  11: {
    theme: "Thầy cô với chúng em",
    lessonTitle: "Ôn bài hát: Nếu em là... - Nghe nhạc: Điều mong ước tặng thầy",
    period: 11,
    adjustments: "Năng lực số: 2.2.CB2a Ghi âm phần hát của nhóm bằng điện thoại/máy tính, chia sẻ tệp lên nhóm học tập trực tuyến; tìm kiếm video bài Điều mong ước tặng thầy trên kênh học liệu chính thức.",
    songTitle: "Nếu em là...",
  },
  12: {
    theme: "Thầy cô với chúng em",
    lessonTitle: "Tổ chức hoạt động Vận dụng - Sáng tạo",
    period: 12,
    adjustments: "Năng lực số: 5.2.CB2a Truy cập học liệu điện tử để nghe lại bài hát và bài nghe nhạc khi ở nhà.",
  },
  13: {
    theme: "Vui đón Tết",
    lessonTitle: "Hát: Tết là tết",
    period: 13,
    adjustments: "Năng lực số: 1.1.CB2a Sử dụng trình duyệt web để tìm kiếm hình ảnh ngày Tết và thông tin ngắn gọn về nhạc sĩ Nhất Trung phục vụ bài học. | Năng lực AI: NLa-A1-L4 Nhận biết AI hỗ trợ tìm kiếm thông tin nhanh nhưng không thay thế cảm xúc vui tươi, ấm áp của con người khi hát.",
    songTitle: "Tết là tết",
    composer: "Nhất Trung",
  },
  14: {
    theme: "Vui đón Tết",
    lessonTitle: "Ôn bài hát: Tết là tết - Nhạc cụ: Thể hiện nhạc cụ gõ hoặc nhạc cụ giai điệu",
    period: 14,
    songTitle: "Tết là tết",
  },
  15: {
    theme: "Vui đón Tết",
    lessonTitle: "TTAN: Câu chuyện Pi-tơ và chó sói",
    period: 15,
  },
  16: {
    theme: "Vui đón Tết",
    lessonTitle: "Tổ chức hoạt động Vận dụng - Sáng tạo",
    period: 16,
  },
  17: {
    theme: "Ôn tập cuối học kì I",
    lessonTitle: "Ôn tập học kì I",
    period: 17,
  },
  18: {
    theme: "Ôn tập và đánh giá cuối học kì I",
    lessonTitle: "Kiểm tra đánh giá cuối học kì I - Biểu diễn một số bài hát đã học",
    period: 18,
  },
  19: {
    theme: "Thiên nhiên tươi đẹp",
    lessonTitle: "Lí thuyết âm nhạc: Dấu lặng - Đọc nhạc: Bài số 3",
    period: 19,
  },
  20: {
    theme: "Thiên nhiên tươi đẹp",
    lessonTitle: "Hát: Hạt mưa kể chuyện - Ôn đọc nhạc: Bài số 3",
    period: 20,
    adjustments: "Năng lực số: 4.3.CB2a Điều chỉnh tư thế ngồi thẳng lưng, giữ khoảng cách an toàn với màn hình máy chiếu khi quan sát video bài hát mẫu để bảo vệ thị lực và cột sống.",
    songTitle: "Hạt mưa kể chuyện",
  },
  21: {
    theme: "Thiên nhiên tươi đẹp",
    lessonTitle: "Ôn tập bài hát: Hạt mưa kể chuyện - Nghe nhạc: Không gian xanh",
    period: 21,
    adjustments: "Năng lực số: 2.2.CB2a Chia sẻ tệp ghi âm giọng hát của nhóm lên nhóm học tập trực tuyến để bạn bè cùng lắng nghe, nhận xét và góp ý.",
    songTitle: "Hạt mưa kể chuyện",
  },
  22: {
    theme: "Thiên nhiên tươi đẹp",
    lessonTitle: "Tổ chức hoạt động Vận dụng - Sáng tạo",
    period: 22,
  },
  23: {
    theme: "Tình bạn tuổi thơ",
    lessonTitle: "Hát: Tình bạn tuổi thơ",
    period: 23,
    adjustments: "Năng lực số: 1.1.CB2a Tìm kiếm và mở file âm thanh bài Tình bạn tuổi thơ trên học liệu số hoặc Internet bằng từ khóa đơn giản. | Năng lực AI: NLa Nhận biết AI có thể hỗ trợ tìm bài hát qua giai điệu nhưng không thay thế cảm xúc tự nhiên khi hát.",
    songTitle: "Tình bạn tuổi thơ",
  },
  24: {
    theme: "Tình bạn tuổi thơ",
    lessonTitle: "TTAN: Nhạc sĩ Lưu Hữu Phước và bài hát Reo vang bình minh - Ôn tập bài hát: Tình bạn tuổi thơ",
    period: 24,
    adjustments: "Năng lực số: 1.1.CB2a Tìm kiếm thông tin cơ bản về nhạc sĩ Lưu Hữu Phước trên công cụ tìm kiếm số bằng từ khóa chính xác, biết lựa chọn thông tin phù hợp với bài học.",
    songTitle: "Tình bạn tuổi thơ",
  },
  25: {
    theme: "Tình bạn tuổi thơ",
    lessonTitle: "Nhạc cụ: Thể hiện nhạc cụ gõ hoặc nhạc cụ giai điệu",
    period: 25,
  },
  26: {
    theme: "Tình bạn tuổi thơ",
    lessonTitle: "Tổ chức hoạt động Vận dụng - Sáng tạo",
    period: 26,
  },
  27: {
    theme: "Âm nhạc nước ngoài",
    lessonTitle: "Lí thuyết âm nhạc: Ôn tập - Đọc nhạc: Bài số 4",
    period: 27,
  },
  28: {
    theme: "Âm nhạc nước ngoài",
    lessonTitle: "Hát: Miền quê em",
    period: 28,
    songTitle: "Miền quê em",
  },
  29: {
    theme: "Âm nhạc nước ngoài",
    lessonTitle: "Ôn bài hát: Miền quê em - TTAN: Kèn trôm-pét (Trumpet) - Nghe nhạc: Khúc nhạc mở đầu",
    period: 29,
    adjustments: "Năng lực số: 1.1.CB2a; 4.3.CB2a Tìm kiếm thông tin, hình ảnh và âm thanh của kèn Trumpet trên Internet; điều chỉnh âm lượng thiết bị số ở mức vừa phải khi nghe nhạc. | Năng lực AI: NLa Phân biệt âm thanh kèn thật do nghệ sĩ biểu diễn với âm thanh giả lập bằng công nghệ AI.",
    songTitle: "Miền quê em",
  },
  30: {
    theme: "Âm nhạc nước ngoài",
    lessonTitle: "Tổ chức hoạt động Vận dụng - Sáng tạo",
    period: 30,
  },
  31: {
    theme: "Chào mùa hè",
    lessonTitle: "Hát: Em yêu mùa hè quê em",
    period: 31,
    adjustments: "Năng lực số: 1.1.CB2a Tìm kiếm thông tin về nhạc sĩ Trần Minh Đặng và bài hát Em yêu mùa hè quê em trên Google bằng từ khóa đơn giản, kiểm chứng thông tin với giáo viên.",
    songTitle: "Em yêu mùa hè quê em",
    composer: "Trần Minh Đặng",
  },
  32: {
    theme: "Chào mùa hè",
    lessonTitle: "Ôn bài hát: Em yêu mùa hè quê em - Nhạc cụ: Thể hiện nhạc cụ giai điệu",
    period: 32,
    songTitle: "Em yêu mùa hè quê em",
  },
  33: {
    theme: "Chào mùa hè",
    lessonTitle: "Nghe nhạc: Khúc ca vào hè - Tổ chức hoạt động Vận dụng - Sáng tạo",
    period: 33,
  },
  34: {
    theme: "Ôn tập cuối năm",
    lessonTitle: "Ôn tập cuối năm",
    period: 34,
  },
  35: {
    theme: "Ôn tập cuối năm",
    lessonTitle: "Ôn tập cuối năm - Kiểm tra - đánh giá",
    period: 35,
  }
};

export const MUSIC_GRADE_5: Record<number, OfficialMusicWeekItem> = {
  1: {
    theme: "Khúc ca ngày mới",
    lessonTitle: "Lí thuyết âm nhạc: Trọng âm, phách, vạch nhịp, ô nhịp - Đọc nhạc: Bài số 1",
    period: 1,
  },
  2: {
    theme: "Khúc ca ngày mới",
    lessonTitle: "Hát: Chim sơn ca",
    period: 2,
    adjustments: "Năng lực số: 3.1.CB2a: Nghe file mp3/mp4 bài hát, ghi âm phần hát của nhóm để tự đánh giá cao độ, trường độ và sắc thái thể hiện.",
    songTitle: "Chim sơn ca",
  },
  3: {
    theme: "Khúc ca ngày mới",
    lessonTitle: "Ôn đọc nhạc: Bài số 1 - Ôn bài hát: Chim sơn ca - TTAN: Một số hình thức biểu diễn nhạc cụ",
    period: 3,
    songTitle: "Chim sơn ca",
  },
  4: {
    theme: "Khúc ca ngày mới",
    lessonTitle: "Tổ chức hoạt động Vận dụng - Sáng tạo",
    period: 4,
  },
  5: {
    theme: "Giai điệu quê hương",
    lessonTitle: "Hát: Lí đất giồng",
    period: 5,
    adjustments: "Năng lực số: 1.1.CB2a; 1.2.CB2b: Tìm kiếm video biểu diễn bài Lí đất giồng trên Youtube, quan sát cách lấy hơi và biểu cảm của ca sĩ; xem bản đồ số vùng Nam Bộ. | Năng lực AI: NLaA2 Lớp 5 Nhận biết công cụ AI có thể gợi ý các bài dân ca Nam Bộ tương tự.",
    songTitle: "Lí đất giồng",
    composer: "Dân ca Nam Bộ",
  },
  6: {
    theme: "Giai điệu quê hương",
    lessonTitle: "Ôn bài hát: Lí đất giồng - Nhạc cụ: Nhạc cụ thể hiện tiết tấu và nhạc cụ thể hiện giai điệu",
    period: 6,
    songTitle: "Lí đất giồng",
  },
  7: {
    theme: "Giai điệu quê hương",
    lessonTitle: "Ôn nhạc cụ: Nhạc cụ thể hiện tiết tấu và nhạc cụ thể hiện giai điệu - TTAN: Đàn nhị",
    period: 7,
    adjustments: "Năng lực số: 1.1.CB2a; 1.1.CB2b: Tìm kiếm, lựa chọn video độc tấu đàn nhị và thông tin nghệ sĩ đàn nhị trên Internet.",
  },
  8: {
    theme: "Giai điệu quê hương",
    lessonTitle: "Tổ chức hoạt động Vận dụng - Sáng tạo",
    period: 8,
  },
  9: {
    theme: "Bay vào tương lai",
    lessonTitle: "Lí thuyết âm nhạc: Nhịp 2/4 - Đọc nhạc: Bài số 2",
    period: 9,
    adjustments: "Năng lực số: 1.1.CB2a: Tìm kiếm, lọc thông tin, hình ảnh, video minh họa về nhịp 2/4; tìm video bài hát thiếu nhi viết ở nhịp 2/4 để cảm nhận nhịp điệu.",
  },
  10: {
    theme: "Bay vào tương lai",
    lessonTitle: "Ôn đọc nhạc: Bài số 2 - Hát: Bay vào tương lai",
    period: 10,
    songTitle: "Bay vào tương lai",
  },
  11: {
    theme: "Bay vào tương lai",
    lessonTitle: "Ôn bài hát: Bay vào tương lai - Nghe nhạc: Đường đến trường vui lắm!",
    period: 11,
    adjustments: "Năng lực số: 2.4.CB2a: Sử dụng máy tính bảng quay video ngắn phần biểu diễn hát kết hợp phụ họa của nhóm, xem lại để tự nhận xét và điều chỉnh.",
    songTitle: "Bay vào tương lai",
  },
  12: {
    theme: "Bay vào tương lai",
    lessonTitle: "Tổ chức hoạt động Vận dụng - Sáng tạo",
    period: 12,
  },
  13: {
    theme: "Chào mùa xuân đến",
    lessonTitle: "Hát: Duyên dáng mùa xuân",
    period: 13,
    adjustments: "Năng lực số: 1.1.CB2a: Truy cập đúng nguồn học liệu số, mở file mp3/mp4 bài Duyên dáng mùa xuân trên Internet hoặc trang học liệu của nhà xuất bản để học hát an toàn.",
    songTitle: "Duyên dáng mùa xuân",
  },
  14: {
    theme: "Chào mùa xuân đến",
    lessonTitle: "Ôn bài hát: Duyên dáng mùa xuân - Nhạc cụ: Nhạc cụ thể hiện tiết tấu và nhạc cụ thể hiện giai điệu",
    period: 14,
    songTitle: "Duyên dáng mùa xuân",
  },
  15: {
    theme: "Chào mùa xuân đến",
    lessonTitle: "TTAN: Câu chuyện về bản xô-nát Ánh trăng - Ôn nhạc cụ",
    period: 15,
    adjustments: "Năng lực số: 1.1.CB2a; 2.2.CB2a: Tìm kiếm, nghe và quan sát học liệu số về bản xô-nát Ánh trăng và biểu diễn nhạc cụ; ghi âm/ghi hình phần biểu diễn.",
  },
  16: {
    theme: "Chào mùa xuân đến",
    lessonTitle: "Tổ chức hoạt động Vận dụng - Sáng tạo",
    period: 16,
  },
  17: {
    theme: "Ôn tập cuối học kì I",
    lessonTitle: "Ôn tập cuối học kì I",
    period: 17,
  },
  18: {
    theme: "Ôn tập và đánh giá cuối học kì I",
    lessonTitle: "Biểu diễn một số bài hát đã học - Kiểm tra, đánh giá cuối học kì I",
    period: 18,
  },
  19: {
    theme: "Thiên nhiên tươi đẹp",
    lessonTitle: "Lí thuyết âm nhạc: Nhịp 3/4 - Đọc nhạc: Bài số 3",
    period: 19,
  },
  20: {
    theme: "Thiên nhiên tươi đẹp",
    lessonTitle: "TTAN: Nhạc sĩ Bùi Đình Thảo và bài hát Sách bút thân yêu ơi - Ôn đọc nhạc: Bài số 3",
    period: 20,
    adjustments: "Năng lực số: 1.1.CB2a: Sử dụng công cụ tìm kiếm trên Internet để chủ động tìm kiếm và lựa chọn thông tin, hình ảnh chính xác về cuộc đời, sự nghiệp của nhạc sĩ Bùi Đình Thảo.",
  },
  21: {
    theme: "Thiên nhiên tươi đẹp",
    lessonTitle: "Hát: Em đi giữa biển vàng",
    period: 21,
    adjustments: "Năng lực số: 1.1.CB2a: Nghe file học liệu điện tử, quan sát hình ảnh minh họa về đồng lúa, người nông dân và luyện hát với nhạc đệm để thể hiện đúng sắc thái bài hát.",
    songTitle: "Em đi giữa biển vàng",
    composer: "Bùi Đình Thảo",
  },
  22: {
    theme: "Thiên nhiên tươi đẹp",
    lessonTitle: "Ôn hát: Em đi giữa biển vàng - Tổ chức hoạt động Vận dụng - Sáng tạo",
    period: 22,
    songTitle: "Em đi giữa biển vàng",
  },
  23: {
    theme: "Ước mơ tuổi thơ",
    lessonTitle: "Hát: Tuổi hồng ơi",
    period: 23,
    adjustments: "Năng lực số: 1.1.CB2a: Tìm kiếm, truy cập video biểu diễn, file nhạc đệm bài Tuổi hồng ơi để học tập phong cách biểu diễn. | Năng lực AI: NLa-A2-Lớp 5 Nhận biết sự khác biệt về cảm xúc giữa tác phẩm do con người sáng tác và đoạn nhạc do AI mô phỏng.",
    songTitle: "Tuổi hồng ơi",
  },
  24: {
    theme: "Ước mơ tuổi thơ",
    lessonTitle: "Ôn bài hát: Tuổi hồng ơi - Nhạc cụ: Nhạc cụ thể hiện tiết tấu và nhạc cụ thể hiện giai điệu",
    period: 24,
    adjustments: "Năng lực số: 2.1.CB2a; 3.1.CB2a: Sử dụng thiết bị số để quan sát trực quan hình nốt, âm hình tiết tấu và mẫu âm nhạc cụ; ghi âm phần trình diễn hát/gõ đệm của nhóm để tự đánh giá.",
    songTitle: "Tuổi hồng ơi",
  },
  25: {
    theme: "Ước mơ tuổi thơ",
    lessonTitle: "Ôn nhạc cụ - Nghe nhạc: Ngôi sao sáng",
    period: 25,
    adjustments: "Năng lực số: 1.1.CB2a: Tìm kiếm, xem video biểu diễn nhạc cụ dân tộc trên Internet để mở rộng hiểu biết; nghe hòa tấu dân ca Khmer và vận động theo nhạc.",
  },
  26: {
    theme: "Ước mơ tuổi thơ",
    lessonTitle: "Tổ chức hoạt động Vận dụng - Sáng tạo",
    period: 26,
  },
  27: {
    theme: "Âm nhạc nước ngoài",
    lessonTitle: "Lí thuyết âm nhạc: Ôn tập - Đọc nhạc: Bài số 4",
    period: 27,
  },
  28: {
    theme: "Âm nhạc nước ngoài",
    lessonTitle: "Hát: Đất nước tươi đẹp sao - Ôn tập Bài số 4",
    period: 28,
    adjustments: "Năng lực số: 1.3.CB2a: Lưu trữ file âm thanh bài Đất nước tươi đẹp sao vào thư mục Âm nhạc Lớp 5 trên máy tính cá nhân để luyện tập tại nhà.",
    songTitle: "Đất nước tươi đẹp sao",
  },
  29: {
    theme: "Âm nhạc nước ngoài",
    lessonTitle: "Ôn bài hát: Đất nước tươi đẹp sao - TTAN: Giới thiệu nhạc cụ nước ngoài - Nghe nhạc: Vũ điệu Tây Ban Nha",
    period: 29,
    adjustments: "Năng lực số: 1.1.CB2a: Sử dụng Google để tìm kiếm hình ảnh, âm thanh thực tế của bộ trống nước ngoài và lưu hình ảnh vào thư mục học tập. | Năng lực AI: NLa.A2 So sánh nhạc đệm do AI tạo ra với phần biểu diễn trực tiếp để thấy AI không thay thế cảm xúc sáng tạo của con người.",
    songTitle: "Đất nước tươi đẹp sao",
  },
  30: {
    theme: "Âm nhạc nước ngoài",
    lessonTitle: "Tổ chức hoạt động Vận dụng - Sáng tạo",
    period: 30,
  },
  31: {
    theme: "Khúc ca hè về",
    lessonTitle: "Hát: Khúc ca hè về",
    period: 31,
    adjustments: "Năng lực số: 1.1.CB2a; 3.1.CB2a: Tìm kiếm và nghe file nhạc beat, video bài Khúc ca hè về trên Youtube để luyện tập hát ở nhà; ghi âm giọng hát để tự nghe và tự đánh giá.",
    songTitle: "Khúc ca hè về",
  },
  32: {
    theme: "Khúc ca hè về",
    lessonTitle: "Ôn bài hát: Khúc ca hè về - Nhạc cụ: Nhạc cụ thể hiện tiết tấu và nhạc cụ thể hiện giai điệu",
    period: 32,
    songTitle: "Khúc ca hè về",
  },
  33: {
    theme: "Khúc ca hè về",
    lessonTitle: "Nghe nhạc: Khúc ca bốn mùa - Vận dụng - trải nghiệm",
    period: 33,
  },
  34: {
    theme: "Ôn tập cuối năm",
    lessonTitle: "Ôn tập cuối năm",
    period: 34,
  },
  35: {
    theme: "Kiểm tra đánh giá cuối năm",
    lessonTitle: "Kiểm tra đánh giá cuối năm",
    period: 35,
  }
};

export const OFFICIAL_MUSIC_BY_GRADE: Record<Grade, Record<number, OfficialMusicWeekItem>> = {
  1: MUSIC_GRADE_1,
  2: MUSIC_GRADE_2,
  3: MUSIC_GRADE_3,
  4: MUSIC_GRADE_4,
  5: MUSIC_GRADE_5,
};

/**
 * Retrieve the official music lesson according to the uploaded distribution
 */
export function getOfficialMusicLesson(
  grade: Grade,
  week: number,
  isEnhance: boolean = false,
  session: "Sáng" | "Chiều" = "Sáng"
): {
  theme: string;
  lessonTitle: string;
  curriculumPeriod: number | string;
  songTitle?: string;
  composer?: string;
  integrationNotes: string;
  specificCompetencies: string[];
  teacherMaterials: string[];
  studentMaterials: string[];
  activities: LessonActivity[];
} {
  const gNum = Number(grade) as Grade;
  const gradeTable = OFFICIAL_MUSIC_BY_GRADE[gNum] || OFFICIAL_MUSIC_BY_GRADE[1];
  const item = gradeTable[week] || {
    theme: `Chủ đề ${Math.min(week, 8)}`,
    lessonTitle: `Âm nhạc Lớp ${grade} - Bài học Tuần ${week}`,
    period: week,
  };

  const periodLabel = isEnhance ? `BD${week}` : item.period;
  const displayTitle = isEnhance
    ? `Bồi dưỡng Âm nhạc: ${item.lessonTitle}`
    : item.lessonTitle;

  const defaultIntegration = item.adjustments
    ? item.adjustments
    : `Tích hợp Giáo dục phát triển thẩm mĩ và tình yêu âm nhạc (CV 2345/BGDĐT).`;

  const specificCompetencies = [
    `Nắm vững mạch kiến thức chủ đề "${item.theme}": Thực hiện đúng yêu cầu nội dung bài học (${item.lessonTitle}).`,
    `Tự tin biểu diễn, cảm thụ âm thanh, phát triển năng lực thẩm mĩ và hợp tác cùng bạn bè.`,
  ];
  if (item.adjustments) {
    if (item.adjustments.includes("Năng lực số")) {
      specificCompetencies.push("Phát triển Năng lực số: Tương tác với thiết bị số, nghe xem học liệu điện tử an toàn, đúng quy trình.");
    }
    if (item.adjustments.includes("Năng lực AI")) {
      specificCompetencies.push("Phát triển Năng lực AI: Nhận biết ứng dụng công nghệ/AI trong âm nhạc, phân biệt âm thanh mô phỏng với cảm xúc con người.");
    }
    if (item.adjustments.includes("QPAN") || item.adjustments.includes("yêu nước")) {
      specificCompetencies.push("Giáo dục QPAN: Bồi dưỡng lòng yêu quê hương, đất nước, niềm tự hào dân tộc qua giai điệu bài hát.");
    }
  }

  const teacherMaterials = [
    "Đàn phím điện tử (Organ/Piano), máy tính/tivi kết nối Internet để trình chiếu video và bài giảng số.",
    "Bộ gõ gõ đệm: Thanh phách, song loan, trống nhỏ, tambourine, maracas.",
    "File âm thanh, học liệu số bài dạy theo Phân phối chương trình môn Âm nhạc mới."
  ];

  const studentMaterials = [
    `SGK Âm nhạc Lớp ${grade}, vở ghi chép.`,
    "Nhạc cụ gõ tự tạo hoặc thanh phách/song loan do nhà trường trang bị."
  ];

  const activities: LessonActivity[] = [
    {
      name: "1. Khởi động (5 phút)",
      objective: "Tạo không khí lớp học hào hứng, khởi động giọng và vận động nhẹ nhàng theo nhịp điệu.",
      teacherActivity: `1. Hướng dẫn học sinh khởi động giọng theo mẫu âm: "Mí - Ma - Mí" từ thấp lên cao (khoảng âm Đô - Son).
2. Tổ chức trò chơi âm nhạc kết nối: Vỗ tay đệm nhịp 2/4 hoặc 3/4 đón chào bài học mới chủ đề "${item.theme}".
3. Giới thiệu nội dung trọng tâm bài học: ${item.lessonTitle}.`,
      studentActivity: `1. Đứng ngay ngắn, thả lỏng cơ thể, luyện thanh theo hướng dẫn của thầy giáo.
2. Vỗ tay nhịp nhàng theo tiết tấu khởi động, hào hứng bước vào tiết học.
3. Lắng nghe và xác định mục tiêu bài học mới.`
    },
    {
      name: "2. Khám phá & Hình thành kiến thức mới (12 phút)",
      objective: `Nắm vững nội dung bài học: ${item.lessonTitle}; cảm thụ vẻ đẹp giai điệu và mạch kiến thức.`,
      teacherActivity: `1. Mở học liệu số/video minh họa trên màn hình máy chiếu/loa lớp học:
   ${item.adjustments ? `- Thực hiện nội dung bổ sung: ${item.adjustments}` : '- Trình chiếu hình ảnh minh họa và lắng nghe giai điệu mẫu.'}
2. Giáo viên hát/đọc nhạc/thị phạm mẫu với đàn Organ chuẩn xác cao độ, trường độ.
3. Hướng dẫn từng câu, chỉ rõ các chỗ cần lấy hơi, nhấn phách, luyến âm hoặc nốt ngân dài.`,
      studentActivity: `1. Quan sát màn hình, lắng nghe file âm thanh/thầy thị phạm mẫu, cảm nhận giai điệu.
2. Luyện tập từng câu nối tiếp theo đàn; giữ tư thế ngồi hát chuẩn, phát âm rõ lời, tròn vành rõ chữ.
3. Thực hiện tương tác với thiết bị số an toàn dưới sự hướng dẫn của giáo viên.`
    },
    {
      name: "3. Luyện tập & Thực hành (12 phút)",
      objective: `Củng cố kỹ năng hát, đọc nhạc và gõ đệm; kết hợp vận động cơ thể (Body Percussion).`,
      teacherActivity: `1. Chia lớp theo nhóm (Dãy bàn / Tổ) luân phiên biểu diễn:
   - Nhóm 1: Hát/đọc nhạc đúng cao độ, sắc thái tươi vui.
   - Nhóm 2: Gõ đệm bằng nhạc cụ thanh phách/song loan theo phách hoặc tiết tấu lời ca.
   - Nhóm 3: Thực hiện động tác vận động cơ thể (vỗ tay, nghiêng đầu, dậm chân nhẹ).
2. Quan sát, sửa sai kịp thời các nốt chưa chuẩn cao độ và phách gõ chưa đều.`,
      studentActivity: `1. Tích cực luyện tập theo nhóm và cặp đôi; hòa giọng đồng đều, lắng nghe bạn bè cùng hòa thanh.
2. Sử dụng nhạc cụ gõ đệm đúng phách; động tác vận động nhịp nhàng, tự tin.
3. Luân chuyển vai trò giữa các nhóm theo hiệu lệnh của thầy.`
    },
    {
      name: "4. Vận dụng & Sáng tạo (6 phút)",
      objective: `Tự tin biểu diễn trước tập thể, ứng dụng sáng tạo và cảm nhận giá trị thẩm mĩ của tác phẩm.`,
      teacherActivity: `1. Mời 1-2 nhóm xuất sắc lên biểu diễn báo cáo trước lớp kết hợp nhạc đệm trên đàn.
2. Đặt câu hỏi phát triển cảm xúc:
   ${item.adjustments?.includes("AI") ? '- Gợi ý học sinh nhận xét sự khác biệt giữa cảm xúc hát thật của các em với âm thanh mô phỏng của máy tính/AI.' : '- "Sau khi học bài này, em cảm thấy giai điệu mang lại cho em niềm vui gì trong học tập và cuộc sống?"'}
3. Nhận xét tiết học, tuyên dương tinh thần học tập và dặn dò ôn luyện tại nhà.`,
      studentActivity: `1. Nhóm đại diện tự tin biểu diễn trước lớp; cả lớp vỗ tay cổ vũ.
2. Trả lời câu hỏi cảm thụ âm nhạc bằng suy nghĩ hồn nhiên, chân thật của mình.
3. Ghi nhớ dặn dò của thầy để hát tặng người thân trong gia đình.`
    }
  ];

  return {
    theme: item.theme,
    lessonTitle: displayTitle,
    curriculumPeriod: periodLabel,
    songTitle: item.songTitle,
    composer: item.composer,
    integrationNotes: defaultIntegration,
    specificCompetencies,
    teacherMaterials,
    studentMaterials,
    activities,
  };
}
