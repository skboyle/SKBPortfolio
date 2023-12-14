import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import About from './About';
import FeedbackLoop from './FeedbackLoop';
import ReactCalculator from './ReactCalculator';
import ZipCodeCalculator from './ZipCodeCalculator';

interface NavbarProps {
}

const NavBar: React.FC<NavbarProps> = () => {
  const [activeComponent, setActiveComponent] = useState<string>('about');

  const renderComponent = () => {
    switch (activeComponent) {
      case 'about':
        return <About />;
      case 'feedback-loop':
        return <FeedbackLoop />;
      case 'react-calculator':
        return <ReactCalculator />;
      case 'zip-code-calculator':
        return <ZipCodeCalculator />;
      default:
        return null;
    }
  };

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