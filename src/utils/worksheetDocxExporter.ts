import {
  Document,
  Packer,
  Paragraph,
  TextRun,
  Table,
  TableRow,
  TableCell,
  WidthType,
  AlignmentType,
  BorderStyle,
  PageBreak,
} from "docx";
import { SchoolInfo } from "../types";
import { SubjectWorksheet } from "../data/weeklyWorksheetsData";
import { saveDocxFile } from "./docxExporter";

function getFontSizeHalfPoints(pt: number): number {
  return Math.round(pt * 2);
}

const STANDARD_A4_PAGE_PORTRAIT = {
  size: {
    width: 11906, // 210mm
    height: 16838, // 297mm
  },
  margin: {
    top: 1134, // 2.0 cm
    bottom: 1134, // 2.0 cm
    left: 1417, // 2.5 cm
    right: 850, // 1.5 cm
  },
};

/**
 * Builds the paragraphs and tables for a single subject worksheet
 */
function buildWorksheetDocChildren(
  schoolInfo: SchoolInfo,
  worksheet: SubjectWorksheet,
  font: string,
  baseSize: number,
  smallSize: number,
  subTitleSize: number,
  titleSize: number,
  tableWidth: number
): any[] {
  const children: any[] = [];
  const isEn = worksheet.lang === "en";

  // 1. Top Administrative Header (2 cells, borderless)
  const leftDept = isEn
    ? "DEPARTMENT OF EDUCATION & TRAINING"
    : (schoolInfo.departmentName || "PHÒNG GIÁO DỤC VÀ ĐÀO TẠO").toUpperCase();
  const leftSchool = isEn
    ? (schoolInfo.schoolName || "PRIMARY SCHOOL").toUpperCase()
    : (schoolInfo.schoolName || "TRƯỜNG TIỂU HỌC").toUpperCase();
  const rightTitle = isEn
    ? `WEEKLY REVIEW WORKSHEET - WEEK ${worksheet.week}`
    : `PHIẾU ÔN TẬP CUỐI TUẦN ${worksheet.week}`;
  const rightYear = isEn
    ? `School Year: ${schoolInfo.academicYear}`
    : `Năm học: ${schoolInfo.academicYear}`;

  children.push(
    new Table({
      width: { size: tableWidth, type: WidthType.DXA },
      borders: {
        top: { style: BorderStyle.NONE },
        bottom: { style: BorderStyle.NONE },
        left: { style: BorderStyle.NONE },
        right: { style: BorderStyle.NONE },
        insideHorizontal: { style: BorderStyle.NONE },
        insideVertical: { style: BorderStyle.NONE },
      },
      rows: [
        new TableRow({
          children: [
            new TableCell({
              width: { size: 5000, type: WidthType.DXA },
              children: [
                new Paragraph({
                  alignment: AlignmentType.CENTER,
                  children: [
                    new TextRun({
                      text: leftDept,
                      font,
                      size: smallSize,
                    }),
                  ],
                }),
                new Paragraph({
                  alignment: AlignmentType.CENTER,
                  children: [
                    new TextRun({
                      text: leftSchool,
                      bold: true,
                      font,
                      size: baseSize,
                    }),
                  ],
                }),
              ],
            }),
            new TableCell({
              width: { size: 4400, type: WidthType.DXA },
              children: [
                new Paragraph({
                  alignment: AlignmentType.CENTER,
                  children: [
                    new TextRun({
                      text: rightTitle,
                      bold: true,
                      font,
                      size: baseSize,
                    }),
                  ],
                }),
                new Paragraph({
                  alignment: AlignmentType.CENTER,
                  children: [
                    new TextRun({
                      text: rightYear,
                      italics: true,
                      font,
                      size: smallSize,
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    })
  );

  children.push(new Paragraph({ text: "", spacing: { before: 80 } }));

  // 2. Title Banner
  const titleText = isEn
    ? `SUBJECT: ${worksheet.subject.toUpperCase()} - GRADE ${worksheet.grade}`
    : `MÔN: ${worksheet.subject.toUpperCase()} - LỚP ${worksheet.grade}`;
  const timeText = isEn
    ? `(Time allowed: ${worksheet.timeAllowedMinutes} minutes - Excluding distribution time)`
    : `(Thời gian làm bài: ${worksheet.timeAllowedMinutes} phút - Không kể thời gian giao đề)`;

  children.push(
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { before: 80, after: 40 },
      children: [
        new TextRun({
          text: titleText,
          bold: true,
          font,
          size: titleSize,
          color: "1E3A8A",
        }),
      ],
    })
  );

  children.push(
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { after: 40 },
      children: [
        new TextRun({
          text: `${worksheet.subtitle}`,
          italics: true,
          font,
          size: smallSize,
          color: "334155",
        }),
      ],
    })
  );

  children.push(
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { after: 80 },
      children: [
        new TextRun({
          text: timeText,
          italics: true,
          font,
          size: smallSize,
          color: "64748B",
        }),
      ],
    })
  );

  // 3. Student Information Box (Bordered Table)
  const studentNameLabel = isEn ? "Student's Full Name: " : "Họ và tên học sinh: ";
  const classLabel = isEn ? "Class: " : "Lớp: ";
  const scoreLabel = isEn ? "SCORE" : "ĐIỂM SỐ";
  const commentsLabel = isEn ? "Teacher's Comments: " : "Lời nhận xét của thầy/cô: ";
  const classVal = `${worksheet.grade}${schoolInfo.className ? schoolInfo.className.replace(String(worksheet.grade), "") : "A"} ..............................................................`;

  children.push(
    new Table({
      width: { size: tableWidth, type: WidthType.DXA },
      borders: {
        top: { style: BorderStyle.SINGLE, size: 6, color: "000000" },
        bottom: { style: BorderStyle.SINGLE, size: 6, color: "000000" },
        left: { style: BorderStyle.SINGLE, size: 6, color: "000000" },
        right: { style: BorderStyle.SINGLE, size: 6, color: "000000" },
        insideHorizontal: { style: BorderStyle.SINGLE, size: 4, color: "CBD5E1" },
        insideVertical: { style: BorderStyle.SINGLE, size: 4, color: "CBD5E1" },
      },
      rows: [
        new TableRow({
          children: [
            new TableCell({
              width: { size: 6200, type: WidthType.DXA },
              children: [
                new Paragraph({
                  spacing: { before: 40, after: 40 },
                  children: [
                    new TextRun({ text: studentNameLabel, bold: true, font, size: baseSize }),
                    new TextRun({ text: ".......................................................................", font, size: baseSize, color: "64748B" }),
                  ],
                }),
                new Paragraph({
                  spacing: { before: 20, after: 40 },
                  children: [
                    new TextRun({ text: classLabel, bold: true, font, size: baseSize }),
                    new TextRun({ text: classVal, font, size: baseSize, color: "64748B" }),
                  ],
                }),
              ],
            }),
            new TableCell({
              width: { size: 3200, type: WidthType.DXA },
              children: [
                new Paragraph({
                  alignment: AlignmentType.CENTER,
                  spacing: { before: 40, after: 20 },
                  children: [
                    new TextRun({ text: scoreLabel, bold: true, font, size: baseSize }),
                  ],
                }),
                new Paragraph({
                  alignment: AlignmentType.CENTER,
                  spacing: { before: 20, after: 40 },
                  children: [
                    new TextRun({ text: "................ / 10", font, size: subTitleSize, color: "94A3B8" }),
                  ],
                }),
              ],
            }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              columnSpan: 2,
              width: { size: tableWidth, type: WidthType.DXA },
              children: [
                new Paragraph({
                  spacing: { before: 40, after: 40 },
                  children: [
                    new TextRun({ text: commentsLabel, bold: true, font, size: baseSize }),
                    new TextRun({ text: "...................................................................................................................................", font, size: baseSize, color: "94A3B8" }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    })
  );

  children.push(new Paragraph({ text: "", spacing: { before: 100 } }));

  // 4. PART 1: MULTIPLE CHOICE
  const part1Header = isEn
    ? "I. MULTIPLE CHOICE QUESTIONS (Choose and circle the correct letter):"
    : "I. PHẦN TRẮC NGHIỆM (Khoanh tròn vào chữ cái đặt trước câu trả lời đúng):";

  children.push(
    new Paragraph({
      spacing: { before: 80, after: 40 },
      children: [
        new TextRun({
          text: part1Header,
          bold: true,
          font,
          size: baseSize,
          color: "0F172A",
        }),
      ],
    })
  );

  worksheet.part1_MultipleChoice.forEach((q, idx) => {
    const qPrefix = isEn ? `Question ${idx + 1}. ` : `Câu ${idx + 1}. `;
    const ptText = q.points ? (isEn ? ` (${q.points} pt${q.points > 1 ? "s" : ""})` : ` (${q.points} điểm)`) : "";

    children.push(
      new Paragraph({
        spacing: { before: 60, after: 20 },
        children: [
          new TextRun({ text: qPrefix, bold: true, font, size: baseSize, color: "1E40AF" }),
          new TextRun({ text: q.question, bold: true, font, size: baseSize }),
          ...(ptText ? [new TextRun({ text: ptText, italics: true, font, size: smallSize, color: "64748B" })] : []),
        ],
      })
    );

    if (q.options && q.options.length > 0) {
      const optRows: TableRow[] = [];
      for (let i = 0; i < q.options.length; i += 2) {
        const opt1 = q.options[i];
        const opt2 = q.options[i + 1];

        optRows.push(
          new TableRow({
            children: [
              new TableCell({
                width: { size: 4700, type: WidthType.DXA },
                children: [
                  new Paragraph({
                    spacing: { before: 20, after: 20 },
                    children: [new TextRun({ text: opt1, font, size: baseSize })],
                  }),
                ],
              }),
              new TableCell({
                width: { size: 4700, type: WidthType.DXA },
                children: [
                  new Paragraph({
                    spacing: { before: 20, after: 20 },
                    children: [new TextRun({ text: opt2 || "", font, size: baseSize })],
                  }),
                ],
              }),
            ],
          })
        );
      }

      children.push(
        new Table({
          width: { size: tableWidth, type: WidthType.DXA },
          borders: {
            top: { style: BorderStyle.NONE },
            bottom: { style: BorderStyle.NONE },
            left: { style: BorderStyle.NONE },
            right: { style: BorderStyle.NONE },
            insideHorizontal: { style: BorderStyle.NONE },
            insideVertical: { style: BorderStyle.NONE },
          },
          rows: optRows,
        })
      );
    }
  });

  children.push(new Paragraph({ text: "", spacing: { before: 80 } }));

  // 5. PART 2: ESSAY / PRACTICE
  const part2Header = isEn
    ? "II. PRACTICE AND PROBLEM SOLVING:"
    : "II. PHẦN TỰ LUẬN VÀ THỰC HÀNH VẬN DỤNG:";
  const studentWorkLabel = isEn ? "Student's Work:" : "Bài làm:";

  children.push(
    new Paragraph({
      spacing: { before: 80, after: 40 },
      children: [
        new TextRun({
          text: part2Header,
          bold: true,
          font,
          size: baseSize,
          color: "0F172A",
        }),
      ],
    })
  );

  worksheet.part2_PracticeOrEssay.forEach((q, idx) => {
    const ptText = q.points ? (isEn ? ` (${q.points} pt${q.points > 1 ? "s" : ""})` : ` (${q.points} điểm)`) : "";

    children.push(
      new Paragraph({
        spacing: { before: 60, after: 20 },
        children: [
          new TextRun({ text: `${q.question}`, bold: true, font, size: baseSize }),
          ...(ptText ? [new TextRun({ text: ptText, italics: true, font, size: smallSize, color: "64748B" })] : []),
        ],
      })
    );

    children.push(
      new Paragraph({
        spacing: { before: 20, after: 20 },
        children: [
          new TextRun({ text: studentWorkLabel, italics: true, font, size: smallSize, color: "475569" }),
        ],
      })
    );
    for (let line = 0; line < 3; line++) {
      children.push(
        new Paragraph({
          spacing: { before: 40, after: 40 },
          children: [
            new TextRun({
              text: ".......................................................................................................................................................................................................",
              font,
              size: baseSize,
              color: "CBD5E1",
            }),
          ],
        })
      );
    }
  });

  children.push(new Paragraph({ text: "", spacing: { before: 120 } }));

  // 6. PART 3: ANSWER KEY & SCORING GUIDE (For Teacher & Parent)
  const part3Header = isEn
    ? "III. ANSWER KEY AND SCORING RUBRIC (For Teachers & Parents):"
    : "III. ĐÁP ÁN VÀ HƯỚNG DẪN CHẤM (Dành cho Giáo viên & Phụ huynh):";
  const col1 = isEn ? "Question / Ex" : "Câu / Bài";
  const col2 = isEn ? "Correct Answer" : "Đáp án đúng";
  const col3 = isEn ? "Score" : "Điểm";
  const col4 = isEn ? "Detailed Explanation / Scoring Guide" : "Hướng dẫn giải chi tiết / Gợi ý chấm";

  children.push(
    new Paragraph({
      spacing: { before: 100, after: 40 },
      children: [
        new TextRun({
          text: part3Header,
          bold: true,
          font,
          size: baseSize,
          color: "047857",
        }),
      ],
    })
  );

  const answerRows: TableRow[] = [
    new TableRow({
      tableHeader: true,
      children: [
        new TableCell({
          width: { size: 1400, type: WidthType.DXA },
          shading: { fill: "E2E8F0" },
          children: [
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [new TextRun({ text: col1, bold: true, font, size: smallSize })],
            }),
          ],
        }),
        new TableCell({
          width: { size: 2000, type: WidthType.DXA },
          shading: { fill: "E2E8F0" },
          children: [
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [new TextRun({ text: col2, bold: true, font, size: smallSize })],
            }),
          ],
        }),
        new TableCell({
          width: { size: 1200, type: WidthType.DXA },
          shading: { fill: "E2E8F0" },
          children: [
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [new TextRun({ text: col3, bold: true, font, size: smallSize })],
            }),
          ],
        }),
        new TableCell({
          width: { size: 4800, type: WidthType.DXA },
          shading: { fill: "E2E8F0" },
          children: [
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [new TextRun({ text: col4, bold: true, font, size: smallSize })],
            }),
          ],
        }),
      ],
    }),
  ];

  // Populate answer rows
  worksheet.part1_MultipleChoice.forEach((q, idx) => {
    answerRows.push(
      new TableRow({
        children: [
          new TableCell({
            width: { size: 1400, type: WidthType.DXA },
            children: [
              new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [new TextRun({ text: isEn ? `Q.${idx + 1}` : `Câu ${idx + 1}`, bold: true, font, size: smallSize })],
              }),
            ],
          }),
          new TableCell({
            width: { size: 2000, type: WidthType.DXA },
            children: [
              new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [new TextRun({ text: q.correctAnswer, bold: true, font, size: baseSize, color: "047857" })],
              }),
            ],
          }),
          new TableCell({
            width: { size: 1200, type: WidthType.DXA },
            children: [
              new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [new TextRun({ text: isEn ? `${q.points || 1} pt` : `${q.points || 1} đ`, font, size: smallSize })],
              }),
            ],
          }),
          new TableCell({
            width: { size: 4800, type: WidthType.DXA },
            children: [
              new Paragraph({
                children: [new TextRun({ text: q.explanation || (isEn ? "Correct according to curriculum." : "Theo chuẩn kiến thức."), font, size: smallSize })],
              }),
            ],
          }),
        ],
      })
    );
  });

  worksheet.part2_PracticeOrEssay.forEach((q, idx) => {
    answerRows.push(
      new TableRow({
        children: [
          new TableCell({
            width: { size: 1400, type: WidthType.DXA },
            children: [
              new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [new TextRun({ text: isEn ? `Ex.${idx + 1}` : `Bài ${idx + 1}`, bold: true, font, size: smallSize })],
              }),
            ],
          }),
          new TableCell({
            width: { size: 2000, type: WidthType.DXA },
            children: [
              new Paragraph({
                children: [new TextRun({ text: isEn ? "See detailed guide" : "Xem HD chi tiết", italics: true, font, size: smallSize })],
              }),
            ],
          }),
          new TableCell({
            width: { size: 1200, type: WidthType.DXA },
            children: [
              new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [new TextRun({ text: isEn ? `${q.points || 3} pts` : `${q.points || 3} đ`, font, size: smallSize })],
              }),
            ],
          }),
          new TableCell({
            width: { size: 4800, type: WidthType.DXA },
            children: [
              new Paragraph({
                children: [
                  new TextRun({ text: `${q.correctAnswer}\n`, bold: true, font, size: smallSize }),
                  new TextRun({ text: q.explanation || "", italics: true, font, size: smallSize - 1, color: "475569" }),
                ],
              }),
            ],
          }),
        ],
      })
    );
  });

  children.push(
    new Table({
      width: { size: tableWidth, type: WidthType.DXA },
      rows: answerRows,
    })
  );

  // 7. Footer Note & Loigiaihay reference
  const footerPrefix = isEn
    ? "★ Free reference learning & solution resources: "
    : "★ Nguồn tài liệu ôn tập & giải bài tập tham khảo miễn phí: ";

  children.push(
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { before: 120, after: 60 },
      children: [
        new TextRun({
          text: footerPrefix,
          font,
          size: smallSize - 1,
          color: "64748B",
        }),
        new TextRun({
          text: "https://loigiaihay.com/",
          bold: true,
          font,
          size: smallSize - 1,
          color: "1E40AF",
        }),
      ],
    })
  );

  return children;
}

