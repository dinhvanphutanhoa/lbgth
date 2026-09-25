import { IntegrationTopic } from "../types";

export const AI_FRAMEWORK = [
  {
    theme: "A. Tư duy lấy con người làm trung tâm",
    grades: {
      1: ["Con người có cảm xúc, AI thì không", "AI thể hiện cảm xúc do con người lập trình", "Ý nghĩa cảm xúc mà AI thể hiện", "Nhận diện AI trong cuộc sống"],
      2: ["Khi nào nên và không nên dùng AI", "AI làm việc, con người kiểm soát", "AI trong gia đình", "AI hỗ trợ mọi người", "Con người dạy AI qua tương tác"],
      3: ["Cách sử dụng AI trong học tập", "Không phụ thuộc hoàn toàn vào AI", "Suy nghĩ kĩ trước khi dùng AI", "AI trong trường học", "AI hỗ trợ mọi người", "Kiểm tra và phản biện kết quả của AI"],
      4: ["AI trong công việc hằng ngày", "AI hỗ trợ, con người suy nghĩ", "AI vì cuộc sống tốt đẹp hơn", "AI trong xã hội", "Con người quyết định khi dùng AI"],
      5: ["Con người chịu trách nhiệm", "AI không thay thế con người", "AI phục vụ lợi ích chung", "Con người trong kỉ nguyên AI"]
    }
  },
  {
    theme: "B. Đạo đức AI",
    grades: {
      1: ["Việc làm tốt và việc làm xấu", "Máy thông minh làm việc tốt"],
      2: ["Sự đối xử không công bằng", "Của bạn và của tớ"],
      3: ["Phân biệt thật và giả", "Cùng máy thông minh làm việc tốt"],
      4: ["Bảo vệ thông tin cá nhân"],
      5: ["Hệ thống AI công bằng", "Giúp AI công bằng", "Cần hiểu cách AI suy nghĩ"]
    }
  },
  {
    theme: "C. Các kĩ thuật và ứng dụng AI",
    grades: {
      1: ["Nhận biết AI và ứng dụng AI", "Chức năng và công cụ AI"],
      2: ["Cách AI học và học liệu của AI", "Sơ lược cách AI phân loại đồ vật"],
      3: ["Dữ liệu học máy", "Kĩ thuật AI dựa trên luật", "Kĩ thuật học máy"],
      4: ["Một số ứng dụng AI quen thuộc", "Làm quen với một số công cụ trải nghiệm kĩ thuật học máy"],
      5: ["Thuật toán AI dựa trên luật", "Làm quen với một số ứng dụng học máy trực quan"]
    }
  },
  {
    theme: "D. Thiết kế hệ thống AI",
    grades: {
      1: ["Máy thông minh học từ ví dụ", "Nhiều loại máy thông minh"],
      2: ["Máy thông minh giúp giải quyết vấn đề quanh em", "Ý tưởng máy thông minh", "Vai trò của dữ liệu"],
      3: ["Quá trình huấn luyện máy thông minh", "Dữ liệu tốt cho máy thông minh", "Máy thông minh có thể học sai"],
      4: ["Từ vấn đề đến ý tưởng AI", "Liên tục cải tiến AI"],
      5: ["Quy trình huấn luyện AI", "Cải tiến hệ thống AI bằng dữ liệu"]
    }
  }
];

