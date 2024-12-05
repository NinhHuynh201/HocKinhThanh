import { data } from "./testVerses.js";

console.log('home page');

// Test buttons
document.querySelector('.js-option-phi-lip-button').onclick = () => startTest('Phi Lip');
document.querySelector('.js-option-thi-thien-button').onclick = () => startTest('Thi Thien');

// Test 
function startTest(name) {
  let verseName;
  let verseData;
  if (name === 'Phi Lip') {
    verseName = data.phiLipVerses.nameModel;
    verseData = data.phiLipVerses.correctAnswers;
    
  } else if (name === 'Thi Thien') {
    verseName = data.thiThienVerses.nameModel;
    verseData = data.thiThienVerses.correctAnswers;
    
  } else {
    throw new Error("Name model is error");
  }
  const verseModel = 'test';

  const userChoice = {
    name: verseName,
    model: verseModel,
    data: verseData
  };
  localStorage.setItem('currentTest', JSON.stringify(userChoice));

  window.location.href = '../testPage.html';
};

// Practice buttons
document.querySelector('.js-option-practice-phi-lip-button').onclick = () => startPractice('Phi Lip');
document.querySelector('.js-option-practice-thi-thien-button').onclick = () => startPractice('Thi Thien');

// Practice
function startPractice(name) {
  let verseName;
  let verseData;

  if (name === 'Phi Lip') {
    verseName = data.phiLipVerses.nameModel;
    verseData = data.phiLipVerses.correctAnswers;
  } else if (name === 'Thi Thien') {
    verseName = data.thiThienVerses.nameModel;
    verseData = data.thiThienVerses.correctAnswers;
  } else {
    throw new Error("Name model is error");
  }

  const verseModel = 'practice';

  const userChoice = {
    name: verseName,
    model: verseModel,
    data: verseData
  };

  localStorage.setItem('currentTest', JSON.stringify(userChoice));

  window.location.href = '../testPage.html';

};



