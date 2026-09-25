import { Grade, LessonPlan, ScheduleItem } from "../types";
import { getDetailedMusicLesson } from "./musicLessonDetails";
import { getOfficialMusicLesson } from "./musicCurriculumOfficial";
import { getDetailedEnglishLesson } from "./englishLessonDetails";
import { getDetailedLessonActivities } from "./detailedActivitiesGenerator";
import { cleanLessonTitle } from "../utils/lessonTitleHelper";

export interface SubjectCurriculum {
  subject: string;
  periodsPerWeek: number;
  totalPeriods: number;
}

export const GRADE_SUBJECTS: Record<Grade, SubjectCurriculum[]> = {
  1: [
    { subject: "Tiếng Việt", periodsPerWeek: 12, totalPeriods: 420 },
    { subject: "Toán", periodsPerWeek: 3, totalPeriods: 105 },
    { subject: "Đạo đức", periodsPerWeek: 1, totalPeriods: 35 },
    { subject: "Tự nhiên và Xã hội", periodsPerWeek: 2, totalPeriods: 70 },
    { subject: "Giáo dục Thể chất", periodsPerWeek: 2, totalPeriods: 70 },
    { subject: "Nghệ thuật (Âm nhạc, Mĩ thuật)", periodsPerWeek: 2, totalPeriods: 70 },
    { subject: "Hoạt động trải nghiệm", periodsPerWeek: 3, totalPeriods: 105 },
    { subject: "Tăng cường Tiếng Việt", periodsPerWeek: 2, totalPeriods: 70 },
    { subject: "Tăng cường Toán", periodsPerWeek: 3, totalPeriods: 105 },
  ],
  2: [
    { subject: "Tiếng Việt", periodsPerWeek: 10, totalPeriods: 350 },
    { subject: "Toán", periodsPerWeek: 5, totalPeriods: 175 },
    { subject: "Đạo đức", periodsPerWeek: 1, totalPeriods: 35 },
    { subject: "Tự nhiên và Xã hội", periodsPerWeek: 2, totalPeriods: 70 },
    { subject: "Giáo dục Thể chất", periodsPerWeek: 2, totalPeriods: 70 },
    { subject: "Nghệ thuật (Âm nhạc, Mĩ thuật)", periodsPerWeek: 2, totalPeriods: 70 },
    { subject: "Hoạt động trải nghiệm", periodsPerWeek: 3, totalPeriods: 105 },
    { subject: "Tự chọn Tiếng Anh", periodsPerWeek: 2, totalPeriods: 70 },
    { subject: "Tăng cường Tiếng Việt", periodsPerWeek: 2, totalPeriods: 70 },
    { subject: "Tăng cường Toán", periodsPerWeek: 3, totalPeriods: 105 },
  ],
  3: [
    { subject: "Tiếng Việt", periodsPerWeek: 7, totalPeriods: 245 },
    { subject: "Toán", periodsPerWeek: 5, totalPeriods: 175 },
    { subject: "Tiếng Anh", periodsPerWeek: 4, totalPeriods: 140 },
    { subject: "Đạo đức", periodsPerWeek: 1, totalPeriods: 35 },
    { subject: "Tự nhiên và Xã hội", periodsPerWeek: 2, totalPeriods: 70 },
    { subject: "Tin học & Công nghệ", periodsPerWeek: 2, totalPeriods: 70 },
    { subject: "Giáo dục Thể chất", periodsPerWeek: 2, totalPeriods: 70 },
    { subject: "Nghệ thuật (Âm nhạc, Mĩ thuật)", periodsPerWeek: 2, totalPeriods: 70 },
    { subject: "Hoạt động trải nghiệm", periodsPerWeek: 3, totalPeriods: 105 },
  ],
  4: [
    { subject: "Tiếng Việt", periodsPerWeek: 7, totalPeriods: 245 },
    { subject: "Toán", periodsPerWeek: 5, totalPeriods: 175 },
    { subject: "Tiếng Anh", periodsPerWeek: 4, totalPeriods: 140 },
    { subject: "Đạo đức", periodsPerWeek: 1, totalPeriods: 35 },
    { subject: "Khoa học", periodsPerWeek: 2, totalPeriods: 70 },
    { subject: "Lịch sử và Địa lí", periodsPerWeek: 2, totalPeriods: 70 },
    { subject: "Công nghệ", periodsPerWeek: 1, totalPeriods: 35 },
    { subject: "Tin học", periodsPerWeek: 1, totalPeriods: 35 },
    { subject: "Giáo dục Thể chất", periodsPerWeek: 2, totalPeriods: 70 },
    { subject: "Nghệ thuật (Âm nhạc, Mĩ thuật)", periodsPerWeek: 2, totalPeriods: 70 },
    { subject: "Hoạt động trải nghiệm", periodsPerWeek: 3, totalPeriods: 105 },
  ],
  5: [
    { subject: "Tiếng Việt", periodsPerWeek: 7, totalPeriods: 245 },
    { subject: "Toán", periodsPerWeek: 5, totalPeriods: 175 },
    { subject: "Tiếng Anh", periodsPerWeek: 4, totalPeriods: 140 },
    { subject: "Đạo đức", periodsPerWeek: 1, totalPeriods: 35 },
    { subject: "Khoa học", periodsPerWeek: 2, totalPeriods: 70 },
    { subject: "Lịch sử và Địa lí", periodsPerWeek: 2, totalPeriods: 70 },
    { subject: "Công nghệ", periodsPerWeek: 1, totalPeriods: 35 },
    { subject: "Tin học", periodsPerWeek: 1, totalPeriods: 35 },
    { subject: "Giáo dục Thể chất", periodsPerWeek: 2, totalPeriods: 70 },
    { subject: "Nghệ thuật", periodsPerWeek: 2, totalPeriods: 70 },
    { subject: "Hoạt động trải nghiệm", periodsPerWeek: 3, totalPeriods: 105 },
  ]
};

