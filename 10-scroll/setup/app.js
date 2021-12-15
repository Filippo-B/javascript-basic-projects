// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

const dateEl = document.getElementById("date");
const navEl = document.getElementById("nav");
const navToggle = document.querySelector(".nav-toggle");
const desktopNavHeight = navEl.getBoundingClientRect().height;
const linksContainer = document.querySelector(".links-container");
const scrollLinks = document.querySelectorAll(".scroll-link");

// ********** set date ************
dateEl.innerText = new Date().getFullYear();

// ********** close links ************
navToggle.addEventListener("click", function () {
  linksContainer.classList.toggle("show-menu");
});
// ********** fixed navbar ************
window.addEventListener("scroll", function () {
  if (window.scrollY > desktopNavHeight) {
    navEl.classList.add("fixed-nav");
  } else {
    navEl.classList.remove("fixed-nav");
  }
});

// ********** smooth scroll ************
// select links
scrollLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetID = e.target.getAttribute("href");
    const targetElement = document.querySelector(targetID);
    const targetElementY = targetElement.getBoundingClientRect().y;
    window.scrollBy({
      top: targetElementY - desktopNavHeight - 20,
    });
    console.log(targetElementY - desktopNavHeight);
  });
});
