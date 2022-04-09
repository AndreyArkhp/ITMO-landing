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
      speed: 200,
      loop: true,
      spaceBetween: 8,
      slidesPerView: 2.22,
      slidesPerGroup: 1,
      effect: "slide",
      slidesOffsetBefore: 15,
    pagination: {
        el: ".team__pagination",
        clickable: true,
        dynamicBullets: true,
        dynamicMainBullets: 1,
    },
    //   breakpoints: {
    //     319: {
    //       spaceBetween: 8,
    //       slidesPerView: 2,
    //     },
    //   },
    //   breakpoints: {
    //     768: {
    //       spaceBetween: 30,
    //       slidesPerView: 2,
    //     },
    //   },
    });
  }
}
