"use strict";

const secretNumberEl = document.querySelector(".number");

const messageEl = document.querySelector(".message");
const scoreEl = document.querySelector(".score");
const highscoreEl = document.querySelector(".hightscore");
const body = document.querySelector("body");

const checkEl = document.querySelector(".check");
const againEl = document.querySelector(".again");

const genereteRandomNumber = () => Math.trunc(Math.random() * 20) + 1;

let score = 20;

let number = genereteRandomNumber();
console.log("number to guess:", number);

checkEl.addEventListener("click", function () {
  const guessEl = Number(document.querySelector(".guess").value);

  compareNumbers(number, guessEl);
});

againEl.addEventListener("click", function () {
  score = 20;
  scoreEl.textContent = score;
  messageEl.textContent = "Start guessing...";
  document.querySelector(".guess").value = "0";
  number = genereteRandomNumber();
  console.log("new number to guess:", number);
  secretNumberEl.textContent = "?";
  body.style.backgroundColor = "#222";
});

function manageTry(message) {
  if (score >= 1) {
    score--;
    scoreEl.textContent = score;
    messageEl.textContent = message;
  } else {
    messageEl.textContent = "😓 You lost the game!";
    scoreEl.textContent = 0;
  }
}

function compareNumbers(number, input) {
  if (input) {
    number > input ? manageTry("🙂‍↔️ Too low") : manageTry("🥶 Too high");
    if (number === input) {
      secretNumberEl.textContent = number;
      messageEl.textContent = "🎊 Bingo! 🎊";
      body.style.backgroundColor = "#4d7c0f";
      hightScore();
    }
  } else messageEl.textContent = "⛔ No number!";
}

function hightScore() {
  let hightScore = highscoreEl.textContent;
  if (score > hightScore) {
    highscoreEl.textContent = scoreEl.textContent;
  }
}
