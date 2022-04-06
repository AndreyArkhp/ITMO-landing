import Swiper from "https://unpkg.com/swiper@8/swiper-bundle.esm.browser.min.js";

export default class TeamSwiper {
  constructor({ cardDataTeam, swiperSelector, wrapperSelector, templateSelector, renderer , cardPattern}) {
    this._cardData = cardDataTeam;
    this._swiperSelector = swiperSelector;
    this._wrapperSelector = wrapperSelector;
    this._templateSelector = templateSelector;
    this._wrapperElement = document.querySelector(wrapperSelector);
    this._cardPattern = cardPattern;
    this._renderer = renderer;
  }

  renderItems() {
    this._cardData.forEach((card) => {
        const cardElement = this._renderer(card, this._templateSelector, this._cardPattern);
        this._wrapperElement.append(cardElement)
    });
  }
  initSwiper = () => {
    this.swiper = new Swiper(this._swiperSelector, {
      speed: 400,
      spaceBetween: 8,
      slidesPerView: 3,
      slidesPerGroup: 1,
      effect: "slide",
    //   pagination: {
    //     el: ".projects__pagination",
    //     clickable: true,
    //     type: "fraction",
    //   },
      grid: {
        fill: 'row',
        rows: 2,
    },
    pagination: {
        el: ".team__pagination",
        clickable: true,
        dynamicBullets: true,
        dynamicMainBullets: 1,
    },
      breakpoints: {
        319: {
          spaceBetween: 8,
          slidesPerView: 3,
        },
      },
      breakpoints: {
        768: {
          spaceBetween: 30,
          slidesPerView: 4,
        },
      },
    });
  }
}
