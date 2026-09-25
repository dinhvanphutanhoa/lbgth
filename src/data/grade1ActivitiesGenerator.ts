import { LessonActivity } from "../types";
import { DetailedActivitiesResult } from "./detailedActivitiesGenerator";
import { getTrafficSafetyLesson } from "./trafficSafetyCurriculum";

// Helper to clean lesson title
function cleanTitle(title: string): string {
  return title
    .replace(/^tiết\s+\d+[:\s-]*/i, "")
    .replace(/^bài\s+\d+[:\s-]*/i, "")
    .replace(/\(tiết\s+\d+\)/gi, "")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Extracts specific Grade 1 textbook target letters, sounds, or numbers
 */
function extractTargetContent(title: string): { letterSound?: string; mathTopic?: string } {
  const tLower = title.toLowerCase();
  
  // Check letter/sound like "A a", "B b", "C c", "E e", "O o", etc.
  const letterMatch = title.match(/Bài\s+\d+:\s*([A-Za-zÀ-ỹ\s,/-]+?)(?:\(|$)/i);
  const letterSound = letterMatch ? letterMatch[1].trim() : undefined;

  return { letterSound, mathTopic: title };
}

/**
 * GENERATOR CHUYÊN BIỆT CHO LỚP 1:
 * Đưa chi tiết từng trang sách giáo khoa, từng bức tranh minh họa, thẻ chữ, bảng gài,
 * que tính, bảng con, Vở Tập viết / Vở Bài tập vào cột HOẠT ĐỘNG CỦA HỌC SINH (HĐHS) và GV.
 */
export function getGrade1DetailedActivities(params: {
  subject: string;
  subSubject?: string;
  lessonTitle: string;
  curriculumPeriod: number | string;
  week: number;
  session?: string;
  integrationNotes?: string;
}): DetailedActivitiesResult {
  const { subject, subSubject = "", lessonTitle, curriculumPeriod, week, session = "Sáng" } = params;
  const subLower = subject.toLowerCase().trim();
  const subSubLower = subSubject.toLowerCase().trim();
  const titleCore = cleanTitle(lessonTitle);

  // =========================================================================
  // 1. MÔN TOÁN LỚP 1 (MATHEMATICS GRADE 1)
  // Bám sát SGK Toán 1 (Kết nối tri thức / GDPT 2018)
  // =========================================================================
  if (subLower.includes("toán") || subLower === "t" || subSubLower.includes("toán")) {
    const isFirstLesson = titleCore.toLowerCase().includes("tiết học đầu tiên") || titleCore.toLowerCase().includes("làm quen");
    const isComparing = titleCore.toLowerCase().includes("nhiều hơn") || titleCore.toLowerCase().includes("ít hơn") || titleCore.toLowerCase().includes("so sánh") || titleCore.toLowerCase().includes("bằng nhau");
    const isShapes = titleCore.toLowerCase().includes("hình vuông") || titleCore.toLowerCase().includes("hình tròn") || titleCore.toLowerCase().includes("hình tam giác") || titleCore.toLowerCase().includes("hình phẳng");
    const isAddition = titleCore.toLowerCase().includes("phép cộng") || titleCore.toLowerCase().includes("cộng trong phạm vi");
    const isSubtraction = titleCore.toLowerCase().includes("phép trừ") || titleCore.toLowerCase().includes("trừ trong phạm vi");

    const specificCompetencies = [
      `Học sinh nhận biết, đếm, đọc và viết đúng các số hoặc hình học trong bài: "${lessonTitle}".`,
      `Biết sử dụng bộ que tính, khối lập phương, thẻ số trong Bộ đồ dùng học Toán 1; thực hiện đúng các bài tập trong SGK Toán 1 và Vở bài tập Toán 1.`,
      `Rèn luyện kỹ năng quan sát tranh, diễn đạt bằng ngôn ngữ toán học ban đầu và biết liên hệ số lượng đồ vật trong lớp học, gia đình.`
    ];

    const teacherMaterials = [
      `Kế hoạch bài dạy, bài giảng điện tử tương tác minh họa tranh SGK Toán 1 bài: ${lessonTitle}.`,
      "Bộ đồ dùng dạy Toán 1 của GV: que tính to, bảng gài số, các mô hình khối lập phương, thẻ số từ 0 đến 10, tranh phóng to các bài tập trong SGK.",
      "Phiếu bài tập mở rộng, phần thưởng bông hoa điểm tốt khích lệ học sinh."
    ];

    const studentMaterials = [
      "Sách giáo khoa Toán 1 (Bộ Kết nối tri thức với cuộc sống), Vở bài tập Toán 1 tập 1.",
      "Bộ đồ dùng học Toán 1 của học sinh: hộp que tính, bảng gài, các thẻ số 0-10, các hình phẳng (hình vuông, tròn, tam giác, chữ nhật), khối lập phương nhỏ.",
      "Bảng con, phấn trắng, khăn lau bảng, bút chì, tẩy gôm."
    ];

    let act2Teacher = "";
    let act2Student = "";
    let act3Teacher = "";
    let act3Student = "";

    if (isFirstLesson) {
      act2Teacher = `• Bước 1: Hướng dẫn HS mở và làm quen với Sách giáo khoa Toán 1
- GV giơ cuốn SGK Toán 1 lên, giới thiệu trang bìa (hình các bạn nhỏ và chú Rô-bốt vui vẻ học Toán).
- Hướng dẫn HS cách mở sách nhẹ nhàng từ góc trang, không làm gấp mép sách; chỉ cho HS xem mục lục, các biểu tượng (ngôi sao, bóng đèn, bàn tay khám phá, chú ong chăm chỉ).
• Bước 2: Hướng dẫn nhận biết và sử dụng Bộ đồ dùng học Toán 1
- GV mở hộp đồ dùng mẫu của GV, lần lượt giơ từng đồ vật: Que tính (các màu xanh, đỏ, vàng), các khối vuông lập phương nhỏ, các thẻ chấm tròn, thẻ chữ số từ 0 đến 10 và các dấu (+, -, =, >, <).
- Hướng dẫn HS cách đặt đồ dùng lên góc trên bên phải bàn học, cách lấy que tính ra nhẹ nhàng không gây tiếng ồn, cách xếp que tính ngay ngắn trên bàn.
• Bước 3: Rèn luyện quy ước hiệu lệnh học Toán trong lớp
- GV hướng dẫn 3 hiệu lệnh cơ bản: Gõ thước lần 1: Chuẩn bị bảng con/đồ dùng; Gõ thước lần 2: Bắt đầu làm bài; Gõ thước lần 3: Giơ bảng con/dừng tay.
- Cho cả lớp thực hành các hiệu lệnh nhiều lần cho thuần thục.`;

      act2Student = `• Làm quen với cuốn Sách giáo khoa Toán 1:
- HS đặt ngay ngắn cuốn SGK Toán 1 lên bàn trước mặt.
- Mở từng trang sách theo hướng dẫn của GV; quan sát bạn Rô-bốt, bạn Mai, bạn Nam trên trang bìa và trang 4, trang 5.
- Dùng ngón tay trỏ chỉ vào từng biểu tượng: hình chú ong (bài tập), bàn tay (khám phá), ngôi sao (thử thách).
• Khám phá Bộ đồ dùng học Toán 1:
- HS mở hộp đồ dùng Toán cá nhân, nhẹ nhàng đặt lên góc bàn.
- Lần lượt lấy theo hiệu lệnh của cô giáo: Giơ 1 que tính màu đỏ lên -> đặt xuống; lấy thẻ số 1 -> đặt vào bảng gài; cầm 1 khối lập phương nhỏ xoay các mặt quan sát.
- Nhắc lại tên các đồ dùng cùng bạn cùng bàn: "Đây là que tính", "Đây là thẻ số", "Đây là khối lập phương".
• Thực hiện các hiệu lệnh học tập:
- Nghe tiếng gõ thước của GV, đồng loạt thực hiện tư thế: Ngồi ngay ngắn, hai tay để trên bàn; lấy bảng con ra sẵn sàng; giơ bảng con hai tay ngang ngực; úp bảng con xuống mặt bàn nhẹ nhàng.`;

      act3Teacher = `• Tổ chức thực hành thao tác sắp xếp đồ dùng và tư thế học Toán:
- Bài 1 (Nhận biết đồ dùng): Cho HS thi đua lấy nhanh đồ dùng theo lời gọi: "Cô cần 3 que tính màu xanh" -> HS lấy và giơ lên.
- Bài 2 (Thực hành bảng con): Hướng dẫn HS cách cầm phấn bằng 3 ngón tay, viết thử các nét thẳng, nét xiên ngắn lên bảng con; cách cầm khăn lau bảng từ trên xuống dưới sạch sẽ không bụi.
- Bài 3 (Tư thế ngồi học): Uốn nắn tư thế ngồi: Lưng thẳng, mắt cách mặt bàn 25-30 cm, ngực không tì vào mép bàn. Khen ngợi các tổ ngồi đẹp.`;

      act3Student = `• Thực hành tương tác với đồ dùng:
- HS lắng nghe khẩu lệnh của cô giáo: Nhanh tay chọn đúng 3 que tính màu xanh trong hộp giơ lên trước ngực; thi đua xem tổ nào lấy nhanh và trật tự nhất.
- Đặt que tính lại ngay ngắn vào hộp đồ dùng, đóng nắp hộp cẩn thận.
• Luyện tập với bảng con:
- Cầm viên phấn bằng 3 ngón tay phải; đặt bảng con lên bàn, viết các nét gạch thẳng thử nghiệm.
- Nghe tiếng gõ thước, cả lớp đồng loạt giơ bảng con bằng hai tay, mỉm cười tự tin.
- Dùng khăn ẩm lau sạch bảng con, cất bảng và phấn vào ngăn bàn ngay ngắn.
• Rèn luyện tư thế:
- Tự điều chỉnh lưng thẳng, không tì ngực vào bàn, hai chân để song song chạm sàn.`;
    } else if (isComparing) {
      act2Teacher = `• Bước 1: Tiếp cận tình huống so sánh qua tranh SGK Toán 1
- GV chiếu tranh tình huống SGK trang bài học (hoặc tranh phóng to): Tranh vẽ bạn Mai có 3 bông hoa, bạn Nam có 2 bông hoa; hoặc tranh đàn bướm và đàn hoa.
- GV hỏi: "Trong tranh có mấy bạn nhỏ? Mỗi bạn có bao nhiêu bông hoa? Muốn biết ai có nhiều hơn, ta làm thế nào?".
• Bước 2: Thao tác ghép đôi 1 - 1 trên bộ que tính và bảng gài
- GV hướng dẫn HS lấy 3 chấm tròn màu đỏ đặt ở hàng trên, lấy 2 chấm tròn màu xanh đặt ở hàng dưới.
- Hướng dẫn HS nối từng chấm tròn đỏ với một chấm tròn xanh: "Chấm tròn đỏ thừa ra 1 cái. Vậy số chấm tròn đỏ nhiều hơn số chấm tròn xanh; số chấm tròn xanh ít hơn số chấm tròn đỏ".
• Bước 3: Chuẩn hóa kiến thức & Giới thiệu thuật ngữ so sánh
- GV ghi bảng: "Nhiều hơn", "Ít hơn", "Bằng nhau" (hoặc các dấu >, <, =).
- Cho HS đọc to các từ/dấu nhiều lần để khắc sâu biểu tượng.`;

      act2Student = `• Quan sát tranh tình huống trong SGK Toán 1:
- HS mở SGK Toán 1 trang bài học, dùng ngón tay chỉ vào từng nhân vật trong tranh.
- Đếm to cùng bạn cùng bàn: "Mai có 1, 2, 3 bông hoa; Nam có 1, 2 bông hoa".
- Xung phong trả lời câu hỏi: "Thưa cô, bạn Mai có nhiều hoa hơn bạn Nam ạ!".
• Thao tác trên bộ đồ dùng học Toán 1:
- HS lấy bảng gài đặt trước mặt.
- Hàng trên: Gài 3 que tính (hoặc 3 chấm tròn đỏ).
- Hàng dưới: Gài 2 que tính (hoặc 2 chấm tròn xanh) thẳng cột với que tính ở hàng trên.
- Dùng ngón tay chỉ vào que tính thừa ra ở hàng trên và nói: "3 que tính nhiều hơn 2 que tính; 2 que tính ít hơn 3 que tính".
• Đọc to thuật ngữ bài học:
- Cá nhân nối tiếp đọc: "Nhiều hơn" - "Ít hơn" - "Bằng nhau".
- Cả lớp đồng thanh nhắc lại, ghi nhớ cách so sánh bằng việc ghép đôi 1 - 1.`;

      act3Teacher = `• Hướng dẫn giải quyết từng bài tập trong SGK Toán 1:
- Bài 1 (SGK trang bài tập - Nối tranh và so sánh):
  + Yêu cầu HS quan sát tranh mẫu bài 1 (nồi và nắp nồi, hoặc thìa và cốc).
  + Hỏi: "Có bao nhiêu cái nồi? Có bao nhiêu cái nắp? Số nồi và số nắp như thế nào với nhau?".
  + Hướng dẫn HS dùng bút chì nối từng cái nồi với 1 cái nắp trong SGK.
- Bài 2 (SGK trang bài tập - Điền từ hoặc khoanh vào nhóm nhiều hơn/ít hơn):
  + Hướng dẫn HS đếm số con thỏ và củ cà rốt; khoanh tròn vào nhóm có số lượng nhiều hơn.
  + Quan sát từng bàn, uốn nắn cách cầm bút chì và khoanh hình của HS.
- Bài 3 (SGK trang bài tập - Thao tác so sánh số):
  + Yêu cầu HS so sánh hai số: 4 và 3; 2 và 5; 1 và 1.
  + Hướng dẫn HS viết dấu hoặc giơ thẻ so sánh tương ứng.`;

      act3Student = `• Thực hành trực tiếp trong SGK và Vở bài tập Toán 1:
- Bài 1 (SGK):
  + Dùng ngón tay chỉ đếm: Có 3 cái nồi, có 3 cái nắp.
  + Cầm bút chì, nối 1 cái nồi với 1 cái nắp thẳng hàng.
  + Nói to kết quả: "Số nồi bằng số nắp ạ!".
- Bài 2 (SGK):
  + Đếm số thỏ: 1, 2, 3, 4 con thỏ. Đếm số cà rốt: 1, 2, 3 củ cà rốt.
  + Dùng bút chì khoanh tròn vào nhóm các chú thỏ trong SGK.
  + Giải thích: "Vì 4 con thỏ nhiều hơn 3 củ cà rốt nên con khoanh vào nhóm thỏ".
- Bài 3 (SGK):
  + Nhìn các cặp số trong SGK: 4 và 3.
  + Lấy bảng con viết: 4 nhiều hơn 3 (hoặc điền dấu >); giơ bảng con dõng dạc báo cáo kết quả.
  + Đổi SGK với bạn cùng bàn để kiểm tra chéo nét vẽ và kết quả nối hình.`;
    } else {
      // General Math 1 (Numbers, Addition, Subtraction, Shapes)
      act2Teacher = `• Bước 1: Khám phá kiến thức mới qua tranh minh họa SGK Toán 1
- GV chiếu hình ảnh bài học trong SGK Toán 1 (ví dụ bài ${titleCore}): Tranh vẽ các con vật, đồ vật, bông hoa và các chấm tròn tương ứng.
- Đặt câu hỏi đàm thoại dẫn dắt: "Quan sát tranh trong SGK, các em đếm xem có mấy chú chim? Có mấy chấm tròn? Bạn Rô-bốt đang chỉ vào số mấy?".
• Bước 2: Thao tác với Bộ đồ dùng học Toán 1 của học sinh
- Yêu cầu HS lấy trong hộp đồ dùng số lượng que tính / khối lập phương đúng bằng số lượng đồ vật trong tranh SGK.
- GV làm mẫu trên bảng gài của GV: Đặt 1 khối lập phương -> Gài thẻ số tương ứng -> Cho cả lớp quan sát.
- Hướng dẫn HS đặt que tính/khối lập phương ngay ngắn lên bàn, gài thẻ chữ số tương ứng bên cạnh.
• Bước 3: Hướng dẫn đọc số và quy trình viết số vào bảng con
- GV phát âm mẫu tên số/phép tính (Ví dụ: "Số 1", "Số 2", "1 cộng 1 bằng 2").
- GV viết mẫu lên bảng lớp có kẻ ô ly: Phân tích độ cao chữ số (cao 2 ô ly, rộng 1 ô ly), điểm đặt bút, thứ tự viết các nét (nét xiên, nét sổ thẳng, nét cong, nét lượn...).
- Cho HS viết bóng bằng ngón tay trỏ trên không trung trước khi viết bảng con.`;

      act2Student = `• Quan sát tranh và đếm đồ vật trong SGK Toán 1:
- HS mở SGK Toán 1 trang bài học, chỉ ngón tay vào từng con vật/đồ vật trong bức tranh khám phá.
- Đếm to, dõng dạc: "1 chú chim, 2 chú vịt, 3 bông hoa...".
- Quan sát ô chấm tròn bên cạnh tranh SGK: Đếm 1 chấm tròn, 2 chấm tròn...
• Thao tác trên bộ đồ dùng học Toán 1:
- HS mở hộp đồ dùng, lấy ra số que tính hoặc khối lập phương tương ứng đặt lên bàn học.
- Tìm thẻ chữ số tương ứng (ví dụ thẻ số 1, 2, 3...) gài vào bảng gài trước mặt.
- Giơ ngón tay đếm lại để kiểm tra: "1, 2, 3 - có tất cả 3 que tính, con gài thẻ số 3".
• Luyện phát âm số và tập viết số trên không trung:
- Cá nhân nối tiếp đọc to chữ số: "Số một", "Số hai", "Số ba" (hoặc đọc phép tính).
- Cả lớp đồng thanh đọc lại 2-3 lần theo que chỉ của cô giáo.
- Giơ ngón tay trỏ lên không trung, hướng mắt về bảng lớp, viết bóng theo từng nét cô giáo vừa hướng dẫn: Đặt bút từ đường kẻ 2 lia lên đường kẻ 3, kéo nét sổ thẳng xuống đường kẻ 1.`;

      act3Teacher = `• Tổ chức thực hành các bài tập trong SGK Toán 1:
- Bài 1 (SGK trang bài tập - Đếm số lượng và viết số):
  + Yêu cầu HS quan sát từng ô hình trong SGK: Có mấy quả táo? Có mấy cái kẹo?
  + Hướng dẫn HS dùng bút chì viết số vào ô tròn dưới mỗi hình trong SGK (hoặc viết vào bảng con).
  + GV đi quan sát, uốn nắn từng em cách cầm bút chì và hướng viết con số.
- Bài 2 (SGK trang bài tập - Nối đồ vật với thẻ số thích hợp):
  + Hướng dẫn HS đếm số chấm tròn của quân xúc xắc hoặc số ngón tay xòe ra trong tranh SGK.
  + Dùng thước kẻ và bút chì nối nhóm đồ vật với số tương ứng ở giữa.
- Bài 3 (SGK trang bài tập - Luyện viết số vào bảng con và Vở bài tập Toán):
  + Cho HS viết 2 dòng số bài học vào bảng con. GV nhận xét, sửa nét chữ chưa chuẩn.
  + Hướng dẫn HS mở Vở bài tập Toán 1 trang tương ứng, làm các bài tập tô số và đếm hình.`;

      act3Student = `• Làm bài tập trực tiếp trong SGK và Vở bài tập Toán 1:
- Bài 1 (SGK):
  + Dùng ngón tay chỉ vào hình con bướm trong SGK, đếm: 1, 2 - có 2 con bướm.
  + Dùng bút chì viết số 2 nắn nót vào ô vuông dưới hình vẽ.
  + Tiếp tục đếm các hình còn lại và điền số chính xác.
- Bài 2 (SGK):
  + Quan sát bàn tay xòe ngón trong tranh SGK: Đếm 1, 2, 3 ngón tay.
  + Đặt thước kẻ, dùng bút chì nối từ hình bàn tay đến ô có chữ số 3.
  + Tự hào giơ sách lên khoe bạn cùng bàn: "Tớ nối xong bài 2 rồi!".
- Bài 3 (Bảng con & VBT Toán 1):
  + Cầm phấn viết số vào bảng con theo hàng kẻ; giữ khoảng cách giữa các số bằng một ngón tay.
  + Nghe lệnh thước, đồng loạt giơ bảng con lên ngang ngực cho cô giáo kiểm tra.
  + Mở Vở bài tập Toán 1, ngồi thẳng lưng, dùng bút chì tô các chữ số theo nét chấm mờ và làm bài tập đếm hình.`;
    }

    const activities: LessonActivity[] = [
      {
        name: "1. Hoạt động Khởi động (Warm-up - 5 phút)",
        objective: "Tạo tâm thế vui vẻ, kích hoạt khả năng đếm số và phản xạ nhanh của học sinh lớp 1.",
        teacherActivity: `• Tổ chức bài hát vận động hoặc trò chơi đếm số vui nhộn:
- Bắt nhịp cho cả lớp hát và làm động tác theo bài hát: "Tập đếm" ("Một với một là hai, hai thêm hai là bốn...") hoặc "Một con vịt".
- Đố vui nhanh: "Cô vỗ mấy tiếng tay, các em đếm và giơ số ngón tay tương ứng nhé!".
• Dẫn dắt kết nối bài mới:
- GV chiếu tranh bìa bài học trong SGK Toán 1: "${lessonTitle}".
- Giới thiệu bài học mới, ghi tựa bài lên bảng lớp thật nắn nót.`,
        studentActivity: `• Hào hứng khởi động cùng bài hát và trò chơi:
- Đứng tại chỗ, vỗ tay và hát vang bài hát "Tập đếm" theo nhịp điệu vui tươi.
- Lắng nghe tiếng cô giáo vỗ tay: Nghe cô vỗ 3 tiếng -> xòe nhanh 3 ngón tay lên trước ngực và nói to: "Ba tiếng vỗ tay ạ!".
• Tiếp nhận bài học mới:
- Mắt hướng lên bảng, lắng nghe cô giới thiệu bài học hôm nay trong SGK Toán 1.
- 2-3 bạn nhắc lại tên bài học: "${lessonTitle}".
- Đặt SGK Toán 1 và hộp đồ dùng lên mặt bàn ngay ngắn sẵn sàng học bài.`
      },
      {
        name: "2. Hoạt động Khám phá (Hình thành kiến thức mới - 12 đến 15 phút)",
        objective: `Học sinh quan sát tranh SGK Toán 1, thao tác trực tiếp với que tính, thẻ số trong bộ đồ dùng để khám phá kiến thức bài: ${titleCore}.`,
        teacherActivity: act2Teacher,
        studentActivity: act2Student
      },
      {
        name: "3. Hoạt động Luyện tập - Thực hành (12 đến 15 phút)",
        objective: "Học sinh hoàn thành các bài tập trong SGK Toán 1 và VBT, rèn kỹ năng viết số vào bảng con đúng ô ly.",
        teacherActivity: act3Teacher,
        studentActivity: act3Student
      },
      {
        name: "4. Hoạt động Vận dụng - Mở rộng (3 đến 5 phút)",
        objective: "Liên hệ kiến thức toán học vào đếm các đồ vật xung quanh lớp học và gia đình.",
        teacherActivity: `• Tổ chức trò chơi: "Tìm nhanh đồ vật quanh em"
- GV nêu thử thách: "Hãy quan sát xung quanh lớp học của chúng ta và tìm các đồ vật có số lượng đúng bằng bài học hôm nay!".
- Mời các bạn giơ tay nhanh nhất lên chỉ và đếm đồ vật trước lớp.
• Củng cố, dặn dò:
- Tuyên dương các tổ học tập sôi nổi, giữ trật tự và lấy đồ dùng nhanh nhẹn.
- Dặn dò HS về nhà mở SGK Toán 1 trang bài học, đếm đồ vật trong nhà cho bố mẹ nghe và hoàn thành Vở bài tập Toán.`,
        studentActivity: `• Tham gia tìm đồ vật trong lớp học:
- HS quan sát lớp học, hào hứng giơ tay:
  + "Thưa cô, lớp mình có 1 bảng đen to ạ!".
  + "Thưa cô, tổ con có 3 dãy bàn ạ!".
  + "Thưa cô, con đếm được có 2 chiếc quạt trần đang quay ạ!".
• Thu dọn đồ dùng và ghi nhớ:
- Xếp gọn que tính, thẻ số vào hộp đồ dùng học Toán, đậy nắp cẩn thận.
- Cất bảng con và SGK vào ngăn bàn ngăn nắp.
- Ghi nhớ lời cô dặn để tối về khoe bài học đếm số với ông bà, bố mẹ.`
      }
    ];

    return { specificCompetencies, teacherMaterials, studentMaterials, activities };
  }

  // =========================================================================
  // 2. MÔN TIẾNG VIỆT LỚP 1 (VIETNAMESE GRADE 1)
  // Bám sát SGK Tiếng Việt 1 (Kết nối tri thức / Cánh diều / GDPT 2018)
  // =========================================================================
  if (subLower.includes("tiếng việt") || subLower === "tv" || subSubLower.includes("tiếng việt")) {
    const isOrientation = titleCore.toLowerCase().includes("làm quen") || titleCore.toLowerCase().includes("tư thế") || titleCore.toLowerCase().includes("nét cơ bản");
    const isReviewStory = titleCore.toLowerCase().includes("ôn tập") || titleCore.toLowerCase().includes("kể chuyện");

    const specificCompetencies = [
      `Học sinh nhận biết đúng âm, chữ cái, thanh điệu hoặc nét viết trong bài SGK Tiếng Việt 1: "${lessonTitle}".`,
      `Biết sử dụng bộ chữ gài ghép tiếng mới; đánh vần đúng và đọc trơn từ ngữ, câu ứng dụng trong SGK Tiếng Việt 1; viết đúng quy trình chữ cái và tiếng vào bảng con và Vở Tập viết 1.`,
      `Phát triển kỹ năng quan sát tranh minh họa trong SGK, nói câu trọn vẹn theo chủ điểm và biết lắng nghe, tôn trọng bạn bè.`
    ];

    const teacherMaterials = [
      `Kế hoạch bài dạy, bài giảng điện tử (PPTX) phóng to các tranh khởi động, tranh từ ngữ ứng dụng trong SGK Tiếng Việt 1.`,
      "Bộ chữ biểu diễn của giáo viên (thẻ chữ in hoa, in thường, chữ viết mẫu phóng to 4 ô ly trên bảng phụ), bảng gài lớp.",
      "Vở Tập viết 1, que chỉ bảng, phần thưởng ngôi sao chăm chỉ."
    ];

    const studentMaterials = [
      "Sách giáo khoa Tiếng Việt 1 (Tập 1), Vở Tập viết 1 (Tập 1), Vở bài tập Tiếng Việt 1.",
      "Bộ đồ dùng học Tiếng Việt 1 của học sinh: Bảng gài cá nhân, hộp thẻ chữ cái và dấu thanh.",
      "Bảng con có kẻ ô ly tiểu học, phấn trắng, khăn lau bảng ẩm, bút chì 2B, tẩy gôm."
    ];

    let act1Teacher = "";
    let act1Student = "";
    let act2Teacher = "";
    let act2Student = "";
    let act3Teacher = "";
    let act3Student = "";

    if (isOrientation) {
      // Tuần 1: Làm quen với trường lớp, tư thế đọc viết, nét cơ bản
      act1Teacher = `• Khởi động tạo không khí thân thiện:
- Bắt nhịp bài hát: "Đi học" hoặc "Ngày đầu tiên đi học".
- Trò chuyện với các em: "Hôm nay là những ngày đầu tiên các em bước vào lớp 1. Trường học có điều gì mới mẻ khiến em thích thú nhất?".
• Giới thiệu bài học:
- Dẫn dắt vào bài làm quen nền nếp học tập và tư thế đọc viết chuẩn GDPT 2018.`;

      act1Student = `• Hào hứng hát và giao lưu:
- Hát vang bài hát cùng cả lớp, vỗ tay nhịp nhàng.
- 2-3 học sinh mạnh dạn đứng lên chia sẻ: "Con rất vui vì được gặp cô giáo mới và nhiều bạn mới ạ!".
• Lắng nghe cô giới thiệu bài học làm quen đầu năm học lớp 1.`;

      act2Teacher = `• Bước 1: Khám phá tư thế ngồi đọc, viết đúng chuẩn qua tranh SGK
- GV chiếu tranh trong SGK Tiếng Việt 1 bài Làm quen: Tranh vẽ bạn nhỏ ngồi đọc sách ngay ngắn và bạn nhỏ ngồi viết đúng tư thế.
- Đặt câu hỏi: "Các em quan sát bạn nhỏ trong tranh ngồi như thế nào? Lưng bạn có thẳng không? Mắt bạn cách sách khoảng bao xa? Chân bạn để như thế nào?".
- GV làm mẫu trực tiếp trước lớp: Ngồi thẳng lưng, ngực cách mép bàn 1 nắm tay, đầu hơi cúi, hai chân vuông góc với sàn nhà, tay trái giữ mép vở, tay phải cầm bút.
• Bước 2: Hướng dẫn cách cầm bút chì và đặt bảng con
- Hướng dẫn quy tắc cầm bút bằng 3 ngón tay (ngón cái, ngón trỏ và ngón giữa): Ngón cái và ngón trỏ giữ hai bên thân bút, ngón giữa đỡ dưới bút, cách đầu ngòi bút khoảng 2,5 cm.
- Yêu cầu cả lớp cầm bút chì lên thực hành, GV đi từng bàn uốn nắn từng ngón tay cho HS.
• Bước 3: Làm quen với các nét cơ bản (nét thẳng, ngang, xiên, móc, cong)
- GV vẽ mẫu các nét lên bảng ô ly: Nét thẳng đứng (từ trên xuống), nét ngang (từ trái sang phải), nét xiên trái, nét xiên phải, nét móc xuôi, nét móc ngược, nét cong kín (chữ O).
- Gọi tên từng nét, yêu cầu HS dùng ngón tay vẽ trên không trung (viết bóng).`;

      act2Student = `• Quan sát và phân tích tranh trong SGK:
- Mở SGK Tiếng Việt 1 trang bài Làm quen, quan sát kỹ bạn nhỏ trong tranh.
- Đồng thanh trả lời: "Bạn nhỏ ngồi lưng thẳng, hai chân để bằng phẳng, tay cầm bút bằng 3 ngón tay ạ!".
• Rèn luyện tư thế cầm bút chì:
- HS cầm bút chì bằng bàn tay phải, đặt ngón trỏ ở trên, ngón cái bên trái, ngón giữa đỡ bên dưới.
- Tự kiểm tra xem ngón tay có bị gập quá chặt không; giơ bút lên cho cô giáo kiểm tra.
• Tập nhận diện và vẽ nét trên không trung:
- Dùng ngón tay trỏ giơ lên cao, nhìn theo que chỉ của cô và vẽ bóng theo từng nét:
  + "Nét thẳng đứng: Kéo từ trên xuống dưới!".
  + "Nét ngang: Kéo từ trái sang phải!".
  + "Nét cong kín: Uốn cong tròn như quả trứng gà!".`;

      act3Teacher = `• Tổ chức luyện tập viết các nét vào bảng con:
- GV yêu cầu HS lấy bảng con đặt ngay ngắn lên mặt bàn.
- Hướng dẫn HS xác định đường kẻ đậm (đường kẻ số 1) và các đường kẻ 2, 3, 4 trên bảng con.
- Cho HS viết 2 nét thẳng đứng cao 2 ô ly -> GV gõ thước kiểm tra đồng loạt -> nhận xét.
- Tiếp tục cho HS viết nét xiên, nét móc và nét cong kín.
• Hướng dẫn mở Vở Tập viết 1:
- Hướng dẫn HS mở Vở Tập viết 1 bài nét cơ bản, ngồi đúng tư thế, cầm bút chì nắn nót tô theo các nét chấm mờ trong vở.
- Đi từng bàn cầm tay hỗ trợ các em còn yếu cơ tay.`;

      act3Student = `• Luyện viết trên bảng con:
- Đặt bảng con ngay ngắn; cầm phấn bằng 3 ngón tay.
- Đặt phấn ở đường kẻ 3, kéo thẳng xuống đường kẻ 1 viết nét thẳng đứng.
- Nghe hiệu lệnh thước của cô: Đồng loạt giơ bảng con hai tay ngay ngắn trước ngực.
- Lắng nghe cô nhận xét, lau sạch bảng bằng khăn ẩm và tiếp tục viết nét tiếp theo.
• Tô nét trong Vở Tập viết 1:
- Mở Vở Tập viết 1 trang bài học, ngồi thẳng lưng, mắt không sát mặt vở.
- Cầm bút chì tô thật khéo léo theo từng đường nét chấm mờ, cố gắng không để chệch nét ra ngoài.`;
    } else if (isReviewStory) {
      // Bài Ôn tập & Kể chuyện (Bài 5, 10, 15...)
      act1Teacher = `• Khởi động qua trò chơi: "Đố bạn chữ gì?"
- GV giơ các thẻ chữ cái đã học trong tuần (ví dụ: a, b, c, e, ê, d, đ...), cho cả lớp đọc to đồng thanh.
- Giới thiệu tiết Ôn tập và kể chuyện theo tranh trong SGK Tiếng Việt 1.`;

      act1Student = `• Đọc to các chữ cái theo thẻ cô giáo giơ: "Chữ A", "Chữ B", "Chữ C"...
• Hào hứng mở SGK Tiếng Việt 1 đến trang bài Ôn tập và kể chuyện.`;

      act2Teacher = `• Bước 1: Ôn tập bảng chữ cái và ghép âm thành tiếng
- Hướng dẫn HS nhìn bảng ôn trong SGK (hàng ngang là âm đầu, hàng dọc là âm chính và dấu thanh).
- Cho HS ghép âm tạo tiếng: b - a -> ba; b - a - sắc -> bá; c - a -> ca...
- Gọi từng nhóm đọc nối tiếp các tiếng trong bảng ôn SGK.
• Bước 2: Hướng dẫn đọc câu ứng dụng / đoạn văn ngắn trong SGK
- GV đọc mẫu câu ứng dụng trong SGK (ví dụ: "Bà có ba ba", "Bé có cá bống"...).
- Hướng dẫn HS dùng ngón tay chỉ từng chữ, ngắt nghỉ đúng dấu chấm.
• Bước 3: Kể chuyện theo tranh minh họa trong SGK
- GV treo tranh minh họa câu chuyện trong SGK (ví dụ truyện: "Búp bê và dế mèn" hoặc "Đàn kiến con ngoan ngoãn").
- GV kể diễn cảm câu chuyện lần 1 và lần 2 kết hợp chỉ vào từng bức tranh 1, 2, 3, 4.
- Đặt câu hỏi theo từng tranh: "Tranh 1 vẽ cảnh gì? Nhân vật nào xuất hiện? Chuyện gì đã xảy ra?".`;

      act2Student = `• Ghép tiếng trên bảng ôn SGK:
- Dùng ngón tay chỉ vào bảng ôn trong SGK trang bài học.
- Đọc to: "b - a - ba", "c - a - ca", "b - e - be"...
- Đọc trơn các tiếng theo que chỉ của cô giáo: ba, bá, bà, ca, cá, cà.
• Luyện đọc câu ứng dụng trong SGK:
- Ngón tay trỏ chỉ vào từng chữ trong câu SGK, đọc thầm theo ngón tay.
- 2-3 bạn đọc to trơn cả câu trước lớp; cả lớp đọc đồng thanh.
• Nghe kể chuyện và trả lời câu hỏi theo tranh SGK:
- Mắt dõi theo từng bức tranh 1, 2, 3, 4 trong SGK Tiếng Việt 1, tai chăm chú lắng nghe cô kể chuyện.
- Xung phong trả lời câu hỏi tìm hiểu nội dung từng tranh: "Tranh 1 vẽ bạn Búp bê đang buồn vì bị bỏ quên ạ!", "Tranh 2 bạn Dế mèn đã đến hát an ủi búp bê ạ!".`;

      act3Teacher = `• Tổ chức cho học sinh tập kể lại từng đoạn câu chuyện theo tranh:
- Cho HS làm việc theo cặp: Chỉ tranh trong SGK và kể lại cho bạn nghe đoạn 1 và đoạn 2.
- Mời đại diện học sinh lên bảng tự tin chỉ tranh kể lại 1 đoạn truyện trước lớp.
- Khen ngợi ngữ điệu và sự tự tin của học sinh.
• Luyện viết từ ngữ ứng dụng vào Vở Tập viết 1:
- Hướng dẫn HS viết từ ngữ ứng dụng trong bài ôn vào bảng con và Vở Tập viết 1.`;

      act3Student = `• Tập kể chuyện theo cặp đôi:
- Cùng bạn cùng bàn mở SGK: 1 bạn chỉ tranh, 1 bạn kể; sau đó đổi vai cho nhau.
- Tự tin xung phong lên trước lớp, cầm que chỉ vào tranh 1 và tranh 2 trong SGK, kể lại bằng lời của mình rõ ràng, biểu cảm.
- Cả lớp vỗ tay khen ngợi bạn.
• Luyện viết bảng con và Vở Tập viết 1:
- Viết từ ngữ ứng dụng vào bảng con theo hướng dẫn của cô giáo.
- Mở Vở Tập viết 1, viết nắn nót từng dòng chữ theo mẫu.`;
    } else {
      // Bài Âm chữ mới (Bài 1: A a; Bài 2: B b; Bài 3: C c...)
      act1Teacher = `• Khởi động kết nối tranh mở đầu bài học trong SGK:
- Chiếu bức tranh khởi động trong SGK Tiếng Việt 1 bài học (ví dụ: tranh vẽ bạn nhỏ và bố mẹ đi dạo, có hoa lá, con vật...).
- Đặt câu hỏi: "Các em quan sát tranh SGK trang... và cho cô biết: Trong tranh có những ai? Cảnh vật có những gì? Tên của đồ vật/con vật nào chứa âm hôm nay chúng ta chuẩn bị học?".
- GV chốt lại và phát âm mẫu âm/chữ mới, ghi tựa bài lên bảng lớp.`;

      act1Student = `• Quan sát tranh khởi động trong SGK Tiếng Việt 1:
- Mở SGK Tiếng Việt 1 trang bài học, dùng ngón tay chỉ vào các chi tiết trong tranh.
- Hào hứng phát biểu: "Thưa cô, tranh vẽ bạn nhỏ đang chào ba mẹ ạ!", "Tranh vẽ có con cá, có lá cây ạ!".
- Phát hiện tiếng mới chứa âm bài học theo gợi mở của cô giáo.
• Lắng nghe cô phát âm mẫu, nhắc lại tên bài học nối tiếp: "${lessonTitle}".`;

      act2Teacher = `• Bước 1: Nhận diện chữ cái in hoa, in thường và luyện phát âm
- GV giơ thẻ chữ in hoa, in thường (ví dụ: A và a; B và b).
- GV phát âm mẫu chuẩn: Miệng mở rộng, luồng hơi thoát ra tự nhiên.
- Yêu cầu HS phát âm: Cá nhân (từng em nối tiếp theo dãy bàn) -> Nhóm -> Cả lớp đồng thanh.
- GV lắng nghe từng em, sửa lỗi phát âm ngọng hoặc chưa tròn tiếng.
• Bước 2: Thao tác ghép tiếng trên Bộ chữ gài Tiếng Việt 1
- Hướng dẫn HS mở hộp đồ dùng Tiếng Việt 1, chọn thẻ âm mới và thẻ âm đã học gài vào bảng gài (Ví dụ: Lấy thẻ 'b' gài trước, lấy thẻ 'a' gài sau -> được tiếng 'ba').
- Hướng dẫn HS phân tích cấu tạo tiếng: "Tiếng 'ba' gồm có âm 'b' đứng trước, âm 'a' đứng sau".
- Hướng dẫn đánh vần: b - a - ba. Hướng dẫn đọc trơn: ba.
- Hướng dẫn thêm dấu thanh (dấu sắc, dấu huyền...) để tạo tiếng mới (bá, bà).
• Bước 3: Đọc các từ ngữ ứng dụng dưới tranh trong SGK Tiếng Việt 1
- GV chiếu/chỉ vào các tranh nhỏ ở mục 3 trong SGK trang bài học (Ví dụ: tranh con ba ba, tranh quả bóng, tranh con cá...).
- Yêu cầu HS đọc thầm từ ngữ dưới từng tranh, tìm tiếng có chứa âm vừa học.
- Gọi HS đọc to từ ngữ ứng dụng trước lớp.`;

      act2Student = `• Nhận diện chữ cái và luyện phát âm:
- Quan sát chữ cái in hoa và in thường trên bảng lớp và trong SGK.
- Luyện phát âm theo cô giáo: Từng bạn đứng lên phát âm to, rõ ràng: "a" - "a" - "a" (hoặc "b", "c"...).
- Cả tổ đồng thanh phát âm, cả lớp đồng thanh phát âm 2 lần.
• Thao tác ghép tiếng trên bảng gài Tiếng Việt 1:
- Lấy bảng gài đặt trước mặt.
- Nhanh tay tìm trong hộp đồ dùng thẻ chữ cái theo lệnh cô giáo, gài vào bảng gài: Gài chữ 'b', gài chữ 'a'.
- Dùng ngón tay chỉ vào bảng gài, phân tích to: "Tiếng ba có âm b đứng trước, âm a đứng sau ạ!".
- Đánh vần to: "bờ - a - ba" -> Đọc trơn: "ba".
- Thêm dấu thanh theo lệnh cô: Gài thêm dấu sắc trên đầu chữ 'a' -> Đánh vần: "bờ - a - ba - sắc - bá" -> Đọc trơn: "bá".
• Đọc từ ngữ ứng dụng trong SGK Tiếng Việt 1:
- Dùng ngón tay trỏ chỉ vào từng chữ dưới tranh trong SGK trang bài học.
- Đọc to từ ngữ: "ba ba", "bóng", "bà"...
- Tìm và phát hiện: "Thưa cô, trong từ 'ba ba' cả hai tiếng đều có âm 'b' và âm 'a' vừa học ạ!".`;

      act3Teacher = `• Bước 1: Hướng dẫn viết chữ vào bảng con
- GV viết mẫu chữ cái và chữ ghi tiếng lên khung bảng lớp có lưới ô ly (phóng to 4 ô ly).
- Phân tích quy trình viết: Điểm đặt bút ở đường kẻ mấy, lia bút như thế nào, độ cao mấy ô ly, điểm dừng bút ở đâu.
- Cho HS viết bóng trên không trung 2 lần.
- Yêu cầu HS lấy bảng con viết 2 chữ cái và 1 chữ ghi tiếng. GV đi bao quát, cầm tay uốn nắn nét chữ cho các em còn run tay.
• Bước 2: Luyện viết vào Vở Tập viết 1
- Yêu cầu HS cất bảng con, mở Vở Tập viết 1 đúng trang bài học.
- Nhắc nhở tư thế ngồi viết và cách cầm bút chì. Cho HS tô và viết theo từng dòng mẫu trong vở.
• Bước 3: Luyện đọc câu ứng dụng trong SGK Tiếng Việt 1
- GV chỉ vào câu ứng dụng trong SGK trang bài học (Ví dụ: "Bà có ba ba", "Bé có búp bê"...).
- Hướng dẫn HS đọc thầm, tìm tiếng chứa âm mới, đọc nối tiếp từng em trước lớp.`;

      act3Student = `• Luyện viết bảng con:
- Mắt chăm chú nhìn nét phấn cô giáo viết mẫu trên bảng lớp, ghi nhớ độ cao 2 ô ly (hoặc 5 ô ly đối với chữ b, l, h...).
- Giơ ngón tay trỏ lên không trung, viết bóng theo nhịp đếm của cô.
- Đặt bảng con lên bàn, cầm phấn nắn nót viết từng nét chữ vào bảng con.
- Nghe tiếng gõ thước, đồng loạt giơ bảng con lên ngang ngực, mắt nhìn cô giáo mỉm cười tự tin.
• Viết bài vào Vở Tập viết 1:
- Mở Vở Tập viết 1 trang bài học, đặt vở hơi nghiêng 15 độ, tay trái tì nhẹ giữ mép vở.
- Cầm bút chì 2B bằng 3 ngón tay, nắn nót tô các chữ nét mờ và tự viết các dòng chữ tiếp theo theo đúng đường kẻ ô ly.
• Luyện đọc câu ứng dụng trong SGK:
- Dùng ngón tay trỏ đặt dưới từng chữ trong câu SGK.
- Tìm và phát biểu: "Thưa cô, tiếng 'bà' và tiếng 'ba' trong câu có chứa âm 'b' vừa học ạ!".
- 3-4 bạn nối tiếp đọc to cả câu: "Bà có ba ba". Cả lớp đồng thanh đọc trơn lại toàn bài.`;
    }

    const activities: LessonActivity[] = [
      {
        name: "1. Hoạt động Khởi động (Warm-up - 5 phút)",
        objective: "Tạo tâm thế hào hứng, kết nối tranh khởi động SGK Tiếng Việt 1 vào bài học âm chữ mới.",
        teacherActivity: act1Teacher,
        studentActivity: act1Student
      },
      {
        name: "2. Hoạt động Khám phá (Hình thành kiến thức mới - 12 đến 15 phút)",
        objective: `Nhận biết âm chữ mới, ghép tiếng trên bảng gài và đọc trơn từ ngữ ứng dụng trong SGK Tiếng Việt 1 bài: ${titleCore}.`,
        teacherActivity: act2Teacher,
        studentActivity: act2Student
      },
      {
        name: "3. Hoạt động Luyện tập - Thực hành (12 đến 15 phút)",
        objective: "Luyện viết bảng con, viết Vở Tập viết 1 đúng ô ly và đọc đúng câu ứng dụng trong SGK.",
        teacherActivity: act3Teacher,
        studentActivity: act3Student
      },
      {
        name: "4. Hoạt động Vận dụng - Mở rộng (3 đến 5 phút)",
        objective: "Tìm tiếng chứa âm vừa học xung quanh lớp học và chia sẻ bài đọc với gia đình.",
        teacherActivity: `• Tổ chức trò chơi: "Tìm tiếng mới chứa âm vừa học"
- GV khuyến khích: "Bạn nào giỏi tìm được trong lớp mình hoặc ở nhà những từ có âm hôm nay chúng ta vừa học?".
- Khen ngợi và tặng bông hoa điểm tốt cho các em tìm được từ nhanh và đúng.
• Củng cố, dặn dò:
- Mời 1 HS đọc lại toàn bộ bài đọc trong SGK Tiếng Việt 1 trang bài học (âm chữ, tiếng, từ ngữ ứng dụng, câu ứng dụng).
- Dặn dò HS về nhà mở SGK Tiếng Việt 1 trang bài học, đọc lại cho bố mẹ, ông bà nghe và viết nốt bài trong Vở Tập viết.`,
        studentActivity: `• Tham gia trò chơi tìm tiếng mới:
- HS hào hứng suy nghĩ và giơ tay phát biểu:
  + "Thưa cô, có tiếng 'bàn' chứa âm b ạ!".
  + "Thưa cô, có tiếng 'bút' chứa âm b ạ!".
  + "Thưa cô, bạn 'Bình' tên có chữ B in hoa ạ!".
• Củng cố bài học:
- 1 bạn đọc to, dõng dạc toàn bộ bài học trong SGK từ đầu đến cuối; cả lớp lắng nghe và đọc thầm theo.
- Thu dọn bảng con, phấn, bảng gài cất vào cặp sách ngay ngắn.
- Ghi nhớ lời cô dặn để tối về đọc bài cho ba mẹ nghe và chỉ chữ cho em nhỏ xem.`
      }
    ];

    return { specificCompetencies, teacherMaterials, studentMaterials, activities };
  }

  // =========================================================================
  // 3. MÔN TỰ NHIÊN VÀ XÃ HỘI LỚP 1 (TNXH 1)
  // Bám sát tranh ảnh và tình huống trong SGK Tự nhiên và Xã hội 1
  // =========================================================================
  if (subLower.includes("tự nhiên") || subLower.includes("tnxh") || subLower === "tn&xh") {
    const specificCompetencies = [
      `Học sinh quan sát tranh ảnh trong SGK TNXH 1, nhận biết và nêu được nội dung trọng tâm bài: "${lessonTitle}".`,
      `Biết chỉ tranh, kể tên và trả lời các câu hỏi khám phá trong SGK; phân biệt việc nên làm và không nên làm gắn với đời sống hàng ngày.`,
      `Hình thành thói quen giữ gìn vệ sinh, an toàn cho bản thân tại nhà và trường học, biết yêu quý người thân và bạn bè.`
    ];

    const teacherMaterials = [
      `Kế hoạch bài dạy, bài giảng điện tử (PPTX) phóng to các bức tranh 1, 2, 3, 4 trong SGK Tự nhiên và Xã hội 1.`,
      "Thẻ mặt cười (việc nên làm), thẻ mặt mếu (việc không nên làm) phục vụ trò chơi bày tỏ ý kiến.",
      "Video ngắn hoặc bài hát chủ đề gần gũi với học sinh lớp 1."
    ];

    const studentMaterials = [
      "Sách giáo khoa Tự nhiên và Xã hội 1 (Bộ Kết nối tri thức với cuộc sống), Vở bài tập TNXH 1.",
      "Thẻ hoa xanh/đỏ hoặc thẻ mặt cười/mặt mếu, bút chì màu."
    ];

    const activities: LessonActivity[] = [
      {
        name: "1. Hoạt động Khởi động (Warm-up - 5 phút)",
        objective: "Tạo không khí lớp học vui vẻ, kết nối chủ đề bài học qua bài hát hoặc câu đố.",
        teacherActivity: `• Khởi động qua bài hát chủ điểm:
- Cho cả lớp hát bài hát gắn với chủ đề bài học (Ví dụ bài "Cả nhà thương nhau", "Em yêu trường em" hoặc "Rửa mặt như mèo").
- Đặt câu hỏi giao lưu: "Bài hát nhắc đến những ai? Các em cảm thấy thế nào khi cùng người thân sum họp?".
• Dẫn dắt giới thiệu bài học trong SGK TNXH 1: "${lessonTitle}".`,
        studentActivity: `• Hát múa khởi động:
- Cả lớp đứng lên, vừa hát vừa nhún nhảy theo giai điệu bài hát vui tươi.
- 2 bạn xung phong trả lời câu hỏi: "Bài hát nhắc đến bố mẹ và con ạ!", "Con rất yêu thương gia đình của con ạ!".
• Mở SGK Tự nhiên và Xã hội 1 đến trang bài học sẵn sàng khám phá.`
      },
      {
        name: "2. Hoạt động Khám phá (Quan sát tranh SGK TNXH 1 - 12 đến 15 phút)",
        objective: `Học sinh quan sát tranh 1, 2, 3, 4 trong SGK TNXH 1, phát hiện và chia sẻ nội dung bài: ${titleCore}.`,
        teacherActivity: `• Bước 1: Hướng dẫn học sinh mở SGK và quan sát hệ thống tranh
- GV yêu cầu HS mở SGK TNXH 1 trang bài học, quan sát các bức tranh có đánh số 1, 2, 3, 4...
- Đặt câu hỏi đàm thoại theo từng tranh:
  + "Tranh 1 vẽ ai? Họ đang làm việc gì? Nét mặt các nhân vật như thế nào?".
  + "Tranh 2 vẽ cảnh ở đâu? Em nhìn thấy những đồ vật gì?".
  + "Việc làm của bạn nhỏ trong tranh 3 có an toàn không? Vì sao?".
• Bước 2: Thảo luận cặp đôi cùng bạn cùng bàn
- Hướng dẫn HS quay mặt vào nhau, dùng ngón tay chỉ vào từng bức tranh trong SGK và lần lượt kể cho bạn nghe những gì mình nhìn thấy.
- GV đi quanh lớp lắng nghe, hỗ trợ các em còn nhút nhát.
• Bước 3: Báo cáo trước lớp và chuẩn hóa kiến thức
- Mời đại diện 2-3 cặp HS lên chỉ tranh phóng to trên màn hình chiếu và trình bày.
- GV nhận xét, khen ngợi và rút ra bài học cốt lõi từ các bức tranh SGK.`,
        studentActivity: `• Quan sát chi tiết từng bức tranh trong SGK TNXH 1:
- HS mở SGK trang bài học, dùng ngón tay trỏ chỉ vào từng nhân vật và đồ vật trong tranh 1, tranh 2, tranh 3, tranh 4.
- Nhận xét nét mặt tươi cười của các nhân vật, các đồ dùng quen thuộc trong nhà/trường học.
• Thảo luận cặp đôi cùng bạn bên cạnh:
- Quay sang bạn cùng bàn, chỉ vào tranh 1: "Cậu nhìn xem, bạn nhỏ đang rót nước mời bà kìa!".
- Bạn bên cạnh chỉ tiếp vào tranh 2: "Còn ở đây, bạn nhỏ đang cất đồ chơi vào rổ gọn gàng đấy!".
- Hai bạn thống nhất ý kiến để chuẩn bị xung phong phát biểu.
• Đại diện phát biểu trước lớp:
- Tự tin bước lên bảng, cầm que chỉ vào từng hình ảnh trên màn chiếu và nói to rõ ràng trước cô giáo và cả lớp.
- Lắng nghe cô giáo chuẩn hóa kiến thức bài học và đồng thanh nhắc lại lời dặn của bạn Mặt Trời trong SGK.`
      },
      {
        name: "3. Hoạt động Luyện tập - Thực hành (12 đến 15 phút)",
        objective: "Học sinh bày tỏ ý kiến qua thẻ mặt cười/mặt mếu và sắm vai xử lý tình huống trong SGK TNXH 1.",
        teacherActivity: `• Hoạt động 1: Trò chơi bày tỏ thái độ "Nên làm hay Không nên làm"
- GV chiếu các tranh tình huống ở phần Luyện tập trong SGK TNXH 1.
- Quy ước: Việc nên làm -> Giơ thẻ mặt cười (hoặc vỗ tay); Việc không nên làm -> Giơ thẻ mặt mếu (hoặc lắc tay).
- Nêu từng tình huống: Ví dụ "Bạn nhỏ giúp mẹ quét nhà", "Bạn nhỏ với tay lấy phích nước sôi", "Bạn nhỏ chào hỏi lễ phép khi khách đến nhà".
- Hỏi học sinh: "Vì sao em chọn mặt mếu/mặt cười?".
• Hoạt động 2: Đóng vai xử lý tình huống theo tranh SGK
- Mời 2 học sinh lên sắm vai tình huống trong SGK: 1 bạn đóng vai người lớn, 1 bạn đóng vai học sinh lớp 1 chào hỏi lễ phép hoặc cất dọn đồ chơi an toàn.
- Hướng dẫn cả lớp làm bài tập tô màu trong Vở bài tập TNXH 1.`,
        studentActivity: `• Tham gia trò chơi giơ thẻ bày tỏ thái độ:
- Cầm sẵn thẻ mặt cười và mặt mếu trên tay.
- Quan sát tình huống trong tranh SGK cô giáo vừa chiếu:
  + Khi thấy bạn nhỏ giúp mẹ nhặt rau -> Đồng loạt giơ cao thẻ mặt cười và reo vui: "Việc nên làm ạ!".
  + Khi thấy bạn nhỏ nghịch ổ cắm điện -> Đồng loạt giơ thẻ mặt mếu và nói to: "Việc không nên làm vì rất nguy hiểm bị điện giật ạ!".
• Thực hành sắm vai tình huống:
- 2 bạn lên trước lớp đóng vai: Bạn đóng vai bé ngoan hai tay vòng trước ngực cúi đầu chào: "Cháu chào bác ạ! Cháu mời bác vào nhà uống nước!".
- Cả lớp chăm chú theo dõi và vỗ tay tán thưởng bạn diễn xuất tự nhiên, đúng lễ phép.
• Làm bài tập trong Vở bài tập TNXH 1:
- Mở VBT trang bài học, dùng bút sáp màu tô vào hình mặt cười dưới những hành động đúng đắn.`
      },
      {
        name: "4. Hoạt động Vận dụng - Mở rộng (3 đến 5 phút)",
        objective: "Liên hệ thực tế bản thân, cam kết thực hiện nếp sống an toàn, sạch sẽ tại gia đình.",
        teacherActivity: `• Liên hệ bản thân học sinh:
- Hỏi: "Sau bài học hôm nay, em sẽ làm những việc gì khi về nhà để giúp đỡ bố mẹ và giữ an toàn cho bản thân?".
- Khích lệ các em chia sẻ chân thành.
• Dặn dò tổng kết:
- Tuyên dương tinh thần học tập hăng hái của cả lớp.
- Dặn các em về nhà thực hiện đúng những điều đã học và kể lại cho người thân nghe.`,
        studentActivity: `• Tự liên hệ và cam kết hành động:
- HS giơ tay phát biểu sôi nổi:
  + "Về nhà con sẽ tự xếp gọn quần áo và giày dép của con ạ!".
  + "Con sẽ không chạm tay vào phích nước nóng và bếp ga ạ!".
  + "Con sẽ luôn chào hỏi lễ phép khi có khách đến chơi nhà ạ!".
• Ghi nhớ lời cô dặn, cất sách vở TNXH 1 vào cặp ngăn nắp.`
      }
    ];

    return { specificCompetencies, teacherMaterials, studentMaterials, activities };
  }

  // =========================================================================
  // 4. MÔN ĐẠO ĐỨC LỚP 1 (ETHICS GRADE 1)
  // Bám sát SGK Đạo đức 1
  // =========================================================================
  if (subLower.includes("đạo đức") || subLower === "đđ") {
    const specificCompetencies = [
      `Học sinh nhận biết được các hành vi, thói quen đạo đức đúng đắn theo bài học trong SGK Đạo đức 1: "${lessonTitle}".`,
      `Biết bày tỏ thái độ đồng tình hoặc không đồng tình trước các hành vi trong tranh SGK; thực hành các kỹ năng tự phục vụ, giữ gìn vệ sinh và ứng xử văn minh.`,
      `Tự giác rèn luyện thói quen tốt mỗi ngày tại gia đình và trường lớp.`
    ];

    const teacherMaterials = [
      `Kế hoạch bài dạy, bài giảng điện tử minh họa các tranh truyện và tình huống trong SGK Đạo đức 1.`,
      "Thẻ xanh (tán thành), thẻ đỏ (không tán thành); bộ tranh các bước vệ sinh cá nhân hoặc quy tắc ứng xử.",
      "Bảng khen thưởng 'Bé ngoan lớp 1'."
    ];

    const studentMaterials = [
      "Sách giáo khoa Đạo đức 1 (Bộ Kết nối tri thức với cuộc sống), Vở bài tập Đạo đức 1.",
      "Thẻ hoa xanh/đỏ hoặc thẻ mặt cười/mặt mếu cá nhân."
    ];

    const activities: LessonActivity[] = [
      {
        name: "1. Hoạt động Khởi động (Warm-up - 5 phút)",
        objective: "Tạo tâm thế thoải mái, gợi mở cảm xúc đạo đức qua bài hát hoặc câu chuyện ngắn.",
        teacherActivity: `• Khởi động qua bài hát thiếu nhi:
- Cho cả lớp hát và làm động tác theo bài hát: "Khám tay" hoặc "Chiếc khăn tay" ("Tay thơm tay sạch là tay ngoan...").
- Đặt câu hỏi kết nối: "Bàn tay sạch giúp chúng ta những gì? Làm thế nào để giữ gìn đôi tay và thân thể luôn sạch đẹp?".
• Giới thiệu bài học trong SGK Đạo đức 1: "${lessonTitle}".`,
        studentActivity: `• Hát và làm động tác theo bài hát:
- Cả lớp đứng tại chỗ, giơ hai bàn tay lên múa theo lời bài hát: "Hai bàn tay của em như hai con bướm xinh...".
- Hào hứng trả lời: "Bàn tay sạch giúp mình không bị đau bụng, ăn cơm ngon miệng ạ!".
• Mở SGK Đạo đức 1 sẵn sàng theo dõi bài học.`
      },
      {
        name: "2. Hoạt động Khám phá (Tìm hiểu tranh truyện SGK Đạo đức 1 - 12 đến 15 phút)",
        objective: `Học sinh quan sát tranh truyện trong SGK Đạo đức 1, nhận biết hành vi đúng và sai trong bài: ${titleCore}.`,
        teacherActivity: `• Bước 1: Kể chuyện theo tranh minh họa trong SGK
- GV chiếu phóng to chuỗi tranh truyện trong SGK Đạo đức 1 trang bài học.
- Kể diễn cảm câu chuyện về bạn nhỏ trong tranh (Ví dụ: Bạn nhỏ đi học về rửa tay sạch trước khi ăn, hoặc bạn nhỏ giữ trang phục gọn gàng).
• Bước 2: Đàm thoại tìm hiểu nội dung từng tranh
- Đặt câu hỏi: "Bạn nhỏ trong tranh đã làm những việc gì? Khi nào chúng ta cần rửa tay/chải răng/mặc quần áo gọn gàng? Việc làm đó mang lại lợi ích gì?".
- Cho HS thảo luận nhóm đôi, chỉ vào từng bức tranh trong SGK để trả lời.
• Bước 3: Chuẩn hóa kiến thức bài học
- Rút ra lời khuyên cốt lõi: Hướng dẫn các thao tác chuẩn (Ví dụ: Quy trình rửa tay 6 bước bằng xà phòng; chải răng đúng cách sau bữa ăn và trước khi đi ngủ; cách gấp quần áo gọn gàng).`,
        studentActivity: `• Nghe kể chuyện và theo dõi tranh SGK:
- Mắt nhìn tranh trên màn chiếu và trong SGK Đạo đức 1, tai chăm chú lắng nghe cô giáo kể chuyện.
- Chỉ ngón tay vào từng hành động của bạn nhỏ trong tranh: "Bạn nhỏ đang rửa tay dưới vòi nước sạch ạ!", "Bạn ấy dùng xà phòng xoa đều hai bàn tay ạ!".
• Thảo luận cặp đôi:
- Cùng bạn bên cạnh trao đổi: "Tớ cũng thường rửa tay sau khi đi vệ sinh và trước khi ăn cơm giống bạn nhỏ trong tranh đấy!".
- 2 bạn giơ tay phát biểu dõng dạc trước lớp.
• Luyện tập các thao tác theo cô giáo hướng dẫn:
- Cả lớp cùng thực hành thao tác rửa tay 6 bước không cần nước: Xoa lòng bàn tay, chà mu bàn tay, miết các kẽ ngón tay, xoay ngón tay cái, chụm đầu ngón tay chà vào lòng bàn tay.`
      },
      {
        name: "3. Hoạt động Luyện tập - Thực hành (12 đến 15 phút)",
        objective: "Học sinh bày tỏ ý kiến bằng thẻ màu và thực hành ứng xử tình huống đạo đức.",
        teacherActivity: `• Hoạt động 1: Bày tỏ thái độ qua thẻ xanh / thẻ đỏ
- Chiếu các tranh tình huống ở mục Luyện tập trong SGK Đạo đức 1.
- Nêu từng trường hợp:
  + "Bạn Nam vừa nghịch đất cát xong liền cầm bánh ăn ngay." -> GV hỏi: Em tán thành hay không tán thành?
  + "Bạn Hoa chải răng sạch sẽ trước khi đi ngủ." -> GV hỏi: Em tán thành hay không tán thành?
- Cho HS giơ thẻ đồng loạt và giải thích lý do.
• Hoạt động 2: Thực hành xử lý tình huống thực tế
- Hướng dẫn HS cách nhắc nhở bạn bè khi thấy bạn chưa giữ vệ sinh hoặc chưa gọn gàng.
- Hướng dẫn HS làm bài tập đánh dấu trong Vở bài tập Đạo đức 1.`,
        studentActivity: `• Bày tỏ ý kiến với thẻ xanh và thẻ đỏ:
- Giơ thẻ đỏ khi thấy bạn Nam nghịch đất xong ăn bánh ngay: "Con không tán thành vì tay bạn bẩn có vi khuẩn ăn vào sẽ bị giun sán đau bụng ạ!".
- Giơ thẻ xanh khi bạn Hoa chải răng trước khi đi ngủ: "Con tán thành vì chải răng sẽ giúp răng trắng sạch, không bị sâu răng ạ!".
• Thực hành nhắc nhở bạn thân thiện:
- 2 bạn đóng vai: "Bạn ơi, tay cậu dính mực rồi kìa, chúng mình cùng ra bồn nước rửa tay bằng xà phòng nhé!".
• Làm bài trong VBT Đạo đức 1:
- Cầm bút chì đánh dấu V vào ô dưới bức tranh thể hiện hành vi đúng đắn.`
      },
      {
        name: "4. Hoạt động Vận dụng - Mở rộng (3 đến 5 phút)",
        objective: "Cam kết rèn luyện thói quen tốt mỗi ngày và chia sẻ cùng gia đình.",
        teacherActivity: `• Đưa ra thử thách rèn luyện hàng ngày:
- Giao nhiệm vụ cho các em: "Từ hôm nay, mỗi ngày các em hãy tự giác thực hiện bài học và nhờ bố mẹ đánh dấu vào sổ tay bé ngoan nhé!".
• Nhận xét, tổng kết:
- Tuyên dương các bạn có ý thức học tập tốt, khen ngợi tinh thần tự giác của lớp 1.`,
        studentActivity: `• Nhận nhiệm vụ thử thách:
- Đồng thanh hô to: "Chúng con quyết tâm thực hiện ạ!".
- Hứa với cô giáo sẽ tự giác giữ sạch đôi tay, răng miệng, trang phục mỗi ngày.
- Cất sách vở ngăn nắp vào cặp sách.`
      }
    ];

    return { specificCompetencies, teacherMaterials, studentMaterials, activities };
  }

  // =========================================================================
  // 5. HOẠT ĐỘNG TRẢI NGHIỆM LỚP 1 (HĐTN 1)
  // =========================================================================
  if (subLower.includes("hđtn") || subLower.includes("hoạt động trải nghiệm") || subLower.includes("hdtn")) {
    const isSHDC = subSubject.includes("dưới cờ") || lessonTitle.toLowerCase().includes("sinh hoạt dưới cờ") || lessonTitle.toLowerCase().includes("shdc");
    const isSHL = subSubject.includes("sinh hoạt lớp") || lessonTitle.toLowerCase().includes("sinh hoạt lớp") || lessonTitle.toLowerCase().includes("shl");

    if (isSHDC) {
      const specificCompetencies = [
        "Thực hiện trang nghiêm nghi lễ Chào cờ đầu tuần theo hướng dẫn của giáo viên và Đội TNTP Hồ Chí Minh.",
        `Lắng nghe đánh giá thi đua và tham gia hoạt động trải nghiệm theo chủ đề dưới cờ lớp 1: "${lessonTitle}".`,
        "Rèn luyện tính kỷ luật, xếp hàng ngay ngắn, giữ trật tự và lòng tự hào về trường lớp tiểu học."
      ];
      const teacherMaterials = [
        "Kế hoạch tổ chức tiết Sinh hoạt dưới cờ, sổ theo dõi nền nếp lớp 1, bài phát động thi đua tuần mới.",
        "Trang phục chỉnh tề, phối hợp Tổng phụ trách Đội điều hành học sinh khối 1."
      ];
      const studentMaterials = [
        "Trang phục học sinh sạch đẹp, đồng phục trường, mũ/nón, ghế ngồi cá nhân (nếu có)."
      ];

      const activities: LessonActivity[] = [
        {
          name: "1. Nghi lễ Chào cờ đầu tuần (10 phút)",
          objective: "Giáo dục lòng yêu nước, ý thức tự hào dân tộc và nền nếp trang nghiêm khi chào cờ.",
          teacherActivity: `• Hướng dẫn học sinh lớp 1 xếp hàng tập trung dưới sân trường:
- GVCN điều hành học sinh xếp 2 hàng dọc thẳng tắp, hướng dẫn các em chỉnh đốn trang phục, mũ nón ngay ngắn.
- Nhắc nhở các em đứng nghiêm túc, mắt hướng về Quốc kỳ.
• Phối hợp điều hành nghi lễ Chào cờ:
- Hô hiệu lệnh cùng toàn trường: "Nghiêm! Chào cờ - Chào!".
- Lắng nghe Quốc ca, Đội ca vang lên trang trọng.`,
          studentActivity: `• Xếp hàng và chỉnh đốn trang phục:
- Học sinh di chuyển trật tự theo hướng dẫn của cô giáo chủ nhiệm, xếp hàng ngay ngắn thẳng hàng với bạn phía trước.
- Vuốt lại cổ áo đồng phục, đứng thẳng lưng, hai tay buông tự nhiên dọc thân mình.
• Thực hiện nghi lễ Chào cờ:
- Nghe khẩu lệnh "Chào cờ - Chào!": Mắt nhìn thẳng lên Quốc kỳ đỏ sao vàng rực rỡ, đứng nghiêm trang, không nói chuyện, hòa chung không khí trang nghiêm toàn trường.`
        },
        {
          name: "2. Tham gia hoạt động trải nghiệm theo chủ đề dưới cờ (15 phút)",
          objective: `Học sinh lớp 1 lắng nghe phát động thi đua và tham gia giao lưu theo chủ đề: ${titleCore}.`,
          teacherActivity: `• Hướng dẫn học sinh lắng nghe Ban giám hiệu và Tổng phụ trách:
- Hướng dẫn các em ngồi xuống trật tự, chú ý lắng nghe nhận xét thi đua tuần qua và nhiệm vụ tuần mới.
• Tổ chức cho học sinh lớp mình hưởng ứng chủ đề tuần:
- Khích lệ các em giơ tay tham gia trả lời câu hỏi giao lưu, đố vui hoặc biểu diễn văn nghệ theo lời mời của Tổng phụ trách.`,
          studentActivity: `• Chú ý lắng nghe và hưởng ứng thi đua:
- Ngồi ngay ngắn trên ghế/sân trường, lắng nghe thầy cô Ban giám hiệu biểu dương các lớp đạt tuần học tốt.
- Vỗ tay hào hứng chúc mừng cờ thi đua.
• Tham gia giao lưu chủ đề:
- Mạnh dạn giơ tay khi có câu hỏi đố vui dành cho khối 1; hào hứng trả lời to, tự tin trước toàn trường.`
        },
        {
          name: "3. Triển khai nhiệm vụ tuần mới của lớp (7 phút)",
          objective: "Nắm vững các chỉ tiêu thi đua học tập và nền nếp của lớp 1 trong tuần.",
          teacherActivity: `• GVCN dặn dò trực tiếp học sinh lớp mình:
- Nhắc nhở các mục tiêu trọng tâm: Đi học chuyên cần, đúng giờ, mặc đúng đồng phục, chào hỏi thầy cô lễ phép và giữ gìn bàn ghế lớp học sạch sẽ.`,
          studentActivity: `• Tiếp nhận nhiệm vụ tuần mới:
- Khoanh tay lắng nghe cô giáo dặn dò; đồng thanh dạ to thể hiện quyết tâm đạt nhiều bông hoa điểm tốt trong tuần.`
        },
        {
          name: "4. Di chuyển về lớp học (3 phút)",
          objective: "Rèn thói quen di chuyển trật tự, an toàn, không xô đẩy.",
          teacherActivity: `• Hướng dẫn học sinh đứng dậy, cầm ghế (nếu có) và xếp hàng di chuyển trật tự theo lớp về phòng học.`,
          studentActivity: `• Cầm ghế bằng hai tay, nối đuôi nhau di chuyển trật tự về lớp học, chuẩn bị sách vở cho tiết học tiếp theo.`
        }
      ];

      return { specificCompetencies, teacherMaterials, studentMaterials, activities };
    }

    if (isSHL) {
      const tsLesson = getTrafficSafetyLesson(1, week || 3);

      const specificCompetencies = [
        "Đánh giá được những ưu điểm và điểm cần cố gắng của bản thân và tổ trong tuần học vừa qua.",
        `Tích hợp giáo dục An toàn giao thông Lớp 1 (Bài ${tsLesson.lessonNumber}: ${tsLesson.title} - Tiết ${tsLesson.part}: ${tsLesson.subTitle}): ${tsLesson.specificCompetency}`,
        "Rèn luyện kỹ năng tự quản, biết lắng nghe cô giáo và các bạn nhận xét, cùng nhau xây dựng tập thể lớp 1 thân thiện và chấp hành tốt các quy định an toàn giao thông."
      ];
      const teacherMaterials = [
        "Sổ theo dõi chủ nhiệm lớp 1, bảng hoa điểm 10 của các tổ, kế hoạch hoạt động tuần tới.",
        `Tài liệu Giáo dục An toàn giao thông Lớp 1 (Bài ${tsLesson.lessonNumber}: ${tsLesson.title} - Tiết ${tsLesson.part}).`,
        "Tranh ảnh, video clip minh họa an toàn giao thông cho học sinh lớp 1.",
        "Phần thưởng sticker/hoa khen thưởng cho các học sinh tiến bộ."
      ];
      const studentMaterials = [
        "Sổ tay theo dõi bé ngoan, góc trưng bày sản phẩm học tập trong tuần.",
        "Tài liệu Giáo dục An toàn giao thông Lớp 1."
      ];

      const activities: LessonActivity[] = [
        {
          name: "1. Hoạt động mở đầu (Warm-up - 5 phút)",
          objective: "Tạo không khí ấm áp, vui tươi gắn kết cô trò sau một tuần học tập chăm chỉ.",
          teacherActivity: `• Bắt nhịp bài hát tập thể vui nhộn về giao thông hoặc thiếu nhi:
- Cùng cả lớp hát và vỗ tay bài "Lớp chúng mình rất rất vui" hoặc "Đèn đỏ đèn xanh".
- Giới thiệu buổi Sinh hoạt lớp cuối tuần tích hợp An toàn giao thông.`,
          studentActivity: `• Hát vang bài hát tập thể, khoác tay bạn cùng bàn tạo không khí ấm áp, đoàn kết.`
        },
        {
          name: "2. Sơ kết hoạt động tuần qua của lớp 1 (10 đến 12 phút)",
          objective: "Tổng kết nề nếp, học tập; tuyên dương các cá nhân và tổ học tập chăm chỉ.",
          teacherActivity: `• Mời đại diện các tổ trưởng báo cáo ngắn gọn:
- Hướng dẫn các tổ trưởng lớp 1 báo cáo: Bạn nào đi học đầy đủ, bạn nào chăm giơ tay phát biểu, bạn nào viết chữ tiến bộ.
• GVCN nhận xét chung và trao thưởng:
- Khen ngợi cả lớp có nhiều cố gắng trong học tập và nền nếp.
- Dán hoa điểm 10 lên bảng danh dự cho các bạn đạt thành tích tốt; nhắc nhở nhẹ nhàng những bạn còn nói chuyện riêng.`,
          studentActivity: `• Tổ trưởng báo cáo ngắn gọn trước lớp:
- Tổ trưởng đứng lên dõng dạc: "Thưa cô, tuần qua tổ con các bạn đều đi học ngoan, bạn An và bạn Bình viết chữ rất đẹp ạ!".
• Lắng nghe nhận xét và nhận hoa khen thưởng:
- Cả lớp lắng nghe cô giáo nhận xét, vỗ tay chúc mừng các bạn được nhận hoa khen thưởng.
- Các bạn được cô khen vui mừng bước lên nhận sticker bé ngoan, hứa tuần sau sẽ cố gắng hơn nữa.`
        },
        {
          name: `3. Sinh hoạt trải nghiệm & Tích hợp An toàn giao thông: Bài ${tsLesson.lessonNumber} - ${tsLesson.title} (Tiết ${tsLesson.part}: ${tsLesson.subTitle}) (12 đến 15 phút)`,
          objective: `Thực hiện hoạt động trải nghiệm theo chủ đề và tích hợp An toàn giao thông Lớp 1 (Bài ${tsLesson.lessonNumber}: ${tsLesson.title} - Tiết ${tsLesson.part}).`,
          teacherActivity: `• Tích hợp nội dung An toàn giao thông Lớp 1 (Bài ${tsLesson.lessonNumber}: ${tsLesson.title} - Tiết ${tsLesson.part}: ${tsLesson.subTitle}):
- ${tsLesson.teacherActivity}
- Cho học sinh quan sát tranh ảnh trực quan, hướng dẫn các em nhận biết hành vi an toàn và hành vi nguy hiểm khi đi trên đường.
- Đặt câu hỏi đàm thoại gần gũi: "Khi đi trên vỉa hè các con đi cùng ai? Qua đường các con nhờ ai giúp đỡ?".
- Tuyên dương các bạn có câu trả lời đúng và trao sticker khen thưởng.`,
          studentActivity: `• Tham gia hoạt động trải nghiệm và tích hợp An toàn giao thông:
- ${tsLesson.studentActivity}
- Nhắc lại to rõ quy tắc an toàn cùng cô giáo và các bạn.
- Hào hứng thực hành sắm vai tình huống an toàn giao thông trước lớp.`
        },
        {
          name: "4. Vận dụng & trải nghiệm (Phương hướng tuần tới - 3 đến 5 phút)",
          objective: "Nắm vững nhiệm vụ tuần tới và nhắc nhở an toàn trong 2 ngày nghỉ cuối tuần.",
          teacherActivity: `• Phổ biến nhiệm vụ trọng tâm tuần sau:
- Tiếp tục thi đua giành hoa điểm tốt, giữ gìn vệ sinh lớp học.
• Dặn dò an toàn khi tham gia giao thông & ở nhà cuối tuần:
- Luôn nắm tay người lớn khi đi ra đường, đội mũ bảo hiểm khi ngồi xe máy cùng bố mẹ, không chơi gần ao hồ sông suối, vâng lời ông bà cha mẹ.`,
          studentActivity: `• Lắng nghe và ghi nhớ:
- Khoanh tay lắng nghe cô dặn dò, đồng thanh: "Chúng con nhớ lời cô dặn rồi ạ!".
- Thu dọn sách vở, kê lại bàn ghế ngay ngắn trước khi tan học về nhà.`
        }
      ];

      return { specificCompetencies, teacherMaterials, studentMaterials, activities };
    }

    // Tiết 2 HĐTN: Hoạt động giáo dục theo chủ đề SGK HĐTN 1
    const specificCompetencies = [
      `Khám phá và rèn luyện các kỹ năng theo chủ đề bài học trong SGK Hoạt động trải nghiệm 1: "${lessonTitle}".`,
      "Tham gia tích cực vào các trò chơi trải nghiệm, làm sản phẩm thủ công đơn giản hoặc đóng vai xử lý tình huống.",
      "Hình thành kỹ năng tự phục vụ, giao tiếp cởi mở và hợp tác thân thiện với bạn bè."
    ];
    const teacherMaterials = [
      `Kế hoạch bài dạy, bài giảng điện tử minh họa các hoạt động trong SGK Hoạt động trải nghiệm 1.`,
      "Vật liệu trải nghiệm đơn giản: giấy màu, hồ dán, kéo an toàn, bút chì màu.",
      "Phiếu đánh giá hoạt động trải nghiệm lớp 1."
    ];
    const studentMaterials = [
      "Sách giáo khoa Hoạt động trải nghiệm 1, Vở bài tập HĐTN 1.",
      "Hộp bút màu, giấy thủ công, kéo cắt giấy đầu tròn an toàn."
    ];

    const activities: LessonActivity[] = [
      {
        name: "1. Hoạt động Khởi động (Warm-up - 5 phút)",
        objective: "Tạo tâm thế hứng khởi bước vào tiết hoạt động trải nghiệm.",
        teacherActivity: `• Tổ chức trò chơi khởi động theo chủ đề:
- Cho học sinh chơi trò chơi: "Tôi bảo" hoặc vận động theo giai điệu bài hát thiếu nhi vui nhộn.
• Giới thiệu bài học trong SGK Hoạt động trải nghiệm 1: "${lessonTitle}".`,
        studentActivity: `• Hào hứng làm theo hiệu lệnh của cô giáo: "Tôi bảo, tôi bảo! - Bảo gì, bảo gì? - Bảo cả lớp vỗ tay 3 cái thật to!".
• Mở SGK Hoạt động trải nghiệm 1 trang bài học, mỉm cười sẵn sàng trải nghiệm.`
      },
      {
        name: "2. Hoạt động Khám phá (Tìm hiểu chủ đề qua tranh SGK HĐTN 1 - 12 đến 15 phút)",
        objective: `Học sinh quan sát tranh trong SGK HĐTN 1, nhận diện các việc làm tích cực trong bài: ${titleCore}.`,
        teacherActivity: `• Hướng dẫn quan sát tranh trong SGK HĐTN 1:
- Yêu cầu HS mở SGK trang bài học, quan sát các bức tranh hoạt động.
- Đặt câu hỏi: "Các bạn trong tranh đang làm gì? Việc làm đó giúp ích gì cho bản thân và tập thể?".
- Khơi gợi để các em tự tin chia sẻ cảm xúc và suy nghĩ của mình.`,
        studentActivity: `• Quan sát tranh và phát biểu:
- Dùng ngón tay chỉ vào từng bức tranh trong SGK HĐTN 1.
- Tự tin phát biểu: "Bạn nhỏ đang tự thắt dây giày ạ!", "Bạn đang chia sẻ đồ chơi cùng bạn bên cạnh ạ!".
- Kể cho cô giáo và cả lớp nghe về những việc mình đã tự làm được ở nhà.`
      },
      {
        name: "3. Hoạt động Thực hành - Trải nghiệm (12 đến 15 phút)",
        objective: "Học sinh trực tiếp thực hành thao tác trải nghiệm, sắm vai hoặc tạo sản phẩm sáng tạo.",
        teacherActivity: `• Hướng dẫn thực hành theo nhiệm vụ SGK:
- Tổ chức cho học sinh thực hành theo nhóm hoặc cá nhân (Ví dụ: Thực hành tự sắp xếp sách vở vào cặp; gấp khăn mặt; làm thiệp bông hoa tặng mẹ; sắm vai xin lỗi khi làm phiền bạn).
- Quan sát, hướng dẫn từng bàn, động viên các em tự tin thể hiện.`,
        studentActivity: `• Trực tiếp thực hành nhiệm vụ:
- Lấy đồ dùng ra thực hành: Tự tay sắp xếp sách vở từ to đến nhỏ vào cặp sách; hoặc dùng bút màu tô bông hoa rực rỡ tặng mẹ.
- Tự hào giơ sản phẩm của mình lên cho cô giáo và các bạn cùng chiêm ngưỡng.`
      },
      {
        name: "4. Hoạt động Vận dụng - Đánh giá (3 đến 5 phút)",
        objective: "Tự đánh giá cảm xúc sau buổi trải nghiệm và cam kết duy trì thói quen tốt.",
        teacherActivity: `• Hướng dẫn học sinh tự đánh giá:
- Hướng dẫn HS mở phần Tự đánh giá trong SGK HĐTN 1: Tô màu vào khuôn mặt cười nếu cảm thấy rất thích và làm tốt nhiệm vụ.
- Nhận xét buổi học, dặn dò các em tiếp tục thực hành ở nhà.`,
        studentActivity: `• Tự đánh giá cảm xúc:
- Cầm bút sáp màu tô vào hình mặt cười rạng rỡ trong SGK HĐTN 1.
- Hào hứng khoe với bạn: "Hôm nay học vui quá, tớ đã tự làm được món quà xinh xắn!".
- Cất đồ dùng vào cặp ngay ngắn.`
      }
    ];

    return { specificCompetencies, teacherMaterials, studentMaterials, activities };
  }

  // =========================================================================
  // 6. GIÁO DỤC THỂ CHẤT & MĨ THUẬT LỚP 1
  // =========================================================================
  if (subLower.includes("thể chất") || subLower.includes("gdtc")) {
    const specificCompetencies = [
      `Học sinh thực hiện được các tư thế cơ bản, động tác đội hình đội ngũ hoặc bài thể dục theo tranh SGK GDTC 1: "${lessonTitle}".`,
      "Nâng cao thể lực, phản xạ nhanh nhẹn, biết lắng nghe khẩu lệnh của giáo viên.",
      "Hình thành thói quen rèn luyện thân thể, giữ vệ sinh sân tập và an toàn trong tập luyện."
    ];
    const teacherMaterials = [
      "Kế hoạch bài dạy, còi chỉ huy, tranh phóng to các động tác mẫu trong SGK Giáo dục thể chất 1.",
      "Sân tập sạch sẽ, an toàn, bóng thể thao hoặc cờ nheo phục vụ trò chơi vận động."
    ];
    const studentMaterials = [
      "Trang phục thể thao thoáng mát, đi giày bata hoặc giày thể thao sạch sẽ."
    ];

    const activities: LessonActivity[] = [
      {
        name: "1. Khởi động (Mở đầu - 5 đến 7 phút)",
        objective: "Làm nóng cơ thể, bôi trơn các khớp xương, sẵn sàng vận động an toàn.",
        teacherActivity: `• Tập hợp lớp, phổ biến nội dung bài tập:
- Thổi còi tập hợp 4 hàng dọc -> chuyển thành 4 hàng ngang cự ly rộng.
- Kiểm tra sĩ số, trang phục, giày dép của học sinh.
• Hướng dẫn khởi động các khớp:
- Đứng trước lớp thị phạm cho học sinh xoay các khớp: Cổ tay kết hợp cổ chân, khớp khuỷu tay, khớp vai, khớp hông, gối.
- Chạy nhẹ nhàng 1 vòng quanh sân tập.`,
        studentActivity: `• Tập hợp hàng ngũ ngay ngắn:
- Nghe tiếng còi, nhanh chóng chạy về vị trí hàng của tổ mình, đứng đúng tư thế nghiêm.
- Đi giày thể thao chắc chắn, trang phục gọn gàng.
• Khởi động theo nhịp đếm của cô:
- Đứng giang rộng hai chân bằng vai, xoay cổ tay cổ chân nhịp nhàng theo tiếng đếm: "1 - 2 - 3 - 4...".
- Chạy bước nhỏ nhẹ nhàng theo hàng quanh sân tập.`
      },
      {
        name: "2. Khám phá kiến thức mới (10 đến 12 phút)",
        objective: `Quan sát tranh SGK GDTC 1 và động tác mẫu của GV, tiếp thu kỹ thuật bài: ${titleCore}.`,
        teacherActivity: `• Thị phạm động tác mẫu kết hợp giải thích:
- Cho học sinh quan sát tranh trong SGK GDTC 1 phóng to.
- GV đứng trước lớp làm mẫu động tác 2 lần: Lần 1 làm nhanh chuẩn xác; Lần 2 làm chậm từng nhịp kết hợp phân tích yếu lĩnh kỹ thuật (Ví dụ: Tư thế đứng nghiêm, tư thế đứng nghỉ, quay phải, quay trái; hoặc động tác vươn thở, tay, chân).
- Hô nhịp chậm cho cả lớp làm theo từng nhịp.`,
        studentActivity: `• Quan sát động tác mẫu:
- Đứng ngay ngắn trong hàng, mắt chăm chú nhìn cô giáo làm mẫu và quan sát tranh SGK.
- Nhớ kỹ tư thế: Đứng nghiêm hai gót chân sát nhau tạo hình chữ V; đứng nghỉ hơi chùng một bên gối.
• Tập làm theo nhịp đếm:
- Tập động tác theo hiệu lệnh còi và tiếng đếm của cô: Nhịp 1 bước chân sang ngang giang hai tay, nhịp 2 hạ tay về vị trí cũ.`
      },
      {
        name: "3. Luyện tập - Trò chơi vận động (12 đến 15 phút)",
        objective: "Tập luyện theo tổ chỉ huy và tham gia trò chơi thể thao hào hứng, an toàn.",
        teacherActivity: `• Tổ chức luyện tập theo tổ:
- Cho 4 tổ trưởng đứng đầu hàng chỉ huy tổ mình luyện tập lại động tác.
- GV đi quanh các tổ uốn nắn tư thế tay, chân cho các em còn lúng túng.
• Tổ chức trò chơi vận động:
- Hướng dẫn trò chơi: "Đua ngựa", "Mèo đuổi chuột" hoặc "Lò cò tiếp sức".
- Phổ biến luật chơi an toàn, làm trọng tài công tâm.`,
        studentActivity: `• Luyện tập theo hiệu lệnh của tổ trưởng:
- Tổ trưởng hô nhịp to, các bạn trong tổ đồng loạt thực hiện động tác đều tăm tắp.
- Tự giác sửa lại tư thế tay chân cho thẳng đẹp theo cô giáo nhắc nhở.
• Tham gia trò chơi vận động:
- Hào hứng tham gia trò chơi, chạy nhanh nhẹn, cổ vũ nhiệt tình cho các bạn trong đội mình: "Cố lên! Cố lên!".`
      },
      {
        name: "4. Hồi tĩnh - Dặn dò (3 đến 5 phút)",
        objective: "Thả lỏng cơ thể, đưa nhịp tim và hơi thở trở lại trạng thái bình thường.",
        teacherActivity: `• Hướng dẫn học sinh thả lỏng, hồi tĩnh:
- Cho học sinh đi chậm, hít thở sâu, rũ nhẹ hai tay và hai chân.
- Nhận xét buổi học, tuyên dương các tổ tập đều và giữ kỷ luật tốt.`,
        studentActivity: `• Thả lỏng toàn thân:
- Nhịp nhàng vung tay nhẹ nhàng, hít vào thật sâu rồi thở ra từ từ.
- Xếp hàng di chuyển trật tự về lớp học, uống nước và nghỉ ngơi chuẩn bị cho tiết học sau.`
      }
    ];

    return { specificCompetencies, teacherMaterials, studentMaterials, activities };
  }

  // Default fallback for any other specialist subject in Grade 1
  return {
    specificCompetencies: [
      `Học sinh tiếp thu tốt kiến thức và kỹ năng trong bài học SGK: "${lessonTitle}".`,
      "Thao tác thuần thục với sách giáo khoa và đồ dùng học tập, phát triển năng lực đặc thù môn học."
    ],
    teacherMaterials: [
      `Kế hoạch bài dạy, giáo cụ trực quan minh họa bài học "${lessonTitle}".`
    ],
    studentMaterials: [
      `Sách giáo khoa, vở bài tập và đồ dùng học tập môn ${subject}.`
    ],
    activities: [
      {
        name: "1. Hoạt động Khởi động (5 phút)",
        objective: "Tạo tâm thế hào hứng kết nối vào bài học mới.",
        teacherActivity: "Tổ chức trò chơi hoặc bài hát vui nhộn liên quan đến bài học. Đặt câu hỏi kết nối vào bài mới trong SGK.",
        studentActivity: "Hào hứng tham gia cùng lớp, lắng nghe và trả lời câu hỏi dẫn dắt của giáo viên; mở SGK trang bài học."
      },
      {
        name: "2. Hoạt động Khám phá (12 đến 15 phút)",
        objective: "Hình thành kiến thức mới qua tranh ảnh và ngữ liệu trong SGK.",
        teacherActivity: `Hướng dẫn học sinh quan sát tranh ảnh trong SGK, thao tác trực quan và thảo luận cặp đôi để tìm hiểu nội dung: "${lessonTitle}".`,
        studentActivity: "Chỉ tay vào từng bức tranh trong SGK, làm việc với đồ dùng học tập cá nhân, trả lời câu hỏi gợi mở của giáo viên."
      },
      {
        name: "3. Hoạt động Luyện tập - Thực hành (12 đến 15 phút)",
        objective: "Thực hành giải bài tập trong SGK và Vở bài tập.",
        teacherActivity: "Giao nhiệm vụ luyện tập thực hành theo từng bài tập trong SGK. Quan sát uốn nắn thao tác, chấm chữa bài kịp thời.",
        studentActivity: "Tích cực làm bài tập vào bảng con hoặc Vở bài tập, thực hiện đúng các bước theo hướng dẫn của giáo viên."
      },
      {
        name: "4. Hoạt động Vận dụng (3 đến 5 phút)",
        objective: "Liên hệ thực tiễn đời sống và dặn dò bài học.",
        teacherActivity: "Đưa ra tình huống thực tế gắn với bài học, củng cố kiến thức và dặn dò học sinh chia sẻ cùng gia đình.",
        studentActivity: "Liên hệ bản thân, rút ra bài học thực tế, ghi nhớ lời dặn của thầy cô và thu dọn sách vở gọn gàng."
      }
    ]
  };
}