export const AI_INTEGRATION_FRAMEWORK = [
  {
    id: "ai-1",
    code: "1.A1.1",
    title: "Nhận diện cảm xúc thật và biểu cảm máy tính",
    requirement: "HS nhận biết con người có cảm xúc thật; AI hoặc robot chỉ thể hiện lời nói, biểu cảm theo dữ liệu hay thiết kế của con người.",
    suggestedActivity: "GV cho HS quan sát Robot nói xin lỗi/cảm ơn và thảo luận về sự khác biệt giữa cảm xúc thật và máy móc."
  },
  {
    id: "ai-2",
    code: "1.A2.1",
    title: "Nhận diện trợ lý ảo và thiết bị AI hỗ trợ con người",
    requirement: "Nhận biết và kể tên được một số thiết bị có sử dụng AI (như robot, trợ lý ảo). Nhận biết nhân vật Rô-bốt hỗ trợ con người học tập.",
    suggestedActivity: "GV dùng điện thoại hỏi trợ lý ảo: 'Bây giờ là mấy giờ?' để HS thấy AI hỗ trợ việc xem giờ."
  },
  {
    id: "ai-3",
    code: "1.C1.2",
    title: "Giác quan mô phỏng của thiết bị AI (Camera, Micro)",
    requirement: "Nhận biết thiết bị AI có các bộ phận mô phỏng giác quan con người (camera là mắt, micro là tai).",
    suggestedActivity: "GV chỉ vào camera lớp học/trường và giải thích AI dùng camera làm mắt để trông nom an toàn trường học."
  },
  {
    id: "ai-4",
    code: "2.A1.1",
    title: "Con người kiểm soát và kiểm tra lời nói từ AI",
    requirement: "Nhận biết AI có thể hỗ trợ con người gợi ý lời nói, câu xin lỗi, lời chúc nhưng cần tự kiểm tra và nói bằng cảm xúc chân thành.",
    suggestedActivity: "GV đưa câu gợi ý do AI tạo, HS nhận xét và sửa lại bằng lời của chính mình."
  },
  {
    id: "ai-5",
    code: "2.C3.1",
    title: "Phân loại hình ảnh và khả năng nhận nhầm của AI",
    requirement: "Nhận biết AI hỗ trợ nhận diện và phân loại hình học qua dữ liệu ảnh, nhưng AI có thể nhận nhầm nếu ảnh bị che khuất.",
    suggestedActivity: "Trò chơi 'Đố AI' - Vẽ hình ở góc nhìn khuất để thảo luận lý do AI có thể nhận nhầm và con người cần kiểm tra lại."
  },
  {
    id: "ai-6",
    code: "3.B1.1",
    title: "Phân biệt thật - giả và thông tin AI tạo ra",
    requirement: "Biết rằng hình ảnh, âm thanh, video do AI tạo ra có thể không có thật ngoài đời; không vội tin vào video lạ trên mạng.",
    suggestedActivity: "Quan sát tranh vẽ do AI sinh ra và ảnh chụp thực tế để phân tích điểm khác nhau."
  },
  {
    id: "ai-7",
    code: "4.A1.1",
    title: "AI hỗ trợ tư duy, con người sáng tạo và chịu trách nhiệm",
    requirement: "HS nhận biết AI hỗ trợ xử lý dữ liệu, gợi ý dàn ý, nhưng cảm xúc và năng lực sáng tạo thuộc về con người.",
    suggestedActivity: "HS quan sát AI gợi ý các câu văn nhân hóa, thảo luận chọn lọc và viết bằng lời văn sáng tạo của mình."
  },
  {
    id: "ai-8",
    code: "5.A1.1",
    title: "AI tự động hóa công việc lặp lại và hỗ trợ con người",
    requirement: "Nhận biết và mô tả được rằng AI có thể thực hiện một số công việc thay con người, đặc biệt là những việc lặp đi lặp lại, nguy hiểm hoặc đòi hỏi tính chính xác cao.",
    suggestedActivity: "Tìm hiểu ứng dụng AI nhận diện khuôn mặt phân loại ảnh, robot lau dọn hoặc dự báo thời tiết khí tượng."
  },
  {
    id: "ai-9",
    code: "5.A2.1",
    title: "AI mô phỏng hành vi qua lập trình, không có cảm xúc thật",
    requirement: "Nhận biết AI không có cảm xúc hay tính cách thật như con người, chỉ mô phỏng đức tính tốt qua thuật toán do con người lập trình.",
    suggestedActivity: "Thảo luận so sánh: 'Trợ lý ảo chào hỏi lịch sự' với 'Tình cảm chân thành giữa những người bạn trong lớp học'."
  },
  {
    id: "ai-10",
    code: "5.A2.2",
    title: "Tư duy sáng tạo, cảm xúc và quyết định đạo đức của con người",
    requirement: "Hiểu rằng dù AI làm được nhiều việc, chỉ con người mới có khả năng suy nghĩ sáng tạo độc đáo, cảm nhận cảm xúc chân thực và đưa ra quyết định đạo đức.",
    suggestedActivity: "Học sinh dùng AI gợi ý ý tưởng miêu tả phong cảnh, sau đó tự mình viết bài văn bằng cảm xúc và trải nghiệm riêng."
  },
  {
    id: "ai-11",
    code: "5.B1.1",
    title: "Đạo đức AI và trách nhiệm công dân số",
    requirement: "Nhận biết trách nhiệm công dân số; hiểu tính minh bạch và công bằng trong hệ thống AI; con người chịu trách nhiệm đạo đức.",
    suggestedActivity: "HS đóng vai chuyên gia công nghệ đánh giá tình huống: 'Nếu robot AI làm sai, ai là người chịu trách nhiệm?'"
  },
  {
    id: "ai-12",
    code: "5.B2.1",
    title: "Bảo mật dữ liệu cá nhân khi tương tác với AI",
    requirement: "Biết rằng việc chia sẻ thông tin cá nhân cho các hệ thống AI có thể khiến thông tin bị lộ hoặc bị lợi dụng; không cung cấp mật khẩu, địa chỉ cho bot chat.",
    suggestedActivity: "Thực hành nhận diện các loại thông tin tuyệt đối không chia sẻ khi chat với trợ lý ảo hoặc ứng dụng số."
  },
  {
    id: "ai-13",
    code: "5.C4.1",
    title: "Cấu trúc điều kiện 'Nếu ... thì ...' trong thuật toán AI",
    requirement: "Sử dụng được cấu trúc rẽ nhánh nếu ... thì ... trong lập trình AI đơn giản hoặc phân tích luồng xử lý tự động.",
    suggestedActivity: "Lập trình khối lệnh Scratch: 'Nếu camera phát hiện bàn tay vẫy thì nhân vật phát ra lời chào'."
  },
  {
    id: "ai-14",
    code: "5.C4.2",
    title: "Ứng dụng học máy có giám sát trực quan",
    requirement: "Sử dụng công cụ trải nghiệm AI trực quan dựa trên học máy có giám sát để phân loại hình ảnh, âm thanh hoặc cử chỉ.",
    suggestedActivity: "Dùng Teachable Machine / Scratch AI để huấn luyện máy tính phân biệt giữa cử chỉ giơ tay và hạ tay."
  },
  {
    id: "ai-15",
    code: "5.D1.1",
    title: "Giải quyết vấn đề thực tế bằng giải pháp AI",
    requirement: "Nêu được ví dụ cụ thể về các vấn đề trong đời sống được giải quyết hiệu quả nhờ ứng dụng công nghệ trí tuệ nhân tạo.",
    suggestedActivity: "Trình bày về xe tự hành tránh vật cản, camera thông minh nhận diện biển số xe tại cổng trường học."
  },
  {
    id: "ai-16",
    code: "5.D2.1",
    title: "Cải tiến hệ thống AI thông qua cập nhật dữ liệu",
    requirement: "Giải thích được rằng hệ thống AI hoạt động chính xác và hiệu quả hơn khi dữ liệu (biến số) được thu thập đầy đủ và cập nhật thường xuyên.",
    suggestedActivity: "Thử nghiệm thêm dữ liệu hình ảnh mới để kiểm tra độ chính xác nhận diện của mô hình học máy."
  }
];

