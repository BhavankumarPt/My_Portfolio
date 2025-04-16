import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Design & Engineering",
      skills: ["SP3D", "SolidWorks", "E3D", "ASME B31", "API", "Pipe Sizing", "ISO Drafting", "Pipe codes & standards"]
    },
    {
      title: "Analysis & Simulation",
      skills: ["Abaqus CAE", "FEED", "Fluid dynamics", "Thermodynamics", "Structural analysis", "Numerical Analysis"]
    },
    {
      title: "Programming & Software",
      skills: ["Python", "C", "Java", "VBA", "MS Office", "AutoCAD"]
    },
    {
      title: "Soft Skills",
      skills: ["Problem Solving", "Project Coordination", "Technical Writing", "Team Collaboration"]
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <p className="section-subtitle">Technical Expertise & Competencies</p>
        
        <div className="skills-container">
          {skillCategories.map((category, index) => (
            <div className="skill-category" key={index}>
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-grid">
                {category.skills.map((skill, skillIndex) => (
                  <div className="skill-item" key={skillIndex}>
                    <span className="skill-name">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="certifications">
          <h3>Certifications & Trainings</h3>
          <div className="certification-list">
            <div className="certification-item">
              <span className="certification-name">Piping Design (SP3D, E3D)</span>
              <span className="certification-issuer">Kagira Solution (Ongoing, 2025)</span>
            </div>
            <div className="certification-item">
              <span className="certification-name">Fundamentals of Piping</span>
              <span className="certification-issuer">Udemy (2025)</span>
            </div>
            <div className="certification-item">
              <span className="certification-name">Industrial Robotics and Automation</span>
              <span className="certification-score">Score: 53/100</span>
            </div>
            <div className="certification-item">
              <span className="certification-name">Foundry 4.0</span>
              <span className="certification-issuer">IIT Tripathi & Nelcast Ltd (2023)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;