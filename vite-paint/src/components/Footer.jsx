import '../Styles/Footer.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaGoogle, FaYoutube, FaRss } from 'react-icons/fa';

function Footer() {
    
    const [formStatus, setFormStatus] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setFormStatus("submitting");
        
        const formData = new FormData(event.target);
        formData.append("access_key", "16704475-7b27-464f-a3c9-ee06ced3ee3e");
        
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
        
        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: json
            }).then((res) => res.json());
            
            if (res.success) {
                console.log("Success", res);
                setFormStatus("success");
                event.target.reset(); // Clear the form
            } else {
                console.log("Error", res);
                setFormStatus("error");
            }
        } catch (error) {
            console.log("Error", error);
            setFormStatus("error");
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
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3527.451107605135!2d34.7510742!3d-0.10075689999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182aa4ed38900001%3A0xdf21398077243cc0!2sHarleys%20Building!5e1!3m2!1sen!2ske!4v1743597584515!5m2!1sen!2ske" 
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
                    
                   <p style={{ 
                        fontFamily: 'Montserrat, sans-serif',
                        fontSize: '14px',
                        lineHeight: '1.6'
                    }}>
                        Harleys Building, 2nd Floor, Oginga Odinga Street, Kisumu, Kenya
                        </p>
                            
                    </div>
                </div>

                <div className="footer-connect">
                    <h3>Talk to us</h3>
                    <div className="subscribe-form">
                        <input type="email" placeholder="Email Address" />
                        <button type="submit">SUBSCRIBE</button>
                    </div>
                    <div className="social-icons">
                        <a href="#"><FaFacebook /></a>
                        <a href="#"><FaTwitter /></a>
                        <a href="#"><FaGoogle /></a>
                        <a href="#"><FaYoutube /></a>
                        <a href="#"><FaRss /></a>
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