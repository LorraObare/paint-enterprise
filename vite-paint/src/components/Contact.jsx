import React, { useState } from 'react';
import '../Styles/Contact.css';
import { FaPhone, FaEnvelope, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { HashLink } from 'react-router-hash-link';

function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch("https://gemasupaint.co.ke/contact.php", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(form),
    });

    const result = await response.text(); // <-- expect text, not JSON

    if (result.includes("successfully")) {
      setStatus("✅ Message sent successfully!");
      setForm({ name: "", email: "", subject: "", message: "" });
    } else {
      setStatus("❌ Failed to send. Try again later.");
    }
  } catch (error) {
    setStatus("⚠️ Error sending message.");
  }

  setTimeout(() => setStatus(""), 4000);
};



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
          <p>We'd Love to hear from you, our team is always here to provide assistance.</p>
          
          <div className="contact-info">
            <div className="contact-item">
              <FaPhone />
              <span>+254-715-268-011/ 0718677664</span>
            </div>
            <div className="contact-item">
              <FaEnvelope />
              <span>support@gemasupaint.co.ke</span>
            </div>
          </div>
          
          <div className="social-container">
            <h4>Connect with us on</h4>
            <div className="social-icons">
              <a href="https://facebook.com" aria-label="Facebook"><FaFacebook /></a>
            </div>
          </div>

          {/* Contact Form */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <h4>Send us a message</h4>
            {status && <div className="form-status">{status}</div>}
            <div className="form-row">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={form.subject}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              rows={5}
              required
            />
            <button type="submit" className="contact-submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;