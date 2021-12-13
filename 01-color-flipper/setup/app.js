const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById("btn");
const colorEl = document.getElementsByClassName("color")[0];
const body = document.getElementsByTagName("body")[0];

function randomInteger(n) {
  return Math.floor(Math.random() * (n + 1));
}

function randomColorGenerator() {
  return colors[randomInteger(colors.length - 1)];
}

function updateColor() {
  const randomColor = randomColorGenerator();
  colorEl.textContent = randomColor;
  body.style.backgroundColor = randomColor;
  return;
}

btn.addEventListener("click", updateColor);
