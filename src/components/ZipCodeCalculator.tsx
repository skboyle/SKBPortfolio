import React from 'react';
import { FaGithub } from 'react-icons/fa'; // Import the Font Awesome icons
import '../styles/styles.css';

const ZipCodeCalculator: React.FC = () => {
  return (
    <div className="page" id="ReactCalculator">
      <h1>ZipCode Calc</h1>
      <h3>Enter 2 ZipCodes to calculate the distance between two points using latitude and longitude!</h3>
      <h3>Stack: Ruby on Rails, React.js, Postgresql, CSS</h3>
      <div className="centered-link">

      <a className="gh-link" href="https://github.com/skboyle/zip-code-calc" target="_blank" rel="noopener noreferrer">
             <FaGithub  />Github
      </a>
      </div>
      <img src="https://raw.githubusercontent.com/skboyle/zip-code-calc/master/zipcal1.png" alt="zipcode-calc" width="600px"/>
      <img src="https://raw.githubusercontent.com/skboyle/zip-code-calc/master/zipcal2.png" alt="zipcode-calc" width="600px"/>
    </div>
  );
};

export default ZipCodeCalculator;