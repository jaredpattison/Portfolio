import React from 'react';
import linkedin_circle from '../../assets/linkedin_circle.png';
import gmaillogo from '../../assets/gmaillogo.png';
import github_circle from '../../assets/github_circle.png';

const Intro = props => {
  return (
    <div className="intro" id="intro">
      <div className="intro-text">
        <div className="animated fadeInLeft name">{props.name}</div>
        <div className="animated fadeInRight description delay-1s">
          <div className="accent"> {props.description[0]} </div> {props.description[1]} <div className="bleed">{props.description[2]}</div>
        </div>
        <div className="animated fadeInRight icon-container delay-1s">
          <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/jaredpattison/">
            <img alt="LinkedIn profile" className="social" src={linkedin_circle}/>
          </a>
          <a href="mailto:jaredpattison@gmail.com" rel="noopener noreferrer">
            <img alt="Email contact" className="social" src={gmaillogo}/>
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/jaredpattison">
            <img alt="GitHub profile" className="social-invert" src={github_circle}/>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Intro;