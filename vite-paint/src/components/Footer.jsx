import '../Styles/Footer.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaGoogle, FaYoutube, FaRss, FaPaintBrush } from 'react-icons/fa';
import emailjs from '@emailjs/browser'; // Add this import
import logo from '../assets/logo.png'; // Adjust the path to your logo file

function Footer() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const COMPANY_PROFILE_LINK = "YOUR_GOOGLE_DRIVE_LINK"; // Add your link later

  const handleSubscribe = async (e) => {
    e.preventDefault();

    if (!email.trim()) return;

    setMessage("Sending...");

    try {
      await emailjs.send(
        "service_fkk12ib",      //EmailJS Service ID
        "template_76bg9w4",     // EmailJS Template ID
        {
          user_email: email,
          profile_link: "https://drive.google.com/file/d/1yaI6dXBUOX_n0ZgDvmhTABppEzH28bhg/view?usp=sharing", // Pass the link to the template
        },
        "ZCP7w9QFOHEXePt6k"       // EmailJS Public Key
      );
      setMessage("Check your email for our company profile!");
      setEmail("");
      setTimeout(() => setMessage(""), 4000);
    } catch (error) {
      setMessage("Something went wrong. Please try again.");
    }
  };

  // Get current year dynamically for copyright
  const currentYear = new Date().getFullYear();

  return (
    <footer className="new-footer">
      <div className="footer-container">
        {/* Map Section */}
        <div className="footer-map">
          <h3>FIND US</h3>
          <div className="map-wrapper">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3527.452872150089!2d34.76652077178822!3d-0.08287113528554416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182aa47706357fbf%3A0x2d47fbd6d59ecb90!2sGemasu%20Paints!5e1!3m2!1sen!2ske!4v1757931641030!5m2!1sen!2ske" width="600" height="450" 
              style={{border: 0}} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="footer-links">
          <h3>QUICK LINKS</h3>
          <div className="links-columns">
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Our Services</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
            <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '14px', lineHeight: '1.6' }}>
              Kondele Flyover, Kisumu, Kenya
            </p>
          </div>
        </div>

        {/* Replace the footer-connect div with this new section */}
        <div className="footer-connect">
          <h3>DOWNLOAD OUR COMPANY PROFILE</h3>
          <div className="download-section">
            <div className="profile-icon">
              <FaPaintBrush style={{ fontSize: '2.5rem', color: '#4285F4' }} />
            </div>
            <p className="download-text">
              Get detailed information about our services, products, and company history
            </p>
            <a 
              href="https://drive.google.com/file/d/1-Pg2y3yJtkOkRZ4-X139IS-KcaNJfe0t/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="download-button"
            >
              DOWNLOAD PROFILE
            </a>
          </div>
          <div className="social-icons">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaGoogle /></a>
          </div>
        </div>
      </div>

      <div className="copyright">
        <p>&copy; {currentYear} All Rights Reserved | Leading Experts</p>
      </div>
    </footer>
  );
}

export default Footer;
