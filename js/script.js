// Ищем нужные элементы бургер и меню
const burger = document.querySelector('.burger')
const menu = document.querySelector('.nav-menu')
// Вещаем событие на бургер и добовляем переключатель с классом active
burger.addEventListener('click', () => {
    burger.classList.toggle('active')
    menu.classList.toggle('active')
})
// При нажатии на сылку из меню удаляем класс active
document.querySelectorAll('.nav-menu').forEach(n => n.addEventListener('click', () => {
    burger.classList.remove('active')
    menu.classList.remove('active')
}))




// slider
let swiper = new Swiper(".packeges-content", {
    slidesPerView: 3,
    spaceBetween: 35,
    // loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
  });