// Rich default lesson plans with 2 columns, all CV 2345 sections, and specific integrations for all 5 grades
export const SAMPLE_LESSON_PLANS: Record<string, LessonPlan> = {
  // LỚP 5 - TUẦN 1 - TIẾT 1 HĐTN (Sinh hoạt dưới cờ)
  "5-w1-hdtn-1": {
    id: "5-w1-hdtn-1",
    grade: 5,
    subject: "Hoạt động trải nghiệm",
    subSubject: "Sinh hoạt dưới cờ",
    periodNumber: 1,
    curriculumPeriod: 1,
    lessonTitle: "Sinh hoạt dưới cờ: CHÀO NĂM HỌC MỚI",
    week: 1,
    dayOfWeek: "Thứ Hai",
    dateStr: "07/09/2026",
    teacherName: "Nguyễn Hoàng Tuấn",
    className: "5A",
    schoolName: "Trường Tiểu học Tân Thạnh",
    departmentName: "UBND Xã Tân Thạnh",
    branchName: "Điểm Tân Bình",
    objectives: {
      specificCompetencies: [
        "Học sinh thực hiện nghiêm trang nghi lễ chào cờ đầu năm học mới. Thể hiện niềm tự hào và quyết tâm phấn đấu trong năm học cuối cấp tiểu học.",
        "Rèn luyện kỹ năng sinh hoạt tập thể, lắng nghe phát động chủ đề năm học mới của Liên đội và BGH nhà trường."
      ],
      generalCompetencies: [
        "Năng lực tự chủ và tự học: Tự giác chuẩn bị trang phục chỉnh tề, thực hiện đúng nội quy chào cờ.",
        "Năng lực giao tiếp và hợp tác: Tự tin giao lưu, hòa nhập cùng các bạn và thầy cô trong không khí ngày hội tựu trường."
      ],
      qualities: [
        "Yêu nước: Tự hào về mái trường, kính trọng Quốc kỳ và hát vang Quốc ca, Đội ca.",
        "Trách nhiệm, chăm chỉ: Có ý thức phấn đấu trở thành con ngoan trò giỏi, gương mẫu cho học sinh các khối lớp dưới."
      ],
      integrations: {
        humanRights: "QCN: Quyền được học tập trong môi trường giáo dục an toàn, thân thiện và tôn trọng nhân phẩm.",
        lifeSkills: "KNS: Kỹ năng lắng nghe tích cực, tự tin trước tập thể đông người và giữ gìn trật tự nơi công cộng.",
        ai: "1.A1.1 - Khởi đầu năm học mới với tinh thần chủ động tìm hiểu tri thức và công nghệ số."
      }
    },
    materials: {
      teacher: ["Kế hoạch tuần 1, sổ chủ nhiệm, bài phát động thi đua chào năm học mới, hệ thống âm thanh cờ hoa nhà trường."],
      student: ["Trang phục chỉnh tề (áo đồng phục trắng, khăn quàng đỏ, bảng tên), ghế ngồi theo quy định."]
    },
    activities: [
      {
        name: "1. Nghi lễ Chào cờ (Khởi động - 10 phút)",
        teacherActivity: "Hướng dẫn học sinh tập hợp theo hàng lối ngay ngắn, chỉnh đốn trang phục. Phối hợp với Tổng phụ trách Đội điều hành nghi lễ Chào cờ toàn trường (Nghiêm - Chào cờ - Quốc ca - Đội ca). Lắng nghe BGH nhà trường phát biểu chào mừng năm học mới.",
        studentActivity: "Đứng nghiêm trang hướng về Quốc kỳ, hát vang Quốc ca và Đội ca với tinh thần tự hào dân tộc. Chú ý lắng nghe thông điệp chào mừng năm học mới."
      },
      {
        name: "2. Hoạt động trải nghiệm theo chủ đề (Khám phá & Giao lưu - 15 phút)",
        teacherActivity: "Tổng phụ trách và GVCN điều hành chương trình giao lưu 'Chào năm học mới': Các tiết mục văn nghệ chào mừng của đội văn nghệ măng non; đại diện học sinh khối 5 phát biểu quyết tâm năm học cuối cấp.",
        studentActivity: "Cổ vũ nồng nhiệt các tiết mục văn nghệ, chăm chú lắng nghe lời hứa quyết tâm và vỗ tay hưởng ứng phong trào thi đua."
      },
      {
        name: "3. Luyện tập / Thực hành nhiệm vụ tuần 1 (7 phút)",
        teacherActivity: "GVCN phổ biến nhanh các yêu cầu nền nếp tuần 1: Ổn định sĩ số, nề nếp ra vào lớp, giữ gìn vệ sinh khuôn viên trường lớp, an toàn giao thông trước cổng trường và phong trào 'Đôi bạn cùng tiến'.",
        studentActivity: "Lắng nghe, tiếp thu chỉ tiêu thi đua của tổ/lớp và cam kết thực hiện nghiêm túc."
      },
      {
        name: "4. Vận dụng / Dặn dò (3 phút)",
        teacherActivity: "Nhận xét ý thức chào cờ của học sinh. Hướng dẫn các em thu dọn ghế (nếu có) và xếp hàng di chuyển trật tự về phòng học.",
        studentActivity: "Cầm ghế ngay ngắn, xếp hàng di chuyển trật tự theo hướng dẫn của giáo viên chủ nhiệm."
      }
    ],
    postLessonAdjustment: "..........................................................................................................................................................................."
  },

  // LỚP 5 - TUẦN 3 (Theo tài liệu mẫu Lớp 5A Tân Thạnh của user)
  "5-w3-hdtn-1": {
    id: "5-w3-hdtn-1",
    grade: 5,
    subject: "Hoạt động trải nghiệm",
    periodNumber: 1,
    curriculumPeriod: 7,
    lessonTitle: "Sinh hoạt dưới cờ: HOẠT ĐỘNG VUI TRUNG THU",
    week: 3,
    dayOfWeek: "Thứ Hai",
    dateStr: "21/09/2026",
    teacherName: "Nguyễn Hoàng Tuấn",
    className: "5A",
    schoolName: "Trường Tiểu học Tân Thạnh",
    departmentName: "UBND Xã Tân Thạnh",
    objectives: {
      specificCompetencies: [
        "Học sinh tích cực tham gia các hoạt động biểu diễn, trải nghiệm không khí ngày Tết Trung Thu truyền thống, thể hiện tinh thần tập thể, vui vẻ và tự tin."
      ],
      generalCompetencies: [
        "Năng lực giao tiếp và hợp tác thông qua việc phối hợp tổ chức lễ hội và trang trí mâm cỗ.",
        "Năng lực tự chủ và tự học khi chuẩn bị sản phẩm lồng đèn, tiết mục."
      ],
      qualities: [
        "Nhân ái, trách nhiệm, tôn trọng các nét đẹp văn hóa truyền thống của quê hương."
      ],
      integrations: {
        ai: "1.D1.1 - Nhận biết máy thông minh/AI có thể hỗ trợ tạo hình ảnh, nhạc nền và gợi ý kịch bản lễ hội.",
        digitalCompetence: "2.3.CB1a - Giao tiếp, chia sẻ thông điệp vui tươi, văn minh trong môi trường số.",
        humanRights: "Quyền trẻ em được vui chơi, giải trí và tham gia các hoạt động văn hóa, nghệ thuật.",
        nutrition: "GDDD: Nhận biết giá trị dinh dưỡng của mâm ngũ quả, bánh trung thu an toàn vệ sinh.",
        stem: "STEM: Sáng tạo lồng đèn từ vật liệu tái chế."
      }
    },
    materials: {
      teacher: ["Tivi, loa máy, lồng đèn mẫu, mâm cỗ Trung Thu mô hình."],
      student: ["Lồng đèn tự làm, vật liệu trang trí mâm ngũ quả của tổ."]
    },
    activities: [
      {
        name: "1. Khởi động",
        teacherActivity: "Tổ chức cho toàn trường làm lễ Chào cờ nghiêm trang. Sau đó điều hành văn nghệ khởi động bài hát 'Chiếc đèn ông sao'.",
        studentActivity: "Học sinh thực hiện nghi thức chào cờ nghiêm túc. Đồng thanh hát vang và vỗ tay theo nhịp bài hát."
      },
      {
        name: "2. Khám phá",
        teacherActivity: "Tổng phụ trách Đội giới thiệu ý nghĩa lịch sử ngày Tết Trung Thu, giới thiệu mâm cỗ và tục rước đèn phá cỗ.",
        studentActivity: "Lắng nghe chăm chú, tham gia trả lời câu hỏi đố vui về chú Cuội, chị Hằng."
      },
      {
        name: "3. Luyện tập / Thực hành",
        teacherActivity: "Tổ chức cuộc thi trưng bày lồng đèn giữa các lớp. GVCN hướng dẫn các tổ học sinh lớp 5A tự sắp xếp sản phẩm của mình lên bàn trưng bày.",
        studentActivity: "Các tổ phân công nhau đặt lồng đèn tự làm lên bàn, trang trí mâm ngũ quả nhỏ của tổ."
      },
      {
        name: "4. Vận dụng",
        teacherActivity: "Nhận xét, tuyên dương các tổ hoạt động xuất sắc. Dặn dò HS mang lồng đèn về rước đèn cùng người thân.",
        studentActivity: "Chia sẻ cảm nghĩ về ngày hội. Ghi nhớ mang lồng đèn về nhà đón Trung thu an toàn."
      }
    ],
    postLessonAdjustment: "..........................................................................................................................................................................."
  },
  "5-w3-tv-1": {
    id: "5-w3-tv-1",
    grade: 5,
    subject: "Tiếng Việt",
    subSubject: "Đọc",
    periodNumber: 2,
    curriculumPeriod: 15,
    lessonTitle: "Tiết 15: TIẾNG HẠT NẢY MẦM",
    week: 3,
    dayOfWeek: "Thứ Hai",
    dateStr: "21/09/2026",
    teacherName: "Nguyễn Hoàng Tuấn",
    className: "5A",
    schoolName: "Trường Tiểu học Tân Thạnh",
    objectives: {
      specificCompetencies: [
        "Đọc đúng, trôi chảy và bước đầu biết đọc diễn cảm bài thơ 'Tiếng hạt nảy mầm'. Hiểu nội dung, thông điệp ý nghĩa: Lắng nghe và thấu cảm với những điều kỳ diệu xung quanh và thế giới tinh tế của trẻ em."
      ],
      generalCompetencies: [
        "Năng lực tự chủ và tự học thông qua luyện đọc cá nhân.",
        "Năng lực giải quyết vấn đề qua trả lời câu hỏi đọc hiểu."
      ],
      qualities: [
        "Nhân ái, biết trân trọng cuộc sống và thế giới thiên nhiên."
      ],
      integrations: {
        ai: "1.A1.1 - Nhận biết con người có cảm xúc thật trước vẻ đẹp thiên nhiên, AI chỉ mô phỏng theo dữ liệu được nạp.",
        digitalCompetence: "1.1.CB1a - Biết tìm kiếm hình ảnh hạt nảy mầm từ nguồn học liệu số an toàn do GV cung cấp.",
        environment: "Bảo vệ môi trường: Yêu quý cây xanh, chăm sóc mầm cây non quanh trường lớp."
      }
    },
    materials: {
      teacher: ["Sách giáo khoa, máy chiếu trình chiếu bài thơ, tranh ảnh minh họa hạt nảy mầm."],
      student: ["Sách giáo khoa Tiếng Việt 5, vở ghi bài."]
    },
    activities: [
      {
        name: "1. Khởi động",
        teacherActivity: "Cho học sinh quan sát hình ảnh một mầm cây đang nhú lên từ lòng đất. Hỏi: 'Em nghĩ hạt giống có phát ra tiếng động khi nảy mầm không?' Dẫn dắt vào bài mới.",
        studentActivity: "Quan sát tranh, suy nghĩ và đưa ra ý kiến cá nhân (Có/Không/Tiếng cựa mình nhẹ nhàng)."
      },
      {
        name: "2. Khám phá",
        teacherActivity: "Đọc mẫu bài thơ với giọng nhẹ nhàng, truyền cảm. Hướng dẫn ngắt nhịp thơ thích hợp. Chia bài thơ làm các khổ thơ để luyện đọc nối tiếp.",
        studentActivity: "Theo dõi SGK, lắng nghe cách đọc mẫu. 4 học sinh nối tiếp nhau đọc 4 khổ thơ trước lớp. Luyện đọc từ khó: 'nảy mầm', 'xôn xao', 'lặng thầm'."
      },
      {
        name: "3. Luyện tập",
        teacherActivity: "Yêu cầu HS đọc thầm, thảo luận nhóm trả lời các câu hỏi đọc hiểu trong SGK: Hạt mầm cần những gì để nảy mầm? Những âm thanh nào được miêu tả?",
        studentActivity: "Thảo luận nhóm đôi, trả lời câu hỏi: Hạt mầm cần nước, đất ấm và ánh sáng. Tiếng hạt nảy mầm là âm thanh của sự sống sinh sôi."
      },
      {
        name: "4. Vận dụng",
        teacherActivity: "Hướng dẫn học sinh chọn khổ thơ yêu thích để học thuộc lòng. Nhận xét tiết học.",
        studentActivity: "Luyện đọc diễn cảm khổ thơ yêu thích và ghi nhớ việc quan sát cây cối quanh nhà."
      }
    ],
    postLessonAdjustment: "..........................................................................................................................................................................."
  },
  "5-w3-tv-2": {
    id: "5-w3-tv-2",
    grade: 5,
    subject: "Tiếng Việt",
    subSubject: "Luyện từ và câu",
    periodNumber: 3,
    curriculumPeriod: 16,
    lessonTitle: "Tiết 16: LUYỆN TẬP VỀ ĐẠI TỪ",
    week: 3,
    dayOfWeek: "Thứ Hai",
    dateStr: "21/09/2026",
    teacherName: "Nguyễn Hoàng Tuấn",
    className: "5A",
    schoolName: "Trường Tiểu học Tân Thạnh",
    objectives: {
      specificCompetencies: [
        "Học sinh củng cố kiến thức về đại từ xưng hô, đại từ chỉ định; biết cách tìm và sử dụng đại từ đúng ngữ cảnh trong văn bản đọc viết."
      ],
      generalCompetencies: [
        "Năng lực giao tiếp ngôn ngữ mạch lạc.",
        "Năng lực tự học và giải quyết bài tập cá nhân."
      ],
      qualities: [
        "Chăm chỉ rèn luyện từ ngữ tiếng Việt; trung thực trong làm bài tập."
      ],
      integrations: {
        ai: "2.A1.1 - Hiểu rằng AI có thể gợi ý đại từ xưng hô phù hợp ngữ cảnh nhưng người học cần kiểm tra và xưng hô lễ phép.",
        digitalCompetence: "5.2.CB1a - Sử dụng bảng phân loại đại từ trên slide/bảng tương tác để kiểm tra kết quả."
      }
    },
    materials: {
      teacher: ["Phiếu bài tập nhóm, bảng phụ ghi các đoạn văn mẫu."],
      student: ["Vở bài tập Tiếng Việt 5, bút."]
    },
    activities: [
      {
        name: "1. Khởi động",
        teacherActivity: "Tổ chức trò chơi 'Hộp quà bí mật' chứa các câu hỏi ngắn: 'Thế nào là đại từ?', 'Cho ví dụ về đại từ xưng hô'.",
        studentActivity: "Học sinh tham gia trả lời nhanh để mở quà, ôn lại kiến thức đại từ xưng hô (tôi, tớ, chúng ta)."
      },
      {
        name: "2. Khám phá",
        teacherActivity: "Đưa đoạn văn mẫu lên bảng phụ. Yêu cầu học sinh đọc và gạch chân các từ dùng để thay thế hoặc xưng hô.",
        studentActivity: "Đọc thầm đoạn văn, làm việc cá nhân gạch chân các từ: 'anh', 'tôi', 'họ', 'ấy'."
      },
      {
        name: "3. Luyện tập",
        teacherActivity: "Giao nhiệm vụ trong Phiếu bài tập: Phân biệt đại từ xưng hô và đại từ chỉ định trong các câu cụ thể. Đặt 2 câu sử dụng đại từ.",
        studentActivity: "Hoàn thành phiếu bài tập cá nhân. Trao đổi chéo vở để kiểm tra và nhận xét bài của bạn."
      },
      {
        name: "4. Vận dụng",
        teacherActivity: "Nhận xét kết quả bài làm. Khắc sâu nguyên tắc xưng hô lễ phép của học sinh tiểu học.",
        studentActivity: "Lắng nghe, tự rút kinh nghiệm về cách xưng hô với người lớn, thầy cô."
      }
    ],
    postLessonAdjustment: "..........................................................................................................................................................................."
  },
  "5-w3-toan-1": {
    id: "5-w3-toan-1",
    grade: 5,
    subject: "Toán",
    periodNumber: 4,
    curriculumPeriod: 11,
    lessonTitle: "Bài 6: CỘNG, TRỪ HAI PHÂN SỐ KHÁC MẪU SỐ (TIẾT 1)",
    week: 3,
    dayOfWeek: "Thứ Hai",
    dateStr: "21/09/2026",
    teacherName: "Nguyễn Hoàng Tuấn",
    className: "5A",
    schoolName: "Trường Tiểu học Tân Thạnh",
    objectives: {
      specificCompetencies: [
        "Học sinh hiểu và thực hiện được quy trình cộng, trừ hai phân số khác mẫu số bằng cách quy đồng mẫu số rồi thực hiện phép tính."
      ],
      generalCompetencies: [
        "Phát triển năng lực tư duy toán học và năng lực giải quyết vấn đề toán học thực tiễn."
      ],
      qualities: [
        "Cẩn thận, chính xác trong tính toán, chăm chỉ làm bài tập toán học."
      ],
      integrations: {
        ai: "4.C4.1 - Hiểu AI áp dụng thuật toán logic quy đồng mẫu số để tính toán nhanh, con người cần kiểm tra bước trung gian.",
        digitalCompetence: "5.2.CB1a - Sử dụng công cụ tương tác kéo thả phân số trên màn hình để kiểm tra đáp án."
      }
    },
    materials: {
      teacher: ["Bộ đồ dùng dạy học Toán 5, phiếu học tập nhóm."],
      student: ["Bộ thực hành Toán 5, bảng con, nháp."]
    },
    activities: [
      {
        name: "1. Khởi động",
        teacherActivity: "Yêu cầu 2 học sinh lên bảng làm phép tính: 3/7 + 2/7 và 5/9 - 1/9.",
        studentActivity: "Thực hiện phép tính trên bảng lớp, cả lớp làm nháp. Nêu quy tắc: Cộng/trừ tử số và giữ nguyên mẫu số."
      },
      {
        name: "2. Khám phá",
        teacherActivity: "Nêu bài toán thực tế: 'Bạn Nam uống 1/2 cốc nước, bạn Mai uống 1/3 cốc nước. Hỏi cả hai uống bao nhiêu phần cốc nước?' Đặt phép tính: 1/2 + 1/3. Hỏi cách làm?",
        studentActivity: "Phát hiện mẫu số khác nhau nên không cộng trực tiếp được. Đề xuất quy đồng mẫu số hai phân số về cùng mẫu số rồi cộng."
      },
      {
        name: "3. Luyện tập",
        teacherActivity: "Hướng dẫn HS làm Bài 1, Bài 2 trong SGK. Quan sát, uốn nắn những em tính toán chậm.",
        studentActivity: "Làm bài cá nhân vào vở. Lên bảng trình bày các phép tính quy đồng và cộng: 1/2 + 1/3 = 3/6 + 2/6 = 5/6."
      },
      {
        name: "4. Vận dụng",
        teacherActivity: "Giao bài toán đố: Một mảnh vườn trồng hoa hết 1/3 diện tích, trồng rau hết 2/5 diện tích. Hỏi tổng diện tích trồng hoa và rau chiếm bao nhiêu phần?",
        studentActivity: "Tính nhanh: 1/3 + 2/5 = 5/15 + 6/15 = 11/15 diện tích mảnh vườn."
      }
    ],
    postLessonAdjustment: "..........................................................................................................................................................................."
  },
  "5-w3-kh-1": {
    id: "5-w3-kh-1",
    grade: 5,
    subject: "Khoa học",
    periodNumber: 1,
    curriculumPeriod: 5,
    lessonTitle: "Bài 2: Ô NHIỄM, XÓI MÒN ĐẤT VÀ BẢO VỆ MÔI TRƯỜNG ĐẤT (TIẾT 3)",
    week: 3,
    dayOfWeek: "Thứ Hai",
    dateStr: "21/09/2026",
    teacherName: "Nguyễn Hoàng Tuấn",
    className: "5A",
    schoolName: "Trường Tiểu học Tân Thạnh",
    objectives: {
      specificCompetencies: [
        "Học sinh trình bày được các biện pháp bảo vệ môi trường đất, chống xói mòn và ô nhiễm đất trong nông nghiệp và đời sống sinh hoạt."
      ],
      generalCompetencies: [
        "Năng lực giải quyết vấn đề qua đề xuất các giải pháp bảo vệ đất đai địa phương."
      ],
      qualities: [
        "Trách nhiệm bảo vệ môi trường xung quanh, có ý thức tiết kiệm tài nguyên."
      ],
      integrations: {
        environment: "Bảo vệ môi trường: Trồng rừng đầu nguồn, làm ruộng bậc thang, hạn chế thuốc trừ sâu.",
        nutrition: "GDDD: Đất sạch cung cấp nông sản sạch, giàu dinh dưỡng cho bữa ăn gia đình.",
        ai: "4.A1.1 - Nhận biết AI hỗ trợ phân tích chất lượng đất qua ảnh vệ tinh để cảnh báo xói mòn."
      }
    },
    materials: {
      teacher: ["Hình ảnh xói mòn đất, ruộng bậc thang, video ngắn về xói mòn đất."],
      student: ["Giấy A3, bút dạ màu làm việc nhóm."]
    },
    activities: [
      {
        name: "1. Khởi động",
        teacherActivity: "Hỏi: 'Những hoạt động nào của con người trực tiếp làm đất bị ô nhiễm?'",
        studentActivity: "Trả lời: Sử dụng quá nhiều phân bón hóa học, phun thuốc trừ sâu bừa bãi, vứt rác thải nhựa."
      },
      {
        name: "2. Khám phá",
        teacherActivity: "Chiếu hình ảnh ruộng bậc thang, trồng cây gây rừng, bón phân hữu cơ. Đặt câu hỏi thảo luận: 'Tại sao trồng rừng lại chống được xói mòn đất?'",
        studentActivity: "Thảo luận nhóm 4. Trả lời: Rễ cây giữ đất bám chặt, lá cây cản bớt lực nước mưa rơi trực tiếp làm trôi đất mặt."
      },
      {
        name: "3. Luyện tập",
        teacherActivity: "Yêu cầu học sinh làm bảng hệ thống phân loại biện pháp: Biện pháp chống xói mòn và Biện pháp chống ô nhiễm đất.",
        studentActivity: "Làm bài nhóm vào giấy A3: Chống xói mòn (trồng rừng, làm ruộng bậc thang); Chống ô nhiễm (sử dụng phân hữu cơ bón đất, phân loại rác thải tại nguồn)."
      },
      {
        name: "4. Vận dụng",
        teacherActivity: "Yêu cầu HS viết 1 thông điệp ngắn kêu gọi gia đình không vứt túi ni-lông ra vườn đất nhà mình.",
        studentActivity: "Viết thông điệp: 'Hãy bón phân xanh, giữ sạch đất lành!' và dán góc học tập."
      }
    ],
    postLessonAdjustment: "..........................................................................................................................................................................."
  },
  "5-w3-cn-1": {
    id: "5-w3-cn-1",
    grade: 5,
    subject: "Công nghệ",
    periodNumber: 2,
    curriculumPeriod: 3,
    lessonTitle: "Bài 2: NHÀ SÁNG CHẾ (TIẾT 1)",
    week: 3,
    dayOfWeek: "Thứ Hai",
    dateStr: "21/09/2026",
    teacherName: "Nguyễn Hoàng Tuấn",
    className: "5A",
    schoolName: "Trường Tiểu học Tân Thạnh",
    objectives: {
      specificCompetencies: [
        "Học sinh bước đầu hiểu khái niệm nhà sáng chế, nhận biết được vai trò và một số đóng góp to lớn của các nhà sáng chế nổi tiếng trong lịch sử nhân loại."
      ],
      generalCompetencies: [
        "Năng lực giải quyết vấn đề và sáng tạo; năng lực tự tìm hiểu thông tin qua bài đọc."
      ],
      qualities: [
        "Chăm chỉ, đam mê khám phá khoa học kỹ thuật."
      ],
      integrations: {
        ai: "4.D1.1 - Từ vấn đề thực tế nảy sinh ý tưởng phát minh; AI hỗ trợ thử nghiệm và mô phỏng sáng chế.",
        digitalCompetence: "1.1.CB1a - Tra cứu tiểu sử nhà sáng chế Thomas Edison trên thư viện số."
      }
    },
    materials: {
      teacher: ["Hình ảnh Thomas Edison, hình ảnh chiếc bóng đèn sợi đốt đầu tiên."],
      student: ["Sách giáo khoa Công nghệ 5."]
    },
    activities: [
      {
        name: "1. Khởi động",
        teacherActivity: "Hỏi: 'Khi tối trời, chúng ta bật đèn điện lên. Ai là người đã nghĩ ra chiếc bóng đèn điện đầu tiên?' Dẫn dắt vào bài mới.",
        studentActivity: "Trả lời: Thomas Edison (Ê-đi-xơn)."
      },
      {
        name: "2. Khám phá",
        teacherActivity: "Tổ chức đọc câu chuyện về Thomas Edison trong SGK Công nghệ 5. Hướng dẫn thảo luận nhóm về đức tính kiên trì của ông.",
        studentActivity: "Đọc câu chuyện nối tiếp. Thảo luận: Thomas Edison đã thất bại hàng nghìn lần trước khi tìm ra sợi dây tóc bóng đèn hoàn hảo."
      },
      {
        name: "3. Luyện tập",
        teacherActivity: "Hỏi: 'Theo em, một nhà sáng chế cần có những đức tính gì?' Trình bày bảng phụ các đáp án lựa chọn.",
        studentActivity: "Lựa chọn và ghi vào vở: Kiên trì, say mê quan sát, ham học hỏi, không sợ thất bại."
      },
      {
        name: "4. Vận dụng",
        teacherActivity: "Hỏi: 'Nếu được sáng chế một đồ vật giúp việc học của em dễ dàng hơn, em sẽ sáng chế thứ gì?'",
        studentActivity: "Phát biểu tự do: Hộp bút tự động dọn dẹp, bút thông minh viết không mỏi tay, thước kẻ phát sáng."
      }
    ],
    postLessonAdjustment: "..........................................................................................................................................................................."
  }
};

