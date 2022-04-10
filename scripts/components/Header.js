export const btnCloseMenu = document.querySelector(".header__close-icon");
export const btnBurgerMenu = document.querySelector(".header__burger-menu");
export const linkContainer = document.querySelector(".header__menu-item_type_container");
export const magistracyBtn = document.querySelector("#magistracy-btn");
export const graduateBtn = document.querySelector("#graduate-btn");
const menu = document.querySelector(".header__menu");
const logo = document.querySelector(".header__logo");
const nestedList = document.querySelector(".header__nested-list");
const menuItems = document.querySelectorAll(".header__menu-item");

let isOpened = false;

function unsetOpenedList() {
  nestedList.classList.remove("header__nested-list_opened");
  nestedList.style.maxHeight = "";
  menuItems.forEach((item) => {
    item.classList.remove("header__menu-item_type_dark");
  });
  isOpened = false;
}

export function closeMenu() {
  menu.classList.remove("header__menu_active");
  btnCloseMenu.classList.remove("header__close-icon_active");
  logo.classList.remove("header__logo_menu_open");
  btnBurgerMenu.classList.remove("header__burger-menu_disabled");
  unsetOpenedList();
}

export function openMenu() {
  menu.classList.add("header__menu_active");
  btnCloseMenu.classList.add("header__close-icon_active");
  logo.classList.add("header__logo_menu_open");
  btnBurgerMenu.classList.add("header__burger-menu_disabled");
}

export function openLinkContainer() {
  if (!isOpened) {
    nestedList.classList.add("header__nested-list_opened");
    nestedList.style.maxHeight = `${nestedList.scrollHeight}px`;
    menuItems.forEach((item) => {
      if (!item.classList.contains("header__menu-item_type_ligth")) {
        item.classList.add("header__menu-item_type_dark");
      }
    });
    isOpened = true;
  } else {
    unsetOpenedList();
  }
}
