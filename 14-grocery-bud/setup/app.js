/* ============================================ */
/* ··········································· § DOM ELEMENTS ··· */
/* ======================================== */
const submitBtn = document.getElementsByClassName("submit-btn")[0];
const input = document.getElementById("grocery");
const groceryContainer = document.getElementsByClassName("grocery-container")[0];
const groceryList = document.querySelector(".grocery-list");
const clearBtn = document.getElementsByClassName("clear-btn")[0];
const deleteBtns = () => document.querySelectorAll(".delete-btn");
const editBtns = () => document.querySelectorAll(".edit-btn");

/**
 * iterare gli elementi dell'array
 * creare un list item per ogni elemento
 * aggiungere un eventlistener ai tasti edit e delete di tutti i list item
 * La funzione dovrebbe partire ogni volta che l'array cambia
 */

/* ============================================ */
/* ··········································· § DATA ··· */
/* ======================================== */

const inputCurrentValue = () => new String(input.value).replace(/<(.*?)>/g, "&lt;$1&gt;").trim();
const groceryListArr = [];

function thisId(listItem) {
  return listItem.closest(".grocery-item").getAttribute("data-item");
}

/* ============================================ */
/* ··········································· § GROCERY LIST ··· */
/* ======================================== */
function clearInput() {
  input.value = "";
}
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

function deleteListItem(listItemToDelete) {
  thisIndex = groceryListArr.findIndex((el) => el === thisId(listItemToDelete));
  groceryListArr.splice(thisIndex, 1);
}

function setButtonValue(value) {
  submitBtn.textContent = value;
  submitBtn.setAttribute("data-action", value);
}

function editListItem(listItemToEdit) {
  input.focus();
  input.value = thisId(listItemToEdit);
  listItemToEdit.setAttribute("data-action", "edit");
  setButtonValue("edit");
}
/* =================================== § CHECK VISIBILITY CONTAINER === */
function groceryContainerVisibility() {
  if (groceryListArr.length > 0) {
    groceryContainer.classList.add("show-container");
  } else {
    groceryContainer.classList.remove("show-container");
  }
}

function update() {
  // check if the container of the list items should be visible
  groceryContainerVisibility();
  // output the HTML for the list based on the element present in the array
  groceryListOutput();
  // add the event listeners to the buttons of the newly created list items
  listItemsEventListeners();
  // clear input content
  clearInput();
}

/* ============================================ */
/* ··········································· § EVENT LISTENERS ··· */
/* ======================================== */
submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (submitBtn.dataset.action === "submit") {
    groceryListArr.push(inputCurrentValue());
  } else if (submitBtn.dataset.action === "edit") {
    setButtonValue("submit");
    const currentlyEditingId = thisId(document.querySelector('[data-action="edit"]'));
    const currentlyEditingIndex = groceryListArr.findIndex((el) => el === currentlyEditingId);
    console.log(currentlyEditingIndex);
    groceryListArr.splice(currentlyEditingIndex, 1, input.value);
  }
  update();
});

clearBtn.addEventListener("click", function () {
  groceryListArr.splice(0, groceryListArr.length);
  update();
});

function listItemsEventListeners() {
  deleteBtns().forEach((deleteBtn) => {
    deleteBtn.addEventListener("click", function () {
      deleteListItem(deleteBtn);
      update();
    });
  });

  editBtns().forEach((editBtn) => {
    editBtn.addEventListener("click", function () {
      editListItem(editBtn);
      // update();
    });
  });
}
