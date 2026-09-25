import React, { useState } from "react";
import { 
  AI_INTEGRATION_FRAMEWORK, 
  DIGITAL_COMPETENCE_FRAMEWORK, 
  NUTRITION_INTEGRATION, 
  DEFENSE_INTEGRATION 
} from "../data/integrationData";
import { GRADE_5_INTEGRATION_ENTRIES } from "../data/grade5IntegrationPlan";
import { 
  Sparkles, 
  Cpu, 
  ShieldCheck, 
  Apple, 
  Copy, 
  Check, 
  Search,
  BookOpen
} from "lucide-react";

interface IntegrationReferenceProps {
  lang?: "en" | "vi";
}

export const IntegrationReference: React.FC<IntegrationReferenceProps> = ({ lang = "en" }) => {
  const isEn = lang === "en";
  const [activeCategory, setActiveCategory] = useState<"ai" | "nls" | "nutrition" | "defense" | "grade5">("grade5");
  const [grade5SubjectFilter, setGrade5SubjectFilter] = useState<string>("all");
  const [searchFilter, setSearchFilter] = useState("");
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <div className="space-y-6 font-serif">
      {/* Header Banner */}
      <div className="bg-white p-6 border border-black shadow-[2px_2px_0px_rgba(0,0,0,1)]">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center space-x-2">
              <span className="p-1.5 bg-black text-white border border-black">
                <Sparkles className="w-4 h-4" />
              </span>
              <h2 className="text-lg font-bold text-black uppercase tracking-wider font-serif">
                {isEn ? "Primary Education Cross-Curricular Integration Framework" : "Khung Tích Hợp Lồng Ghép Giáo Dục Tiểu Học"}
              </h2>
            </div>
            <p className="text-xs text-stone-600 mt-1 max-w-2xl font-serif">
              {isEn 
                ? "Look up and select integration indicators for Artificial Intelligence (AI), Digital Competence (Circular 3456/BGDĐT), National Defense & Security (Circular 08/2024), Nutrition Education, and Human Rights for lesson plans." 
                : "Tra cứu và chọn lọc các chỉ báo tích hợp Trí tuệ nhân tạo (AI), Năng lực số (CV 3456/BGDĐT), Giáo dục Quốc phòng & An ninh (TT 08/2024), Giáo dục Dinh dưỡng, Quyền con người để đưa vào Kế hoạch bài dạy."}
            </p>
          </div>

          {/* Search */}
          <div className="relative w-full md:w-64 font-serif">
            <Search className="w-3.5 h-3.5 text-stone-400 absolute left-3 top-2.5" />
            <input
              type="text"
              value={searchFilter}
              onChange={(e) => setSearchFilter(e.target.value)}
              placeholder={isEn ? "Search indicator, code..." : "Tìm kiếm chỉ báo, mã số..."}
              className="w-full pl-8 pr-3 py-1.5 text-xs bg-stone-50 border border-black focus:outline-none"
            />
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center border border-black overflow-hidden bg-white mt-6 shadow-[1px_1px_0px_rgba(0,0,0,1)] flex-wrap">
          <button
            onClick={() => setActiveCategory("ai")}
            className={`flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold uppercase tracking-wider border-r border-black transition-colors ${
              activeCategory === "ai"
                ? "bg-black text-white"
                : "bg-white text-stone-800 hover:bg-stone-200"
            }`}
          >
            <Cpu className="w-3.5 h-3.5" />
            <span>{isEn ? "1. Artificial Intelligence (AI)" : "1. Trí Tuệ Nhân Tạo (AI)"}</span>
          </button>

          <button
            onClick={() => setActiveCategory("nls")}
            className={`flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold uppercase tracking-wider border-r border-black transition-colors ${
              activeCategory === "nls"
                ? "bg-black text-white"
                : "bg-white text-stone-800 hover:bg-stone-200"
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>{isEn ? "2. Digital Competence (CV 3456)" : "2. Năng Lực Số (CV 3456)"}</span>
          </button>

          <button
            onClick={() => setActiveCategory("nutrition")}
            className={`flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold uppercase tracking-wider border-r border-black transition-colors ${
              activeCategory === "nutrition"
                ? "bg-black text-white"
                : "bg-white text-stone-800 hover:bg-stone-200"
            }`}
          >
            <Apple className="w-3.5 h-3.5" />
            <span>{isEn ? "3. Nutrition Education" : "3. GD Dinh Dưỡng"}</span>
          </button>

          <button
            onClick={() => setActiveCategory("defense")}
            className={`flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold uppercase tracking-wider border-r border-black transition-colors ${
              activeCategory === "defense"
                ? "bg-black text-white"
                : "bg-white text-stone-800 hover:bg-stone-200"
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>{isEn ? "4. Defense & Security" : "4. Quốc Phòng & An Ninh"}</span>
          </button>

          <button
            onClick={() => setActiveCategory("grade5")}
            className={`flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold uppercase tracking-wider transition-colors ${
              activeCategory === "grade5"
                ? "bg-black text-white"
                : "bg-amber-100 text-stone-900 hover:bg-amber-200"
            }`}
          >
            <BookOpen className="w-3.5 h-3.5 text-amber-500" />
            <span>{isEn ? "5. Grade 5 Integration Plan (35 Wks)" : "5. Kế Hoạch Tích Hợp Lớp 5 (35 Tuần)"}</span>
          </button>
        </div>
      </div>

      {/* CATEGORY 5: GRADE 5 INTEGRATION PLAN (35 WEEKS) */}
      {activeCategory === "grade5" && (
        <div className="space-y-4">
          {/* Subject Filter Chips */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
            {[
              { id: "all", label: isEn ? "All Subjects" : "Tất cả các môn" },
              { id: "Tiếng Việt", label: isEn ? "Vietnamese" : "Tiếng Việt" },
              { id: "Toán", label: isEn ? "Math" : "Toán" },
              { id: "Khoa học", label: isEn ? "Science" : "Khoa học" },
              { id: "Lịch sử", label: isEn ? "History & Geo" : "Lịch sử & Địa lí" },
              { id: "Đạo đức", label: isEn ? "Ethics" : "Đạo đức" },
              { id: "Công nghệ", label: isEn ? "Technology" : "Công nghệ" },
              { id: "Tin học", label: isEn ? "Informatics" : "Tin học" },
              { id: "HĐTN", label: isEn ? "Experiential Act." : "HĐTN" },
              { id: "Âm nhạc", label: isEn ? "Music" : "Âm nhạc" },
              { id: "Mĩ thuật", label: isEn ? "Art" : "Mĩ thuật" },
              { id: "GDTC", label: isEn ? "Physical Ed." : "GDTC" },
              { id: "Tiếng Anh", label: isEn ? "English" : "Tiếng Anh" },
            ].map((sub) => (
              <button
                key={sub.id}
                onClick={() => setGrade5SubjectFilter(sub.id)}
                className={`px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider whitespace-nowrap border border-black transition-colors ${
                  grade5SubjectFilter === sub.id
                    ? "bg-black text-white"
                    : "bg-white text-stone-800 hover:bg-stone-100"
                }`}
              >
                {sub.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {GRADE_5_INTEGRATION_ENTRIES.filter((entry) => {
              const matchSubject = grade5SubjectFilter === "all" || entry.subject.toLowerCase().includes(grade5SubjectFilter.toLowerCase());
              const matchSearch = !searchFilter || 
                entry.subject.toLowerCase().includes(searchFilter.toLowerCase()) ||
                entry.lessonTitle.toLowerCase().includes(searchFilter.toLowerCase()) ||
                entry.integrationCode.toLowerCase().includes(searchFilter.toLowerCase()) ||
                entry.description.toLowerCase().includes(searchFilter.toLowerCase()) ||
                `tuần ${entry.week}`.includes(searchFilter.toLowerCase()) ||
                `week ${entry.week}`.includes(searchFilter.toLowerCase());
              return matchSubject && matchSearch;
            }).map((entry, idx) => {
              const cardId = `g5-${entry.subject}-${entry.week}-${entry.period}-${idx}`;
              const badgeBg = 
                entry.type === "AI" ? "bg-purple-100 text-purple-900 border-purple-800" :
                entry.type === "NLS" ? "bg-blue-100 text-blue-900 border-blue-800" :
                entry.type === "STEM" ? "bg-emerald-100 text-emerald-900 border-emerald-800" :
                entry.type === "GDQPAN" ? "bg-rose-100 text-rose-900 border-rose-800" :
                entry.type === "GDDD" ? "bg-amber-100 text-amber-900 border-amber-800" :
                "bg-teal-100 text-teal-900 border-teal-800";

              return (
                <div key={cardId} className="bg-white p-4 border border-black shadow-[2px_2px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_rgba(0,0,0,1)] transition-all flex flex-col justify-between space-y-2">
                  <div>
                    <div className="flex items-center justify-between border-b border-black pb-1.5 mb-2">
                      <div className="flex items-center gap-1.5">
                        <span className="font-bold text-xs text-black">
                          {isEn ? `Week ${entry.week} - Period ${entry.period}` : `Tuần ${entry.week} - Tiết ${entry.period}`}
                        </span>
                        <span className="text-[10px] text-stone-500">|</span>
                        <span className="text-xs font-semibold text-stone-800">{entry.subject}</span>
                      </div>
                      <span className={`px-1.5 py-0.2 text-[9px] font-bold border ${badgeBg}`}>
                        {entry.type}
                      </span>
                    </div>

                    <h4 className="font-bold text-xs text-black leading-snug line-clamp-2">
                      {entry.lessonTitle}
                    </h4>

                    <div className="mt-2 bg-stone-50 p-2 border border-stone-200 rounded-none">
                      <span className="inline-block font-mono text-[11px] font-bold text-black mb-1">
                        {entry.integrationCode}
                      </span>
                      <p className="text-[11px] text-stone-700 leading-normal">
                        {entry.description}
                      </p>
                    </div>
                  </div>

                  <div className="pt-2 flex justify-end border-t border-stone-200">
                    <button
                      onClick={() => handleCopy(`${entry.integrationCode}: ${entry.description}`, cardId)}
                      className="flex items-center gap-1 text-[10px] uppercase font-bold tracking-wider text-stone-600 hover:text-black transition-colors"
                    >
                      {copiedCode === cardId ? (
                        <Check className="w-3 h-3 text-black" />
                      ) : (
                        <Copy className="w-3 h-3" />
                      )}
                      <span>{copiedCode === cardId ? (isEn ? "Copied" : "Đã chép") : (isEn ? "Copy" : "Sao chép")}</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* CATEGORY 1: AI FRAMEWORK */}
      {activeCategory === "ai" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {AI_INTEGRATION_FRAMEWORK.filter(item => 
            !searchFilter || 
            item.code.toLowerCase().includes(searchFilter.toLowerCase()) || 
            item.title.toLowerCase().includes(searchFilter.toLowerCase()) || 
            item.requirement.toLowerCase().includes(searchFilter.toLowerCase())
          ).map((item) => (
            <div key={item.id} className="bg-white p-5 border border-black shadow-[2px_2px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_rgba(0,0,0,1)] transition-all space-y-3">
              <div className="flex items-center justify-between border-b border-black pb-2">
                <span className="px-2 py-0.5 bg-stone-100 text-black font-mono font-bold text-[10px] border border-black uppercase">
                  {isEn ? "Code: " : "Mã: "}{item.code}
                </span>
                <button
                  onClick={() => handleCopy(`Tích hợp AI: ${item.code} - ${item.requirement}`, item.id)}
                  className="flex items-center gap-1 text-[10px] uppercase font-bold tracking-wider text-stone-600 hover:text-black transition-colors"
                >
                  {copiedCode === item.id ? (
                    <Check className="w-3.5 h-3.5 text-black" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                  <span>{copiedCode === item.id ? (isEn ? "Copied" : "Đã chép") : (isEn ? "Copy" : "Sao chép")}</span>
                </button>
              </div>

              <h4 className="font-bold text-sm text-black font-serif uppercase tracking-tight">{item.title}</h4>
              <p className="text-xs text-stone-700 leading-relaxed font-serif">{item.requirement}</p>

              <div className="bg-stone-50 p-3 border border-stone-300 text-xs text-stone-800 font-serif">
                <strong className="text-black block mb-1 uppercase text-[10px] tracking-wider">
                  {isEn ? "Suggested Implementation Activity:" : "Gợi ý hoạt động thực hiện:"}
                </strong>
                {item.suggestedActivity}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* CATEGORY 2: NĂNG LỰC SỐ CV 3456 */}
      {activeCategory === "nls" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {DIGITAL_COMPETENCE_FRAMEWORK.filter(item =>
            !searchFilter ||
            item.code.toLowerCase().includes(searchFilter.toLowerCase()) ||
            item.description.toLowerCase().includes(searchFilter.toLowerCase()) ||
            item.subDomain.toLowerCase().includes(searchFilter.toLowerCase())
          ).map((item) => (
            <div key={item.id} className="bg-white p-5 border border-black shadow-[2px_2px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_rgba(0,0,0,1)] transition-all space-y-3">
              <div className="flex items-center justify-between border-b border-black pb-2">
                <span className="px-2 py-0.5 bg-stone-100 text-black font-mono font-bold text-[10px] border border-black uppercase">
                  {item.code} ({item.level})
                </span>
                <button
                  onClick={() => handleCopy(`Tích hợp NLS (CV 3456): ${item.code} - ${item.description}`, item.id)}
                  className="flex items-center gap-1 text-[10px] uppercase font-bold tracking-wider text-stone-600 hover:text-black transition-colors"
                >
                  {copiedCode === item.id ? (
                    <Check className="w-3.5 h-3.5 text-black" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                  <span>{copiedCode === item.id ? (isEn ? "Copied" : "Đã chép") : (isEn ? "Copy" : "Sao chép")}</span>
                </button>
              </div>

              <div>
                <span className="text-[10px] font-mono font-bold text-stone-500 uppercase tracking-widest">{item.domain}</span>
                <h4 className="font-bold text-sm text-black font-serif mt-0.5">{item.subDomain}</h4>
              </div>

              <p className="text-xs text-stone-700 leading-relaxed font-serif">{item.description}</p>

              <div className="bg-stone-50 p-3 border border-stone-300 text-xs text-stone-800 font-serif">
                <strong className="block mb-1 text-black uppercase text-[10px] tracking-wider">
                  {isEn ? "Classroom Application:" : "Ứng dụng trong tiết học:"}
                </strong>
                {item.example}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* CATEGORY 3: DINH DƯỠNG */}
      {activeCategory === "nutrition" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {NUTRITION_INTEGRATION.filter(item =>
            !searchFilter ||
            item.subject.toLowerCase().includes(searchFilter.toLowerCase()) ||
            item.topic.toLowerCase().includes(searchFilter.toLowerCase()) ||
            item.targetRequirement.toLowerCase().includes(searchFilter.toLowerCase())
          ).map((item) => (
            <div key={item.id} className="bg-white p-5 border border-black shadow-[2px_2px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_rgba(0,0,0,1)] transition-all space-y-3">
              <div className="flex items-center justify-between border-b border-black pb-2">
                <span className="px-2 py-0.5 bg-stone-100 text-black font-mono font-bold text-[10px] border border-black uppercase">
                  {item.subject} - {isEn ? `Grade ${item.grade}` : `Khối ${item.grade}`}
                </span>
                <button
                  onClick={() => handleCopy(`Tích hợp Dinh dưỡng: Môn ${item.subject} (${item.topic}) - ${item.targetRequirement}`, item.id)}
                  className="flex items-center gap-1 text-[10px] uppercase font-bold tracking-wider text-stone-600 hover:text-black transition-colors"
                >
                  {copiedCode === item.id ? (
                    <Check className="w-3.5 h-3.5 text-black" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                  <span>{copiedCode === item.id ? (isEn ? "Copied" : "Đã chép") : (isEn ? "Copy" : "Sao chép")}</span>
                </button>
              </div>

              <h4 className="font-bold text-sm text-black font-serif">{item.topic}</h4>
              <p className="text-xs text-stone-700 leading-relaxed font-serif">{item.targetRequirement}</p>

              <div className="bg-stone-50 p-3 border border-stone-300 text-xs text-stone-800 font-serif">
                <strong className="block mb-1 text-black uppercase text-[10px] tracking-wider">
                  {isEn ? "Integration Address / Reference:" : "Địa chỉ tích hợp:"}
                </strong>
                {item.notes}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* CATEGORY 4: QUỐC PHÒNG AN NINH */}
      {activeCategory === "defense" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {DEFENSE_INTEGRATION.filter(item =>
            !searchFilter ||
            item.subject.toLowerCase().includes(searchFilter.toLowerCase()) ||
            item.topic.toLowerCase().includes(searchFilter.toLowerCase()) ||
            item.content.toLowerCase().includes(searchFilter.toLowerCase())
          ).map((item) => (
            <div key={item.id} className="bg-white p-5 border border-black shadow-[2px_2px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_rgba(0,0,0,1)] transition-all space-y-3">
              <div className="flex items-center justify-between border-b border-black pb-2">
                <span className="px-2 py-0.5 bg-stone-100 text-black font-mono font-bold text-[10px] border border-black uppercase">
                  {item.subject} - {isEn ? `Grade ${item.grade}` : `Khối ${item.grade}`} (TT 08/2024)
                </span>
                <button
                  onClick={() => handleCopy(`Tích hợp GDQPAN (TT 08/2024): ${item.content}`, item.id)}
                  className="flex items-center gap-1 text-[10px] uppercase font-bold tracking-wider text-stone-600 hover:text-black transition-colors"
                >
                  {copiedCode === item.id ? (
                    <Check className="w-3.5 h-3.5 text-black" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                  <span>{copiedCode === item.id ? (isEn ? "Copied" : "Đã chép") : (isEn ? "Copy" : "Sao chép")}</span>
                </button>
              </div>

              <h4 className="font-bold text-sm text-black font-serif">{item.topic}</h4>
              <p className="text-xs text-stone-700 leading-relaxed font-serif">{item.content}</p>

              <div className="bg-stone-50 p-3 border border-stone-300 text-xs text-stone-800 font-serif">
                <strong className="block mb-1 text-black uppercase text-[10px] tracking-wider">
                  {isEn ? "Integration Method:" : "Hình thức lồng ghép:"}
                </strong>
                {item.method}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

