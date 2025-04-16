import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Layout/Header.js';
import Footer from './components/Layout/Footer.js';
import HomePage from './components/Layout/HomePage.js';
import About from './components/About/About.js';
import ProjectsPage from './components/Projects/ProjectsPage.js';
import Experience from './components/Experience/Experience.js';
import Contact from './components/Contact/Contact.js';
import Publications from './components/Publications/Publications.js';
import Skills from './components/Skills/Skills.js';

import 'C:/Users/prave/OneDrive/Documents/bhavan/BK-portfolio/bk-portfolio/src/components/Layout/global.css';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
