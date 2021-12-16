const buttons = document.querySelectorAll(".tab-btn");

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    const activeButton = document.querySelector(".tab-btn.active");
    const thisID = button.dataset.id;
    const activeContent = document.querySelector(".content.active");
    const thisContent = document.getElementById(thisID);

    [activeButton, activeContent].forEach((el) => el.classList.remove("active"));
    [button, thisContent].forEach((el) => el.classList.add("active"));
  });
});
