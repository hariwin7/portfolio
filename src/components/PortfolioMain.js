import React, { useRef } from "react";

// import AboutMe from "./AboutMe";
// import SnakeGame from "../components/SnakeGame";

import "../assets/css/PortfolioMain.css";

// import pragyaam from "../assets/images/pragyaam.png";
// import caredata from "../assets/images/caredata.jpg";
// import caredtbackdrop from "../assets/images/caredtbackdrop.jpg";
import profileImage from "../assets/images/mypic.png";
import phoneBooth from "../assets/images/phonebooth.jpg";
import reactIcon from "../assets/images/react-js-icon.svg";
import vueIcon from "../assets/images/vue-js-icon.svg";
import nodeIcon from "../assets/images/node-js-icon.svg";
import djangoIcon from "../assets/images/django-icon.svg";
import expressIcon from "../assets/images/express-js-icon.svg";
import nginxIcon from "../assets/images/nginx-icon.svg";
import mysqlIcon from "../assets/images/mysql-icon.svg";
import dockerIcon from "../assets/images/docker-icon.svg";
import awsIcon from "../assets/images/aws-icon.svg";
import figmaIcon from "../assets/images/figma-icon.svg";
import { Link } from "phosphor-react";

const experience = [
  {
    year: "2021-Present",
    companyName: "Review Reels",
    location: "India (Own product)",
    role: "Technical Co-founder",
  },
  {
    year: "2022-2022",
    companyName: "Filestage",
    location: "Stuttgart, Germany (Remote)",
    role: "Software Developer",
  },
  {
    year: "2022-2022",
    companyName: "StoreProps ",
    location: "India (Remote)",
    role: "Freelance Developer",
  },
  {
    year: "2021-2022",
    companyName: "Tranzact",
    location: "Mumbai, India (Remote)",
    role: "Software Engineer II",
  },
  {
    year: "2019-2020",
    companyName: "Work On Grid",
    location: "Banglore, India",
    role: "Software Development Engineer",
  },
  {
    year: "2018-2018",
    companyName: "Caredata Solutions Pvt Ltd.",
    location: "Thrissur, India",
    role: "Junior Software Engineer",
  },
];

const technologies = [
  {
    name: "React",
    icon: reactIcon,
  },
  {
    name: "Vue",
    icon: vueIcon,
  },
  {
    name: "Node Js",
    icon: nodeIcon,
  },
  {
    name: "Express",
    icon: expressIcon,
  },
  {
    name: "Django",
    icon: djangoIcon,
  },
  {
    name: "Docker",
    icon: dockerIcon,
  },
  {
    name: "NGINX",
    icon: nginxIcon,
  },
  {
    name: "AWS",
    icon: awsIcon,
  },
  {
    name: "MySQL",
    icon: mysqlIcon,
  },
  {
    name: "Figma",
    icon: figmaIcon,
  },
];

// Vue, Node , Express, Django, MySQL, AWS, NGINX, Docker

const PortfolioMain = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
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

  const handleContactClick = () => {
    contactRef.current.scrollIntoView({
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
          <li onClick={handleAboutClick}>About</li>
          <li onClick={handleContactClick}>Contact</li>
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
              of working in product based startups. Full Stack Developer | Indie
              Hacker.
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
              <Link size={14} weight="fill" />
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
              Projects I’ve worked on include
            </p>
            <ul className="body-paragraph">
              <li>
                Built and deployed from scratch a complete webapp for my own
                product at{" "}
                <a
                  href="https://www.reviewreels.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Link size={14} weight="fill" />
                  Review Reels
                </a>
              </li>
              <li>
                Migrated complex components from angular to react. Migrated
                chrome extension from manifest v2 to manifest v3 at{" "}
                <a
                  href="https://www.filestage.io"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Link size={14} weight="fill" />
                  Filestage
                </a>
              </li>
              <li>
                Built and deployed a shopify app ({" "}
                <a
                  href="https://apps.shopify.com/details"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Link size={14} weight="fill" />
                  details +
                </a>
                ) from scratch for{" "}
                <a
                  href="https://www.storeprops.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Link size={14} weight="fill" />
                  StoreProps
                </a>
                .
              </li>
              <li>
                Optimising the entire frontend of the application at{" "}
                <a
                  href="https://letstranzact.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Link size={14} weight="fill" />
                  Tranzact
                </a>{" "}
                by code splitting which improved the performance by 50% and
                reduced initial load time which in turn reduced customer drop
                off.
              </li>
              <li>
                Built and deployed dynamic dashboarding platform like metabase
                for the product Grid at{" "}
                <a
                  href="https://www.workongrid.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Link size={14} weight="fill" />
                  Work On Grid
                </a>
              </li>
            </ul>
            <p className="body-paragraph">
              <br />
              Along this journey, I have worn several hats ranging, including
              developer, devops, quality assurance, designer.
              <br />
              <br />
              As a tech enthusiast , I strive to have my teams flourish by
              involving in all the phases of development from design to
              deployment.
            </p>
          </div>

          <div className="work-experience">
            <h3>Where I've Worked</h3>
            {experience.map((item, index) => (
              <div className="company-wrapper" key={index}>
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
        <div className="section-skills">
          <h3>My Skillsets</h3>
          <div className="flex flex-row skill-wrapper">
            {technologies.map((item, index) => (
              <div className="skills" key={index}>
                <img
                  src={item.icon}
                  alt={item.name}
                  style={{ maxWidth: "40px", height: "40px" }}
                />
                <p> {item.name}</p>
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
        <div className="section-contact flex flex-row" ref={contactRef}>
          <div className="contact flex flex-column">
            <p>
              {/* Are you interested in collaborating or want to connect or chat? */}
              I'm looking for a job right now , If you are looking to hire , hit
              the contact button down below or{" "}
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
      <footer className="flex  footer">
        Copyright © 2022 Hariprasad K B (hariwin7@gmail.com). All Rights
        Reserved.
      </footer>
    </React.Fragment>
  );
};

export default PortfolioMain;
