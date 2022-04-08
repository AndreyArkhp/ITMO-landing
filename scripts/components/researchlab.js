export const containerCards = document.querySelector(".researchlab__container");
let cardActive;

export function handleClickCard(event) {
  const card = event.target.closest(".card-lab");
  if (card && !event.target.classList.contains("card-lab_active")) {
    cardActive && cardActive.classList.remove("card-lab_active");
    card.classList.add("card-lab_active");
    cardActive = card;
  }
  if (!card) {
    cardActive.classList.remove("card-lab_active");
  }
}
