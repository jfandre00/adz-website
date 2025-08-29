// src/components/Footer/Footer.js
import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-section">
          <h4>Navigate</h4>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/our-work">Our Work</a></li>
            <li><a href="/careers">Careers</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact</h4>
          <p>(123) 456-7890</p>
          <p>contact@adzconstructionco.com</p>
          <p>123 Main Street, Miami, FL</p>
        </div>
        <div className="footer-section">
          <h4>Social</h4>
          {/* Adicionar ícones de redes sociais aqui mais tarde */}
          <p>Instagram / Facebook / LinkedIn</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 ADZ Construction Co. All Rights Reserved. | <a href="/privacy-policy">Privacy Policy</a></p>
      </div>
    </footer>
  );
}

export default Footer;
