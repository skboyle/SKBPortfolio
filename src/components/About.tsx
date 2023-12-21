import React from 'react';
import '../styles/styles.css';

const About: React.FC = () => {
  return (
    <div className="page" id="about">
      <h1>Steven Boyle</h1>
      <h3>Hi! I'm a software engineer with 6 years of professional experience. I have experience building RESTful APIs, Test Driven Development, End-to-End Testing, Micro-Service Infulstructure, E-Commerce Integration, Cloud Based Services, Database Updates, Monitoring, Continuous Deployment, Agile</h3> 
      <h3>When I'm not building websites I like to paint, illustrate, make music, cook and ride my bike!</h3> 
      <h3>You can visit my LinkedIn and Github, download my resume, or send me an email by using the icons at the bottom of the page. </h3>
      <img src="https://i.imgur.com/BnV5nqG.jpgg" alt="laptop" width="600px"/>
    </div>
  );
};

export default About;