/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
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
};
