import React, { useState, useEffect } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const HeaderNav = () => {
  const [calcedOffset, setCalcedOffset] = useState(0);

  useEffect(() => {
    const fontSize = Number(window.getComputedStyle(document.body).getPropertyValue('font-size').match(/\d+/)[0]);
    setCalcedOffset(fontSize * 4);
  }, []);

  return (
    <div className="header-nav">
      <nav>
        <div>
          <ul id="menu">
            <li>
              <AnchorLink offset={calcedOffset} href="#intro">HOME</AnchorLink>
            </li>
            <li>
              <AnchorLink offset={calcedOffset} href="#projects">PROJECTS</AnchorLink>
            </li>
            <li>
              <AnchorLink offset={calcedOffset} href="#about">ABOUT ME</AnchorLink>
            </li>
            <li>
              <a target="_blank" rel="noopener noreferrer" href="JaredPattisonResume.pdf">RESUME</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default HeaderNav;