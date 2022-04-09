export default class PublicationsCard {
    constructor({data, templateSelector}) {
        this._data = data;
        this._templateSelector = templateSelector;
        this._element = this._getElement();
        this._imageElement = this._element.querySelector(".publications-card__image");
        this._titleElement = this._element.querySelector(".publications-card__title");
        this._authorsElement = this._element.querySelector(".publications-card__authors");
        this._descriptionElement = this._element.querySelector(".publications-card__text");
        this._linkElement = this._element.querySelector(".publications-card__link");
        this._shareButton = this._element.querySelector(".publications-card__share");
        this._mobileShareTooltip = this._element.querySelector(".publications-share");
        this._tabletShareTooltip = document.querySelector(".publications__swiper-container").querySelector(".publications__share-container");
        this._mobileBreakpoint = window.matchMedia("(min-width: 320px)");
        this._tabletBreakpoint = window.matchMedia("(min-width: 768px)");
        this._desktopBreakpoint = window.matchMedia("(min-width: 1440px)");
        this._isShareTooltipActive = false;
    }

    _getElement() {
        const cardElement = document.querySelector(this._templateSelector).content.querySelector(".publications__item").cloneNode(true);
        return cardElement;
    }

    _toggleShareTooltip() {
        this._isShareTooltipActive = !this._isShareTooltipActive;
        if(this._isShareTooltipActive) {
            this._showShareTooltip();
        } else {
            this._hideShareTooltip();
        }
    }

    _showShareTooltip() {
        if(this._desktopBreakpoint.matches) {
            this._tabletShareTooltip.classList.add("publications-share_active");
            this._mobileShareTooltip.classList.remove("publications-share_active");
            const cardNumber = this._data.index % 6;
            switch (cardNumber) {
                case 0:
                    this._tabletShareTooltip.setAttribute('style', 'top: 416px; left: 290px');
                    break;
                case 1:
                    this._tabletShareTooltip.setAttribute('style', 'top: 416px; left: 671px');
                    break;
                case 2:
                    this._tabletShareTooltip.setAttribute('style', 'top: 416px; left: 1056px');
                    break;
                case 3:
                    this._tabletShareTooltip.setAttribute('style', 'top: 997px; left: 290px');
                    break;
                case 4:
                    this._tabletShareTooltip.setAttribute('style', 'top: 997px; left: 671px');
                    break;
                case 5:
                    this._tabletShareTooltip.setAttribute('style', 'top: 997px; left: 1056px');
                    break;
            }
        }else if(this._tabletBreakpoint.matches) {
            this._tabletShareTooltip.classList.add("publications-share_active");
            this._mobileShareTooltip.classList.remove("publications-share_active");
            const cardNumber = this._data.index % 4;
            switch(cardNumber) {
                case 0:
                    this._tabletShareTooltip.setAttribute('style', 'top: 386px; left: 236px');
                    break;
                case 1:
                    this._tabletShareTooltip.setAttribute('style', 'top: 386px; left: 596px');
                    break;
                case 2:
                    this._tabletShareTooltip.setAttribute('style', 'top: 931px; left: 236px');
                    break;
                case 3:
                    this._tabletShareTooltip.setAttribute('style', 'top: 931px; left: 596px');
                    break;
            }
        }else {
            this._tabletShareTooltip.classList.remove("publications-share_active");
            this._mobileShareTooltip.classList.add("publications-share_active");
        }
    }

    _hideShareTooltip() {
        this._mobileShareTooltip.classList.remove("publications-share_active");
        this._tabletShareTooltip.classList.remove("publications-share_active");
    }

    // Sets description element height based on number of lines in authors element.
    _setDescriptionLineHeight() {
        this._descriptionElement.removeAttribute("style");
        if(this._tabletBreakpoint.matches) {
            if(this._authorsElement.offsetHeight === 19) {
                this._descriptionElement.setAttribute("style", `-webkit-line-clamp: 8`);
            } else {
                this._descriptionElement.setAttribute("style", `-webkit-line-clamp: 7`);
            }
        } else {
            if(this._authorsElement.offsetHeight === 17) {
                this._descriptionElement.setAttribute("style", `-webkit-line-clamp: 9`);
            } else {
                this._descriptionElement.setAttribute("style", `-webkit-line-clamp: 8`);
            }
        }
    }

    _handleBreakpoints() {
        this._setDescriptionLineHeight();
        if(this._isShareTooltipActive) {
            this._showShareTooltip();
        }else {
            this._hideShareTooltip();
        }
    }

    _handleRender() {
        this._setDescriptionLineHeight();
        if(this._isShareTooltipActive) {
            this._showShareTooltip();
        }else {
            this._hideShareTooltip();
        }
    }

    generate() {
        this._imageElement.src = this._data.image;
        this._titleElement.textContent = this._data.title;
        this._imageElement.alt = `Иллюстрация публикации ${this._data.title}`;
        this._authorsElement.textContent = this._data.authors;
        this._descriptionElement.textContent = this._data.text;
        this._linkElement.href = this._data.url;
        this._setEventListeners();
        return this._element;
    }

    _setEventListeners() {
        this._mobileBreakpoint.addEventListener("change", () => this._handleBreakpoints());
        this._desktopBreakpoint.addEventListener("change", () => this._handleBreakpoints());
        this._tabletBreakpoint.addEventListener("change", () => this._handleBreakpoints());
        this._shareButton.addEventListener("click", () => this._toggleShareTooltip());
        this._element.addEventListener("render", () => this._handleRender());
    }


}