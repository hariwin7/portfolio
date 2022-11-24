import React, { useRef } from "react";

// import AboutMe from "./AboutMe";
// import SnakeGame from "../components/SnakeGame";

import "../assets/css/PortfolioMain.css";

// import pragyaam from "../assets/images/pragyaam.png";
// import caredata from "../assets/images/caredata.jpg";
// import caredtbackdrop from "../assets/images/caredtbackdrop.jpg";
import profileImage from "../assets/images/mypic.png";
import phoneBooth from "../assets/images/phonebooth.jpg";

const experience = [
  {
    year: "Aug 2022-Nov 2022",
    companyName: "Filestage",
    location: "Germany, Stuttgart (Remote)",
    role: "Software Developer",
  },
  {
    year: "Jan 2021-Apr 2022",
    companyName: "Tranzact",
    location: "Mumbai, India (Remote)",
    role: "Software Engineer II",
  },
  {
    year: "Jul 2019-Dec 2020",
    companyName: "Work On Grid",
    location: "Banglore, India",
    role: "Software Development Engineer",
  },
  {
    year: "Apr 2018-Aug 2018",
    companyName: "Caredata Solutions Pvt Ltd.",
    location: "Thrissur, India",
    role: "Junior Software Engineer",
  },
];

const PortfolioMain = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const handleHomeClick = () => {
    homeRef.current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  };

  const handleAboutClick = () => {
    aboutRef.current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
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
        <div className="section-about">
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
        <div className="section-mystory" ref={aboutRef}>
          <div className="mystory-text">
            <h3>My story</h3>
            <p className="body-paragraph">
              I have been a leader in the software industry since 2018. During
              this time, I have had the opportunity to work with some amazing
              people on several cutting-edge projects.
              <br />
              <br />
              Projects I’ve worked on include .
              <br />
              <br />
              As a tech enthusiast , I strive to have my teams flourish by
              involving in all the phases of development from design to
              deployment.
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
        <div className="section-about">
          <div className="about-wrapper">
            <div className="about">
              <h1>
                <span role="img" aria-label="Hi emoji">
                  🤙
                </span>
              </h1>
              <h3>Contact</h3>
            </div>
          </div>
        </div>
        <div className="section-contact flex flex-row ">
          <div className="contact flex flex-column">
            <p>
              {/* Are you interested in collaborating or want to connect or chat? */}
              I'm looking for a job right now , If you are looking to hire me ,
              hit the contact button down below or{" "}
              <a
                href="https://www.linkedin.com/in/hariprasad-k-b-58878512b/"
                target="_blank"
                rel="noopener noreferrer"
              >
                contact me via LinkedIn
              </a>
              .
            </p>
            <a
              href="mailto:hariwin7@gmail.com?subject=Contact%20via%20Portfolio"
              className="contact-btn"
            >
              Contact Me
            </a>
          </div>
          <div className="phone-booth">
            <img src={phoneBooth} alt="phonebooth" />
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};

export default PortfolioMain;
