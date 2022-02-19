import React from "react";

import { FaGithubAlt } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { RiGatsbyLine } from "react-icons/ri";

export default function Footer() {
  return (
    <footer className="footer print-hide">
      <a href="mailto:jameswhmarshall@gmail.com" className="footer__link">
        <h3>jameswhmarshall@gmail.com</h3>
      </a>
      <ul className="social-list">
        <li className="social-list__item">
          <a className="social-list__link" href="https://www.gatsbyjs.com/">
            <i>
              <RiGatsbyLine />
            </i>
          </a>
        </li>
        <li className="social-list__item">
          <a className="social-list__link" href="https://github.com">
            <i>
              <FaGithubAlt />
            </i>
          </a>
        </li>
        <li className="social-list__item">
          <a className="social-list__link" href="https://twitter.com">
            <i>
              <FiTwitter />
            </i>
          </a>
        </li>
      </ul>
    </footer>
  );
}
