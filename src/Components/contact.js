import React from "react";
import "../index.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab);

export default function contact() {
  return (
    <div className="contact">
      <span>
        <a
          href="mailto:robertlgirardin@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          e-mail: robertlgirardin@gmail.com
        </a>
      </span>
      <br />
      <span>
        <a href="tel:+39 3516792256">tel: +39 3516792256</a>
      </span>
      <br />
      <span>
        <a href="whatsapp://tel:12137693973">What's App: +1 (213) 769-3973</a>
      </span>
      <br />
      <div
        className="social-links"
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "2.3em",
          marginRight: "60%"
        }}
      >
        <a
          href="https://github.com/PresentMoment"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={["fab", "github"]} size="2x" />
        </a>
        <a
          href="https://www.linkedin.com/in/robert-girardin/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={["fab", "linkedin"]} size="2x" />
        </a>
        <a href="skype:+12137693973?call">
          <FontAwesomeIcon icon={["fab", "skype"]} size="2x" />
        </a>
      </div>
    </div>
  );
}
