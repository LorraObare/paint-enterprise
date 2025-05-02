import './Styles/Footer.css'; 
import React, { useState } from 'react';

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
        <footer>
            <h2 className="section-header">Contact Us</h2>
            <h1 className="heading">Get In Touch</h1>
            <p className="paragraph"></p>
            
            <div className="footer-form">
                <form onSubmit={onSubmit}>
                    <h1 className="sub-heading">Need Support!</h1>
                    <p className="paragraph2">Contact Us For A quote</p>
                    
                    {formStatus === "success" && (
                        <div className="form-success">Message sent successfully!</div>
                    )}
                    
                    {formStatus === "error" && (
                        <div className="form-error">Failed to send message. Please try again.</div>
                    )}
                    
                    <input type="text" name="name" className="input" placeholder="Your Name" required />
                    <input type="email" name="email" className="input" placeholder="Your Email" required />
                    <input type="text" name="subject" className="input" placeholder="Your Subject" required />
                    <textarea name="message" className="input" cols="30" rows="5" placeholder="Your Message" required></textarea>
                    
                    <input 
                        type="submit" 
                        className="input submit" 
                        value={formStatus === "submitting" ? "Sending..." : "Send Message"} 
                        disabled={formStatus === "submitting"} 
                    />
                </form>
                
                {/* Map moved outside the form */}
                <div className="map-container">
                    <div className="mapBg"></div>
                    <div className="map">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3527.451107605135!2d34.7510742!3d-0.10075689999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182aa4ed38900001%3A0xdf21398077243cc0!2sHarleys%20Building!5e1!3m2!1sen!2ske!4v1743597584515!5m2!1sen!2ske" 
                            style={{border: 0, width: "100%", height: "100%"}} 
                            allowFullScreen="" 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                </div>
            </div>
            
            <div className="contactMethod">
                <div className="method">
                    <i className="fa fa-map-marker contact-icon" aria-hidden="true"></i>
                    <article className="text">
                        <h1 className="sub-heading">Location</h1>
                        <p className="paragraph">Harleys Building,2nd Floor,Oginga Odinga Street, Kisumu</p>
                    </article>
                </div>
                
                <div className="method">
                    <i className="fa fa-envelope contact-icon" aria-hidden="true"></i>
                    <article className="text">
                        <h1 className="sub-heading">Email</h1>
                        <p className="paragraph">gemasupainters@gmail.com</p>
                    </article>
                </div>
                
                <div className="method">
                    <i className="fa fa-phone contact-icon" aria-hidden="true"></i>
                    <article className="text">
                        <h1 className="sub-heading">Phone</h1>
                        <p className="paragraph">+254-786-461-349/ 0715268011</p>
                    </article>
                </div>
            </div>
            
            {/* Copyright section */}
            <div className="copyright">
                <p>&copy; {currentYear} All Rights Reserved | Gemasu | Leading Experts</p>
            </div>
        </footer>
    );
}

export default Footer;