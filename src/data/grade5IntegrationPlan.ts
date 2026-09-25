export interface Grade5IntegrationEntry {
  week: number;
  period: number;
  subject: string;
  lessonTitle: string;
  integrationCode: string;
  type: "AI" | "NLS" | "STEM" | "GDQPAN" | "GDDD" | "BVMT";
  description: string;
}

// Danh mục tích hợp chính thức Lớp 5 theo Kế hoạch tích hợp GDPT 2018
export const GRADE_5_INTEGRATION_ENTRIES: Grade5IntegrationEntry[] = [
  // --- TIẾNG VIỆT (Tuần 1 - 35) ---
  { week: 1, period: 2, subject: "Tiếng Việt", lessonTitle: "Luyện tập về danh từ, động từ, tính từ", integrationCode: "NLS: 1.1.CB2b", type: "NLS", description: "Tìm kiếm dữ liệu số an toàn, hỗ trợ học từ loại." },
  { week: 2, period: 10, subject: "Tiếng Việt", lessonTitle: "Lập dàn ý cho bài văn kể chuyện sáng tạo", integrationCode: "AI: 5.A1.1", type: "AI", description: "Nhận biết AI có thể hỗ trợ gợi ý ý tưởng cốt truyện kể chuyện." },
  { week: 3, period: 16, subject: "Tiếng Việt", lessonTitle: "Luyện tập về đại từ", integrationCode: "NLS: 1.2.CB2a", type: "NLS", description: "Đánh giá, so sánh và kiểm chứng cách dùng đại từ từ các nguồn số." },
  { week: 4, period: 27, subject: "Tiếng Việt", lessonTitle: "Đánh giá, chỉnh sửa báo cáo công việc", integrationCode: "NLS: 5.2.CB2a", type: "NLS", description: "Sử dụng công cụ số chỉnh sửa, định dạng bảng biểu báo cáo." },
  { week: 5, period: 30, subject: "Tiếng Việt", lessonTitle: "Từ đồng nghĩa", integrationCode: "NLS: 5.2.CB2a", type: "NLS", description: "Tra cứu từ điển số trực tuyến tìm từ đồng nghĩa chính xác." },
  { week: 6, period: 38, subject: "Tiếng Việt", lessonTitle: "Viết mở bài và kết bài cho bài văn tả phong cảnh", integrationCode: "AI: 5.C4.2", type: "AI", description: "Sử dụng công cụ trải nghiệm AI tạo gợi ý mở bài, kết bài." },
  { week: 7, period: 45, subject: "Tiếng Việt", lessonTitle: "Lập dàn ý cho bài văn tả phong cảnh", integrationCode: "AI: 5.A2.2", type: "AI", description: "Biết AI có thể gợi ý dàn bài nhưng chỉ con người mới có cảm xúc miêu tả chân thực." },
  { week: 8, period: 51, subject: "Tiếng Việt", lessonTitle: "Luyện tập về từ đa nghĩa", integrationCode: "NLS: 6.1.CB2a", type: "NLS", description: "Nhận thức sự hỗ trợ của công cụ số khi phân biệt nét nghĩa từ đa nghĩa." },
  { week: 10, period: 66, subject: "Tiếng Việt", lessonTitle: "Tìm hiểu cách viết đoạn văn giới thiệu nhân vật sách", integrationCode: "AI: 5.A3.1", type: "AI", description: "AI là công cụ hỗ trợ tra cứu nhân vật sách hiệu quả." },
  { week: 11, period: 72, subject: "Tiếng Việt", lessonTitle: "Luyện tập sử dụng từ điển", integrationCode: "NLS: 3.1.CB2a", type: "NLS", description: "Tạo và thực hành tra từ điển số đơn giản." },
  { week: 12, period: 79, subject: "Tiếng Việt", lessonTitle: "Dấu gạch ngang", integrationCode: "NLS: 1.3.CB2a", type: "NLS", description: "Nhận biết cấu trúc định dạng văn bản số có dấu gạch ngang." },
  { week: 13, period: 86, subject: "Tiếng Việt", lessonTitle: "Luyện tập về dấu gạch ngang", integrationCode: "NLS: 1.2.CB2a", type: "NLS", description: "Kiểm chứng và phân loại công dụng dấu gạch ngang." },
  { week: 14, period: 92, subject: "Tiếng Việt", lessonTitle: "Đọc: Tiếng đàn ba-la-lai-ca trên sông Đà", integrationCode: "NLS: 5.2.CB2a", type: "NLS", description: "Khai thác video tư liệu số về công trình thủy điện Sông Đà." },
  { week: 15, period: 101, subject: "Tiếng Việt", lessonTitle: "Viết đoạn văn thể hiện tình cảm về bài thơ", integrationCode: "AI: 5.C4.2", type: "AI", description: "Trải nghiệm AI gợi ý từ ngữ biểu cảm khi viết cảm nhận thơ." },
  { week: 16, period: 108, subject: "Tiếng Việt", lessonTitle: "Giới thiệu nhân vật trong phim hoạt hình", integrationCode: "AI: 5.D2.1", type: "AI", description: "Tìm hiểu cách hệ thống AI tạo dựng nhân vật hoạt hình qua dữ liệu." },
  { week: 20, period: 135, subject: "Tiếng Việt", lessonTitle: "Cách nối các vế câu ghép", integrationCode: "NLS: 1.3.CB2a", type: "NLS", description: "Sắp xếp cấu trúc vế câu ghép trên phần mềm học tập số." },
  { week: 21, period: 143, subject: "Tiếng Việt", lessonTitle: "Viết đoạn văn tả người", integrationCode: "AI: 5.C4.2", type: "AI", description: "Ứng dụng AI hỗ trợ gợi ý chi tiết miêu tả ngoại hình và tính cách." },
  { week: 23, period: 156, subject: "Tiếng Việt", lessonTitle: "Liên kết câu bằng cách lặp từ ngữ", integrationCode: "NLS: 3.1.CB2a", type: "NLS", description: "Chỉnh sửa nội dung văn bản số để tránh lỗi lặp từ không mong muốn." },
  { week: 24, period: 164, subject: "Tiếng Việt", lessonTitle: "Viết đoạn văn thể hiện cảm xúc về sự việc", integrationCode: "AI: 5.C4.2", type: "AI", description: "Trải nghiệm AI gợi ý từ ngữ bộc lộ cảm xúc." },
  { week: 25, period: 171, subject: "Tiếng Việt", lessonTitle: "Tìm hiểu cách viết chương trình hoạt động", integrationCode: "AI: 5.C4.2", type: "AI", description: "Sử dụng AI hỗ trợ lập khung chương trình sự kiện." },
  { week: 28, period: 191, subject: "Tiếng Việt", lessonTitle: "Luyện tập về đại từ và kết từ", integrationCode: "NLS: 1.2.CB2a", type: "NLS", description: "Đánh giá, so sánh cách dùng kết từ trong tài liệu số." },
  { week: 30, period: 205, subject: "Tiếng Việt", lessonTitle: "Luyện tập về câu ghép", integrationCode: "NLS: 3.1.CB2a", type: "NLS", description: "Tạo và biên tập các câu ghép trên ứng dụng học tập số." },
  { week: 33, period: 227, subject: "Tiếng Việt", lessonTitle: "Đoạn văn nêu ý kiến phản đối sự việc, hiện tượng", integrationCode: "AI: 5.A2.1", type: "AI", description: "Nhận biết AI giúp thu thập luận cứ phản đối hiện tượng xấu trên mạng." },

  // --- TOÁN (Tuần 1 - 35) ---
  { week: 2, period: 7, subject: "Toán", lessonTitle: "Ôn tập phân số (tiết 2)", integrationCode: "AI: 5.D1.1", type: "AI", description: "Ví dụ giải quyết bài toán phân số bằng công cụ số và thuật toán." },
  { week: 3, period: 14, subject: "Toán", lessonTitle: "Phân số thập phân (tiết 2)", integrationCode: "NLS: 1.1.CB2b", type: "NLS", description: "Tìm kiếm dữ liệu bảng số liệu phân số thập phân." },
  { week: 5, period: 21, subject: "Toán", lessonTitle: "Số thập phân (tiết 1)", integrationCode: "NLS: 1.1.CB2a", type: "NLS", description: "Truy cập hình ảnh trực quan biểu diễn số thập phân." },
  { week: 6, period: 28, subject: "Toán", lessonTitle: "Làm tròn số thập phân", integrationCode: "AI: 5.A1.2", type: "AI", description: "Nhận biết AI tự động làm tròn số trong xử lý dữ liệu lớn." },
  { week: 8, period: 40, subject: "Toán", lessonTitle: "Cộng hai số thập phân (tiết 2)", integrationCode: "AI: 5.A1.1", type: "AI", description: "Nhận biết máy tính và AI thực hiện phép cộng thập phân tốc độ cao." },
  { week: 11, period: 52, subject: "Toán", lessonTitle: "Nhân số thập phân với 10; 100; 1000", integrationCode: "AI: 5.C4.1", type: "AI", description: "Thuật toán dịch chuyển dấu phẩy tự động trong xử lý dữ liệu AI." },
  { week: 12, period: 60, subject: "Toán", lessonTitle: "Chia một số thập phân cho một số tự nhiên", integrationCode: "NLS: 3.4.CB2a", type: "NLS", description: "Thực hiện quy trình từng bước chuẩn thuật toán chia số thập phân." },
  { week: 13, period: 63, subject: "Toán", lessonTitle: "Chia một số tự nhiên cho một số tự nhiên mà thương là số thập phân", integrationCode: "AI: 5.A1.1", type: "AI", description: "Ứng dụng máy tính tự động chia chính xác." },
  { week: 17, period: 87, subject: "Toán", lessonTitle: "Hình tam giác. Diện tích hình tam giác", integrationCode: "NLS: 1.1.CB2b", type: "NLS", description: "Mô phỏng hình học phẳng qua phần mềm Geogebra." },
  { week: 19, period: 95, subject: "Toán", lessonTitle: "Hình tròn. Chu vi và diện tích hình tròn", integrationCode: "AI: 5.C4.1", type: "AI", description: "Sử dụng công thức tính chu vi và diện tích tự động." },
  { week: 21, period: 103, subject: "Toán", lessonTitle: "Sử dụng máy tính cầm tay (tiết 1)", integrationCode: "STEM: Máy tính cầm tay", type: "STEM", description: "Thực hành công cụ tính toán số học hiện đại." },
  { week: 21, period: 104, subject: "Toán", lessonTitle: "Sử dụng máy tính cầm tay (tiết 2)", integrationCode: "STEM: Máy tính cầm tay", type: "STEM", description: "Ứng dụng máy tính kiểm tra và xử lý số liệu nhanh." },
  { week: 23, period: 114, subject: "Toán", lessonTitle: "Hình hộp chữ nhật. Hình lập phương", integrationCode: "NLS: 2.1.CB2a", type: "NLS", description: "Tương tác với mô hình không gian 3D số." },
  { week: 23, period: 115, subject: "Toán", lessonTitle: "Diện tích xung quanh và toàn phần hình hộp", integrationCode: "AI: 5.C4.2", type: "AI", description: "Trải nghiệm công cụ mô phỏng 3D tính diện tích." },
  { week: 25, period: 121, subject: "Toán", lessonTitle: "Thể tích của một hình", integrationCode: "NLS: 3.1.CB2a", type: "NLS", description: "Xây dựng khối hình 3D trên môi trường số." },
  { week: 27, period: 134, subject: "Toán", lessonTitle: "Vận tốc", integrationCode: "AI: 5.A2.2", type: "AI", description: "AI và hệ thống định vị GPS tính toán vận tốc tức thời." },
  { week: 28, period: 138, subject: "Toán", lessonTitle: "Quãng đường", integrationCode: "AI: 5.A1.1", type: "AI", description: "Ứng dụng bản đồ số (Google Maps) tính quãng đường di chuyển." },
  { week: 29, period: 144, subject: "Toán", lessonTitle: "Thời gian", integrationCode: "NLS: 1.2.CB2a", type: "NLS", description: "Đánh giá dữ liệu thời gian di chuyển từ các ứng dụng số." },
  { week: 32, period: 156, subject: "Toán", lessonTitle: "Ôn tập số liệu và biểu đồ thống kê", integrationCode: "AI: 5.A1.1", type: "AI", description: "AI tự động phân tích và tạo biểu đồ trực quan." },

  // --- KHOA HỌC (Tuần 1 - 35) ---
  { week: 2, period: 3, subject: "Khoa học", lessonTitle: "Thành phần và tính chất của đất", integrationCode: "NLS: 3.1.CB2a", type: "NLS", description: "Tạo sơ đồ phân loại các loại đất trên máy tính." },
  { week: 3, period: 6, subject: "Khoa học", lessonTitle: "Dung dịch và sự tách chất", integrationCode: "STEM: Tách muối ra khỏi dung dịch", type: "STEM", description: "Quy trình thực nghiệm kết tinh muối từ dung dịch nước muối." },
  { week: 5, period: 10, subject: "Khoa học", lessonTitle: "Sự biến đổi hóa học của chất", integrationCode: "STEM: Thí nghiệm biến đổi hóa học", type: "STEM", description: "Làm thí nghiệm giấm ăn tác dụng với baking soda." },
  { week: 7, period: 13, subject: "Khoa học", lessonTitle: "Năng lượng và vai trò của năng lượng", integrationCode: "NLS: 1.1.CB2a", type: "NLS", description: "Khai thác video số về các nguồn năng lượng sạch (gió, mặt trời)." },
  { week: 11, period: 21, subject: "Khoa học", lessonTitle: "Năng lượng điện và sử dụng điện an toàn", integrationCode: "AI: 5.A1.1", type: "AI", description: "Hệ thống điện thông minh (Smart Grid) ứng dụng AI giám sát an toàn." },
  { week: 13, period: 26, subject: "Khoa học", lessonTitle: "Vật dẫn điện và vật cách điện", integrationCode: "NLS: 1.1.CB2a", type: "NLS", description: "Tra cứu hình ảnh mô phỏng mạch điện trực tuyến." },
  { week: 16, period: 32, subject: "Khoa học", lessonTitle: "Sự sinh sản của động vật", integrationCode: "AI: 5.C4.2", type: "AI", description: "Mô phỏng vòng đời sinh sản của động vật qua ứng dụng số." },
  { week: 19, period: 38, subject: "Khoa học", lessonTitle: "Sự lớn lên và phát triển của thực vật", integrationCode: "NLS: 1.1.CB2b", type: "NLS", description: "Xem video tua nhanh (Timelapse) quá trình hạt nảy mầm." },
  { week: 21, period: 42, subject: "Khoa học", lessonTitle: "Môi trường và tài nguyên thiên nhiên", integrationCode: "NLS: 4.3.CB2a", type: "NLS", description: "Học tập trực tuyến về bảo vệ môi trường, bảo vệ sức khỏe." },
  { week: 23, period: 45, subject: "Khoa học", lessonTitle: "Tác động của con người đến môi trường", integrationCode: "NLS: 4.3.CB2a", type: "NLS", description: "Khai thác tư liệu số về ô nhiễm và giải pháp sống xanh." },
  { week: 26, period: 52, subject: "Khoa học", lessonTitle: "Ô nhiễm môi trường không khí và nước", integrationCode: "NLS: 1.1.CB2a", type: "NLS", description: "Xem chỉ số chất lượng không khí (AQI) trực tuyến." },
  { week: 28, period: 56, subject: "Khoa học", lessonTitle: "Biện pháp bảo vệ môi trường", integrationCode: "NLS: 4.3.CB2a", type: "NLS", description: "Tuyên truyền lối sống xanh qua sản phẩm số." },
  { week: 31, period: 61, subject: "Khoa học", lessonTitle: "Biến đổi khí hậu toàn cầu", integrationCode: "NLS: 4.4.CB2a", type: "NLS", description: "Tìm hiểu giải pháp công nghệ xanh và giảm thiểu rác thải nhựa." },

  // --- LỊCH SỬ VÀ ĐỊA LÍ (Tuần 1 - 35) ---
  { week: 1, period: 2, subject: "Lịch sử và Địa lí", lessonTitle: "Vị trí địa lí và lãnh thổ Việt Nam", integrationCode: "AI: 5.A1.1", type: "AI", description: "Bản đồ số vệ tinh và AI hỗ trợ nhận diện đường biên giới quốc gia." },
  { week: 2, period: 3, subject: "Lịch sử và Địa lí", lessonTitle: "Địa hình và khoáng sản Việt Nam", integrationCode: "NLS: 1.1.CB2b", type: "NLS", description: "Tra cứu bản đồ số địa hình 3D Việt Nam." },
  { week: 4, period: 7, subject: "Lịch sử và Địa lí", lessonTitle: "Khí hậu và sông ngòi Việt Nam", integrationCode: "NLS: 2.2.CB2a", type: "NLS", description: "Phân tích số liệu thủy văn sông ngòi từ cổng thông tin khí tượng." },
  { week: 5, period: 10, subject: "Lịch sử và Địa lí", lessonTitle: "Biển đảo Việt Nam", integrationCode: "AI: 5.D2.1", type: "AI", description: "Ứng dụng hệ thống giám sát tàu thuyền trên biển bằng AI và vệ tinh." },
  { week: 7, period: 13, subject: "Lịch sử và Địa lí", lessonTitle: "Nước Văn Lang, Âu Lạc", integrationCode: "AI: 5.A2.1", type: "AI", description: "AI phục dựng hình ảnh 3D thành Cổ Loa và trang phục thời Hùng Vương." },
  { week: 8, period: 16, subject: "Lịch sử và Địa lí", lessonTitle: "Đấu tranh giành độc lập thời Bắc thuộc", integrationCode: "NLS: 3.1.CB2a", type: "NLS", description: "Vẽ trục thời gian lịch sử các cuộc khởi nghĩa trên máy tính." },
  { week: 10, period: 19, subject: "Lịch sử và Địa lí", lessonTitle: "Chiến thắng Bạch Đằng năm 938", integrationCode: "AI: 5.A1.1", type: "AI", description: "Mô phỏng 3D trận chiến cọc ngầm trên sông Bạch Đằng." },
  { week: 11, period: 21, subject: "Lịch sử và Địa lí", lessonTitle: "Triều Lý và việc định đô ở Thăng Long", integrationCode: "AI: 5.B3.1", type: "AI", description: "Tái hiện không gian Hoàng thành Thăng Long thời Lý qua công nghệ số." },
  { week: 12, period: 24, subject: "Lịch sử và Địa lí", lessonTitle: "Triều Trần và cuộc kháng chiến chống Mông - Nguyên", integrationCode: "NLS: 3.1.CB2a", type: "NLS", description: "Tạo sơ đồ tư duy chiến thắng Bạch Đằng 1288." },
  { week: 15, period: 29, subject: "Lịch sử và Địa lí", lessonTitle: "Khởi nghĩa Lam Sơn và triều Hậu Lê", integrationCode: "NLS: 3.1.CB2a", type: "NLS", description: "Tra cứu di tích lịch sử Lam Sơn trên cổng di sản số." },
  { week: 16, period: 32, subject: "Lịch sử và Địa lí", lessonTitle: "Triều Nguyễn", integrationCode: "AI: 5.A2.2", type: "AI", description: "Tham quan ảo 3D Quần thể Di tích Cố đô Huế." },
  { week: 19, period: 37, subject: "Lịch sử và Địa lí", lessonTitle: "Cách mạng tháng Tám năm 1945", integrationCode: "NLS: 1.3.CB2a", type: "NLS", description: "Sắp xếp tư liệu ảnh lịch sử ngày 2/9/1945 tại Quảng trường Ba Đình." },
  { week: 20, period: 40, subject: "Lịch sử và Địa lí", lessonTitle: "Chiến dịch Điện Biên Phủ năm 1954", integrationCode: "NLS: 5.2.CB2a", type: "NLS", description: "Xem phim tư liệu số 3D tái hiện 56 ngày đêm Điện Biên Phủ." },
  { week: 22, period: 43, subject: "Lịch sử và Địa lí", lessonTitle: "Chiến dịch Hồ Chí Minh năm 1975", integrationCode: "NLS: 6.1.CB2a", type: "NLS", description: "Khai thác tư liệu hình ảnh số ngày giải phóng miền Nam 30/4/1975." },
  { week: 23, period: 45, subject: "Lịch sử và Địa lí", lessonTitle: "Các nước láng giềng của Việt Nam", integrationCode: "NLS: 5.2.CB2a", type: "NLS", description: "Khám phá bản đồ số các nước Lào, Cam-pu-chia, Trung Quốc." },
  { week: 24, period: 47, subject: "Lịch sử và Địa lí", lessonTitle: "Hiệp hội các quốc gia Đông Nam Á (ASEAN)", integrationCode: "AI: 5.D1.1", type: "AI", description: "AI hỗ trợ dịch thuật tự động ngôn ngữ các nước ASEAN." },
  { week: 25, period: 50, subject: "Lịch sử và Địa lí", lessonTitle: "Châu Á", integrationCode: "NLS: 1.1.CB2b", type: "NLS", description: "Khám phá địa hình và văn hóa châu Á trên Google Earth." },
  { week: 26, period: 52, subject: "Lịch sử và Địa lí", lessonTitle: "Châu Âu", integrationCode: "AI: 5.B1.1", type: "AI", description: "Trải nghiệm tour du lịch ảo các danh thắng nổi tiếng châu Âu." },
  { week: 27, period: 54, subject: "Lịch sử và Địa lí", lessonTitle: "Châu Phi", integrationCode: "AI: 5.A2.2", type: "AI", description: "Tìm hiểu thế giới động vật hoang dã thảo nguyên châu Phi qua AI." },
  { week: 30, period: 59, subject: "Lịch sử và Địa lí", lessonTitle: "Châu Mỹ", integrationCode: "AI: 5.B1.2", type: "AI", description: "Khám phá rừng nhiệt đới A-ma-dôn qua mô phỏng 3D." },
  { week: 31, period: 61, subject: "Lịch sử và Địa lí", lessonTitle: "Châu Đại Dương và Châu Nam Cực", integrationCode: "NLS: 1.1.CB2b", type: "NLS", description: "Tìm kiếm dữ liệu biến đổi khí hậu làm tan băng Nam Cực." },
  { week: 32, period: 64, subject: "Lịch sử và Địa lí", lessonTitle: "Các đại dương trên thế giới", integrationCode: "NLS: 4.4.CB2a", type: "NLS", description: "Giáo dục bảo vệ đại dương khỏi rác thải nhựa." },
  { week: 34, period: 67, subject: "Lịch sử và Địa lí", lessonTitle: "Chung tay bảo vệ hành tinh xanh", integrationCode: "AI: 5.A2.1", type: "AI", description: "Ứng dụng AI theo dõi và dự báo suy giảm rừng toàn cầu." },

  // --- ĐẠO ĐỨC (Tuần 1 - 35) ---
  { week: 2, period: 2, subject: "Đạo đức", lessonTitle: "Biết ơn người có công với quê hương, đất nước (tiết 2)", integrationCode: "AI: 5.A2.2", type: "AI", description: "Nhận biết AI hỗ trợ lưu giữ và truyền bá gương các anh hùng liệt sĩ." },
  { week: 4, period: 4, subject: "Đạo đức", lessonTitle: "Tôn trọng sự khác biệt của người khác (tiết 2)", integrationCode: "NLS: 3.1.CB2a", type: "NLS", description: "Tạo thông điệp số về tôn trọng và hòa đồng trong tập thể." },
  { week: 6, period: 6, subject: "Đạo đức", lessonTitle: "Vượt qua khó khăn trong học tập và cuộc sống", integrationCode: "AI: 5.B1.1", type: "AI", description: "Tìm kiếm các giải pháp công nghệ số hỗ trợ người khuyết tật vượt khó." },
  { week: 10, period: 10, subject: "Đạo đức", lessonTitle: "Bảo vệ môi trường sống (tiết 2)", integrationCode: "AI: 5.A1.1", type: "AI", description: "AI hỗ trợ phân loại rác thải tự động tại nguồn." },
  { week: 13, period: 13, subject: "Đạo đức", lessonTitle: "Bảo vệ của công và tài sản chung", integrationCode: "NLS: 1.1.CB2b", type: "NLS", description: "Tìm kiếm quy định pháp luật về bảo vệ tài sản công cộng trên mạng." },
  { week: 16, period: 16, subject: "Đạo đức", lessonTitle: "Tự lập trong cuộc sống", integrationCode: "AI: 5.D1.1", type: "AI", description: "Sử dụng ứng dụng số nhắc việc để rèn luyện thói quen tự lập." },
  { week: 20, period: 20, subject: "Đạo đức", lessonTitle: "Phòng tránh bạo lực học đường (tiết 2)", integrationCode: "NLS: 3.1.CB2a", type: "NLS", description: "Thiết kế poster số tuyên truyền phòng chống bạo lực học đường." },
  { week: 22, period: 22, subject: "Đạo đức", lessonTitle: "An toàn giao thông đường bộ", integrationCode: "AI: 5.C4.1", type: "AI", description: "Camera AI giám sát an toàn giao thông và cảnh báo vi phạm." },
  { week: 25, period: 25, subject: "Đạo đức", lessonTitle: "Ứng xử văn minh trên không gian mạng", integrationCode: "NLS: 4.2.CB2a", type: "NLS", description: "Bảo vệ thông tin cá nhân và ứng xử chuẩn mực trong môi trường số." },
  { week: 31, period: 31, subject: "Đạo đức", lessonTitle: "Tuân thủ pháp luật và nội quy nơi công cộng", integrationCode: "NLS: 5.2.CB2a", type: "NLS", description: "Tra cứu các nội quy, quy định công cộng trực tuyến." },

  // --- TIN HỌC (Tuần 1 - 35) ---
  { week: 1, period: 1, subject: "Tin học", lessonTitle: "Chủ đề 1: Máy tính và em - Trí tuệ nhân tạo quanh ta", integrationCode: "AI: 5.A1.1", type: "AI", description: "Nhận biết và mô tả AI thực hiện một số việc thay con người." },
  { week: 2, period: 2, subject: "Tin học", lessonTitle: "Khám phá các ứng dụng AI trong đời sống", integrationCode: "AI: 5.A1.1", type: "AI", description: "Kể tên các ứng dụng AI phổ biến: trợ lý ảo, dịch thuật, nhận diện giọng nói." },
  { week: 3, period: 3, subject: "Tin học", lessonTitle: "Truy cập thông tin trong môi trường số", integrationCode: "NLS: 1.1.CB2.C", type: "NLS", description: "Tìm cách truy cập dữ liệu, thông tin và nội dung số đơn giản." },
  { week: 4, period: 4, subject: "Tin học", lessonTitle: "Khai thác thông tin an toàn trên Internet", integrationCode: "NLS: 1.1.CB2.C", type: "NLS", description: "Quy tắc an toàn khi truy cập và khai thác thông tin mạng." },
  { week: 5, period: 5, subject: "Tin học", lessonTitle: "Giải quyết vấn đề với sự trợ giúp của AI", integrationCode: "AI: 5.D1.1", type: "AI", description: "Nêu ví dụ cụ thể về các bài toán thực tế được giải quyết bằng AI." },
  { week: 7, period: 7, subject: "Tin học", lessonTitle: "Sắp xếp dữ liệu trong cây thư mục", integrationCode: "NLS: 1.3.CB2.b", type: "NLS", description: "Nhận biết nơi sắp xếp dữ liệu khoa học trong môi trường số." },
  { week: 9, period: 9, subject: "Tin học", lessonTitle: "Bản quyền và an toàn dữ liệu cá nhân", integrationCode: "NLS: 3.3.CB2.a & AI: 5.B2.1", type: "AI", description: "Biết rằng chia sẻ thông tin cá nhân cho AI có thể bị lộ hoặc lợi dụng." },
  { week: 11, period: 11, subject: "Tin học", lessonTitle: "Định dạng văn bản và chèn hình ảnh", integrationCode: "NLS: 3.1.CB2.a", type: "NLS", description: "Tạo và chỉnh sửa nội dung văn bản đơn giản theo mẫu." },
  { week: 15, period: 15, subject: "Tin học", lessonTitle: "Làm quen với lập trình trực quan Scratch", integrationCode: "AI: 5.C4.2", type: "AI", description: "Trải nghiệm lập trình mô phỏng học máy có giám sát." },
  { week: 19, period: 19, subject: "Tin học", lessonTitle: "Hoàn thiện bài trình chiếu đa phương tiện", integrationCode: "NLS: 3.2.CB2.a", type: "NLS", description: "Sửa đổi, tinh chỉnh và nâng cao chất lượng bài trình chiếu." },
  { week: 20, period: 20, subject: "Tin học", lessonTitle: "Quy trình thuật toán từng bước", integrationCode: "NLS: 3.4.CB2.a", type: "NLS", description: "Liệt kê hướng dẫn giải quyết bài toán để máy tính thực hiện." },
  { week: 22, period: 22, subject: "Tin học", lessonTitle: "AI tự động hóa công việc", integrationCode: "AI: 5.A1.1", type: "AI", description: "Hiểu AI thực hiện việc lặp lại, nguy hiểm với độ chính xác cao." },
  { week: 26, period: 26, subject: "Tin học", lessonTitle: "Cấu trúc điều kiện trong lập trình Scratch", integrationCode: "AI: 5.C4.1", type: "AI", description: "Sử dụng câu lệnh nếu ... thì ... trong lập trình AI đơn giản." },
  { week: 28, period: 28, subject: "Tin học", lessonTitle: "Cập nhật dữ liệu biến số trong Scratch", integrationCode: "AI: 5.D2.1", type: "AI", description: "Giải thích hệ thống AI hoạt động tốt hơn khi dữ liệu được cập nhật." },
  { week: 32, period: 32, subject: "Tin học", lessonTitle: "Dự án lập trình trò chơi đơn giản (tiết 1)", integrationCode: "STEM: Lập trình trò chơi", type: "STEM", description: "Xây dựng kịch bản trò chơi tương tác giáo dục." },
  { week: 33, period: 33, subject: "Tin học", lessonTitle: "Dự án lập trình trò chơi đơn giản (tiết 2)", integrationCode: "STEM: Lập trình trò chơi", type: "STEM", description: "Thử nghiệm và tối ưu hóa trò chơi hoàn thiện." },

  // --- CÔNG NGHỆ (Tuần 1 - 35) ---
  { week: 1, period: 1, subject: "Công nghệ", lessonTitle: "Công nghệ trong đời sống", integrationCode: "NLS: 1.1.CB2b", type: "NLS", description: "Tra cứu hình ảnh các thiết bị công nghệ hiện đại trong gia đình." },
  { week: 5, period: 5, subject: "Công nghệ", lessonTitle: "Sử dụng quạt điện an toàn, tiết kiệm", integrationCode: "AI: 5.A2.1", type: "AI", description: "Quạt thông minh tự động điều chỉnh tốc độ theo nhiệt độ phòng." },
  { week: 8, period: 8, subject: "Công nghệ", lessonTitle: "Sử dụng tủ lạnh tiết kiệm điện", integrationCode: "AI: 5.D1.1", type: "AI", description: "Tủ lạnh thông minh AI gợi ý bảo quản thực phẩm chống lãng phí." },
  { week: 13, period: 13, subject: "Công nghệ", lessonTitle: "Bảo đảm an toàn khi sử dụng đồ điện", integrationCode: "NLS: 4.2.CB2a", type: "NLS", description: "Tìm hiểu cẩm nang số về an toàn phòng chống cháy nổ điện." },
  { week: 17, period: 17, subject: "Công nghệ", lessonTitle: "Lắp ráp mô hình kỹ thuật đơn giản", integrationCode: "NLS: 1.2.CB2a", type: "NLS", description: "Đọc và đối chiếu bản vẽ kỹ thuật hướng dẫn lắp ráp số." },
  { week: 23, period: 23, subject: "Công nghệ", lessonTitle: "Lắp ráp xe ô tô chạy pin", integrationCode: "AI: 5.A1.1", type: "AI", description: "Xe tự hành AI và cảm biến tránh chướng ngại vật." },
  { week: 24, period: 24, subject: "Công nghệ", lessonTitle: "Lắp ráp xe chạy pin (tiết 1)", integrationCode: "STEM: Xe chạy pin", type: "STEM", description: "Thiết kế khung xe và lắp đặt hệ thống bánh răng truyền động." },
  { week: 25, period: 25, subject: "Công nghệ", lessonTitle: "Lắp ráp xe chạy pin (tiết 2)", integrationCode: "STEM: Xe chạy pin", type: "STEM", description: "Thử nghiệm tốc độ và hiệu chỉnh đường chạy của xe." },
  { week: 27, period: 27, subject: "Công nghệ", lessonTitle: "Mô hình cánh quạt chạy bằng pin", integrationCode: "AI: 5.A2.2", type: "AI", description: "Cánh quạt tạo gió và nguyên lý khí động học mô phỏng số." },
  { week: 30, period: 30, subject: "Công nghệ", lessonTitle: "Bảo dưỡng đồ dùng công nghệ trong gia đình", integrationCode: "NLS: 1.3.CB2a", type: "NLS", description: "Lập bảng theo dõi định kỳ bảo dưỡng thiết bị gia đình trên máy tính." },

  // --- HOẠT ĐỘNG TRẢI NGHIỆM (Tuần 1 - 35) ---
  { week: 2, period: 5, subject: "HĐTN", lessonTitle: "HĐGDCĐ: Tự hào truyền thống trường em", integrationCode: "AI: 5.A1.1", type: "AI", description: "Sử dụng ứng dụng số trình chiếu ảnh và tư liệu truyền thống nhà trường." },
  { week: 4, period: 11, subject: "HĐTN", lessonTitle: "HĐGDCĐ: Giữ gìn tình bạn đẹp", integrationCode: "AI: 5.A1.2", type: "AI", description: "Nhận biết công nghệ hỗ trợ kết nối bạn bè lành mạnh." },
  { week: 6, period: 18, subject: "HĐTN", lessonTitle: "Sinh hoạt lớp: Lập kế hoạch rèn luyện bản thân", integrationCode: "NLS: 2.4.CB2a", type: "NLS", description: "Sử dụng công cụ số cộng tác lập kế hoạch học tập nhóm." },
  { week: 9, period: 26, subject: "HĐTN", lessonTitle: "HĐGDCĐ: Quản lý thời gian biểu cá nhân", integrationCode: "AI: 5.A2.2", type: "AI", description: "Ứng dụng AI phân tích và tối ưu hóa thời gian biểu học tập." },
  { week: 11, period: 33, subject: "HĐTN", lessonTitle: "Sinh hoạt lớp: Sáng tạo góc học tập xanh", integrationCode: "NLS: 3.1.CB2a", type: "NLS", description: "Thiết kế sơ đồ bài trí không gian học tập số tiện nghi." },
  { week: 14, period: 41, subject: "HĐTN", lessonTitle: "HĐGDCĐ: Tìm hiểu nghề truyền thống quê hương", integrationCode: "AI: 5.D1.1", type: "AI", description: "Ứng dụng AI tra cứu và giới thiệu sản phẩm làng nghề thủ công." },
  { week: 16, period: 47, subject: "HĐTN", lessonTitle: "HĐGDCĐ: Nghệ thuật làm chủ cảm xúc", integrationCode: "AI: 5.B3.1", type: "AI", description: "Hiểu rằng cảm xúc chân thực của con người khác biệt với phản hồi máy móc." },
  { week: 20, period: 60, subject: "HĐTN", lessonTitle: "Sinh hoạt lớp: Hội chợ xuân chia sẻ yêu thương", integrationCode: "NLS: 5.2.CB2a", type: "NLS", description: "Sử dụng bảng tính quản lý quyên góp từ thiện minh bạch." },
  { week: 22, period: 65, subject: "HĐTN", lessonTitle: "HĐGDCĐ: Chi tiêu hợp lý và tiết kiệm", integrationCode: "AI: 5.D2.1", type: "AI", description: "Sử dụng phần mềm quản lý tài chính cá nhân thông minh." },
  { week: 25, period: 75, subject: "HĐTN", lessonTitle: "Sinh hoạt lớp: Tự bảo vệ trước hiểm họa mạng", integrationCode: "NLS: 1.1.CB2b", type: "NLS", description: "Nhận diện tin giả, đường link lạ và mã độc trên môi trường mạng." },
  { week: 28, period: 83, subject: "HĐTN", lessonTitle: "HĐGDCĐ: Ước mơ nghề nghiệp tương lai", integrationCode: "AI: 5.A2.2", type: "AI", description: "Tìm hiểu ngành nghề công nghệ cao và vai trò của AI trong tương lai." },
  { week: 31, period: 92, subject: "HĐTN", lessonTitle: "HĐGDCĐ: Tri ân thầy cô và mái trường", integrationCode: "AI: 5.D2.1", type: "AI", description: "Biên tập video clip kỷ yếu tri ân bằng công cụ số." },
  { week: 34, period: 102, subject: "HĐTN", lessonTitle: "Sinh hoạt lớp: Hành trang bước vào lớp 6", integrationCode: "NLS: 3.1.CB2a", type: "NLS", description: "Lập cẩm nang số chuẩn bị tâm lý và kỹ năng lên bậc THCS." },

  // --- MĨ THUẬT (Tuần 1 - 35) ---
  { week: 1, period: 1, subject: "Mĩ thuật", lessonTitle: "Chủ đề 1: Khám phá chất liệu và màu sắc", integrationCode: "NLS: 2.4.CB2a", type: "NLS", description: "Chọn công cụ số cộng tác chia sẻ ý tưởng vẽ tranh." },
  { week: 6, period: 6, subject: "Mĩ thuật", lessonTitle: "Chủ đề 3: Nhân vật lịch sử hào hùng", integrationCode: "AI: 5.B2.1", type: "AI", description: "Sử dụng AI phục dựng trang phục và vũ khí lịch sử phục vụ vẽ tranh." },
  { week: 9, period: 9, subject: "Mĩ thuật", lessonTitle: "Chủ đề 4: Sáng tạo tranh phong cảnh quê hương", integrationCode: "AI: 5.A2.2", type: "AI", description: "Dù AI vẽ nhanh, chỉ con người mới truyền tải cảm xúc sâu sắc vào tác phẩm." },
  { week: 13, period: 13, subject: "Mĩ thuật", lessonTitle: "Chủ đề 5: Thiết kế họa tiết trang trí", integrationCode: "NLS: 2.5.CB2a & 2.5.CB2b", type: "NLS", description: "Chuẩn mực văn hóa khi chia sẻ và đánh giá tác phẩm mĩ thuật trực tuyến." },
  { week: 17, period: 17, subject: "Mĩ thuật", lessonTitle: "Triển lãm sản phẩm sáng tạo HKI", integrationCode: "STEM: Triển lãm HKI", type: "STEM", description: "Không gian trưng bày mĩ thuật và STEM tái chế sáng tạo." },
  { week: 20, period: 20, subject: "Mĩ thuật", lessonTitle: "Chủ đề 6: Nghệ thuật điêu khắc và tạo hình 3D", integrationCode: "NLS: 2.6.CB2a & 2.6.CB2b", type: "NLS", description: "Bảo vệ bản quyền sản phẩm sáng tạo cá nhân trên mạng." },
  { week: 22, period: 22, subject: "Mĩ thuật", lessonTitle: "Chủ đề 7: Sáng tạo trang phục dân tộc", integrationCode: "AI: 5.B2.1", type: "AI", description: "Tra cứu thư viện ảnh hoa văn thổ cẩm hỗ trợ thiết kế." },
  { week: 26, period: 26, subject: "Mĩ thuật", lessonTitle: "Chủ đề 8: Tranh cổ động vì môi trường", integrationCode: "AI: 5.A1.3", type: "AI", description: "Quảng bá hình ảnh Việt Nam và thông điệp xanh qua tranh nghệ thuật số." },
  { week: 31, period: 31, subject: "Mĩ thuật", lessonTitle: "Chủ đề 9: Thế giới tương lai qua nét vẽ", integrationCode: "AI: 5.C3.2", type: "AI", description: "Hình dung thành phố tương lai kết nối con người bằng công nghệ." },
  { week: 35, period: 35, subject: "Mĩ thuật", lessonTitle: "Triển lãm mĩ thuật và STEM cuối năm", integrationCode: "STEM: Triển lãm HKII", type: "STEM", description: "Trưng bày tổng kết các dự án nghệ thuật và công nghệ của học sinh." },

  // --- GIÁO DỤC THỂ CHẤT (Tuần 1 - 35) ---
  { week: 1, period: 1, subject: "GDTC", lessonTitle: "Đội hình đội ngũ: Biến đổi đội hình", integrationCode: "NLS: 1.1TC1a", type: "NLS", description: "Khai thác video clip về vị trí đứng và hướng di chuyển chuẩn." },
  { week: 3, period: 5, subject: "GDTC", lessonTitle: "Động tác quay sau và giậm chân tại chỗ", integrationCode: "NLS: 1.2TC1a", type: "NLS", description: "So sánh video tập của bản thân với hình mẫu chuẩn." },
  { week: 5, period: 9, subject: "GDTC", lessonTitle: "Bài thể dục phát triển chung", integrationCode: "NLS: 5.2TC1a", type: "NLS", description: "Sử dụng video quay chậm để phân tích biên độ động tác." },
  { week: 7, period: 13, subject: "GDTC", lessonTitle: "Bài tập rèn luyện tư thế cơ bản", integrationCode: "NLS: 2.5TC1a", type: "NLS", description: "Nhận xét lịch sự và mang tính xây dựng khi xem clip tập luyện của bạn." },
  { week: 9, period: 17, subject: "GDTC", lessonTitle: "Tập hợp hàng ngang và dóng hàng", integrationCode: "NLS: 6.1TC2a", type: "NLS", description: "Làm quen với AI phân tích tư thế đứng thẳng, đúng góc độ." },
  { week: 13, period: 25, subject: "GDTC", lessonTitle: "Bật nhảy tại chỗ và tiếp đất an toàn", integrationCode: "NLS: 1.3TC1a", type: "NLS", description: "Sắp xếp chuỗi hình ảnh số minh họa kỹ thuật giậm nhảy." },
  { week: 17, period: 33, subject: "GDTC", lessonTitle: "Chạy nhanh cự li ngắn", integrationCode: "NLS: 4.3TC1a", type: "NLS", description: "Tập luyện ngoài trời điều độ, bảo vệ mắt và sức khỏe sau giờ học máy tính." },
  { week: 19, period: 37, subject: "GDTC", lessonTitle: "Bài tập thể dục nhịp điệu cơ bản", integrationCode: "NLS: 6.1TC2a", type: "NLS", description: "AI hỗ trợ nhận diện nhịp điệu và phối hợp tay chân đồng bộ." },
  { week: 23, period: 45, subject: "GDTC", lessonTitle: "Môn Thể thao tự chọn: Bóng rổ cơ bản", integrationCode: "NLS: 6.1TC2a", type: "NLS", description: "Phần mềm phân tích tư thế ném rổ và góc vung tay chuẩn xác." },
  { week: 27, period: 53, subject: "GDTC", lessonTitle: "Kỹ thuật chuyền và bắt bóng", integrationCode: "NLS: 6.1TC2a", type: "NLS", description: "Xem video mô phỏng AI về quỹ đạo bay của bóng." },
  { week: 33, period: 65, subject: "GDTC", lessonTitle: "Hành quân dã ngoại rèn luyện thể lực", integrationCode: "GDQPAN: Kỉ luật hàng ngũ", type: "GDQPAN", description: "Rèn ý thức tổ chức kỉ luật, chấp hành hiệu lệnh và phối hợp đồng đội." },
  { week: 35, period: 69, subject: "GDTC", lessonTitle: "Kiểm tra đánh giá thể lực cuối năm", integrationCode: "GDQPAN: Tinh thần trách nhiệm", type: "GDQPAN", description: "Thực hiện nhiệm vụ thể lực nghiêm túc, trung thực và kiên trì." },
  { week: 35, period: 70, subject: "GDTC", lessonTitle: "Tổng kết phong trào thể thao", integrationCode: "BVMT: Vệ sinh sân bãi", type: "BVMT", description: "Giữ vệ sinh sân tập và bảo quản dụng cụ thể thao bền đẹp." },

  // --- ÂM NHẠC (Tuần 1 - 35) ---
  { week: 2, period: 2, subject: "Âm nhạc", lessonTitle: "Học hát: Reo vang bình minh (tiết 2)", integrationCode: "NLS: 3.1.CB2a", type: "NLS", description: "Nghe file mp3/mp4, ghi âm phần hát nhóm để tự đánh giá cao độ." },
  { week: 5, period: 5, subject: "Âm nhạc", lessonTitle: "Dân ca Nam Bộ: Lí cây đa", integrationCode: "NLS: 1.1.CB2a & AI: NLaA2", type: "AI", description: "AI gợi ý các làn điệu dân ca tương đồng; tìm kiếm làn điệu dân ca trên mạng." },
  { week: 7, period: 7, subject: "Âm nhạc", lessonTitle: "Nhạc cụ dân tộc: Đàn nhị", integrationCode: "NLS: 1.1.CB2b", type: "NLS", description: "Tìm kiếm video độc tấu đàn nhị của các nghệ sĩ nổi tiếng trên Internet." },
  { week: 9, period: 9, subject: "Âm nhạc", lessonTitle: "Lí thuyết âm nhạc: Nhịp 2/4", integrationCode: "NLS: 1.1.CB2a", type: "NLS", description: "Sử dụng ứng dụng gõ phách ảo trực quan trên máy tính." },
  { week: 11, period: 11, subject: "Âm nhạc", lessonTitle: "Biểu diễn bài hát kết hợp vận động phụ họa", integrationCode: "NLS: 2.4.CB2a", type: "NLS", description: "Dùng máy tính bảng quay video ngắn biểu diễn của nhóm để tự rút kinh nghiệm." },
  { week: 13, period: 13, subject: "Âm nhạc", lessonTitle: "Thưởng thức âm nhạc: Câu chuyện âm nhạc", integrationCode: "NLS: 1.1.CB2a", type: "NLS", description: "Truy cập đúng nguồn học liệu số an toàn nghe trích đoạn giao hưởng." },
  { week: 20, period: 20, subject: "Âm nhạc", lessonTitle: "Tìm hiểu nhạc sĩ Bùi Đình Thảo", integrationCode: "NLS: 1.1.CB2a", type: "NLS", description: "Tìm kiếm tiểu sử và các tác phẩm thiếu nhi nổi tiếng của nhạc sĩ trên mạng." },
  { week: 23, period: 23, subject: "Âm nhạc", lessonTitle: "Học hát bài hát thiếu nhi quốc tế", integrationCode: "AI: NLa-A2", type: "AI", description: "Nhận biết cảm xúc tác phẩm do con người sáng tác so với nhạc đệm AI mô phỏng." },
  { week: 28, period: 28, subject: "Âm nhạc", lessonTitle: "Tập đọc nhạc số 4", integrationCode: "NLS: 1.3.CB2a", type: "NLS", description: "Lưu trữ tệp bài đọc nhạc cá nhân vào thư mục lớp học số." },
  { week: 29, period: 29, subject: "Âm nhạc", lessonTitle: "Hòa âm phối khí đơn giản", integrationCode: "AI: NLa.A2", type: "AI", description: "So sánh nhạc đệm hòa âm bằng AI với biểu diễn trực tiếp bằng nhạc cụ thực." },
  { week: 31, period: 31, subject: "Âm nhạc", lessonTitle: "Luyện tập hát hòa giọng và bè đơn giản", integrationCode: "NLS: 1.1.CB2a, 3.1.CB2a", type: "NLS", description: "Tìm file beat karaoke trên Youtube và thu âm luyện bè chuẩn xác." },

  // --- TIẾNG ANH (Tuần 1 - 35) ---
  { week: 1, period: 2, subject: "Tiếng Anh", lessonTitle: "Starter: Back to school - Lesson 1", integrationCode: "AI: 5.A3.1", type: "AI", description: "AI là công cụ hỗ trợ khởi đầu ngày học hiệu quả (tra từ vựng chào hỏi)." },
  { week: 2, period: 6, subject: "Tiếng Anh", lessonTitle: "Unit 1: All About Me - Lesson 1", integrationCode: "NLS: 1.2.CB2a", type: "NLS", description: "Kiểm chứng thông tin sở thích cá nhân từ 2 nguồn web học tiếng Anh uy tín." },
  { week: 4, period: 15, subject: "Tiếng Anh", lessonTitle: "Unit 2: Our Homes - Lesson 3", integrationCode: "STEM: Truyền âm thanh bài Chant", type: "STEM", description: "Tìm hiểu cách âm thanh bài chant truyền qua wifi từ máy chủ đến loa lớp học." },
  { week: 5, period: 19, subject: "Tiếng Anh", lessonTitle: "Unit 3: My Foreign Friends - Lesson 2", integrationCode: "AI: 5.A2.1", type: "AI", description: "Nhận biết AI không có tính cách thật như con người, chỉ mô phỏng đức tính tốt qua lập trình." },
  { week: 6, period: 23, subject: "Tiếng Anh", lessonTitle: "Unit 4: Our Free-Time Activities - Lesson 1", integrationCode: "NLS: 4.3.CB2a", type: "NLS", description: "Khuyến khích học sinh vận động thể chất thay vì ngồi trước màn hình quá 20 phút." },
  { week: 9, period: 33, subject: "Tiếng Anh", lessonTitle: "Unit 5: My Future Job - Lesson 3", integrationCode: "STEM: Robot phẫu thuật y tế", type: "STEM", description: "Khám phá cấu tạo cơ học của các dòng Robot phẫu thuật hiện đại dùng trong y tế." },
  { week: 10, period: 38, subject: "Tiếng Anh", lessonTitle: "Unit 6: Our School - Lesson 1", integrationCode: "AI: 5.A2.1", type: "AI", description: "Nhận biết bảng tương tác và Robot hỗ trợ giảng dạy AI ứng dụng trong trường học." },
  { week: 12, period: 45, subject: "Tiếng Anh", lessonTitle: "Unit 7: Our Timetable - Lesson 1", integrationCode: "NLS: 1.1.CB2a", type: "NLS", description: "Xác định từ khóa tiếng Anh phù hợp để tìm hình ảnh minh họa cho thời khóa biểu." },
  { week: 14, period: 53, subject: "Tiếng Anh", lessonTitle: "Unit 8: Favorite Subjects - Lesson 2", integrationCode: "STEM: Dụng cụ thí nghiệm Khoa học", type: "STEM", description: "Khám phá cấu tạo và công dụng của các dụng cụ thí nghiệm trong môn Science." },
  { week: 14, period: 56, subject: "Tiếng Anh", lessonTitle: "Unit 9: Our Outdoor Activities - Lesson 1", integrationCode: "AI: 5.C5.1", type: "AI", description: "Camera AI có thể nhận diện khuôn mặt và đếm số lượng học sinh tham gia múa hát." },
  { week: 19, period: 73, subject: "Tiếng Anh", lessonTitle: "Unit 11: Family Ties - Lesson 1", integrationCode: "AI: 5.A1.1", type: "AI", description: "Nhận diện khuôn mặt (facial recognition) hỗ trợ phân loại album ảnh gia đình tự động." },
  { week: 21, period: 80, subject: "Tiếng Anh", lessonTitle: "Unit 12: Vietnamese Festivals - Lesson 1", integrationCode: "NLS: 1.1.CB2b", type: "NLS", description: "Thực hành tìm kiếm hình ảnh lễ hội truyền thống Việt Nam trên Internet an toàn." },
  { week: 23, period: 89, subject: "Tiếng Anh", lessonTitle: "Unit 13: Special Days - Lesson 3", integrationCode: "STEM: Micro không dây", type: "STEM", description: "Tìm hiểu nguyên lý truyền âm qua sóng vô tuyến của micro không dây." },
  { week: 23, period: 91, subject: "Tiếng Anh", lessonTitle: "Unit 14: Staying Healthy - Lesson 1", integrationCode: "AI: 5.A1.1", type: "AI", description: "Ứng dụng AI theo dõi sức khỏe (Fitness Tracker) đếm bước chân và nhịp tim." },
  { week: 25, period: 98, subject: "Tiếng Anh", lessonTitle: "Unit 15: Health Problems - Lesson 1", integrationCode: "NLS: 1.1.CB2a", type: "NLS", description: "Xác định từ khóa tiếng Anh chính xác để tra cứu cách sơ cứu cơ bản trên mạng." },
  { week: 26, period: 105, subject: "Tiếng Anh", lessonTitle: "Extension Project: Healthy Living", integrationCode: "STEM: Giải đố số học và từ vựng", type: "STEM", description: "Hoạt động giải đố số học và từ vựng phát triển tư duy logic." },
  { week: 27, period: 106, subject: "Tiếng Anh", lessonTitle: "Unit 16: Weather Forecast - Lesson 1", integrationCode: "AI: 5.A1.1", type: "AI", description: "AI hỗ trợ trạm khí tượng thủy văn phân tích dữ liệu dự báo bão lũ chuẩn xác." },
  { week: 29, period: 113, subject: "Tiếng Anh", lessonTitle: "Unit 17: Traveling Around - Lesson 1", integrationCode: "NLS: 1.1.CB2b", type: "NLS", description: "Tìm kiếm thông tin lịch trình giờ tàu xe, máy bay trên trang web du lịch chính thống." },
  { week: 31, period: 122, subject: "Tiếng Anh", lessonTitle: "Unit 18: Means of Transport - Lesson 3", integrationCode: "STEM: Xe điện thông minh", type: "STEM", description: "Tìm hiểu nguyên lý vận hành thân thiện môi trường của động cơ xe điện hiện đại." },
  { week: 31, period: 124, subject: "Tiếng Anh", lessonTitle: "Unit 19: Famous Landmarks - Lesson 1", integrationCode: "AI: 5.B1.2", type: "AI", description: "Công nghệ AI và thực tế ảo tái hiện không gian di tích danh thắng 3D." },
  { week: 33, period: 131, subject: "Tiếng Anh", lessonTitle: "Unit 20: Summer Holidays - Lesson 1", integrationCode: "NLS: 4.2.CB2b", type: "NLS", description: "Cảnh báo bảo mật: Tuyệt đối không đăng công khai hình ảnh vé tàu xe, phòng khách sạn." },
  { week: 35, period: 138, subject: "Tiếng Anh", lessonTitle: "Final Project: Green Summer Camp", integrationCode: "STEM: Ngôi trường xanh", type: "STEM", description: "Thiết kế mô hình ngôi trường xanh thân thiện công nghệ từ vật liệu tái chế." }
];

