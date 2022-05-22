import React from "react";

export default function PortfolioItem({ image, link }) {
  return (
    <>
      <a href={link} className="portfolio__item">
        <img src={image} alt="" className="portfolio__img" />
      </a>
    </>
  );
}
