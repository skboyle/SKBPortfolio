import React from 'react';
import { FaGithub } from 'react-icons/fa';
import '../styles/styles.css';

const FeedbackLoop: React.FC = () => {
  return (
    <section className="mx-auto my-10 flex max-w-xl flex-col rounded-3xl border p-4 sm:px-16 sm:py-16 lg:max-w-screen-lg lg:flex-row">
      <div className="lg:w-1/2 lg:pr-8">
        <div className="mt-4">
          <h2 className="text-3xl font-medium text-gray-700">FeedBack Loop</h2>
          <p className="mt-6 text-gray-600">Feedback loop is a social forum for music makers. Artists can submit their songs and received detailed constructive feedback from peers though a detailed form. Users can save favorites and make recomendations with Spotify integration. Designed with an intentionally minimal and art forward aestetic.</p>
          <br/>
          <h3>STACK: Ruby on Rails, React.JS, Omniauth, CSS</h3>
          <br/>
          <a className="gh-link" href="https://github.com/skboyle/Feedback-Loop" target="_blank" rel="noopener noreferrer"><FaGithub/></a>
        </div>
      </div>
      <div className="-order-1 mb-8 lg:order-1 lg:mb-0 lg:w-1/2">
        <img className="border-blue-600/10 rounded-3xl border shadow-md" src="https://i.imgur.com/3cn0kbB.jpg" alt="" />
        <img className="border-blue-600/10 rounded-3xl border shadow-md" src="https://i.imgur.com/soZy4vL.png" alt="" />
      </div>
    </section>
  );
};

export default FeedbackLoop;