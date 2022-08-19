// Ищем нужные элементы бургер и меню
const burger = document.querySelector('.burger')
const menu = document.querySelector('.nav-menu')
const body = document.body
// Вещаем событие на бургер и добовляем переключатель с классом active
burger.addEventListener('click', () => {
    burger.classList.toggle('active')
    menu.classList.toggle('active')
    body.classList.toggle('stopscroll')
})
// При нажатии на сылку из меню удаляем класс active
document.querySelectorAll('.nav-menu').forEach(n => n.addEventListener('click', () => {
    burger.classList.remove('active')
    menu.classList.remove('active')
    body.classList.remove('stopscroll')
}))




// slider
new Swiper(".packeges-content", {
    slidesPerView: 'auto',
    spaceBetween: 35,
    // loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    //   dynamicBullets: true,
    // },
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

  // slider 2
