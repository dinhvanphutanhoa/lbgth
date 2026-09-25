import { Grade, LessonActivity } from "../types";

export interface MusicLessonDetail {
  songTitle: string;
  composer: string;
  lessonTitle: string;
  songLyrics: string;
  specificCompetencies: string[];
  teacherMaterials: string[];
  studentMaterials: string[];
  integrationNotes: string;
  activities: LessonActivity[];
}

// Master Song Database by Grade & Cycle/Week
interface SongMasterInfo {
  songTitle: string;
  composer: string;
  origin?: string;
  lyrics: string;
  mainTheme: string;
}

export const GRADE_1_SONGS: SongMasterInfo[] = [
  {
    songTitle: "Tiếng trống trường em",
    composer: "Hà Hải",
    lyrics: `Có cái trống trường
Quả thật là to
Tiếng kêu tròn vo
Tùng tùng tùng tùng!

Vào năm học mới
Rộn rã từng bừng
Tiếng trống giục giã
Mau mau đến trường.

Tùng tùng tùng tùng!
Tùng tùng tùng tùng!`,
    mainTheme: "Chủ đề 1: Đón chào năm học mới"
  },
  {
    songTitle: "Múa đàn",
    composer: "Việt Anh (lời)",
    origin: "Dân ca Thái",
    lyrics: `Tình bằng có cánh con chim bay
Bay từ cửa sổ bay ra
Tình bằng có cánh con chim bay
Bay từ cửa sổ bay qua.

Tay cầm đàn em múa vui
Múa cho đôi chân nhịp nhàng
Tay cầm đàn em múa vui
Múa cho tiếng cười vang lừng.`,
    mainTheme: "Chủ đề 2: Giai điệu bạn bè quê hương"
  },
  {
    songTitle: "Tìm bạn thân",
    composer: "Việt Anh",
    lyrics: `Nào ai ngoan ai xinh ai tươi
Nào ai yêu những đóa hoa xinh
Mau bước tới đây cùng nắm tay nhau
Cùng hát vui múa ca theo nhịp.

Nào ai ngoan ai xinh ai tươi
Cùng nhau ta kết đoàn thân ái
Nào ai ngoan ai xinh ai tươi
Mãi mãi là bạn thân của nhau.`,
    mainTheme: "Chủ đề 3: Tình bạn tuổi thơ"
  },
  {
    songTitle: "Đàn gà con",
    composer: "Việt Anh (lời)",
    origin: "Nhạc Nga",
    lyrics: `Trông kìa đàn gà con lông vàng
Đi theo mẹ tìm ăn trong vườn
Cùng tìm mồi ăn ngon ngon
Đàn gà con đi lon ton.

Thóc vãi rồi nhặt ăn cho nhiều
Uống nước vào là no căng diều
Rồi cùng nhau ta đi chơi
Đàn gà con xinh kia ơi.`,
    mainTheme: "Chủ đề 4: Thế giới loài vật đáng yêu"
  },
  {
    songTitle: "Bầu trời xanh",
    composer: "Nguyễn Văn Quỳ",
    lyrics: `Em yêu bầu trời xanh xanh
Yêu đàn bồ câu trắng trắng
Em yêu bầu trời xanh xanh
Bồ câu tung cánh lượn bay.

Bầu trời xanh hòa bình tự do
Đàn em thơ rộn ràng tiếng hát
Bầu trời xanh hòa bình tự do
Tiếng cười rộn rã muôn nơi.`,
    mainTheme: "Chủ đề 5: Ước mơ hòa bình"
  },
  {
    songTitle: "Lí cây xanh",
    composer: "Việt Anh (đặt lời)",
    origin: "Dân ca Nam Bộ",
    lyrics: `Cái cây xanh xanh
Thì lá cũng xanh
Chim đậu trên cành
Chim hót líu lo.

Líu lo là líu lo
Líu lo là líu lo
Cái cây xanh xanh
Rợp bóng sân trường.`,
    mainTheme: "Chủ đề 6: Thiên nhiên tươi đẹp"
  }
];

