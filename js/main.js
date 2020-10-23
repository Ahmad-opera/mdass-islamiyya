
const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", toggleHamburger);

function toggleHamburger() {
  var navlist = document.querySelector("nav");
  if (hamburger.classList.contains("is-active")) {
    navlist.classList.replace("is--appended", "is--collapsed");
} else {
    navlist.classList.replace("is--collapsed", "is--appended");
  }
}