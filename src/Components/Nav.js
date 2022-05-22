import React from "react";

import { HashLink } from "react-router-hash-link";

import { Container } from "react-bootstrap";

function Nav(props) {
  const { closeNav, navLinks, seeComps } = props;

  const mappedLinks = navLinks.map((link, i) => {
    return (
      <li key={i} className="nav__item">
        <HashLink
          smooth
          to={link.href}
          className="nav__link"
          onClick={() => {
            closeNav();
            seeComps();
          }}
        >
          {link.section}
        </HashLink>
      </li>
    );
  });

  return (
    <Container fluid className="p-0 h-100 alert">
      <ul className="nav__list">{mappedLinks}</ul>
    </Container>
  );
}

export default Nav;
