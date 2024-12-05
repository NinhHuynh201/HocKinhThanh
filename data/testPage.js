import { kiemTraChinhTa } from "./testVerses.js";

console.log('This is Test page');

let userChoice = JSON.parse(localStorage.getItem('currentTest'));

hideDivByClass('.invalid-number');
hideDivByClass('.reset-button');
hideDivByClass('.completed-text');

/** ******* TEST MODEL ********* */
if (userChoice.model === 'test') {

  testModel(1);
} else if (userChoice.model === 'practice') {
  practiceModel(userChoice);

} else {
  throw new Error("user choice is error!");

}

// Test Model
function testModel(currentQuestion) {

  displayQuestion(userChoice, currentQuestion);

  document.querySelector('.answer-input').onkeydown = function (e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      testCheckingAnswer(userChoice, currentQuestion);
    }
  }

  document.querySelector('.submit-answer-button').onclick = function () {
    testCheckingAnswer(userChoice, currentQuestion);
  };

}

function testCheckingAnswer(userChoice, currentQuestion) {
  // Khung kết quả tự động chuyển xuống
  const scrollalbeDiv = document.querySelector('.show-result-container');
  scrollalbeDiv.scrollTop = scrollalbeDiv.scrollHeight;

  if (checkAnswer(userChoice, currentQuestion)) {// true
    // Xóa nội dung vừa submit
    document.querySelector('.answer-input').value = '';

    currentQuestion++; // số câu tiếp theo

    if (currentQuestion <= userChoice.data.length) {

      testModel(currentQuestion); // Callback

    } else {
      // Nếu đã hết câu hỏi, thông báo kết thúc bài kiểm tra
      alert('Bạn đã hoàn thành bài kiểm tra!');
      hideDivByClass('.feedback');
      showDivByClass('.completed-text')
      resetButtonVisible();

    }
  } else {
    scrollalbeDiv.innerHTML += `
    <div style="color: red; padding-bottom: 5px;">
    ${currentQuestion}. 
    ${document.querySelector('.answer-input').value}</div>
    
    ${currentQuestion}. 
    ${userChoice.data[currentQuestion - 1]}`;
    document.querySelector('.answer-input').value = '';
    alert("Bắt đầu lại từ đầu.");
    resetButtonVisible();
  }
}

// Practice Model
function practiceModel(userChoice) {
  hideDivByClass('.invalid-number');
  hideDivByClass('.reset-button');
  hideDivByClass('.answer-input');
  hideDivByClass('.submit-answer-button');
  displayChoosePracticeVerse();

  const verseInput = document.querySelector('.number-verse-input');

  // Thêm timeout để chỉ xử lý khi người dùng nhấn Enter
  let typingTimer;  // Biến để lưu thời gian nhập liệu

  verseInput.onkeydown = function (event) {

    let chosenVerse = verseInput.value;

    if (event.key === 'Enter') {
      event.preventDefault();

      // Thực hiện kiểm tra sau một khoảng thời gian ngắn
      clearTimeout(typingTimer); // Hủy bỏ timer cũ nếu có

      typingTimer = setTimeout(function () {
        const invalidNumberDiv = document.querySelector('.invalid-number');

        if (chosenVerse >= 1
          && chosenVerse <= userChoice.data.length
          && Number.isInteger(Number(chosenVerse))) {
          if (invalidNumberDiv.style.display === 'block') {
            hideDivByClass('.invalid-number');
          }
          numberVerseHandler(chosenVerse);

        } else {
          if (invalidNumberDiv.style.display === 'none') {
            showDivByClass('.invalid-number');
          }
          verseInput.value = '';

        }
      }, 100); // Chỉ xử lý sau 100ms (tùy chỉnh giá trị này theo nhu cầu)

    }
  };

  hideShowResultWhenClicked();

}

// Check each asnwer depending on the current question
function checkAnswer(userChoice, currentQuestion) {
  let userAnswer = document.querySelector('.answer-input').value;

  let finalAnswer = userChoice.data[currentQuestion - 1];
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

function numberVerseHandler(chosenVerse) {

  showDivByClass('.answer-input');
  showDivByClass('.submit-answer-button');
  displayQuestion(userChoice, chosenVerse);
  showDivByClass('.feedback');
  showDivByClass('.show-result-container');


  document.querySelector('.submit-answer-button').onclick = function () {
    submitVerseHandler(userChoice, chosenVerse);
  }

  document.querySelector('.answer-input').onkeydown = function (e) {
    if (e.key === "Enter") {
      e.preventDefault();
      answerInputHandler(e, chosenVerse, userChoice);
    }
  };

}

function answerInputHandler(e, chosenVerse, userChoice) {
  if (e.key === 'Enter') {
    e.preventDefault();
    submitVerseHandler(userChoice, chosenVerse);
  }
}

function submitVerseHandler(userChoice, chosenVerse) {
  console.log('Đã kiểm tra câu KT số ' + chosenVerse);

  if (checkAnswer(userChoice, chosenVerse) == true) {
    document.querySelector('.show-result-container').innerHTML = `
    <div style="color: green; padding-bottom: 5px;">
    ${chosenVerse}. 
    ${document.querySelector('.answer-input').value}</div>
    
    ${chosenVerse}. 
    ${userChoice.data[chosenVerse - 1]}`;
    resetButtonVisible();

  } else {

    document.querySelector('.show-result-container').innerHTML = `
    <div style="color: red; padding-bottom: 5px;">
    ${chosenVerse}. 
    ${document.querySelector('.answer-input').value}</div>
    
    ${chosenVerse}. 
    ${userChoice.data[chosenVerse - 1]}`;

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
    <input class='number-verse-input' type="number" placeholder="Số"></input>
  `;
}


function resetHandler() {
  // 1. Reset lại các giá trị trong giao diện
  document.querySelector('.show-result-container').innerHTML = "";
  document.querySelector('.feedback').innerHTML = "";
  document.querySelector('.answer-input').value = "";

  // 2. Ẩn tất cả các div liên quan
  hideDivByClass('.reset-button');

  // 4. Reset lại trạng thái của các biến toàn cục
  userChoice = JSON.parse(localStorage.getItem('currentTest')); // Đảm bảo lấy lại dữ liệu người dùng

  // 5. Chạy lại logic khởi tạo ban đầu
  if (userChoice.model === 'practice') {
    hideDivByClass('.answer-input');
    hideDivByClass('.submit-answer-button');
    hideDivByClass('.feedback');
    hideDivByClass('.show-result-container');
    practiceModel(userChoice); // Khởi tạo lại chế độ luyện tập

  } else if (userChoice.model === 'test') {
    testModel(1); // Khởi tạo chế độ bài test

  }
}

function resetButtonVisible() {
  showDivByClass('.reset-button');

  document.querySelector('.reset-button').onclick = function () {
    resetHandler();
  }

}