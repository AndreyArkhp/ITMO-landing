import PublicationsCard from "./components/PublicationsCard.js";
import PublicationsSwiper from "./components/PublicationsSwiper.js";
import setEventListener from "./components/handlers.js";
import {publicationsData} from "./utils/data.js";
import ProjectsCard from "/scripts/components/ProjectsCard.js";
import ProjectsSwiper from "/scripts/components/ProjectsSwiper.js";
import { cardDataProjects } from "../data/cardDataProjects.js";
import { projectsMobileMenuHeader, projectsMobileMenuList, projectsSwiperBlock, allProjects, govProjects, specPrograms, inDevelopment } from "../utils/constants.js";

const publicationsSwiper = new PublicationsSwiper({cardData: publicationsData, swiperSelector: ".publications__swiper", wrapperSelector: ".publications__cards", renderer: card => {
    const cardObject = new PublicationsCard({data: card, templateSelector: "#publications_card_template"});
    return cardObject.generate();
  }});
  publicationsSwiper.renderItems();
  publicationsSwiper.initSwiper();
  setEventListener();

const renderer = (card) => {
    const cardObject = new ProjectsCard({
        data: card,
        templateSelector: "#projects_card_template"
    });
    return cardObject.generate();
}

const filter = projectsMobileMenuHeader.dataset.filter;
const projectsSwiper = new ProjectsSwiper({
      cardDataProjects,
      swiperSelector: ".projects__swiper",
      wrapperSelector: ".projects__cards",
      renderer: renderer,
    });
const toggle = () => {
    projectsSwiperBlock.classList.toggle("disabled")
    projectsMobileMenuList.classList.toggle("disabled")
    projectsMobileMenuHeader.classList.toggle("projects__filter-mobile_open")
}
const toggleFilter = (e) => {
  const filter = e.target.dataset.filter;
    if (projectsMobileMenuHeader.dataset.filter !== filter){
    projectsMobileMenuHeader.dataset.filter = filter;
    projectsSwiper.renderItems(filter);
    projectsSwiper.initSwiper();
    projectsMobileMenuHeader.textContent = e.target.textContent.toLocaleUpperCase();
    }
    toggle();
}

projectsMobileMenuHeader.addEventListener("click", toggle);
govProjects.addEventListener("click", toggleFilter);
specPrograms.addEventListener("click", toggleFilter);
inDevelopment.addEventListener("click", toggleFilter);
allProjects.addEventListener("click", toggleFilter);


projectsSwiper.renderItems(filter);
projectsSwiper.initSwiper();


