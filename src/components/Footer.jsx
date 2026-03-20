import React from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h2>Port<span className="logo-accent">folio</span>.</h2>
          <p>Building beautiful interactive experiences.</p>
        </div>
        
        <div className="footer-social">
          <a href="https://github.com/LathikaDilshan" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/lathikadilshan/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin size={20} />
          </a>
          <a href="mailto:lathikadilshanoffice@gmail.com" aria-label="Email">
            <Mail size={20} />
          </a>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {currentYear} Lathika Dilshan. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
