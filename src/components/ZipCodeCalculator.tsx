import React from 'react';
import { FaGithub } from 'react-icons/fa';
import '../styles/styles.css';
import Zipcal1 from '../images/zipcal1.jpg';
import Zipcal2 from '../images/zipcal2.jpg';

const ZipCodeCalculator: React.FC = () => {
  return (
    <main className="mx-auto my-10 flex max-w-xl flex-col rounded-3xl border p-4 sm:px-16 sm:py-16 lg:max-w-screen-lg lg:flex-row">
      <div className="lg:w-1/2 lg:pr-8">
        <div className="mt-4">
          <h1 className="text-3xl font-medium text-gray-700">Zipcode Calculator</h1>
          <p className="mt-6 text-gray-600">Enter zipcodes to calculate the distance between two points using latitude and longitude.</p>
          <br/>
          <p className="mt-2">STACK: <span className="text-gray-600">Ruby on Rails, React.js, Postgresql, CSS</span></p>
          <br/>
          <a className="gh-link" href="https://github.com/skboyle/zip-code-calc" target="_blank" rel="noopener noreferrer">
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <span style={{ textTransform: 'uppercase', marginRight: '5px' }}>GITHUB:</span> 
              <FaGithub />
            </div>
            <span className="sr-only">GitHub Repository</span>
          </a>
        </div>
      </div>
      <div className="-order-1 mb-8 lg:order-1 lg:mb-0 lg:w-1/2">
        <img className="border-blue-600/10 rounded-3xl border shadow-md" src={Zipcal1} alt="Screenshot of Zipcode Calculator application" />
        <img className="border-blue-600/10 rounded-3xl border shadow-md" src={Zipcal2} alt="Screenshot of Zipcode Calculator application" />
      </div>
    </main>
  );
};

export default ZipCodeCalculator;
