import React from 'react';
import './Homepage.css';

const HomePage = () => {
  return (
    <div className="homepage-body">
      <div className="homepage-image">
        <div className="profile-image"></div>
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
          <a href="/about-me">→ Who Am I</a>
          <a href="/projects">→ Projects</a>
          <a href="/contact-me">→ Contact Me</a>
        </div>
      </div>

    </div>
  );
};

export default HomePage;