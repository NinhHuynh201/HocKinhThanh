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
    window.location.href = 'testPage.html';
    console.log('Phi-líp Test Run');

    currentTest = tests.phiLipVerses;
    nameModel = document.querySelector('.js-option-phi-lip-button').innerText;
    startTest();
  });

  document.querySelector('.js-option-demo-button').addEventListener('click', () => {
    window.location.href = 'testPage.html';
    console.log('Demo Test Run');

    currentTest = tests.demoVerses;
    nameModel = document.querySelector('.js-option-demo-button').innerText;
    startTest();
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


