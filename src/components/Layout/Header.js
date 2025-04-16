import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'C:/Users/prave/OneDrive/Documents/bhavan/BK-portfolio/bk-portfolio/src/components/Layout/Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <div className="logo">
          <Link to="/">Bhavankumar</Link>
        </div>
        
        <div className="mobile-toggle" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        
        <nav className={`main-nav ${isMenuOpen ? 'active' : ''}`}>
          <ul>
            <li><Link to="/" onClick={closeMenu}>Home</Link></li>
            <li><Link to="/about" onClick={closeMenu}>About</Link></li>
            <li><Link to="/projects" onClick={closeMenu}>Projects</Link></li>
            <li><Link to="/experience" onClick={closeMenu}>Experience</Link></li>
            <li><Link to="/publications" onClick={closeMenu}>Publications</Link></li>
            <li><Link to="/skills" onClick={closeMenu}>Skills</Link></li>
            <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;