// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navToggle = document.getElementsByClassName("nav-toggle")[0];
const links = document.getElementsByClassName("links")[0];

navToggle.addEventListener("click", function () {
  links.classList.toggle("show-links");
});
