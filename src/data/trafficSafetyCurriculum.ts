import { Grade } from "../types";

export interface TrafficSafetyLesson {
  lessonNumber: number; // 1 to 10
  title: string;
  part: 1 | 2; // 1: Tuần 1 của bài, 2: Tuần 2 của bài
  period: number; // Tiết 1 hoặc Tiết 2
  subTitle: string;
  specificCompetency: string;
  teacherActivity: string;
  studentActivity: string;
}

// 10 BÀI AN TOÀN GIAO THÔNG CHUẨN BỘ GD&ĐT CHO TỪNG KHỐI LỚP (1 - 5)
// MỖI BÀI TÍCH HỢP 2 TIẾT VÀO TIẾT HĐTN (SINH HOẠT LỚP) TRONG 2 TUẦN LIÊN TIẾP
export const TRAFFIC_SAFETY_CURRICULUM: Record<Grade, TrafficSafetyLesson[]> = {
  1: [
    // Bài 1 (Tuần 1, 2)
    {
      lessonNumber: 1,
      part: 1,
      period: 1,
      title: "Đi bộ an toàn trên đường",
      subTitle: "Đi bộ an toàn trên vỉa hè",
      specificCompetency: "Nhận biết được vị trí an toàn khi đi bộ trên đường (đi trên vỉa hè hoặc sát mép đường bên phải khi không có vỉa hè).",
      teacherActivity: "Cho HS quan sát hình ảnh bạn nhỏ đi bộ trên vỉa hè. Hướng dẫn quy tắc: Luôn đi trên vỉa hè, nắm chặt tay người lớn khi đi trên phố.",
      studentActivity: "Quan sát tranh, nhận diện phần vỉa hè an toàn. Nhắc lại quy tắc nắm tay người lớn khi đi trên đường."
    },
    {
      lessonNumber: 1,
      part: 2,
      period: 2,
      title: "Đi bộ an toàn trên đường",
      subTitle: "Đi bộ ở đường làng, ngõ hẻm không có vỉa hè",
      specificCompetency: "Thực hành đi bộ sát mép đường bên phải nơi không có vỉa hè, luôn chú ý quan sát xe cộ.",
      teacherActivity: "Mô phỏng tình huống đường làng không có vỉa hè. Hướng dẫn HS đi sát lề đường bên phải và không dàn hàng ngang.",
      studentActivity: "Thực hành đi theo hàng một sát mép đường bên phải. Cam kết không đùa nghịch, chạy nhảy dưới lòng đường."
    },
    // Bài 2 (Tuần 3, 4)
    {
      lessonNumber: 2,
      part: 1,
      period: 1,
      title: "Đi bộ qua đường an toàn",
      subTitle: "Qua đường nơi có vạch kẻ và đèn tín hiệu",
      specificCompetency: "Biết quan sát đèn tín hiệu người đi bộ (đèn xanh mới được đi), đi đúng trên vạch sơn trắng dành cho người đi bộ.",
      teacherActivity: "Chiếu video/hình ảnh vạch kẻ đường cho người đi bộ và đèn tín hiệu. Hướng dẫn các bước qua đường: Dừng lại - Quan sát - Chờ đèn xanh - Đi thẳng trên vạch kẻ.",
      studentActivity: "Nhận biết tín hiệu đèn xanh dành cho người đi bộ. Luyện tập khẩu lệnh: 'Đèn đỏ dừng lại - Đèn xanh qua đường'."
    },
    {
      lessonNumber: 2,
      part: 2,
      period: 2,
      title: "Đi bộ qua đường an toàn",
      subTitle: "Qua đường nơi không có vạch kẻ",
      specificCompetency: "Biết xin sự trợ giúp của người lớn khi cần qua đường nơi không có vạch kẻ hoặc đường đông xe cộ.",
      teacherActivity: "Đưa tình huống không có đèn tín hiệu. Dặn dò HS: Luôn đi cùng và nhờ người lớn dẫn qua đường, giơ cao tay xin đường.",
      studentActivity: "Sắm vai tình huống nhờ bác bảo vệ hoặc thầy cô dẫn qua đường trước cổng trường. Ghi nhớ thao tác giơ tay xin đường."
    },
    // Bài 3 (Tuần 5, 6)
    {
      lessonNumber: 3,
      part: 1,
      period: 1,
      title: "Đội mũ bảo hiểm khi ngồi trên xe mô tô, xe gắn máy, xe đạp điện",
      subTitle: "Cách chọn mũ bảo hiểm đạt chuẩn",
      specificCompetency: "Nhận biết mũ bảo hiểm đạt chuẩn có tem kiểm định, vừa vặn với kích cỡ đầu.",
      teacherActivity: "Cho HS quan sát chiếc mũ bảo hiểm thật. Chỉ ra các bộ phận: vỏ mũ, xốp đệm, quai cài và tem kiểm định hợp quy.",
      studentActivity: "Sờ và cảm nhận mũ bảo hiểm. Chỉ ra vị trí tem kiểm định và khóa cài chắc chắn."
    },
    {
      lessonNumber: 3,
      part: 2,
      period: 2,
      title: "Đội mũ bảo hiểm khi ngồi trên xe mô tô, xe gắn máy, xe đạp điện",
      subTitle: "Thao tác đội mũ và cài quai đúng cách",
      specificCompetency: "Thực hành đội mũ bảo hiểm ngay ngắn và cài quai khít dưới cằm (vừa 1-2 ngón tay).",
      teacherActivity: "Hướng dẫn 3 bước đội mũ: Đội thẳng - Cài khóa - Kiểm tra độ vừa khít bằng cách đưa 2 ngón tay vào dưới cằm.",
      studentActivity: "Thực hành đội mũ bảo hiểm của mình, cài khóa 'tách' và nhờ bạn bên cạnh kiểm tra độ khít."
    },
    // Bài 4 (Tuần 7, 8)
    {
      lessonNumber: 4,
      part: 1,
      period: 1,
      title: "Ngồi an toàn trên xe máy, xe đạp",
      subTitle: "Tư thế ngồi an toàn trên xe máy, xe đạp",
      specificCompetency: "Biết ngồi ngay ngắn phía sau, hai tay ôm eo người lớn hoặc giữ tay vịn, hai chân đặt lên thanh để chân.",
      teacherActivity: "Minh họa tư thế ngồi xe an toàn. Nhắc nhở HS: Không đứng trên yên xe, không ngả nghiêng người khi xe chạy.",
      studentActivity: "Luyện tập tư thế ngồi ngay ngắn, hai tay bám eo người lái, hai chân để đúng vị trí để chân."
    },
    {
      lessonNumber: 4,
      part: 2,
      period: 2,
      title: "Ngồi an toàn trên xe máy, xe đạp",
      subTitle: "Những hành vi nguy hiểm cần tránh khi ngồi sau xe",
      specificCompetency: "Phân biệt được hành vi an toàn và không an toàn (không cầm ô, không buông hai tay, không đùa nghịch).",
      teacherActivity: "Chiếu tranh các hành vi sai: Cầm ô che nắng, ngoái đầu ra sau, thò chân vào nan hoa xe. Hỏi tác hại.",
      studentActivity: "Nhận diện hành vi nguy hiểm, nêu lý do không được cầm ô hoặc xòe chân khi xe đang chạy."
    },
    // Bài 5 (Tuần 9, 10)
    {
      lessonNumber: 5,
      part: 1,
      period: 1,
      title: "Nhớ vị trí biển báo hiệu giao thông đường bộ",
      subTitle: "Biển báo cấm người đi bộ",
      specificCompetency: "Nhận diện hình dạng biển báo cấm hình tròn, viền đỏ, nền trắng có hình vẽ người đi bộ bị gạch chéo đỏ.",
      teacherActivity: "Giới thiệu biển P.112 'Cấm người đi bộ'. Giải thích ý nghĩa nơi đặt biển này là nơi nguy hiểm cấm đi bộ vào.",
      studentActivity: "Tô màu biển báo P.112 vào vở bài tập, ghi nhớ không bao giờ đi vào khu vực có biển cấm."
    },
    {
      lessonNumber: 5,
      part: 2,
      period: 2,
      title: "Nhớ vị trí biển báo hiệu giao thông đường bộ",
      subTitle: "Biển chỉ dẫn đường dành cho người đi bộ",
      specificCompetency: "Nhận biết biển báo chỉ dẫn hình vuông nền xanh có hình người đi bộ màu trắng.",
      teacherActivity: "Giới thiệu biển I.423 'Đường người đi bộ sang ngang'. Hướng dẫn HS luôn tìm biển này để sang đường an toàn.",
      studentActivity: "Nhắc lại đặc điểm biển chỉ dẫn nền xanh. Liên hệ các vị trí có biển này quanh trường học."
    },
    // Bài 6 (Tuần 11, 12)
    {
      lessonNumber: 6,
      part: 1,
      period: 1,
      title: "Đi bộ an toàn nơi đường giao nhau",
      subTitle: "Nhận biết ngã ba, ngã tư giao nhau",
      specificCompetency: "Nhận biết đường giao nhau là nơi các dòng phương tiện đan xen, cần tập trung quan sát cao độ.",
      teacherActivity: "Vẽ sơ đồ ngã tư đường phố lên bảng. Phân tích các hướng xe rẽ trái, rẽ phải có thể gây nguy hiểm cho người đi bộ.",
      studentActivity: "Quan sát sơ đồ, chỉ ra các hướng xe có thể lao tới. Nêu quy tắc quan sát trước sau."
    },
    {
      lessonNumber: 6,
      part: 2,
      period: 2,
      title: "Đi bộ an toàn nơi đường giao nhau",
      subTitle: "Quy tắc quan sát an toàn tại nơi đường giao nhau",
      specificCompetency: "Thực hiện quy trình quan sát an toàn: Dừng lại nhìn trái - nhìn phải - nhìn trái lần nữa trước khi bước đi.",
      teacherActivity: "Hướng dẫn thực hành quay đầu quan sát. Nhắc nhở HS không bao giờ chạy ào qua ngã ba, ngã tư.",
      studentActivity: "Cả lớp đứng dậy thực hành động tác quay đầu nhìn trái, nhìn phải và đi thong thả theo hàng."
    },
    // Bài 7 (Tuần 13, 14)
    {
      lessonNumber: 7,
      part: 1,
      period: 1,
      title: "Đi xe đạp an toàn",
      subTitle: "Làm quen với xe đạp trẻ em",
      specificCompetency: "Biết các bộ phận cơ bản của xe đạp: tay lái, phanh (thắng), bàn đạp, chuông và yên xe.",
      teacherActivity: "Giới thiệu chiếc xe đạp trẻ em. Hướng dẫn HS kiểm tra phanh xe và độ cao yên xe trước khi sử dụng.",
      studentActivity: "Gọi tên các bộ phận của xe đạp. Hiểu rằng xe đạp phải có phanh tốt mới được sử dụng."
    },
    {
      lessonNumber: 7,
      part: 2,
      period: 2,
      title: "Đi xe đạp an toàn",
      subTitle: "Đi xe đạp trong sân và khu vực an toàn",
      specificCompetency: "Biết học sinh lớp 1 chỉ được đi xe đạp trẻ em trong sân nhà, công viên có người lớn giám sát, chưa đi ra đường lớn.",
      teacherActivity: "Giải thích lý do HS lớp 1 chưa đủ tuổi và kĩ năng để đi xe đạp ra đường giao thông công cộng.",
      studentActivity: "Ghi nhớ cam kết chỉ tập đi xe đạp trong sân nhà, ngõ cụt yên tĩnh dưới sự trông nom của cha mẹ."
    },
    // Bài 8 (Tuần 15, 16)
    {
      lessonNumber: 8,
      part: 1,
      period: 1,
      title: "An toàn khi đi trên các phương tiện giao thông công cộng",
      subTitle: "Lên xuống xe buýt an toàn",
      specificCompetency: "Biết chờ xe buýt dừng hẳn mới bước lên, bám tay vịn và bước từng bước cẩn thận.",
      teacherActivity: "Mô phỏng bến xe buýt. Hướng dẫn HS xếp hàng, không chen lấn xô đẩy khi lên xuống xe.",
      studentActivity: "Thực hành xếp hàng trật tự, chờ người xuống hết mới bước lên xe theo hiệu lệnh."
    },
    {
      lessonNumber: 8,
      part: 2,
      period: 2,
      title: "An toàn khi đi trên các phương tiện giao thông công cộng",
      subTitle: "Hành vi văn minh, an toàn khi xe buýt đang chạy",
      specificCompetency: "Ngồi ngay ngắn tại ghế, không chạy nhảy trên xe, không thò đầu tay ra ngoài cửa kính.",
      teacherActivity: "Chiếu video bài học về an toàn xe buýt. Nhắc nhở HS giữ gìn vệ sinh và không nói chuyện to.",
      studentActivity: "Nêu các điều cần tránh khi đi xe buýt: Không đứng nhảy trên ghế, không mở cửa kính thò tay ra ngoài."
    },
    // Bài 9 (Tuần 17, 18)
    {
      lessonNumber: 9,
      part: 1,
      period: 1,
      title: "Làm quen với hiệu lệnh của người điều khiển giao thông",
      subTitle: "Hiệu lệnh chỉ huy bằng tay",
      specificCompetency: "Nhận biết tư thế chú Cảnh sát giao thông giơ tay thẳng đứng (dừng lại) hoặc dang ngang hai tay.",
      teacherActivity: "Làm mẫu các động tác chỉ huy của CSGT. Giải thích ý nghĩa từng hiệu lệnh.",
      studentActivity: "Quan sát và bắt chước động tác chỉ huy của CSGT. Trả lời ý nghĩa hiệu lệnh dừng xe."
    },
    {
      lessonNumber: 9,
      part: 2,
      period: 2,
      title: "Làm quen với hiệu lệnh của người điều khiển giao thông",
      subTitle: "Hiệu lệnh chỉ huy bằng còi và gậy",
      specificCompetency: "Biết khi CSGT thổi còi dài kết hợp giơ gậy là tín hiệu yêu cầu tất cả dừng lại.",
      teacherActivity: "Tổ chức trò chơi 'Em tập làm CSGT': 1 HS đóng vai CSGT điều khiển các bạn đi bộ dừng lại hoặc tiếp tục.",
      studentActivity: "Hào hứng tham gia trò chơi, phản xạ nhanh với tiếng còi và hiệu lệnh gậy chỉ huy."
    },
    // Bài 10 (Tuần 19, 20)
    {
      lessonNumber: 10,
      part: 1,
      period: 1,
      title: "An toàn khi đi qua đường sắt",
      subTitle: "Nhận biết khu vực đường sắt và rào chắn",
      specificCompetency: "Nhận biết biển báo nơi đường sắt giao nhau và hệ thống rào chắn tự động khi có tàu hỏa.",
      teacherActivity: "Chiếu hình ảnh đường ray xe lửa, thanh rào chắn đang hạ xuống và chuông reo báo hiệu tàu đến.",
      studentActivity: "Nhận biết âm thanh chuông báo và hình ảnh đèn đỏ nhấp nháy tại đường ngang đường sắt."
    },
    {
      lessonNumber: 10,
      part: 2,
      period: 2,
      title: "An toàn khi đi qua đường sắt",
      subTitle: "Tuân thủ quy tắc khi tàu hỏa chạy qua",
      specificCompetency: "Đứng cách xa rào chắn tối thiểu 5 mét, không leo trèo qua rào chắn, tuyệt đối không ném đất đá lên tàu hỏa.",
      teacherActivity: "Nhấn mạnh mức độ nguy hiểm của tàu hỏa chạy tốc độ cao. Dặn dò không chơi đùa trên đường ray.",
      studentActivity: "Đọc to thông điệp: 'Tàu đến dừng lại - Cách xa đường ray - An toàn trên hết'."
    },
  ],

  2: [
    // Bài 1
    {
      lessonNumber: 1,
      part: 1,
      period: 1,
      title: "Đường giao thông và các loại phương tiện giao thông",
      subTitle: "Các loại đường giao thông cơ bản",
      specificCompetency: "Phân biệt được đường bộ, đường sắt, đường thủy và đường hàng không.",
      teacherActivity: "Giới thiệu 4 hệ thống đường giao thông ở Việt Nam qua bản đồ và hình ảnh minh họa.",
      studentActivity: "Kể tên các loại đường giao thông xung quanh nơi em ở (đường bộ, sông ngòi kênh rạch)."
    },
    {
      lessonNumber: 1,
      part: 2,
      period: 2,
      title: "Đường giao thông và các loại phương tiện giao thông",
      subTitle: "Phương tiện tương ứng với từng loại đường",
      specificCompetency: "Nêu đúng các phương tiện giao thông đi trên đường bộ (ô tô, xe máy, xe đạp), đường thủy (tàu thuyền, ca nô),...",
      teacherActivity: "Tổ chức trò chơi ghép tranh: Nối phương tiện với đúng loại đường giao thông tương ứng.",
      studentActivity: "Thực hiện nối nhanh trên bảng nhóm, giải thích lý do ghép nối."
    },
    // Bài 2
    {
      lessonNumber: 2,
      part: 1,
      period: 1,
      title: "Đi bộ an toàn qua đường",
      subTitle: "Quan sát đèn tín hiệu giao thông",
      specificCompetency: "Nắm vững nguyên tắc sang đường theo đèn tín hiệu giao thông dành cho người đi bộ.",
      teacherActivity: "Phân tích ý nghĩa đèn tín hiệu 3 màu cho xe cộ và đèn 2 màu cho người đi bộ.",
      studentActivity: "Nhắc lại quy tắc: Đèn xanh người đi bộ sáng mới được bước xuống vạch sang đường."
    },
    {
      lessonNumber: 2,
      part: 2,
      period: 2,
      title: "Đi bộ an toàn qua đường",
      subTitle: "Lựa chọn vị trí sang đường an toàn",
      specificCompetency: "Biết tìm cầu vượt bộ hành, hầm chui hoặc nơi có vạch sang đường để qua lộ an toàn.",
      teacherActivity: "Chiếu hình ảnh cầu vượt bộ hành và hầm qua đường. Khuyến khích HS sử dụng khi đi trên đường lớn.",
      studentActivity: "Nêu lợi ích của cầu vượt bộ hành: Giúp người đi bộ không phải đối đầu trực tiếp với xe cộ."
    },
    // Bài 3
    {
      lessonNumber: 3,
      part: 1,
      period: 1,
      title: "Đội mũ bảo hiểm đúng cách khi ngồi trên xe mô tô, xe gắn máy",
      subTitle: "Tầm quan trọng của mũ bảo hiểm",
      specificCompetency: "Hiểu được mũ bảo hiểm bảo vệ chấn thương sọ não và tính mạng khi không may xảy ra va chạm.",
      teacherActivity: "Kể câu chuyện về sự an toàn kỳ diệu nhờ chiếc mũ bảo hiểm đạt chuẩn.",
      studentActivity: "Thảo luận nhóm đôi: Vì sao cả người lớn và trẻ em từ 6 tuổi đều phải đội mũ bảo hiểm?"
    },
    {
      lessonNumber: 3,
      part: 2,
      period: 2,
      title: "Đội mũ bảo hiểm đúng cách khi ngồi trên xe mô tô, xe gắn máy",
      subTitle: "Quy trình 3 bước đội mũ bảo hiểm",
      specificCompetency: "Thực hiện chuẩn xác 3 bước: Mở quai - Đội thẳng - Cài chốt và kiểm tra khe hở dưới cằm.",
      teacherActivity: "Làm mẫu và quan sát uốn nắn từng học sinh thao tác cài quai mũ bảo hiểm.",
      studentActivity: "Cặp đôi thực hành cài quai cho nhau, kiểm tra khoảng cách vừa 2 ngón tay."
    },
    // Bài 4
    {
      lessonNumber: 4,
      part: 1,
      period: 1,
      title: "Ngồi an toàn trên xe mô tô, xe gắn máy, xe đạp điện",
      subTitle: "Quy tắc an toàn khi xe chuyển hướng",
      specificCompetency: "Biết nghiêng người theo thân xe khi xe vào cua, bám chắc vào hông người lái.",
      teacherActivity: "Mô phỏng lực quán tính khi xe vào cua và cách ngồi giữ thăng bằng an toàn.",
      studentActivity: "Thực hành nghiêng người theo hướng di chuyển của xe trên mô hình ghế lớp học."
    },
    {
      lessonNumber: 4,
      part: 2,
      period: 2,
      title: "Ngồi an toàn trên xe mô tô, xe gắn máy, xe đạp điện",
      subTitle: "Quy tắc khi lên xuống xe",
      specificCompetency: "Chỉ lên xuống xe khi xe đã dừng hẳn và lên xuống ở phía bên trái (tránh bô xe máy nóng bên phải).",
      teacherActivity: "Cảnh báo nguy cơ bỏng bô xe máy ở phía bên phải. Nhắc nhở luôn lên xuống bên trái.",
      studentActivity: "Ghi nhớ quy tắc: 'Lên xuống bên trái - Chờ xe dừng hẳn'."
    },
    // Bài 5
    {
      lessonNumber: 5,
      part: 1,
      period: 1,
      title: "Tìm hiểu các biển báo hiệu giao thông đường bộ",
      subTitle: "Nhóm biển báo nguy hiểm (Tam giác vàng)",
      specificCompetency: "Nhận biết đặc điểm biển báo nguy hiểm: Hình tam giác đều, viền đỏ, nền vàng, hình vẽ màu đen.",
      teacherActivity: "Giới thiệu các biển nguy hiểm quen thuộc: Đường giao nhau, Đoạn đường hay xảy ra tai nạn, Trẻ em qua đường.",
      studentActivity: "Vẽ và gọi tên biển báo 'Trẻ em qua đường' thường đặt gần cổng trường học."
    },
    {
      lessonNumber: 5,
      part: 2,
      period: 2,
      title: "Tìm hiểu các biển báo hiệu giao thông đường bộ",
      subTitle: "Nhóm biển báo hiệu lệnh (Hình tròn xanh)",
      specificCompetency: "Nhận biết biển hiệu lệnh hình tròn nền xanh biểu thị điều bắt buộc người đi đường phải thi hành.",
      teacherActivity: "Giới thiệu biển R.301 'Các hướng đi phải theo' và biển đường dành cho người đi bộ.",
      studentActivity: "Phân biệt biển hiệu lệnh (xanh tròn) với biển báo cấm (viền đỏ)."
    },
    // Bài 6
    {
      lessonNumber: 6,
      part: 1,
      period: 1,
      title: "Đi qua nơi đường giao nhau an toàn",
      subTitle: "Quan sát 4 phía tại ngã ba, ngã tư",
      specificCompetency: "Biết xác định vị trí góc khuất và điểm nhìn an toàn tại nơi đường giao nhau.",
      teacherActivity: "Hướng dẫn sơ đồ di chuyển an toàn khi muốn sang đường tại ngã tư có đèn tín hiệu.",
      studentActivity: "Chỉ ra trên sơ đồ đường đi đúng trên vạch kẻ dành cho người đi bộ."
    },
    {
      lessonNumber: 6,
      part: 2,
      period: 2,
      title: "Đi qua nơi đường giao nhau an toàn",
      subTitle: "Kĩ năng xử lý khi qua ngã ba đường làng",
      specificCompetency: "Biết đi chậm lại, bấm chuông xe hoặc quan sát kỹ gương cầu lồi trước khi ra đường nhánh.",
      teacherActivity: "Giới thiệu tác dụng của gương cầu lồi gắn ở các góc cua đường làng, ngõ hẹp.",
      studentActivity: "Nêu cách nhìn gương cầu lồi để biết có xe chạy từ hướng ngược lại tới hay không."
    },
    // Bài 7
    {
      lessonNumber: 7,
      part: 1,
      period: 1,
      title: "Đi xe đạp an toàn trên đường",
      subTitle: "Kiểm tra kỹ thuật xe đạp trước khi khởi hành",
      specificCompetency: "Biết tự kiểm tra 3 yếu tố quan trọng của xe đạp: Độ căng của lốp, độ ăn của phanh, chuông báo hiệu.",
      teacherActivity: "Hướng dẫn học sinh các bước tự kiểm tra xe đạp trước khi đi học.",
      studentActivity: "Thực hành kiểm tra tay phanh và bấm chuông xe thử nghiệm."
    },
    {
      lessonNumber: 7,
      part: 2,
      period: 2,
      title: "Đi xe đạp an toàn trên đường",
      subTitle: "Quy tắc di chuyển xe đạp trên đường bộ",
      specificCompetency: "Đi đúng phần đường dành cho xe thô sơ hoặc đi sát mép đường bên phải, không dàn hàng ba, hàng bốn.",
      teacherActivity: "Nhấn mạnh lỗi phổ biến của học sinh: Dàn hàng ngang nói chuyện hoặc buông 1 tay lái xe.",
      studentActivity: "Cam kết chỉ đi hàng một, không bốc đầu xe, không bám đẩy xe khác."
    },
    // Bài 8
    {
      lessonNumber: 8,
      part: 1,
      period: 1,
      title: "An toàn khi tham gia giao thông bằng xe buýt",
      subTitle: "Văn hóa xếp hàng và giữ chỗ an toàn",
      specificCompetency: "Biết xếp hàng chờ xe ở vỉa hè, nhường người già và phụ nữ có con nhỏ lên trước.",
      teacherActivity: "Giáo dục hành vi văn minh nơi công cộng và cách giữ thăng bằng khi xe buýt chuyển động.",
      studentActivity: "Đóng vai tình huống nhường ghế trên xe buýt cho người lớn tuổi."
    },
    {
      lessonNumber: 8,
      part: 2,
      period: 2,
      title: "An toàn khi tham gia giao thông bằng xe buýt",
      subTitle: "Phòng tránh ngã và va đập trên xe buýt",
      specificCompetency: "Luôn bám chặt vào tay vịn hoặc cột giữ khi đứng trên xe buýt lúc xe tăng hoặc giảm tốc độ.",
      teacherActivity: "Giải thích nguyên nhân bị té ngã do quán tính xe phanh gấp nếu không bám tay vịn.",
      studentActivity: "Thực hành tư thế đứng chân rộng bằng vai, một tay nắm chắc quai treo hoặc cột kim loại."
    },
    // Bài 9
    {
      lessonNumber: 9,
      part: 1,
      period: 1,
      title: "Chấp hành hiệu lệnh của cảnh sát giao thông và đèn tín hiệu",
      subTitle: "Ưu tiên hiệu lệnh của Cảnh sát giao thông",
      specificCompetency: "Biết khi có cả đèn tín hiệu và Cảnh sát giao thông chỉ huy thì phải tuân theo hiệu lệnh của CSGT.",
      teacherActivity: "Giải thích quy định pháp luật về thứ tự ưu tiên của các hình thức báo hiệu đường bộ.",
      studentActivity: "Nhắc lại thứ tự: Hiệu lệnh CSGT -> Đèn tín hiệu -> Biển báo hiệu -> Vạch kẻ đường."
    },
    {
      lessonNumber: 9,
      part: 2,
      period: 2,
      title: "Chấp hành hiệu lệnh của cảnh sát giao thông và đèn tín hiệu",
      subTitle: "Ý nghĩa các tư thế gậy chỉ huy giao thông",
      specificCompetency: "Nhận biết hướng gậy chỉ để xác định luồng phương tiện nào được phép đi và luồng nào phải dừng lại.",
      teacherActivity: "Thực hiện động tác quay thân người và chỉ gậy hướng đi cho học sinh quan sát.",
      studentActivity: "Xem động tác và xác định nhanh luồng đường nào được phép di chuyển."
    },
    // Bài 10
    {
      lessonNumber: 10,
      part: 1,
      period: 1,
      title: "Phòng tránh tai nạn giao thông đường thủy",
      subTitle: "Mặc áo phao hoặc cầm dụng cụ nổi khi đi đò, thuyền",
      specificCompetency: "Hiểu bắt buộc phải mặc áo phao cài khóa chắc chắn ngay khi bước chân xuống bến đò, thuyền bè.",
      teacherActivity: "Hướng dẫn thực hành mặc áo phao cứu sinh, cài chốt ngực và thắt đai an toàn.",
      studentActivity: "Mỗi tổ cử đại diện mặc áo phao thi đua nhanh và đúng cách."
    },
    {
      lessonNumber: 10,
      part: 2,
      period: 2,
      title: "Phòng tránh tai nạn giao thông đường thủy",
      subTitle: "Quy tắc an toàn khi thuyền bè đang di chuyển",
      specificCompetency: "Ngồi cân đối giữa thuyền, không nghiêng người sang một bên, không thò tay chân nghịch nước.",
      teacherActivity: "Cảnh báo nguy cơ lật đò khi hành khách dồn về một phía. Hướng dẫn cách bình tĩnh khi có sự cố.",
      studentActivity: "Ghi nhớ quy tắc giữ cân bằng và nghe theo hướng dẫn của người lái thuyền."
    },
  ],

  3: [
    // Bài 1
    {
      lessonNumber: 1,
      part: 1,
      period: 1,
      title: "Cổng trường an toàn giao thông",
      subTitle: "Tổ chức không gian giao thông trước cổng trường",
      specificCompetency: "Hiểu được mô hình cổng trường an toàn, quy định đón trả học sinh của phụ huynh theo phân luồng.",
      teacherActivity: "Chiếu sơ đồ cổng trường: Khu vực phụ huynh dừng xe, lối đi bộ riêng của học sinh.",
      studentActivity: "Nhận diện vị trí bố mẹ đón mình mỗi buổi tan trường, không đứng tràn ra lòng đường."
    },
    {
      lessonNumber: 1,
      part: 2,
      period: 2,
      title: "Cổng trường an toàn giao thông",
      subTitle: "Học sinh tham gia giữ gìn trật tự cổng trường",
      specificCompetency: "Xếp hàng ngay ngắn từ trong sân trường đi ra, không tụ tập ăn quà vặt trước cổng trường.",
      teacherActivity: "Thảo luận về các nguyên nhân gây ùn tắc trước cổng trường giờ tan học.",
      studentActivity: "Đề xuất giải pháp: Tan học đi thẳng về nhà, nhắc bố mẹ xếp xe gọn gàng vào vạch sơn."
    },
    // Bài 2
    {
      lessonNumber: 2,
      part: 1,
      period: 1,
      title: "Giữ khoảng cách an toàn khi tham gia giao thông",
      subTitle: "Khái niệm khoảng cách an toàn",
      specificCompetency: "Hiểu khoảng cách an toàn là khoảng không gian cần thiết để người điều khiển kịp thời phanh dừng khi xe trước gặp sự cố.",
      teacherActivity: "Lấy ví dụ thực tế về việc đi xe bám quá sát xe phía trước dẫn đến đâm dồn đuôi xe.",
      studentActivity: "Nêu quy tắc '2 giây' hoặc giữ khoảng cách tối thiểu tương đương 2 thân xe đạp."
    },
    {
      lessonNumber: 2,
      part: 2,
      period: 2,
      title: "Giữ khoảng cách an toàn khi tham gia giao thông",
      subTitle: "Thực hành giữ khoảng cách an toàn",
      specificCompetency: "Biết điều chỉnh tốc độ, luôn giữ khoảng cách an toàn khi đi xe đạp trên đường đông người hoặc trời mưa đường trơn.",
      teacherActivity: "Phân tích điều kiện thời tiết ảnh hưởng đến cự ly phanh xe (trời mưa phanh kém ăn hơn).",
      studentActivity: "Ghi nhớ khi trời mưa hoặc đường trơn trượt phải đi chậm hơn và giữ khoảng cách xa hơn."
    },
    // Bài 3
    {
      lessonNumber: 3,
      part: 1,
      period: 1,
      title: "Đi bộ qua đường an toàn ở nơi có và không có vạch kẻ đường",
      subTitle: "Kĩ năng qua đường nơi có vạch kẻ",
      specificCompetency: "Biết kết hợp quan sát xe rẽ và đi thẳng trên vạch kẻ với tốc độ đều đặn, không chạy vội.",
      teacherActivity: "Hướng dẫn: Không được cắm cúi nhìn điện thoại hay đùa nghịch khi đang bước trên vạch qua đường.",
      studentActivity: "Luyện tập tư thế đi thẳng mắt quan sát linh hoạt cả 2 hướng xe chạy."
    },
    {
      lessonNumber: 3,
      part: 2,
      period: 2,
      title: "Đi bộ qua đường an toàn ở nơi có và không có vạch kẻ đường",
      subTitle: "Kĩ năng giơ cao tay xin đường nơi không có vạch kẻ",
      specificCompetency: "Thực hiện thành thạo động tác giơ tay cao ngang tầm mắt ra hiệu xin đường khi quan sát thấy khoảng trống an toàn.",
      teacherActivity: "Làm mẫu động tác giơ tay xin đường và bước đi dứt khoát.",
      studentActivity: "Cả lớp thực hành giơ tay phải xin đường, mắt nhìn về hướng xe đang tới."
    },
    // Bài 4
    {
      lessonNumber: 4,
      part: 1,
      period: 1,
      title: "Đội mũ bảo hiểm đạt chuẩn và cài quai đúng quy cách",
      subTitle: "Nhận biết mũ bảo hiểm đạt chuẩn QCVN",
      specificCompetency: "Nhận diện tem hợp quy CR/QCVN, tem bảo hành và nhãn mác nguồn gốc xuất xứ của mũ bảo hiểm an toàn.",
      teacherActivity: "Cho HS so sánh mũ bảo hiểm đạt chuẩn (dày dặn, xốp ép hạt chặt) và mũ thời trang kém chất lượng (mỏng manh).",
      studentActivity: "Chỉ ra sự khác biệt và nguy hiểm của việc đội mũ thời trang mỏng dính không có tác dụng bảo vệ."
    },
    {
      lessonNumber: 4,
      part: 2,
      period: 2,
      title: "Đội mũ bảo hiểm đạt chuẩn và cài quai đúng quy cách",
      subTitle: "Cài quai mũ bảo hiểm đạt chuẩn",
      specificCompetency: "Tự kiểm tra quai mũ không bị xoắn, độ chùng không quá 2 đốt ngón tay.",
      teacherActivity: "Tổ chức kiểm tra chéo giữa các học sinh trong lớp về việc cài quai mũ bảo hiểm.",
      studentActivity: "Kiểm tra cho bạn bên cạnh và thông báo kết quả cho giáo viên."
    },
    // Bài 5
    {
      lessonNumber: 5,
      part: 1,
      period: 1,
      title: "An toàn khi ngồi trên ô tô, xe buýt",
      subTitle: "Thắt dây an toàn khi đi ô tô con",
      specificCompetency: "Hiểu tác dụng bảo vệ của dây an toàn 3 điểm và tự giác thắt dây an toàn khi lên xe ô tô.",
      teacherActivity: "Chiếu video thử nghiệm va chạm ô tô có thắt dây an toàn và không thắt dây an toàn.",
      studentActivity: "Rút ra bài học: Luôn thắt dây an toàn ngay khi vừa ngồi vào ghế xe ô tô."
    },
    {
      lessonNumber: 5,
      part: 2,
      period: 2,
      title: "An toàn khi ngồi trên ô tô, xe buýt",
      subTitle: "Hành vi văn minh trên xe buýt",
      specificCompetency: "Không vứt rác bừa bãi, không chen lấn xô đẩy, giữ gìn trật tự và giúp đỡ người già.",
      teacherActivity: "Thảo luận nhóm về các quy tắc ứng xử văn minh nơi công cộng.",
      studentActivity: "Nêu các quy định cần chấp hành trên phương tiện vận tải hành khách công cộng."
    },
    // Bài 6
    {
      lessonNumber: 6,
      part: 1,
      period: 1,
      title: "Kỹ năng đi xe đạp an toàn trên đường",
      subTitle: "Kỹ năng phanh xe và giữ thăng bằng",
      specificCompetency: "Biết phanh xe từ từ bằng cả hai tay (ưu tiên phanh sau trước phanh trước) để tránh lộn nhào.",
      teacherActivity: "Phân tích nguyên nhân xe đạp bị ngã lộn nhào khi bóp chết phanh trước đột ngột.",
      studentActivity: "Hiểu quy tắc: Bóp phanh sau trước rồi mới bóp nhẹ phanh trước để giảm dần tốc độ."
    },
    {
      lessonNumber: 6,
      part: 2,
      period: 2,
      title: "Kỹ năng đi xe đạp an toàn trên đường",
      subTitle: "Ra tín hiệu xin chuyển hướng",
      specificCompetency: "Biết giảm tốc độ, quan sát phía sau và giơ tay xin đường trước khi rẽ trái hoặc rẽ phải tối thiểu 10 mét.",
      teacherActivity: "Hướng dẫn thao tác giơ tay trái khi muốn rẽ trái và ngoái nhìn gương/quan sát phía sau.",
      studentActivity: "Thực hành ra hiệu lệnh xin rẽ và kết hợp quan sát an toàn."
    },
    // Bài 7
    {
      lessonNumber: 7,
      part: 1,
      period: 1,
      title: "Biển báo chỉ dẫn và biển báo hiệu lệnh",
      subTitle: "Phân biệt biển chỉ dẫn và biển hiệu lệnh",
      specificCompetency: "Phân biệt được biển chỉ dẫn (hình chữ nhật/vuông xanh) và biển hiệu lệnh (hình tròn xanh).",
      teacherActivity: "Đưa ra các cặp biển báo tương phản và yêu cầu HS phân loại.",
      studentActivity: "Phân loại biển vào 2 nhóm: Nhóm chỉ dẫn (hướng dẫn đường đi) và Nhóm hiệu lệnh (bắt buộc thi hành)."
    },
    {
      lessonNumber: 7,
      part: 2,
      period: 2,
      title: "Biển báo chỉ dẫn và biển báo hiệu lệnh",
      subTitle: "Ý nghĩa một số biển báo chỉ dẫn thường gặp",
      specificCompetency: "Hiểu ý nghĩa biển chỉ dẫn bệnh viện, bến xe buýt, trạm cấp cứu, đường cụt.",
      teacherActivity: "Tổ chức trò chơi 'Nhà thông thái biển báo': Nhìn hình đoán nhanh ý nghĩa.",
      studentActivity: "Nêu tác dụng của biển chỉ dẫn trong việc tìm kiếm các tiện ích công cộng khi đi đường."
    },
    // Bài 8
    {
      lessonNumber: 8,
      part: 1,
      period: 1,
      title: "Đi qua đường sắt an toàn",
      subTitle: "Quy tắc an toàn tại nơi giao nhau có rào chắn",
      specificCompetency: "Biết đứng chờ ngoài vạch dừng an toàn khi rào chắn đường sắt hạ xuống và chuông reo.",
      teacherActivity: "Cảnh báo mức độ nghiêm trọng khi cố tình luồn lách qua rào chắn đường sắt.",
      studentActivity: "Ký cam kết không bao giờ vượt rào chắn đường ray khi đèn đỏ đã bật sáng."
    },
    {
      lessonNumber: 8,
      part: 2,
      period: 2,
      title: "Đi qua đường sắt an toàn",
      subTitle: "Quy tắc tại nơi giao nhau không có rào chắn",
      specificCompetency: "Thực hiện 'Dừng lại - Quan sát cả 2 phía đường ray - Lắng nghe tiếng còi tàu' trước khi qua đường ngang dân sinh.",
      teacherActivity: "Hướng dẫn kĩ năng quan sát và lắng nghe tiếng còi tàu tại các đường ngang không có người gác.",
      studentActivity: "Nêu quy tắc dừng xe cách đường ray tối thiểu 5 mét để quan sát hai phía."
    },
    // Bài 9
    {
      lessonNumber: 9,
      part: 1,
      period: 1,
      title: "Chấp hành tín hiệu đèn giao thông và hiệu lệnh của người điều khiển giao thông",
      subTitle: "Ý nghĩa của đèn vàng trong Luật Giao thông",
      specificCompetency: "Hiểu đèn vàng báo hiệu phải dừng lại trước vạch dừng, trừ trường hợp đã đi quá vạch dừng.",
      teacherActivity: "Làm rõ hiểu lầm: Đèn vàng không phải là tín hiệu để phóng nhanh vượt qua ngã tư.",
      studentActivity: "Nhắc lại: Thấy đèn vàng phải giảm tốc độ và dừng lại trước vạch quy định."
    },
    {
      lessonNumber: 9,
      part: 2,
      period: 2,
      title: "Chấp hành tín hiệu đèn giao thông và hiệu lệnh của người điều khiển giao thông",
      subTitle: "Quy tắc nhường đường cho xe ưu tiên",
      specificCompetency: "Biết nhường đường ngay cho xe cứu hỏa, xe cứu thương, xe cảnh sát đang phát tín hiệu còi ưu tiên.",
      teacherActivity: "Giải thích vì sao xe cứu thương, cứu hỏa có quyền đi trước cả khi đèn đỏ.",
      studentActivity: "Thực hành đi dạt sang mép đường bên phải để nhường đường cho xe cấp cứu."
    },
    // Bài 10
    {
      lessonNumber: 10,
      part: 1,
      period: 1,
      title: "Ứng xử có văn hóa khi tham gia giao thông",
      subTitle: "Văn hóa giúp đỡ người khác khi đi đường",
      specificCompetency: "Biết chủ động dắt người già, người khuyết tật qua đường an toàn.",
      teacherActivity: "Khen ngợi những hành vi đẹp của học sinh tiểu học giúp đỡ người khác khi tham gia giao thông.",
      studentActivity: "Chia sẻ việc làm tốt em đã từng làm hoặc chứng kiến trên đường đi học."
    },
    {
      lessonNumber: 10,
      part: 2,
      period: 2,
      title: "Ứng xử có văn hóa khi tham gia giao thông",
      subTitle: "Văn hóa ứng xử khi xảy ra va chạm giao thông",
      specificCompetency: "Biết giữ bình tĩnh, hỏi thăm người bị nạn, không to tiếng cãi vã, biết nói lời xin lỗi và cảm ơn chân thành.",
      teacherActivity: "Đưa ra tình huống va quẹt nhẹ xe đạp và hướng dẫn cách cư xử lịch sự.",
      studentActivity: "Đóng vai xử lý tình huống: Đỡ bạn dậy, nhặt cặp sách giúp bạn và kiểm tra xem bạn có bị thương không."
    },
  ],

  4: [
    // Bài 1
    {
      lessonNumber: 1,
      part: 1,
      period: 1,
      title: "Đi xe đạp an toàn trên đường bộ",
      subTitle: "Quy định độ tuổi và phương tiện",
      specificCompetency: "Nắm được quy định học sinh từ đủ 10 tuổi (lớp 4) được tự điều khiển xe đạp đi học trên đường giao thông.",
      teacherActivity: "Phổ biến Luật Giao thông đường bộ quy định về độ tuổi và trang bị an toàn của xe đạp.",
      studentActivity: "Hiểu rõ trách nhiệm pháp lý và ý thức tự giác khi bắt đầu tự đi xe đạp đến trường."
    },
    {
      lessonNumber: 1,
      part: 2,
      period: 2,
      title: "Đi xe đạp an toàn trên đường bộ",
      subTitle: "Kỹ năng điều khiển xe đạp vững vàng",
      specificCompetency: "Biết đi xe đạp thăng bằng, không lạng lách đánh võng, không buông 2 tay, không chở quá số người quy định.",
      teacherActivity: "Liệt kê các lỗi vi phạm phổ biến bị CSGT xử phạt đối với người đi xe đạp.",
      studentActivity: "Cam kết: Không chở 2-3 bạn trên xe đạp, không dàn hàng ngang trên đường lộ."
    },
    // Bài 2
    {
      lessonNumber: 2,
      part: 1,
      period: 1,
      title: "Lựa chọn đường đi an toàn, phòng tránh điểm mù giao thông",
      subTitle: "Nhận diện 'Điểm mù' của xe tải, xe buýt lớn",
      specificCompetency: "Hiểu 'điểm mù' là các khoảng không gian xung quanh xe ô tô lớn mà tài xế không thể quan sát qua gương.",
      teacherActivity: "Chiếu sơ đồ 4 điểm mù nguy hiểm của xe tải: Phía trước đầu xe, phía sau xe, hai bên sườn xe (nhất là bên phụ).",
      studentActivity: "Nhận biết các vùng màu đỏ 'điểm mù' chết người xung quanh xe tải lớn."
    },
    {
      lessonNumber: 2,
      part: 2,
      period: 2,
      title: "Lựa chọn đường đi an toàn, phòng tránh điểm mù giao thông",
      subTitle: "Quy tắc phòng tránh điểm mù",
      specificCompetency: "Tuyệt đối không đi sát hoặc vượt lên bên sườn xe tải lớn khi xe đang vào cua hoặc rẽ phải.",
      teacherActivity: "Hướng dẫn quy tắc: 'Nếu bạn không nhìn thấy tài xế qua gương chiếu hậu, tài xế cũng không nhìn thấy bạn!'.",
      studentActivity: "Ghi nhớ quy tắc lùi xa và giữ cự ly an toàn khi thấy xe bồn, xe container chuẩn bị rẽ."
    },
    // Bài 3
    {
      lessonNumber: 3,
      part: 1,
      period: 1,
      title: "Đi bộ và sang đường an toàn tại nơi tầm nhìn bị che khuất",
      subTitle: "Nhận diện nơi tầm nhìn bị che khuất",
      specificCompetency: "Xác định các vị trí khuất tầm nhìn: Góc cua gấp, sau xe buýt đang dừng đỗ, ngõ hẹp có tường cao.",
      teacherActivity: "Phân tích vì sao không được bước qua đường ngay sau đuôi xe buýt hoặc đầu xe tải đỗ.",
      studentActivity: "Chỉ ra nguy hiểm: Xe phía sau lao lên không thấy người đi bộ do bị thân xe buýt che chắn."
    },
    {
      lessonNumber: 3,
      part: 2,
      period: 2,
      title: "Đi bộ và sang đường an toàn tại nơi tầm nhìn bị che khuất",
      subTitle: "Quy tắc di chuyển tại nơi tầm nhìn che khuất",
      specificCompetency: "Quy tắc: Đi thật chậm, dừng lại quan sát, nhô đầu nhìn nhẹ ra ngoài để đảm bảo an toàn trước khi bước tiếp.",
      teacherActivity: "Làm mẫu động tác đi chậm và quan sát góc nhìn mở rộng trước khi bước qua khoảng khuất.",
      studentActivity: "Thực hành quy tắc di chuyển thong thả và cẩn trọng khi ra khỏi ngõ hẹp."
    },
    // Bài 4
    {
      lessonNumber: 4,
      part: 1,
      period: 1,
      title: "An toàn khi đi trên ô tô và các phương tiện giao thông đường thủy",
      subTitle: "An toàn khi đi ô tô",
      specificCompetency: "Biết ngồi ở hàng ghế sau xe ô tô, cài dây an toàn, không mở cửa xe khi chưa quan sát kỹ phía sau.",
      teacherActivity: "Cảnh báo tai nạn do người trên xe mở cửa bất cẩn làm người đi xe máy phía sau đâm vào.",
      studentActivity: "Thực hành mở cửa xe kiểu Hà Lan (dùng tay xa cửa mở hé quan sát trước khi đẩy rộng cửa)."
    },
    {
      lessonNumber: 4,
      part: 2,
      period: 2,
      title: "An toàn khi đi trên ô tô và các phương tiện giao thông đường thủy",
      subTitle: "An toàn khi đi đò, phà qua sông",
      specificCompetency: "Chấp hành quy định mặc áo phao, không đứng ở mũi thuyền bấp bênh, nghe lệnh thuyền trưởng.",
      teacherActivity: "Giáo dục ý thức phòng chống đuối nước khi tham gia giao thông vùng sông nước miền Tây.",
      studentActivity: "Nêu các trang thiết bị cứu sinh bắt buộc trên đò ngang (áo phao, phao tròn, dụng cụ nổi cầm tay)."
    },
    // Bài 5
    {
      lessonNumber: 5,
      part: 1,
      period: 1,
      title: "Biển báo cấm và biển báo nguy hiểm",
      subTitle: "Hệ thống biển báo cấm",
      specificCompetency: "Hiểu bản chất biển báo cấm hình tròn viền đỏ: Cấm xe đạp, cấm rẽ trái, cấm đi ngược chiều.",
      teacherActivity: "Đưa ra các biển báo cấm trong khu dân cư và giải thích lý do cấm.",
      studentActivity: "Vẽ và ghi nhớ ý nghĩa biển số P.102 'Cấm đi ngược chiều' và P.103a 'Cấm ô tô'."
    },
    {
      lessonNumber: 5,
      part: 2,
      period: 2,
      title: "Biển báo cấm và biển báo nguy hiểm",
      subTitle: "Hệ thống biển báo nguy hiểm",
      specificCompetency: "Nhận biết các biển tam giác cảnh báo công trường thi công, đoạn đường dốc nguy hiểm, cầu hẹp.",
      teacherActivity: "Tổ chức trò chơi nhận diện tình huống nguy hiểm tương ứng với biển báo giao thông.",
      studentActivity: "Giải thích cách phản xạ của người lái xe khi bắt gặp biển cảnh báo đường trơn."
    },
    // Bài 6
    {
      lessonNumber: 6,
      part: 1,
      period: 1,
      title: "Phòng tránh tai nạn giao thông tại nơi đường giao nhau",
      subTitle: "Quy tắc nhường đường tại nơi đường giao nhau",
      specificCompetency: "Hiểu quy tắc nhường đường: Xe từ đường nhánh phải nhường đường cho xe trên đường chính ưu tiên.",
      teacherActivity: "Vẽ sa hình ngã tư không có đèn tín hiệu. Hướng dẫn quy tắc nhường đường cho xe bên phải.",
      studentActivity: "Giải sa hình giao thông đơn giản trên bảng lớp."
    },
    {
      lessonNumber: 6,
      part: 2,
      period: 2,
      title: "Phòng tránh tai nạn giao thông tại nơi đường giao nhau",
      subTitle: "Thực hành xử lý tình huống qua ngã tư",
      specificCompetency: "Biết giảm tốc độ trước khi đến ngã tư, quan sát 4 hướng và chọn thời điểm an toàn để đi qua.",
      teacherActivity: "Đưa ra tình huống 3 xe cùng vào ngã tư và phân tích xe nào được đi trước.",
      studentActivity: "Xác định thứ tự ưu tiên của các phương tiện theo luật định."
    },
    // Bài 7
    {
      lessonNumber: 7,
      part: 1,
      period: 1,
      title: "Kỹ năng ứng phó khi gặp tình huống giao thông nguy hiểm",
      subTitle: "Tình huống xe đi ngược chiều hoặc lấn làn",
      specificCompetency: "Biết chủ động đi né sát lề đường bên phải, không đối đầu hay tranh chấp làn đường nguy hiểm.",
      teacherActivity: "Phân tích cách phòng vệ chủ động: 'Nhường một bước để đổi lấy an toàn trọn đời'.",
      studentActivity: "Chia sẻ cách xử lý khi gặp xe máy đi nhanh, lấn làn đường xe đạp."
    },
    {
      lessonNumber: 7,
      part: 2,
      period: 2,
      title: "Kỹ năng ứng phó khi gặp tình huống giao thông nguy hiểm",
      subTitle: "Kỹ năng khi phát hiện tai nạn trên đường",
      specificCompetency: "Biết giữ khoảng cách an toàn, gọi ngay người lớn hỗ trợ, ghi nhớ số điện thoại khẩn cấp 115 (Cấp cứu), 113 (Công an).",
      teacherActivity: "Dạy học sinh cách gọi điện khẩn cấp báo tin tai nạn: Nói rõ địa điểm, tình trạng người bị nạn.",
      studentActivity: "Thực hành gọi điện báo tin cấp cứu 115 rõ ràng, mạch lạc."
    },
    // Bài 8
    {
      lessonNumber: 8,
      part: 1,
      period: 1,
      title: "Văn hóa giao thông khi tham gia phương tiện công cộng",
      subTitle: "Ứng xử văn minh tại nhà ga, bến xe",
      specificCompetency: "Không chen lấn, xếp hàng mua vé, giữ gìn vệ sinh, không làm mất trật tự nơi đông người.",
      teacherActivity: "Giáo dục văn hóa nơi công cộng cho học sinh tiểu học.",
      studentActivity: "Thảo luận: Những hành vi nào thể hiện nét đẹp văn hóa giao thông của học sinh?"
    },
    {
      lessonNumber: 8,
      part: 2,
      period: 2,
      title: "Văn hóa giao thông khi tham gia phương tiện công cộng",
      subTitle: "Bảo vệ tài sản chung trên phương tiện",
      specificCompetency: "Không vẽ bậy lên ghế xe, không bóc tem nhãn hướng dẫn an toàn, giữ gìn xe sạch đẹp.",
      teacherActivity: "Khắc sâu trách nhiệm bảo vệ tài sản công cộng của công dân nhỏ tuổi.",
      studentActivity: "Cam kết giữ gìn vệ sinh và không phá hoại cơ sở vật chất trên xe buýt, tàu hỏa."
    },
    // Bài 9
    {
      lessonNumber: 9,
      part: 1,
      period: 1,
      title: "Chấp hành luật giao thông đường bộ",
      subTitle: "Các hành vi bị nghiêm cấm trong Luật Giao thông",
      specificCompetency: "Nắm được các hành vi bị cấm: Đi xe khi đã uống rượu bia, lạng lách đánh võng, đua xe trái phép.",
      teacherActivity: "Phổ biến thông điệp quốc gia: 'Đã uống rượu bia - Không lái xe'.",
      studentActivity: "Nhắc nhở người thân trong gia đình luôn chấp hành nghiêm chỉnh luật giao thông."
    },
    {
      lessonNumber: 9,
      part: 2,
      period: 2,
      title: "Chấp hành luật giao thông đường bộ",
      subTitle: "Trách nhiệm của học sinh đối với trật tự ATGT",
      specificCompetency: "Gương mẫu chấp hành luật, tham gia các buổi tuyên truyền ATGT trong trường học.",
      teacherActivity: "Tổ chức cuộc thi hái hoa dân chủ tìm hiểu Luật Giao thông đường bộ.",
      studentActivity: "Hào hứng trả lời các câu hỏi trắc nghiệm luật giao thông và giành phần thưởng."
    },
    // Bài 10
    {
      lessonNumber: 10,
      part: 1,
      period: 1,
      title: "Em làm tuyên truyền viên nhí về an toàn giao thông",
      subTitle: "Xây dựng thông điệp an toàn giao thông",
      specificCompetency: "Biết sáng tác khẩu hiệu, vẽ tranh cổ động ATGT gửi tới bạn bè và cộng đồng.",
      teacherActivity: "Hướng dẫn học sinh các khẩu hiệu ngắn gọn, ý nghĩa, dễ nhớ về ATGT.",
      studentActivity: "Sáng tác khẩu hiệu ngắn: 'Đội mũ xinh - Giữ trọn ước mơ', 'Đi đúng làn - Về nhà bình an'."
    },
    {
      lessonNumber: 10,
      part: 2,
      period: 2,
      title: "Em làm tuyên truyền viên nhí về an toàn giao thông",
      subTitle: "Thuyết trình và lan tỏa văn hóa giao thông",
      specificCompetency: "Tự tin chia sẻ kiến thức ATGT với người thân và các bạn học sinh lớp dưới.",
      teacherActivity: "Tổ chức góc triển lãm tranh tuyên truyền ATGT của lớp.",
      studentActivity: "Trưng bày sản phẩm tranh vẽ và thuyết trình ý nghĩa bức tranh của nhóm mình."
    },
  ],

  5: [
    // Bài 1
    {
      lessonNumber: 1,
      part: 1,
      period: 1,
      title: "Đi xe đạp an toàn và phòng tránh tai nạn giao thông",
      subTitle: "Lựa chọn tuyến đường đi an toàn",
      specificCompetency: "Biết lựa chọn lộ trình đi học an toàn nhất (ít xe lớn, có đèn chiếu sáng, ít nút giao nguy hiểm).",
      teacherActivity: "Hướng dẫn HS phân tích các cung đường từ nhà đến trường: Tuyến đường ngắn nhất chưa chắc là an toàn nhất.",
      studentActivity: "Vẽ sơ đồ cung đường từ nhà đến trường, đánh dấu các điểm nguy hiểm cần lưu ý."
    },
    {
      lessonNumber: 1,
      part: 2,
      period: 2,
      title: "Đi xe đạp an toàn và phòng tránh tai nạn giao thông",
      subTitle: "Kỹ năng vượt chướng ngại vật an toàn",
      specificCompetency: "Xử lý khi gặp chướng ngại vật trên đường: Giảm tốc độ, quan sát phía sau trước khi lách xe sang làn khác.",
      teacherActivity: "Mô phỏng tình huống có hố ga, cành cây hoặc xe đỗ bên đường chắn lối đi.",
      studentActivity: "Nêu các bước vượt chướng ngại vật an toàn: Giảm tốc độ -> Bấm chuông -> Quan sát sau -> Tránh từ từ."
    },
    // Bài 2 (Tuần 3 & 4) - Chuẩn tài liệu mẫu user cung cấp
    {
      lessonNumber: 2,
      part: 1,
      period: 1,
      title: "Phòng tránh tai nạn nơi tầm nhìn bị che khuất",
      subTitle: "Nhận biết các vị trí bị che khuất tầm nhìn",
      specificCompetency: "Nhận biết các vị trí/tình huống giao thông bị che khuất tầm nhìn có nguy cơ tai nạn cao (đoạn đường cua gấp, sau xe buýt đỗ, ngõ hẻm khuất tường) và biết cách phòng tránh an toàn.",
      teacherActivity: "Cho HS quan sát tranh/ảnh các vị trí che khuất tầm nhìn (đoạn đường cua gấp, sau xe buýt đỗ, ngõ hẻm khuất tường). Hướng dẫn quy tắc an toàn: Đi chậm, giảm tốc độ, bấm chuông/còi cảnh báo, dừng lại quan sát.",
      studentActivity: "Thảo luận nhóm chỉ ra các điểm nguy hiểm bị che khuất tầm nhìn và thực hành nêu cách xử lý an toàn."
    },
    {
      lessonNumber: 2,
      part: 2,
      period: 2,
      title: "Phòng tránh tai nạn nơi tầm nhìn bị che khuất",
      subTitle: "Kỹ năng xử lý tình huống thực tế tại nơi tầm nhìn bị che khuất",
      specificCompetency: "Vận dụng thành thạo quy tắc 'Dừng lại quan sát - Đi chậm - Bấm chuông báo hiệu' khi đi từ trong ngõ ra đường lớn hoặc qua khúc cua khuất tầm nhìn.",
      teacherActivity: "Đưa ra các tình huống thực tế tại địa phương: Khúc cua đê, ngõ xóm có hàng rào cây rậm rạp. Hướng dẫn HS cách lắng nghe tiếng động cơ từ xa.",
      studentActivity: "Đóng vai xử lý tình huống đi xe đạp từ ngõ phụ ra đường liên xã an toàn, tự tin thuyết trình giải pháp."
    },
    // Bài 3 (Tuần 5 & 6)
    {
      lessonNumber: 3,
      part: 1,
      period: 1,
      title: "Kỹ năng xử lý tình huống nguy hiểm khi tham gia giao thông",
      subTitle: "Nhận diện tình huống bất ngờ trên đường",
      specificCompetency: "Nhận diện các tình huống bất ngờ: Chó chạy qua đường, xe phía trước phanh gấp, mặt đường có dầu nhớt trơn trượt.",
      teacherActivity: "Chiếu clip các tình huống giao thông nguy hiểm và hướng dẫn cách giữ bình tĩnh, hai tay nắm chắc ghi đông.",
      studentActivity: "Thảo luận: Khi gặp chướng ngại vật bất ngờ, phản xạ đầu tiên cần làm là gì? (Giảm ga/bóp phanh từ từ, giữ vững tay lái)."
    },
    {
      lessonNumber: 3,
      part: 2,
      period: 2,
      title: "Kỹ năng xử lý tình huống nguy hiểm khi tham gia giao thông",
      subTitle: "Kỹ năng tự thoát hiểm và bảo vệ bản thân",
      specificCompetency: "Biết cuộn tròn người bảo vệ vùng đầu cổ khi không may xảy ra té ngã xe để hạn chế tối đa chấn thương.",
      teacherActivity: "Làm mẫu kỹ năng tiếp đất an toàn (cuộn người theo đà ngã, thu cằm vào ngực, hai tay che đầu).",
      studentActivity: "Thực hành tư thế bảo vệ đầu trên thảm tập thể dục của trường."
    },
    // Bài 4 (Tuần 7 & 8)
    {
      lessonNumber: 4,
      part: 1,
      period: 1,
      title: "Đi qua nơi đường giao nhau có vòng xuyến hoặc đèn tín hiệu",
      subTitle: "Quy tắc di chuyển trong nút giao thông có vòng xuyến",
      specificCompetency: "Nắm vững quy tắc nhường đường tại vòng xuyến: Khi vào vòng xuyến phải nhường đường cho xe đi bên trái mình.",
      teacherActivity: "Vẽ sơ đồ bùng binh (vòng xuyến) và hướng dẫn hướng đi vào, hướng rẽ ra đúng luật.",
      studentActivity: "Mô phỏng đường đi của xe đạp khi qua bùng binh lớn trên sa hình lớp học."
    },
    {
      lessonNumber: 4,
      part: 2,
      period: 2,
      title: "Đi qua nơi đường giao nhau có vòng xuyến hoặc đèn tín hiệu",
      subTitle: "Kỹ năng chuyển làn và thoát khỏi vòng xuyến",
      specificCompetency: "Biết ra tín hiệu xin chuyển hướng từ từ ra làn ngoài trước khi rời khỏi vòng xuyến.",
      teacherActivity: "Cảnh báo nguy cơ va chạm khi cắt ngang mặt các dòng xe đang chạy trong vòng xuyến.",
      studentActivity: "Ghi nhớ quy tắc ra hiệu xin rẽ và di chuyển mượt mà không tạt đầu xe khác."
    },
    // Bài 5 (Tuần 9 & 10)
    {
      lessonNumber: 5,
      part: 1,
      period: 1,
      title: "Hiểu biết về hệ thống biển báo hiệu giao thông đường bộ",
      subTitle: "Hệ thống 5 nhóm biển báo hiệu đường bộ",
      specificCompetency: "Nắm chắc 5 nhóm biển báo: Biển báo cấm, Biển báo nguy hiểm, Biển hiệu lệnh, Biển chỉ dẫn, Biển phụ.",
      teacherActivity: "Phân tích đặc điểm hình dạng, màu sắc đặc trưng của từng nhóm biển báo giao thông đường bộ.",
      studentActivity: "Lập sơ đồ tư duy phân loại 5 nhóm biển báo giao thông vào vở ghi bài."
    },
    {
      lessonNumber: 5,
      part: 2,
      period: 2,
      title: "Hiểu biết về hệ thống biển báo hiệu giao thông đường bộ",
      subTitle: "Ý nghĩa của các biển phụ và vạch kẻ đường",
      specificCompetency: "Hiểu tác dụng của biển phụ bổ sung thông tin cho biển chính và ý nghĩa của vạch liền, vạch đứt khúc.",
      teacherActivity: "Giải thích vạch kẻ tim đường liền nét (không được lấn làn đè vạch) và nét đứt (được phép vượt khi an toàn).",
      studentActivity: "Nhận biết các loại vạch kẻ đường trên quốc lộ và tỉnh lộ qua hình ảnh thực tế."
    },
    // Bài 6 (Tuần 11 & 12)
    {
      lessonNumber: 6,
      part: 1,
      period: 1,
      title: "An toàn khi tham gia giao thông đường sắt",
      subTitle: "Hành lang an toàn đường sắt",
      specificCompetency: "Hiểu quy định về hành lang bảo vệ an toàn giao thông đường sắt, không lấn chiếm làm nơi buôn bán, thả rông gia súc.",
      teacherActivity: "Nêu các vụ tai nạn đường sắt nghiêm trọng do người dân lấn chiếm hành lang an toàn đường ray.",
      studentActivity: "Kể các hành vi vi phạm hành lang đường sắt cần tránh: Phơi nông sản, chăn thả bò trên đường tàu."
    },
    {
      lessonNumber: 6,
      part: 2,
      period: 2,
      title: "An toàn khi tham gia giao thông đường sắt",
      subTitle: "Quy tắc khi đi tàu hỏa",
      specificCompetency: "Biết chấp hành nội quy đi tàu hỏa: Không thò đầu tay ra cửa sổ, không mở cửa toa tàu khi tàu đang chạy.",
      teacherActivity: "Hướng dẫn các bước sơ tán an toàn khi có sự cố trên tàu hỏa.",
      studentActivity: "Ghi nhớ các vị trí thoát hiểm và bình chữa cháy khẩn cấp trên các toa tàu."
    },
    // Bài 7 (Tuần 13 & 14)
    {
      lessonNumber: 7,
      part: 1,
      period: 1,
      title: "An toàn khi tham gia giao thông đường thủy",
      subTitle: "Nhận biết phương tiện thủy an toàn",
      specificCompetency: "Biết phương tiện thủy an toàn phải có đăng kiểm, người lái có bằng lái/chứng chỉ chuyên môn, có đủ áo phao.",
      teacherActivity: "Khuyến cáo học sinh kiên quyết không đi đò chở quá tải, đò không trang bị áo phao cứu sinh.",
      studentActivity: "Nhận biết biển hiệu và số đăng kiểm gắn trên thân thuyền vỏ composite hoặc tàu đò."
    },
    {
      lessonNumber: 7,
      part: 2,
      period: 2,
      title: "An toàn khi tham gia giao thông đường thủy",
      subTitle: "Kỹ năng sinh tồn khi gặp tai nạn đường thủy",
      specificCompetency: "Biết cách thả lỏng cơ thể nổi trên mặt nước, bám vào vật thể nổi xung quanh và hô to kêu cứu.",
      teacherActivity: "Hướng dẫn nguyên lý tự cứu đuối nước: Giữ bình tĩnh, ngửa cổ hít thở sâu, không hoảng loạn vùng vẫy mất sức.",
      studentActivity: "Luyện tập thao tác hít sâu nín thở và tư thế bơi tự cứu trong nước."
    },
    // Bài 8 (Tuần 15 & 16)
    {
      lessonNumber: 8,
      part: 1,
      period: 1,
      title: "Đội mũ bảo hiểm đạt chuẩn và văn hóa khi đi xe hai bánh",
      subTitle: "Mũ bảo hiểm và sức khỏe não bộ",
      specificCompetency: "Hiểu sâu sắc cấu tạo giải phẫu đầu người và cơ chế hấp thụ xung động của lớp xốp EPS trong mũ bảo hiểm.",
      teacherActivity: "Thuyết trình khoa học về chấn thương sọ não và giá trị vô giá của chiếc mũ bảo hiểm chất lượng cao.",
      studentActivity: "Quan sát mô hình giải phẫu đầu và mũ bảo hiểm, ý thức sâu sắc việc bảo vệ bộ não của mình."
    },
    {
      lessonNumber: 8,
      part: 2,
      period: 2,
      title: "Đội mũ bảo hiểm đạt chuẩn và văn hóa khi đi xe hai bánh",
      subTitle: "Xây dựng thói quen đội mũ bảo hiểm 100%",
      specificCompetency: "Tự giác 100% đội mũ bảo hiểm khi ngồi trên xe máy, xe đạp điện, kể cả đi đoạn đường ngắn gần nhà.",
      teacherActivity: "Phát động phong trào '100% học sinh đến trường đội mũ bảo hiểm đạt chuẩn'.",
      studentActivity: "Toàn lớp ký cam kết thi đua đội mũ bảo hiểm đạt chuẩn 100% trong năm học."
    },
    // Bài 9 (Tuần 17 & 18)
    {
      lessonNumber: 9,
      part: 1,
      period: 1,
      title: "Em làm tuyên truyền viên an toàn giao thông trong nhà trường",
      subTitle: "Xây dựng kế hoạch tuyên truyền ATGT",
      specificCompetency: "Biết lập kế hoạch tổ chức một buổi sinh hoạt chuyên đề hoặc phát thanh măng non về ATGT cho toàn trường.",
      teacherActivity: "Hướng dẫn các bước tổ chức một buổi phát thanh măng non chủ đề 'An toàn giao thông đến trường'.",
      studentActivity: "Làm việc theo tổ viết kịch bản phát thanh tuyên truyền 3 phút về ATGT."
    },
    {
      lessonNumber: 9,
      part: 2,
      period: 2,
      title: "Em làm tuyên truyền viên an toàn giao thông trong nhà trường",
      subTitle: "Thực hành phát thanh tuyên truyền ATGT",
      specificCompetency: "Tự tin phát thanh, diễn tiểu phẩm hoặc thuyết trình truyền tải thông điệp văn hóa giao thông.",
      teacherActivity: "Tổ chức cho các tổ lên biểu diễn tiểu phẩm ngắn và chấm điểm thi đua.",
      studentActivity: "Tham gia biểu diễn tiểu phẩm tình huống giao thông, nhận xét và rút ra thông điệp giáo dục."
    },
    // Bài 10 (Tuần 19 & 20)
    {
      lessonNumber: 10,
      part: 1,
      period: 1,
      title: "Xây dựng văn hóa giao thông và ứng xử văn minh nơi công cộng",
      subTitle: "Tiêu chí văn hóa giao thông của người học sinh thế hệ mới",
      specificCompetency: "Hiểu văn hóa giao thông là sự tự giác chấp hành pháp luật, nhường nhịn, tôn trọng và yêu thương con người.",
      teacherActivity: "Phân tích 5 tiêu chí xây dựng nét đẹp văn hóa giao thông cho học sinh tiểu học.",
      studentActivity: "Thảo luận và đề xuất những điều học sinh nên làm và không nên làm khi đi đường."
    },
    {
      lessonNumber: 10,
      part: 2,
      period: 2,
      title: "Xây dựng văn hóa giao thông và ứng xử văn minh nơi công cộng",
      subTitle: "Lan tỏa văn hóa giao thông đến gia đình và cộng đồng",
      specificCompetency: "Biết nhắc nhở cha mẹ, người thân không vi phạm nồng độ cồn, không vượt đèn đỏ, không sử dụng điện thoại khi lái xe.",
      teacherActivity: "Giao nhiệm vụ: Viết một lá thư ngắn gửi bố mẹ bày tỏ mong muốn bố mẹ luôn lái xe an toàn trở về bên gia đình.",
      studentActivity: "Viết lá thư tâm tình gửi cha mẹ với thông điệp: 'Phía sau tay lái của bố mẹ là tương lai của con'."
    },
  ]
};

