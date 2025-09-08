import React from 'react';
import './HomePage.css';
import teamImage from '../../assets/team-image.jpg';
import project1 from '../../assets/project-1.jpg';
import project2 from '../../assets/project-2.jpg';
import project3 from '../../assets/project-3.jpg';
import { FaHardHat, FaPaintRoller, FaBuilding } from 'react-icons/fa';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1>Building Your Dream Home in the USA</h1>
        <p>Custom, quality, and commitment from foundation to finish.</p>
        <div className="hero-buttons">
          <button className="btn btn-primary">View Our Work</button>
          <button className="btn btn-secondary">Get a Free Quote</button>
        </div>
      </div>
    </section>
  );
};

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="container about-container">
        <div className="about-image">
          <img src={teamImage} alt="ADZ Construction Team" />
        </div>
        <div className="about-content">
          <h2>Your Trusted Partner in Construction</h2>
          <p>
            For over 15 years, ADZ Construction Co. has been turning visions into reality. We are a family-owned business dedicated to delivering exceptional quality and building lasting relationships with our clients across the United States.
          </p>
          <a href="/about" className="learn-more-link">Learn More About Us →</a>
        </div>
      </div>
    </section>
  );
};

const ServicesSection = () => {
  return (
    <section className="services-section">
      <div className="container">
        <h2 className="section-title">What We Do</h2>
        <div className="services-grid">
          <div className="service-card">
            <FaHardHat className="service-icon" />
            <h3>Custom Home Building</h3>
            <p>We build unique homes tailored to your lifestyle and preferences.</p>
          </div>
          <div className="service-card">
            <FaPaintRoller className="service-icon" />
            <h3>Remodeling & Renovations</h3>
            <p>Transforming your existing space into something new and beautiful.</p>
          </div>
          <div className="service-card">
            <FaBuilding className="service-icon" />
            <h3>Commercial Projects</h3>
            <p>Delivering quality construction for your business needs.</p>
          </div>
        </div>
        <div className="text-center">
            <button className="btn btn-primary">See All Services</button>
        </div>
      </div>
    </section>
  );
};

const PortfolioSection = () => {
  return (
    <section className="portfolio-section">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="portfolio-grid">
          <div className="project-card">
            <img src={project1} alt="Modern Custom Home" />
            <div className="project-overlay">
              <h3>Modern Custom Home</h3>
              <p>Miami, FL</p>
            </div>
          </div>
          <div className="project-card">
            <img src={project2} alt="Kitchen Remodeling" />
            <div className="project-overlay">
              <h3>Kitchen Remodeling</h3>
              <p>Orlando, FL</p>
            </div>
          </div>
          <div className="project-card">
            <img src={project3} alt="Commercial Office Space" />
            <div className="project-overlay">
              <h3>Commercial Office Space</h3>
              <p>Tampa, FL</p>
            </div>
          </div>
        </div>
        <div className="text-center">
            <button className="btn btn-primary">Explore Our Full Portfolio</button>
        </div>
      </div>
    </section>
  );
};

// Nova secção "Testimonials"
const TestimonialsSection = () => {
  return (
    <section className="testimonials-section">
      <div className="container">
        <h2 className="section-title">What Our Clients Say</h2>
        <div className="testimonial-content">
          <blockquote>
            “ADZ made our dream home a reality. The process was smooth, the communication was excellent, and the quality is outstanding. We couldn't be happier and highly recommend them!”
          </blockquote>
          <cite>
            <strong>John & Jane Doe</strong>
            <br />
            Miami, FL
          </cite>
        </div>
      </div>
    </section>
  );
};

// Nova secção "Final CTA"
const CtaSection = () => {
  return (
    <section className="cta-section">
      <div className="container">
        <h2>Ready to Start Your Project?</h2>
        <p>Let's talk about your vision. Contact us today for a no-obligation consultation.</p>
        <button className="btn btn-primary">Request a Free Quote</button>
      </div>
    </section>
  );
};



function HomePage() {
  return (
    <div className="home-page">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <TestimonialsSection />
      <CtaSection />
    </div>
  );
}

export default HomePage;