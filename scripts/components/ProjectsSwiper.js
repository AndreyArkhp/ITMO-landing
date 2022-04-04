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
            loopedSlides: 1,
            // nested: true,
            speed: 400,
            spaceBetween: 8,
            slidesPerView: 2,
            slidesPerGroup: 1,
            effect: "slide",
            watchOverflow: true,
            pagination: {
                el: ".projects__pagination",
                clickable: true,
            },
            navigation: {
                nextEl: '.projects__button-next',
                prevEl: '.projects__button-prev',
              },
              breakpoints: {
                480: { 
                    spaceBetween: 8, 
                    // slidesPerView: 3,
                }
                // 900: { slidesPerView: 3 },
              },
        });
    }
}