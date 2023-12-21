import React from 'react';
import { FaGithub } from 'react-icons/fa'; // Import the Font Awesome icons

import '../styles/styles.css';

const ReactCalculator: React.FC = () => {
  return (
    <div className="page" id="ReactCalculator">
      <h1>React Calculator</h1>
      <h3>A simple calculator that handles order of operations using React.</h3>
      <h3>Stack: React.js, CSS</h3>
      <div className="centered-link">

      <a className="gh-link" href="https://github.com/skboyle/ReactCalculator" target="_blank" rel="noopener noreferrer">
             <FaGithub  />Github
      </a>
      </div>
      <img src="react-calc.png" alt="react-calc" width="300px"/>
    </div>
  );
};

export default ReactCalculator;