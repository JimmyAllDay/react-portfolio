import React from "react";

import { Container } from "react-bootstrap";

const jamesPic = require("../images/James_Marshall1.jpg");

function Intro() {
  return (
    <Container fluid className="p-5 intro p-1" id="home">
      <h1 className="section__title section__title--intro">
        Hi, I'm <strong>James Marshall</strong>
      </h1>

      <p className="section__subtitle section__subtitle--intro">
        Junior Javascript developer
      </p>
      <div className="section__subtitle--details">
        <p className="section__subtitle--location">
          Fitzroy, Melbourne, Australia
        </p>

        <a
          className="section__subtitle--link"
          href="mailto:jameswhmarshall@gmail.com"
        >
          jameswhmarshall@gmail.com
        </a>
        <a
          className="section__subtitle--link section__subtitle--website print-show"
          href="http://jameswhmarshall.info"
        >
          jameswhmarshall.info
        </a>
      </div>
      <img src={jamesPic} alt="James Marshall smiling" className="intro__img" />
    </Container>
  );
}

export default Intro;
