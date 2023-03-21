import React from "react";
import "./Timeline.css";
import 'devicon/devicon.min.css';

function Timeline() {
  return (
    <div className="timeline">
      <div className="outer">
        <div className="card">
          <div className="info">
            <h3 className="title">Where it all started...</h3>
            <p>
              My first experience with programming dates back to when I was 16
              years old. During my technical course in electronics/electricity,
              I had to learn programming in c/c++ for an Arduino Uno. I quickly
              realized that I had a natural inclination towards programming
              logic, which led me to pursue a Bachelor's degree in Computer
              Science.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="info">
            <h3 className="title">Where I am currently...</h3>
            <p>
              After completing my degree in 2022, I have acquired extensive
              knowledge in all areas of IT, with a particular interest and
              proficiency in web programming. Over the past two years, I have
              honed my skills in web design, and I thoroughly enjoy working with
              Javascript and its various frameworks.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="info center">
            <h3 className="title center">My programming skills</h3>
            <p className="icons-language">
              <i className="devicon-typescript-plain"></i>
              <i className="devicon-python-plain"></i>
              <i className="devicon-nodejs-plain"></i>
              <i className="devicon-csharp-plain"></i>
            </p>

            <p className="icons-language">
              <i className="devicon-css3-plain"></i>
              <i className="devicon-react-original"></i>
              <i className="devicon-vuejs-plain"></i>
              <i className="devicon-tailwindcss-plain"></i>
            </p>

            <p className="icons-language">
              <i className="devicon-github-original"></i>
              <i className="devicon-amazonwebservices-original"></i>
              <i className="devicon-docker-plain"></i>
              <i className="devicon-linux-plain"></i>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timeline;
