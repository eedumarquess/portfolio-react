import React, { useRef } from 'react';
import Scrolldown from '../../components/ScrolldownIcon/ScrolldownIcon'
import AboutMe from '../AboutMe/AboutMe'
import Projects from '../Projects/Projects'
import ContactMe from '../ContactMe/ContactMe';
import './Homepage.css';

const HomePage = () => {
  const sectionRef = useRef(null);

  const scrollToSection = () => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <>
      <div className="homepage-body">
        <div className="homepage-image">
          <img src="https://eedumarquess-portfolio.s3.sa-east-1.amazonaws.com/images/images/my-profile.png" />
        </div>

        <div className="homepage-text">
          <h1 className="homepage-title">
            Hello, I’m Eduardo, <br/>
            But You Can Call Me Edu
          </h1>
          <p className="homepage-paragraph">
            I’m a fullstack develop & UX/UI Designer
          </p>
          <div id="nav">
            <a href="#about-me" onClick={scrollToSection}>→ Who Am I</a>
            <a href="#projects" onClick={scrollToSection}>→ Projects</a>
            <a href="#contact-me" onClick={scrollToSection}>→ Contact Me</a>
          </div>
        </div>

        <div>
          <Scrolldown />
        </div>
      </div>

      <div id="about-me">
        <AboutMe />
      </div>

      <div id="projects">
        <Projects />
      </div>

      <div id="contact-me">
        <ContactMe />
      </div>
    </>
  );
};

export default HomePage;