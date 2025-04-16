import React from 'react';
import Hero from '../Hero/Hero';
import About from '../About/About';
import FeaturedProjects from '../Projects/FeaturedProjects';
import Experience from '../Experience/Experience';
import Publications from '../Publications/Publications';
import Skills from '../Skills/Skills';
import Contact from '../Contact/Contact';
import './global.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <Hero />
      <About />
      <FeaturedProjects />
      <Experience />
      <Publications />
      <Skills />
      <Contact />
    </div>
  );
};

export default HomePage;