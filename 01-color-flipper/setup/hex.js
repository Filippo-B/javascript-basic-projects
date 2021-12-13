const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const colorEl = document.getElementsByClassName("color")[0];
const body = document.getElementsByTagName("body")[0];

let hexColor = "#";

function randomInteger(min, max) {
  return Math.floor(Math.random() * max + min);
}

function randomHexCharacter() {
  return hex[randomInteger(0, hex.length)];
}

function hexGenerator() {
  hexColor = "#";
  for (let i = 1; i <= 6; i++) {
    hexColor += randomHexCharacter().toString();
  }
}

function updateColor() {
  hexGenerator();
  colorEl.textContent = hexColor;
  body.style.backgroundColor = hexColor;
}

btn.addEventListener("click", updateColor);
