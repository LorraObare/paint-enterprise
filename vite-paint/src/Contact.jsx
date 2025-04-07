import React from 'react';
import './Styles/Contact.css';
import { FaPhone, FaEnvelope, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { HashLink } from 'react-router-hash-link';

function Contact(){
    return (
        <section className="contact-section">
      <div className="contact-container">
        <div className="contact-content">
          <h2>Let's Connect</h2>
          <div className="contact-animation">
            <div className="pulse-circle"></div>
            <FaPhone className="phone-icon" />
          </div>
          <h3>Happy with our work?</h3>
          <p>Give us a call today or send us a message below</p>
          
          <div className="contact-info">
            <div className="contact-item">
              <FaPhone />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="contact-item">
              <FaEnvelope />
              <span>hello@yourcompany.com</span>
            </div>
          </div>
          
          <div className="social-container">
            <h4>Connect with us</h4>
            <div className="social-icons">
              <a href="https://facebook.com" aria-label="Facebook">
                <FaFacebook />
              </a>
              <a href="https://twitter.com" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="https://instagram.com" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="https://linkedin.com" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
            </div>
          </div>
          
          <div className="contact-cta">
          <HashLink smooth to="/#footer" className="cta-button">
          Send us a message
         </HashLink>
        </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;