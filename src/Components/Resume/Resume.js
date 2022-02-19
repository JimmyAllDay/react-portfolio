import React, { useState } from "react";

import NavButton from "../NavButton";
import Nav from "../Nav";
import Overview from "./Overview";
import TechSkills from "./TechSkills";
import TechTrain from "./TechTrain";
import SoftSkills from "./SoftSkills";
import NonTechEd from "./NonTechEd";
import WorkExp from "./WorkExp";
import Referees from "./Referees";

import { Container } from "react-bootstrap";

import { CSSTransition } from "react-transition-group";

function Resume({ toggleComps, seeComps }) {
  const [showNav, setShowNav] = useState(false);

  const showNavigation = () => {
    setShowNav(!showNav);
  };

  const closeNav = () => {
    setShowNav(false);
  };

  const navLinks = [
    { href: "#overview", section: "Overview" },
    { href: "#techSkills", section: "Tech Skills" },
    { href: "#techTrain", section: "Tech Training" },
    { href: "#softSkills", section: "Soft Skills" },
    { href: "#nonTechEd", section: "Non-Tech Education" },
    //TODO: Change the below to just 'Work Experience' after you get your first tech role
    { href: "#workExp", section: "Work Experience" },
    { href: "#referees", section: "Referees" },
  ];

  return (
    <Container>
      <NavButton
        showNav={showNav}
        showNavigation={showNavigation}
        toggleComps={toggleComps}
      />

      <CSSTransition in={showNav} timeout={300} classNames="nav" unmountOnExit>
        <Nav closeNav={closeNav} navLinks={navLinks} seeComps={seeComps} />
      </CSSTransition>

      <Overview />
      <TechSkills />
      <TechTrain />
      <SoftSkills />
      <NonTechEd />
      <WorkExp />
      <Referees />
    </Container>
  );
}

export default Resume;
