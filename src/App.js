import React from 'react';
import HeaderNav from './components/HeaderNav';
import Intro from './components/Intro';
import BulletContent from './components/BulletContent';
import Projects from './components/Projects';
import About from './components/About';
import Parallax from './components/Parallax';
import Footer from './components/Footer';
import imageOne from './assets/spaceneedle.jpg';
import imageTwo from './assets/vancouver.jpg';
import './design/reset.scss';
import './design/design.scss';

const App = () => {
  return (
    <>
      <HeaderNav />
      <main>
        <Intro name="JARED PATTISON" description={['FULL-STACK', 'JAVASCRIPT', 'DEVELOPER']}/>
        <BulletContent />
        <Parallax bg={imageOne} tag="Projects" />
        <Projects />
        <Parallax bg={imageTwo} tag="About Me" />
        <About name="JARED"/>
      </main>
      <Footer>
        <div>&copy; {new Date().getFullYear()} JP</div>
      </Footer>
    </>
  );
};

export default App;
