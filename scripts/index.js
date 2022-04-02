import PublicationsCard from "./components/PublicationsCard.js";
import PublicationsSwiper from "./components/PublicationsSwiper.js";
import {
  handleClickCloseMenu,
  btnCloseMenu,
  btnBurgerMenu,
  handleClickOpenMenu,
} from "./components/Header.js";

const publicationsSwiper = new PublicationsSwiper({
  cardData: [
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
  ],
  swiperSelector: ".publications__swiper",
  wrapperSelector: ".publications__cards",
  renderer: (card) => {
    const cardObject = new PublicationsCard({
      data: card,
      templateSelector: "#publications_card_template",
    });
    return cardObject.generate();
  },
});

publicationsSwiper.renderItems();
publicationsSwiper.initSwiper();

btnCloseMenu.addEventListener("click", handleClickCloseMenu);
btnBurgerMenu.addEventListener("click", handleClickOpenMenu);
