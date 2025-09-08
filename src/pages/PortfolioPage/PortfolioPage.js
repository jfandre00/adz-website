// src/pages/PortfolioPage/PortfolioPage.js
import React, { useState } from 'react';
import './PortfolioPage.css';

// Importar as imagens dos projetos
import project1 from '../../assets/project-1.jpg';
import project2 from '../../assets/project-2.jpg';
import project3 from '../../assets/project-3.jpg';
import portfolio4 from '../../assets/portfolio-4.jpg';
import portfolio5 from '../../assets/portfolio-5.jpg';
import portfolio6 from '../../assets/portfolio-6.jpg';

const allProjects = [
  { id: 1, title: 'Modern Villa in Miami', category: 'Custom Home', image: project1 },
  { id: 2, title: 'Kitchen Remodel', category: 'Remodeling', image: project2 },
  { id: 3, title: 'Downtown Office Renovation', category: 'Commercial', image: project3 },
  { id: 4, title: 'Lakeside Family Home', category: 'Custom Home', image: portfolio4 },
  { id: 5, title: 'Historic Building Restoration', category: 'Commercial', image: portfolio5 },
  { id: 6, title: 'Full Apartment Renovation', category: 'Remodeling', image: portfolio6 },
];

const categories = ['All', 'Custom Home', 'Remodeling', 'Commercial'];

function PortfolioPage() {
  const [filter, setFilter] = useState('All');

  const filteredProjects = filter === 'All'
    ? allProjects
    : allProjects.filter(project => project.category === filter);

  return (
    <div className="portfolio-page">
      <header className="page-header">
        <h1>Our Work</h1>
        <p>Explore a selection of our finest custom homes, renovations, and commercial projects.</p>
      </header>

      <section className="portfolio-section">
        <div className="container">
          <div className="filter-buttons">
            {categories.map(category => (
              <button
                key={category}
                className={`filter-btn ${filter === category ? 'active' : ''}`}
                onClick={() => setFilter(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="portfolio-grid">
            {filteredProjects.map(project => (
              <div key={project.id} className="project-card-portfolio">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay-portfolio">
                  <h3>{project.title}</h3>
                  <p>{project.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default PortfolioPage;