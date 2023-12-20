import React from 'react';
import { FaGithub } from 'react-icons/fa'; // Import the Font Awesome icons
import '../styles/styles.css';

const FeedbackLoop: React.FC = () => {
  return (
    <div className="page" id="feedback-loop">
      <h1>FeedBack Loop</h1>
      <h3>Feedback loop is a forum gives artists submit their songs and received detailed constructive feedback and recomendations with Spotify integration!</h3>
      <h3>Stack: Ruby on Rails, React.js, custom CSS.</h3>
      <div className="centered-link">

      <a className="gh-link" href="https://github.com/skboyle" target="_blank" rel="noopener noreferrer">
             <FaGithub  /> {/* GitHub icon */}Github
      </a>
      </div>
      <img src="https://i.imgur.com/jEG1vzh.jpg" alt="First" width="500px"/>
      <img src="https://i.imgur.com/3cn0kbB.jpg" alt="Second" width="500px"/>
      <img src="https://i.imgur.com/VtEp5eX.jpg" alt="Third" width="500px"/>
      <img src="https://i.imgur.com/soZy4vL.png" alt="Fourth" width="500px"/>
    </div>
  );
};

export default FeedbackLoop;