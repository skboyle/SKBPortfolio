import React from 'react';
import { FaLinkedin, FaGithub, FaFileAlt, FaEnvelope } from 'react-icons/fa'; // Import the Font Awesome icons


const LinkBar: React.FC = () => {
  return (
    <div className="icon-container">
      <div className="grid gap-x-4 gap-y-2 grid-cols-4">
        <a href="https://www.linkedin.com/in/skboyle0/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/skboyle" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://github.com/skboyle/SKBPortfolio/blob/main/SKBR2024.pdf" download="Steven_Boyle_Resume_2024.pdf">
          <FaFileAlt />
        </a>
        <a href="mailto:skboylework@gmail.com">
          <FaEnvelope />
        </a>
      </div>
    </div>
  );
};

export default LinkBar;