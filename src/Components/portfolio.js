import React, { useState } from "react";

import artist from "../images/artist.png";
import just from "../images/just.png";
import material from "../images/material.png";
import simma from "../images/simma.png";
import deed from "../images/deed.png";
import finn from "../images/finn.png";

export default function Portfolio() {
  const [image, setImage] = useState();
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");

  return (
    <div className="portfolio">
      <div className="portfolioLinks">
        <ul>
          <li
            onClick={() => {
              setImage(deed);
              setDescription(
                "Working as a Junior Developer to help launch multi-platform, international website. From design mockups in Storybooks to engineering components in React and React Native, to tying everything to the Node.JS backend.  Utilizing TypeScript superset throughout."
              );
              setLink("https://www.thedeed.app/");
            }}
          >
            The Deed
          </li>
          <li
            onClick={() => {
              setImage(artist);
              setDescription(
                "Admin and contributor for experimental, JavaScript based imaging platform."
              );
            }}
          >
            Anthromes
          </li>
          <li
            onClick={() => {
              setImage(material);
              setDescription(
                "A RESTful, location based app for users to find public sculpture near them and post public sculptures they find in the world. Built with Handlebars, Express and MongoDB."
              );
              setLink("https://materialism.herokuapp.com/");
            }}
          >
            Material
          </li>
          <li
            onClick={() => {
              setImage(artist);
              setDescription(
                "Fully responsive, SPA portfolio site built with React and CSS"
              );
              setLink("http://robertgirardin.net/");
            }}
          >
            robertgirardin.net
          </li>
          <li
            onClick={() => {
              setImage(simma);
              setDescription(
                "A spatial, sound exploration tool built with React and Tone.JS"
              );
              setLink("http://simma.herokuapp.com/");
            }}
          >
            Simma
          </li>
          <li
            onClick={() => {
              setImage(finn);
              setDescription("Using Tone.JS to 'auralize' financial data");
              setLink("https://presentmoment.github.io/Financial-Auralizer/");
            }}
          >
            Financial Auralizer
          </li>
          <li
            onClick={() => {
              setImage(just);
              setDescription(
                "An educational tool to learn about just intonation. Built with P5 and Tone.JS"
              );
              setLink("https://presentmoment.github.io/Just/");
            }}
          >
            Just Intonation
          </li>
        </ul>
      </div>
      <div className="portfolioImages">
        <a target="_blank" rel="noopener noreferrer" href={link}>
          <img src={image} alt="" width="100%" />
        </a>
      </div>
      <div className="portfolioDesc">{description}</div>
    </div>
  );
}
