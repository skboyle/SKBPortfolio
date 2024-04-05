import React from 'react';
import LinkBar from './LinkBar';
import '../styles/styles.css';
import LaptopArt from '../images/laptop_art.jpg';

const About: React.FC = () => {
  return (
    <main className="mx-auto my-10 flex max-w-xl flex-col rounded-3xl border p-4 sm:px-16 sm:py-16 lg:max-w-screen-lg lg:flex-row">
      <div className="lg:w-1/2 lg:pr-8">
        <div className="mt-4">
          <h1 className="text-3xl font-medium text-gray-700">Steven Boyle</h1>
          <p className="mt-6 text-gray-600">I'm a Full-Stack Software Engineer who specializes in Ruby on Rails and JavaScript with React. I have expertise in Agile Development, Test-Driven Development, Object-Oriented Programming, End-to-End Testing, Monitoring, Hosting, Cloud Services, REST APIs, E-Commerce, Payment Integration, Authorization, Secure Protocols, Microservice Architecture, Relational Databases, CRMs, and LMSs.</p>
          <p className="mt-2">PORTFOLIO BUILT WITH: <br/> <span className="text-gray-600">Ruby on Rails, React.js, Tailwind.css</span></p>
          <p className="mt-2">LINKS:</p>
          <LinkBar />
        </div>
      </div>
      <div className="-order-1 mb-8 lg:order-1 lg:mb-0 lg:w-1/2">
        <img className="border-blue-600/10 rounded-3xl border shadow-md" src={LaptopArt} alt="Illustration of a laptop" />
      </div>
    </main>
  );
};

export default About;
