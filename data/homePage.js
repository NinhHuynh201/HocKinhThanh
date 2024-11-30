import { tests } from "./testVerses.js";

console.log('home page');

document.querySelector('.js-option-phi-lip-button').addEventListener('click',() => {
  
  const verseName = tests.phiLipVerses.nameModel;
  const verseModel = 'Testing';
  const verseData = {
    name: verseName,
    model: verseModel
  };
  
  localStorage.setItem('currentTest', JSON.stringify(verseData));
  
  window.location.href = '../testPage.html';
  
});
  
document.querySelector('.js-option-practice-button').addEventListener('click',() => {
  currentTest = 'LT: '+ tests.phiLipVerses.nameModel;
  console.log(currentTest);
  window.location.href = '../testPage.html';
  
});



