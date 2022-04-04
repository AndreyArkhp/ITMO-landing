import Swiper from 'https://unpkg.com/swiper@8/swiper-bundle.esm.browser.min.js';

const aboutSwiper = new Swiper('.about__swiper', {
  loop: false,
  centeredSlides: true,
  speed: 400,
  spaceBetween: 10,
  enabled: true,
  init: true,
  wrapperClass: 'swiper-wrapper',
  breakpoints: {
    320: {
      slidesPerView: 1.1,
      spaceBetween: 10,
      initialSlide: 2,
    },
    720: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 32
    },
  },
  
  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
    dynamicMainBullets: 1,
    clickable: true
  },
  
});
export default aboutSwiper;