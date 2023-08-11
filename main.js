//ANIMATE NAVBAR -- BUTTON MENU
const menu = document.querySelector(".menu");
const btnMenu = document.querySelector(".btn__menu");
const btnClose = document.querySelector(".btn__close");

btnMenu.addEventListener("click", function () {
  menu.classList.toggle("menu--active");
});

btnClose.addEventListener("click", function () {
  menu.classList.remove("menu--active");
});

