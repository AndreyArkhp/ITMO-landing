import PublicationsCard from "/scripts/components/PublicationsCard.js";
import PublicationsSwiper from "/scripts/components/PublicationsSwiper.js";
import ProjectsCard from "/scripts/components/ProjectsCard.js";
import ProjectsSwiper from "/scripts/components/ProjectsSwiper.js";
import { cardDataProjects } from "../data/cardDataProjects.js";
import { projectsMobileMenuHeader, projectsMobileMenuList, projectsSwiperBlock, allProjects, govProjects, specPrograms, inDevelopment } from "../utils/constants.js";

const publicationsSwiper = new PublicationsSwiper({cardData: [
        {
            image: "./images/Publication/pub24.png",
            authors: "Egor Nevezhin, Nikolay Butakov, Maria Khodorchenko, Maxim Petrov, Denis Nasonov",
            text: "Online advertising is one of the most widespread ways to reach and increase a target audience for those selling products. Usually having a form of a banner, advertising engages users into visiting a corresponding webpage. Professional generation of banners requires creative and writing skills and a basi…",
            title: "Topic-driven Ensemble for Online Advertising Generation",
        },
        {
            image: "./images/Publication/pub24.png",
            authors: "Egor Nevezhin, Nikolay Butakov, Maria Khodorchenko, Maxim Petrov, Denis Nasonov",
            text: "Online advertising is one of the most widespread ways to reach and increase a target audience for those selling products. Usually having a form of a banner, advertising engages users into visiting a corresponding webpage. Professional generation of banners requires creative and writing skills and a basi…",
            title: "Topic-driven Ensemble for Online Advertising Generation",
        },
        {
            image: "./images/Publication/pub24.png",
            authors: "Egor Nevezhin, Nikolay Butakov, Maria Khodorchenko, Maxim Petrov, Denis Nasonov",
            text: "Online advertising is one of the most widespread ways to reach and increase a target audience for those selling products. Usually having a form of a banner, advertising engages users into visiting a corresponding webpage. Professional generation of banners requires creative and writing skills and a basi…",
            title: "Topic-driven Ensemble for Online Advertising Generation",
        },
        {
            image: "./images/Publication/pub24.png",
            authors: "Egor Nevezhin, Nikolay Butakov, Maria Khodorchenko, Maxim Petrov, Denis Nasonov",
            text: "Online advertising is one of the most widespread ways to reach and increase a target audience for those selling products. Usually having a form of a banner, advertising engages users into visiting a corresponding webpage. Professional generation of banners requires creative and writing skills and a basi…",
            title: "Topic-driven Ensemble for Online Advertising Generation",
        },
        {
            image: "./images/Publication/pub24.png",
            authors: "Egor Nevezhin, Nikolay Butakov, Maria Khodorchenko, Maxim Petrov, Denis Nasonov",
            text: "Online advertising is one of the most widespread ways to reach and increase a target audience for those selling products. Usually having a form of a banner, advertising engages users into visiting a corresponding webpage. Professional generation of banners requires creative and writing skills and a basi…",
            title: "Topic-driven Ensemble for Online Advertising Generation",
        },
        {
            image: "./images/Publication/pub24.png",
            authors: "Egor Nevezhin, Nikolay Butakov, Maria Khodorchenko, Maxim Petrov, Denis Nasonov",
            text: "Online advertising is one of the most widespread ways to reach and increase a target audience for those selling products. Usually having a form of a banner, advertising engages users into visiting a corresponding webpage. Professional generation of banners requires creative and writing skills and a basi…",
            title: "Topic-driven Ensemble for Online Advertising Generation",
        },
        {
            image: "./images/Publication/pub24.png",
            authors: "Egor Nevezhin, Nikolay Butakov, Maria Khodorchenko, Maxim Petrov, Denis Nasonov",
            text: "Online advertising is one of the most widespread ways to reach and increase a target audience for those selling products. Usually having a form of a banner, advertising engages users into visiting a corresponding webpage. Professional generation of banners requires creative and writing skills and a basi…",
            title: "Topic-driven Ensemble for Online Advertising Generation",
        },
        {
            image: "./images/Publication/pub24.png",
            authors: "Egor Nevezhin, Nikolay Butakov, Maria Khodorchenko, Maxim Petrov, Denis Nasonov",
            text: "Online advertising is one of the most widespread ways to reach and increase a target audience for those selling products. Usually having a form of a banner, advertising engages users into visiting a corresponding webpage. Professional generation of banners requires creative and writing skills and a basi…",
            title: "Topic-driven Ensemble for Online Advertising Generation",
        },
        {
            image: "./images/Publication/pub24.png",
            authors: "Egor Nevezhin, Nikolay Butakov, Maria Khodorchenko, Maxim Petrov, Denis Nasonov",
            text: "Online advertising is one of the most widespread ways to reach and increase a target audience for those selling products. Usually having a form of a banner, advertising engages users into visiting a corresponding webpage. Professional generation of banners requires creative and writing skills and a basi…",
            title: "Topic-driven Ensemble for Online Advertising Generation",
        },
        {
            image: "./images/Publication/pub24.png",
            authors: "Egor Nevezhin, Nikolay Butakov, Maria Khodorchenko, Maxim Petrov, Denis Nasonov",
            text: "Online advertising is one of the most widespread ways to reach and increase a target audience for those selling products. Usually having a form of a banner, advertising engages users into visiting a corresponding webpage. Professional generation of banners requires creative and writing skills and a basi…",
            title: "Topic-driven Ensemble for Online Advertising Generation",
        },
    ], swiperSelector: ".publications__swiper", wrapperSelector: ".publications__cards", renderer: card => {
        const cardObject = new PublicationsCard({data: card, templateSelector: "#publications_card_template"});
        return cardObject.generate();
    }});

publicationsSwiper.renderItems();
publicationsSwiper.initSwiper();

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