export const CURRICULUM_GRADES: Grade[] = [1, 2, 3, 4, 5];

/**
 * Generate full week Lesson Plans (KHBD) for all items in the schedule
 * When schoolInfo.teacherType === "homeroom", specialist subjects (taught by specialist teachers)
 * are excluded by default so that homeroom teachers only generate KHBD for their directly taught subjects.
 */
/**
 * Mục tiêu riêng cho học sinh khuyết tật trong yêu cầu cần đạt theo từng môn học
 * Đặc biệt dành cho Cô Giang lớp 5 hoặc các lớp có học sinh khuyết tật
 */
export function getDisabledStudentObjective(subject: string, lessonTitle?: string, isEnglish?: boolean): string {
  if (isEnglish) {
    return "Students with disabilities are encouraged to listen, repeat simple target vocabulary words, and participate in classroom games according to their individual abilities with support from teacher and peers.";
  }
  const s = (subject + " " + (lessonTitle || "")).toLowerCase();
  if (s.includes("toán") || s.includes("tính") || s.includes("số")) {
    return "Học sinh khuyết tật nhận biết được các chữ số, thực hiện các phép tính đơn giản và tham gia bài tập cơ bản dưới sự hướng dẫn của giáo viên và sự giúp đỡ của bạn cùng bàn.";
  }
  if (s.includes("tiếng việt") || s.includes("đọc") || s.includes("viết") || s.includes("tctv")) {
    return "Học sinh khuyết tật đọc được các từ ngữ, câu văn ngắn; tích cực lắng nghe và trả lời câu hỏi đơn giản dưới sự hướng dẫn, giúp đỡ của giáo viên và các bạn.";
  }
  if (s.includes("khoa học") || s.includes("tự nhiên") || s.includes("tnxh")) {
    return "Học sinh khuyết tật quan sát tranh ảnh, nhận biết được các sự vật, hiện tượng quen thuộc trong bài học theo khả năng của bản thân.";
  }
  if (s.includes("lịch sử") || s.includes("địa lí") || s.includes("ls-đl")) {
    return "Học sinh khuyết tật lắng nghe, làm quen với câu chuyện lịch sử/địa danh bài học dưới sự khích lệ và giúp đỡ của giáo viên.";
  }
  if (s.includes("đạo đức")) {
    return "Học sinh khuyết tật nhận biết được hành vi đúng, biết chào hỏi, lễ phép và hòa đồng cùng các bạn trong lớp.";
  }
  if (s.includes("hoạt động trải nghiệm") || s.includes("hđtn")) {
    return "Học sinh khuyết tật tham gia các hoạt động tập thể cùng bạn bè một cách tự tin, hòa nhập vui tươi với không khí chung của lớp.";
  }
  if (s.includes("công nghệ") || s.includes("tin học")) {
    return "Học sinh khuyết tật làm quen với đồ dùng/thiết bị học tập, thực hiện thao tác đơn giản theo khả năng dưới sự trợ giúp của giáo viên và bạn bè.";
  }
  if (s.includes("âm nhạc") || s.includes("an")) {
    return "Học sinh khuyết tật tham gia hát theo khả năng và sở thích dưới sự khích lệ của giáo viên.";
  }
  if (s.includes("mĩ thuật") || s.includes("mt")) {
    return "Học sinh khuyết tật tham gia vẽ, tô màu theo khả năng và sở thích dưới sự khích lệ của giáo viên.";
  }
  return "Học sinh khuyết tật được tham gia các hoạt động học tập phù hợp với khả năng; hoàn thành các yêu cầu cơ bản dưới sự hướng dẫn, giúp đỡ của giáo viên và các bạn trong nhóm.";
}