export const DIGITAL_COMPETENCE_FRAMEWORK = [
  {
    id: "nls-1",
    code: "1.1.CB1a",
    level: "Khối 1 - 5",
    domain: "Miền 1: Dữ liệu và thông tin",
    subDomain: "Tìm kiếm và lọc dữ liệu, thông tin và nội dung số",
    description: "Xác định nhu cầu thông tin, tìm kiếm dữ liệu/nội dung qua tìm kiếm đơn giản trong môi trường số dưới sự hướng dẫn của GV.",
    example: "HS nhập từ khóa đơn giản trên trang web thư viện/học liệu số an toàn do GV giới thiệu, ghi chép tên bài và tác giả."
  },
  {
    id: "nls-2",
    code: "1.2.CB1a",
    level: "Khối 1 - 5",
    domain: "Miền 1: Dữ liệu và thông tin",
    subDomain: "Đánh giá dữ liệu, thông tin và nội dung số",
    description: "Phát hiện độ tin cậy và độ chính xác của các nguồn chung của dữ liệu, thông tin và nội dung số; không bấm vào đường link lạ.",
    example: "GV đưa 2 nguồn thông tin (1 nguồn chuẩn, 1 nguồn không rõ); HS đối chiếu và chọn nguồn đáng tin cậy."
  },
  {
    id: "nls-3",
    code: "2.3.CB1a",
    level: "Khối 1 - 5",
    domain: "Miền 2: Giao tiếp và hợp tác",
    subDomain: "Tương tác thông qua các công nghệ số",
    description: "Giao tiếp, hợp tác trong môi trường số an toàn; sử dụng lời lẽ lịch sự, không lan truyền tin sai sự thật trên nhóm lớp.",
    example: "Sắm vai gửi tin nhắn chúc mừng thầy cô, bạn bè qua ứng dụng của lớp bằng ngôn từ lễ phép, văn minh."
  },
  {
    id: "nls-4",
    code: "3.1.CB1a",
    level: "Khối 1 - 5",
    domain: "Miền 3: Sáng tạo nội dung số",
    subDomain: "Phát triển nội dung số đơn giản",
    description: "Tạo và chỉnh sửa nội dung số ở các định dạng đơn giản (văn bản, tranh vẽ, bản trình chiếu cơ bản).",
    example: "HS thực hành vẽ tranh minh họa cho bài học trên phần mềm đồ họa Paint hoặc ứng dụng học tập."
  },
  {
    id: "nls-5",
    code: "4.1.CB1b",
    level: "Khối 1 - 5",
    domain: "Miền 4: An toàn số",
    subDomain: "Bảo vệ thiết bị và phòng tránh nguy cơ",
    description: "Phân biệt được rủi ro và mối đe dọa đơn giản trong môi trường số (tin nhắn lạ, quảng cáo rác, rò rỉ điện/dây sạc hỏng).",
    example: "HS thảo luận cách xử lý khi gặp người lạ nhắn tin xin địa chỉ, số điện thoại trên trò chơi/mạng trực tuyến: Báo ngay người lớn."
  },
  {
    id: "nls-6",
    code: "4.2.CB1a",
    level: "Khối 1 - 5",
    domain: "Miền 4: An toàn số",
    subDomain: "Bảo vệ dữ liệu cá nhân và quyền riêng tư",
    description: "Nhận biết cách bảo vệ dữ liệu cá nhân (tên, tuổi, địa chỉ, ảnh gia đình); xin phép trước khi chụp ảnh, quay video có mặt bạn bè.",
    example: "HS phân loại các thông tin 'Được phép chia sẻ' và 'Bí mật tuyệt đối' khi dùng thiết bị điện tử."
  },
  {
    id: "nls-7",
    code: "5.2.CB1a",
    level: "Khối 1 - 5",
    domain: "Miền 5: Giải quyết vấn đề và tự học",
    subDomain: "Sử dụng công cụ số để nâng cao hiệu quả học tập",
    description: "Nhận ra và sử dụng công cụ số đơn giản (Quizizz, Wordwall, bảng tính, slide) để trình bày kết quả học tập và tự đánh giá.",
    example: "HS tham gia trả lời câu hỏi trắc nghiệm ôn tập trên Quizizz, xem phản hồi và tự sửa bài vào vở."
  },
  {
    id: "nls-8",
    code: "1.1.CB2a",
    level: "Khối 5",
    domain: "Miền 1: Dữ liệu và thông tin",
    subDomain: "Tìm kiếm và lọc dữ liệu, thông tin và nội dung số",
    description: "Tìm kiếm và lọc dữ liệu, thông tin và nội dung số trong môi trường số một cách an toàn và có chọn lọc.",
    example: "HS tìm kiếm tài liệu về di tích lịch sử hoặc loài cây trên trang web giáo dục an toàn."
  },
  {
    id: "nls-9",
    code: "1.1.CB2b",
    level: "Khối 5",
    domain: "Miền 1: Dữ liệu và thông tin",
    subDomain: "Xác định từ khóa tra cứu thông tin",
    description: "Xác định từ khóa tìm kiếm phù hợp để tra cứu thông tin, tài liệu hình ảnh trên Internet.",
    example: "HS xác định từ khóa 'danh từ Tiếng Việt 5' hoặc 'bản đồ địa hình Việt Nam' trên công cụ tra cứu."
  },
  {
    id: "nls-10",
    code: "1.2.CB2a",
    level: "Khối 5",
    domain: "Miền 1: Dữ liệu và thông tin",
    subDomain: "Đánh giá, so sánh và kiểm chứng nguồn tin",
    description: "Đánh giá, so sánh và kiểm chứng độ tin cậy của thông tin từ 2 nguồn web số khác nhau.",
    example: "Đối chiếu số liệu giữa website bách khoa toàn thư mở và cổng thông tin chính thống của Bộ GD&ĐT."
  },
  {
    id: "nls-11",
    code: "2.1.CB2a",
    level: "Khối 5",
    domain: "Miền 2: Giao tiếp và hợp tác",
    subDomain: "Tương tác và khám phá mô hình không gian số",
    description: "Tương tác với các công nghệ số, khám phá các mô hình trực quan số đa phương tiện.",
    example: "HS quan sát mô hình 3D quả địa cầu hoặc cấu tạo cơ thể người trên phần mềm mô phỏng."
  },
  {
    id: "nls-12",
    code: "3.2.CB2a",
    level: "Khối 5",
    domain: "Miền 3: Sáng tạo nội dung số",
    subDomain: "Sửa đổi, tinh chỉnh nội dung số",
    description: "Sửa đổi, tinh chỉnh và cải thiện các mục nội dung số, văn bản, bài trình chiếu hoặc hình ảnh.",
    example: "HS dùng phần mềm soạn thảo để chỉnh sửa font chữ, căn lề và chèn bảng dữ liệu báo cáo."
  },
  {
    id: "nls-13",
    code: "4.3.CB2a",
    level: "Khối 5",
    domain: "Miền 4: An toàn số",
    subDomain: "Bảo vệ sức khỏe và thể chất trong môi trường số",
    description: "Bảo vệ sức khỏe thể chất và thị giác khi sử dụng thiết bị số (quy tắc 20-20-20, ngồi đúng tư thế).",
    example: "HS nêu các biện pháp nghỉ ngơi sau khi xem màn hình điện tử, tập thể dục thư giãn mắt."
  }
];

