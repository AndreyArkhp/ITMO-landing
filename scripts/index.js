import PublicationsCard from "./components/PublicationsCard.js";
import PublicationsSwiper from "./components/PublicationsSwiper.js";
import aboutSwiper from "./components/aboutSwiper.js";
import { studyBtns, handleBtnClick } from "./components/study.js";
import setEventListener from "./components/handlers.js";
import { publicationsData } from "./utils/data.js";

studyBtns.forEach((btn) => btn.addEventListener("click", handleBtnClick));

const publicationsSwiper = new PublicationsSwiper({
  cardData: publicationsData,
  swiperSelector: ".publications__swiper",
  wrapperSelector: ".publications__cards",
  renderer: (card) => {
    const cardObject = new PublicationsCard({
      data: card,
      templateSelector: "#publications_card_template",
    });
    const cardElement =  cardObject.generate();
    return cardElement;
  },
});

publicationsSwiper.renderItems();
publicationsSwiper.initSwiper();
aboutSwiper.init();

setEventListener();
