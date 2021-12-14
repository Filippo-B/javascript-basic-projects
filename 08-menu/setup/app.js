const btnContainer = document.querySelector(".btn-container");
const sectionCenter = document.querySelector(".section-center");

async function getDishes() {
  const response = await fetch("./dishes.json");
  const dishes = await response.json();
  return dishes;
}

getDishes().then((dishes) => {
  // populate category list
  let categories = new Set();
  categories.add(`<button type="button" class="filter-btn" data-id="all">all</button>`);
  for (dish of dishes) {
    categories.add(`<button type="button" class="filter-btn" data-id="${dish.category}">${dish.category}</button>`);
  }

  btnContainer.innerHTML = Array.from(categories).join("");

  // create menu items
  function displayDishes(category = "all") {
    menuItems = [];

    // Menu item syntax
    function createMenuItem() {
      let menuDish = ` <!-- single item -->
      <article class="menu-item">
        <img src="${dish.img}" alt="${dish.title}" class="photo" />
        <div class="item-info">
          <header>
            <h4>${dish.title}</h4>
            <h4 class="price">$${dish.price}</h4>
          </header>
          <p class="item-text">${dish.desc}</p>
        </div>
      </article>
      <!-- end of single item -->`;
      menuItems.push(menuDish);
    }

    for (dish of dishes) {
      if (dish.category === category && category !== "all") {
        createMenuItem();
      } else if (category === "all") {
        createMenuItem();
      }
    }
    sectionCenter.innerHTML = menuItems.join("");
  }

  displayDishes("all");

  // filter functionality
  const filterBtn = document.querySelectorAll(".filter-btn");

  filterBtn.forEach((item) => {
    item.addEventListener("click", function () {
      displayDishes(item.getAttribute("data-id"));
    });
  });
});
