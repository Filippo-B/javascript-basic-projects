const value = document.getElementById("value");
const decrease = document.getElementsByClassName("decrease")[0];
const increase = document.getElementsByClassName("increase")[0];
const reset = document.getElementsByClassName("reset")[0];

let counter = 0;

function counterColor() {
  if (counter > 0) {
    value.style.color = "green";
  } else if (counter < 0) {
    value.style.color = "red";
  } else {
    value.style.color = "";
  }
}

function updateCounter(operation) {
  if (operation === "increase") {
    counter++;
  } else if (operation === "decrease") {
    counter--;
  } else if (operation === "reset") {
    counter = 0;
  }
  value.innerText = counter;
  counterColor();
}

decrease.addEventListener("click", function () {
  updateCounter("decrease");
});

increase.addEventListener("click", function () {
  updateCounter("increase");
});

reset.addEventListener("click", function () {
  updateCounter("reset");
});
