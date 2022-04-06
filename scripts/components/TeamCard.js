export default class TeamCard {
    constructor({ data, templateSelector }) {
      this._data = data;
      this._templateSelector = templateSelector;
      this._element = this._getElement();
      this._imageElement = this._element.querySelector(".team-card__image");
      this._FIO = this._element.querySelector(
        ".team-card__FIO"
      );
      this._post = this._element.querySelector(
        ".team-card__post"
      );
    }
  
    _getElement() {
      const cardElement = document
        .querySelector(this._templateSelector)
        .content.querySelector(".team-card")
        .cloneNode(true);
      return cardElement;
    }
  
    generate() {
      this._imageElement.src = this._data.image;
      this._FIO.textContent = this._data.fio;
      this._post.textContent = this._data.post;
      return this._element;
    }
  }
