import Swiper from 'https://unpkg.com/swiper@8/swiper-bundle.esm.browser.min.js';

const mobileBreakpoint = window.matchMedia("(min-width: 320px)");
const tabletBreakpoint = window.matchMedia("(min-width: 768px)");
const desktopBreakpoint = window.matchMedia("(min-width: 1440px)");
let desktopSwiper = undefined;
let tabletSwiper = undefined;
let mobileSwiper = undefined;

const initMobileSwiper = () => {
  return new Swiper('.about__swiper', {
    loop: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    spaceBetween: 10,
    loopedSlides: 10,
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
      dynamicMainBullets: 1,
      clickable: true,
    },
  });
}

const initTabletSwiper = () => {
  return new Swiper('.about__swiper', {
    loop: false,
    centeredSlides: false,
    slidesPerView: 'auto',
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
      dynamicMainBullets: 1,
      clickable: true,
    },
  });
}

const initDesktopSwiper = () => {
  return new Swiper('.about__swiper', {
    loop: false,
    slidesPerView: 'auto',
    spaceBetween: 32,
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
      dynamicMainBullets: 1,
      clickable: true,
    },
    navigation: {
      prevEl: ".about__swiper-button_type_back",
      nextEl: ".about__swiper-button_type_forward",
    }
  })
}

const handleBreakpoints = () => {
  if(desktopBreakpoint.matches) {
    tabletSwiper && tabletSwiper.destroy(true, true);
    mobileSwiper && mobileSwiper.destroy(true, true);
    if(!desktopSwiper || desktopSwiper.destroyed) {
      desktopSwiper = initDesktopSwiper();
      desktopSwiper.pagination.update();
    }
  } else if(tabletBreakpoint.matches) {
    desktopSwiper && desktopSwiper.destroy(true, true);
    mobileSwiper && mobileSwiper.destroy(true, true);
    if(!tabletSwiper || tabletSwiper.destroyed) {
      tabletSwiper = initTabletSwiper();
      tabletSwiper.pagination.update();
    }
  } else {
    desktopSwiper && desktopSwiper.destroy(true, true);
    tabletSwiper && tabletSwiper.destroy(true, true);
    if(!mobileSwiper || mobileSwiper.destroyed) {
      mobileSwiper = initMobileSwiper();
      mobileSwiper.pagination.update();
    }
  }
}

const setEventListeners = () => {
  mobileBreakpoint.addEventListener("change", handleBreakpoints);
  tabletBreakpoint.addEventListener("change", handleBreakpoints);
  desktopBreakpoint.addEventListener("change", handleBreakpoints);
}

export const initAboutSwiper = () => {
  setEventListeners();
  handleBreakpoints();
}
//export default aboutSwiper;