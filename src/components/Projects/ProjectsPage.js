import React, { useState } from 'react';
import './ProjectPage.css';

const ProjectsPage = () => {
  const [filter, setFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: "Extended Finite Element Analysis for Linear Elastic Fracture Mechanics",
      description: "Modeled crack propagation in multimaterial composites using XFEM & VCCT. Implemented UMAT for viscoelastic material behavior.",
      technologies: ["XFEM", "VCCT", "UMAT", "Abaqus"],
      category: "simulation",
      demoLink: "#",
      codeLink: "#"
    },
    {
      id: 2,
      title: "Modeling and Analysis of Moving Heat Source",
      description: "Simulated TIG welding of titanium in Abaqus using the Goldak Double Ellipsoid Equation. Developed a FORTRAN subroutine for Goldak heat source modeling.",
      technologies: ["Abaqus", "FORTRAN", "Heat Transfer", "FEA"],
      category: "simulation",
      demoLink: "#",
      codeLink: "#"
    },
    {
      id: 3,
      title: "Optimization of Thermal Barrier Coating in Exhaust Manifolds",
      description: "Designed modifications for improved thermal barrier coatings (TBCs). Utilized AVOF techniques for enhanced performance.",
      technologies: ["TBC", "AVOF", "Thermal Analysis"],
      category: "design",
      demoLink: "#",
      codeLink: "#"
    },
    {
      id: 4,
      title: "Design and Development of Impeller",
      description: "Designed and optimized an impeller using SolidWorks and numerical analysis tools to enhance aerodynamic efficiency and structural integrity.",
      technologies: ["SolidWorks", "Fluid Dynamics", "Structural Analysis"],
      category: "design",
      demoLink: "#",
      codeLink: "#"
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section className="projects-section">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">Exploring Engineering Solutions</p>
        
        <div className="project-filters">
          <button 
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All Projects
          </button>
          <button 
            className={`filter-btn ${filter === 'simulation' ? 'active' : ''}`}
            onClick={() => setFilter('simulation')}
          >
            Simulation & Analysis
          </button>
          <button 
            className={`filter-btn ${filter === 'design' ? 'active' : ''}`}
            onClick={() => setFilter('design')}
          >
            Design Projects
          </button>
        </div>
        
        <div className="project-grid">
          {filteredProjects.map(project => (
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
      </div>
    </section>
  );
};

export default ProjectsPage;
