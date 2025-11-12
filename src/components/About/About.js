import React from 'react';
import about from './about.json';
import AboutParagraph from '../AboutParagraph';
import picture from '../../assets/aboutme.jpg';

const About = () => {
  return (
    <div className='about-container' id='about'>
      <figure>
        <img
          src={picture}
          alt="About me"
          title="Author"
        />
      </figure>

      <div className="about-description">
        <h1>HI, MY NAME IS <span>{about.title}</span>.</h1>
        {about.content.map((section, i) => <AboutParagraph key={i} content={section} />)}
      </div>
    </div>
  );
};

export default About;