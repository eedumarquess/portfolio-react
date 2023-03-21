import React from 'react';
import './Card.css';

function Card({ projectImage, projectTitle, projectLink }) {
  const imageUrl = `https://eedumarquess-portfolio.s3.sa-east-1.amazonaws.com/images/images/${projectImage}.png`

  return (
    <div className="card-body">
      <a href={projectLink}>
        <div className="card-image">
          <img src={imageUrl} alt="" />
        </div>
        <div className="card-text">
          <p className="project-title">
            {projectTitle}
          </p>

          <p className="project-link">
            {projectLink?.slice(12, projectLink.length)}
          </p>
        </div> 
      </a>
    </div>
  );
}

export default Card;