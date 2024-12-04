import { tests, kiemTraChinhTa } from "./testVerses.js";

console.log('Test page');

let userChoice = JSON.parse(localStorage.getItem('currentTest'));
console.log('Running model: ' + userChoice.model);


hideDivByClass('.reset-button');

/** ******* TEST MODEL ********* */
if (userChoice.model === 'test') {

  let currentQuestion = 1;

  displayQuestion(userChoice, currentQuestion);

  document.querySelector('.answer-input').onkeydown = function (e) {
    if(e.key === 'Enter'){
      if (testModel(currentQuestion)) {
        currentQuestion++;
  
        if (currentQuestion <= tests.phiLipVerses.correctAnswers.length) {
          displayQuestion(userChoice, currentQuestion);
  
        } else {
          // Nếu đã hết câu hỏi, thông báo kết thúc bài kiểm tra
          alert('Bạn đã hoàn thành bài kiểm tra!');
          document.querySelector('.feedback').innerText = 'HOÀN THÀNH 100%';
  
        }
      }
    }
  }
  
  document.querySelector('.submit-answer-button').onclick  = function () {
    if (testModel(currentQuestion)) {
      currentQuestion++;

      if (currentQuestion <= tests.phiLipVerses.correctAnswers.length) {
        displayQuestion(userChoice, currentQuestion);

      } else {
        // Nếu đã hết câu hỏi, thông báo kết thúc bài kiểm tra
        alert('Bạn đã hoàn thành bài kiểm tra!');
        document.querySelector('.feedback').innerText = 'HOÀN THÀNH 100%';

      }
    }

  };



}

function testModel(currentQuestion) {
  if (checkAnswer(currentQuestion)) {// true
    document.querySelector('.answer-input').value = '';
    return true;
  } else {

    document.querySelector('.show-result-container').innerHTML += `
    <div style="color: red; padding-bottom: 5px;">
    ${currentQuestion}. 
    ${document.querySelector('.answer-input').value}</div>
    
    ${currentQuestion}. 
    ${tests.phiLipVerses.correctAnswers[currentQuestion - 1]}`;
    document.querySelector('.answer-input').value = '';
    alert("Bắt đầu lại từ đầu.");
    resetButtonVisible();
    return false;
  }

}

/** ******* PRACTICE MODEL ********* */
if (userChoice.model === 'practice') {
  practiceModel();

}

function practiceModel() {
  hideDivByClass('.reset-button');
  hideDivByClass('.answer-input');
  hideDivByClass('.submit-answer-button');
  displayChoosePracticeVerse();

  const verInput = document.querySelector('.number-verse-input')
  verInput.onkeydown = function (event) {
    if (event.key === 'Enter') {
      numberVerseHandler(event);
    }
  };


  // document.querySelector('.number-verse-input').addEventListener('keypress', (e) => {
  //   if (e.key === 'Enter') {
  //     numberVerseHandler(e);
  //   }
  // });

  hideShowResultWhenClicked();

}

function checkAnswer(currentQuestion) {

  let userAnswer = document.querySelector('.answer-input').value;

  let finalAnswer = tests.phiLipVerses.correctAnswers[currentQuestion - 1];

  let nhanXet = kiemTraChinhTa(userAnswer, finalAnswer);

  // Kết quả
  if (nhanXet.length === 0) { // Không nhận xét => SAI
    document.querySelector('.feedback').style = "color: red;";
    document.querySelector('.feedback').innerText = "NHẬN XÉT: Sai !";
    return false;

  } else if (nhanXet[0] === 'Không được để trống') {
    document.querySelector('.feedback').style = "color: red;";
    document.querySelector('.feedback').innerText = nhanXet;
    return false;

  } else {
    document.querySelector('.feedback').style = "color: green;";
    document.querySelector('.feedback').innerText = nhanXet;
    document.querySelector('.show-result-container').innerText += currentQuestion + '. ' + userAnswer + '\n';
    return true;
  }

}

