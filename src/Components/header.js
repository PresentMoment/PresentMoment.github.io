import React, { useState } from "react";
import "../index.css";

import Contact from "./contact";
import About from "./about";
import Portfolio from "./portfolio";
import Resume from "./resume";

export default function Header() {
  const [about, setAbout] = useState(false);
  const [portfolio, setPortfolio] = useState(false);
  const [contact, setContact] = useState(false);
  const [resume, setResume] = useState(false);

  const toggleAbout = () => setAbout(!about);
  const togglePortfolio = () => setPortfolio(!portfolio);
  const toggleContact = () => setContact(!contact);
  const toggleResume = () => setResume(!resume);

  return (
    <>
      <div className="header">
        <h1>Robert Girardin | Front End Developer</h1>
        <div className="links">
          <h1
            onClick={() => {
              toggleAbout();
              setContact(false);
              setPortfolio(false);
              setResume(false);
            }}
            className={about ? "overline" : undefined}
          >
            About
          </h1>
          <h1
            onClick={() => {
              togglePortfolio();
              setContact(false);
              setAbout(false);
              setResume(false);
            }}
            className={portfolio ? "overline" : undefined}
          >
            Portfolio
          </h1>
          <h1
            onClick={() => {
              toggleResume();
              setContact(false);
              setAbout(false);
              setPortfolio(false);
            }}
            className={resume ? "overline" : undefined}
          >
            Resume
          </h1>
          <h1
            onClick={() => {
              toggleContact();
              setAbout(false);
              setPortfolio(false);
              setResume(false);
            }}
            className={contact ? "overline" : undefined}
          >
            Contact
          </h1>
        </div>
      </div>
      <div className="spacer" />
      <div className="container">
        {contact && <Contact />}
        {about && <About />}
        {portfolio && <Portfolio />}
        {resume && <Resume />}
      </div>
    </>
  );
}
