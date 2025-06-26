import React from 'react';
import './footer.scss';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="footer-container">
      <div className="left-align">
        <p>
          Developed & Designed with <span className="purple-heart">❤️</span> @   
          <a href="https://www.linkedin.com/in/pranjal-kundu-48606b2b3/" target="_blank" rel="noopener noreferrer" className="footer-link">Me</a>.
        </p>
      </div>
      <div className="center-align">
        <p>&copy; Pranjal Kundu 2025</p>
      </div>
      <div className="right-align social-icons">
        <a href="https://github.com/Zzz-Pranjal-Kundu" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/pranjal-kundu-48606b2b3/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="mailto:pranjalkundu@example.com" target="_blank" rel="noopener noreferrer"><FaEnvelope /></a>
      </div>
    </footer>
  );
};

export default Footer;
