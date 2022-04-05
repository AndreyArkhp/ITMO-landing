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
    }

    _getElement() {
        const cardElement = document.querySelector(this._templateSelector).content.querySelector(".publications__item").cloneNode(true);
        return cardElement;
    }

    generate() {
        this._imageElement.src = this._data.image;
        this._titleElement.textContent = this._data.title;
        this._imageElement.alt = `Иллюстрация публикации ${this._data.title}`;
        this._authorsElement.textContent = this._data.authors;
        this._descriptionElement.textContent = this._data.text;
        this._linkElement.href = this._data.url;
        return this._element;
    }


}