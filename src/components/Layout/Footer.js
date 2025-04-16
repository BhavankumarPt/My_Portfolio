import React from 'react';
import styled from 'styled-components';
import { FaLinkedin, FaResearchgate, FaEnvelope, FaPhone } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: var(--secondary-color);
  color: var(--white);
  padding: 2rem 0;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  padding: 0 1rem;
`;

const FooterSection = styled.div`
  h3 {
    color: var(--white);
    margin-bottom: 1.5rem;
    font-size: 1.2rem;
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -8px;
      left: 0;
      width: 40px;
      height: 3px;
      background-color: var(--primary-color);
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  
  a {
    color: var(--white);
    font-size: 1.5rem;
    transition: var(--transition);
    
    &:hover {
      color: var(--primary-color);
      transform: translateY(-3px);
    }
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  
  .contact-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    
    svg {
      color: var(--primary-color);
    }
  }
`;

const Copyright = styled.div`
  text-align: center;
  padding-top: 2rem;
  margin-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 0.9rem;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <h3>About Me</h3>
          <p>Mechanical Engineer with expertise in piping design and material selection. Skilled in various CAD tools and passionate about industrial applications.</p>
        </FooterSection>
        
        <FooterSection>
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/publications">Publications</a></li>
            <li><a href="/experience">Experience</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </FooterSection>
        
        <FooterSection>
          <h3>Connect With Me</h3>
          <SocialLinks>
            <a href="https://in.linkedin.com/in/bhavankumar-padmanaban" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://www.researchgate.net/profile/Bhavankumar-Padmanaban" target="_blank" rel="noopener noreferrer">
              <FaResearchgate />
            </a>
            <a href="mailto:bhavan20523@gmail.com">
              <FaEnvelope />
            </a>
          </SocialLinks>
        </FooterSection>
        
        <FooterSection>
          <h3>Contact Info</h3>
          <ContactInfo>
            <div className="contact-item">
              <FaEnvelope />
              <span>bhavan20523@gmail.com</span>
            </div>
            <div className="contact-item">
              <FaPhone />
              <span>+91-7397509310</span>
            </div>
            <p>Chennai, Tamil Nadu, India - 600069</p>
          </ContactInfo>
        </FooterSection>
      </FooterContent>
      
      <Copyright>
        &copy; {new Date().getFullYear()} Bhavankumar Padmanaban. All Rights Reserved.
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;