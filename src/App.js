import React from 'react';
import './style.css';
import Homepage from './views/Homepage/Homepage'
import AboutMe from './views/AboutMe/AboutMe'
import Projects from './views/Projects/Projects'

function App() {
  return (
    <div>
      <Homepage />
      <AboutMe />
      <Projects />
    </div>
  );
}

export default App;