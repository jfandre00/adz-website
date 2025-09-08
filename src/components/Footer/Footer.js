// src/components/Footer/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import logo from '../../assets/logo.png';
import { FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa'; // Importar ícones

function Footer() {
  return (
    <footer className="main-footer">
      <hr style={{ marginBottom: '2rem' }}/>
      <div className="container footer-content">
        <div className="footer-about">
          <img src={logo} alt="ADZ Construction Co. Logo" className="footer-logo" />
          <p>Building your dream home in the USA with custom, quality, and commitment from foundation to finish.</p>
        </div>
        <div className="footer-links">
          <h4>Navigate</h4>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/portfolio">Our Work</Link></li>
            <li><Link to="/process">Our Process</Link></li>
          </ul>
        </div>
        <div className="footer-contact">
          <h4>Contact</h4>
          <p>(123) 456-7890</p>
          <p>contact@adzconstructionco.com</p>
          <p>123 Construction Ave, Miami, FL</p>
        </div>
        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebook />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 ADZ Construction Co. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;