export const GRADE_2_SONGS: SongMasterInfo[] = [
  {
    songTitle: "Dàn nhạc mùa hè",
    composer: "Lê Minh Châu",
    lyrics: `Kìa ve ve ve
Rộn rã tiếng ca
Hè về rộn vang trên vòm cây xanh.

Tiếng ve ngân vang
Như muôn lời ca
Dàn nhạc mùa hè vui sao là vui.

Ve ve ve ve
Rộn ràng khắp nơi
Ve ve ve ve
Báo hiệu hè sang.`,
    mainTheme: "Chủ đề 1: Mùa hè rực rỡ & Khai trường"
  },
  {
    songTitle: "Ngày mùa vui",
    composer: "Hoàng Lân (lời mới)",
    origin: "Dân ca Thái",
    lyrics: `Ngoài đồng lúa chín thơm
Con chim hót trong vườn
Nô nức trên đường vui thay
Bõ công bao ngày chờ mong.

Gánh về sân phơi
Thóc vàng ngập lối
Hát mừng ngày mùa
No ấm quê hương.

Gánh về sân phơi
Thóc vàng ngập lối
Hát mừng ngày mùa
No ấm muôn nhà.`,
    mainTheme: "Chủ đề 2: Em yêu lao động quê hương"
  },
  {
    songTitle: "Thật là hay",
    composer: "Hoàng Lân",
    lyrics: `Nghe véo von trong vòm cây
Họa mi với sơn ca
Hai chú chim cao giọng hót
Hót líu lo vang lừng lừng.

Vui rất vui bay từ xa
Khắp vườn hoa đua nở
Nghe véo von chim cùng ca
Thật là hay hay hay.`,
    mainTheme: "Chủ đề 3: Tiếng hót muôn loài"
  },
  {
    songTitle: "Mẹ đi vắng",
    composer: "Trịnh Công Sơn (nhạc) - Nguyễn Duy (thơ)",
    lyrics: `Mẹ đi vắng, mẹ đi vắng
Con sang chơi nhà bạn
Con cầm cây đàn con hát
Con hát bài con nhớ mẹ.

Mẹ đi vắng, mẹ đi vắng
Con sang chơi nhà bạn
Con cầm cây đàn con hát
Hát cho vui cả ngày.`,
    mainTheme: "Chủ đề 4: Tình cảm gia đình"
  },
  {
    songTitle: "Hoa lá mùa xuân",
    composer: "Hoàng Nguyễn",
    lyrics: `Tôi là lá, tôi là hoa
Tôi là hoa lá hoa mùa xuân
Tôi cùng hát, tôi cùng múa
Tôi cùng múa hát ca mừng xuân.

Xuân vừa đến trên cành cao
Cho ngàn hoa hé môi cười vui
Xuân rộn rã muôn lời ca
Đón chào xuân khắp nơi tươi đẹp.`,
    mainTheme: "Chủ đề 5: Mùa xuân của em"
  }
];

export const GRADE_3_SONGS: SongMasterInfo[] = [
  {
    songTitle: "Quốc ca Việt Nam (Tiến quân ca)",
    composer: "Văn Cao",
    lyrics: `Đoàn quân Việt Nam đi
Chung lòng cứu quốc
Bước chân dồn vang trên đường gập ghềnh xa.

Cờ in máu chiến thắng mang hồn nước
Súng ngoài xa chen khúc quân hành ca.

Đường vinh quang xây xác quân thù
Thắng gian lao cùng nhau lập chiến khu.

Vì nhân dân chiến đấu không ngừng
Tiến mau ra sa trường
Tiến lên! Cùng tiến lên!
Nước non Việt Nam ta vững bền.`,
    mainTheme: "Chủ đề 1: Tự hào Tổ quốc Việt Nam"
  },
  {
    songTitle: "Em yêu trường em",
    composer: "Hoàng Vân",
    lyrics: `Em yêu trường em
Với bao bạn thân
Và cô giáo hiền
Như yêu quê hương
Cắp sách đến trường trong muôn vàn tình thân yêu.

Nào bàn nào ghế, nào sách nào vở
Nào mực nào bút, nào phấn nào bảng
Cả tiếng chim vui trên cành cây cao
Cả lá cờ sao trong nắng thu vàng.

Yêu sao yêu thế
Trường của chúng em!`,
    mainTheme: "Chủ đề 2: Mái trường mến yêu"
  },
  {
    songTitle: "Bài ca đi học",
    composer: "Phan Trần Bảng",
    lyrics: `Bình minh dâng lên ánh trên giọt sương long lanh
Đàn bướm phơi phới lượn trên cành hoa rung rinh.
Bầy chim hót líu lo từng bầy
Bước tung tăng em tới trường.

Đường tới lớp có bao điều vui
Bao lời cô giảng như suối ngọt lành
Em chăm học, em vâng lời
Tương lai tươi sáng đang chờ em.`,
    mainTheme: "Chủ đề 3: Niềm vui tới trường"
  },
  {
    songTitle: "Đếm sao",
    composer: "Văn Chung",
    lyrics: `Một ông sao sáng, hai ông sáng sao
Ba ông sao sáng, sáng chiếu muôn ánh vàng.
Bốn ông sáng sao, năm ông sao sáng
Sáu ông sáng sao trên trời cao.

Bảy ông sao sáng, tám ông sáng sao
Chín ông sao sáng, sáng lấp lánh bầu trời.
Ngước nhìn lên muôn vì sao
Em mơ bay tới những vì sao xa.`,
    mainTheme: "Chủ đề 4: Khám phá bầu trời đêm"
  },
  {
    songTitle: "Gà gáy",
    composer: "Huy Trân (lời mới)",
    origin: "Dân ca Cống (Lai Châu)",
    lyrics: `Cúc cù cu cu, gà gáy le te
Trời đã rạng rồi, mau dậy bà con ơi!
Mau dậy thôi, gà gáy le te
Trời đã sáng rồi, cùng nhau ra nương.

Nương rẫy xanh xanh rộn vang tiếng cười
Đón ánh bình minh chiếu soi buôn làng
Cúc cù cu cu, tiếng gà giục giã
Một ngày mới tươi vui bắt đầu.`,
    mainTheme: "Chủ đề 5: Âm vang miền núi non"
  }
];

