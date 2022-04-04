import {
  btnCloseMenu,
  btnBurgerMenu,
  handleClickCloseMenu,
  handleClickOpenMenu,
  linkContainer,
  openLinkContainer,
} from "./Header.js";

function setEventListener() {
  btnCloseMenu.addEventListener("click", handleClickCloseMenu);
  btnBurgerMenu.addEventListener("click", handleClickOpenMenu);
  linkContainer.addEventListener("click", openLinkContainer);
}

export default setEventListener;
