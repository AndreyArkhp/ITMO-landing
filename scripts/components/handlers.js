import {
  btnCloseMenu,
  btnBurgerMenu,
  closeMenu,
  openMenu,
  linkContainer,
  openLinkContainer,
  magistracyBtn,
  graduateBtn,
  menuList,
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
  });
  graduateBtn.addEventListener("click", (event) => {
    handleBtnClick(event, "graduate");
  });
  menuList.addEventListener("click", (event) => {
    if (event.target.classList.contains("header__menu-link")) {
      closeMenu();
    }
  });
}

export default setEventListener;
