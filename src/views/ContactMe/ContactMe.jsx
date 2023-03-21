import React from 'react';
import './ContactMe.css';
import 'devicon/devicon.min.css';

function ContactMe() {
  return (
    <div className="contact-body">
      <div className="contact-social">
        <h1>
          Let’s talk,
          get in touch
          👋 
        </h1>

        <p>
          it will be a pleasure to answer you,
          feel free to call me on my social networks below!
        </p>

        <div className="icons-social">
          <a href="https://www.linkedin.com/in/eduardo-marques-507387161/">
            <i className="devicon-linkedin-plain"></i>

            <span>Linkedin</span>
          </a>
          
          <a href="https://github.com/eedumarquess">
            <i className="devicon-github-plain"></i>

            <span>Github</span>
          </a>
          
          
        </div>
      </div>
    </div>
  );
}

export default ContactMe;