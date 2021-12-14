//using selectors inside the element
// traversing the dom

const questionBtn = document.getElementsByClassName("question-btn");
const question = document.getElementsByClassName("question");

Array.from(questionBtn).forEach((el) => {
  const closestQuestion = el.closest(".question");
  const removeShowText = () => Array.from(question).forEach((el) => el.classList.remove("show-text"));

  el.addEventListener("click", function () {
    if (!closestQuestion.classList.contains("show-text")) {
      removeShowText();
      closestQuestion.classList.add("show-text");
    } else {
      removeShowText();
    }
  });
});
