import React from 'react';
import { FaGithub } from 'react-icons/fa'; // Import the Font Awesome icons

import '../styles/styles.css';

const ReactCalculator: React.FC = () => {
  return (
    <section className="mx-auto my-10 flex max-w-xl flex-col rounded-3xl border p-4 sm:px-16 sm:py-16 lg:max-w-screen-lg lg:flex-row">
    <div className="lg:w-1/2 lg:pr-8">
      <div className="mt-4">
        <h2 className="text-3xl font-medium text-gray-700">React Calculator</h2>
        <p className="mt-6 text-gray-600">A simple calculator that handles order of operations.</p>
        <br/>
        <h3>STACK: React.js, CSS</h3>
        <br/>
        <a className="gh-link" href="https://github.com/skboyle/ReactCalculator" target="_blank" rel="noopener noreferrer"><FaGithub/></a>
      </div>
    </div>
    <div className="-order-1 mb-8 lg:order-1 lg:mb-0 lg:w-1/2">
      <img className="border-blue-600/10 rounded-3xl border shadow-md" src="https://private-user-images.githubusercontent.com/31743695/289972680-c7f2608a-fe10-41a2-a740-c1ac82e79610.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTA4NTcyNTcsIm5iZiI6MTcxMDg1Njk1NywicGF0aCI6Ii8zMTc0MzY5NS8yODk5NzI2ODAtYzdmMjYwOGEtZmUxMC00MWEyLWE3NDAtYzFhYzgyZTc5NjEwLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAzMTklMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMzE5VDE0MDIzN1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWMyM2UwMjNjZjhjN2Y5MmZmNmZlNmMwNDNlNGU2ODA1OTI5ODI1Y2RmNWVjMmVhZjUyNmM1YTRhMzU3YTViYWUmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.kACx7yLKQyCVaZOUJyiRKKlc_UvVFoH5yFwiQpz_hfo" alt="" />
    </div>
  </section>
  );
};

export default ReactCalculator;