import React from 'react';
import { FaGithub } from 'react-icons/fa';
import '../styles/styles.css';

const AFilmBy: React.FC = () => {
  return (
    <section className="mx-auto my-10 flex max-w-xl flex-col rounded-3xl border p-4 sm:px-16 sm:py-16 lg:max-w-screen-lg lg:flex-row">
      <div className="lg:w-1/2 lg:pr-8">
        <div className="mt-4">
          <h2 className="text-3xl font-medium text-gray-700">A Film By</h2>
          <p className="mt-6 text-gray-600">Portfolio website for film director Amanda Kramer.</p>
          <br/>
          <h3>VISIT: <a className="website-link" href="https://github.com/skboyle/AFilmBy">A Film By</a></h3>
          <br/>
          <h3>STACK: Javascript, JQuery, SCSS</h3>
          <br/>
          <a className="gh-link" href="https://github.com/skboyle/AFilmBy" target="_blank" rel="noopener noreferrer"><FaGithub/></a>
        </div>
      </div>
      <div className="-order-1 mb-8 lg:order-1 lg:mb-0 lg:w-1/2">
        <img className="border-blue-600/10 rounded-3xl border shadow-md" src="https://i.imgur.com/Tq6dcao.png" alt="" />
      </div>
    </section>
  );
};

export default AFilmBy;