import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import About from './About';
import FeedbackLoop from './FeedbackLoop';
import ReactCalculator from './ReactCalculator';
import ZipCodeCalculator from './ZipCodeCalculator';
import '../styles/NavBar.css';

interface NavbarProps {
}

const NavBar: React.FC<NavbarProps> = () => {
  return (
    <div>
      <nav>
      <ul>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/feedback-loop">Feedback Loop</Link></li>
        <li><Link to="/react-calculator">React Calculator</Link></li>
        <li><Link to="/zip-code-calculator">Zip Code Calculator</Link></li>
      </ul>
      </nav>
    </div>
  );
};

export default NavBar;