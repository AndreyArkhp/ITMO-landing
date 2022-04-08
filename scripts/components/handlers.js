import {
  btnCloseMenu,
  btnBurgerMenu,
  handleClickCloseMenu,
  handleClickOpenMenu,
  linkContainer,
  openLinkContainer,
} from "./Header.js";

import { handleClickCard, cards } from "./researchlab.js";

function setEventListener() {
  btnCloseMenu.addEventListener("click", handleClickCloseMenu);
  btnBurgerMenu.addEventListener("click", handleClickOpenMenu);
  linkContainer.addEventListener("click", openLinkContainer);
  cards.forEach((card) => {
    card.addEventListener("click", handleClickCard);
  });
}

export default setEventListener;