export const GRADE_4_SONGS: SongMasterInfo[] = [
  {
    songTitle: "Khăn quàng thắm mãi vai em",
    composer: "Ngô Ngọc Báu",
    lyrics: `Khi trông phương đông vừa hé ánh dương
Khăn quàng trên vai rộn rã bước chân.
Đàn chim líu lo hót vang lừng
Em bước nhanh tới trường thân yêu.

Đỏ thắm khăn quàng trên vai em
Như ngọn cờ sao rực rỡ tươi màu.
Ghi sâu lời Bác kính yêu
Chăm ngoan học tập tiến lên Đội viên.`,
    mainTheme: "Chủ đề 1: Đội viên sẵn sàng"
  },
  {
    songTitle: "Em bay trong đêm pháo hoa",
    composer: "Hàn Ngọc Bích",
    lyrics: `Bay lên nào em bay lên nào
Trong đêm pháo hoa rực rỡ muôn màu.
Đêm nay vui sao bao ước mơ đẹp tươi
Như ánh sao lung linh trên trời.

Đất nước đón xuân sang tưng bừng
Khúc hát ca ngợi quê hương thanh bình.
Cùng nắm tay bay trong pháo hoa
Tương lai sáng ngời đón chờ chúng em.`,
    mainTheme: "Chủ đề 2: Đất nước ngày hội"
  },
  {
    songTitle: "Bạn ơi lắng nghe",
    composer: "Tô Ngọc Thanh (sưu tầm & dịch lời)",
    origin: "Dân ca Ba-na",
    lyrics: `Hỡi bạn ơi cùng nhau lắng nghe
Tiếng dòng suối ngoài xa reo vui.
Tiếng đàn cá đùa vui tung tăng
Ngắm nhìn dòng nước trong veo.

Hỡi bạn ơi cùng nghe tiếng sóng
Tiếng rừng reo thì thào bên tai.
Thiên nhiên tươi đẹp biết bao
Mau bước cùng nhau ta giữ gìn.`,
    mainTheme: "Chủ đề 3: Tiếng hát đại ngàn Tây Nguyên"
  },
  {
    songTitle: "Trên ngựa ta phi nhanh",
    composer: "Phong Nhã",
    lyrics: `Trên đường gập ghềnh ngựa phi nhanh nhanh nhanh
Vó câu rộn vang khắp núi ngàn xanh.
Gió reo rộn ràng muôn cánh hoa
Ngựa phi nhanh nhanh tới chân trời xa.

Nhong nhong nhong, nhong nhong nhong
Ngựa ta phi nhanh qua dốc qua đèo.
Tiếng cười rộn rã trên lưng ngựa hiền
Tiến bước tương lai xây đời tự do.`,
    mainTheme: "Chủ đề 4: Hành trình tuổi thơ"
  },
  {
    songTitle: "Cò lả",
    composer: "Quan họ Bắc Ninh (sưu tầm)",
    origin: "Dân ca đồng bằng Bắc Bộ",
    lyrics: `Con cò cò bay lả lả bay la
Bay từ từ cửa phủ bay ra ra cánh đồng.
Tình tính tang tang tính tình
Cô mình rằng cô mình ơi.

Rằng có biết biết hay chăng
Rằng có nhớ nhớ hay chăng
Cánh cò trắng phau phau
Dập dìu trên sóng lúa vàng.`,
    mainTheme: "Chủ đề 5: Nét đẹp dân ca đồng bằng"
  }
];

export const GRADE_5_SONGS: SongMasterInfo[] = [
  {
    songTitle: "Reo vang bình minh",
    composer: "Lưu Hữu Phước",
    lyrics: `Reo vang reo ca vang ca
Cất tiếng hát đón ánh bình minh tươi sáng.
Say sưa say trong muôn hoa
Đón nắng mới chiếu sáng khắp muôn nơi.

La la la la la, la la la la la
Vang lừng tiếng chim ca vui tươi.
Đường dài tươi sáng đón chờ em
Bước vững vàng tiến bước vào tương lai.`,
    mainTheme: "Chủ đề 1: Chào ngày mới tương lai sáng ngời"
  },
  {
    songTitle: "Hãy giữ cho em bầu trời xanh",
    composer: "Huy Trân",
    lyrics: `Hãy xua tan những mây mù đen tối
Để bầu trời luôn xanh ngát bao la.
Cho bầy chim hót trong bình minh
Cho đàn em thơ ca múa hòa bình.

Bay cao tiếng hát giữa trời tự do
Lời ca thiết tha gửi tới năm châu.
Hãy giữ cho em bầu trời xanh tươi
Cho trái đất mãi mãi nụ cười xinh.`,
    mainTheme: "Chủ đề 2: Hòa bình cho trẻ thơ"
  },
  {
    songTitle: "Con chim non",
    composer: "Lời Việt: Phong Nhã",
    origin: "Dân ca Pháp",
    lyrics: `Bình minh lên có con chim non
Hót líu lo véo von trên cành.
Tiếng chim ca vui chào ngày mới
Chào ánh nắng ấm áp muôn nơi.

Chim ơi chim hót nữa đi chim
Để cho đời thêm ngát hương thơm.
Lời ca chim đánh thức muôn loài
Rộn rã hân hoan đón chào bình minh.`,
    mainTheme: "Chủ đề 3: Âm nhạc thế giới"
  },
  {
    songTitle: "Những bông hoa những bài ca",
    composer: "Hoàng Long",
    lyrics: `Cùng nhau cầm hoa chúng em đến mừng cô thầy
Lời hát rộn vang thiết tha thắm tình cô thầy.
Những bông hoa tươi màu xinh xắn
Kính dâng lên thầy cô kính yêu.

Bao công ơn thầy cô dạy dỗ
Dìu dắt chúng em khôn lớn từng ngày.
Ngàn lời ca kính yêu dâng Người
Tươi thắm tình thầy trò hôm nay.`,
    mainTheme: "Chủ đề 4: Tri ân thầy cô giáo"
  },
  {
    songTitle: "Tre ngà bên lăng Bác",
    composer: "Hàn Ngọc Bích",
    lyrics: `Bên lăng Bác Hồ có hàng tre ngà
Đón gió đâu về mà đu đưa đu đưa.
Đón nắng đâu về mà thêu hoa thêu hoa
Rất trong là tiếng chim hót vang.

Cây tre ngà bên lăng Bác Hồ
Xanh ngát quanh năm như tấm lòng dân.
Chúng em kính viếng Người Cha già
Mãi mãi ghi sâu ơn đức Bác Hồ.`,
    mainTheme: "Chủ đề 5: Nhớ ơn Bác Hồ"
  }
];

