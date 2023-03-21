import React from 'react';
import Card from '../../components/Card/Card';
import './Projects.css';

function Projects() {
  return (
    <div className="projects-body">
      <div className="projects-text">
        <h1>/projects</h1>
        <p>some important projects i've worked on</p>
      </div>
      
      <div className="projects-cards">
        <Card 
          projectImage="tim-live"
          projectTitle="TIM Live - Parceiros"
          projectLink="https://www.timlivepromocao.com.br"
        />
        <Card 
          projectImage="wing"
          projectTitle="Wing Solutions"
          projectLink="https://www.wing.solutions"
        />
        <Card 
          projectImage="telavita"
          projectTitle="Telavita"
          projectLink="https://www.telavita.com.br"
        />
        <Card 
          projectImage="potencial"
          projectTitle="Potencial Tecnologia"
          projectLink="https://www.potencialtecnologia.com.br"
        />
        <Card 
          projectImage="peak"
          projectTitle="Peak Invest"
          projectLink="https://www.peakinvest.com.br"
        />
      </div>
    </div>
  );
}

export default Projects;