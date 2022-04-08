export default class TeamCard {
  constructor({ data, templateSelector }) {
    this._data = data;
    this._templateSelector = templateSelector;
    this._element = this._getElement();
    this._imageElement = this._element.querySelector(".team-card__image");
    this._FIO = this._element.querySelector(".team-card__FIO");
    this._IO = this._element.querySelector(".team-card__IO");
    this._post = this._element.querySelector(".team-card__post");
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
    this._IO.innerHTML =
      `<span>${this._data.i}&nbsp</span>` + `<span>${this._data.o}</span>`;
    this._FIO.innerHTML = `<span>${this._data.f}</span>`;
    this._FIO.append(this._IO);
    this._post.innerHTML =
      `<span>${this._data.post},&nbsp</span><span class="team__title">${this._data.title},&nbsp</span><span>${this._data.degree}</span>`;
    // this._post.textContent = this._data.post;
    return this._element;
  }
}
