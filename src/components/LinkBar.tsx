import React from 'react';
import { FaLinkedin, FaGithub, FaFileAlt, FaEnvelope } from 'react-icons/fa'; // Import the Font Awesome icons


const LinkBar: React.FC = () => {
  return (
    <div>
      <footer>
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/skboyle0/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a href="https://github.com/skboyle" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
          </li>
          <li>
            <a href="/Steven_Boyle_Resume_2024.pdf" download="Steven_Boyle_Resume_2024.pdf">
              <FaFileAlt />
            </a>
          </li>
          <li>
            <a href="mailto:skboylework@gmail.com">
              <FaEnvelope />
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default LinkBar;