export const NUTRITION_INTEGRATION = [
  {
    id: "gddd-1",
    grade: 1,
    subject: "Đạo đức / HĐTN",
    topic: "Giữ sạch đôi tay & Bữa ăn đủ chất",
    targetRequirement: "Giáo dục tầm quan trọng của việc ăn đủ bữa, đủ chất dinh dưỡng để có năng lượng học tập; vệ sinh đôi tay an toàn trong ăn uống.",
    notes: "Lồng ghép vào hoạt động khởi động hoặc luyện tập thông qua bài hát Rửa tay 6 bước và tháp dinh dưỡng màu sắc."
  },
  {
    id: "gddd-2",
    grade: 2,
    subject: "TNXH / HĐTN",
    topic: "Lựa chọn thực phẩm an toàn",
    targetRequirement: "Giáo dục nhận biết thực phẩm sạch, an toàn; giữ gìn vệ sinh tủ lạnh và đồ ăn; không ăn thức ăn ôi thiu.",
    notes: "Địa chỉ: Bài Phòng tránh ngộ độc thực phẩm; Bài Giữ gìn vệ sinh môi trường sống."
  },
  {
    id: "gddd-3",
    grade: 4,
    subject: "Công nghệ / Khoa học",
    topic: "Chế độ ăn uống cân bằng & Lợi ích cây ăn quả",
    targetRequirement: "Mở rộng hiểu biết về cây trồng ăn được cung cấp vitamin, khoáng chất (như cây chanh giàu vitamin C); xây dựng thực đơn cân đối.",
    notes: "Bài 1 Công nghệ: Lợi ích của hoa và cây cảnh; Khoa học: Nhóm chất bột đường, chất đạm, chất béo, vitamin."
  },
  {
    id: "gddd-4",
    grade: 5,
    subject: "Công nghệ / Đạo đức",
    topic: "Bảo quản thực phẩm trong tủ lạnh",
    targetRequirement: "Hướng dẫn bảo quản thực phẩm đúng cách trong tủ lạnh, vệ sinh tủ lạnh để ngăn ngừa vi khuẩn; phòng chống thừa cân béo phì ở trẻ em.",
    notes: "Bài 6 Công nghệ: Sử dụng tủ lạnh đúng cách, an toàn và tiết kiệm điện."
  }
];

