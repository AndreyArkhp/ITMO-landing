import Swiper from 'https://unpkg.com/swiper@8/swiper-bundle.esm.browser.min.js';

export default class ProjectsSwiper {
    constructor({cardDataProjects, swiperSelector, wrapperSelector, filter, renderer}) {
        this._cardData = cardDataProjects;
        this._filter = filter;
        this._swiperSelector = swiperSelector;
        this._wrapperSelector = wrapperSelector;
        this._wrapperElement = document.querySelector(wrapperSelector);
        this._renderer = renderer;
    }
   
    renderItems() {
        this._cardData.forEach(card => {
            if (!this._filter || this._filter === card.filter) {
            const cardElement = this._renderer(card);
            this._wrapperElement.append(cardElement);
            } 
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
                el: ".projects__pagination",
                clickable: true,
            }
        });
    }
}