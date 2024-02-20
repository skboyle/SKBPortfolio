import React from 'react';
import LinkBar from './LinkBar';
import '../styles/styles.css';

const About: React.FC = () => {
  return (

    <section className="mx-auto my-10 flex max-w-xl flex-col rounded-3xl border p-4 sm:px-16 sm:py-16 lg:max-w-screen-lg lg:flex-row">
    <div className="lg:w-1/2 lg:pr-8">
      <div className="mt-4">
        <h2 className="text-3xl font-medium text-gray-700">Steven Boyle</h2>
        <p className="mt-6 text-gray-600">I'm a software engineer with 6 years of professional experience. When I'm not building websites I like to cook, make music, and ride my bike!</p>
        <br/>
        {/* <h3>LANGUAGES:</h3>
        <p className="mt-2 text-gray-600"> 
        Ruby, Python, Java, Kotlin, Javascript, Typescript, HTML, CSS, SQL, Bash, Shell
        </p>
        <h3>FRAMEWORKS:</h3>
        <p className="mt-2 text-gray-600"> 
        Agile, Airbrake, Amazon Web Services (AWS), Android, Bootstrap, Bundler, Capistrano, Carrierwave, Cloudwatch, Cucumber, Databricks, Datadog, Devise, Django, Docker, DotENV, EC2, ElastiCache, Express, Figma, FactoryBot, Git, GitHub, Google Cloud Platform (GCP), Google Cloud Storage, IOS, Jasmine, JWT, JQuery, Kubernetes, Minitest, MySQL, Node.js, Okta, Omniauth, Postgres, Pry, Puma, React, React Native.js, React Testing Library, Redis, Redux, REST API, Route 53, S3, SASS, SCRUM, Sinatra, Snowflake, Spring, Spring Boot, Tailwind.css, Terraform, Test Driven Development, Web</p> */}
        <h3>PORTFOLIO BUILT WITH:</h3>
        <p className="mt-2 text-gray-600"> 
          Ruby on Rails, React.js, Tailwind.css</p>
        <br/>
        <h3>LINKS:</h3>
        <LinkBar/>
      </div>
    </div>
    <div className="-order-1 mb-8 lg:order-1 lg:mb-0 lg:w-1/2">
      <img className="border-blue-600/10 rounded-3xl border shadow-md" src="https://i.imgur.com/BnV5nqG.jpgg" alt="" />
    </div>
  </section>
  );
};

export default About;