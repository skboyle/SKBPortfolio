import React from 'react';
import { FaGithub } from 'react-icons/fa';
import '../styles/styles.css';

const RRRSS: React.FC = () => {
  return (
    <section className="mx-auto my-10 flex max-w-xl flex-col rounded-3xl border p-4 sm:px-16 sm:py-16 lg:max-w-screen-lg lg:flex-row">
      <div className="lg:w-1/2 lg:pr-8">
        <div className="mt-4">
          <h2 className="text-3xl font-medium text-gray-700">RRRSS</h2>
          <p className="mt-6 text-gray-600">Rails React RSS Reader: View the Slashdot RSS feed and toggle between read/unread status for each article. Sorting and custom RSS feeds coming soon.</p>
          <br/>
          <h3>STACK: Ruby on Rails, React.js, SQLite Bootstrap</h3>
          <br/>
          <a className="gh-link" href="https://github.com/skboyle/RRRSS" target="_blank" rel="noopener noreferrer"><FaGithub/></a>
        </div>
      </div>
      <div className="-order-1 mb-8 lg:order-1 lg:mb-0 lg:w-1/2">
        <img className="border-blue-600/10 rounded-3xl border shadow-md" src="https://private-user-images.githubusercontent.com/31743695/314066137-6c465072-811a-48b7-ad20-d82bda4519fd.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTA4NzA3MjMsIm5iZiI6MTcxMDg3MDQyMywicGF0aCI6Ii8zMTc0MzY5NS8zMTQwNjYxMzctNmM0NjUwNzItODExYS00OGI3LWFkMjAtZDgyYmRhNDUxOWZkLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAzMTklMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMzE5VDE3NDcwM1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWUzNWY4N2Y2Y2RmMjgyNjg3MTM2NWQyYWNjODJiOWY4ZmQ1ZDZkYjJmMzMyZDc0ZWVmMjA2ZGM5Mzc0MTk4OTcmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.lLJU88C2CvZzBuuy79msdYG_XzWFaBSyB6ioQ-3rcTk" alt="" />
        <img className="border-blue-600/10 rounded-3xl border shadow-md" src="https://private-user-images.githubusercontent.com/31743695/314066172-09debace-2a59-4d6c-ad82-da9b78ece50b.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTA4NzA3MjMsIm5iZiI6MTcxMDg3MDQyMywicGF0aCI6Ii8zMTc0MzY5NS8zMTQwNjYxNzItMDlkZWJhY2UtMmE1OS00ZDZjLWFkODItZGE5Yjc4ZWNlNTBiLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAzMTklMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMzE5VDE3NDcwM1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTc0Y2ViOTkyZDVmNTIzM2E0MTJhOWFlNjBlNTJlZWExZjEzNTA1ZmYxZDg3MWEzZWQyN2VlNWYzZTNlODRjYjImWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.xTGqjQvcir7_idCLM4S2w9tZL8BGJlMzvNvKZ650QOA" alt="" />
      </div>
    </section>
  );
};

export default RRRSS;