export const cards = document.querySelectorAll(".card-lab");
let cardActive;

export function handleClickCard(event) {
  const card = event.currentTarget;
  if (!card.classList.contains("card-lab_active")) {
    cardActive && cardActive.classList.remove("card-lab_active");
    card.classList.add("card-lab_active");
    cardActive = card;
  }
}
