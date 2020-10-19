import React, { useState } from "react";
import "../index.css";

import Contact from "./contact";
import About from "./about";
import Portfolio from "./portfolio";
import Resume from "./resume";

export default function Header() {
  const [content, setContent] = useState("");

  const links = ["About", "Portfolio", "Resume", "Contact"];

  function renderSwitch(param) {
    switch (param) {
      case "About":
        return <About />;
      case "Portfolio":
        return <Portfolio />;
      case "Resume":
        return <Resume />;
      case "Contact":
        return <Contact />;
      default:
        return null;
    }
  }

  return (
    <>
      <div className="header">
        <h1>Robert Girardin | Front End Developer</h1>
        <div className="links">
          {links.map((item) => (
            <div
              className="linkItem"
              onClick={() => {
                setContent(item);
              }}
              style={{
                textDecorationColor:
                  content === item ? "rgb(184, 184, 184)" : null,
              }}
            >
              <h1
                style={{
                  color: content === item ? "rgb(184, 184, 184)" : null,
                }}
              >
                {item}
              </h1>
            </div>
          ))}
        </div>
      </div>
      <div className="spacer" />
      <div className="container">{renderSwitch(content)}</div>
    </>
  );
}
