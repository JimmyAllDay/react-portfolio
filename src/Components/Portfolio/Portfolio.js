import React, { useState } from "react";

import NavButton from "../NavButton";
import Nav from "../Nav";
import Services from "./Services";
import About from "./About";
import MyWork from "./MyWork";

import { Container } from "react-bootstrap";

import { CSSTransition } from "react-transition-group";

import { IoMdArrowRoundForward } from "react-icons/io";

function Portfolio({ toggleComps, seeComps }) {
  const [showNav, setShowNav] = useState(false);

  const showNavigation = () => {
    setShowNav(!showNav);
  };

  const closeNav = () => {
    setShowNav(false);
  };

  const navLinks = [
    { href: "#home", section: "Home" },
    { href: "#services", section: "What I do" },
    { href: "#about", section: "About Me" },
    { href: "#work", section: "Portfolio Projects" },
  ];

  const navPagLink = {
    link: "/resume",
    icon: <IoMdArrowRoundForward />,
    label: "Resume",
    class: "nav-link-bottom-right",
  };

  return (
    <Container fluid className="p-0 h-100">
      <NavButton
        showNav={showNav}
        showNavigation={showNavigation}
        toggleComps={toggleComps}
      />

      <CSSTransition in={showNav} timeout={300} classNames="nav" unmountOnExit>
        <Nav
          closeNav={closeNav}
          navLinks={navLinks}
          seeComps={seeComps}
          navPagLink={navPagLink}
        />
      </CSSTransition>

      <>
        <Services />
        <About />
        <MyWork />
      </>
    </Container>
  );
}

export default Portfolio;
