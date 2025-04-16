import React from 'react';
import './publications.css';

const Publications = () => {
  const publications = [
    {
      id: 1,
      title: "Comparison of Fracture Toughness on Innovative Material Fabricated by Additive Manufacturing",
      journal: "Journal of Materials Engineering and Performance (Springer, 2025)",
      doi: "10.1007/s11665-025-10816-3",
      publisher: "American Society of Metals"
    },
    {
      id: 2,
      title: "Characterization and Testing of Functionally Graded Material (SS 347/SS 316L) Fabricated Through WAAM",
      journal: "Journal of Mechanical Engineering (SAGE, 2024)",
      status: "in review"
    },
    {
      id: 3,
      title: "Microstructural features and correlation of stress intensity factor for stainless steel(SS304) fabricated through wire arc additive manufacturing",
      journal: "Steel Research International",
      status: "in review"
    },
    {
      id: 4,
      title: "Innovative Material Fabricated via Additive Manufacturing: A Comparative Study on Fracture Toughness",
      journal: "Iranian Journal of Science and Technology Transactions of Mechanical Engineering (Springer, 2025)",
      doi: "10.1007/s40997-025-00849-3"
    },
    {
      id: 5,
      title: "Additively Fabricated Innovative Material: Experimental and Simulation Approach for Fracture Toughness Estimation",
      journal: "Mechanics of Advanced Materials and Structures (Taylor and Francis, 2025)",
      doi: "10.1080/15376494.2025.2484432",
      status: "will be online"
    }
  ];

  return (
    <section id="publications" className="publications-section">
      <div className="container">
        <h2 className="section-title">Publications</h2>
        <p className="section-subtitle">Research Work & Academic Contributions</p>
        
        <div className="publications-grid">
          {publications.map((pub) => (
            <div className="publication-card" key={pub.id}>
              <h3 className="publication-title">{pub.title}</h3>
              <p className="publication-journal">{pub.journal}</p>
              {pub.doi && <p className="publication-doi">DOI: <a href={`https://doi.org/${pub.doi}`} target="_blank" rel="noopener noreferrer">{pub.doi}</a></p>}
              {pub.publisher && <p className="publication-publisher">{pub.publisher}</p>}
              {pub.status && <p className="publication-status">Status: {pub.status}</p>}
            </div>
          ))}
        </div>
        
        <div className="research-profiles">
          <h3>Research Profiles</h3>
          <div className="profile-links">
            <a href="https://www.researchgate.net/profile/Bhavankumar-Padmanaban" target="_blank" rel="noopener noreferrer" className="profile-link">
              ResearchGate
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publications;