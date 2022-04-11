export const studyBtns = document.querySelectorAll(".study__option");
const studyCards = document.querySelectorAll(".study__card");
export function handleBtnClick() {
  studyBtns.forEach((btn) => btn.classList.toggle("study__option_active"));
  studyCards.forEach((card) => card.classList.toggle("study__card_active"));
}
