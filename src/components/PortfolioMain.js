import React, { useRef } from "react";

import AboutMe from "./AboutMe";
import SnakeGame from "../components/SnakeGame";

import "../assets/css/PortfolioMain.css";

import pragyaam from "../assets/images/pragyaam.png";
import caredata from "../assets/images/caredata.jpg";
import caredtbackdrop from "../assets/images/caredtbackdrop.jpg";

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
          <span className="heading">Experience</span>
          <div className="section">
            <div className="item ">
              <span>Pragyaam (Startup)</span>
              <img className="pragyaam" src={pragyaam} />
            </div>
            <div className="item ">
              <span>Caredata Solutions Pvt Ltd</span>
              <img className="pragyaam" src={caredtbackdrop} />
            </div>
          </div>
          <span className="heading">Projects</span>
          <div className="section">
            <div className="item ">
              <span>React SnakeGame (Hobby)</span>
              <SnakeGame />
            </div>
            <div className="item ">
              <span>Movie Recommendation And Prediction Webapp (B.tech)</span>
              <img
                className="pragyaam"
                src="https://github.com/hariwin7/movie-recommendation-and-prediction/blob/master/screenshots/recommendation%20rating.JPG?raw=truee"
              />
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
