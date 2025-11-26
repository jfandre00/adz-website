import React from 'react';
import { Link } from 'react-router-dom'; 
import './ProcessPage.css';

// Importar os ícones
import { FaComments, FaPencilRuler, FaFileContract, FaHardHat, FaClipboardCheck, FaKey } from 'react-icons/fa';

const processSteps = [
  {
    icon: <FaComments />,
    title: "Step 1: Initial Consultation & Discovery",
    description: "We start by listening. In our first meeting, we'll discuss your vision, needs, budget, and timeline to ensure we are the right fit for your project.",
    side: 'left'
  },
  {
    icon: <FaPencilRuler />,
    title: "Step 2: Design & Planning",
    description: "Our team works with you to create detailed architectural plans and select materials. We refine every detail until the design perfectly matches your dream.",
    side: 'right'
  },
  {
    icon: <FaFileContract />,
    title: "Step 3: Permitting & Approvals",
    description: "We handle the complexities of local regulations, submitting all necessary paperwork to get the required permits for your construction.",
    side: 'left'
  },
  {
    icon: <FaHardHat />,
    title: "Step 4: Construction & Project Management",
    description: "With plans approved, our skilled team brings your project to life. You'll have a dedicated project manager and regular updates on the progress.",
    side: 'right'
  },
  {
    icon: <FaClipboardCheck />,
    title: "Step 5: Quality Checks & Walk-throughs",
    description: "As we approach completion, we conduct rigorous quality inspections and a final walk-through with you to ensure every detail meets our high standards—and yours.",
    side: 'left'
  },
  {
    icon: <FaKey />,
    title: "Step 6: Final Handover & Warranty",
    description: "The moment you've been waiting for! We deliver your completed project and provide a comprehensive warranty, ensuring your peace of mind for years to come.",
    side: 'right'
  }
];

function ProcessPage() {
  return (
    <div className="process-page">
      <header className="page-header">
        <h1>Our Proven Process</h1>
        <p>Transparency, communication, and quality at every step of your project.</p>
      </header>

      <section className="timeline-section">
        <div className="container">
          <div className="timeline-container">
            {processSteps.map((step, index) => (
              <div key={index} className={`timeline-item ${step.side}`}>
                <div className="icon-wrapper">{step.icon}</div>
                <div className="timeline-content">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-cta-section">
        <div className="container">
          <h2>Let's Start Your Step One</h2>
          <p>Schedule your free, no-obligation consultation today and take the first step towards your new home.</p>
          <Link to="/contact" className="btn btn-primary">Schedule Your Consultation</Link>
        </div>
      </section>
    </div>
  );
}

export default ProcessPage;