export const DEFENSE_INTEGRATION = [
  {
    id: "gdqpan-1",
    grade: 1,
    subject: "Tiếng Việt / HĐTN",
    topic: "Hình ảnh Chú Bộ Đội và Cô Chú Công An",
    content: "Giới thiệu một số hình ảnh về Quân đội Nhân dân Việt Nam, Công an Nhân dân Việt Nam; giáo dục lòng biết ơn và tình yêu quê hương.",
    method: "Xem tranh ảnh, nghe bài hát 'Cháu thương chú bộ đội', kể việc làm tốt giữ gìn trật tự lớp học."
  },
  {
    id: "gdqpan-2",
    grade: 2,
    subject: "Tiếng Việt / Đạo đức",
    topic: "Biển đảo quê hương & Tôn trọng Quốc kỳ, Quốc ca",
    content: "Giới thiệu cán bộ, chiến sĩ Quân đội và Công an bảo vệ chủ quyền biển đảo, an ninh trật tự; giáo dục lòng yêu nước, nghiêm trang khi chào cờ.",
    method: "HS xem clip chú bộ đội hải quân canh gác đảo Trường Sa; thực hành tư thế chào cờ trang nghiêm."
  },
  {
    id: "gdqpan-3",
    grade: 3,
    subject: "Tiếng Việt / TNXH",
    topic: "Truyền thống yêu nước và anh hùng dân tộc",
    content: "Giáo dục truyền thống chống giặc ngoại xâm của dân tộc; noi gương các anh hùng thiếu niên (Kim Đồng, Vừ A Dính), Bà Mẹ Việt Nam Anh hùng.",
    method: "Đọc truyện lịch sử, kể tên di tích lịch sử hoặc bia tưởng niệm liệt sĩ tại địa phương."
  },
  {
    id: "gdqpan-4",
    grade: 4,
    subject: "Lịch sử & Địa lí / Tiếng Việt",
    topic: "Chủ quyền Hoàng Sa & Trường Sa",
    content: "Giới thiệu bản đồ hành chính Việt Nam, khẳng định chủ quyền thiêng liêng của Việt Nam đối với hai quần đảo Hoàng Sa và Trường Sa.",
    method: "Chỉ vị trí biển đảo trên bản đồ số; thảo luận trách nhiệm của thế hệ măng non trong việc học tập dựng xây đất nước."
  },
  {
    id: "gdqpan-5",
    grade: 5,
    subject: "Lịch sử & Địa lí / Tiếng Việt",
    topic: "Bảo vệ chủ quyền toàn vẹn lãnh thổ",
    content: "Khẳng định chủ quyền, quyền chủ quyền biển đảo Việt Nam; tinh thần đoàn kết toàn dân tộc; gương dũng cảm trong cứu hộ cứu nạn.",
    method: "Tìm hiểu tư liệu Đội Hoàng Sa kiêm quản Trường Sa dưới triều Nguyễn, xem phóng sự lực lượng vũ trang nhân dân Việt Nam."
  }
];

