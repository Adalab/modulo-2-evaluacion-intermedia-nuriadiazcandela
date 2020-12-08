'use strict';

const number = document.querySelector('.js-numberbox');
const clue = document.querySelector('.js-clue');
const attempts = document.querySelector('.js-attempts');
const button = document.querySelector('.js-btn');
const counter = document.querySelector('.js-attempts');

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

const result = getRandomNumber(100);
console.log(`Mi número aleatorio es `, result);

function getNumber() {
  const numberChoise = parseInt(number.value);
  console.log(`El número que he elegido es `, numberChoise);

  if (numberChoise < 0 || numberChoise > 100) {
    clue.innerHTML = `El número debe estar entre 1 y 100`;
  } else if (numberChoise < result) {
    clue.innerHTML = `Demasiado bajo`;
  } else if (numberChoise > result) {
    clue.innerHTML = `Demasiado alto`;
  } else {
    clue.innerHTML = `Has ganado campeona!!`;
  }
  counterAttemps();
}
let counterClick = 0;

function counterAttemps() {
  counterClick++;
  counter.innerHTML = `Numero de intentos: ` + counterClick;
}

button.addEventListener('click', getNumber);
