import '../data/testPage.js';
import { checkAnswer } from '../data/testPage.js';

console.log('home page');

document.addEventListener("DOMContentLoaded", () => {
  const selectContainer = document.querySelector(".select-container");
  const questionContainer = document.getElementById("question-container");
  const answerInput = document.getElementById("answer-input");
  const submitAnswerButton = document.getElementById("submit-answer");
  const feedback = document.getElementById("feedback");
  const homeButton = document.getElementById("home-button");

  

  

  document.querySelector('.js-option-phi-lip-button').addEventListener("click", () => {
    console.log('Run');
    
      currentTest = tests.phiLipVerses;
      nameModel = document.querySelector('.js-option-phi-lip-button').innerText;
      startTest();
  });

  document.querySelector('.js-option-demo-button').addEventListener('click', () => {
      currentTest = tests.demoVerses;
      nameModel = document.querySelector('.js-option-demo-button').innerText;
      startTest();
  });

  function startTest() {
      selectContainer.style.display = "none";
      currentQuestion = 0;
      displayQuestion();
  }

  homeButton.addEventListener("click", () => {
    selectContainer.style.display = "block";
    questionContainer.style.display = "none";
    answerInput.style.display = "none";
    submitAnswerButton.style.display = "none";
    homeButton.style.display = "none";
    feedback.innerText = "";
});

  submitAnswerButton.addEventListener("click", () => {
    checkAnswer();
  });

  answerInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
          checkAnswer();
      }
  });
});


