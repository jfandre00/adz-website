import React from 'react';
import './ContactPage.css';

// Importar os ícones
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

function ContactPage() {
  return (
    <div className="contact-page">
      <header className="page-header">
        <h1>Let's Build Something Great Together</h1>
        <p>Have a project in mind? We'd love to hear about it. Reach out using the form below or contact us directly.</p>
      </header>

      <section className="contact-section">
        <div className="container">
          <div className="contact-layout">
            <div className="contact-info">
              <h2>Contact Information</h2>
              <div className="info-item">
                <div className="icon"><FaPhoneAlt /></div>
                <div className="details">
                  <h4>Phone</h4>
                  <p>(123) 456-7890</p>
                </div>
              </div>
              <div className="info-item">
                <div className="icon"><FaEnvelope /></div>
                <div className="details">
                  <h4>Email</h4>
                  <p>contact@adzconstructionco.com</p>
                </div>
              </div>
              <div className="info-item">
                <div className="icon"><FaMapMarkerAlt /></div>
                <div className="details">
                  <h4>Address</h4>
                  <p>123 Construction Ave, Miami, FL, USA</p>
                </div>
              </div>
            </div>

            <div className="contact-form">
              <h2>Send Us a Message</h2>
              {/* Formulário integrado com o serviço Static Forms */}
              <form action="https://api.staticforms.xyz/submit" method="POST">
                <input type="hidden" name="apiKey" value="40b582ef-042e-4b9e-a794-ec30aa7b2a26" />
                <input type="hidden" name="redirectTo" value="https://adzconstructionco.com/thanks.html" />

                <div className="form-group">
                  <label htmlFor="name">Full Name*</label>
                  <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address*</label>
                  <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" name="phone" />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject*</label>
                  <input type="text" id="subject" name="subject" required />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Your Message*</label>
                  <textarea id="message" name="message" required></textarea>
                </div>

                {/* IMPORTANTE: Para que o reCAPTCHA funcione, adicione a seguinte linha
                  de código ao seu ficheiro public/index.html, antes da tag de fecho </head>:
                  <script src="https://www.google.com/recaptcha/api.js" async defer></script>
                */}
                <div className="g-recaptcha" data-sitekey="6LfxZQIrAAAAADxldgVOjOjMxreqhMicktR7esWB"></div>

                <button type="submit" className="btn btn-primary">Submit Inquiry</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactPage;