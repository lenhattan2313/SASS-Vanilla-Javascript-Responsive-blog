// //variables
const collapse = document.querySelector(".toggle");
const navBar = document.querySelector(".nav-bar");
const navSocial = document.querySelector(".nav-social");
collapse.addEventListener("click", collapseNav);
function collapseNav() {
  navBar.classList.toggle("collapse");
}
