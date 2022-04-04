export const btnCloseMenu = document.querySelector(".header__close-icon");
export const btnBurgerMenu = document.querySelector(".header__burger-menu");
export const linkContainer = document.querySelector(".header__menu-item_type_container");
const headerMenu = document.querySelector(".header__menu");
const logo = document.querySelector(".header__logo");
const headerNestedList = document.querySelector(".header__nested-list");
let isOpened = false;

export function handleClickCloseMenu() {
  headerMenu.classList.remove("header__menu_active");
  btnCloseMenu.classList.remove("header__close-icon_active");
  logo.classList.remove("header__logo_menu_open");
  btnBurgerMenu.classList.remove("header__burger-menu_disabled");
}

export function handleClickOpenMenu() {
  headerMenu.classList.add("header__menu_active");
  btnCloseMenu.classList.add("header__close-icon_active");
  logo.classList.add("header__logo_menu_open");
  btnBurgerMenu.classList.add("header__burger-menu_disabled");
}

export function openLinkContainer() {
  if (!isOpened) {
    headerNestedList.classList.add("header__nested-list_opened");
    isOpened = true;
  } else {
    headerNestedList.classList.remove("header__nested-list_opened");
    isOpened = false;
  }
}
