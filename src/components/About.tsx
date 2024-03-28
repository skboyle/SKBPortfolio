import React from 'react';
import LinkBar from './LinkBar';
import '../styles/styles.css';
import LaptopArt from '../images/laptop_art.jpg';

const About: React.FC = () => {
  return (

    <section className="mx-auto my-10 flex max-w-xl flex-col rounded-3xl border p-4 sm:px-16 sm:py-16 lg:max-w-screen-lg lg:flex-row">
    <div className="lg:w-1/2 lg:pr-8">
      <div className="mt-4">
        <h2 className="text-3xl font-medium text-gray-700">Steven Boyle</h2>
        <p className="mt-6 text-gray-600">I'm a software engineer with 6 years of professional experience. When I'm not building websites, I like to cook, make music, and ride my bike!</p>
        {/* <a href="https://www.upwork.com/freelancers/~01c5a4686da5532994" className="mt-2 text-blue-600" rel="noopener noreferrer">5 Stars on UpWork!</a> */}
        <br/>
        <h3>PORTFOLIO BUILT WITH:</h3>
        <h2 className="mt-2 text-gray-600"> 
          Ruby on Rails, React.js, Tailwind.css</h2>
        <br/>
        <h3>LINKS:</h3>
        <LinkBar/>
      </div>
    </div>
    <div className="-order-1 mb-8 lg:order-1 lg:mb-0 lg:w-1/2">
      <img className="border-blue-600/10 rounded-3xl border shadow-md" src={LaptopArt} alt="" />
    </div>
  </section>
  );
};

export default About;