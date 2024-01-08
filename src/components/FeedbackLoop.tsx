import React from 'react';
import { FaGithub } from 'react-icons/fa';
import '../styles/styles.css';

const FeedbackLoop: React.FC = () => {
  return (
    <div className="page" id="feedback-loop">
      <h1>FeedBack Loop</h1>
      <h3>Feedback loop is a forum gives artists submit their songs and received detailed constructive feedback and recomendations with Spotify integration! Designed with an intentionally minimal and art forward aestetic.</h3>
      <h3>Stack: Ruby on Rails, React.js, CSS, Onmiauth</h3>
      <div className="centered-link">

      <a className="gh-link" href="https://github.com/skboyle/Feedback-Loop" target="_blank" rel="noopener noreferrer">
             <FaGithub  /> Github
      </a>
      </div>
      <img src="https://i.imgur.com/jEG1vzh.jpg" alt="First" width="400px"/>
      <img src="https://i.imgur.com/3cn0kbB.jpg" alt="Second" width="400px"/>
      <img src="https://i.imgur.com/VtEp5eX.jpg" alt="Third" width="400px"/>
      <img src="https://i.imgur.com/soZy4vL.png" alt="Fourth" width="400px"/>
    </div>
  );
};

export default FeedbackLoop;