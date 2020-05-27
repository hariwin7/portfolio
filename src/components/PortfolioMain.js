import React, { useRef } from "react";

import AboutMe from "./AboutMe";
import SnakeGame from "../components/SnakeGame";

import "../assets/css/PortfolioMain.css";

const PortfolioMain = () => {
  const myRef = useRef(null);
  const handleClick = () => {
    myRef.current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  };

  return (
    <React.Fragment>
      <div class="flex-container">
        <div class="aboutme">
          <AboutMe handleClick={handleClick} />
        </div>
        <div ref={myRef} className="main-content">
          <div className="section">
            <div className="item">
              <SnakeGame />
            </div>
            <div className="item">
              <SnakeGame />
            </div>
            <div className="item">
              <SnakeGame />
            </div>
          </div>
        </div>
      </div>
      <footer className="footer">
        <span className="footer-item">
          All product names, logos, and brands are property of their respective
          owners.
        </span>
        <span className="footer-item">
          Copyright &copy 2020 Hariprasad K B All rights reserved
        </span>
      </footer>
    </React.Fragment>
  );
};

export default PortfolioMain;
