import React, { useState } from "react";

import artist from "../images/artist.png";
import just from "../images/just.png";
import material from "../images/material.png";
import simma from "../images/simma.png";
import deed from "../images/deed.png";
import finn from "../images/finn.png";
import anthromes from "../images/anthromes.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

library.add(fab, faExternalLinkAlt);

export default function Portfolio() {
  const [image, setImage] = useState();
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [gitLink, setGitLink] = useState("");

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
              setGitLink("");
            }}
          >
            The Deed
          </li>
          <li
            onClick={() => {
              setImage(material);
              setDescription(
                "A RESTful, location based app for users to find public sculpture near them and post public sculptures they find in the world. Built with Handlebars, Express and MongoDB."
              );
              setLink("https://materialism.herokuapp.com/");
              setGitLink("https://github.com/PresentMoment/Material");
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
              setGitLink("https://github.com/PresentMoment/creative-portfolio");
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
              setGitLink("https://github.com/PresentMoment/simma");
            }}
          >
            Simma
          </li>
          <li
            onClick={() => {
              setImage(finn);
              setDescription("Using Tone.JS to 'auralize' financial data");
              setLink("https://presentmoment.github.io/Financial-Auralizer/");
              setGitLink(
                "https://github.com/PresentMoment/Financial-Auralizer"
              );
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
              setGitLink("https://github.com/PresentMoment/Just");
            }}
          >
            Just Intonation
          </li>
          <li
            onClick={() => {
              setImage(anthromes);
              setDescription(
                "Admin and contributor for experimental, JavaScript based imaging platform."
              );
              setLink("");
              setGitLink("https://github.com/Anthromes");
            }}
          >
            Anthromes
          </li>
        </ul>
      </div>
      <div className="portfolioImages">
        <a target="_blank" rel="noopener noreferrer" href={link}>
          <img src={image} alt="" width="100%" />
        </a>
      </div>

      <div className="portfolioDesc">
        {description}{" "}
        {description ? (
          <>
            <div className="portfolioSpacer" />
            <div className="portfolioIcon">
              {link ? (
                <a target="_blank" rel="noopener noreferrer" href={link}>
                  <FontAwesomeIcon icon={faExternalLinkAlt} color="gray" />
                </a>
              ) : null}
              {gitLink ? (
                <a target="_blank" rel="noopener noreferrer" href={gitLink}>
                  <FontAwesomeIcon icon={["fab", "github"]} color="gray" />
                </a>
              ) : null}
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
}
