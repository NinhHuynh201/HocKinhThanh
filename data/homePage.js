import { tests } from '../data/testPage.js';

console.log('home page');

export let currentTest;
export let nameModel; // Địa chỉ Kinh Thánh


  document.querySelector('.js-option-phi-lip-button').addEventListener('click', () => {
    currentTest = tests.phiLipVerses;
    nameModel = document.querySelector('.js-option-demo-button').innerText;
    window.location.href = '../testPage.html';
  });

  // document.querySelector('.js-option-demo-button').addEventListener('click', () => {
  //   window.location.href = 'testPage.html';
  //   console.log('Demo Test Run');

  //   currentTest = tests.demoVerses;
  //   nameModel = document.querySelector('.js-option-demo-button').innerText;
  //   startTest();
  // });



