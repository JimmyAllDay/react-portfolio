import React from "react";

import { Container } from "react-bootstrap";

function MyWork() {
  return (
    <Container fluid className="p-5 mt-5 my-work" id="work">
      <h2 className="section__title section__title--work">
        Portfolio Projects
      </h2>
      <p className="section__subtitle section__subtitle--work">
        A selection of my work
      </p>

      <div className="portfolio">
        {/* Portfolio item 1 */}
        <a href="portfolio-item.html" className="portfolio__item">
          <img src="img/portfolio-01.jpg" alt="" className="portfolio__img" />
        </a>

        {/* Portfolio item 02 */}
        <a href="portfolio-item.html" className="portfolio__item">
          <img src="img/portfolio-02.jpg" alt="" className="portfolio__img" />
        </a>
      </div>
    </Container>
  );
}

export default MyWork;
