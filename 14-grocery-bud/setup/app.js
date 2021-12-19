/* ============================================ */
/* ··········································· § DOM ELEMENTS ··· */
/* ======================================== */
const form = document.getElementsByClassName("grocery-form")[0];
const input = document.getElementById("grocery");
const submitBtn = document.getElementsByClassName("submit-btn")[0];
const currentInputValue = () => input.value;
const localGroceryList = () => window.localStorage.groceryItems;
const groceryList = document.getElementsByClassName("grocery-list")[0];
const groceryContainer = document.getElementsByClassName("grocery-container")[0];
const editBtns = document.getElementsByClassName("edit-btn");
const deleteBtns = document.getElementsByClassName("delete-btn");
const groceryItemId = (el) => el.closest(".grocery-item").dataset.item;
const clearBtn = document.getElementsByClassName("clear-btn")[0];

/* ============================================ */
/* ··········································· § LOCALSTORAGE ··· */
/* ======================================== */

function updateLocalArr(arr) {
  window.localStorage.setItem("groceryItems", JSON.stringify(arr));
}

function addToLocalStorage(element) {
  const localArr = localGroceryList() ? JSON.parse(localGroceryList()) : [];
  localArr.push(element);
  updateLocalArr(localArr);
}

function removeFromLocalStorage(element) {
  const localArr = JSON.parse(localGroceryList());
  const elementIndex = localArr.findIndex((el) => el === element);
  localArr.splice(elementIndex, 1);
  updateLocalArr(localArr);
}

function editLocalStorage(oldElement, newElement) {
  const localArr = JSON.parse(localGroceryList());
  const oldElementIndex = localArr.findIndex((el) => el === oldElement);
  localArr.splice(oldElementIndex, 1, newElement);
  updateLocalArr(localArr);
}

/* ============================================ */
/* ··········································· § EVENT LISTENERS ··· */
/* ======================================== */

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();

  if (submitBtn.dataset.action === "submit") {
    addToLocalStorage(currentInputValue());
    update();
  }

  if (submitBtn.dataset.action === "edit") {
  }

  input.value = "";
});

function groceryItemsEventListeners() {
  for (deleteBtn of Array.from(deleteBtns)) {
    deleteBtn.addEventListener("click", function () {
      removeFromLocalStorage(groceryItemId(deleteBtn));
    });
  }

  for (editBtn of Array.from(editBtns)) {
    editBtn.addEventListener("click", function () {
      console.log("edit");
    });
  }
}

clearBtn.addEventListener("click", function (e) {
  e.preventDefault();
  window.localStorage.clear();
  update();
});

/* ============================================ */
/* ··········································· § OUTPUT ··· */
/* ======================================== */
function listOutput(item) {
  return `<article class="grocery-item" data-item=${item}>
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

/* ============================================ */
/* ··········································· § UPDATE ··· */
/* ======================================== */
function displayGroceryContainer() {
  if (localGroceryList()) {
    if (localGroceryList() !== "[]") {
      groceryContainer.classList.add("show-container");
    }
  } else {
    groceryContainer.classList.remove("show-container");
  }
}

function updateList() {
  if (localGroceryList()) {
    localGroceryArr = JSON.parse(localGroceryList());
    groceryList.innerHTML = "";
    for (let item of localGroceryArr) {
      groceryList.insertAdjacentHTML("beforeend", listOutput(item));
    }
    groceryItemsEventListeners();
  }
}

function update() {
  displayGroceryContainer();
  updateList();
}

if (localGroceryList()) {
  update();
}
