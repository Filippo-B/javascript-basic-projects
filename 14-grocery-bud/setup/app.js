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
const currentGroceryItemId = (el) => el.closest(".grocery-item").dataset.item;
const clearBtn = document.getElementsByClassName("clear-btn")[0];
const alertMessage = document.getElementsByClassName("alert")[0];

/* ============================================ */
/* ··········································· § LOCALSTORAGE ··· */
/* ======================================== */

// Copy the array arr into localStorage
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

function checkLocalStorage(element) {
  if (localGroceryList()) {
    const localArr = JSON.parse(localGroceryList());
    return localArr.findIndex((el) => el === element);
  } else {
    return -1;
  }
}

/* ============================================ */
/* ··········································· § EVENT LISTENERS ··· */
/* ======================================== */

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();

  if (currentInputValue() === "") {
    alert("alert-danger", "The field is Empty");
  } else if (checkLocalStorage(currentInputValue()) >= 0) {
    alert("alert-danger", "There is already an item with this name");
  } else {
    if (submitBtn.dataset.action === "submit") {
      addToLocalStorage(currentInputValue());
      update();
      alert("alert-success", "Item added");
    }

    if (submitBtn.dataset.action === "edit") {
      const itemToEdit = groceryList.querySelector('[data-edit="true"]');
      const itemToEditId = currentGroceryItemId(itemToEdit);
      editLocalStorage(itemToEditId, currentInputValue());
      itemToEdit.removeAttribute("data-edit");
      submitBtn.textContent = "Submit";
      submitBtn.setAttribute("data-action", "submit");
      update();
      alert("alert-success", "Item edited");
    }
  }

  input.value = "";
});

// eventListeners for delete and edit buttons.
function groceryItemsEventListeners() {
  for (deleteBtn of Array.from(deleteBtns)) {
    deleteBtn.addEventListener("click", function () {
      removeFromLocalStorage(currentGroceryItemId(this));
      update();
      alert("alert-danger", "Idem deleted");
    });
  }

  for (editBtn of Array.from(editBtns)) {
    editBtn.addEventListener("click", function () {
      input.value = currentGroceryItemId(this);
      input.focus();
      submitBtn.textContent = "Edit";
      // This attribute is used to change the behavior and aspect of the button, see the eventListener of the button
      submitBtn.setAttribute("data-action", "edit");
      // This attribute is used to target the element to edit when you press the edit button, see the eventListener of the button
      this.setAttribute("data-edit", "true");
    });
  }
}

clearBtn.addEventListener("click", function (e) {
  e.preventDefault();
  window.localStorage.clear();
  update();
  alert("alert-danger", "List cleared");
});

/* ============================================ */
/* ··········································· § OUTPUT ··· */
/* ======================================== */
// the HTML output for a single list item.
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
/* ··········································· § ALERTS ··· */
/* ======================================== */
function alert(alertClass, message) {
  // it's necessary to declare the variable here
  let alertTimeOut;

  // if a message is already visible, clear its interval
  clearTimeout(alertTimeOut);

  // remove the classes. Useful when a new message it's triggered when there is already a message
  alertMessage.classList.remove("alert-success", "alert-danger");

  // the core actions that build the message
  alertMessage.classList.add(alertClass);
  alertMessage.textContent = message;

  // hide the message
  alertTimeOut = setTimeout(function () {
    alertMessage.classList.remove("alert-success", "alert-danger");
    alertMessage.textContent = "";
  }, 2000);
}

/* ============================================ */
/* ··········································· § UPDATE ··· */
/* ======================================== */
// if there is something in the grocery list, display the container, ontherwise hide it
function displayGroceryContainer() {
  if (localGroceryList()) {
    if (localGroceryList() !== "[]") {
      groceryContainer.classList.add("show-container");
    } else {
      groceryContainer.classList.remove("show-container");
    }
  } else {
    groceryContainer.classList.remove("show-container");
  }
}

// Update the grocery list generating the items based on the localstorage array
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

// If there is something in the localstorage, update the list
if (localGroceryList()) {
  update();
}
