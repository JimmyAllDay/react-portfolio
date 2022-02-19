import React from "react";

import { Navbar, Container, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export default function NavBar() {
  return (
    <Navbar className="d-flex print-hide">
      <Container className="">
        <Nav className="me-auto">
          <LinkContainer to="/" className="me-3">
            <Nav.Link className="my-auto">
              <p>Portfolio</p>
            </Nav.Link>
          </LinkContainer>
          <LinkContainer to="/resume" className="me-3">
            <Nav.Link>
              <p>Resume</p>
            </Nav.Link>
          </LinkContainer>
        </Nav>
      </Container>
    </Navbar>
  );
}
