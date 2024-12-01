const bibleVerses = [
  // Câu 1
  "Vậy nếu trong Đấng Christ có điều yên ủi nào, nếu vì lòng yêu thương có điều cứu giúp nào, nếu có sự thông công nơi Thánh Linh, nếu có lòng yêu mến và lòng thương xót,",
  // Câu 2 
  "thì anh em hãy hiệp ý với nhau, đồng tình yêu thương, đồng tâm, đồng tư tưởng mà làm cho tôi vui mừng trọn vẹn.",
  // Câu 3
  "Chớ làm sự chi vì lòng tranh cạnh hoặc vì hư vinh, nhưng hãy khiêm nhường, coi người khác như tôn trọng hơn mình.",
  // Câu 4
  "Mỗi một người trong anh em chớ chăm về lợi riêng mình, nhưng phải chăm về lợi kẻ khác nữa.",
  // Câu 5
  "Hãy có đồng một tâm tình như Đấng Christ đã có,",
  // Câu 6
  "Ngài vốn có hình Đức Chúa Trời, song chẳng coi sự bình đẳng mình với Đức Chúa Trời là sự nên nắm giữ;",
  // Câu 7
  "chính Ngài đã tự bỏ mình đi, lấy hình tôi tớ và trở nên giống như loài người;",
  // Câu 8
  "Ngài đã hiện ra như một người, tự hạ mình xuống, vâng phục cho đến chết, thậm chí chết trên cây thập tự.",
  // Câu 9
  "Cũng vì đó nên Đức Chúa Trời đã đem Ngài lên rất cao, và ban cho Ngài danh trên hết mọi danh,",
  // Câu 10
  "hầu cho nghe đến danh Đức Chúa Giê-xu, mọi đầu gối trên trời, dưới đất, bên dưới đất, thảy đều quì xuống,",
  // Câu 11
  "và mọi lưỡi thảy đều xưng Giê-xu Christ là Chúa, mà tôn vinh Đức Chúa Trời, là Đức Chúa Cha.",
  // Câu 12
  "Ấy vậy, hỡi những kẻ rất yêu dấu của tôi, như anh em đã vâng lời luôn luôn, chẳng những khi tôi có mặt mà thôi,lại bây giờ là lúc tôi vắng mặt, hãy càng hơn nữa, mà lấy lòng sợ sệt run rẩy làm nên sự cứu chuộc mình.",
  // Câu 13
  "Vì ấy chính Đức Chúa Trời cảm động lòng anh em vừa muốn vừa làm theo ý tốt Ngài.",
  // Câu 14
  "Phàm làm việc gì chớ nên lằm bằm và lưỡng lự,",
  // Câu 15
  "hầu cho anh em ở giữa dòng dõi hung ác ngang nghịch, được nên con cái của Đức Chúa Trời, không vít, không tì, không chỗ trách được, lại giữa dòng dõi đó, giữ lấy đạo sự sống, chiếu sáng như đuốc trong thế gian;",
  // Câu 16
  "cho đến nỗi tới ngày của Đấng Christ, tôi có thể khoe mình rằng chẳng đã chạy vô ích và khó nhọc luống công.",
  // Câu 17
  "Ví dầu huyết tôi phải dùng để tưới trên của tế lễ và của dâng đức tin anh em, tôi cũng vui lòng, lại đồng vui với anh em hết thảy.",
  // Câu 18
  "Anh em cũng vậy, hãy vui lòng về điều đó, và hãy cùng vui với tôi."
];

export const tests = {
  phiLipVerses: { // I Phi-líp đoạn 2 câu 1 đến câu 18.
    nameModel : 'Phi-líp 2 : 1 - 18',
    correctAnswers: bibleVerses
  }
};

function kiemTra(string1, string2) {
  const results = [];

  // Đúng chính xác hoàn toàn
  if (string1 === string2) {
      results.push("Chính xác từng chữ.");
  }

  // Sai khoảng cách (whitespace)
  if (string1.trim() === string2.trim()) {
      results.push("Cuối câu dư khoảng cách.");
  }

  // Sai viết hoa
  if (string1.toLowerCase() === string2.toLowerCase()) {
      results.push("Viết hoa chưa đúng.");
  }

  // Sai dấu cách ở giữa (extra spaces)
  if (string1.replace(/\s+/g, ' ') === string2.replace(/\s+/g, ' ')) {
      results.push("Dư khoảng cách (_space_).");
  }

  // Sai ký tự đặc biệt
  const cleanedString1 = string1.replace(/\W+/g, '');
  const cleanedString2 = string2.replace(/\W+/g, '');
  if (cleanedString1 === cleanedString2) {
      results.push("Strings are the same except for special characters");
  }

  // So sánh ký tự tương ứng
  // let areCharactersSame = true;
  // for (let i = 0; i < Math.max(string1.length, string2.length); i++) {
  //     if (string1[i] !== string2[i]) {
  //         areCharactersSame = false;
  //         break;
  //     }
  // }
  // if (areCharactersSame) {
  //     results.push("Each character in the strings matches exactly");
  // }

  // Kết quả
  if (results.length === 0) {
      results.push("Bỏ trống");
  }

  results.forEach(result => console.log(result));
}

// Sử dụng hàm
kiemTra("Hello World", "hello world");
kiemTra("  Hello   World  ", "Hello World");
kiemTra("Hello-World!", "helloworld");