/**
 * Generate full week lesson plans (Kế hoạch bài dạy - KHBD) based on the teacher's schedule.
 * - KHBD Tiếng Anh Cô Quyên: soạn toàn bộ 100% bằng Tiếng Anh
 * - Tất cả các lớp các môn còn lại: soạn 100% Tiếng Việt
 * - Cô Giang lớp 5 có học sinh khuyết tật: tự động tích hợp mục tiêu riêng cho học sinh khuyết tật trong Yêu cầu cần đạt
 */
export function generateFullWeekLessonPlans(
  schoolInfo: any,
  scheduleItems: ScheduleItem[],
  options?: { includeSpecialistInHomeroom?: boolean }
): LessonPlan[] {
  const plans: LessonPlan[] = [];
  const isHomeroom = schoolInfo.teacherType === "homeroom";
  const includeSpecialist = options?.includeSpecialistInHomeroom ?? false;

  // For homeroom teachers, filter out specialist subjects taught by specialist teachers.
  // Also filter out administrative meetings (HỌP) so KHBD only contains actual teaching lesson plans.
  const rawTargetItems = isHomeroom && !includeSpecialist
    ? scheduleItems.filter((it) => {
        if (!it.note) return true;
        const n = it.note;
        return !n.includes("GV Chuyên") &&
               !n.includes("GV Bộ môn") &&
               !n.includes("GV Dạy tiết") &&
               !n.includes("PHT:") &&
               !n.includes("PCGD:") &&
               !n.includes("Thầy Thịnh") &&
               !n.includes("Cô Nương") &&
               !n.includes("Cô D.Phương") &&
               !n.includes("Cô Thy") &&
               !n.includes("Cô Nguyễn Thị Thanh Tâm") &&
               !n.includes("Thầy Phước") &&
               !n.includes("Cô Nhàn") &&
               !n.includes("Phan Ngọc Quan") &&
               !n.includes("Tú Trinh") &&
               !n.includes("Lê Thị Hồng Thủy");
      })
    : scheduleItems;

  const targetItems = rawTargetItems.filter(
    (it) => it.subject !== "HỌP" && !it.subject.toLowerCase().includes("họp") && it.lessonTitle !== "HỌP"
  );

  // Sort items strictly in chronological order: Day -> Session (Sáng -> Chiều) -> Timetable Period
  const dayOrder: Record<string, number> = {
    "Thứ Hai": 1,
    "Thứ Ba": 2,
    "Thứ Tư": 3,
    "Thứ Năm": 4,
    "Thứ Sáu": 5,
    "Thứ Bảy": 6,
    "Chủ Nhật": 7,
  };

  const sortedItems = [...targetItems].sort((a, b) => {
    const dDiff = (dayOrder[a.day] || 99) - (dayOrder[b.day] || 99);
    if (dDiff !== 0) return dDiff;
    const sDiff = (a.session === "Sáng" ? 1 : 2) - (b.session === "Sáng" ? 1 : 2);
    if (sDiff !== 0) return sDiff;
    return a.period - b.period;
  });

  const dayCounters: Record<string, number> = {};
  const classEnglishCounters: Record<string, number> = {};

  sortedItems.forEach((item, idx) => {
    const day = item.day;
    dayCounters[day] = (dayCounters[day] || 0) + 1;
    const currentPeriodInDay = dayCounters[day];

    const itemGrade = (parseInt(item.className.charAt(0)) as Grade) || schoolInfo.grade || 5;

    const subLowerCheck = item.subject.toLowerCase();
    const isSpecialSubject = subLowerCheck.includes("tiếng anh") || subLowerCheck.includes("anh văn") || subLowerCheck.includes("ta") || subLowerCheck.includes("âm nhạc") || subLowerCheck.includes("an");

    // Check if we have an existing sample plan STRICTLY for this grade AND week AND matching subject & curriculum period
    const normSub = item.subject.toLowerCase();
    const sampleKey = (!isSpecialSubject && Number(itemGrade) !== 1) ? Object.keys(SAMPLE_LESSON_PLANS).find(k => {
      const sp = SAMPLE_LESSON_PLANS[k];
      if (sp.grade !== itemGrade) return false;
      if (sp.week !== schoolInfo.week) return false;
      const spSub = sp.subject.toLowerCase();
      const subMatches = normSub.includes(spSub) || 
                         spSub.includes(normSub.replace(/\s*\d+$/, "")) ||
                         (normSub.includes("hđtn") && spSub.includes("trải nghiệm")) ||
                         (normSub.includes("trải nghiệm") && spSub.includes("hđtn"));
      if (!subMatches) return false;
      return (
        sp.curriculumPeriod === item.curriculumPeriod ||
        sp.lessonTitle.toLowerCase().trim() === item.lessonTitle.toLowerCase().trim()
      );
    }) : null;

    const hasDisStudent = Boolean(
      schoolInfo.hasDisabledStudent ||
      schoolInfo.teacherName?.includes("Giang") ||
      schoolInfo.className === "5" ||
      item.className === "5"
    );

    if (sampleKey && SAMPLE_LESSON_PLANS[sampleKey]) {
      const sp = SAMPLE_LESSON_PLANS[sampleKey];
      const disObj = hasDisStudent ? getDisabledStudentObjective(sp.subject, sp.lessonTitle, false) : undefined;
      plans.push({
        ...sp,
        id: `plan-${item.id}-${idx}`,
        grade: itemGrade,
        week: schoolInfo.week,
        dayOfWeek: item.day,
        dateStr: item.dateStr || schoolInfo.startDate,
        session: item.session,
        timetablePeriod: item.period,
        periodNumber: currentPeriodInDay,
        curriculumPeriod: item.curriculumPeriod || currentPeriodInDay,
        teacherName: schoolInfo.teacherName,
        className: item.className || schoolInfo.className,
        schoolName: schoolInfo.schoolName,
        departmentName: schoolInfo.departmentName,
        branchName: schoolInfo.branchName,
        objectives: {
          ...sp.objectives,
          disabledStudentObjective: disObj || sp.objectives.disabledStudentObjective,
        },
      });
      return;
    }

    // Dynamic tailored plan according to subject and grade
    const subLower = item.subject.toLowerCase();
    let specificCompetencies: string[] = [];
    let teacherMaterials: string[] = [];
    let studentMaterials: string[] = [];

    let act1Teacher = "";
    let act1Student = "";
    let act2Teacher = "";
    let act2Student = "";
    let act3Teacher = "";
    let act3Student = "";
    let act4Teacher = "";
    let act4Student = "";
    let musicDetail: any = null;
    let englishDetail: any = null;

    if (subLower.includes("tiếng anh") || subLower.includes("anh văn") || subLower === "ta" || subLower.startsWith("ta ") || subLower.includes("english")) {
      const clsKey = item.className || String(itemGrade);
      classEnglishCounters[clsKey] = (classEnglishCounters[clsKey] || 0) + 1;
      const periodInWeekForClass = classEnglishCounters[clsKey];
      englishDetail = getDetailedEnglishLesson(itemGrade, schoolInfo.week, item.lessonTitle, periodInWeekForClass);
      specificCompetencies = englishDetail.specificCompetencies;
      teacherMaterials = englishDetail.teacherMaterials;
      studentMaterials = englishDetail.studentMaterials;
      act1Teacher = englishDetail.activities[0].teacherActivity;
      act1Student = englishDetail.activities[0].studentActivity;
      act2Teacher = englishDetail.activities[1].teacherActivity;
      act2Student = englishDetail.activities[1].studentActivity;
      act3Teacher = englishDetail.activities[2].teacherActivity;
      act3Student = englishDetail.activities[2].studentActivity;
      act4Teacher = englishDetail.activities[3].teacherActivity;
      act4Student = englishDetail.activities[3].studentActivity;
    } else if (subLower.includes("âm nhạc") || subLower.includes("an")) {
      const isEnhance = subLower.includes("tăng cường") || subLower.includes("bồi dưỡng") || subLower.includes("tcan") || subLower.includes("bdan") || (item.session === "Chiều");
      musicDetail = getOfficialMusicLesson(itemGrade, schoolInfo.week, isEnhance, item.session === "Chiều" ? "Chiều" : "Sáng");
      
      specificCompetencies = musicDetail.specificCompetencies;
      teacherMaterials = musicDetail.teacherMaterials;
      studentMaterials = musicDetail.studentMaterials;
      act1Teacher = musicDetail.activities[0].teacherActivity;
      act1Student = musicDetail.activities[0].studentActivity;
      act2Teacher = musicDetail.activities[1].teacherActivity;
      act2Student = musicDetail.activities[1].studentActivity;
      act3Teacher = musicDetail.activities[2].teacherActivity;
      act3Student = musicDetail.activities[2].studentActivity;
      act4Teacher = musicDetail.activities[3].teacherActivity;
      act4Student = musicDetail.activities[3].studentActivity;
    } else {
      const detailedRes = getDetailedLessonActivities({
        grade: itemGrade,
        subject: item.subject,
        subSubject: item.subSubject,
        lessonTitle: item.lessonTitle,
        curriculumPeriod: item.curriculumPeriod || currentPeriodInDay,
        week: schoolInfo.week,
        session: item.session,
        integrationNotes: item.integrationNotes,
      });

      specificCompetencies = detailedRes.specificCompetencies;
      teacherMaterials = detailedRes.teacherMaterials;
      studentMaterials = detailedRes.studentMaterials;
      act1Teacher = detailedRes.activities[0].teacherActivity;
      act1Student = detailedRes.activities[0].studentActivity;
      act2Teacher = detailedRes.activities[1].teacherActivity;
      act2Student = detailedRes.activities[1].studentActivity;
      act3Teacher = detailedRes.activities[2].teacherActivity;
      act3Student = detailedRes.activities[2].studentActivity;
      act4Teacher = detailedRes.activities[3].teacherActivity;
      act4Student = detailedRes.activities[3].studentActivity;
    }

    // Dynamic CV 2345 plan
    const rawLessonTitle = musicDetail ? musicDetail.lessonTitle : (englishDetail ? englishDetail.lessonTitle : item.lessonTitle);
    const finalLessonTitle = cleanLessonTitle(rawLessonTitle);

    plans.push({
      id: `plan-${item.id}-${idx}`,
      grade: itemGrade,
      subject: item.subject,
      subSubject: item.subSubject,
      lessonTitle: finalLessonTitle,
      session: item.session,
      timetablePeriod: item.period,
      periodNumber: currentPeriodInDay,
      curriculumPeriod: item.curriculumPeriod || currentPeriodInDay,
      week: schoolInfo.week,
      dayOfWeek: item.day,
      dateStr: item.dateStr || schoolInfo.startDate,
      teacherName: schoolInfo.teacherName,
      className: item.className || schoolInfo.className,
      schoolName: schoolInfo.schoolName,
      departmentName: schoolInfo.departmentName,
      branchName: schoolInfo.branchName,
      songTitle: musicDetail ? musicDetail.songTitle : undefined,
      composer: musicDetail ? musicDetail.composer : undefined,
      songLyrics: musicDetail ? musicDetail.songLyrics : undefined,
      englishVocabulary: englishDetail ? englishDetail.vocabulary : undefined,
      sentencePatterns: englishDetail ? englishDetail.sentencePatterns : undefined,
      objectives: {
        specificCompetencies,
        generalCompetencies: englishDetail ? [
          "Autonomy and self-learning: Actively prepare textbooks, notebooks, and learning aids; independently complete assigned communicative tasks in English.",
          "Communication and collaboration: Work cooperatively in pairs and groups, express thoughts clearly in English, and listen respectfully to peers.",
          "Problem-solving and creativity: Apply learned vocabulary and sentence structures flexibly in communicative games and real-life daily conversations."
        ] : [
          "Năng lực tự chủ và tự học: Tự giác chuẩn bị đầy đủ sách vở, đồ dùng học tập, chủ động hoàn thành nhiệm vụ cá nhân.",
          "Năng lực giao tiếp và hợp tác: Tích cực thảo luận nhóm, biết lắng nghe, tôn trọng và chia sẻ ý kiến với bạn bè.",
          "Năng lực giải quyết vấn đề và sáng tạo: Biết vận dụng kiến thức đã học để xử lý tình huống linh hoạt."
        ],
        qualities: englishDetail ? [
          "Patriotism and kindness: Appreciate the English language, show respect and friendliness to teachers and classmates, and build a positive learning community.",
          "Diligence and honesty: Work hard in practicing pronunciation and spelling; show truthfulness in pair and self-assessment.",
          "Responsibility: Complete assigned duties in group tasks, take good care of learning aids and school property."
        ] : [
          "Yêu nước, nhân ái: Tự hào về văn hóa, con người Việt Nam, yêu thương và giúp đỡ mọi người xung quanh.",
          "Chăm chỉ, trung thực: Cần cù trong học tập, trung thực trong làm bài và sinh hoạt lớp.",
          "Trách nhiệm: Có ý thức bảo vệ của công, giữ gìn vệ sinh chung và bảo vệ môi trường sống."
        ],
        integrations: englishDetail ? {
          ai: "AI Competence: Voice-recognition pronunciation modeling and interactive language prompts.",
          digitalCompetence: "Digital Competence: Utilize digital flashcards, interactive multimedia slides, and authentic native audio tracks.",
          humanRights: "Human Rights Education: Foster respect, inclusion, gender equality, and respectful cultural exchange.",
          stem: "Play-based Learning & STEM: Reinforce vocabulary and communicative reflexes through energetic language games and role-play."
        } : {
          ai: item.integrationNotes?.includes("AI") 
            ? (item.integrationNotes.split("|").find(s => s.includes("AI"))?.trim() || "Tích hợp AI: Làm quen ứng dụng công nghệ trí tuệ nhân tạo hỗ trợ học tập.")
            : undefined,
          digitalCompetence: item.integrationNotes?.includes("NLS") 
            ? (item.integrationNotes.split("|").find(s => s.includes("NLS"))?.trim() || "Tích hợp Năng lực số (CV 3456/BGDĐT-GDTH): Khám phá và sử dụng công nghệ số an toàn.")
            : undefined,
          humanRights: item.integrationNotes?.includes("QCN") 
            ? (item.integrationNotes.split("|").find(s => s.includes("QCN"))?.trim() || "Giáo dục quyền trẻ em (QCN): Tôn trọng sự khác biệt, bình đẳng và an toàn thân thể.")
            : undefined,
          defense: (item.integrationNotes?.includes("GDQPAN") || item.integrationNotes?.includes("quốc phòng")) 
            ? (item.integrationNotes.split("|").find(s => s.includes("GDQPAN") || s.includes("quốc phòng"))?.trim() || "Lồng ghép GDQPAN (TT 08/2024): Tự hào truyền thống yêu nước, ý thức bảo vệ chủ quyền quê hương.")
            : undefined,
          nutrition: item.integrationNotes?.includes("GDDD") 
            ? (item.integrationNotes.split("|").find(s => s.includes("GDDD"))?.trim() || "Giáo dục Dinh dưỡng học đường (GDDD): Lựa chọn thực phẩm lành mạnh, giữ gìn sức khỏe.")
            : undefined,
          stem: item.integrationNotes?.includes("STEM") 
            ? (item.integrationNotes.split("|").find(s => s.includes("STEM"))?.trim() || "Giáo dục STEM / Học thông qua chơi: Vận dụng kiến thức liên môn giải quyết vấn đề thực tiễn.")
            : undefined,
        },
        disabledStudentObjective: hasDisStudent
          ? getDisabledStudentObjective(item.subject, finalLessonTitle, Boolean(englishDetail))
          : undefined,
      },
      materials: {
        teacher: teacherMaterials,
        student: studentMaterials
      },
      activities: englishDetail ? englishDetail.activities : [
        {
          name: "1. Hoạt động Khởi động",
          teacherActivity: act1Teacher,
          studentActivity: act1Student
        },
        {
          name: "2. Hoạt động Khám phá",
          teacherActivity: act2Teacher,
          studentActivity: act2Student
        },
        {
          name: "3. Hoạt động Luyện tập - Thực hành",
          teacherActivity: act3Teacher,
          studentActivity: act3Student
        },
        {
          name: "4. Hoạt động Vận dụng",
          teacherActivity: act4Teacher,
          studentActivity: act4Student
        }
      ],
      postLessonAdjustment: englishDetail
        ? "Teacher's reflection / Post-lesson notes: ................................................................................................................................................."
        : "..........................................................................................................................................................................."
    });
  });

  return plans;
}