// Helper to retrieve song info for a specific grade and week
export function getSongInfoForGradeAndWeek(grade: Grade, week: number): SongMasterInfo {
  let songs = GRADE_1_SONGS;
  if (grade === 2) songs = GRADE_2_SONGS;
  else if (grade === 3) songs = GRADE_3_SONGS;
  else if (grade === 4) songs = GRADE_4_SONGS;
  else if (grade === 5) songs = GRADE_5_SONGS;

  // Cycle through available songs every 2 weeks (Week 1-2: Song 1, Week 3-4: Song 2, etc.)
  const songIndex = Math.floor((week - 1) / 2) % songs.length;
  return songs[songIndex];
}

/**
 * Generate highly detailed Music Lesson Details
 * Including specific song lyrics, step-by-step teacher instructions,
 * and exact student tasks for CV 2345/BGDĐT.
 */
export function getDetailedMusicLesson(
  grade: Grade,
  week: number,
  isEnhance: boolean,
  session: "Sáng" | "Chiều" = "Sáng"
): MusicLessonDetail {
  const song = getSongInfoForGradeAndWeek(grade, week);
  const isSecondWeekOfSong = week % 2 === 0;

  // 1. CHÍNH KHÓA (Buổi Sáng - Tiết Âm nhạc chuẩn)
  if (!isEnhance && session === "Sáng") {
    const isNewSong = !isSecondWeekOfSong;
    const lessonTitle = isNewSong
      ? `Bài hát: ${song.songTitle} (${song.composer}) - Học hát bài mới & Cảm thụ âm nhạc (Tuần ${week})`
      : `Ôn tập bài hát: ${song.songTitle} - Gõ đệm thanh phách & Vận động phụ họa (Tuần ${week})`;

    const specificCompetencies = [
      `Biết hát đúng giai điệu và chuẩn xác lời ca bài hát "${song.songTitle}" (${song.composer}).`,
      `Biết gõ đệm theo phách, theo nhịp 2/4 bằng thanh phách, trống nhỏ hoặc vỗ tay nhịp nhàng.`,
      `Cảm thụ vẻ đẹp giai điệu âm nhạc trong sáng, tự tin biểu diễn trước bạn bè và thầy cô.`
    ];

    const teacherMaterials = [
      "Đàn phím điện tử (Organ / Keyboard), micro giảng dạy, loa trợ giảng công suất chuẩn.",
      `Video bài hát mẫu "${song.songTitle}" kèm lời ca chạy chữ và slide tranh minh họa chủ đề.`,
      "Bộ nhạc cụ gõ: Thanh phách gõ, Song loan, Trống con, Tambourine chuẩn bị cho từng tổ."
    ];

    const studentMaterials = [
      `Sách giáo khoa Âm nhạc Lớp ${grade}, vở bài tập âm nhạc, đồ dùng học tập.`,
      "Thanh phách gõ (mỗi học sinh 1 cặp), trang phục gọn gàng, tâm thế thoải mái."
    ];

    const integrationNotes = `Tích hợp Giáo dục Tình yêu Quê hương Đất nước & Giáo dục thẩm mỹ âm nhạc (${song.mainTheme}).`;

    const activities: LessonActivity[] = [
      {
        name: "1. Khởi động giọng & Khám phá giai điệu",
        objective: "Tạo không khí phấn khởi, làm ấm dây thanh quản, mở khẩu hình chữ O/A và kết nối vào bài hát.",
        teacherActivity: `1. Đón học sinh vào phòng học nhạc, kiểm tra tư thế ngồi ngay ngắn, lưng thẳng, hai tay đặt trên đùi.
2. Hướng dẫn học sinh khởi động giọng theo đàn:
   - Giáo viên đàn mẫu âm: Đồ - Mi - Son - Đố - Son - Mi - Đồ (theo mẫu âm "La - Mi - Ma" hoặc "Mô - Ma - Mi").
   - Bắt nhịp 1 - 2 cho cả lớp luyện thanh 3 lần từ thấp lên cao (nâng nửa cung mỗi lần).
3. Đố vui âm nhạc: Đàn 1 đoạn nhạc mở đầu của bài hát "${song.songTitle}", hỏi HS: "Các em lắng nghe giai điệu này và cho cô biết giai điệu gợi lên cảm xúc gì? Vui tươi rộn rã hay êm đềm tha thiết?"
4. Giáo viên nhận xét, giới thiệu vào bài học: "${lessonTitle}".`,
        studentActivity: `1. Ổn định chỗ ngồi, tư thế ngay ngắn, thả lỏng cơ mặt và vai.
2. Chú ý lắng nghe tiếng đàn của cô giáo:
   - Lấy hơi bằng mũi, nén hơi nhẹ ở bụng, mở rộng khẩu hình.
   - Hát đồng thanh mẫu âm "La - Mi - Ma" tròn vành rõ chữ theo đúng cao độ tiếng đàn.
3. Chăm chú lắng nghe đoạn giai điệu cô đàn, giơ tay phát biểu cảm nhận: "Thưa cô, giai điệu rất vui tươi, rộn rã ạ!".
4. Mở sách Âm nhạc Lớp ${grade}, hào hứng chuẩn bị bước vào nội dung bài mới.`
      },
      {
        name: "2. Khám phá & Dạy hát từng câu (Học lời ca)",
        objective: `Nắm vững nội dung, cảm xúc bài hát và thuộc lời ca bài hát "${song.songTitle}" (${song.composer}).`,
        teacherActivity: `1. Giới thiệu tác giả và nội dung bài hát:
   - Trình chiếu tranh minh họa và tóm tắt ý nghĩa giáo dục của bài "${song.songTitle}".
2. Hát mẫu:
   - Giáo viên hát mẫu toàn bài kết hợp đàn đệm (hoặc mở file âm thanh chuẩn chất lượng cao) với sắc thái truyền cảm, vui tươi.
3. Hướng dẫn đọc lời ca theo tiết tấu nhịp 2/4:
   - Giáo viên đọc mẫu từng câu thơ theo tiết tấu và bắt nhịp cho học sinh đọc theo:
${song.lyrics.split("\n\n")[0] || song.lyrics}
4. Dạy hát từng câu nối tiếp:
   - Câu 1: GV đàn giai điệu 2 lần -> Hát mẫu 1 lần -> Bắt nhịp cho cả lớp hát lại 2-3 lần.
   - Câu 2: Tiến hành tương tự câu 1.
   - Nối câu 1 và câu 2: Đàn nhịp nối, bắt nhịp cho cả lớp ghép câu 1 + câu 2.
   - Dạy tiếp các câu còn lại cho đến hết bài.
   - Lắp ráp toàn bộ bài hát từ đầu đến cuối.
5. Sửa sai: Lắng nghe, phát hiện những chỗ học sinh hát chưa đúng cao độ hoặc phát âm chưa rõ (nhất là những nốt luyến, nốt cao), đàn lại nhiều lần cho HS sửa dứt điểm.`,
        studentActivity: `1. Chú ý nhìn lên màn hình, lắng nghe cô giới thiệu về nhạc sĩ ${song.composer} và hoàn cảnh ra đời của bài hát.
2. Lắng nghe cô hát mẫu trọn vẹn bài hát, đung đưa người nhẹ nhàng cảm nhận nhịp điệu.
3. Đọc lời ca to, rõ ràng, đồng thanh theo tiết tấu tay cô bắt nhịp, chú ý ngắt nghỉ đúng chỗ.
4. Học hát từng câu theo hiệu lệnh của giáo viên:
   - Nghe tiếng đàn cô đàn câu 1 -> Hát hòa giọng theo đàn.
   - Nghe tiếng đàn cô đàn câu 2 -> Hát nối tiếp câu 2.
   - Ghép câu 1 và câu 2 cùng bạn bên cạnh.
   - Hát nối tiếp toàn bộ bài hát hòa cùng tiếng đàn Organ của cô.
5. Tiếp thu góp ý chỉnh sửa của cô giáo, tập lại nốt cao và nốt luyến cho thật chuẩn xác, đúng nhịp.`
      },
      {
        name: "3. Luyện tập & Thực hành gõ đệm thanh phách",
        objective: `Hát chuẩn xác giai điệu, hòa giọng cùng tập thể và thực hành gõ đệm thanh phách theo phách / nhịp 2/4 bài hát "${song.songTitle}".`,
        teacherActivity: `1. Hướng dẫn gõ đệm theo phách:
   - Giáo viên cầm cặp thanh phách, làm mẫu gõ phách: "Phách 1 gõ mạnh vào tiếng đầu nhịp (độ mở thanh phách rộng), phách 2 gõ nhẹ".
   - Làm mẫu gõ đệm đoạn 1 của bài hát, nhấn mạnh vào các từ mang phách mạnh.
2. Hướng dẫn học sinh thực hành gõ đệm:
   - Cho cả lớp vừa hát vừa gõ đệm thanh phách chậm rãi 2 lần.
   - Chia nhóm luyện tập đối ứng:
     + Dãy 1: Hát giai điệu lời ca.
     + Dãy 2: Cầm thanh phách gõ đệm giữ nhịp.
     + Đổi vai ngược lại giữa 2 dãy.
3. Luyện tập theo tổ:
   - Cho Tổ 1, Tổ 2, Tổ 3 lần lượt đứng dậy thể hiện.
   - Giáo viên theo dõi, đi đến từng bàn chỉnh sửa cách cầm thanh phách và tư thế đứng/ngồi cho học sinh.
4. Lồng ghép vận động cơ thể (Body Percussion đơn giản): Vỗ tay theo phách (Clap) kết hợp nhún chân nhịp nhàng theo câu hát.`,
        studentActivity: `1. Quan sát cô giáo thị phạm cách cầm và gõ thanh phách theo phách mạnh - phách nhẹ.
2. Cầm cặp thanh phách ngay ngắn trên 2 tay:
   - Thực hành gõ đệm thanh phách hòa cùng giọng hát của cả lớp.
   - Gõ đúng vào các tiếng trọng âm của bài hát mà cô đã hướng dẫn.
3. Tham gia hoạt động đối ứng theo dãy:
   - Khi dãy mình hát: Hát to, phát âm tròn tiếng, mắt hướng về cô.
   - Khi dãy mình gõ đệm: Lắng nghe bạn hát và gõ phách thật đều tay, không gõ lộn xộn.
4. Luyện tập theo tổ, tự tin đứng thể hiện tiết mục trước lớp.
5. Vận động cơ thể: Vừa hát vừa kết hợp vỗ tay và nhún chân nhịp nhàng theo tiết tấu bài hát.`
      },
      {
        name: "4. Vận dụng & Biểu diễn sáng tạo",
        objective: `Tự tin biểu diễn bài hát trước lớp kết hợp phụ họa, rèn luyện sự mạnh dạn và kỹ năng đánh giá tiết mục của bạn bè.`,
        teacherActivity: `1. Tổ chức sân khấu âm nhạc nhỏ tại lớp học:
   - Mời đại diện nhóm học sinh (4-5 em) lên trước bục giảng biểu diễn.
   - Giao nhiệm vụ: 2 bạn cầm Song loan/Trống gõ đệm, 3 bạn múa phụ họa đơn giản hoặc làm động tác Body Percussion.
2. Hướng dẫn học sinh dưới lớp cách cổ vũ và quan sát nhận xét:
   - Tiêu chí nhận xét: Bạn hát thuộc lời chưa? Gõ phách có đều không? Động tác phụ họa có đẹp mắt và tự tin không?
3. Nhận xét, tuyên dương:
   - Khen ngợi tinh thần biểu diễn tự tin, năng động của các nhóm.
   - Tuyên dương cá nhân có giọng hát tốt, gõ nhịp chuẩn.
4. Củng cố dặn dò:
   - Nhắc lại tên bài hát "${song.songTitle}" và tác giả ${song.composer}.
   - Khắc sâu bài học đạo đức / tình cảm quê hương qua nội dung ca từ.
   - Dặn dò học sinh về nhà hát lại bài hát cho ông bà, cha mẹ cùng nghe.`,
        studentActivity: `1. Các nhóm xung phong lên sân khấu lớp biểu diễn với tinh thần tự tin, vui tươi.
   - Nhóm biểu diễn phối hợp nhịp nhàng giữa tiếng hát, thanh phách và cử chỉ phụ họa.
2. Học sinh dưới lớp chú ý lắng nghe, vỗ tay cổ vũ nồng nhiệt cho bạn.
3. Tích cực giơ tay nhận xét bạn theo gợi ý của cô: "Thưa cô, nhóm bạn Nam hát rất to, gõ phách đều và múa rất duyên dáng ạ!".
4. Lắng nghe cô dặn dò, ghi nhớ tên bài hát và tác giả, hào hứng chuẩn bị bài hát cho gia đình nghe.`
      }
    ];

    return {
      songTitle: song.songTitle,
      composer: song.composer,
      lessonTitle,
      songLyrics: song.lyrics,
      specificCompetencies,
      teacherMaterials,
      studentMaterials,
      integrationNotes,
      activities
    };
  }

  // 2. TĂNG CƯỜNG / BỒI DƯỠNG ÂM NHẠC (Buổi Chiều - Nâng cao kỹ năng, Body Percussion & Biểu diễn)
  const enhanceLessonTitle = `Tăng cường Âm nhạc Lớp ${grade}: Luyện thanh nâng cao, Body Percussion & Dàn dựng biểu diễn bài "${song.songTitle}" (Tuần ${week})`;

  const specificCompetencies = [
    `Rèn luyện kỹ năng luyện thanh nâng cao, mở rộng âm vực, nhả chữ tròn vành rõ tiếng, biết hát biểu cảm sắc thái to - nhỏ (f - p).`,
    `Thực hành thành thạo bộ gõ cơ thể (Body Percussion): kết hợp vỗ tay (Clap), vỗ đùi (Pat), búng tay (Snap), dậm chân (Stamp) theo đa dạng tiết tấu.`,
    `Phát triển năng khiếu âm nhạc cá nhân, tự tin biểu diễn đơn ca, song ca, tốp ca kết hợp đạo cụ và múa phụ họa.`
  ];

  const teacherMaterials = [
    "Đàn Organ có cài đặt các tiết điệu (Styles) phong phú: Pop, March, Ballad, Folk.",
    "Bộ nhạc cụ gõ đa dạng: Thanh phách gỗ, Song loan, Trống gõ tay bọc da, Tambourine lục lạc, Maracas quả lắc, Triangle tam giác.",
    `Lời ca in khổ lớn của bài hát "${song.songTitle}" và sơ đồ hướng dẫn động tác Body Percussion chi tiết.`
  ];

  const studentMaterials = [
    "Thanh phách gõ cá nhân, nhạc cụ gõ tự chọn của tổ (trống nhỏ, song loan, tambourine).",
    "Trang phục biểu diễn gọn gàng, sẵn sàng vận động toàn thân."
  ];

  const integrationNotes = `Tích hợp Giáo dục Thể chất & Rèn luyện Năng khiếu Âm nhạc (Body Percussion - Học thông qua trải nghiệm nghệ thuật).`;

  const activities: LessonActivity[] = [
    {
      name: "1. Khởi động giọng chuyên sâu & Trò chơi tiết tấu (Warm-up & Rhythmic Game)",
      objective: "Luyện hơi thở sâu từ cơ hoành, mở rộng quãng giọng và kích hoạt phản xạ tiết tấu nhanh nhạy.",
      teacherActivity: `1. Kiểm tra sĩ số lớp tăng cường, ổn định vị trí theo hình chữ U hoặc vòng cung để tiện quan sát vận động.
2. Hướng dẫn bài tập thở bụng sâu:
   - Giáo viên hô: "Hít vào từ từ bằng mũi (bụng phình ra) - Giữ hơi 4 giây - Thở ra bằng miệng xì nhẹ (Xì... kéo dài 8 giây)". Thực hiện 3 lần.
3. Luyện thanh mở rộng âm vực chuyên sâu:
   - Đàn gam Đồ trưởng (C major): Đồ - Rê - Mi - Pha - Son - La - Si - Đố.
   - Hướng dẫn luyện thanh theo mẫu âm staccato (nảy tiếng): "Ha - Ha - Ha - Ha - Hơ" và mẫu legato (liền tiếng): "Mô - Ô - Ô - Ma".
4. Trò chơi tiết tấu "Tiếng vọng âm nhạc (Echo Rhythm)":
   - Giáo viên vỗ tay một mẫu tiết tấu 2/4 (Đơn - Đơn - Đen | Đen - Lặng).
   - Yêu cầu học sinh gõ lại chính xác tuyệt đối như tiếng vang trong hang đá.`,
      studentActivity: `1. Đứng vào vị trí hình vòng cung, tư thế vững vàng, hai chân mở rộng bằng vai, vai thả lỏng.
2. Thực hiện bài tập thở cơ hoành theo hiệu lệnh của cô giáo:
   - Hít sâu bằng mũi, cảm nhận bụng căng tròn, không nhấc vai.
   - Xì hơi đều đặn qua kẽ răng, kiểm soát luồng hơi dài và ổn định.
3. Luyện thanh theo tiếng đàn:
   - Hát nảy tiếng tròn trịa từng nốt nhạc "Ha - Ha - Ha".
   - Hát liền giọng mượt mà theo mẫu âm "Mô - Ô - Ô - Ma", vươn tới các nốt cao mà không bị gắt giọng.
4. Tham gia trò chơi "Tiếng vọng âm nhạc":
   - Chăm chú lắng nghe mẫu tiết tấu của cô, lập tức vỗ tay mô phỏng lại chuẩn xác từng phách mạnh - nhẹ.`
    },
    {
      name: "2. Luyện hát nâng cao: Sắc thái biểu cảm & Hòa giọng bè (Vocal Expression)",
      objective: `Hát bài "${song.songTitle}" đạt độ tinh tế về nhả chữ, ngân nghỉ, luyến láy và thể hiện rõ sắc thái to (f) - nhỏ (p).`,
      teacherActivity: `1. Ôn luyện lời ca bài hát "${song.songTitle}":
   - Trình chiếu lời ca đầy đủ:
${song.lyrics}
2. Hướng dẫn kỹ thuật nhả chữ và lấy hơi:
   - Phân tích từng câu hát: Chỉ rõ chỗ nào cần lấy hơi nhanh (sau dấu phẩy), chỗ nào cần ngân dài đủ 2 phách, 3 phách.
   - Hướng dẫn mở khẩu hình dọc, đưa âm thanh vang lên khoang mũi để giọng hát sáng và truyền cảm.
3. Luyện tập sắc thái đối lập (Nuance & Dynamics):
   - Đoạn 1: Hát vừa phải (Mezzo-Forte - mf), tình cảm, êm dịu.
   - Đoạn điệp khúc / cao trào: Hát rộn ràng, hào sảng, mạnh mẽ (Forte - f), thể hiện trọn vẹn niềm vui tuổi thơ.
4. Luyện tập đối đáp xướng - xô (Call & Response):
   - Nhóm Nam: Hát vế câu 1 (Xướng).
   - Nhóm Nữ: Hát tiếp vế câu 2 (Xô).
   - Cả lớp: Hòa giọng câu kết thúc toàn bài.`,
      studentActivity: `1. Đọc lại toàn bộ lời ca của bài hát "${song.songTitle}", ghi nhớ mạch cảm xúc của bài.
2. Chú ý lắng nghe cô hướng dẫn kỹ thuật nhả chữ:
   - Lấy hơi nhanh bằng miệng và mũi mà không gây tiếng động.
   - Giữ hơi để ngân đủ trường độ nốt ngân dài ở cuối mỗi câu hát.
3. Thực hành hát theo sắc thái biểu cảm:
   - Hát êm dịu, mềm mại ở đoạn đầu bài hát.
   - Bừng sáng giọng hát, ngân vang rạng rỡ khi bước vào đoạn điệp khúc.
4. Phối hợp nhịp nhàng trong phần đối đáp:
   - Nhóm Nam cất giọng mạnh mẽ, dứt khoát.
   - Nhóm Nữ nối tiếp trong trẻo, mềm mại.
   - Cả lớp hòa giọng hùng tráng, tròn đầy ở câu kết bài.`
    },
    {
      name: "3. Thực hành chuyên sâu Body Percussion & Hòa tấu bộ gõ (Body Percussion Ensemble)",
      objective: `Kết hợp nhuần nhuyễn giữa giọng hát và chuỗi vận động gõ đệm cơ thể (Body Percussion) cùng nhạc cụ gõ đa dạng.`,
      teacherActivity: `1. Giới thiệu chuỗi động tác Body Percussion 4 bước:
   - Bước 1: Vỗ đùi trái - Vỗ đùi phải (Pat: phách 1)
   - Bước 2: Vỗ tay trước ngực (Clap: phách 2)
   - Bước 3: Búng ngón tay (Snap) hoặc dậm chân phải (Stamp: phách 3)
   - Bước 4: Vỗ tay 2 cái liên tiếp (Clap - Clap: phách 4).
2. Thị phạm chậm từng động tác kết hợp đếm nhịp 1 - 2 - 3 - 4:
   - Giáo viên làm mẫu chậm 3 lần cho học sinh quan sát.
   - Cho học sinh tập động tác không có nhạc, sau đó ghép nối chậm.
3. Ghép chuỗi Body Percussion vào bài hát "${song.songTitle}":
   - Cả lớp vừa hát vừa thực hiện chuỗi vận động cơ thể.
4. Phân công hòa tấu nhạc cụ gõ theo nhóm:
   - Tổ 1: Cầm Thanh phách gõ phách chính (giữ nhịp nền).
   - Tổ 2: Cầm Song loan và Trống gõ vào phách mạnh (điểm xuyết).
   - Tổ 3: Cầm Tambourine và Maracas lắc đều theo tiết tấu bài hát.
   - Tổ 4: Thực hiện chuỗi động tác Body Percussion dẫn dắt.`,
      studentActivity: `1. Chăm chú theo dõi cô giáo thị phạm từng bước vận động cơ thể (vỗ đùi -> vỗ tay -> dậm chân).
2. Luyện tập chuỗi động tác Body Percussion từ chậm đến nhanh:
   - Vỗ đùi nhẹ nhàng, không gây đau rát.
   - Vỗ tay đanh, dứt khoát, âm thanh giòn giã.
   - Dậm chân nhịp nhàng, giữ thăng bằng cơ thể tốt.
3. Vừa hát bài hát "${song.songTitle}" vừa thực hiện đồng bộ chuỗi động tác cùng các bạn, cảm nhận sự hòa quyện giữa âm nhạc và cơ thể.
4. Nhận nhạc cụ được phân công của tổ mình:
   - Tổ Thanh phách gõ đều đặn, giữ nhịp vững vàng.
   - Tổ Trống gõ gõ chắc tay vào phách mạnh.
   - Tổ Tambourine lắc nhịp nhàng tạo hiệu ứng rộn rã.
   - Cả lớp tạo nên một dàn hòa tấu bộ gõ sinh động, vui tươi.`
    },
    {
      name: "4. Dàn dựng sân khấu & Báo cáo tiết mục biểu diễn (Stage Performance & Peer Review)",
      objective: `Tự tin biểu diễn tiết mục hoàn chỉnh theo phong cách nghệ thuật sân khấu học đường; biết tự đánh giá và nhận xét nhóm bạn.`,
      teacherActivity: `1. Chia lớp thành 2 đội biểu diễn lớn:
   - Đội 1: "Những Nốt Nhạc Vui"
   - Đội 2: "Giai Điệu Tuổi Thơ".
2. Hướng dẫn cách dàn dựng đội hình sân khấu:
   - Vị trí đứng: Hàng trước múa phụ họa và Body Percussion, hàng sau cầm nhạc cụ hòa tấu.
   - Tư thế chào khán giả trước và sau khi biểu diễn (cúi đầu chào tươi cười, tay đặt lên ngực).
3. Tổ chức cho từng đội lên sân khấu lớp biểu diễn trọn vẹn tiết mục bài "${song.songTitle}":
   - Giáo viên mở nhạc đệm Beat / Style sôi động trên đàn Organ.
4. Đánh giá và nhận xét sư phạm:
   - Mời đại diện học sinh nhận xét ưu điểm của đội bạn (về nhịp điệu, biểu cảm, sự đồng đều).
   - Giáo viên tổng kết, ghi nhận sự tiến bộ vượt bậc của từng em trong buổi học tăng cường.
   - Tuyên dương "Ngôi sao Âm nhạc của tuần" cho học sinh thể hiện xuất sắc nhất.`,
      studentActivity: `1. Các thành viên trong đội nhanh chóng di chuyển vào vị trí đội hình đã được phân công.
2. Tự tin bước lên sân khấu lớp:
   - Cúi đầu chào cô giáo và các bạn với nụ cười rạng rỡ.
   - Tự tin biểu diễn trọn vẹn bài hát: Hát vang lời ca, gõ đệm nhạc cụ ăn khớp, động tác Body Percussion nhịp nhàng, đẹp mắt.
   - Kết thúc tiết mục trong tiếng vỗ tay ròn rã và cúi chào cảm ơn khán giả.
3. Chăm chú xem phần biểu diễn của đội bạn, nhiệt tình cổ vũ.
4. Mạnh dạn giơ tay nhận xét, đóng góp ý kiến mang tính xây dựng: "Thưa cô, tiết mục của đội bạn rất đều, bạn trưởng nhóm hát rất vang và bạn gõ trống rất đúng nhịp ạ!".
5. Hân hoan đón nhận lời khen và danh hiệu khen thưởng của cô giáo.`
    }
  ];

  return {
    songTitle: song.songTitle,
    composer: song.composer,
    lessonTitle: enhanceLessonTitle,
    songLyrics: song.lyrics,
    specificCompetencies,
    teacherMaterials,
    studentMaterials,
    integrationNotes,
    activities
  };
}
