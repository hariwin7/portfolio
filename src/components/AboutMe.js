import React from "react";

import "../assets/css/AboutMe.css";

const AboutMe = ({ handleClick }) => {
  return (
    <div>
      <div className="container">
        <h1>
          Hey, I'm<span className="name"> Hariprasad.</span>
        </h1>
        <h2>I'm A Software Engineer.</h2>
        <h4>
          Full Stack Developer / Django / React / AWS / Docker /Node.js / Vue.js
        </h4>
        <button onClick={handleClick}>Take A Tour</button>
      </div>
    </div>
  );
};

export default AboutMe;