function numberVerseHandler(e) {
  let chosenVerse = document.querySelector('.number-verse-input').value;

  e.preventDefault();

  if (chosenVerse >= 1 && chosenVerse <= 18) {
    showDivByClass('.answer-input');
    showDivByClass('.submit-answer-button');
    displayQuestion(userChoice, chosenVerse);
    showDivByClass('.feedback');
    showDivByClass('.show-result-container');


    document.querySelector('.submit-answer-button').onclick = function () {
      submitVerseHandler(chosenVerse);
    }

    document.querySelector('.answer-input').onkeydown = function (e) {
      if (e.key === "Enter") {
        answerInputHandler(e, chosenVerse);
      }
    };

    // document.querySelector('.answer-input').addEventListener('keypress', (e) => {
    //   if (e.key === "Enter") {
    //     answerInputHandler(e, chosenVerse);
    //   }
    // });

  } else {
    alert('Số câu không hợp lệ');
    document.querySelector('.number-verse-input').value = '';

  }

}

function answerInputHandler(e, chosenVerse) {
  console.log('func answerInputHandler : ' + chosenVerse);
  if (e.key === 'Enter') {
    e.preventDefault();
    submitVerseHandler(chosenVerse);
  }
}

function submitVerseHandler(chosenVerse) {

  if (checkAnswer(chosenVerse) == true) {
    document.querySelector('.show-result-container').innerHTML = `
    <div style="color: green; padding-bottom: 5px;">
    ${chosenVerse}. 
    ${document.querySelector('.answer-input').value}</div>
    
    ${chosenVerse}. 
    ${tests.phiLipVerses.correctAnswers[chosenVerse - 1]}`;
    resetButtonVisible();

  } else {

    document.querySelector('.show-result-container').innerHTML = `
    <div style="color: red; padding-bottom: 5px;">
    ${chosenVerse}. 
    ${document.querySelector('.answer-input').value}</div>
    
    ${chosenVerse}. 
    ${tests.phiLipVerses.correctAnswers[chosenVerse - 1]}`;

  }

  document.querySelector('.answer-input').value = "";
}

// Hide the div
function hideDivByClass(divClass) {
  const element = document.querySelector(divClass);
  if (element) {
    element.style.display = 'none';

  }
}

// Show the div
function showDivByClass(divClass) {
  const element = document.querySelector(divClass);
  if (element) {
    element.style.display = 'block';
  }
}

// [show-result-container] will be empty when click [answer-input]
function hideShowResultWhenClicked() {

  document.querySelector('.answer-input').addEventListener('click', (e) => {
    if (document.querySelector('.show-result-container').innerHTML != null) {
      document.querySelector('.show-result-container').innerHTML = "";
    }
  });
}

// Display question number depend on the current question
function displayQuestion(data, currentQuestion) {
  document.querySelector('.question-container').innerHTML = `
    [${data.name}] Câu hỏi số ${currentQuestion}
  `;
};

function displayChoosePracticeVerse() {
  document.querySelector('.question-container').innerHTML = `
    Nhập số câu Kinh Thánh để luyện tập:
    <input class='number-verse-input' type="text" placeholder="Số"></input>
  `;
}


function resetHandler() {
  // 1. Reset lại các giá trị trong giao diện
  document.querySelector('.show-result-container').innerHTML = "";
  document.querySelector('.feedback').innerHTML = "";
  document.querySelector('.answer-input').value = "";

  // 2. Ẩn tất cả các div liên quan
  hideDivByClass('.reset-button');
  hideDivByClass('.answer-input');
  hideDivByClass('.submit-answer-button');
  hideDivByClass('.feedback');
  hideDivByClass('.show-result-container');


  // 4. Reset lại trạng thái của các biến toàn cục
  userChoice = JSON.parse(localStorage.getItem('currentTest')); // Đảm bảo lấy lại dữ liệu người dùng

  // 5. Chạy lại logic khởi tạo ban đầu
  if (userChoice.model === 'practice') {
    
    practiceModel(); // Khởi tạo lại chế độ luyện tập
  } else if (userChoice.model === 'test') {

    let currentQuestion = 1;
    displayQuestion(userChoice, currentQuestion); // Khởi tạo chế độ bài test
    
  }
}

function resetButtonVisible() {
  showDivByClass('.reset-button');


  const resetButton = document.querySelector('.reset-button');
  resetButton.onclick = function () {
    resetHandler();
  }



}


