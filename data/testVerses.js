const phiLipVerses = [
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
  "Ấy vậy, hỡi những kẻ rất yêu dấu của tôi, như anh em đã vâng lời luôn luôn, chẳng những khi tôi có mặt mà thôi, lại bây giờ là lúc tôi vắng mặt, hãy càng hơn nữa, mà lấy lòng sợ sệt run rẩy làm nên sự cứu chuộc mình.",
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

const thiThienVerses = [
  // Câu 1
  'Các từng trời rao truyền sự vinh hiển của Đức Chúa Trời, Bầu trời giãi tỏ công việc tay Ngài làm.',
  // Câu 2
  'Ngày nầy giảng cho ngày kia, Đêm nầy tỏ sự tri thức cho đêm nọ.',
  // Câu 3
  'Chẳng có tiếng, chẳng có lời nói; Cũng không ai nghe tiếng của chúng nó.',
  // Câu 4 
  'Dây đo chúng nó bủa khắp trái đất, Và lời nói chúng nó truyền đến cực địa. Nơi chúng nó Ngài đã đóng trại cho mặt trời',
  // Câu 5
  'Mặt trời khác nào người tân lang ra khỏi phòng huê chúc, Vui mừng chạy đua như người dõng sĩ',
  // Câu 6
  'Mặt trời ra từ phương trời nầy, Chạy vòng giáp đến phương trời kia; Chẳng chi tránh khỏi hơi nóng mặt trời được.',
  // Câu 7
  'Luật pháp của Đức Giê-hô-va là trọn vẹn, bổ linh hồn lại; Sự chứng cớ Đức Giê-hô-va là chắc chắn, làm cho kẻ ngu dại trở nên khôn ngoan.',
  // Câu 8
  'Giềng mối của Đức Giê-hô-va là ngay thẳng, làm cho lòng vui mừng; Điều răn của Đức Giê-hô-va trong sạch, làm cho mắt sáng sủa.',
  // Câu 9
  'Sự kính sợ Đức Giê-hô-va là trong sạch, hằng còn đến đời đời; Các mạng lịnh của Đức Giê-hô-va là chân thật, thảy đều công bình cả.',
  // Câu 10
  'Các điều ấy quí hơn vàng, thật báu hơn vàng ròng; Lại ngọt hơn mật, hơn nước ngọt của tàng ong.',
  // Câu 11
  'Các điều ấy dạy cho kẻ tôi tớ Chúa được thông hiểu; Ai gìn giữ lấy, được phần thưởng lớn thay.',
  // Câu 12
  'Ai biết được các sự sai lầm mình? Xin Chúa tha các lỗi tôi không biết.',
  // Câu 13
  'Xin Chúa giữ kẻ tôi tớ Chúa khỏi cố ý phạm tội; Nguyện tội ấy không cai trị tôi; Thì tôi sẽ không chỗ trách được, và không phạm tội trọng.',
  // Câu 14
  'Hỡi Đức Giê-hô-va là hòn đá tôi và là Đấng cứu chuộc tôi, Nguyện lời nói của miệng tôi, Sự suy gẫm của lòng tôi được đẹp ý Ngài!'
]

export const data = {
  phiLipVerses: { // I Phi-líp đoạn 2 câu 1 đến câu 18.
    nameModel: 'Phi-líp 2 : 1 - 18',
    correctAnswers: phiLipVerses
  },
  thiThienVerses: { // Thi Thiên đoạn 19 câu 1 đến câu 14
    nameModel: 'Thi Thiên 19 : 1 - 14',
    correctAnswers: thiThienVerses
  }
};

export function kiemTraChinhTa(userInput, correctAnswer) {
  const results = [];

  let cleaneduserInput = userInput.replace(/\W+/g, '');
  let cleanedcorrectAnswer = correctAnswer.replace(/\W+/g, '');
  
  if (userInput === correctAnswer) {
    // Đúng chính xác hoàn toàn
    results.push("NHẬN XÉT: Chính xác từng chữ.");

  } else if (userInput.trim() === correctAnswer.trim()) {
    // Sai khoảng cách (whitespace)
    results.push("NHẬN XÉT: Cuối câu dư khoảng cách.");

  } else if (
    userInput.toLowerCase() === correctAnswer.toLowerCase()) {
    // Sai viết hoa
    results.push("NHẬN XÉT: Viết hoa chưa đúng.");

  } else if (userInput.replace(/\s+/g, ' ') === correctAnswer.replace(/\s+/g, ' ')) {
    // Sai dấu cách ở giữa (extra spaces)
    results.push("NHẬN XÉT: Dư khoảng cách (_space_).");

  } else if (cleaneduserInput === cleanedcorrectAnswer) {
    // Sai ký tự đặc biệt
    results.push("NHẬN XÉT: Sai các ký tự đặc biệt như , .");
    
  } else if (userInput === "") {
    // Để trống
    results.push('NHẬN XÉT: Không được để trống');

  } else {
    return results;
  }
  return results;
}

