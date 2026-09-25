import { Grade, LessonActivity } from "../types";
import { getGrade1DetailedActivities } from "./grade1ActivitiesGenerator";
import { cleanLessonTitle } from "../utils/lessonTitleHelper";
import { getTrafficSafetyLesson } from "./trafficSafetyCurriculum";

export interface DetailedActivitiesResult {
  specificCompetencies: string[];
  teacherMaterials: string[];
  studentMaterials: string[];
  activities: LessonActivity[];
}

// Helper to extract clean keywords from lesson title
function cleanTitle(title: string): string {
  const cleaned = cleanLessonTitle(title);
  return cleaned
    .replace(/^tiết\s+\d+[:\s-]*/i, "")
    .replace(/^bài\s+\d+[:\s-]*/i, "")
    .replace(/\(tiết\s+\d+\)/gi, "")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Generates deeply detailed, pedagogically sound Teacher and Student activities
 * complying with CV 2345/BGDĐT-GDTH for any primary school subject and grade.
 * Aligned with standards from tailieugiaoduc.edu.vn with explicit SGK content,
 * teacher pedagogical dialogue, expected student responses, and differentiation.
 */
export function getDetailedLessonActivities(params: {
  grade: Grade;
  subject: string;
  subSubject?: string;
  lessonTitle: string;
  curriculumPeriod: number | string;
  week: number;
  session?: string;
  integrationNotes?: string;
}): DetailedActivitiesResult {
  const sanitizedLessonTitle = cleanLessonTitle(params.lessonTitle);
  const { grade, subject, subSubject = "", curriculumPeriod, week, session = "Sáng" } = params;
  const lessonTitle = sanitizedLessonTitle;

  // Cụ thể hóa chuyên sâu SGK Lớp 1 vào Hoạt động của học sinh (HĐHS) và GV
  if (Number(grade) === 1) {
    return getGrade1DetailedActivities({
      subject,
      subSubject,
      lessonTitle,
      curriculumPeriod,
      week,
      session,
      integrationNotes: params.integrationNotes,
    });
  }

  const subLower = subject.toLowerCase().trim();
  const subSubLower = subSubject.toLowerCase().trim();
  const titleCore = cleanTitle(lessonTitle);

  // =========================================================================
  // 1. MÔN TOÁN (MATHEMATICS) - Khối 1 đến Khối 5
  // =========================================================================
  if (subLower.includes("toán") || subLower === "t" || subSubLower.includes("toán")) {
    const isEnhance = subLower.includes("tăng cường") || subSubLower.includes("tăng cường") || subLower.includes("tct");
    
    let specificCompetencies: string[] = [];
    let teacherMaterials = [
      `Kế hoạch bài dạy, bài giảng điện tử tương tác (PPTX), bộ đồ dùng dạy học Toán lớp ${grade} (que tính, bảng gài, mô hình trực quan, thẻ số).`,
      "Phiếu học tập nhóm, thước kẻ, bảng phụ ghi sẵn đề bài tập và bảng số liệu."
    ];
    let studentMaterials = [
      `Sách giáo khoa Toán ${grade}, vở bài tập Toán, bộ đồ dùng học Toán học sinh, bảng con, phấn/bút dạ, nháp.`
    ];

    if (grade === 1) {
      specificCompetencies = [
        `Học sinh nhận biết, đọc, viết đúng các số, thực hiện thành thạo các phép tính hoặc nhận biết hình học trong bài "${lessonTitle}".`,
        "Rèn luyện kỹ năng quan sát, sử dụng que tính/khối lập phương để đếm và thao tác, phát triển tư duy số học ban đầu."
      ];
    } else if (grade === 2) {
      specificCompetencies = [
        `Học sinh hiểu và thực hiện đúng kỹ thuật tính trong bài "${lessonTitle}". Nắm vững bảng cộng, trừ, nhân, chia cơ bản.`,
        "Biết đặt tính thẳng cột, tính nhẩm nhanh và giải các bài toán thực tế đơn giản có một bước tính."
      ];
    } else if (grade === 3) {
      specificCompetencies = [
        `Học sinh nắm chắc quy tắc và thuật toán tính trong bài "${lessonTitle}". Thực hiện chính xác các phép tính số học và đo đại lượng.`,
        "Vận dụng giải các bài toán thực tế có hai bước tính, phát triển năng lực giải quyết vấn đề toán học."
      ];
    } else if (grade === 4) {
      specificCompetencies = [
        `Học sinh hiểu sâu bản chất số học, phân số, hình học trong bài "${lessonTitle}". Thực hiện thành thạo các phép tính nhiều chữ số hoặc phân số.`,
        "Biết tìm thành phần chưa biết, giải toán có lời văn dạng điển hình (tìm số trung bình cộng, tìm hai số khi biết tổng và hiệu...)."
      ];
    } else {
      // Grade 5
      specificCompetencies = [
        `Học sinh nắm vững cấu tạo, tính chất và quy tắc thực hiện phép tính trong bài "${lessonTitle}" (phân số, số thập phân, hình học đo lường hoặc chuyển động đều).`,
        "Rèn luyện tư duy logic, kỹ năng ước lượng, tính toán chính xác và giải quyết linh hoạt các bài toán gắn với đời sống thực tế."
      ];
    }

    const activities: LessonActivity[] = [
      {
        name: "1. Hoạt động Khởi động (Warm-up - 5 phút)",
        objective: "Kích hoạt kiến thức nền tảng, tạo không khí học tập hào hứng và kết nối vào bài mới.",
        teacherActivity: `• Tổ chức trò chơi toán học: "Truyền điện tính nhanh" hoặc "Hái hoa dân chủ".
- GV nêu câu hỏi/phép tính nhẩm liên quan đến bài trước (Ví dụ: Các phép tính bảng cộng trừ/nhân chia hoặc nhận diện số, đại lượng đã học).
- Quan sát, khích lệ học sinh tham gia tích cực, tuyên dương các em trả lời nhanh và chính xác.
• Kết nối vào bài mới:
- GV đặt câu đố/tình huống thực tế dẫn dắt: "Hôm nay chúng ta cùng khám phá một kiến thức rất thú vị trong bài: ${lessonTitle}."
- GV ghi tựa bài lên bảng, yêu cầu học sinh nhắc lại.`,
        studentActivity: `• Tham gia trò chơi khởi động hào hứng:
- Học sinh theo dõi hiệu lệnh của giáo viên, giơ tay xung phong nhận câu hỏi.
- Đứng tại chỗ trả lời nhanh, dõng dạc kết quả phép tính: ví dụ các phép tính nhẩm, nêu quy tắc đã học.
- Cả lớp vỗ tay tuyên dương bạn trả lời đúng.
• Tiếp nhận nhiệm vụ học tập:
- Lắng nghe lời dẫn dắt của giáo viên vào bài mới.
- 2-3 học sinh đọc to tên bài học: "${lessonTitle}".
- Cả lớp mở sách giáo khoa, ghi tựa bài vào vở cẩn thận.`
      },
      {
        name: "2. Hoạt động Khám phá (Hình thành kiến thức mới - 12 đến 15 phút)",
        objective: `Giúp học sinh hình thành kiến thức và quy tắc toán học cốt lõi của bài: ${titleCore}.`,
        teacherActivity: `• Bước 1: Tiếp cận tình huống thực tế
- GV chiếu hình ảnh tình huống trong SGK hoặc trình chiếu slide mô phỏng (ví dụ: hình ảnh bạn Rô-bốt, Mai, Nam đang giải quyết một vấn đề thực tế về ${titleCore}).
- Đặt câu hỏi đàm thoại: "Quan sát tranh, em thấy những gì? Bài toán cho biết gì và yêu cầu tìm gì?"
• Bước 2: Thao tác trên đồ dùng trực quan & Tìm tòi giải pháp
- Hướng dẫn học sinh sử dụng bộ đồ dùng học Toán (que tính, bảng gài, khối lập phương, tia số, mô hình phân số/số thập phân) để trực quan hóa dữ liệu.
- GV thao tác mẫu trên bảng lớp, kết hợp đặt câu hỏi gợi mở từng bước: "Để tìm được kết quả, chúng ta cần thực hiện phép tính gì? Ta làm như thế nào?"
- Hướng dẫn học sinh thảo luận cặp đôi hoặc nhóm 4 để tìm cách giải quyết.
• Bước 3: Rút ra quy tắc / Công thức trọng tâm
- Mời đại diện học sinh nêu cách làm và kết quả.
- GV chuẩn hóa kiến thức, ghi quy tắc/công thức chính thức lên bảng (ví dụ: cách đặt tính, thứ tự thực hiện phép tính, cách so sánh, công thức tính diện tích/chu vi).
- Yêu cầu học sinh đọc lại quy tắc nhiều lần để ghi nhớ sâu.`,
        studentActivity: `• Tiếp nhận và phân tích tình huống:
- Học sinh quan sát tranh minh họa trên màn chiếu hoặc SGK.
- Trả lời câu hỏi của giáo viên về các dữ kiện đã cho và điều cần tìm.
• Thao tác khám phá bài học:
- Lấy bộ đồ dùng toán cá nhân, thao tác đặt que tính / lập mô hình theo hướng dẫn.
- Thảo luận cặp đôi: Trao đổi với bạn cùng bàn về cách thực hiện, cùng nhẩm tính và thử các cách giải khác nhau.
• Tiếp thu và ghi nhớ kiến thức mới:
- Đại diện học sinh phát biểu cách giải trước lớp, tự tin trình bày từng bước thao tác.
- Lắng nghe giáo viên nhận xét, chuẩn hóa kiến thức.
- Nối tiếp đọc to quy tắc/công thức toán học trên bảng lớp.
- Ghi nhớ quy trình thực hiện và viết ví dụ mẫu vào vở.`
      },
      {
        name: "3. Hoạt động Luyện tập - Thực hành (12 đến 15 phút)",
        objective: "Củng cố kiến thức vừa học qua hệ thống bài tập phân hóa từ nhận biết đến vận dụng.",
        teacherActivity: `• Hướng dẫn giải quyết từng bài tập trong SGK:
- Bài 1 (Nhận biết / Tính trực tiếp / Đặt tính rồi tính):
  + Yêu cầu HS đọc đề bài, xác định yêu cầu (ví dụ: tính nhẩm, đặt tính thẳng cột, thứ tự tính).
  + Cho HS làm bảng con câu a, b; nhận xét và uốn nắn lỗi sai về vị trí các hàng/chữ số.
- Bài 2 (Kết nối / So sánh / Điền số thích hợp):
  + Hướng dẫn HS phân tích bài toán, nhắc nhở thứ tự thực hiện các phép tính trong biểu thức.
  + Tổ chức làm bài vào vở bài tập; gọi 2 HS lên bảng phụ thực hiện.
- Bài 3 (Vận dụng / Giải toán có lời văn):
  + Yêu cầu 1 HS đọc to đề bài toán.
  + Hỏi: "Bài toán cho biết gì? Bài toán hỏi gì? Muốn tìm được kết quả ta phải làm phép tính gì?".
  + Hướng dẫn HS tóm tắt bài toán bằng sơ đồ đoạn thẳng hoặc lời văn ngắn gọn.
  + Cho HS làm bài vào vở.
• Quan sát, theo dõi, hỗ trợ:
- GV đi quanh lớp bao quát, hướng dẫn kịp thời cho các học sinh còn lúng túng.
- Chấm chữa bài nhanh tại chỗ cho một số học sinh hoàn thành sớm, khen ngợi những bài làm đẹp, trình bày khoa học.`,
        studentActivity: `• Thực hành giải bài tập:
- Bài 1:
  + Đọc thầm đề bài, xác định đúng yêu cầu.
  + Lấy bảng con, tự đặt tính và tính cẩn thận, giơ bảng đồng loạt theo hiệu lệnh.
  + Quan sát bài của bạn, nhận xét cách đặt tính và kết quả.
- Bài 2:
  + Làm bài vào vở bài tập cá nhân.
  + 2 học sinh lên bảng lớp làm bài.
  + Cả lớp theo dõi, đối chiếu kết quả bài làm của mình với bài trên bảng.
- Bài 3 (Toán có lời văn):
  + 1 học sinh đọc to đề bài toán, cả lớp đọc thầm theo.
  + Trả lời câu hỏi phân tích của giáo viên: Nêu rõ câu lời giải, phép tính tương ứng và đơn vị đo.
  + Tự giải bài toán vào vở, ghi đầy đủ lời giải, phép tính và đáp số.
  + Đổi vở cho bạn cùng bàn để kiểm tra chéo, phát hiện và giúp bạn sửa lỗi sai (nếu có).`
      },
      {
        name: "4. Hoạt động Vận dụng - Mở rộng (3 đến 5 phút)",
        objective: "Vận dụng kiến thức bài học vào giải quyết tình huống thực tiễn đời sống hàng ngày.",
        teacherActivity: `• Tổ chức tình huống thực tiễn mở rộng:
- Đưa ra bài toán gắn với đời sống thực tế: "Mẹ đi chợ mua các món đồ...", "Tính chu vi khu vườn nhà em...", hoặc tình huống tính nhẩm tiền mua sách vở.
- Khuyến khích học sinh vận dụng ngay quy tắc bài học để tìm ra câu trả lời nhanh nhất.
• Củng cố, dặn dò:
- Tóm tắt lại nội dung trọng tâm của bài: Nhắc lại các quy tắc cốt lõi của ${titleCore}.
- Nhận xét tinh thần học tập của cả lớp, tuyên dương các cá nhân và nhóm học tập tích cực.
- Dặn dò học sinh về nhà chia sẻ bài học cùng bố mẹ, hoàn thành các bài tập còn lại và chuẩn bị bài cho tiết học sau.`,
        studentActivity: `• Vận dụng thực tế:
- Lắng nghe tình huống thực tế của giáo viên, tư duy nhanh và giơ tay phát biểu cách giải quyết.
- Trả lời rõ ràng: Nêu phép tính và ý nghĩa của kết quả trong thực tế.
• Tổng kết tiết học:
- 1-2 học sinh nhắc lại quy tắc/công thức toán học vừa học.
- Lắng nghe nhận xét, rút kinh nghiệm về các lỗi tính toán còn mắc phải.
- Ghi nhớ lời dặn dò của thầy cô, thu dọn sách vở và đồ dùng học tập gọn gàng ngăn nắp.`
      }
    ];

    return { specificCompetencies, teacherMaterials, studentMaterials, activities };
  }

  // =========================================================================
  // 2. MÔN TIẾNG VIỆT (VIETNAMESE) - Khối 1 đến Khối 5
  // =========================================================================
  if (subLower.includes("tiếng việt") || subLower === "tv" || subSubLower.includes("tiếng việt")) {
    const isReading = subSubLower.includes("đọc") || subSubLower.includes("tập đọc") || subSubLower.includes("âm vần") || subSubLower.includes("làm quen") || (!subSubLower && (titleCore.toLowerCase().includes("bài") || titleCore.toLowerCase().includes("đọc")));
    const isGrammar = subSubLower.includes("luyện từ và câu") || subSubLower.includes("ltvc") || titleCore.toLowerCase().includes("từ") || titleCore.toLowerCase().includes("câu");
    const isWriting = subSubLower.includes("viết") || subSubLower.includes("tập làm văn") || subSubLower.includes("tlv") || subSubLower.includes("chính tả") || titleCore.toLowerCase().includes("viết");
    const isSpeaking = subSubLower.includes("nói và nghe") || subSubLower.includes("kể chuyện") || titleCore.toLowerCase().includes("nói") || titleCore.toLowerCase().includes("kể");

    let specificCompetencies = [
      `Phát triển các kỹ năng đọc đúng, đọc hiểu, viết câu đúng ngữ pháp và diễn đạt lưu loát trong bài: "${lessonTitle}".`,
      `Mở rộng vốn từ ngữ phong phú, biết vận dụng vào giao tiếp hàng ngày; cảm nhận được vẻ đẹp của ngôn ngữ tiếng Việt.`
    ];
    let teacherMaterials = [
      `Kế hoạch bài dạy, bài giảng điện tử (PPTX), tranh ảnh/video minh họa bài đọc "${titleCore}".`,
      "Bảng phụ ghi sẵn đoạn văn/đoạn thơ cần luyện đọc diễn cảm, phiếu học tập nhóm."
    ];
    let studentMaterials = [
      `Sách giáo khoa Tiếng Việt ${grade}, vở bài tập Tiếng Việt, vở ghi bài, bút mực, thước kẻ.`
    ];

    if (isReading) {
      const activities: LessonActivity[] = [
        {
          name: "1. Hoạt động Khởi động (Warm-up - 5 phút)",
          objective: "Tạo tâm thế hứng thú, kết nối chủ điểm bài học và kích hoạt trí tò mò ngôn ngữ.",
          teacherActivity: `• Khởi động theo chủ điểm bài học:
- Cho học sinh hát bài hát hoặc xem bức tranh minh họa mở đầu chủ điểm trong SGK.
- Đặt câu hỏi giao lưu: "Quan sát bức tranh/nghe bài hát, em cảm nhận được điều gì? Hình ảnh nào gợi cho em nhiều suy nghĩ nhất?"
• Giới thiệu bài mới:
- Dẫn dắt vào bài đọc: "${lessonTitle}".
- GV ghi tựa bài lên bảng, giới thiệu sơ nét về tác giả (nếu có) và bối cảnh bài viết.`,
          studentActivity: `• Hào hứng khởi động:
- Cả lớp cùng hát vang hoặc quan sát tranh minh họa trên màn hình chiếu.
- 2-3 học sinh xung phong trả lời câu hỏi giao lưu, chia sẻ cảm nhận cá nhân trước lớp.
• Nhận nhiệm vụ bài học:
- Lắng nghe giáo viên giới thiệu bài mới.
- Nhắc lại tên bài học nối tiếp nhau và ghi tựa bài vào vở cẩn thận.`
        },
        {
          name: "2. Hoạt động Khám phá (Luyện đọc thành tiếng - 12 đến 15 phút)",
          objective: "Đọc đúng, trôi chảy toàn bài, ngắt nghỉ hơi đúng dấu câu và phát âm chuẩn các từ khó.",
          teacherActivity: `• Bước 1: Giáo viên đọc mẫu toàn bài
- Đọc mẫu toàn bài với giọng đọc truyền cảm, phù hợp với cảm xúc và nhịp điệu bài đọc (nhẹ nhàng, tha thiết hoặc vui tươi, hào hùng).
• Bước 2: Chia đoạn & Luyện đọc câu
- Hướng dẫn học sinh chia đoạn bài văn/bài thơ (thường từ 3 đến 4 đoạn).
- Cho học sinh đọc nối tiếp từng câu (lớp 1-2) hoặc từng đoạn (lớp 3-4-5).
• Bước 3: Luyện phát âm từ khó & Giải nghĩa từ mới
- Lắng nghe, phát hiện và ghi bảng các từ ngữ học sinh dễ phát âm sai (l/n, s/x, tr/ch, dấu thanh...).
- Hướng dẫn cách ngắt nhịp ở những câu văn dài hoặc dòng thơ đặc biệt.
- Giải nghĩa các từ khó trong mục chú giải SGK và từ ngữ theo ngữ cảnh bài học.`,
          studentActivity: `• Lắng nghe đọc mẫu:
- Mở SGK, tay chỉ mắt dõi theo giáo viên đọc mẫu, tai lắng nghe giọng đọc và cách ngắt nghỉ hơi.
• Luyện đọc nối tiếp:
- Đọc nối tiếp từng câu hoặc từng đoạn trước lớp.
- Luyện phát âm các từ khó theo hướng dẫn của giáo viên: phát âm lại nhiều lần từ cá nhân đến đồng thanh cả lớp.
- Chú ý cách ngắt nhịp ở những câu dài, câu cảm, câu hỏi.
• Tìm hiểu nghĩa của từ:
- 1 học sinh đọc to phần chú giải nghĩa các từ mới ở cuối bài đọc.
- Đặt câu ngắn với 1-2 từ ngữ mới để hiểu rõ hơn nghĩa của từ.`
        },
        {
          name: "3. Hoạt động Luyện tập (Tìm hiểu bài & Luyện đọc diễn cảm - 12 đến 15 phút)",
          objective: "Hiểu sâu nội dung, ý nghĩa bài đọc; bước đầu biết đọc diễn cảm thể hiện cảm xúc bài viết.",
          teacherActivity: `• Bước 1: Hướng dẫn tìm hiểu bài
- Lần lượt nêu các câu hỏi tìm hiểu bài trong SGK.
- Tổ chức cho học sinh thảo luận cặp đôi hoặc nhóm 4 để trả lời từng câu hỏi:
  + Câu hỏi 1 (Tái hiện chi tiết): Yêu cầu tìm các chi tiết, hình ảnh miêu tả trong bài.
  + Câu hỏi 2 (Suy luận / Phân tích): Tại sao nhân vật/sự việc lại diễn ra như vậy?
  + Câu hỏi 3 (Ý nghĩa / Thông điệp): Qua bài đọc, tác giả muốn gửi gắm đến chúng ta điều gì?
- GV chốt lại nội dung, ý nghĩa chính của bài đọc, ghi bảng nội dung bài.
• Bước 2: Hướng dẫn luyện đọc diễn cảm (hoặc đọc lại)
- Chọn 1 đoạn văn/khổ thơ tiêu biểu, chiếu lên màn hình hoặc bảng phụ.
- Đọc mẫu đoạn văn, hướng dẫn học sinh đánh dấu những từ cần nhấn giọng và chỗ ngắt nghỉ hơi.
- Tổ chức cho các tổ, nhóm thi đọc diễn cảm trước lớp.`,
          studentActivity: `• Thảo luận tìm hiểu bài đọc:
- Đọc thầm lại từng đoạn theo yêu cầu của giáo viên.
- Thảo luận cặp đôi hoặc nhóm 4: Cùng nhau trao đổi, tìm dẫn chứng trong văn bản để trả lời câu hỏi.
- Đại diện nhóm tự tin đứng lên phát biểu câu trả lời, các nhóm khác lắng nghe, nhận xét và bổ sung.
- 1-2 học sinh nhắc lại nội dung, ý nghĩa chính của bài đọc; cả lớp ghi nhớ.
• Luyện đọc diễn cảm:
- Quan sát đoạn văn mẫu trên bảng phụ, dùng bút chì đánh dấu chỗ ngắt nghỉ và từ ngữ nhấn giọng vào SGK.
- Luyện đọc diễn cảm trong nhóm đôi: đọc cho nhau nghe và góp ý cho bạn.
- Đại diện các tổ thi đọc diễn cảm trước lớp; cả lớp bình chọn bạn đọc hay và truyền cảm nhất.`
        },
        {
          name: "4. Hoạt động Vận dụng - Mở rộng (3 đến 5 phút)",
          objective: "Khắc sâu bài học đạo đức, bồi dưỡng tình cảm tốt đẹp và phát triển kỹ năng tự học.",
          teacherActivity: `• Liên hệ thực tiễn & Bồi dưỡng phẩm chất:
- Đặt câu hỏi mở: "Qua bài học hôm nay, em rút ra được bài học gì cho bản thân? Em sẽ làm gì để thực hiện những điều tốt đẹp ấy?"
- Gợi mở liên hệ đến tình cảm gia đình, tình bạn bè, tình yêu quê hương đất nước hoặc ý thức bảo vệ môi trường.
• Đánh giá, dặn dò:
- Nhận xét tiết học: Khen ngợi những học sinh đọc tiến bộ, phát biểu sôi nổi.
- Dặn dò học sinh về nhà tập đọc lại bài cho người thân nghe, ghi nhớ nội dung và chuẩn bị bài mới.`,
          studentActivity: `• Liên hệ bản thân:
- Suy nghĩ, mạnh dạn giơ tay phát biểu cảm nghĩ và bài học rút ra từ bài đọc.
- Bày tỏ những hành động cụ thể mình sẽ thực hiện (chăm ngoan, giúp đỡ bạn, yêu quý cây xanh, kính trọng người lớn).
• Ghi nhớ dặn dò:
- Lắng nghe nhận xét của giáo viên.
- Ghi nhớ nhiệm vụ về nhà đọc lại bài và kể lại nội dung cho người thân nghe.`
        }
      ];

      return { specificCompetencies, teacherMaterials, studentMaterials, activities };
    }

    if (isGrammar) {
      // Luyện từ và câu
      const activities: LessonActivity[] = [
        {
          name: "1. Hoạt động Khởi động (Warm-up - 5 phút)",
          objective: "Kích hoạt kiến thức từ ngữ, ngữ pháp đã học, tạo tâm thế học tập hứng khởi.",
          teacherActivity: `• Tổ chức trò chơi: "Tìm nhanh - Nối đúng" hoặc "Ô chữ kì diệu".
- Đưa ra câu hỏi ôn tập về các từ loại (danh từ, động từ, tính từ, đại từ...) hoặc kiểu câu đã học.
- Nhận xét, chốt đáp án và dẫn dắt vào bài mới: "${lessonTitle}".
- Ghi tựa bài lên bảng lớp.`,
          studentActivity: `• Tham gia trò chơi khởi động tích cực:
- Lắng nghe câu hỏi, suy nghĩ nhanh và giơ tay trả lời.
- Nêu ví dụ về từ ngữ hoặc đặt câu ngắn minh họa.
• Lắng nghe giới thiệu bài, đọc lại tựa bài và ghi vào vở.`
        },
        {
          name: "2. Hoạt động Khám phá (Hình thành kiến thức - 12 đến 15 phút)",
          objective: `Giúp học sinh nắm vững khái niệm, đặc điểm và quy tắc sử dụng trong bài: ${titleCore}.`,
          teacherActivity: `• Bước 1: Tiếp cận ngữ liệu mẫu
- Chiếu ngữ liệu mẫu trong SGK (đoạn văn, câu văn chứa từ ngữ/hiện tượng ngữ pháp cần tìm hiểu) lên màn hình chiếu.
- Yêu cầu 1-2 học sinh đọc to ngữ liệu trước lớp.
• Bước 2: Phân tích ngữ liệu & Thảo luận
- Đặt câu hỏi dẫn dắt: "Trong đoạn văn trên, những từ nào được in đậm? Chúng có tác dụng gì? Chúng biểu thị ý nghĩa gì?"
- Cho học sinh thảo luận cặp đôi để tìm ra điểm chung của các ngữ liệu.
• Bước 3: Rút ra Ghi nhớ trọng tâm
- Mời học sinh phát biểu nhận xét.
- GV chuẩn hóa, rút ra kết luận quy tắc ngữ pháp/từ ngữ và đưa phần Ghi nhớ lên bảng.
- Yêu cầu học sinh đọc lại phần Ghi nhớ nhiều lần và lấy ví dụ minh họa.`,
          studentActivity: `• Phân tích ngữ liệu:
- Đọc to ngữ liệu trong SGK, quan sát các từ ngữ được in đậm hoặc gạch chân.
- Thảo luận cùng bạn ngồi cạnh: Trao đổi ý nghĩa và vai trò của các từ ngữ trong câu.
• Hình thành kiến thức:
- Phát biểu ý kiến trước lớp, nêu nhận xét về tác dụng của hiện tượng ngữ pháp vừa tìm hiểu.
- Đọc to phần Ghi nhớ trên bảng lớp và trong SGK.
- Tự tìm thêm 1-2 ví dụ minh họa thực tế cho quy tắc vừa học.`
        },
        {
          name: "3. Hoạt động Luyện tập - Thực hành (12 đến 15 phút)",
          objective: "Áp dụng kiến thức vừa học để nhận biết, phân loại và đặt câu chuẩn xác qua các bài tập.",
          teacherActivity: `• Hướng dẫn giải quyết hệ thống bài tập:
- Bài tập 1 (Nhận biết / Phân loại):
  + Hướng dẫn HS đọc kĩ yêu cầu, xác định các từ ngữ cần tìm trong đoạn văn.
  + Tổ chức làm việc cá nhân vào vở, gọi HS lên bảng chữa bài.
- Bài tập 2 (Tìm từ / Điền từ phù hợp ngữ cảnh):
  + Cho HS thảo luận nhóm đôi, chia sẻ các từ ngữ tìm được.
  + GV đi bao quát lớp, uốn nắn các lỗi dùng từ chưa phù hợp.
- Bài tập 3 (Đặt câu / Viết đoạn văn ngắn):
  + Hướng dẫn HS lưu ý đầu câu viết hoa, cuối câu có dấu chấm; câu phải có nghĩa hoàn chỉnh và chứa từ ngữ vừa học.
  + Gọi 3-4 HS đọc câu văn của mình trước lớp, GV sửa lỗi diễn đạt trực tiếp.`,
          studentActivity: `• Thực hành làm bài tập:
- Bài 1: Đọc thầm đề bài, gạch chân các từ ngữ yêu cầu trong SGK/vở bài tập. Lên bảng trình bày kết quả.
- Bài 2: Trao đổi với bạn cùng bàn, tìm các từ ngữ đồng nghĩa/trái nghĩa hoặc từ ngữ theo chủ điểm.
- Bài 3: Tự viết 1-2 câu văn hoàn chỉnh vào vở. Đọc to câu văn của mình trước lớp, tiếp thu ý kiến nhận xét của thầy cô và các bạn.`
        },
        {
          name: "4. Hoạt động Vận dụng (3 đến 5 phút)",
          objective: "Sử dụng đúng từ ngữ, ngữ pháp vừa học trong giao tiếp hàng ngày.",
          teacherActivity: `• Giao nhiệm vụ vận dụng:
- Yêu cầu HS đóng vai giao tiếp: Đặt 1 câu hỏi hoặc 1 câu chào hỏi có sử dụng từ ngữ/kiểu câu vừa học với bạn bên cạnh.
• Tổng kết tiết học:
- Nhận xét tinh thần học tập của lớp.
- Dặn dò học sinh ghi nhớ kiến thức và chuẩn bị bài cho tiết sau.`,
          studentActivity: `• Thực hành vận dụng giao tiếp:
- Quay sang bạn cùng bàn, thực hiện câu chào hỏi hoặc trao đổi tự nhiên có sử dụng đúng kiến thức bài học.
- Lắng nghe nhận xét của giáo viên, dọn dẹp sách vở ngăn nắp.`
        }
      ];

      return { specificCompetencies, teacherMaterials, studentMaterials, activities };
    }

    if (isWriting) {
      // Viết / Tập làm văn / Chính tả
      const activities: LessonActivity[] = [
        {
          name: "1. Hoạt động Khởi động (Warm-up - 5 phút)",
          objective: "Khơi gợi cảm xúc, kích thích trí tưởng tượng và tạo hứng thú viết văn/chính tả.",
          teacherActivity: `• Khởi động:
- Chiếu bức ảnh hoặc video clip ngắn liên quan đến đề tài bài viết (ví dụ: cảnh thiên nhiên, con người, hoạt động vui chơi...).
- Đặt câu hỏi: "Bức tranh/video gợi cho em cảm xúc gì? Nếu được miêu tả lại, em sẽ chọn chi tiết nào nổi bật nhất?"
- Dẫn dắt giới thiệu bài: "${lessonTitle}".`,
          studentActivity: `• Theo dõi hình ảnh/video, chia sẻ cảm nghĩ nhanh với lớp.
- Lắng nghe lời dẫn dắt của giáo viên, ghi tên bài học vào vở.`
        },
        {
          name: "2. Hoạt động Khám phá (Tìm hiểu yêu cầu & Dàn ý - 12 đến 15 phút)",
          objective: "Nắm vững cấu trúc bài viết, cách chọn lọc chi tiết và kỹ năng lập dàn ý.",
          teacherActivity: `• Bước 1: Đọc và phân tích đề bài / văn bản mẫu
- Cho 1 HS đọc to đề bài hoặc đoạn văn mẫu.
- Phân tích yêu cầu trọng tâm của đề bài: Thể loại, đối tượng miêu tả/kể chuyện, phạm vi bài viết.
• Bước 2: Hướng dẫn tìm ý & Lập dàn ý
- Nhắc lại cấu trúc 3 phần: Mở bài, Thân bài, Kết bài.
- Hướng dẫn học sinh cách quan sát, chọn lọc những chi tiết tiêu biểu, giàu cảm xúc.
- Hướng dẫn sử dụng các biện pháp tu từ (so sánh, nhân hóa) để câu văn thêm sinh động.`,
          studentActivity: `• Phân tích đề bài:
- Đọc to đề bài, dùng bút chì gạch chân các từ khóa quan trọng (tả ai, tả cái gì, kể chuyện gì).
• Tìm ý và xây dựng dàn ý:
- Trả lời các câu hỏi gợi ý của giáo viên.
- Ghi nhanh các ý chính vào vở nháp theo 3 phần: Mở bài, Thân bài, Kết bài.
- Thảo luận cùng bạn bên cạnh để bổ sung thêm các hình ảnh, chi tiết hay.`
        },
        {
          name: "3. Hoạt động Luyện tập - Thực hành (12 đến 15 phút)",
          objective: "Học sinh thực hành viết đoạn văn hoặc bài văn hoàn chỉnh vào vở.",
          teacherActivity: `• Tổ chức thực hành viết bài:
- Yêu cầu học sinh dựa vào dàn ý đã lập, tập trung viết đoạn văn/bài văn vào vở.
- Nhắc nhở tư thế ngồi viết, giữ gìn khoảng cách mắt - vở, chữ viết rõ ràng, sạch đẹp.
- Đi quanh lớp quan sát, gợi ý từ ngữ hay cho những học sinh gặp khó khăn về diễn đạt.
• Nhận xét, chữa bài:
- Gọi 2-3 học sinh đọc bài viết trước lớp.
- Phân tích ưu điểm và góp ý cách diễn đạt, cách dùng từ ngữ gợi tả gợi cảm.`,
          studentActivity: `• Thực hành viết bài cá nhân:
- Tự giác, tập trung viết đoạn văn/bài văn vào vở theo dàn ý đã chuẩn bị.
- Vận dụng các từ ngữ gợi cảm, hình ảnh so sánh, nhân hóa vào câu văn.
• Trình bày bài viết:
- Tự tin đọc to đoạn văn tâm đắc của mình trước lớp.
- Lắng nghe nhận xét của thầy cô và các bạn để tự chỉnh sửa, hoàn thiện bài viết của mình.`
        },
        {
          name: "4. Hoạt động Vận dụng (3 đến 5 phút)",
          objective: "Bồi dưỡng tình cảm, kỹ năng tự sửa bài và chia sẻ tác phẩm với người thân.",
          teacherActivity: `• Hướng dẫn tự rà soát:
- Hướng dẫn học sinh tự đọc lại bài viết của mình, soát lỗi chính tả và dấu câu.
• Dặn dò: Về nhà đọc lại bài văn cho bố mẹ nghe và tiếp thu góp ý để viết hay hơn.`,
          studentActivity: `• Dùng bút chì tự soát lỗi chính tả, sửa lại những câu văn chưa gãy gọn.
- Ghi nhớ nhiệm vụ về nhà đọc lại bài cho người thân nghe.`
        }
      ];

      return { specificCompetencies, teacherMaterials, studentMaterials, activities };
    }

    // Default Tiếng Việt general fallback
    const activities: LessonActivity[] = [
      {
        name: "1. Hoạt động Khởi động (Warm-up - 5 phút)",
        objective: "Tạo tâm thế học tập hứng khởi, kết nối kiến thức và dẫn vào bài mới.",
        teacherActivity: `• Tổ chức trò chơi khởi động nhẹ nhàng gắn với chủ điểm bài học.
• Đặt câu hỏi kết nối và giới thiệu bài: "${lessonTitle}". Ghi tựa bài lên bảng.`,
        studentActivity: `• Tham gia trò chơi vui vẻ, trả lời câu hỏi dẫn dắt của giáo viên.
• Nhắc lại tên bài học và ghi bài vào vở cẩn thận.`
      },
      {
        name: "2. Hoạt động Khám phá (12 đến 15 phút)",
        objective: `Hình thành kiến thức và kỹ năng ngôn ngữ cốt lõi trong bài: ${titleCore}.`,
        teacherActivity: `• Trình bày ngữ liệu mẫu, đọc mẫu hoặc chiếu nội dung bài học lên bảng.
• Hướng dẫn học sinh phân tích ngữ liệu, đàm thoại gợi mở từng bước.
• Chốt lại kiến thức trọng tâm và hướng dẫn học sinh ghi nhớ quy tắc.`,
        studentActivity: `• Quan sát ngữ liệu, lắng nghe giáo viên hướng dẫn.
• Thảo luận nhóm đôi, chia sẻ nhận thức và rút ra ghi nhớ bài học.`
      },
      {
        name: "3. Hoạt động Luyện tập - Thực hành (12 đến 15 phút)",
        objective: "Củng cố và rèn luyện kỹ năng qua các bài tập cụ thể trong SGK.",
        teacherActivity: `• Giao nhiệm vụ chi tiết từng bài tập: hướng dẫn làm bảng con, làm vở bài tập và làm việc nhóm.
• Quan sát uốn nắn, hỗ trợ học sinh còn gặp khó khăn, chữa bài mẫu trên bảng.`,
        studentActivity: `• Tích cực hoàn thành từng bài tập vào vở hoặc bảng con.
• Tham gia chữa bài trước lớp, nhận xét và đổi chéo vở soát lỗi cho bạn.`
      },
      {
        name: "4. Hoạt động Vận dụng (3 đến 5 phút)",
        objective: "Vận dụng kiến thức bài học vào thực tiễn đời sống và giao tiếp hàng ngày.",
        teacherActivity: `• Đưa ra tình huống vận dụng thực tế, dặn dò học sinh tự rèn luyện thêm tại nhà.`,
        studentActivity: `• Nêu cách giải quyết tình huống thực tế, ghi nhớ lời dặn dò của giáo viên.`
      }
    ];

    return { specificCompetencies, teacherMaterials, studentMaterials, activities };
  }

  // =========================================================================
  // 3. MÔN TỰ NHIÊN VÀ XÃ HỘI (TNXH) - Khối 1, 2, 3
  // =========================================================================
  if (subLower.includes("tự nhiên và xã hội") || subLower.includes("tnxh")) {
    const specificCompetencies = [
      `Học sinh nhận biết được các sự vật, hiện tượng, mối quan hệ trong bài: "${lessonTitle}".`,
      "Biết cách chăm sóc sức khỏe, bảo vệ an toàn cho bản thân và thể hiện hành vi có trách nhiệm với môi trường sống xung quanh."
    ];
    const teacherMaterials = [
      `Kế hoạch bài dạy, slide bài giảng điện tử (PPTX), tranh ảnh/video thực tế về "${titleCore}".`,
      "Phiếu học tập nhóm, các thẻ tình huống đóng vai an toàn thực tiễn."
    ];
    const studentMaterials = [
      `Sách giáo khoa Tự nhiên và Xã hội ${grade}, vở bài tập, bút màu.`
    ];

    const activities: LessonActivity[] = [
      {
        name: "1. Hoạt động Khởi động (Warm-up - 5 phút)",
        objective: "Kích hoạt cảm xúc, khơi gợi hiểu biết thực tế của học sinh về bài học.",
        teacherActivity: `• Cho học sinh hát bài hát hoặc xem một đoạn video clip ngắn về chủ đề bài học.
• Đặt câu hỏi gợi mở: "Hằng ngày em thường thấy điều này diễn ra như thế nào? Em cảm thấy ra sao?"
• Dẫn dắt vào bài mới: "${lessonTitle}", ghi tựa bài lên bảng.`,
        studentActivity: `• Cả lớp hát và vận động theo nhịp bài hát.
• 2-3 học sinh xung phong chia sẻ trải nghiệm thực tế của bản thân.
• Lắng nghe giáo viên giới thiệu bài và nhắc lại tên bài học.`
      },
      {
        name: "2. Hoạt động Khám phá (12 đến 15 phút)",
        objective: `Quan sát, nhận diện và khám phá kiến thức mới về: ${titleCore}.`,
        teacherActivity: `• Bước 1: Quan sát tranh ảnh thực tế trong SGK
- Cho học sinh làm việc theo nhóm 4: Quan sát các bức tranh trong SGK.
- Nêu hệ thống câu hỏi gợi mở: "Bức tranh vẽ cảnh gì? Các nhân vật đang làm gì? Việc làm đó mang lại lợi ích gì hoặc có nguy cơ gì?"
• Bước 2: Thảo luận và chia sẻ
- Mời đại diện các nhóm lên chỉ tranh và trình bày kết quả quan sát.
• Bước 3: Chuẩn hóa kiến thức
- GV nhận xét, bổ sung và tổng hợp thành các bài học cốt lõi (về vệ sinh, sức khỏe, an toàn hoặc mối quan hệ xã hội).`,
        studentActivity: `• Làm việc nhóm:
- Nhóm 4 cùng mở SGK, quan sát kĩ từng chi tiết trong các bức tranh.
- Thảo luận sôi nổi, ghi lại câu trả lời vào phiếu học tập nhóm.
• Báo cáo kết quả:
- Đại diện nhóm tự tin lên trước lớp, chỉ vào hình ảnh trên màn chiếu và trình bày ý kiến của nhóm.
- Các nhóm khác lắng nghe, nhận xét và bổ sung ý kiến.`
      },
      {
        name: "3. Hoạt động Luyện tập - Thực hành (12 đến 15 phút)",
        objective: "Thực hành xử lý tình huống thực tế và rèn luyện kỹ năng hành động đúng đắn.",
        teacherActivity: `• Giao nhiệm vụ xử lý tình huống:
- Đưa ra 2 tình huống thực tế thường gặp trong đời sống (ở nhà, ở trường hoặc nơi công cộng).
- Yêu cầu các nhóm thảo luận và đóng vai xử lý tình huống: "Nếu em là bạn trong tranh, em sẽ làm gì? Vì sao?"
• Theo dõi, nhận xét:
- GV đi quan sát, hướng dẫn các nhóm phân vai đóng vai.
- Mời 2 nhóm lên thể hiện trước lớp; hướng dẫn cả lớp nhận xét, phân tích hành vi an toàn và phù hợp.`,
        studentActivity: `• Đóng vai xử lý tình huống:
- Các nhóm phân công nhiệm vụ: bạn đóng vai nhân vật, bạn dẫn chuyện.
- Thảo luận đưa ra cách xử lý văn minh, an toàn và đúng chuẩn mực.
• Biểu diễn trước lớp:
- 2 nhóm lên đóng vai xử lý tình huống tự nhiên, sinh động.
- Cả lớp vỗ tay cổ vũ và tham gia nhận xét, rút ra cách ứng xử đúng nhất.`
      },
      {
        name: "4. Hoạt động Vận dụng (3 đến 5 phút)",
        objective: "Thực hiện cam kết hành vi an toàn, văn minh tại gia đình và trường lớp.",
        teacherActivity: `• Tổng kết bài học:
- Hỏi: "Sau bài học này, em sẽ thay đổi thói quen nào hoặc làm việc gì để giúp đỡ gia đình và giữ an toàn cho bản thân?"
- Dặn dò học sinh thực hiện đều đặn mỗi ngày và chia sẻ bài học cùng người thân.`,
        studentActivity: `• Nêu cam kết hành động:
- 2-3 học sinh chia sẻ việc làm cụ thể mình sẽ thực hiện ngay trong ngày hôm nay.
- Lắng nghe lời dặn dò của giáo viên, dọn dẹp bàn học sạch sẽ.`
      }
    ];

    return { specificCompetencies, teacherMaterials, studentMaterials, activities };
  }

  // =========================================================================
  // 4. MÔN KHOA HỌC (SCIENCE) - Khối 4, 5
  // =========================================================================
  if (subLower.includes("khoa học") || subLower === "kh") {
    const specificCompetencies = [
      `Học sinh giải thích được hiện tượng, nêu được bản chất khoa học và vai trò trong bài: "${lessonTitle}".`,
      "Rèn luyện phương pháp quan sát, thực nghiệm khoa học, tư duy logic và ý thức bảo vệ tài nguyên thiên nhiên, môi trường sống."
    ];
    const teacherMaterials = [
      `Kế hoạch bài dạy, bài giảng điện tử (PPTX), video clip thí nghiệm thực tế hoặc dụng cụ thí nghiệm trực quan về "${titleCore}".`,
      "Phiếu học tập nhóm hướng dẫn các bước quan sát và ghi nhận dữ liệu thực nghiệm."
    ];
    const studentMaterials = [
      `Sách giáo khoa Khoa học ${grade}, vở thực hành Khoa học, bút dạ, bảng nhóm.`
    ];

    const activities: LessonActivity[] = [
      {
        name: "1. Hoạt động Khởi động (Warm-up - 5 phút)",
        objective: "Kích thích trí tò mò khoa học, đặt ra nghi vấn khám phá từ thực tiễn.",
        teacherActivity: `• Nêu tình huống thực tế hoặc một hiện tượng khoa học thú vị:
- Đặt câu hỏi: "Tại sao khi trời mưa nước lại ngấm vào đất?", hoặc câu hỏi liên quan trực tiếp đến bài học "${titleCore}".
- Khích lệ học sinh đưa ra các dự đoán ban đầu.
• Giới thiệu bài mới: "${lessonTitle}", ghi bảng.`,
        studentActivity: `• Lắng nghe câu hỏi tình huống của giáo viên.
• Suy nghĩ, đưa ra các giả thuyết và dự đoán khoa học ban đầu theo hiểu biết của mình.
• Lắng nghe giáo viên dẫn dắt, nhắc lại tên bài học và ghi vở.`
      },
      {
        name: "2. Hoạt động Khám phá (12 đến 15 phút)",
        objective: `Tiến hành quan sát, thí nghiệm hoặc phân tích tư liệu để tìm hiểu bản chất của: ${titleCore}.`,
        teacherActivity: `• Bước 1: Giao nhiệm vụ khám phá
- Cho học sinh làm việc theo nhóm 4.
- Phát phiếu học tập và hướng dẫn học sinh quan sát sơ đồ / tranh ảnh thí nghiệm trong SGK hoặc video clip khoa học.
• Bước 2: Hướng dẫn quan sát & Thảo luận
- Đặt câu hỏi định hướng: "Hiện tượng gì đã xảy ra? Nguyên nhân do đâu? Kết quả thu được là gì?"
- GV đi tới các nhóm, hỗ trợ học sinh phân tích các biến số và dữ liệu quan sát.
• Bước 3: Rút ra kết luận khoa học
- Mời đại diện nhóm báo cáo kết quả.
- GV chuẩn hóa kiến thức, rút ra định nghĩa / quy luật khoa học chính thức.`,
        studentActivity: `• Làm việc nhóm nghiên cứu:
- Nhận phiếu học tập, phân công nhóm trưởng điều hành, thư kí ghi chép.
- Quan sát kĩ thí nghiệm hoặc sơ đồ trong SGK, cùng nhau trao đổi, giải thích nguyên nhân hiện tượng.
• Báo cáo và thảo luận:
- Đại diện nhóm lên bảng trình bày kết quả quan sát và kết luận của nhóm mình.
- Các nhóm khác đặt câu hỏi phản biện, đối chiếu kết quả.
- Ghi chép kết luận khoa học vào vở.`
      },
      {
        name: "3. Hoạt động Luyện tập - Thực hành (12 đến 15 phút)",
        objective: "Vận dụng kiến thức khoa học vừa học để giải thích các hiện tượng thực tế và bài tập tình huống.",
        teacherActivity: `• Giao bài tập tình huống thực tiễn:
- Đưa ra bài tập phân tích: Giải thích hiện tượng thực tế đời sống liên quan đến bài học.
- Hướng dẫn học sinh lập sơ đồ tư duy hoặc bảng phân loại thông tin trên giấy A3 / bảng phụ.
• Đánh giá kết quả:
- Nhận xét bài làm của các nhóm, chỉ ra những điểm sáng tạo và những chỗ cần chuẩn xác hơn về thuật ngữ khoa học.`,
        studentActivity: `• Thực hành giải bài tập:
- Thảo luận nhóm, vận dụng kiến thức vừa học để giải thích các hiện tượng trong bài tập.
- Hoàn thành sơ đồ tư duy hoặc bảng phân loại lên bảng nhóm.
- Cùng nhau chấm chéo sản phẩm giữa các nhóm.`
      },
      {
        name: "4. Hoạt động Vận dụng (3 đến 5 phút)",
        objective: "Ứng dụng kiến thức khoa học vào bảo vệ môi trường và giữ gìn sức khỏe gia đình.",
        teacherActivity: `• Đặt câu hỏi vận dụng thực tế:
- "Chúng ta có thể làm gì tại gia đình và địa phương để áp dụng kiến thức bài học này (ví dụ: bảo vệ nguồn nước, tiết kiệm điện, chống xói mòn đất)?"
• Dặn dò học sinh tiếp tục quan sát thiên nhiên và chuẩn bị bài mới.`,
        studentActivity: `• Nêu các hành động cụ thể trong sinh hoạt hàng ngày.
• Ghi nhớ lời dặn dò của giáo viên, dọn dẹp phòng học sạch sẽ.`
      }
    ];

    return { specificCompetencies, teacherMaterials, studentMaterials, activities };
  }

  // =========================================================================
  // 5. MÔN LỊCH SỬ VÀ ĐỊA LÍ - Khối 4, 5
  // =========================================================================
  if (subLower.includes("lịch sử") || subLower.includes("địa lí") || subLower.includes("ls-đl") || subLower === "ls" || subLower === "đl") {
    const specificCompetencies = [
      `Học sinh trình bày được diễn biến sự kiện lịch sử hoặc đặc điểm địa lí tự nhiên, dân cư, kinh tế trong bài: "${lessonTitle}".`,
      "Biết khai thác lược đồ, bản đồ, tranh ảnh hiện vật lịch sử; bồi dưỡng lòng tự hào dân tộc và tình yêu quê hương đất nước."
    ];
    const teacherMaterials = [
      `Kế hoạch bài dạy, bài giảng điện tử (PPTX), bản đồ địa lí Việt Nam, lược đồ trận đánh/sự kiện lịch sử, tranh ảnh hiện vật.`,
      "Phiếu học tập nhóm, tư liệu lịch sử - địa lí mở rộng."
    ];
    const studentMaterials = [
      `Sách giáo khoa Lịch sử và Địa lí ${grade}, vở bài tập, thước kẻ, bút màu.`
    ];

    const activities: LessonActivity[] = [
      {
        name: "1. Hoạt động Khởi động (Warm-up - 5 phút)",
        objective: "Khơi gợi niềm tự hào dân tộc hoặc sự tò mò về vùng đất, sự kiện lịch sử.",
        teacherActivity: `• Chiếu hình ảnh một di tích lịch sử hoặc danh lam thắng cảnh nổi tiếng của đất nước.
• Đố học sinh: "Em có biết đây là địa danh nào không? Nơi đây gắn liền với nhân vật/sự kiện lịch sử nào?"
• Dẫn dắt vào bài mới: "${lessonTitle}", ghi tựa bài lên bảng.`,
        studentActivity: `• Quan sát hình ảnh, hào hứng giơ tay giải câu đố địa danh.
• Lắng nghe lời dẫn dắt của giáo viên và ghi tên bài học vào vở.`
      },
      {
        name: "2. Hoạt động Khám phá (12 đến 15 phút)",
        objective: `Khai thác tư liệu, lược đồ, bản đồ để tìm hiểu kiến thức cốt lõi về: ${titleCore}.`,
        teacherActivity: `• Bước 1: Làm việc với tư liệu và lược đồ
- Yêu cầu học sinh mở SGK, đọc đoạn tư liệu và quan sát lược đồ/bản đồ.
- Nêu câu hỏi định hướng:
  + Về Lịch sử: Sự kiện diễn ra vào thời gian nào? Do ai lãnh đạo? Diễn biến chính và kết quả ra sao?
  + Về Địa lí: Vùng đất này có vị trí tiếp giáp ở đâu? Đặc điểm địa hình, khí hậu, sông ngòi thế nào?
• Bước 2: Thảo luận nhóm
- Tổ chức học sinh thảo luận nhóm 4 hoàn thành phiếu học tập.
• Bước 3: Báo cáo và chuẩn hóa
- Mời đại diện học sinh lên chỉ lược đồ/bản đồ và trình bày trước lớp.
- GV chuẩn hóa kiến thức, nhấn mạnh ý nghĩa lịch sử hoặc giá trị kinh tế - sinh thái của vùng đất.`,
        studentActivity: `• Làm việc nhóm với bản đồ/tư liệu:
- Đọc kĩ đoạn văn trong SGK, quan sát các kí hiệu trên lược đồ.
- Thảo luận nhóm, cùng nhau xác định các mốc thời gian, diễn biến hoặc đặc điểm tự nhiên.
• Báo cáo trước lớp:
- Đại diện nhóm lên bảng, dùng que chỉ chỉ rõ các địa danh / mũi tấn công trên lược đồ và trình bày mạch lạc.
- Các nhóm khác nhận xét, bổ sung.
- Ghi các ý chính vào vở.`
      },
      {
        name: "3. Hoạt động Luyện tập (12 đến 15 phút)",
        objective: "Củng cố kiến thức qua bài tập điền lược đồ, trắc nghiệm và sơ đồ tư duy.",
        teacherActivity: `• Giao bài tập củng cố:
- Cho học sinh làm việc cá nhân: Hoàn thành bài tập điền khuyết hoặc điền tên địa danh vào lược đồ trống trong vở bài tập.
- Tổ chức trò chơi trắc nghiệm nhanh "Rung chuông vàng" với 3-4 câu hỏi cốt lõi của bài học.
• Nhận xét, chữa bài:
- Chốt đáp án đúng, khen ngợi những học sinh nắm bài nhanh và chính xác.`,
        studentActivity: `• Làm bài tập cá nhân:
- Hoàn thành bài tập trong vở bài tập cẩn thận.
- Hào hứng tham gia trò chơi trắc nghiệm giơ thẻ chọn đáp án A, B, C hoặc D.
- Đối chiếu kết quả và tự sửa bài.`
      },
      {
        name: "4. Hoạt động Vận dụng (3 đến 5 phút)",
        objective: "Liên hệ trách nhiệm của học sinh đối với việc giữ gìn truyền thống và bảo vệ quê hương.",
        teacherActivity: `• Đặt câu hỏi liên hệ:
- "Là học sinh tiểu học, em cần làm gì để thể hiện lòng biết ơn các thế hệ cha anh đi trước hoặc góp phần bảo tồn vẻ đẹp của vùng đất này?"
• Dặn dò học sinh tìm hiểu thêm thông tin qua sách báo, internet an toàn và chuẩn bị bài mới.`,
        studentActivity: `• Chia sẻ suy nghĩ cá nhân: Nêu quyết tâm chăm ngoan, học giỏi, giữ gìn vệ sinh di tích lịch sử và yêu quý quê hương.
• Ghi nhớ lời dặn dò của thầy cô.`
      }
    ];

    return { specificCompetencies, teacherMaterials, studentMaterials, activities };
  }

  // =========================================================================
  // 6. MÔN ĐẠO ĐỨC (ETHICS) - Khối 1 đến Khối 5
  // =========================================================================
  if (subLower.includes("đạo đức") || subLower === "đđ") {
    const specificCompetencies = [
      `Học sinh nhận biết được các chuẩn mực hành vi đạo đức, ý nghĩa và biểu hiện cụ thể trong bài: "${lessonTitle}".`,
      "Biết phân biệt hành vi đúng - sai, có thái độ đồng tình với điều tốt, không đồng tình với cái xấu; rèn luyện thói quen ứng xử văn minh trong trường học và gia đình."
    ];
    const teacherMaterials = [
      `Kế hoạch bài dạy, slide bài giảng điện tử (PPTX), tranh ảnh các tình huống đạo đức trong SGK.`,
      "Thẻ mặt cười / mặt mếu (hoặc thẻ Xanh / Đỏ) dùng để bày tỏ thái độ, phiếu học tập tình huống."
    ];
    const studentMaterials = [
      `Sách giáo khoa Đạo đức ${grade}, vở bài tập Đạo đức, thẻ bày tỏ ý kiến.`
    ];

    const activities: LessonActivity[] = [
      {
        name: "1. Hoạt động Khởi động (Warm-up - 5 phút)",
        objective: "Tạo cảm xúc chân thành, dẫn dắt vào bài học đạo đức một cách tự nhiên.",
        teacherActivity: `• Bắt nhịp cho cả lớp hát bài hát hoặc kể một mẩu chuyện đạo đức ngắn.
• Đặt câu hỏi: "Bài hát/câu chuyện khuyên chúng ta điều gì?"
• Giới thiệu bài mới: "${lessonTitle}", ghi tựa bài lên bảng.`,
        studentActivity: `• Cả lớp hát vang bài hát với tinh thần vui tươi.
• 1-2 học sinh trả lời câu hỏi cảm nhận về lời bài hát.
• Lắng nghe giáo viên giới thiệu bài và nhắc lại tên bài học.`
      },
      {
        name: "2. Hoạt động Khám phá (12 đến 15 phút)",
        objective: `Nhận biết chuẩn mực hành vi đạo đức và phân tích ý nghĩa của: ${titleCore}.`,
        teacherActivity: `• Bước 1: Khai thác tranh tình huống trong SGK
- Cho học sinh quan sát lần lượt các bức tranh tình huống trong SGK.
- Nêu câu hỏi: "Các bạn trong tranh đang làm gì? Việc làm đó đúng hay sai? Mang lại kết quả gì?"
• Bước 2: Thảo luận nhóm
- Tổ chức học sinh thảo luận nhóm đôi: Bày tỏ ý kiến về từng hành vi của nhân vật.
• Bước 3: Rút ra bài học chuẩn mực
- Mời đại diện các nhóm phát biểu.
- GV phân tích, chuẩn hóa và rút ra bài học đạo đức: "Để thể hiện ${titleCore}, chúng ta cần làm những việc gì và tránh những việc gì?"`,
        studentActivity: `• Quan sát tranh và suy ngẫm:
- Quan sát kĩ nét mặt, hành động của các nhân vật trong từng bức tranh.
- Thảo luận cùng bạn: Đánh giá việc làm nào nên làm, việc làm nào không nên làm.
• Bày tỏ ý kiến:
- Giơ tay phát biểu ý kiến rõ ràng, giải thích vì sao mình đồng tình hay không đồng tình.
- Đọc to phần Lời khuyên/Ghi nhớ trong SGK và ghi nhớ bài học.`
      },
      {
        name: "3. Hoạt động Luyện tập (12 đến 15 phút)",
        objective: "Bày tỏ thái độ và thực hành xử lý các tình huống đạo đức thực tế.",
        teacherActivity: `• Hoạt động 1: Bày tỏ ý kiến (Tán thành / Không tán thành)
- GV đọc các nhận định hành vi, yêu cầu học sinh dùng thẻ Xanh (Tán thành) hoặc Đỏ (Không tán thành) để giơ đồng loạt.
- Mời một số học sinh giải thích lí do vì sao lựa chọn như vậy.
• Hoạt động 2: Đóng vai xử lý tình huống
- Giao 2 tình huống cụ thể (ở nhà, ở lớp) cho các nhóm.
- Hướng dẫn các nhóm phân vai, xây dựng lời thoại ứng xử lễ phép, trung thực, có trách nhiệm.
- Mời các nhóm lên biểu diễn, cả lớp nhận xét.`,
        studentActivity: `• Bày tỏ thái độ:
- Chăm chú lắng nghe từng nhận định của thầy cô.
- Giơ thẻ bày tỏ thái độ dứt khoát; tự tin đứng dậy giải thích quan điểm của bản thân.
• Đóng vai xử lý tình huống:
- Nhóm thảo luận nhanh, phân vai nhân vật.
- Lên trước lớp diễn xuất tự nhiên, đưa ra cách giải quyết tình huống nhân ái, lịch sự, đúng chuẩn mực đạo đức.
- Lắng nghe lời khen ngợi và góp ý của cô giáo và các bạn.`
      },
      {
        name: "4. Hoạt động Vận dụng (3 đến 5 phút)",
        objective: "Chuyển nhận thức đạo đức thành hành động cụ thể trong cuộc sống hàng ngày.",
        teacherActivity: `• Hướng dẫn liên hệ bản thân:
- Yêu cầu HS chia sẻ: "Em đã từng làm việc gì thể hiện ${titleCore}? Sắp tới em sẽ làm thêm những việc gì?"
• Dặn dò: Lập bảng cam kết việc làm tốt và thực hiện mỗi ngày ở trường và ở nhà.`,
        studentActivity: `• Chia sẻ việc làm tốt của bản thân trước lớp một cách trung thực.
• Cam kết thực hiện hành vi đạo đức tốt mỗi ngày.`
      }
    ];

    return { specificCompetencies, teacherMaterials, studentMaterials, activities };
  }

  // =========================================================================
  // 7. MÔN HOẠT ĐỘNG TRẢI NGHIỆM (HĐTN) - Khối 1 đến Khối 5
  // =========================================================================
  if (subLower.includes("hđtn") || subLower.includes("hoạt động trải nghiệm") || subLower.includes("hdtn")) {
    const cPeriod = typeof curriculumPeriod === "number" ? curriculumPeriod : (parseInt(String(curriculumPeriod || 0), 10) || 0);
    const isPeriod1 = (session === "Sáng" && cPeriod % 3 === 1) || subSubLower.includes("dưới cờ") || lessonTitle.toLowerCase().includes("dưới cờ") || lessonTitle.toLowerCase().includes("shdc");
    const isPeriod3 = (cPeriod % 3 === 0 && cPeriod > 0) || subSubLower.includes("sinh hoạt lớp") || lessonTitle.toLowerCase().includes("sinh hoạt lớp") || lessonTitle.toLowerCase().includes("shl");

    if (isPeriod1) {
      // Tiết 1: Sinh hoạt dưới cờ
      const specificCompetencies = [
        "Học sinh thực hiện nghiêm trang nghi lễ Chào cờ đầu tuần theo đúng nghi thức Đội TNTP Hồ Chí Minh; bồi dưỡng lòng tự hào dân tộc và tình yêu Tổ quốc.",
        `Chủ động, tự tin tham gia hoạt động trải nghiệm theo chủ đề dưới cờ: "${lessonTitle}"; nắm vững kế hoạch thi đua tuần mới của nhà trường và Liên đội.`
      ];
      const teacherMaterials = [
        "Kế hoạch tuần, sổ theo dõi nền nếp lớp, bài phát động thi đua theo chủ đề tuần của Liên đội và BGH nhà trường.",
        "Hệ thống âm thanh, micro, cờ Tổ quốc phục vụ nghi lễ Chào cờ."
      ];
      const studentMaterials = [
        "Trang phục học sinh chỉnh tề, sạch đẹp (áo đồng phục trắng, khăn quàng đỏ, bảng tên, mũ/ghế ngồi theo quy định)."
      ];

      const activities: LessonActivity[] = [
        {
          name: "1. Nghi lễ Chào cờ (Khởi động - 10 phút)",
          objective: "Tạo không khí trang nghiêm, phấn khởi bước vào tuần học mới.",
          teacherActivity: `• Tập hợp & Ổn định đội ngũ:
- GVCN hướng dẫn học sinh xếp hàng ngay ngắn theo khối lớp tại sân trường, chỉnh đốn trang phục, kiểm tra khăn quàng đỏ.
• Thực hiện nghi lễ Chào cờ:
- Phối hợp với Tổng phụ trách Đội điều hành nghi lễ Chào cờ toàn trường: "Nghiêm! Chào cờ! Chào! - Quốc ca - Đội ca".
- Theo dõi ý thức chào cờ của học sinh lớp mình.
• Lắng nghe đánh giá thi đua:
- Lắng nghe đại diện BGH và Ban Chỉ huy Liên đội nhận xét, đánh giá các mặt hoạt động nền nếp tuần qua.`,
          studentActivity: `• Đứng nghiêm trang hướng về Quốc kỳ:
- Thực hiện động tác chào cờ đúng tư thế Đội viên / Nhi đồng.
- Hát vang bài Quốc ca và Đội ca với tinh thần tự hào dân tộc, âm vang rộn rã toàn trường.
• Lắng nghe nhận xét:
- Chú ý lắng nghe đánh giá thi đua tuần qua, vỗ tay chúc mừng các tập thể và cá nhân đạt giải thi đua.`
        },
        {
          name: "2. Sinh hoạt chủ đề dưới cờ (Khám phá & Giao lưu - 15 phút)",
          objective: `Tham gia hoạt động trải nghiệm và giao lưu theo chủ đề tuần: "${lessonTitle}".`,
          teacherActivity: `• Điều hành hoạt động chủ đề:
- Tổng phụ trách Đội và giáo viên chủ nhiệm hướng dẫn học sinh tham gia hoạt động theo chủ đề tuần: "${lessonTitle}".
- Giới thiệu các tiết mục văn nghệ, tiểu phẩm tuyên truyền hoặc trò chơi đố vui giao lưu toàn trường.
• Khuyến khích học sinh tham gia:
- Động viên học sinh lớp mình tự tin giơ tay tham gia giao lưu, trả lời các câu hỏi đố vui trên sân khấu.`,
          studentActivity: `• Tích cực theo dõi và tham gia giao lưu:
- Chăm chú theo dõi các tiết mục văn nghệ, tiểu phẩm tuyên truyền trên sân khấu.
- Hào hứng giơ tay xung phong lên sân khấu trả lời câu hỏi đố vui giao lưu, chia sẻ cảm nghĩ của mình trước toàn trường.
- Cổ vũ nhiệt tình cho các bạn tham gia biểu diễn.`
        },
        {
          name: "3. Phổ biến nhiệm vụ tuần mới (Luyện tập - 7 phút)",
          objective: "Nắm chắc các chỉ tiêu thi đua và nhiệm vụ trọng tâm của tuần học mới.",
          teacherActivity: `• Phổ biến nhiệm vụ:
- GVCN nhắc nhở học sinh lớp mình các nhiệm vụ trọng tâm trong tuần:
  + Chuyên cần, đi học đúng giờ, xếp hàng ra vào lớp nghiêm túc.
  + Giữ gìn vệ sinh trường lớp, không xả rác bừa bãi, bảo vệ của công.
  + Đẩy mạnh phong trào "Hoa điểm mười", đôi bạn cùng tiến.
  + Thực hiện an toàn giao thông trước cổng trường.`,
          studentActivity: `• Tiếp thu nhiệm vụ:
- Lắng nghe và ghi nhớ các nhiệm vụ thi đua tuần mới của lớp.
- Quyết tâm thực hiện tốt các phong trào thi đua.`
        },
        {
          name: "4. Vận dụng & Di chuyển về lớp (3 phút)",
          objective: "Rèn nếp kỷ luật, trật tự khi di chuyển về phòng học.",
          teacherActivity: `• Nhận xét ý thức chào cờ của lớp.
• Hướng dẫn học sinh cầm ghế ngay ngắn, xếp hàng di chuyển trật tự về phòng học để chuẩn bị tiết học tiếp theo.`,
          studentActivity: `• Thu dọn ghế ngay ngắn, đi theo hàng về lớp học trong trật tự, chuẩn bị sách vở cho tiết học trên lớp.`
        }
      ];

      return { specificCompetencies, teacherMaterials, studentMaterials, activities };
    }

    if (isPeriod3) {
      // Tiết 3: Sinh hoạt lớp (SHL) - Tích hợp giáo dục An toàn giao thông (ATGT)
      // Môn an toàn giao thông bắt đầu tích hợp ghép nội dung vào tiết HĐTN (SHL).
      // Mỗi lớp có 10 bài và 1 bài dạy tích hợp nội dung 2 tiết vào tiết HĐTN(SHL) 2 tuần.
      const tsLesson = getTrafficSafetyLesson(grade, week || 3);

      const specificCompetencies = [
        "Học sinh biết tự đánh giá và đánh giá các mặt hoạt động học tập, rèn luyện của bản thân và các bạn trong tuần qua; xây dựng phương hướng tuần mới.",
        `Tích hợp giáo dục An toàn giao thông (Bài ${tsLesson.lessonNumber}: ${tsLesson.title} - Tiết ${tsLesson.part}: ${tsLesson.subTitle}): ${tsLesson.specificCompetency}`,
        `Rèn luyện năng lực tự quản, tự tin phát biểu ý kiến, nâng cao ý thức chấp hành luật giao thông đường bộ và lan tỏa nét đẹp văn hóa giao thông trong học đường.`
      ];
      const teacherMaterials = [
        "Sổ chủ nhiệm, bảng tổng hợp điểm thi đua các tổ trong tuần, kế hoạch tuần học tiếp theo.",
        `Tài liệu Giáo dục An toàn giao thông Lớp ${grade} (Bài ${tsLesson.lessonNumber}: ${tsLesson.title} - Tiết ${tsLesson.part}).`,
        "Tranh ảnh, video clip tình huống giao thông thực tế phục vụ tích hợp bài học."
      ];
      const studentMaterials = [
        "Sổ theo dõi của ban cán sự lớp, sổ tay cá nhân, phiếu tự đánh giá rèn luyện.",
        `Tài liệu Giáo dục An toàn giao thông Lớp ${grade}.`
      ];

      const activities: LessonActivity[] = [
        {
          name: "1. Hoạt động mở đầu (Warm-up - 5 phút)",
          objective: "Tạo không khí vui tươi, gắn kết tập thể lớp cuối tuần.",
          teacherActivity: `• Bắt nhịp bài hát tập thể vui nhộn về giao thông ("Từ một ngã tư đường phố", "Chúng em với an toàn giao thông"...) hoặc tổ chức trò chơi nhỏ khởi động tạo không khí cởi mở, ấm áp cuối tuần.`,
          studentActivity: `• Cả lớp cùng hát vang và vỗ tay theo nhịp bài hát, tạo tinh thần thoải mái, hào hứng bước vào buổi sinh hoạt lớp.`
        },
        {
          name: "2. Sơ kết hoạt động tuần qua (10 đến 12 phút)",
          objective: "Đánh giá khách quan, biểu dương ưu điểm và khắc phục những hạn chế trong tuần.",
          teacherActivity: `• Điều hành phần sơ kết:
- Mời Lớp trưởng và các Tổ trưởng lần lượt lên báo cáo tình hình học tập, nề nếp của tổ/lớp trong tuần qua.
- Mời học sinh trong lớp phát biểu đóng góp ý kiến.
• Nhận xét chung của GVCN:
- GVCN nhận xét toàn diện: Khen ngợi những cá nhân và tổ có tiến bộ vượt bậc, biểu dương các bạn đạt nhiều điểm tốt.
- Nhắc nhở nhẹ nhàng những bạn còn vi phạm nề nếp (nói chuyện riêng, quên đồ dùng, đi học muộn) và giao bạn kèm cặp giúp đỡ.`,
          studentActivity: `• Ban cán sự báo cáo:
- Các tổ trưởng lần lượt đọc bảng tổng kết thi đua của tổ mình.
- Lớp trưởng nhận xét chung toàn lớp.
• Học sinh cả lớp:
- Lắng nghe, tự đối chiếu với bản thân, phát biểu ý kiến xây dựng lớp.
- Vỗ tay chúc mừng các bạn được tuyên dương.`
        },
        {
          name: `3. Sinh hoạt chủ đề & Tích hợp An toàn giao thông: Bài ${tsLesson.lessonNumber} - ${tsLesson.title} (Tiết ${tsLesson.part}: ${tsLesson.subTitle}) (12 đến 15 phút)`,
          objective: `Thực hiện hoạt động trải nghiệm theo chủ đề và tích hợp An toàn giao thông: Bài ${tsLesson.lessonNumber} - ${tsLesson.title} (Tiết ${tsLesson.part}).`,
          teacherActivity: `• Tích hợp nội dung An toàn giao thông theo quy định (Bài ${tsLesson.lessonNumber}: ${tsLesson.title} - Tiết ${tsLesson.part}: ${tsLesson.subTitle}):
- ${tsLesson.teacherActivity}
- Đặt câu hỏi gợi mở, tổ chức học sinh thảo luận cặp đôi hoặc nhóm 4 để liên hệ thực tế tình huống giao thông hàng ngày xung quanh cổng trường và gia đình.
- Chuẩn hóa kiến thức, rút ra bài học thực tiễn và ghi nhớ các quy tắc tham gia giao thông an toàn.`,
          studentActivity: `• Tham gia hoạt động tích hợp An toàn giao thông:
- ${tsLesson.studentActivity}
- Thảo luận nhóm, tự tin phát biểu ý kiến về các hành vi an toàn và không an toàn khi đi đường.
- Cam kết luôn gương mẫu thực hiện đúng luật giao thông đường bộ và nhắc nhở người thân cùng chấp hành.`
        },
        {
          name: "4. Vận dụng & trải nghiệm (Phương hướng tuần tới - 3 đến 5 phút)",
          objective: "Xác định rõ các mục tiêu, nhiệm vụ tuần tới và dặn dò an toàn khi tham gia giao thông cuối tuần.",
          teacherActivity: `• Phổ biến phương hướng tuần tới:
- Nêu rõ các mục tiêu thi đua cần phấn đấu trong tuần sau.
- Phân công nhiệm vụ cụ thể cho từng tổ (trực nhật, chăm sóc bồn hoa, chuẩn bị đồ dùng).
• Dặn dò an toàn giao thông & nghỉ ngơi:
- Nhắc nhở học sinh luôn tuân thủ quy tắc an toàn khi đi bộ, đi xe đạp hoặc ngồi sau xe máy của bố mẹ; đội mũ bảo hiểm đạt chuẩn, cài quai đúng quy cách; phòng tránh tai nạn thương tích và đuối nước.`,
          studentActivity: `• Ghi chép các nhiệm vụ tuần mới vào sổ tay.
• Quyết tâm thi đua đạt nhiều thành tích tốt trong tuần tiếp theo.
• Dọn dẹp vệ sinh lớp học trước khi ra về.`
        }
      ];

      return { specificCompetencies, teacherMaterials, studentMaterials, activities };
    }

    // Tiết 2: Hoạt động giáo dục theo chủ đề
    const specificCompetencies = [
      `Khám phá kiến thức, rèn luyện kỹ năng thực hành và hình thành thói quen tích cực gắn với chủ đề: "${lessonTitle}".`,
      "Tự tin bày tỏ ý kiến, lắng nghe và hợp tác hiệu quả cùng bạn bè trong các hoạt động trải nghiệm thực tế."
    ];
    const teacherMaterials = [
      `Kế hoạch bài dạy, bài giảng điện tử (PPTX), tranh ảnh/video minh họa chủ đề bài học "${titleCore}".`,
      "Phiếu học tập nhóm, vật liệu trải nghiệm theo chủ đề."
    ];
    const studentMaterials = [
      `Sách giáo khoa/vở bài tập Hoạt động trải nghiệm ${grade}, đồ dùng học tập, vật liệu thủ công.`
    ];

    const activities: LessonActivity[] = [
      {
        name: "1. Hoạt động Khởi động (Warm-up - 5 phút)",
        objective: "Kích hoạt cảm xúc, khơi gợi hứng thú tham gia hoạt động trải nghiệm.",
        teacherActivity: `• Tổ chức trò chơi vận động hoặc hát múa tập thể tạo năng lượng tích cực.
• Giới thiệu bài học chủ đề: "${lessonTitle}", ghi tựa bài lên bảng.`,
        studentActivity: `• Tham gia trò chơi khởi động hào hứng cùng các bạn.
• Nhắc lại tên bài học và chuẩn bị đồ dùng trải nghiệm.`
      },
      {
        name: "2. Hoạt động Khám phá (12 đến 15 phút)",
        objective: `Nhận diện và tìm hiểu các biểu hiện, kỹ năng cốt lõi của chủ đề: ${titleCore}.`,
        teacherActivity: `• Hướng dẫn học sinh quan sát tranh ảnh, video hoặc tình huống thực tế trong SGK.
• Đặt câu hỏi đàm thoại gợi mở, tổ chức cho học sinh thảo luận nhóm 4.
• Tổng hợp ý kiến và rút ra các kỹ năng / thói quen tích cực cần rèn luyện.`,
        studentActivity: `• Quan sát ngữ liệu, thảo luận sôi nổi trong nhóm.
• Đại diện nhóm phát biểu cảm nghĩ và bài học rút ra.
• Lắng nghe giáo viên đúc kết kiến thức.`
      },
      {
        name: "3. Hoạt động Luyện tập - Thực hành (12 đến 15 phút)",
        objective: "Thực hành kỹ năng, đóng vai xử lý tình huống hoặc làm sản phẩm trải nghiệm sáng tạo.",
        teacherActivity: `• Giao nhiệm vụ thực hành:
- Hướng dẫn học sinh làm sản phẩm trải nghiệm (vẽ tranh, viết thông điệp, làm thiệp, lập kế hoạch cá nhân...) hoặc đóng vai xử lý tình huống thực tế.
- Quan sát, hỗ trợ các nhóm thực hiện.
• Tổ chức triển lãm, chia sẻ sản phẩm trước lớp.`,
        studentActivity: `• Thực hành trải nghiệm theo nhóm hoặc cá nhân:
- Tự tay làm sản phẩm hoặc phân vai đóng vai xử lý tình huống.
- Tự tin mang sản phẩm lên trưng bày và giới thiệu ý nghĩa sản phẩm của mình trước lớp.`
      },
      {
        name: "4. Hoạt động Vận dụng (3 đến 5 phút)",
        objective: "Ứng dụng kỹ năng trải nghiệm vào cuộc sống hàng ngày tại gia đình và trường học.",
        teacherActivity: `• Hướng dẫn học sinh liên hệ thực tế, cam kết thực hiện thói quen tốt mỗi ngày.
• Nhận xét tiết học và dặn dò chuẩn bị cho tiết học sau.`,
        studentActivity: `• Nêu cam kết thực hiện hành động cụ thể tại nhà.
• Thu dọn đồ dùng học tập gọn gàng ngăn nắp.`
      }
    ];

    return { specificCompetencies, teacherMaterials, studentMaterials, activities };
  }

  // =========================================================================
  // 8. CÁC MÔN CÒN LẠI (TIN HỌC, CÔNG NGHỆ, GDTC, MĨ THUẬT)
  // =========================================================================
  if (subLower.includes("tin học") || subLower === "th") {
    const specificCompetencies = [
      `Nắm vững các thao tác và kiến thức cơ bản trong bài "${lessonTitle}". Rèn luyện Năng lực số (CV 3456/BGDĐT-GDTH) và tư duy máy tính.`,
      "Biết cách sử dụng thiết bị số an toàn, bảo vệ thông tin cá nhân trên môi trường mạng."
    ];
    const teacherMaterials = [
      "Phòng máy vi tính, máy chiếu/ti vi màn hình lớn, bài giảng trực quan, phần mềm thực hành mô phỏng.",
      "Tài liệu hướng dẫn an toàn thông tin số cho học sinh tiểu học."
    ];
    const studentMaterials = [
      `Sách giáo khoa Tin học Lớp ${grade}, vở thực hành, máy tính thực hành.`
    ];

    const activities: LessonActivity[] = [
      {
        name: "1. Hoạt động Khởi động (Warm-up - 5 phút)",
        objective: "Kích hoạt kiến thức số, tạo hứng thú bước vào phòng máy.",
        teacherActivity: `• Đặt câu hỏi đố vui về các bộ phận máy tính hoặc các biểu tượng phần mềm đã học.
• Dẫn dắt giới thiệu bài mới: "${lessonTitle}".`,
        studentActivity: `• Hào hứng giơ tay trả lời câu đố vui.
• Ổn định vị trí ngồi tại phòng máy tính, mở bài học trong SGK.`
      },
      {
        name: "2. Hoạt động Khám phá (12 đến 15 phút)",
        objective: `Quan sát giáo viên thao tác mẫu và nắm vững quy trình các bước trong bài: ${titleCore}.`,
        teacherActivity: `• GV thao tác mẫu từng bước trên màn hình máy chiếu, phân tích tỉ mỉ từng cú nhấp chuột, phím tắt và câu lệnh.
• Nhắc nhở các lưu ý quan trọng để tránh lỗi thao tác.
• Mời 1 học sinh lên thao tác lại thử một phần để cả lớp quan sát.`,
        studentActivity: `• Chú ý quan sát các thao tác của giáo viên trên màn hình lớn.
• Ghi nhớ quy trình từng bước thực hiện và thứ tự các nút lệnh vào vở.`
      },
      {
        name: "3. Hoạt động Luyện tập - Thực hành (12 đến 15 phút)",
        objective: "Trực tiếp thực hành thao tác trên máy tính, hoàn thành bài tập thực hành.",
        teacherActivity: `• Hướng dẫn học sinh bật máy, mở đúng phần mềm và bắt đầu thực hành bài tập trong SGK.
• GV đi quanh phòng máy, trực tiếp cầm tay chỉ việc, uốn nắn thao tác cho các học sinh còn lúng túng.
• Chấm bài và lưu sản phẩm của các em làm tốt.`,
        studentActivity: `• Bật máy tính, mở phần mềm và tự giác thao tác thực hành bài tập.
• Hỏi thầy cô hoặc nhờ bạn bên cạnh hướng dẫn khi gặp khó khăn.
• Hoàn thành sản phẩm thực hành và lưu tệp vào thư mục cá nhân.`
      },
      {
        name: "4. Hoạt động Vận dụng (3 đến 5 phút)",
        objective: "Ứng dụng kỹ năng số vào học tập và tuân thủ quy trình an toàn điện.",
        teacherActivity: `• Đưa ra câu hỏi ứng dụng thực tế về tìm kiếm thông tin an toàn hoặc vẽ tranh, soạn thảo văn bản.
• Hướng dẫn học sinh tắt máy tính đúng quy trình an toàn điện (Start -> Shut down).`,
        studentActivity: `• Nêu ứng dụng thực tế của bài học.
• Thực hiện tắt máy đúng quy trình, xếp gọn bàn phím và chuột, xếp ghế ngay ngắn trước khi rời phòng máy.`
      }
    ];

    return { specificCompetencies, teacherMaterials, studentMaterials, activities };
  }

  if (subLower.includes("công nghệ") || subLower === "cn") {
    const specificCompetencies = [
      `Hiểu cấu tạo, tác dụng và các bước sử dụng/lắp ráp an toàn trong bài: "${lessonTitle}".`,
      "Phát triển tư duy công nghệ, kỹ năng khéo léo và ý thức tiết kiệm năng lượng, an toàn lao động (STEM)."
    ];
    const teacherMaterials = [
      "Kế hoạch bài dạy, mô hình trực quan, thiết bị mẫu, video clip hướng dẫn thao tác an toàn."
    ];
    const studentMaterials = [
      `Sách giáo khoa Công nghệ Lớp ${grade}, bộ lắp ghép mô hình kỹ thuật / đồ dùng học tập.`
    ];

    const activities: LessonActivity[] = [
      {
        name: "1. Hoạt động Khởi động (Warm-up - 5 phút)",
        objective: "Quan sát sản phẩm công nghệ thực tế, kích thích trí tò mò.",
        teacherActivity: `• Cho học sinh quan sát một đồ dùng công nghệ quen thuộc trong gia đình (đèn bàn, quạt điện, mô hình xe...).
• Đặt câu hỏi gợi mở và giới thiệu bài mới: "${lessonTitle}".`,
        studentActivity: `• Quan sát mẫu vật, chia sẻ hiểu biết về công dụng của đồ dùng.
• Ghi tên bài học vào vở.`
      },
      {
        name: "2. Hoạt động Khám phá (12 đến 15 phút)",
        objective: `Tìm hiểu cấu tạo, nguyên lí và quy tắc an toàn của: ${titleCore}.`,
        teacherActivity: `• Hướng dẫn học sinh quan sát các bộ phận của sản phẩm trong SGK.
• Tổ chức thảo luận nhóm: Tìm hiểu chức năng của từng bộ phận và quy trình sử dụng an toàn.
• Chốt lại kiến thức cốt lõi và các bước thao tác chuẩn.`,
        studentActivity: `• Làm việc nhóm: Nhận diện từng bộ phận và chức năng của sản phẩm.
• Trình bày ý kiến trước lớp, tiếp thu quy tắc an toàn khi sử dụng.`
      },
      {
        name: "3. Hoạt động Luyện tập - Thực hành (12 đến 15 phút)",
        objective: "Thực hành lắp ghép hoặc lập quy trình sử dụng sản phẩm công nghệ đúng cách.",
        teacherActivity: `• Hướng dẫn học sinh thực hành theo nhóm: Lắp ghép mô hình hoặc viết bảng quy tắc sử dụng an toàn.
• Quan sát, hướng dẫn an toàn và hỗ trợ kỹ thuật cho các nhóm.`,
        studentActivity: `• Thực hành lắp ghép mô hình cẩn thận theo sơ đồ hướng dẫn.
• Cùng bạn kiểm tra độ chắc chắn và tính năng hoạt động của mô hình.`
      },
      {
        name: "4. Hoạt động Vận dụng (3 đến 5 phút)",
        objective: "Sử dụng đúng cách và an toàn các thiết bị công nghệ trong gia đình.",
        teacherActivity: `• Đặt câu hỏi liên hệ thực tế tại gia đình: "Em làm gì để sử dụng an toàn và tiết kiệm điện?"
• Dặn dò học sinh thu dọn dụng cụ gọn gàng.`,
        studentActivity: `• Nêu các việc làm tiết kiệm điện và an toàn tại nhà.
• Thu dọn bộ dụng cụ kỹ thuật ngăn nắp vào hộp.`
      }
    ];

    return { specificCompetencies, teacherMaterials, studentMaterials, activities };
  }

  if (subLower.includes("thể chất") || subLower.includes("gdtc") || subLower === "td") {
    const specificCompetencies = [
      `Thực hiện đúng kỹ thuật động tác trong bài "${lessonTitle}". Nâng cao thể lực, phản xạ nhanh nhẹn và tính kỷ luật.`,
      "Hình thành thói quen rèn luyện thân thể hàng ngày, biết giữ vệ sinh cá nhân và sân tập an toàn."
    ];
    const teacherMaterials = [
      "Sân tập sạch sẽ, an toàn, còi chỉ huy, tranh ảnh kỹ thuật động tác, dụng cụ thể thao (bóng, dây nhảy, nấm chiến thuật)."
    ];
    const studentMaterials = [
      "Trang phục thể thao gọn gàng, giày tập sạch sẽ, nước uống cá nhân."
    ];

    const activities: LessonActivity[] = [
      {
        name: "1. Hoạt động Khởi động (Warm-up - 6 đến 8 phút)",
        objective: "Làm nóng cơ thể, bôi trơn các khớp và phòng tránh chấn thương khi vận động.",
        teacherActivity: `• Tập hợp lớp: Thổi còi tập hợp 4 hàng ngang, điểm số, báo cáo sĩ số, phổ biến nội dung bài học: "${lessonTitle}".
• Khởi động chung:
- Cho học sinh xoay kỹ các khớp: cổ tay kết hợp cổ chân, khớp bả vai, cánh tay, hông, đầu gối.
- Cho học sinh chạy nhẹ nhàng 1 vòng quanh sân tập, sau đó đứng tại chỗ nhảy bật cao.
• Khởi động chuyên môn: Thực hiện một số động tác ép dọc, ép ngang nhẹ nhàng.`,
        studentActivity: `• Đứng ngay ngắn theo hàng ngũ, chú ý lắng nghe phổ biến bài học.
• Thực hiện xoay các khớp tích cực, đều đặn theo nhịp đếm 1-2-3-4, 5-6-7-8 của giáo viên/lớp trưởng.
• Chạy nhẹ nhàng quanh sân tập theo hàng, không xô đẩy bạn.`
      },
      {
        name: "2. Hoạt động Khám phá (8 đến 10 phút)",
        objective: `Quan sát và nắm vững yếu lĩnh kỹ thuật động tác của bài: ${titleCore}.`,
        teacherActivity: `• Thị phạm động tác mẫu:
- GV đứng ở vị trí thích hợp, thực hiện động tác mẫu hoàn chỉnh ở tốc độ bình thường để học sinh có biểu tượng đúng.
- Thực hiện lần 2 với tốc độ chậm, vừa làm vừa phân tích yếu lĩnh kỹ thuật từng nhịp, góc độ tay chân, tư thế thân người.
• Tập thử:
- Cho cả lớp tập thử theo từng nhịp đếm chậm của giáo viên.
- Quan sát, nhắc nhở những lỗi sai thường gặp (sai nhịp, sai góc độ tay, chân chưa thẳng).`,
        studentActivity: `• Chú ý quan sát giáo viên làm mẫu.
• Lắng nghe giải thích yếu lĩnh kỹ thuật từng động tác.
• Tập theo nhịp đếm của thầy cô, tự điều chỉnh tư thế tay chân cho chuẩn xác.`
      },
      {
        name: "3. Hoạt động Luyện tập (12 đến 15 phút)",
        objective: "Tập luyện thuần thục kỹ thuật động tác và tham gia trò chơi vận động hào hứng.",
        teacherActivity: `• Hình thức tập luyện:
- Tập đồng loạt cả lớp (2-3 lần) dưới sự chỉ huy của giáo viên.
- Chia tổ tập luyện luân phiên: Tổ trưởng điều khiển tổ mình tập luyện, GV đi từng tổ quan sát và sửa sai trực tiếp.
- Cho các tổ thi đua biểu diễn động tác trước lớp, cả lớp nhận xét chấm điểm.
• Tổ chức trò chơi vận động:
- Phổ biến luật chơi trò chơi thể thao rèn luyện sức nhanh, sự khéo léo (như cướp cờ, tiếp sức, chuyền bóng).
- Điều hành học sinh chơi trò chơi an toàn, hào hứng, khen ngợi đội chiến thắng.`,
        studentActivity: `• Tích cực luyện tập:
- Tập đồng loạt theo khẩu lệnh chỉ huy.
- Về khu vực của tổ, nghiêm túc tập luyện dưới sự điều khiển của tổ trưởng.
- Tự giác sửa động tác khi được thầy cô góp ý.
• Tham gia trò chơi vận động:
- Hào hứng tham gia trò chơi thể thao, tuân thủ đúng luật chơi và đảm bảo an toàn cho bạn.`
      },
      {
        name: "4. Hoạt động Vận dụng & Hồi tĩnh (5 phút)",
        objective: "Hồi tĩnh nhịp thở, thả lỏng các cơ và dặn dò tự rèn luyện thân thể.",
        teacherActivity: `• Thả lỏng, hồi tĩnh:
- Hướng dẫn học sinh thực hiện các động tác thả lỏng tay, chân, rũ cơ bắp, điều hòa nhịp thở.
• Đánh giá, dặn dò:
- Nhận xét buổi tập: Tuyên dương các tổ, cá nhân luyện tập nghiêm túc, động tác đẹp.
- Dặn dò học sinh duy trì thói quen tập thể dục buổi sáng tại nhà. Thổi còi giải tán: "Giải tán! - Khỏe!"`,
        studentActivity: `• Thả lỏng toàn thân nhịp nhàng theo tiếng đếm của giáo viên.
• Lắng nghe nhận xét buổi tập, hô to "KHỎE!" và trật tự giải tán về lớp.`
      }
    ];

    return { specificCompetencies, teacherMaterials, studentMaterials, activities };
  }

  if (subLower.includes("mĩ thuật") || subLower === "mt") {
    const specificCompetencies = [
      `Nhận biết và ứng dụng các yếu tố tạo hình (đường nét, màu sắc, hình khối, bố cục) trong bài "${lessonTitle}".`,
      "Sáng tạo sản phẩm mĩ thuật độc đáo từ các vật liệu quen thuộc, thân thiện với môi trường (STEM)."
    ];
    const teacherMaterials = [
      "Kế hoạch bài dạy, tranh ảnh tác phẩm mĩ thuật mẫu, bài giảng điện tử tương tác, bảng pha màu."
    ];
    const studentMaterials = [
      `Sách giáo khoa Mĩ thuật Lớp ${grade}, giấy vẽ A4, màu vẽ (sáp màu/dạ màu/màu nước), bút chì, tẩy, kéo, hồ dán.`
    ];

    const activities: LessonActivity[] = [
      {
        name: "1. Hoạt động Khởi động (Warm-up - 5 phút)",
        objective: "Kích hoạt cảm thụ thẩm mĩ, khơi gợi cảm xúc sáng tạo.",
        teacherActivity: `• Trưng bày một số bức tranh/sản phẩm mĩ thuật đẹp mắt về chủ đề bài học.
• Đặt câu hỏi: "Em ấn tượng nhất với chi tiết nào? Màu sắc trong tranh gợi cho em cảm xúc gì?"
• Giới thiệu bài mới: "${lessonTitle}".`,
        studentActivity: `• Quan sát các tác phẩm mẫu, hào hứng chia sẻ cảm nhận về đường nét, màu sắc.
• Chuẩn bị sẵn sàng đồ dùng vẽ trên bàn.`
      },
      {
        name: "2. Hoạt động Khám phá (10 đến 12 phút)",
        objective: `Tìm hiểu các yếu tố tạo hình và các bước thực hiện sản phẩm: ${titleCore}.`,
        teacherActivity: `• Hướng dẫn học sinh quan sát và phân tích các bước sáng tạo sản phẩm:
  + Bước 1: Phác họa bố cục chung (chọn mảng chính, mảng phụ).
  + Bước 2: Vẽ hình chi tiết các đối tượng.
  + Bước 3: Vẽ màu hài hòa, tạo độ đậm nhạt và điểm nhấn cho bức tranh.
• Hướng dẫn một số kỹ thuật pha màu hoặc phối hợp vật liệu tái chế.`,
        studentActivity: `• Quan sát các bước hướng dẫn của giáo viên trên bảng.
• Ghi nhớ quy trình từ phác hình đến vẽ màu hoàn thiện.
• Lựa chọn ý tưởng sáng tạo cho bức tranh của riêng mình.`
      },
      {
        name: "3. Hoạt động Luyện tập - Sáng tạo (15 đến 18 phút)",
        objective: "Học sinh thực hành sáng tạo sản phẩm mĩ thuật cá nhân hoặc theo nhóm nhỏ.",
        teacherActivity: `• Cho học sinh thực hành sáng tạo trên giấy A4 hoặc vật liệu thủ công.
• GV đi quanh lớp quan sát, gợi ý cách sắp xếp bố cục hợp lý, cách phối hợp màu sắc tươi sáng cho từng em.
• Khích lệ những ý tưởng sáng tạo độc đáo của học sinh.`,
        studentActivity: `• Say sưa, tập trung vẽ và hoàn thiện sản phẩm mĩ thuật của mình.
• Tự do thể hiện cảm xúc qua từng nét vẽ và mảng màu.
• Trao đổi ý tưởng nhẹ nhàng cùng bạn ngồi cạnh.`
      },
      {
        name: "4. Hoạt động Vận dụng - Trưng bày sản phẩm (5 phút)",
        objective: "Trưng bày 'Triển lãm mĩ thuật nhí', tự tin thuyết trình và nhận xét tác phẩm.",
        teacherActivity: `• Tổ chức cho học sinh dán bài lên bảng lớp tạo thành 'Phòng tranh nhí'.
• Mời một số học sinh tự giới thiệu về ý tưởng tác phẩm của mình.
• Hướng dẫn cả lớp nhận xét, đánh giá sản phẩm đẹp về bố cục, màu sắc và sự sáng tạo.
• Tổng kết, dặn dò giữ gìn đồ dùng mĩ thuật.`,
        studentActivity: `• Mang sản phẩm lên dán trên bảng trưng bày của lớp.
• Tự tin đứng trước lớp giới thiệu ý nghĩa bức tranh của mình.
• Ngắm tranh của các bạn, bình chọn những bức tranh mình yêu thích nhất.`
      }
    ];

    return { specificCompetencies, teacherMaterials, studentMaterials, activities };
  }

  // Generic fallback for any other custom subjects
  const specificCompetencies = [
    `Nắm vững kiến thức trọng tâm của bài: "${lessonTitle}". Thực hiện đúng các kỹ năng đặc thù môn ${subject} theo chuẩn chương trình GDPT 2018.`,
    "Phát triển năng lực tự chủ, hợp tác và giải quyết vấn đề linh hoạt trong thực tiễn."
  ];
  const teacherMaterials = [
    `Kế hoạch bài dạy, bài giảng điện tử tương tác, tranh ảnh minh họa môn ${subject} lớp ${grade}.`
  ];
  const studentMaterials = [
    `Sách giáo khoa môn ${subject} lớp ${grade}, vở ghi bài, đồ dùng học tập cá nhân.`
  ];

  const activities: LessonActivity[] = [
    {
      name: "1. Hoạt động Khởi động (Warm-up - 5 phút)",
      objective: "Tạo tâm thế học tập tích cực, kết nối kiến thức và dẫn dắt vào bài mới.",
      teacherActivity: `• Tổ chức trò chơi khởi động hoặc bài hát vui nhộn liên quan đến bài học.
• Đặt câu hỏi kết nối và giới thiệu bài mới: "${lessonTitle}". Ghi tựa bài lên bảng.`,
      studentActivity: `• Tham gia trò chơi vui vẻ, trả lời câu hỏi dẫn dắt của giáo viên.
• Nhắc lại tên bài học và ghi tựa bài vào vở cẩn thận.`
    },
    {
      name: "2. Hoạt động Khám phá (12 đến 15 phút)",
      objective: `Khám phá và hình thành kiến thức trọng tâm của bài: ${titleCore}.`,
      teacherActivity: `• Hướng dẫn học sinh quan sát ngữ liệu, hiện vật hoặc tình huống thực tế trong SGK.
• Đặt câu hỏi gợi mở, tổ chức cho học sinh thảo luận cặp đôi hoặc nhóm 4.
• Chuẩn hóa kiến thức, ghi các nội dung cốt lõi lên bảng.`,
      studentActivity: `• Quan sát ngữ liệu, chăm chú theo dõi bài giảng.
• Thảo luận nhóm sôi nổi, tìm câu trả lời và đại diện nhóm báo cáo kết quả trước lớp.
• Ghi nhớ nội dung trọng tâm vào vở.`
    },
    {
      name: "3. Hoạt động Luyện tập - Thực hành (12 đến 15 phút)",
      objective: "Củng cố và rèn luyện kỹ năng qua các bài tập và tình huống thực hành cụ thể.",
      teacherActivity: `• Giao nhiệm vụ luyện tập thực hành chi tiết từng bài tập trong SGK.
• Quan sát, hướng dẫn các em học sinh gặp khó khăn; tổ chức chữa bài mẫu và đánh giá.`,
      studentActivity: `• Tích cực làm bài tập cá nhân hoặc theo nhóm nhỏ.
• Lên bảng chữa bài, nhận xét và kiểm tra kết quả chéo cùng bạn.`
    },
    {
      name: "4. Hoạt động Vận dụng (3 đến 5 phút)",
      objective: "Vận dụng kiến thức bài học vào thực tế cuộc sống hàng ngày.",
      teacherActivity: `• Đưa ra tình huống vận dụng thực tiễn, củng cố kiến thức và dặn dò chuẩn bị cho tiết học sau.`,
      studentActivity: `• Nêu cách giải quyết tình huống thực tế, liên hệ bản thân và ghi nhớ dặn dò của giáo viên.`
    }
  ];

  return { specificCompetencies, teacherMaterials, studentMaterials, activities };
}
