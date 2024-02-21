import React from 'react';
import { FaGithub } from 'react-icons/fa'; // Import the Font Awesome icons
import '../styles/styles.css';

const ZipCodeCalculator: React.FC = () => {
  return (
    <section className="mx-auto my-10 flex max-w-xl flex-col rounded-3xl border p-4 sm:px-16 sm:py-16 lg:max-w-screen-lg lg:flex-row">
    <div className="lg:w-1/2 lg:pr-8">
      <div className="mt-4">
        <h2 className="text-3xl font-medium text-gray-700">Zipcode Calculator</h2>
        <p className="mt-6 text-gray-600">Enter zipcodes to calculate the distance between two points using latitude and longitude.</p>
        <br/>
        <h3>STACK: Ruby on Rails, React.js, Postgresql, CSS</h3>
        <br/>
        <a className="gh-link" href="https://github.com/skboyle/zip-code-calc" target="_blank" rel="noopener noreferrer"><FaGithub/></a>
      </div>
    </div>
    <div className="-order-1 mb-8 lg:order-1 lg:mb-0 lg:w-1/2">
      <img className="border-blue-600/10 rounded-3xl border shadow-md" src="https://raw.githubusercontent.com/skboyle/zip-code-calc/master/zipcal1.png" alt="" />
      <img className="border-blue-600/10 rounded-3xl border shadow-md" src="https://raw.githubusercontent.com/skboyle/zip-code-calc/master/zipcal1.png" alt="" />

    </div>
  </section>
  );
};

export default ZipCodeCalculator;