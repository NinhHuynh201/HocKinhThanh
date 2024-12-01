import { tests, kiemTra } from "./testVerses.js";

console.log('Test page');

const userChoice = JSON.parse(localStorage.getItem('currentTest'));
console.log("🚀 ~ userChoice:", userChoice);
console.log('Running model: '+ userChoice.model);


let currentQuestion = 1;

if(userChoice.model === 'test'){
  displayQuestion(userChoice, currentQuestion);
}

function displayQuestion(data, currentQuestion){
  document.querySelector('.question-container').innerHTML = `
    [${data.name}] Câu hỏi số ${currentQuestion}
  `;
};

function checkAnswer(currentQuestion){
  const userAnswer = document.querySelector('.answer-input').value.trim();
  
  const finalAnswer = tests.phiLipVerses.correctAnswers[currentQuestion-1];
  
  console.log("🚀 ~ checkAnswer ~ userAnswer:", userAnswer);
  console.log("🚀 ~ checkAnswer ~ finalAnswer:", finalAnswer);
  
  const nhanXet = kiemTra(userAnswer, finalAnswer);

  console.log("🚀 ~ checkAnswer ~ kiemTra(userAnswer, finalAnswer);:", kiemTra(userAnswer, finalAnswer));
     
  // Kết quả
  if (nhanXet.length === 0) {
    console.log("Nhận xét: Sai!");
  }
}
  

document.getElementById('submit-answer').addEventListener('click',() => {
  checkAnswer(1);
  
});



// const selectContainer = document.querySelector(".select-container");
// const questionContainer = document.getElementById("question-container");
// const answerInput = document.getElementById("answer-input");
// const submitAnswerButton = document.getElementById("submit-answer");
// const feedback = document.getElementById("feedback");
// const homeButton = document.getElementById("home-button");

// export let currentQuestion = 0;


  






// // Checking the answer of the user
// export function checkAnswer(currentTest) {
//   const userAnswer = normalizeAnswer(answerInput.value.trim());
//   const correctAnswer = normalizeAnswer(currentTest.correctAnswers[currentQuestion]);

//   if (userAnswer === correctAnswer) {
//       currentQuestion++;
//       if (currentQuestion < currentTest.questions.length) {
//         displayQuestion();
//         feedback.innerText = `Câu ${currentQuestion} chính xác`;
//       } else {
//         feedback.innerText = "Chúc mừng! Bạn đã hoàn thành!";
//         submitAnswerButton.style.display = "none";
//         alert(`Chúc mừng! Bạn đã HOÀN THÀNH đoạn ${nameModel}`);
//       }
//   } else {
//       var verseNumber = currentQuestion + 1;
//       feedback.innerText = "Sai rồi! Bắt đầu lại từ đầu.";
//       alert(`Câu ${verseNumber} chưa chính xác:\nĐáp án: ${correctAnswer}\nBạn nhập: ${userAnswer}`);
//       currentQuestion = 0;
//       displayQuestion();
//   }
// }

// answerInput.addEventListener("keypress", (e) => {
//   if (e.key === "Enter") {
//     e.preventDefault();
//     checkAnswer();
//   }
// });




