import {
  btnCloseMenu,
  btnBurgerMenu,
  closeMenu,
  openMenu,
  linkContainer,
  openLinkContainer,
  magistracyBtn,
  graduateBtn,
} from "./Header.js";

import { handleClickCard, containerCards } from "./researchlab.js";
import { form, handlerSubmit } from "./form.js";

import { handleBtnClick, studyBtns } from "./study.js";

function setEventListener() {
  btnCloseMenu.addEventListener("click", closeMenu);
  btnBurgerMenu.addEventListener("click", openMenu);
  linkContainer.addEventListener("click", openLinkContainer);
  containerCards.addEventListener("click", handleClickCard);
  studyBtns.forEach((btn) => {
    btn.addEventListener("click", handleBtnClick);
  });
  form.addEventListener("submit", handlerSubmit);
  magistracyBtn.addEventListener("click", (event) => {
    handleBtnClick(event, "magistracy");
    closeMenu();
  });
  graduateBtn.addEventListener("click", (event) => {
    handleBtnClick(event, "graduate");
    closeMenu();
  });
}

export default setEventListener;
