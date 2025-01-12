const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener('click', () => {
  document.body.classList.toggle("show-mobile-menu");
});

menuCloseButton.addEventListener('click', () => {
  document.body.classList.toggle("show-mobile-menu");
});


// initializeSwiper

const swiper = new Swiper('.slider-wrapper', {
  loop: true,
  grabCurser: true,
  spaceBetween: 30,


  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    0: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    }
  }
});