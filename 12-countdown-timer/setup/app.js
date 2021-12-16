/* =================================== § DOM ELEMENTS === */
/* ····················· § COUNTDOWN ··· */
const daysEl = document.getElementsByClassName("days")[0];
const hoursEl = document.getElementsByClassName("hours")[0];
const minutesEl = document.getElementsByClassName("minutes")[0];
const secondsEl = document.getElementsByClassName("seconds")[0];

/* ····················· § TIME ··· */
const deadLine = new Date("November 4, 2022 15:33:20");
const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

/* =================================== § COUNTDOWN FUNCTION === */

function updateCountdown() {
  const now = new Date();
  const timeDifferenceMs = new Date(deadLine - now);

  if (timeDifferenceMs > 0) {
    const daysDifference = Math.floor(timeDifferenceMs / day);
    const hoursDifference = Math.floor((timeDifferenceMs % day) / hour);
    const minutesDifference = Math.floor((timeDifferenceMs % hour) / minute);
    const secondsDifference = Math.floor((timeDifferenceMs % minute) / second);

    daysEl.textContent = daysDifference;
    hoursEl.textContent = hoursDifference;
    minutesEl.textContent = minutesDifference;
    secondsEl.textContent = secondsDifference;
  } else {
    daysEl.textContent = 00;
    hoursEl.textContent = 00;
    minutesEl.textContent = 00;
    secondsEl.textContent = 00;
    clearInterval(countdown);
  }
}

const countdown = setInterval(updateCountdown, 1000);

/* =================================== § DEADLINE TEXT === */
const deadLineText = document.querySelector(".giveaway span");

deadLineText.textContent = deadLine.toLocaleDateString("en-us", {
  weekday: "long",
  month: "long",
  year: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
});

// const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
