"use strict";

const check = document.querySelector(".check");
const guessing = document.querySelector(".guess-number");
const myNumber = document.querySelector(".number");
const guess = document.querySelector(".guess");
const myBody = document.querySelector(".mybody");
const yourScores = document.querySelector(".score");
const currentHighscores = document.querySelector(".highscore");
const play = document.querySelector(".play");
let score = 20;
let highscore = 0;

const secretNumber = Math.trunc(Math.random() * 50) + 1;

function checkNumber() {
  if (!guess) {
    guessing.textContent = "⛔️ No number... !!!";
    guessing.style.color = "red";
  } else if (guess.value < secretNumber) {
    guessing.textContent = "📉 Too low... !!!";
    guessing.style.color = "brown";
    score--;
    yourScores.textContent = score;
  } else if (guess.value > secretNumber) {
    guessing.textContent = "📈 Too high... !!!";
    guessing.style.color = "brown";
    score--;
    yourScores.textContent = score;
  } else if (guess.value == secretNumber) {
    guessing.textContent = "🎉 Correct number !!!";
    myBody.style.backgroundColor = "green";
    guessing.style.color = "pink";
    myNumber.textContent = secretNumber;
    if (score >= currentHighscores) {
      currentHighscores.textContent = score;
    }
  } else if ((yourScores = 0)) {
    guessing.textContent = "Game over !!!";
    myBody.style.backgroundColor = "red";
  }
}

function playAgain() {
  myBody.style.backgroundColor = "burlywood";
  guessing.textContent = "Start guessing... !!!";
  guessing.style.color = "darkgreen";
  guess.value = "";
  myNumber.textContent = "?";

  score = 20;
  secretNumber = Math.trunc(Math.random() * 50) + 1;
  myNumber.textContent = "?";
}

check.addEventListener("click", checkNumber);

play.addEventListener("click", playAgain);
