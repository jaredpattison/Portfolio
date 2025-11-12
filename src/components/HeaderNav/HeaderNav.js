import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const HeaderNav = () => {
  const fontSize = Number(window.getComputedStyle(document.body).getPropertyValue('font-size').match(/\d+/)[0]);
  const calcedOffset = fontSize * 4;

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
              <a target="_blank" href="JaredPattisonResume.pdf">RESUME</a>
            </li>
          </ul>

        </div>
      </nav>
    </div>
  );
};

export default HeaderNav;