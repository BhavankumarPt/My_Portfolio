import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Graduate Engineering Trainee",
      company: "Nadi Airtechnics",
      period: "Nov 2024 - Present",
      location: "Chennai",
      description: [
        "Design and development of industrial fans",
        "Automation of design flow using DriveWorks Express",
        "Design & development of impellers for industrial applications (Fluid Dynamics, ANSYS)"
      ],
      type: "work"
    },
    {
      id: 2,
      title: "Research Fellow",
      company: "Centre for Additive Manufacturing",
      period: "May 2024 - Nov 2024",
      location: "Chennai",
      description: [
        "Computational modeling for destructive testing & heat flow analysis",
        "Interpretation of non-destructive micro-level testing results, focusing on WAAM technology",
        "Fracture behaviour and fracture mechanism study of WAAM fabricated and FDM fabricated specimens"
      ],
      type: "research"
    },
    {
      id: 3,
      title: "Production Engineer (Trainee)",
      company: "Suguna Motors and Pumps",
      period: "Jun 2023 - Jul 2023",
      location: "Tamil Nadu",
      description: [
        "Gained knowledge of machining processes & measuring instruments",
        "Provided design modifications to solve high-hardness motor casing issues"
      ],
      type: "internship"
    },
    {
      id: 4,
      title: "Draughtsman (Trainee)",
      company: "DSNJ Technical Works",
      period: "Apr 2022 - Apr 2022",
      location: "Tamil Nadu",
      description: [
        "Designed and installed heat exchangers",
        "Used SolidWorks weldments for piping layout"
      ],
      type: "internship"
    },
    {
      id: 5,
      title: "B.E - Mechanical Engineering",
      company: "Chennai Institute of Technology",
      period: "2021 - 2025",
      location: "Chennai",
      description: [
        "CGPA: 8.75/10",
        "Focus on mechanical design, material science, and computational modeling"
      ],
      type: "education"
    },
    {
      id: 6,
      title: "Higher Secondary Education",
      company: "Infant Jesus Matriculation Higher Secondary School",
      period: "2019 - 2021",
      location: "Devakottai",
      description: [
        "12th Grade: 92%",
        "10th Grade: 93%"
      ],
      type: "education"
    }
  ];

  const filterExperiences = (type) => {
    return experiences.filter(exp => exp.type === type);
  };

  const workExperiences = filterExperiences('work');
  const researchExperiences = filterExperiences('research');
  const internships = filterExperiences('internship');
  const education = filterExperiences('education');

  const ExperienceItem = ({ experience }) => (
    <div className="timeline-item">
      <div className="timeline-marker"></div>
      <div className="timeline-content">
        <div className="timeline-header">
          <h3>{experience.title}</h3>
          <span className="timeline-period">{experience.period}</span>
        </div>
        <div className="timeline-company">
          <span className="company-name">{experience.company}</span>
          <span className="location">{experience.location}</span>
        </div>
        <ul className="timeline-description">
          {experience.description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <h2 className="section-title">Experience & Education</h2>
        <p className="section-subtitle">My Professional Journey</p>

        <div className="timeline-container">
          <div className="timeline-category">
            <h3 className="category-title">Work Experience</h3>
            <div className="timeline">
              {workExperiences.map(exp => (
                <ExperienceItem key={exp.id} experience={exp} />
              ))}
            </div>
          </div>

          <div className="timeline-category">
            <h3 className="category-title">Research Experience</h3>
            <div className="timeline">
              {researchExperiences.map(exp => (
                <ExperienceItem key={exp.id} experience={exp} />
              ))}
            </div>
          </div>

          <div className="timeline-category">
            <h3 className="category-title">Internships</h3>
            <div className="timeline">
              {internships.map(exp => (
                <ExperienceItem key={exp.id} experience={exp} />
              ))}
            </div>
          </div>

          <div className="timeline-category">
            <h3 className="category-title">Education</h3>
            <div className="timeline">
              {education.map(exp => (
                <ExperienceItem key={exp.id} experience={exp} />
              ))}
            </div>
          </div>
        </div>

        <div className="achievements-section">
          <h3 className="achievements-title">Achievements</h3>
          <ul className="achievements-list">
            <li>Top 8 finalist in IITM-Caterpillar IDP competition</li>
            <li>IMTEX 2024 Forming Academia Runner-up</li>
            <li>SAE Convection Tier 3 Welding Runner-up</li>
            <li>IMTEX 2025 quiz runner</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;