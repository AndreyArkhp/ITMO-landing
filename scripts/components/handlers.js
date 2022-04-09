import {
  btnCloseMenu,
  btnBurgerMenu,
  handleClickCloseMenu,
  handleClickOpenMenu,
  linkContainer,
  openLinkContainer,
} from "./Header.js";

import { handleClickCard, containerCards } from "./researchlab.js";
import { form, handlerSubmit } from "./form.js";

import { handleBtnClick, studyBtns } from "./study.js";

function setEventListener() {
  btnCloseMenu.addEventListener("click", handleClickCloseMenu);
  btnBurgerMenu.addEventListener("click", handleClickOpenMenu);
  linkContainer.addEventListener("click", openLinkContainer);
  containerCards.addEventListener("click", handleClickCard);
  studyBtns.forEach((btn) => {
    btn.addEventListener("click", handleBtnClick);
  });
  form.addEventListener("submit", handlerSubmit);
}

export default setEventListener;
