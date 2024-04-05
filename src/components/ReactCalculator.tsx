import React from 'react';
import { FaGithub } from 'react-icons/fa';
import '../styles/styles.css';
import ReactCalc from '../images/reactcalc.jpg';

const ReactCalculator: React.FC = () => {
  return (
    <main className="mx-auto my-10 flex max-w-xl flex-col rounded-3xl border p-4 sm:px-16 sm:py-16 lg:max-w-screen-lg lg:flex-row">
      <div className="lg:w-1/2 lg:pr-8">
        <div className="mt-4">
          <h1 className="text-3xl font-medium text-gray-700">React Calculator</h1>
          <p className="mt-6 text-gray-600">A simple calculator that handles order of operations.</p>
          <br/>
          <p className="mt-2">STACK: <span className="text-gray-600">React.js, CSS</span></p>
          <br/>
          <a className="gh-link" href="https://github.com/skboyle/ReactCalculator" target="_blank" rel="noopener noreferrer">
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <span style={{ textTransform: 'uppercase', marginRight: '5px' }}>GITHUB:</span> 
              <FaGithub />
            </div>
            <span className="sr-only">GitHub Repository</span>
          </a>
        </div>
      </div>
      <div className="-order-1 mb-8 lg:order-1 lg:mb-0 lg:w-1/2">
        <img className="border-blue-600/10 rounded-3xl border shadow-md" src={ReactCalc} alt="Screenshot of React Calculator application" />
      </div>
    </main>
  );
};

export default ReactCalculator;

