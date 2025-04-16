import React from 'react';
import { Link } from 'react-router-dom';
import './FeaturedProject.css';

const FeaturedProjects = () => {
  const projects = [
    {
      id: 1,
      title: "Extended Finite Element Analysis for Linear Elastic Fracture Mechanics",
      description: "Modeled crack propagation in multimaterial composites using XFEM & VCCT. Implemented UMAT for viscoelastic material behavior.",
      technologies: ["XFEM", "VCCT", "UMAT", "Abaqus"],
      demoLink: "#",
      codeLink: "#"
    },
    {
      id: 2,
      title: "Modeling and Analysis of Moving Heat Source",
      description: "Simulated TIG welding of titanium in Abaqus using the Goldak Double Ellipsoid Equation. Developed a FORTRAN subroutine for Goldak heat source modeling.",
      technologies: ["Abaqus", "FORTRAN", "Heat Transfer", "FEA"],
      demoLink: "#",
      codeLink: "#"
    },
    {
      id: 3,
      title: "Optimization of Thermal Barrier Coating in Exhaust Manifolds",
      description: "Designed modifications for improved thermal barrier coatings (TBCs). Utilized AVOF techniques for enhanced performance.",
      technologies: ["TBC", "AVOF", "Thermal Analysis"],
      demoLink: "#",
      codeLink: "#"
    }
  ];

  return (
    <section id="featured-projects" className="featured-projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">Some of my recent engineering work</p>
        
        <div className="project-grid">
          {projects.map(project => (
            <div className="project-card" key={project.id}>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="tech-stack">
                  {project.technologies.map((tech, index) => (
                    <span className="tech-tag" key={index}>{tech}</span>
                  ))}
                </div>
                
                <div className="project-links">
                  <a href={project.demoLink} className="project-link view-demo" target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-external-link-alt"></i> View Demo
                  </a>
                  <a href={project.codeLink} className="project-link view-code" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i> View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="view-all-link">
          <Link to="/projects" className="view-all-btn">View All Projects</Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
