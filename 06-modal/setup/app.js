// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay

const modalBtn = document.getElementsByClassName("modal-btn")[0];
const modalOverlay = document.getElementsByClassName("modal-overlay")[0];
const closeBtn = document.getElementsByClassName("close-btn")[0];

modalBtn.addEventListener("click", function () {
  modalOverlay.classList.add("open-modal");
});

closeBtn.addEventListener("click", function () {
  modalOverlay.classList.remove("open-modal");
});
