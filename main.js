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

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  hashNavigation: {
      watchState: true,
  },
  pagination: {
      el: ".swiper-pagination",
      clickable: true,
  },
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
});