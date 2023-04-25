/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let numbers = [
  "A",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];
let suits = ["♦", "♥", "♠", "♣"];

let randomIndex = Math.floor(Math.random() * suits.length);
let randomSuit = suits[randomIndex];

document.getElementById("top-suit").innerHTML = randomSuit;
document.getElementById("bottom-suit").innerHTML = randomSuit;

if (randomSuit === "♦" || randomSuit === "♥") {
  document.getElementById("top-suit").classList.add("red");
  document.getElementById("bottom-suit").classList.add("red");
}

let randomNumberIndex = Math.floor(Math.random() * numbers.length);
document.getElementById("card-number").innerHTML = numbers[randomNumberIndex];

function generateRandomCard() {
  randomIndex = Math.floor(Math.random() * suits.length);
  randomSuit = suits[randomIndex];
  document.getElementById("top-suit").innerHTML = randomSuit;
  document.getElementById("bottom-suit").innerHTML = randomSuit;
  document.getElementById("top-suit").classList.remove("red");
  document.getElementById("bottom-suit").classList.remove("red");

  if (randomSuit === "♦" || randomSuit === "♥") {
    document.getElementById("top-suit").classList.add("red");
    document.getElementById("bottom-suit").classList.add("red");
  }

  let randomNumberIndex = Math.floor(Math.random() * numbers.length);
  document.getElementById("card-number").innerHTML = numbers[randomNumberIndex];
}

generateRandomCard();

setInterval(generateRandomCard, 10000);

const cardElement = document.getElementById("card");
const cardWidthInput = document.getElementById("card-width");
const cardHeightInput = document.getElementById("card-height");

cardWidthInput.addEventListener("input", changeCardSize);
cardHeightInput.addEventListener("input", changeCardSize);

function changeCardSize() {
  const cardElement = document.getElementById("card");
  console.log(cardHeightInput);
  if (cardHeightInput.value >= 0) {
    cardElement.style.height = cardHeightInput.value + "px";
  } else {
    cardElement.style.height = "400px";
  }
  if (cardWidthInput.value >= 0) {
    cardElement.style.width = cardWidthInput.value + "px";
  } else {
    cardElement.style.width = "300px";
  }
}
