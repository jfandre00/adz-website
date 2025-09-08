import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';
import logo from '../../assets/logo.png'; 
import { FaBars, FaTimes } from 'react-icons/fa';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Esta função fecha o menu quando um link é clicado 
  const closeMobileMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo-link" onClick={closeMobileMenu}>
          <img src={logo} alt="ADZ Construction Co. Logo" className="logo" />
        </Link>
        
        <nav className={isMenuOpen ? 'nav-menu active' : 'nav-menu'}>
          <ul className="nav-list">
            <li><NavLink to="/" className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"} onClick={closeMobileMenu}>Home</NavLink></li>
            <li><NavLink to="/about" className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"} onClick={closeMobileMenu}>About Us</NavLink></li>
            <li><NavLink to="/services" className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"} onClick={closeMobileMenu}>Services</NavLink></li>
            <li><NavLink to="/portfolio" className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"} onClick={closeMobileMenu}>Our Work</NavLink></li>
            <li><NavLink to="/process" className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"} onClick={closeMobileMenu}>Our Process</NavLink></li>
            <li><NavLink to="/contact" className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"} onClick={closeMobileMenu}>Contact Us</NavLink></li>
          </ul>
          <Link to="/contact" className="quote-button-link" onClick={closeMobileMenu}>
            <button className="quote-button nav-quote-btn">Request a Quote</button>
          </Link>
        </nav>

        <div className="hamburger" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </header>
  );
}

export default Header;