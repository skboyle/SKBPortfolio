import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/styles.css';

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