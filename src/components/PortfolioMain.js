import React, { useRef } from "react";

// import AboutMe from "./AboutMe";
// import SnakeGame from "../components/SnakeGame";

import "../assets/css/PortfolioMain.css";

// import pragyaam from "../assets/images/pragyaam.png";
// import caredata from "../assets/images/caredata.jpg";
// import caredtbackdrop from "../assets/images/caredtbackdrop.jpg";
import profileImage from "../assets/images/mypic.png";

const experience = [
  {
    year: "Aug 2022-Nov 2022",
    companyName: "Filestage",
    location: "Germany, Stuttgart (Remote)",
    role: "Software Engineer",
  },
  {
    year: "Jan 2021-Apr 2022",
    companyName: "Tranzact",
    location: "Mumbai, India (Remote)",
    role: "Software Engineer",
  },
  {
    year: "Jul 2019-Dec 2020",
    companyName: "Work On Grid",
    location: "Banglore, India",
    role: "Software Engineer",
  },
  {
    year: "Apr 2018-Aug 2018",
    companyName: "Caredata Solutions Pvt Ltd.",
    location: "Thrissur, India",
    role: "Software Engineer",
  },
];

const PortfolioMain = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const handleHomeClick = () => {
    homeRef.current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  };

  const handleAboutClick = () => {
    aboutRef.current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  };

  return (
    <React.Fragment>
      <nav>
        <ul>
          <li onClick={handleHomeClick}>Home</li>
          <li>Work</li>
          <li onClick={handleAboutClick}>About</li>
          <li>Contact</li>
        </ul>
      </nav>
      <main>
        <div ref={homeRef} className="intro">
          <div className="intro-text">
            <h1>
              <span role="img" aria-label="Hi emoji">
                👋
              </span>
            </h1>
            <h1>Hello, I am Hariprasad K B</h1>
            <p className="profile-desc">
              I am an Experienced Software Engineer with a demonstrated history
              of working in product based startups. Skilled in Full Stack
              Development.
            </p>
          </div>
          <div className="picture">
            <img src={profileImage} alt="Profile" />
          </div>
        </div>
        <div ref={aboutRef} className="section-about">
          <div className="about-wrapper">
            <div className="about">
              <h1>
                <span role="img" aria-label="Hi emoji">
                  👨‍💻
                </span>
              </h1>
              <h3>About</h3>
            </div>
            <a
              href="https://www.linkedin.com/in/hariprasad-k-b-58878512b"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on Linkdin
            </a>
          </div>
        </div>
        <div className="section-mystory">
          <div className="mystory-text">
            <h4>My story</h4>
            <p>
              I have been a creative leader in the digital entertainment and
              software industry since 2011. During this time, I have had the
              opportunity to work with some amazing people on several
              cutting-edge projects.
            </p>
            <p>
              Projects I’ve worked on include an aviation simulation game (NFA)
              to conceptual products for multi-million dollar corporations
              (Amazon, KBB, and more). Along this journey, I have worn several .
            </p>
            <p>
              As a creative leader and mentor, I strive to have my teams
              flourish by challenging them to be innovative and get out of their
              comfort zones.
            </p>
          </div>

          <div className="work-experience">
            <h3>Where I've Worked</h3>
            {experience.map((item) => (
              <div className="company-wrapper">
                <h5 className="date-range">{item.year}</h5>
                <div className="company">
                  <h5 className="company-name body-paragraph">
                    {item.companyName}
                  </h5>
                  <h5 className="company-location body-paragraph">
                    {item.location}
                  </h5>
                </div>
                <h5 className="body-paragraph">{item.role}</h5>
              </div>
            ))}
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};

export default PortfolioMain;
