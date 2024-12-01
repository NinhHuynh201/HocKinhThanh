import { tests, kiemTra } from "./testVerses.js";

console.log('Test page');

const userChoice = JSON.parse(localStorage.getItem('currentTest'));
console.log('Running model: ' + userChoice.model);



let currentQuestion = 1;

if (userChoice.model === 'test') {
  displayQuestion(userChoice, currentQuestion);
}

function displayQuestion(data, currentQuestion) {
  document.querySelector('.question-container').innerHTML = `
    [${data.name}] Câu hỏi số ${currentQuestion}
  `;
};

function checkAnswer(currentQuestion) {
  const userAnswer = document.querySelector('.answer-input').value.trim();

  const finalAnswer = tests.phiLipVerses.correctAnswers[currentQuestion - 1];

  const nhanXet = kiemTra(userAnswer, finalAnswer);

  // Kết quả
  if (nhanXet.length === 0) {
    document.getElementById('feedback').innerText = "Nhận xét: Sai !";
    return false;

  } else if (nhanXet[0] === 'Không được để trống') {
    document.getElementById('feedback').innerText = nhanXet;
    return false;

  } else {
    document.getElementById('feedback').innerText = nhanXet;
    document.querySelector('.show-result-container').innerText += currentQuestion + '. ' + userAnswer + '\n';
    return true;
  }

}
let verseCount = 0;

document.getElementById('submit-answer').addEventListener('click', () => {
  verseCount++;
  console.log(verseCount);
  
  let displayVerse = verseCount + 1;
  displayQuestion(userChoice, displayVerse);
  

  if (checkAnswer(verseCount) == true) {
    // Nếu có văn bản nhập vào, xóa nội dung trong div
    document.querySelector('.answer-input').value = "";
} else {
    // Nếu input rỗng, thông báo hoặc giữ nguyên nội dung trong div
    alert("Bắt đầu lại từ đầu.");
}

});
  



