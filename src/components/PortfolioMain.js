import React, { useRef } from "react";

import AboutMe from "./AboutMe";
import SnakeGame from "../components/SnakeGame";

import "../assets/css/PortfolioMain.css";

import pragyaam from "../assets/images/pragyaam.png";
// import caredata from "../assets/images/caredata.jpg";
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
            <div className="item overlay">
              <div className="item-head">
                <div className="item-head-cont">
                  <span className="company-name">Pragyaam (Startup)</span>
                  <span className="role">Full Stack Developer</span>
                </div>
                <button className="button">Go To Site</button>
              </div>
              <img className="item-image" alt={""} src={pragyaam} />
              <span>Build And Maintained A Complete Analytics Engine</span>
            </div>
            <div className="item ">
              <span className="company-name">Caredata Solutions Pvt Ltd</span>
              <span className="role">Junior Software Engineer</span>
              <img className="item-image" alt={""} src={caredtbackdrop} />
            </div>
          </div>
          <span className="heading">Projects</span>
          <div className="section">
            <div className="item ">
              <span className="company-name">React SnakeGame</span>
              <span className="role">Hobby Project</span>
              <SnakeGame />
            </div>
            <div className="item ">
              <span className="company-name">
                Movie Recommendation And Prediction Webapp
              </span>
              <span className="role">Final Project (B.Tech)</span>
              <img
                className="item-image"
                alt={""}
                src="https://github.com/hariwin7/movie-recommendation-and-prediction/blob/master/screenshots/recommendation%20rating.JPG?raw=truee"
              />
            </div>
          </div>
          <span className="heading">Blogs</span>
          <div className="section">
            <div className="item ">
              <span className="company-name">Pragyaam (Startup)</span>
              <span className="role">Full Stack Developer</span>
              <img className="item-image" alt={""} src={pragyaam} />
            </div>
            <div className="item ">
              <span className="company-name">Caredata Solutions Pvt Ltd</span>
              <span className="role">Junior Software Engineer</span>
              <img className="item-image" alt={""} src={caredtbackdrop} />
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
