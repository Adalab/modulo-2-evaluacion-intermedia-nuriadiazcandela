"use strict";

const number = document.querySelector(".js-numberbox");
const clue = document.querySelector(".js-clue");
const attempts = document.querySelector(".js-attempts");
const button = document.querySelector(".js-btn");

const maxNumber = 100;

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

const result = getRandomNumber(maxNumber);
    console.log (`Mi número aleatorio es `, result)

function getNumber() {
    const numberChoise = number.value;
    console.log (`El número que he elegido es `, numberChoise);

    if (numberChoise < 0 || numberChoise > maxNumber){
    clue.innerHTML = `El número debe estar entre 1 y 100`;
    } else if (numberChoise < result) {
    clue.innerHTML = `Demasiado bajo`;
    }else if (numberChoise > result) {
    clue.innerHTML =`Demasiado alto`;
    } else {
    clue.innerHTML =`Has ganado campeona!!`;
    }
}


button.addEventListener('click', getNumber);

