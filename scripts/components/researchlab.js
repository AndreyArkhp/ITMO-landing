export const containerCards = document.querySelector(".researchlab");
let cardActive;

export function handleClickCard(event) {
  const card = event.target.closest(".card-lab");
  if (card && !card.classList.contains("card-lab_active")) {
    cardActive && cardActive.classList.remove("card-lab_active");
    card.classList.add("card-lab_active");
    cardActive = card;
  } else if (card && card.classList.contains("card-lab_active")) {
    cardActive.classList.remove("card-lab_active");
    cardActive = null;
  }
  if (!card) {
    cardActive && cardActive.classList.remove("card-lab_active");
  }
}