/**
 * Lấy bài học An toàn giao thông theo khối lớp và tuần học
 * Quy tắc: Mỗi bài gồm 2 tiết, tích hợp vào tiết HĐTN (SHL) của 2 tuần liên tiếp
 * Tuần 1, 2: Bài 1
 * Tuần 3, 4: Bài 2 (Tuần 3 là Tiết 1, Tuần 4 là Tiết 2)
 * Tuần 5, 6: Bài 3
 * ...
 * Tuần 19, 20: Bài 10
 */
export function getTrafficSafetyLesson(grade: Grade, week: number): TrafficSafetyLesson {
  const safeGrade = (Number(grade) >= 1 && Number(grade) <= 5 ? Number(grade) : 5) as Grade;
  const list = TRAFFIC_SAFETY_CURRICULUM[safeGrade] || TRAFFIC_SAFETY_CURRICULUM[5];

  // Tính số bài: 1 -> 10
  // Nếu tuần từ 1 đến 20: bài = Math.ceil(week / 2)
  // Nếu tuần > 20: quay vòng hoặc bài ôn tập tổng hợp
  const effectiveWeek = Math.max(1, week);
  const lessonNumber = ((Math.ceil(effectiveWeek / 2) - 1) % 10) + 1; // 1 to 10
  const part = (((effectiveWeek - 1) % 2) + 1) as 1 | 2; // 1 hoặc 2

  const matched = list.find((it) => it.lessonNumber === lessonNumber && it.part === part);
  if (matched) {
    return matched;
  }

  // Fallback to Grade 5 Lesson 2 for week 3
  return list[0];
}
