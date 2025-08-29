// src/components/Header/Header.js
import React from 'react';
import { Link } from 'react-router-dom'; // Importar o Link
import './Header.css';
import logo from '../../assets/logo.png';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <Link to="/"> {/* Link para a Home Page */}
          <img src={logo} alt="ADZ Construction Co. Logo" className="logo" />
        </Link>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/our-work">Our Work</Link></li>
            <li><Link to="/our-process">Our Process</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </nav>
        <button className="quote-button">Request a Quote</button>
      </div>
    </header>
  );
}

export default Header;