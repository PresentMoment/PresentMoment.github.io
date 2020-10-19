import artist from "../images/artist.png";
import just from "../images/just.png";
import material from "../images/material.png";
import simma from "../images/simma.png";
import deed from "../images/deed.png";
import finn from "../images/finn.png";
import promenade from "../images/promenade.png";
import mmxx from "../images/mmxx.png";

const portfolioItems = {
  deed: {
    name: "The Deed",
    description:
      "Working as a Junior Developer to help launch multi-platform, international website. From design mockups in Storybooks to engineering components in React and React Native, to tying everything to the Node.JS backend.  Utilizing TypeScript superset throughout.",
    link: "https://www.thedeed.app/",
    gitLink: "",
    image: deed,
  },

  material: {
    name: "Material",
    description:
      "A RESTful, location based app for users to find public sculpture near them and post public sculptures they find in the world. Built with Handlebars, Express and MongoDB.",
    link: "https://materialism.herokuapp.com/",
    gitLink: "https://github.com/PresentMoment/Material",
    image: material,
  },
  robertgirardin: {
    name: "robertgirardin.net",
    description:
      "Fully responsive, SPA portfolio site built with React and CSS.",
    link: "http://robertgirardin.net/",
    gitLink: "https://github.com/PresentMoment/creative-portfolio",
    image: artist,
  },
  simma: {
    name: "Simma",
    description:
      "A spatial, sound exploration tool built with React and Tone.JS",
    link: "http://simma.herokuapp.com/",
    gitLink: "https://github.com/PresentMoment/simma",
    image: simma,
  },
  mmxx: {
    name: "MMXX",
    description: "A website for Milanese gallery MMXX, built with React",
    link: "http://mmxx.uno/",
    image: mmxx,
  },
  financialAuralizer: {
    name: "Financial Auralizer",
    description: "Using Tone.JS to 'auralize' financial data",
    link: "https://presentmoment.github.io/Financial-Auralizer/",
    gitLink: "https://github.com/PresentMoment/Financial-Auralizer",
    image: finn,
  },
  justIntonation: {
    name: "Just Intonation",
    description:
      "An educational tool to learn about just intonation. Built with P5 and Tone.JS",
    link: "https://presentmoment.github.io/Just/",
    gitLink: "https://github.com/PresentMoment/Just",
    image: just,
  },
  Anthromes: {
    name: "Promenade",
    description: "Promotional site for record on Hundebiss Records",
    link: "https://presentmoment.github.io/promenade/",
    image: promenade,
  },
};

export default portfolioItems;
