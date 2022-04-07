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
        this._mobileBreakpoint = window.matchMedia("(min-width: 320px)");
        this._tabletBreakpoint = window.matchMedia("(min-width: 768px)");
        this._desktopBreakpoint = window.matchMedia("(min-width: 1440px)");
    }

    _getElement() {
        const cardElement = document.querySelector(this._templateSelector).content.querySelector(".publications__item").cloneNode(true);
        return cardElement;
    }

    // Sets description element height based on number of lines in authors element.
    _setDescriptionLineHeight() {
        console.log(this._authorsElement.getBoundingClientRect());
        this._descriptionElement.removeAttribute("style");
        if(this._desktopBreakpoint.matches) {
            if(this._authorsElement.offsetHeight > 19) {
                this._descriptionElement.setAttribute("style", `-webkit-line-clamp: 7`);
            }else {
                this._descriptionElement.setAttribute("style", `-webkit-line-clamp: 8`);
            }
        } else if(this._tabletBreakpoint.matches) {
            if(this._authorsElement.offsetHeight > 19) {
                this._descriptionElement.setAttribute("style", `-webkit-line-clamp: 7`);
            } else {
                this._descriptionElement.setAttribute("style", `-webkit-line-clamp: 8`);
            }
        } else {
            if(this._authorsElement.offsetHeight > 16) {
                this._descriptionElement.setAttribute("style", `-webkit-line-clamp: 8`);
            } else {
                this._descriptionElement.setAttribute("style", `-webkit-line-clamp: 9`);
            }
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
        this._mobileBreakpoint.addEventListener("change", () => this._setDescriptionLineHeight());
        this._desktopBreakpoint.addEventListener("change", () => this._setDescriptionLineHeight());
        this._tabletBreakpoint.addEventListener("change", () => this._setDescriptionLineHeight());
        this._element.addEventListener("render", () => this._setDescriptionLineHeight());
    }


}