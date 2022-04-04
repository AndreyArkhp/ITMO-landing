import {
  btnCloseMenu,
  btnBurgerMenu,
  handleClickCloseMenu,
  handleClickOpenMenu,
} from "./Header.js";

function setEventListener() {
  btnCloseMenu.addEventListener("click", handleClickCloseMenu);
  btnBurgerMenu.addEventListener("click", handleClickOpenMenu);
}

export default setEventListener;
