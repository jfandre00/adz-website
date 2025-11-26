import React from 'react';
import { Link } from 'react-router-dom';
import './AboutPage.css';

// Importar as imagens
import aboutMainImage from '../../assets/about-main.jpg';
import leader1 from '../../assets/leader-1.jpg';
import leader2 from '../../assets/leader-2.jpg';

// Importar os ícones
import { FaAward, FaHandshake, FaUserCheck } from 'react-icons/fa';

function AboutPage() {
  return (
    <div className="about-page">
      <header className="page-header">
        <h1>Your Trusted Partner in Construction</h1>
        <p>We are more than builders; we are a family dedicated to bringing your vision to life with quality, integrity, and passion.</p>
      </header>

      <img src={aboutMainImage} alt="ADZ Construction team working on a project" className="about-main-image" />

      <section className="story-section">
        <div className="container story-content">
          <div className="story-text">
            <h2>Our Story</h2>
            <p>
              Founded on the principles of hard work and excellence, ADZ Construction Co. began as a small family business with a big dream: to build spaces where memories are made. Today, we have grown into a leading construction firm, known for our commitment to quality craftsmanship and client satisfaction.
            </p>
            <p>
              As we expand our operations to the United States, we bring with us a legacy of trust and a forward-thinking approach to modern construction, ensuring every project is a testament to our dedication.
            </p>
          </div>
        </div>
      </section>

      <section className="leaders-section">
        <div className="container">
          <h2>Meet Our Leaders</h2>
          <div className="leaders-grid">
            <div className="leader-card">
              <img src={leader1} alt="Adilson Ferreira" />
              <h3>Adilson Ferreira</h3>
              <p>CEO & Founder</p>
            </div>
            <div className="leader-card">
              <img src={leader2} alt="Kiriaki Fernandes" />
              <h3>Kiriaki Fernandes</h3>
              <p>Head of Design & Investments</p>
            </div>
          </div>
        </div>
      </section>

      <section className="why-choose-us-section">
        <div className="container">
          <h2>Why Choose ADZ?</h2>
          <div className="why-grid">
            <div className="why-item">
              <FaAward className="icon" />
              <div>
                <h3>Unmatched Quality</h3>
                <p>We use only premium materials and partner with the best craftsmen to ensure every detail of your project is built to last.</p>
              </div>
            </div>
            <div className="why-item">
              <FaHandshake className="icon" />
              <div>
                <h3>Total Transparency</h3>
                <p>From the initial quote to the final handover, we believe in clear, honest communication. No surprises, just a smooth process.</p>
              </div>
            </div>
            <div className="why-item">
              <FaUserCheck className="icon" />
              <div>
                <h3>Client-Centric Approach</h3>
                <p>Your vision is our blueprint. We listen to your needs and work collaboratively to create a space that is uniquely yours.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-cta-section">
        <div className="container">
          <h2>Inspired by Our Story?</h2>
          <p>Let's start writing yours. Contact us to discuss how we can bring your next project to life.</p>
          <Link to="/contact" className="btn btn-primary">Get a Free Quote</Link>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;