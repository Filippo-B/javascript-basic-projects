// ****** SELECT ITEMS **********
const submitBtn = document.getElementsByClassName("submit-btn")[0];
const deleteBtn = () => document.querySelectorAll(".delete-btn");
const alert = document.getElementsByClassName("alert")[0];
const grocery = () => document.getElementById("grocery").value;
const groceryList = document.getElementsByClassName("grocery-list")[0];
const groceryContainer = document.getElementsByClassName("grocery-container")[0];
const groceryArr = [];
// edit option

// ****** EVENT LISTENERS **********
submitBtn.addEventListener("click", function (e) {
  e.preventDefault();

  // if grocery is not empty
  if (grocery() !== "") {
    showAlert("addItem");
    addGroceryItem(grocery());
  } else {
    showAlert("empty");
  }
  containerVisibility();

  deleteBtn().forEach((deleteButton) => {
    deleteButton.addEventListener("click", function () {
      showAlert("removeItem");
    });
  });
});

// ****** FUNCTIONS **********
function resetAlert() {
  alert.classList.remove("alert-danger", "alert-success");
  alert.innerText = "";
}
function alertContent(className, text) {
  if (alert.classList.contains("alert-danger") || alert.classList.contains("alert-success")) {
    resetAlert();
  }
  alert.classList.add(className);
  alert.innerText = text;

  const timeout = setTimeout(function () {
    resetAlert();
  }, 2000);
}

function showAlert(action) {
  if (action === "addItem") {
    alertContent("alert-success", "Item added to the list");
  } else if (action === "removeItem") {
    alertContent("alert-danger", "Item removed from the list");
  } else if (action === "empty") {
    alertContent("alert-danger", "The field is empty!");
  }
}

function containerVisibility() {
  if (groceryArr.length > 0) {
    groceryContainer.classList.add("show-container");
  } else {
    groceryContainer.classList.remove("show-container");
  }
}

function addGroceryItem(itemName) {
  const item = `<article class="grocery-item">
              <p class="title">${itemName}</p>
              <div class="btn-container">
                <button type="button" class="edit-btn">
                  <i class="fas fa-edit"></i>
                </button>
                <button type="button" class="delete-btn">
                  <i class="fas fa-trash"></i>
                </button>
              </div>
            </article>`;
  groceryArr.push(item);
  groceryList.innerHTML = groceryArr.join("");
}

// ****** LOCAL STORAGE **********

// ****** SETUP ITEMS **********
