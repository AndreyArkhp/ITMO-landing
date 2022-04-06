import Swiper from "https://unpkg.com/swiper@8/swiper-bundle.esm.browser.min.js";

export default class ProjectsSwiper {
  constructor({ cardDataProjects, swiperSelector, wrapperSelector, templateSelector, renderer }) {
    this._cardData = cardDataProjects;
    this._swiperSelector = swiperSelector;
    this._wrapperSelector = wrapperSelector;
    this._templateSelector = templateSelector;
    this._wrapperElement = document.querySelector(wrapperSelector);
    this._renderer = renderer;
  }

  renderItems(filter) {
    this._wrapperElement.innerHTML = "";
    this._cardData.forEach((card) => {
      if ((filter === "all") || card.filter.indexOf(filter) != -1) {
        const cardElement = this._renderer(card, this._templateSelector);
        this._wrapperElement.append(cardElement);
      }
    });
  }
  del() {
    this.swiper.destroy(true, true);
  }
  initSwiper = () => {
    this.swiper = new Swiper(this._swiperSelector, {
      speed: 400,
      spaceBetween: 8,
      slidesPerView: 2,
      slidesPerGroup: 1,
      effect: "slide",
      pagination: {
        el: ".projects__pagination",
        clickable: true,
        type: "fraction",
      },
      navigation: {
        nextEl: ".projects__button-next",
        prevEl: ".projects__button-prev",
      },
      breakpoints: {
        319: {
          spaceBetween: 8,
          slidesPerView: 2,
        },
      },
      breakpoints: {
        768: {
          spaceBetween: 30,
          slidesPerView: 3,
        },
      },
    });
  }
}
