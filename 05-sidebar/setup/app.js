const sidebarToggle = document.getElementsByClassName("sidebar-toggle")[0];
const sidebar = document.getElementsByClassName("sidebar")[0];
const closeBtn = document.getElementsByClassName("close-btn")[0];

sidebarToggle.addEventListener("click", function () {
  sidebar.classList.toggle("show-sidebar");
});

closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});
