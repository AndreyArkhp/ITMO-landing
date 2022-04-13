import PublicationsCard from "./components/PublicationsCard.js";
import PublicationsSwiper from "./components/PublicationsSwiper.js";
import {initAboutSwiper} from "./components/aboutSwiper.js";
import { studyBtns, handleBtnClick } from "./components/study.js";
import setEventListener from "./components/handlers.js";
import {publicationsData} from "./utils/data.js";
import ProjectsCard from "/scripts/components/ProjectsCard.js";
import TeamCard from "/scripts/components/TeamCard.js";
import ProjectsSwiper from "/scripts/components/ProjectsSwiper.js";
import TeamSwiper from "/scripts/components/TeamSwiper.js";
import { cardDataProjects } from "../data/cardDataProjects.js";
import { cardDataTeam } from "../data/cardDataTeam.js";
import { projectsMobileMenuHeader, projectsMobileMenuList, projectsSwiperBlock, allProjects, govProjects, specPrograms, inDevelopment } from "../utils/constants.js";

const publicationsSwiper = new PublicationsSwiper({cardData: publicationsData, swiperSelector: ".publications__swiper", wrapperSelector: ".publications__cards", renderer: card => {
        const cardObject = new PublicationsCard({data: card, templateSelector: "#publications_card_template"});
        return cardObject.generate();
    }});
publicationsSwiper.renderItems();
publicationsSwiper.initSwiper();
initAboutSwiper();
setEventListener();

const renderer = (card, templateSelector, cardPattern) => {
    // const cardObject = new ProjectsCard({
    const cardObject = new cardPattern({
        data: card,
        templateSelector: templateSelector,
    });
    return cardObject.generate();
}
const filter = projectsMobileMenuHeader.dataset.filter;
const projectsSwiper = new ProjectsSwiper({
    cardDataProjects,
    swiperSelector: ".projects__swiper",
    wrapperSelector: ".projects__cards",
    templateSelector: "#projects_card_template",
    cardPattern: ProjectsCard,
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
        projectsSwiper.del();
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

const teamSwiper = new TeamSwiper({
    cardDataTeam,
    swiperSelector: ".team__swiper",
    wrapperSelector: ".team__cards",
    templateSelector: "#team_card_template",
    cardPattern: TeamCard,
    renderer: renderer,
});
teamSwiper.renderItems();
teamSwiper.initSwiper();