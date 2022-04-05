import PublicationsCard from "/scripts/components/PublicationsCard.js";
import PublicationsSwiper from "/scripts/components/PublicationsSwiper.js";
import PublicationsCard from "./components/PublicationsCard.js";
import PublicationsSwiper from "./components/PublicationsSwiper.js";
import setEventListener from "./components/handlers.js";
import {publicationsData} from "./utils/data.js";
const publicationsSwiper = new PublicationsSwiper({cardData: publicationsData, swiperSelector: ".publications__swiper", wrapperSelector: ".publications__cards", renderer: card => {
  const cardObject = new PublicationsCard({data: card, templateSelector: "#publications_card_template"});
  return cardObject.generate();
}});

publicationsSwiper.renderItems();
publicationsSwiper.initSwiper();
setEventListener();
