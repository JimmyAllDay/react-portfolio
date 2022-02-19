import React from "react";
import { Container, Button } from "react-bootstrap";
import { HashLink as Link } from "react-router-hash-link";

export default function NoMatch() {
  return (
    <Container className="p-5 d-flex flex-column">
      <h3 className="m-3">Sorry, there is no page at this URL.</h3>

      <h3 className="m-3"> Go to another page: </h3>

      <Link to="/#home">
        <Button type="button" className="btn m-3">
          Portfolio
        </Button>
      </Link>

      <Link to="/resume#home">
        <Button type="button" className="btn m-3">
          Resume
        </Button>
      </Link>
    </Container>
  );
}