/**
 * 1. Export a SINGLE subject worksheet to Word (.docx)
 */
export async function exportSingleWorksheetDocx(
  schoolInfo: SchoolInfo,
  worksheet: SubjectWorksheet
) {
  const font = schoolInfo.fontFamily || "Times New Roman";
  const baseSize = getFontSizeHalfPoints(schoolInfo.fontSize || 13);
  const smallSize = getFontSizeHalfPoints((schoolInfo.fontSize || 13) - 1);
  const subTitleSize = getFontSizeHalfPoints((schoolInfo.fontSize || 13) + 1);
  const titleSize = getFontSizeHalfPoints((schoolInfo.fontSize || 13) + 3);
  const tableWidth = 9400;

  const docChildren = buildWorksheetDocChildren(
    schoolInfo,
    worksheet,
    font,
    baseSize,
    smallSize,
    subTitleSize,
    titleSize,
    tableWidth
  );

  const doc = new Document({
    sections: [
      {
        properties: {
          page: STANDARD_A4_PAGE_PORTRAIT,
        },
        children: docChildren,
      },
    ],
  });

  const blob = await Packer.toBlob(doc);
  const safeSubject = worksheet.subject.replace(/[^a-zA-Z0-9]/g, "_");
  const isEn = worksheet.lang === "en";
  const filename = isEn
    ? `Weekly_Worksheet_Week_${worksheet.week}_Subject_${safeSubject}_Grade_${worksheet.grade}.docx`
    : `Phieu_Bai_Tap_Cuoi_Tuan_${worksheet.week}_Mon_${safeSubject}_Lop_${worksheet.grade}.docx`;

  return saveDocxFile(blob, filename);
}

