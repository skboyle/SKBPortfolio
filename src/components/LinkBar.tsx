import React from 'react';
import { FaLinkedin, FaGithub, FaFileAlt, FaEnvelope } from 'react-icons/fa';

const resume = require('../images/Steven_Boyle_Resume_2024.pdf');

const LinkBar: React.FC = () => {
  return (
    <div className="icon-container">
      <div className="grid gap-x-4 gap-y-2 grid-cols-4">
        <a href="https://www.linkedin.com/in/skboyle0/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
          <span className="sr-only">LinkedIn Profile</span>
        </a>
        <a href="https://github.com/skboyle" target="_blank" rel="noopener noreferrer">
          <FaGithub />
          <span className="sr-only">GitHub Profile</span>
        </a>
        <a href={resume} download="Steven_Boyle_Resume_2024.pdf">
          <FaFileAlt />
          <span className="sr-only">Download Resume</span>
        </a>
        <a href="mailto:skboylework@gmail.com">
          <FaEnvelope />
          <span className="sr-only">Contact via Email</span>
        </a>
      </div>
    </div>
  );
};

export default LinkBar;
