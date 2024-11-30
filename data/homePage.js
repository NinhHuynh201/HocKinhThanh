import { tests } from "./testVerses.js";

console.log('home page');

const phiLipButton = document.querySelector('.js-option-phi-lip-button');
const luyenTapButton = document.querySelector('.js-option-practice-button');

phiLipButton.addEventListener('click',() => {
  
  const verseName = tests.phiLipVerses.nameModel;
  const verseModel = 'Testing';
  const verseData = {
    name: verseName,
    model: verseModel
  };
  
  localStorage.setItem('currentTest', JSON.stringify(verseData));
  
  window.location.href = '../testPage.html';
  
});
  

luyenTapButton.addEventListener('click',() => {
  currentTest = 'LT: '+ tests.phiLipVerses.nameModel;
  console.log(currentTest);
  window.location.href = '../testPage.html';
  
});



