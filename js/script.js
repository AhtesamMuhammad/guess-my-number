"use strict";

const numberEl = document.querySelector(".number");
const checkEl = document.querySelector(".check");
const messageEl = document.querySelector(".message");
const scoreEl = document.querySelector(".score");
const highscoreEl = document.querySelector(".highscore");
const body = document.querySelector("body");

const genereteRandomNumber = () => {
  return Math.trunc(Math.random() * 20) + 1;
};
let number = genereteRandomNumber();
console.log("number to guess:", number);

let score = 19;
let highscore = 0;

function manageTry(actualScore, message) {
  if (actualScore >= 1) {
    actualScore--;
    scoreEl.textContent = score;
    messageEl.textContent = message;
  } else {
    messageEl.textContent = "😓 You lost the game!";
    scoreEl.textContent = 0;
  }
  return actualScore;
}

function compareNumbers(number, input) {
  if (!input) messageEl.textContent = "⛔ No number!";
  else if (number > input) score = manageTry(score, "🙂‍↔️ Too low");
  else if (number < input) score = manageTry(score, "🥶 Too high");
  else {
    numberEl.textContent = number;
    messageEl.textContent = "🎊 Bingo! 🎊";
    body.style.backgroundColor = "#4d7c0f";
  }
}

checkEl.addEventListener("click", function () {
  const guessEl = Number(document.querySelector(".guess").value);

  compareNumbers(number, guessEl);
});
