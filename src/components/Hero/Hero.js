import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';
import profilePhoto from 'C:/Users/prave/OneDrive/Documents/bhavan/BK-portfolio/bk-portfolio/src/assets/jpg/bk.jpg';
import resume from 'C:/Users/prave/OneDrive/Documents/bhavan/BK-portfolio/bk-portfolio/src/assets/resume/bhavan_resume.pdf' // Import your photo (update path as needed)

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Bhavankumar Padmanaban</h1>
        <div className="profile-photo-container">
          <img src={profilePhoto} alt="Bhavankumar Padmanaban" className="profile-photo" />
        </div>
        <h2>Mechanical Engineer & Researcher</h2>
        <p>Specialized in piping design, material selection, and computational modeling with expertise in fracture mechanics and additive manufacturing.</p>
        <div className="hero-buttons">
          <Link to="/contact" className="btn btn-primary">Get In Touch</Link>
          <a href={resume} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">View Resume</a>
        </div>
        <div className="social-links">
          <a href="https://in.linkedin.com/in/bhavankumar-padmanaban" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://www.researchgate.net/profile/Bhavankumar-Padmanaban" target="_blank" rel="noopener noreferrer" aria-label="ResearchGate">
            <i className="fab fa-researchgate"></i>
          </a>
          <a href="mailto:bhavan20523@gmail.com" aria-label="Email">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;