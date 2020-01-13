import React, { useState } from "react";

import portfolioItems from "./portfolioItems";

import { MoonLoader } from "react-spinners";

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
  const [imgLoaded, setLoading] = useState(true);

  return (
    <div className="portfolio">
      <div className="portfolioLinks">
        <ul>
          {Object.values(portfolioItems).map((item, i) => (
            <li
              key={i}
              onClick={() => {
                setDescription(item.description);
                setLink(item.link);
                setGitLink(item.gitLink);
                setImage(item.image);
              }}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="portfolioImages">
        <a target="_blank" rel="noopener noreferrer" href={link}>
          {image ? (
            <MoonLoader loading={imgLoaded} css={"margin: 0 auto; top: 50%;"} />
          ) : null}
          <img
            src={image}
            alt=""
            width="100%"
            onLoad={() => setLoading(false)}
          />
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
