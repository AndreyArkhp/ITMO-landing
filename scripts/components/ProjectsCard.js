export default class ProjectsCard {
  constructor({ data, templateSelector }) {
    this._data = data;
    this._templateSelector = templateSelector;
    this._element = this._getElement();
    this._imageElement = this._element.querySelector(".projects-card__image");
    this._descriptionElement = this._element.querySelector(
      ".projects-card__text"
    );
  }

  _getElement() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content.querySelector(".projects-card")
      .cloneNode(true);
    console.log("_getElement", cardElement);
    return cardElement;
  }

  generate() {
    this._imageElement.src = this._data.image;
    this._descriptionElement.textContent = this._data.text;
    return this._element;
  }
}