/**
 * 2. Export ALL subject worksheets of the week in a SINGLE Word (.docx) file (separated by page breaks)
 */
export async function exportAllWorksheetsDocx(
  schoolInfo: SchoolInfo,
  worksheets: SubjectWorksheet[]
) {
  const font = schoolInfo.fontFamily || "Times New Roman";
  const baseSize = getFontSizeHalfPoints(schoolInfo.fontSize || 13);
  const smallSize = getFontSizeHalfPoints((schoolInfo.fontSize || 13) - 1);
  const subTitleSize = getFontSizeHalfPoints((schoolInfo.fontSize || 13) + 1);
  const titleSize = getFontSizeHalfPoints((schoolInfo.fontSize || 13) + 3);
  const tableWidth = 9400;

  const docChildren: any[] = [];

  worksheets.forEach((ws, idx) => {
    if (idx > 0) {
      docChildren.push(new Paragraph({ children: [new PageBreak()] }));
    }

    const wsChildren = buildWorksheetDocChildren(
      schoolInfo,
      ws,
      font,
      baseSize,
      smallSize,
      subTitleSize,
      titleSize,
      tableWidth
    );

    docChildren.push(...wsChildren);
  });

  const doc = new Document({
    sections: [
      {
        properties: {
          page: STANDARD_A4_PAGE_PORTRAIT,
        },
        children: docChildren,
      },
    ],
  });

  const blob = await Packer.toBlob(doc);
  const grade = worksheets[0]?.grade || schoolInfo.grade || 1;
  const week = worksheets[0]?.week || schoolInfo.week || 1;
  const isEn = worksheets[0]?.lang === "en";
  const filename = isEn
    ? `Full_Weekly_Worksheets_Package_Week_${week}_All_Subjects_Grade_${grade}.docx`
    : `Tron_Bo_Phieu_Bai_Tap_Cuoi_Tuan_${week}_Tat_Ca_Cac_Mon_Lop_${grade}.docx`;

  return saveDocxFile(blob, filename);
}
