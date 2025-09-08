// src/pages/ServicesPage/ServicesPage.js
import React from 'react';
import './ServicesPage.css';

// Importar as imagens dos serviços
import customHomeImg from '../../assets/service-custom-home.jpg';
import remodelingImg from '../../assets/service-remodeling.jpg';
import commercialImg from '../../assets/service-commercial.jpg';

function ServicesPage() {
  const services = [
    {
      title: "Custom Home Building",
      description: "We design and build beautiful, one-of-a-kind homes from the ground up, tailored to your lifestyle and preferences.",
      image: customHomeImg,
    },
    {
      title: "Remodeling & Renovations",
      description: "We transform kitchens, bathrooms, and entire homes to fit your new lifestyle, blending modern function with timeless design.",
      image: remodelingImg,
    },
    {
      title: "Commercial Projects",
      description: "We deliver high-quality construction for offices, retail spaces, and other commercial properties, on time and on budget.",
      image: commercialImg,
    },
  ];

  return (
    <div className="services-page">
      <header className="page-header">
        <h1>Our Construction Services</h1>
        <p>From custom homes to commercial renovations, we offer a complete range of building services executed with precision and care.</p>
      </header>

      <section className="services-grid-section">
        <div className="container">
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <img src={service.image} alt={service.title} className="service-card-bg" />
                <div className="service-card-content">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <button className="btn btn-secondary">Learn More</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-cta-section">
        <div className="container">
          <h2>Ready to Discuss Your Project?</h2>
          <p>Whether you have a detailed plan or just an idea, our team is here to help you take the next step.</p>
          <button className="btn btn-primary">Get a Free Quote</button>
        </div>
      </section>
    </div>
  );
}

export default ServicesPage;