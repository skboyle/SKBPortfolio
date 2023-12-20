import React from 'react';
import { FaLinkedin, FaGithub, FaFileAlt } from 'react-icons/fa'; // Import the Font Awesome icons


const LinkBar: React.FC = () => {
  return (
    <div>
      <footer>
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/skboyle0/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin /> {/* LinkedIn icon */}
            </a>
          </li>
          <li>
            <a href="https://github.com/skboyle" target="_blank" rel="noopener noreferrer">
              <FaGithub /> {/* GitHub icon */}
            </a>
          </li>
          <li>
            <a href="/Steven_Boyle_Resume_2024.pdf" download="Steven_Boyle_Resume_2024.pdf">
              <FaFileAlt /> {/* Resume icon */}
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default LinkBar;