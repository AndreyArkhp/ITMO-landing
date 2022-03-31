import Swiper from 'https://unpkg.com/swiper@8/swiper-bundle.esm.browser.min.js';

export default class PublicationsSwiper {
    constructor({cardData, swiperSelector, wrapperSelector, renderer}) {
        this._cardData = cardData;
        this._swiperSelector = swiperSelector;
        this._wrapperSelector = wrapperSelector;
        this._wrapperElement = document.querySelector(wrapperSelector);
        this._renderer = renderer;

    }

    renderItems() {
        console.log(this._wrapperSelector);
        this._cardData.forEach(card => {
            const cardElement = this._renderer(card);
            this._wrapperElement.append(cardElement);
        });
    }

    initSwiper() {
        const swiper = new Swiper(this._swiperSelector, {
            loop: true,
            loopedSlides: this._cardData.length,
            slidesPerView: "auto",
            centeredSlides: true,
            spaceBetween: 8,
            pagination: {
                el: ".publications__pagination",
                clickable: true,
            }
        });
    }
}