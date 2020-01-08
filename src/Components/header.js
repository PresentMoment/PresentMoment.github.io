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
  const [mouseTarget, setTarget] = useState("");
  const [hovered, setHovered] = useState(false);

  const toggleAbout = () => setAbout(!about);
  const togglePortfolio = () => setPortfolio(!portfolio);
  const toggleContact = () => setContact(!contact);
  const toggleResume = () => setResume(!resume);

  const underline = hovered ? { textDecoration: "underline" } : null;

  return (
    <>
      <div className="header">
        <h1>Robert Girardin | Front End Developer</h1>
        <div className="links">
          <div
            style={mouseTarget === "about" && !about ? underline : null}
            onMouseEnter={e => {
              setTarget(e.currentTarget.id);
              setHovered(true);
            }}
            onMouseLeave={() => {
              setTarget("");
              setHovered(false);
            }}
            onClick={() => {
              toggleAbout();
              setContact(false);
              setPortfolio(false);
              setResume(false);
            }}
            className={about ? "overline" : undefined}
            id="about"
          >
            <h1>About</h1>
          </div>
          <div
            style={mouseTarget === "portfolio" && !portfolio ? underline : null}
            onMouseEnter={e => {
              setTarget(e.currentTarget.id);
              setHovered(true);
            }}
            onMouseLeave={() => {
              setTarget("");
              setHovered(false);
            }}
            onClick={() => {
              togglePortfolio();
              setContact(false);
              setAbout(false);
              setResume(false);
            }}
            className={portfolio ? "overline" : undefined}
            id="portfolio"
          >
            <h1>Portfolio</h1>
          </div>
          <div
            style={mouseTarget === "resume" && !resume ? underline : null}
            onMouseEnter={e => {
              setTarget(e.currentTarget.id);
              setHovered(true);
            }}
            onMouseLeave={() => {
              setTarget("");
              setHovered(false);
            }}
            onClick={() => {
              toggleResume();
              setContact(false);
              setAbout(false);
              setPortfolio(false);
            }}
            className={resume ? "overline" : undefined}
            id="resume"
          >
            <h1>Resume</h1>
          </div>
          <div
            style={mouseTarget === "contact" && !contact ? underline : null}
            onMouseEnter={e => {
              setTarget(e.currentTarget.id);
              setHovered(true);
            }}
            onMouseLeave={() => {
              setTarget("");
              setHovered(false);
            }}
            onClick={() => {
              toggleContact();
              setAbout(false);
              setPortfolio(false);
              setResume(false);
            }}
            className={contact ? "overline" : undefined}
            id="contact"
          >
            <h1>Contact</h1>
          </div>
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
