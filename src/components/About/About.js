import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCode, FaTools, FaChartLine } from 'react-icons/fa';

const AboutSection = styled.section`
  padding: 5rem 0;
  background-color: white;
`;

const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 3rem;
  position: relative;
  font-size: 2.5rem;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background-color: var(--primary-color);
  }
`;

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const AboutText = styled.div`
  p {
    margin-bottom: 1.5rem;
    line-height: 1.8;
    color: var(--dark-gray);
  }
`;

const HighlightsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
`;

const HighlightItem = styled(motion.div)`
  background-color: var(--light-gray);
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: var(--shadow);
  transition: var(--transition);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
  }
  
  .icon {
    font-size: 2rem;
    color: var(--primary-color);
    margin-bottom: 1rem;
  }
  
  h3 {
    margin-bottom: 0.5rem;
    font-size: 1.2rem;
  }
  
  p {
    font-size: 0.9rem;
    color: var(--dark-gray);
  }
`;

const About = () => {
  const highlightVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
      }
    })
  };

  return (
    <AboutSection id="about">
      <AboutContainer>
        <SectionTitle>About Me</SectionTitle>
        
        <AboutContent>
          <AboutText>
            <p>
              I am a motivated Mechanical Engineer with specialized training in piping design and material selection. 
              My expertise spans across AutoCAD, SolidWorks, SP3D, and E3D, complemented by a thorough understanding 
              of ASME, API, and ISO standards.
            </p>
            <p>
              Currently serving as a Graduate Engineering Trainee at Nadi Airtechnics, I focus on the design and development 
              of industrial fans, automating design flows using DriveWorks Express, and enhancing impellers for various 
              industrial applications through fluid dynamics and ANSYS.
            </p>
            <p>
              My academic journey at Chennai Institute of Technology, where I'm pursuing B.Tech. in Mechanical Engineering,
              has equipped me with strong problem-solving skills and a deep interest in industrial applications. I've maintained 
              a CGPA of 8.75/10, reflecting my commitment to academic excellence.
            </p>
          </AboutText>
          
          <HighlightsGrid>
            <HighlightItem
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={highlightVariants}
            >
              <div className="icon"><FaGraduationCap /></div>
              <h3>Education</h3>
              <p>B.Tech. in Mechanical Engineering from Chennai Institute of Technology with 8.75 CGPA</p>
            </HighlightItem>
            
            <HighlightItem
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={highlightVariants}
            >
              <div className="icon"><FaCode /></div>
              <h3>Technical Skills</h3>
              <p>Proficient in SP3D, SolidWorks, E3D, Python, C, Java, VBA, and Abaqus CAE</p>
            </HighlightItem>
            
            <HighlightItem
              custom={2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={highlightVariants}
            >
              <div className="icon"><FaTools /></div>
              <h3>Industry Knowledge</h3>
              <p>Expert in pipe sizing, fluid dynamics, ASME B31, API standards, and piping fabrication processes</p>
            </HighlightItem>
            
            <HighlightItem
              custom={3}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={highlightVariants}
            >
              <div className="icon"><FaChartLine /></div>
              <h3>Research</h3>
              <p>Published in multiple journals with focus on additive manufacturing and material testing</p>
            </HighlightItem>
          </HighlightsGrid>
        </AboutContent>
      </AboutContainer>
    </AboutSection>
  );
};

export default About;