export const INTEGRATION_TOPICS: IntegrationTopic[] = [
  // AI Integrations
  {
    id: "ai-1",
    category: "AI",
    code: "1.A1.1",
    grade: 1,
    subject: "Tiếng Việt",
    lessonAddress: "Bài 50: Ôn tập và kể chuyện",
    content: "HS nhận biết con người có cảm xúc thật; AI hoặc robot chỉ thể hiện lời nói, biểu cảm theo dữ liệu hay thiết kế của con người.",
    suggestedActivity: "GV cho HS quan sát Robot nói xin lỗi/cảm ơn và thảo luận về sự khác biệt giữa cảm xúc thật và máy móc."
  },
  {
    id: "ai-2",
    category: "AI",
    code: "1.A2.1",
    grade: 1,
    subject: "Toán",
    lessonAddress: "Tiết học đầu tiên / Xem giờ đúng trên đồng hồ",
    content: "Nhận biết và kể tên được một số thiết bị có sử dụng AI (như robot, trợ lý ảo). Nhận biết nhân vật Rô-bốt hỗ trợ con người học tập.",
    suggestedActivity: "GV dùng điện thoại hỏi trợ lý ảo: 'Bây giờ là mấy giờ?' để HS thấy AI hỗ trợ việc xem giờ."
  },
  {
    id: "ai-3",
    category: "AI",
    code: "1.C1.2",
    grade: 1,
    subject: "TNXH",
    lessonAddress: "Bài 7: Cùng khám phá trường học / Bài 21: Các giác quan",
    content: "Nhận biết thiết bị AI có các bộ phận mô phỏng giác quan con người (camera là mắt, micro là tai).",
    suggestedActivity: "GV chỉ vào camera lớp học/trường và giải thích AI dùng camera làm mắt để trông nom an toàn trường học."
  },
  {
    id: "ai-4",
    category: "AI",
    code: "1.D1.1",
    grade: 1,
    subject: "TNXH",
    lessonAddress: "Bài 17: Con vật quanh em",
    content: "Nêu được ví dụ về tình huống AI 'học' từ hình ảnh hoặc thông tin (AI học nhận biết con mèo, con chó qua nhiều ảnh).",
    suggestedActivity: "GV dùng ứng dụng nhận diện hình ảnh (Google Lens) để máy đoán tên con vật trong ảnh."
  },
  {
    id: "ai-5",
    category: "AI",
    code: "2.A1.1",
    grade: 2,
    subject: "Tiếng Việt",
    lessonAddress: "Bài 2: Ngày hôm qua đâu rồi? / Bài 20: Nhím nâu kết bạn",
    content: "Nhận biết AI có thể hỗ trợ con người gợi ý lời nói, câu xin lỗi, lời chúc nhưng cần tự kiểm tra và nói bằng cảm xúc chân thành.",
    suggestedActivity: "GV đưa câu gợi ý do AI tạo, HS nhận xét và sửa lại bằng lời của chính mình."
  },
  {
    id: "ai-6",
    category: "AI",
    code: "2.C3.1",
    grade: 2,
    subject: "Toán",
    lessonAddress: "Bài 26: Đường gấp khúc, hình tứ giác / Bài 46: Khối trụ, khối cầu",
    content: "Nhận biết AI hỗ trợ nhận diện và phân loại hình học qua dữ liệu ảnh, nhưng AI có thể nhận nhầm nếu ảnh bị che khuất.",
    suggestedActivity: "Trò chơi 'Đố AI' - Vẽ hình ở góc nhìn khuất để thảo luận lý do AI có thể nhận nhầm và con người cần kiểm tra lại."
  },
  {
    id: "ai-7",
    category: "AI",
    code: "4.A1.1",
    grade: 4,
    subject: "Tiếng Việt",
    lessonAddress: "Bài 1: Điều kì diệu / Bài 6: Nghệ sĩ trống",
    content: "HS nhận biết AI hỗ trợ xử lý dữ liệu, gợi ý dàn ý, nhưng cảm xúc và năng lực sáng tạo thuộc về con người.",
    suggestedActivity: "HS quan sát AI gợi ý các câu văn nhân hóa, thảo luận chọn lọc và viết bằng lời văn sáng tạo của mình."
  },
  {
    id: "ai-8",
    category: "AI",
    code: "4.C2.1",
    grade: 4,
    subject: "Lịch sử & Địa lí",
    lessonAddress: "Bài 15: Thiên nhiên vùng Duyên hải miền Trung",
    content: "Hiểu AI có thể hỗ trợ dự báo bão, mưa lớn, sạt lở để giảm thiểu thiệt hại cho đồng bào miền Trung.",
    suggestedActivity: "Xem clip: Hệ thống AI phân tích dữ liệu mây và gió vệ tinh để đưa ra cảnh báo sớm cho ngư dân và dân cư."
  },
  {
    id: "ai-9",
    category: "AI",
    code: "5.A1.1",
    grade: 5,
    subject: "HĐTN / Công nghệ",
    lessonAddress: "Bài 1: Khám phá thế giới thông tin qua ChatGPT",
    content: "Nhận biết AI có thể hỗ trợ con người tìm hiểu thông tin về các ngành nghề tương lai; hiểu AI nghe, nhìn, hiểu yêu cầu.",
    suggestedActivity: "HS thảo luận về vai trò của AI trong việc cung cấp thông tin nghề nghiệp và cách ra lệnh (prompt) chính xác."
  },
  {
    id: "ai-10",
    category: "AI",
    code: "5.B1.1",
    grade: 5,
    subject: "Công nghệ",
    lessonAddress: "Bài 10: Rèn luyện đạo đức khi sử dụng AI",
    content: "Nhận biết trách nhiệm công dân số; hiểu tính minh bạch và công bằng trong hệ thống AI; con người chịu trách nhiệm đạo đức.",
    suggestedActivity: "HS đóng vai chuyên gia công nghệ đánh giá tình huống: 'Nếu robot AI làm sai, ai là người chịu trách nhiệm?'"
  },

  // Digital Competency (CV 3456/BGDĐT)
  {
    id: "nls-1",
    category: "NLS",
    code: "1.1.CB1a",
    grade: "all",
    subject: "Tiếng Việt / TNXH",
    lessonAddress: "Các tiết Đọc mở rộng, tra cứu tư liệu",
    content: "Xác định nhu cầu thông tin, tìm kiếm dữ liệu/nội dung qua tìm kiếm đơn giản trong môi trường số dưới sự hướng dẫn của GV.",
    suggestedActivity: "HS nhập từ khóa đơn giản trên trang web thư viện/học liệu số an toàn do GV giới thiệu, ghi chép tên bài và tác giả."
  },
  {
    id: "nls-2",
    category: "NLS",
    code: "1.2.CB1a",
    grade: "all",
    subject: "Tiếng Việt / Khoa học",
    lessonAddress: "Tìm hiểu thông tin khoa học, bài đọc mở rộng",
    content: "Phát hiện độ tin cậy và độ chính xác của các nguồn chung của dữ liệu, thông tin và nội dung số; không bấm vào đường link lạ.",
    suggestedActivity: "GV đưa 2 nguồn thông tin (1 nguồn chuẩn, 1 nguồn không rõ); HS đối chiếu và chọn nguồn đáng tin cậy."
  },
  {
    id: "nls-3",
    category: "NLS",
    code: "2.3.CB1a",
    grade: "all",
    subject: "Đạo đức / HĐTN",
    lessonAddress: "Giao tiếp, ứng xử trong môi trường số",
    content: "Giao tiếp, hợp tác trong môi trường số an toàn; sử dụng lời lẽ lịch sự, không lan truyền tin sai sự thật trên nhóm lớp.",
    suggestedActivity: "Sắm vai gửi tin nhắn chúc mừng thầy cô, bạn bè qua ứng dụng của lớp bằng ngôn từ lễ phép, văn minh."
  },
  {
    id: "nls-4",
    category: "NLS",
    code: "4.1.CB1b",
    grade: "all",
    subject: "Đạo đức / TNXH",
    lessonAddress: "An toàn thiết bị và phòng tránh rủi ro số",
    content: "Phân biệt được rủi ro và mối đe dọa đơn giản trong môi trường số (tin nhắn lạ, quảng cáo rác, rò rỉ điện/dây sạc hỏng).",
    suggestedActivity: "HS thảo luận cách xử lý khi gặp người lạ nhắn tin xin địa chỉ, số điện thoại trên trò chơi/mạng trực tuyến: Báo ngay người lớn."
  },
  {
    id: "nls-5",
    category: "NLS",
    code: "4.2.CB1a",
    grade: "all",
    subject: "Đạo đức / HĐTN",
    lessonAddress: "Bảo vệ dữ liệu cá nhân và quyền riêng tư",
    content: "Nhận biết cách bảo vệ dữ liệu cá nhân (tên, tuổi, địa chỉ, ảnh gia đình); xin phép trước khi chụp ảnh, quay video có mặt bạn bè.",
    suggestedActivity: "HS phân loại các thông tin 'Được phép chia sẻ' và 'Bí mật tuyệt đối' khi dùng thiết bị điện tử."
  },
  {
    id: "nls-6",
    category: "NLS",
    code: "5.2.CB1a",
    grade: "all",
    subject: "Toán / Tiếng Việt",
    lessonAddress: "Trình bày bài tập và tự kiểm tra trên nền tảng số",
    content: "Nhận ra và sử dụng công cụ số đơn giản (Quizizz, Wordwall, bảng tính, slide) để trình bày kết quả học tập và tự đánh giá.",
    suggestedActivity: "HS tham gia trả lời câu hỏi trắc nghiệm ôn tập trên Quizizz, xem phản hồi và tự sửa bài vào vở."
  },

  // Human Rights (QCN) & Children Rights
  {
    id: "qcn-1",
    category: "QCN",
    grade: "all",
    subject: "Đạo đức / Tiếng Việt",
    lessonAddress: "Các bài về bạn bè, gia đình, nhà trường",
    content: "Giáo dục quyền được tôn trọng sự khác biệt về ngoại hình, sở thích, hoàn cảnh; quyền được học tập, vui chơi an toàn và không bị bắt nạt.",
    suggestedActivity: "HS trao đổi về việc lắng nghe bạn, không chê bai bạn khi phát biểu hay làm việc nhóm."
  },
  {
    id: "qcn-2",
    category: "QCN",
    grade: "all",
    subject: "TNXH / HĐTN",
    lessonAddress: "Phòng tránh xâm hại, an toàn thân thể",
    content: "Giáo dục quyền được bảo vệ an toàn thân thể; nhận biết vùng riêng tư, biết nói 'Không' và tìm sự giúp đỡ của người lớn tin cậy.",
    suggestedActivity: "Thực hành quy tắc 5 ngón tay và các số điện thoại khẩn cấp (111 - Tổng đài Quốc gia Bảo vệ Trẻ em, 113, 114, 115)."
  },

  // National Defense and Security (GDQPAN - Thông tư 08/2024/TT-BGDĐT)
  {
    id: "gdqpan-1",
    category: "GDQPAN",
    grade: 1,
    subject: "Tiếng Việt / HĐTN",
    lessonAddress: "Bài 16: M m N n / Bài 78: uân uât / Bài 2: Lính cứu hỏa",
    content: "Giới thiệu một số hình ảnh về Quân đội Nhân dân Việt Nam, Công an Nhân dân Việt Nam; giáo dục lòng biết ơn và tình yêu quê hương.",
    suggestedActivity: "Quan sát tranh ảnh chú bộ đội, chiến sĩ công an, kể về công việc canh giữ bình yên cho nhân dân."
  },
  {
    id: "gdqpan-2",
    category: "GDQPAN",
    grade: 2,
    subject: "Tiếng Việt / Đạo đức",
    lessonAddress: "Bài 22: Thư gửi bố ngoài đảo / Bài 25: Đất nước chúng mình",
    content: "Giới thiệu cán bộ, chiến sĩ Quân đội và Công an bảo vệ chủ quyền biển đảo, an ninh trật tự; giáo dục lòng yêu nước, tôn trọng Quốc kỳ, Quốc ca.",
    suggestedActivity: "HS viết lời cảm ơn gửi các chú bộ đội hải quân đang ngày đêm làm nhiệm vụ bảo vệ biển đảo Tổ quốc."
  },
  {
    id: "gdqpan-3",
    category: "GDQPAN",
    grade: 3,
    subject: "Tiếng Việt / TNXH",
    lessonAddress: "Bài Đọc: Hai Bà Trưng / Di tích lịch sử địa phương",
    content: "Giáo dục truyền thống chống giặc ngoại xâm của dân tộc; noi gương các anh hùng thiếu niên, Bà Mẹ Việt Nam Anh hùng.",
    suggestedActivity: "Kể chuyện về tấm gương anh dũng trong lịch sử giải phóng dân tộc."
  },
  {
    id: "gdqpan-4",
    category: "GDQPAN",
    grade: 4,
    subject: "Lịch sử & Địa lí / Tiếng Việt",
    lessonAddress: "Bài 1: Làm quen phương tiện LS&ĐL / Bài 15: Thiên nhiên Duyên hải miền Trung",
    content: "Giới thiệu bản đồ hành chính Việt Nam, khẳng định chủ quyền của Việt Nam đối với hai quần đảo Hoàng Sa và Trường Sa.",
    suggestedActivity: "HS chỉ trên bản đồ vị trí 2 quần đảo Hoàng Sa, Trường Sa và đọc thơ ca ngợi biển đảo quê hương."
  },
  {
    id: "gdqpan-5",
    category: "GDQPAN",
    grade: 5,
    subject: "Lịch sử & Địa lí / Tiếng Việt",
    lessonAddress: "Bài 1: Vị trí địa lí, Quốc kì, Quốc ca / Bài 3: Biển đảo Việt Nam",
    content: "Khẳng định chủ quyền, quyền chủ quyền biển đảo Việt Nam; tấm gương cứu hộ cứu nạn dũng cảm của Quân đội và Công an.",
    suggestedActivity: "Tìm hiểu tư liệu Mộc bản triều Nguyễn, hình ảnh khai thác hải sản gắn với giữ gìn an ninh biển đảo."
  },

  // Nutrition Education (GDDD)
  {
    id: "gddd-1",
    category: "GDDD",
    grade: 1,
    subject: "Đạo đức / HĐTN",
    lessonAddress: "Bài 1: Em giữ sạch đôi tay / Bài 2: Những việc nên làm",
    content: "Giáo dục tầm quan trọng của việc ăn đủ bữa, đủ chất dinh dưỡng để có năng lượng học tập; vệ sinh đôi tay an toàn trong ăn uống.",
    suggestedActivity: "Thực hành rửa tay 6 bước trước khi ăn; thảo luận về bữa ăn đầy đủ 4 nhóm chất dinh dưỡng."
  },
  {
    id: "gddd-2",
    category: "GDDD",
    grade: 2,
    subject: "HĐTN / TNXH",
    lessonAddress: "Bài 21: Tự chăm sóc sức khỏe / Bài 3: Phòng tránh ngộ độc",
    content: "Giáo dục nhận biết thực phẩm sạch, an toàn; giữ gìn vệ sinh tủ lạnh và đồ ăn; không ăn thức ăn ôi thiu.",
    suggestedActivity: "Trò chơi phân loại thực phẩm an toàn và thực phẩm có nguy cơ gây hại cho sức khỏe."
  },
  {
    id: "gddd-3",
    category: "GDDD",
    grade: 4,
    subject: "Công nghệ / Khoa học",
    lessonAddress: "Bài 1: Lợi ích của hoa, cây cảnh / Bài 24: Chế độ ăn uống cân bằng",
    content: "Mở rộng hiểu biết về cây trồng ăn được cung cấp vitamin, khoáng chất (như cây chanh giàu vitamin C); xây dựng thực đơn cân đối.",
    suggestedActivity: "HS lập kế hoạch bữa ăn gia đình dinh dưỡng và hợp lý theo tháp dinh dưỡng."
  },
  {
    id: "gddd-4",
    category: "GDDD",
    grade: 5,
    subject: "Công nghệ / Đạo đức",
    lessonAddress: "Bài 6: Sử dụng tủ lạnh / Bài 6: Lập kế hoạch cá nhân",
    content: "Hướng dẫn bảo quản thực phẩm đúng cách trong tủ lạnh, vệ sinh tủ lạnh để ngăn ngừa vi khuẩn; phòng chống thừa cân béo phì ở trẻ em.",
    suggestedActivity: "Thảo luận nhóm về các loại thực phẩm nên và không nên để trong tủ lạnh, lập sơ đồ tư duy cách ăn uống lành mạnh."
  }
];
