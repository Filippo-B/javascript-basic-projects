/* ============================================ */
/* ··········································· § DOM ELEMENTS ··· */
/* ======================================== */
const submitBtn = document.getElementsByClassName("submit-btn")[0];
const input = document.getElementById("grocery");
const groceryContainer = document.getElementsByClassName("grocery-container")[0];
const groceryList = document.querySelector(".grocery-list");
const deleteBtns = () => document.querySelectorAll(".delete-btn");

/**
 * iterare gli elementi dell'array
 * creare un list item per ogni elemento
 * aggiungere un eventlistener ai tasti edit e delete di tutti i list item
 * La funzione dovrebbe partire ogni volta che l'array cambia
 */

/* ============================================ */
/* ··········································· § DATA ··· */
/* ======================================== */
const inputCurrentValue = () => new String(input.value).replace(/<.*?>/g, "&lt;");
const groceryListArr = [];

/* ============================================ */
/* ··········································· § GROCERY LIST ··· */
/* ======================================== */
function listItem(item) {
  return `<article class="grocery-item" data-item="${item}">
          <p class="title">${item}</p>
          <div class="btn-container">
            <button type="button" class="edit-btn">
              <i class="fas fa-edit"></i>
            </button>
            <button type="button" class="delete-btn">
              <i class="fas fa-trash"></i>
            </button>
          </div>
        </article>`;
}
function groceryListOutput() {
  groceryList.innerHTML = "";
  for (let groceryItem of groceryListArr) {
    groceryList.insertAdjacentHTML("beforeend", listItem(groceryItem));
  }
}

/* =================================== § CHECK VISIBILITY CONTAINER === */
function groceryContainerVisibility() {
  if (groceryListArr.length > 0) {
    groceryContainer.classList.add("show-container");
  } else {
    groceryContainer.classList.remove("show-container");
  }
}

function listItemsEventListeners() {
  deleteBtns().forEach((deleteBtn) => {
    deleteBtn.addEventListener("click", function () {
      thisId = deleteBtn.closest(".grocery-item").getAttribute("data-item");
      thisIndex = groceryListArr.findIndex((el) => el === thisId);
      groceryListArr.splice(thisIndex, 1);
      update();
    });
  });
}

function update() {
  groceryContainerVisibility();
  groceryListOutput();
  listItemsEventListeners();
}

/* ============================================ */
/* ··········································· § EVENT LISTENERS ··· */
/* ======================================== */
submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  groceryListArr.push(inputCurrentValue());
  update();
});
