import './Styles/Footer.css';


function Footer(){
    return(
        <footer>
        <h4 className="section-header">Contact Us</h4>
        <h1 className="heading">Get In Touch</h1>
        <p className="paragraph"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

        <div className="footer-form">
    <form action="#">
        <h1 className="sub-heading">Need Support!</h1>
        <p className="paragraph2">Contact Us For A quote</p>
        <input type="text" className="input" placeholder="Your Name"/>
        <input type="text" className="input" placeholder="Your Email"/>
        <input type="text" className="input" placeholder="Your Subject"/>
        <textarea className="input" cols="30" rows="5"></textarea>
        <input type="submit" className="input submit" value="Send Message"/>
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
            <i class="fa fa-map-marker contact-icon" aria-hidden="true"></i>
                <article className="text">
                    <h1 className="sub-heading">Location</h1>
                    <p className="paragraph">Lorem ipsum dolor sit amet</p>
                </article>
            </div>

            <div className="method">
            <i class="fa fa-envelope contact-icon" aria-hidden="true"></i>
                <article className="text">
                    <h1 className="sub-heading">Location</h1>
                    <p className="paragraph">info@gmail.com</p>
                </article>
            </div>

            <div className="method">
            <i class="fa fa-phone contact-icon" aria-hidden="true"></i>
                <article className="text">
                    <h1 className="sub-heading">Location</h1>
                    <p className="paragraph">Phone</p>
                </article>
            </div>
         </div>

        </footer>
        
    );
}

export default Footer;