/**
 * Tìm kiếm mục tích hợp Lớp 5 theo môn học, tuần và tiết
 */
export function findGrade5Integration(
  subject: string,
  week: number,
  periodInWeek?: number
): Grade5IntegrationEntry | undefined {
  const subLower = subject.toLowerCase().trim();

  return GRADE_5_INTEGRATION_ENTRIES.find((entry) => {
    if (entry.week !== week) return false;
    
    // So khớp môn học
    const entrySubLower = entry.subject.toLowerCase();
    const isSubjectMatch =
      subLower.includes(entrySubLower) ||
      entrySubLower.includes(subLower) ||
      (subLower.includes("tiếng việt") && entrySubLower.includes("tiếng việt")) ||
      (subLower.includes("toán") && entrySubLower.includes("toán")) ||
      (subLower.includes("khoa học") && entrySubLower.includes("khoa học")) ||
      ((subLower.includes("lịch sử") || subLower.includes("địa lí")) && entrySubLower.includes("lịch sử")) ||
      (subLower.includes("đạo đức") && entrySubLower.includes("đạo đức")) ||
      (subLower.includes("tin học") && entrySubLower.includes("tin học")) ||
      (subLower.includes("công nghệ") && entrySubLower.includes("công nghệ")) ||
      ((subLower.includes("trải nghiệm") || subLower.includes("hđtn")) && entrySubLower.includes("hđtn")) ||
      (subLower.includes("mĩ thuật") && entrySubLower.includes("mĩ thuật")) ||
      ((subLower.includes("thể chất") || subLower.includes("gdtc")) && entrySubLower.includes("gdtc")) ||
      (subLower.includes("âm nhạc") && entrySubLower.includes("âm nhạc")) ||
      ((subLower.includes("tiếng anh") || subLower.includes("anh")) && entrySubLower.includes("tiếng anh"));

    if (!isSubjectMatch) return false;

    // Nếu có periodInWeek, ưu tiên khớp chính xác hoặc cùng tuần nếu tuần đó chỉ có 1 tích hợp
    return true;
  });
}
