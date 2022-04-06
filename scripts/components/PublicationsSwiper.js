import Swiper from 'https://unpkg.com/swiper@8/swiper-bundle.esm.browser.min.js';

export default class PublicationsSwiper {
    constructor({cardData, swiperSelector, wrapperSelector, renderer}) {
        this._cardData = cardData;
        this._swiperSelector = swiperSelector;
        this._wrapperSelector = wrapperSelector;
        this._wrapperElement = document.querySelector(wrapperSelector);
        this._renderer = renderer;
        this._mobileBreakpoint = window.matchMedia("(min-width: 320px)");
        this._tabletBreakpoint = window.matchMedia("(min-width: 768px)");
        this._desktopBreakpoint = window.matchMedia("(min-width: 1440px)");
    }

    renderItems() {
        console.log(this._wrapperSelector);
        this._cardData.forEach(card => {
            const cardElement = this._renderer(card);
            this._wrapperElement.append(cardElement);
        });
    }

    _initMobileSwiper() {
        return new Swiper(this._swiperSelector, {
            loop: true,
            loopedSlides: this._cardData.length,
            slidesPerView: "auto",
            centeredSlides: true,
            spaceBetween: 8,
            pagination: {
                el: ".publications__pagination",
                clickable: true,
                dynamicBullets: true,
                dynamicMainBullets: 1,
            }
        });
    }

    _initTabletSwiper() {
        return new Swiper(this._swiperSelector, {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 30,
            rewind: true,
            grid: {
                fill: 'row',
                rows: 2,
            },
            pagination: {
                el: ".publications__pagination",
                clickable: true,
                dynamicBullets: true,
                dynamicMainBullets: 1,
            },
        });
    }

    _initDesktopSwiper() {
        return new Swiper(this._swiperSelector, {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 33,
            rewind: true,
            grid: {
                fill: 'row',
                rows: 2,
            },
            pagination: {
                el: ".publications__pagination",
                clickable: true,
                dynamicBullets: true,
                dynamicMainBullets: 1,
            },
            navigation: {
                prevEl: ".publications__swiper-button_type_back",
                nextEl: ".publications__swiper-button_type_next",
            }
        });
    }

    _handleBreakpoints() {
        if(this._desktopBreakpoint.matches) {
            this._tabletSwiper.destroy(true, true);
            this._mobileSwiper.destroy(true, true);
            if(this._desktopSwiper.destroyed) {
                this._desktopSwiper = this._initDesktopSwiper();
            }
        } else if(this._tabletBreakpoint.matches) {
            this._desktopSwiper.destroy(true, true);
            this._mobileSwiper.destroy(true, true);
            if(this._tabletSwiper.destroyed) {
                this._tabletSwiper = this._initTabletSwiper();
            }
        } else {
            this._desktopSwiper.destroy(true, true);
            this._tabletSwiper.destroy(true, true);
            if(this._mobileSwiper.destroyed) {
                this._mobileSwiper = this._initMobileSwiper();
            }
        }
    }


    _setEventListeners() {
        this._mobileBreakpoint.addEventListener("change", () => this._handleBreakpoints());
        this._tabletBreakpoint.addEventListener("change", () => this._handleBreakpoints());
        this._desktopBreakpoint.addEventListener("change", () => this._handleBreakpoints());
    }

    initSwiper() {
        this._mobileSwiper = this._initMobileSwiper();
        this._mobileSwiper.destroy(true, true);
        this._tabletSwiper = this._initTabletSwiper();
        this._tabletSwiper.destroy(true, true);
        this._desktopSwiper = this._initDesktopSwiper();
        this._desktopSwiper.destroy(true, true);
        this._setEventListeners();
        this._handleBreakpoints();
    }
}