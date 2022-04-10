export const studyBtns = document.querySelectorAll(".study__option");
const studyCards = document.querySelectorAll(".study__card");
const MAGISTRACY = "magistracy";
const GRADUATE = "graduate";

const stateCard = {
  type: MAGISTRACY,
  btn: "",
  activeBtn: "",
  card: "",
  activeCard: "",
};

studyBtns.forEach((btn) => {
  if (btn.classList.contains("study__option_active")) {
    stateCard.activeBtn = btn;
  } else {
    stateCard.btn = btn;
  }
});

studyCards.forEach((card) => {
  if (card.classList.contains("study__card_active")) {
    stateCard.activeCard = card;
  } else {
    stateCard.card = card;
  }
});

export function handleBtnClick(event, type) {
  if (type !== stateCard.type && !event.target.classList.contains("study__option_active")) {
    stateCard.activeBtn.classList.remove("study__option_active");
    stateCard.activeCard.classList.remove("study__card_active");
    stateCard.btn.classList.add("study__option_active");
    stateCard.card.classList.add("study__card_active");
    const btn = stateCard.btn;
    stateCard.btn = stateCard.activeBtn;
    stateCard.activeBtn = btn;
    const card = stateCard.card;
    stateCard.card = stateCard.activeCard;
    stateCard.activeCard = card;
    if (!type) {
      stateCard.type === MAGISTRACY ? (stateCard.type = GRADUATE) : (stateCard.type = MAGISTRACY);
    } else {
      stateCard.type = type;
    }
  }
}
