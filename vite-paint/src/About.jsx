import "./Styles/About.css"; 
import about from './assets/about.jpg';  

function About() {   
  return (     
    <section className="about">  
      <div   
        className="about__image"   
        style={{ backgroundImage: `url(${about})` }}    
      > 
      </div>       
      <div className="about__content">         
        <h2 className="section__header">We Provide You<br />The Best Experience</h2>         
        <p>Gemasu Painters – Kisumu's Trusted Painting Experts
        we don't just sell paint or offer painting services—we deliver quality transformations. Our premium, long-lasting paints and skilled painters in Kisumu guarantee flawless finishes that brighten and beautify every space.
        Whether you're a homeowner, business owner, or contractor, we provide top-tier painting solutions in Kisumu that bring your vision to life.
        Choose Gemasu for reliable, affordable, and professional painting services in Kisumu—and make a lasting impression today.
        </p>                
      </div>       
      <div className="about__stats">         
        <div>           
          <h4>600+</h4>           
          <p>Homes Transformed</p>         
        </div>         
        <div>           
          <h4>500+</h4>           
          <p>Happy Clients</p>         
        </div>         
        <div>           
          <h4>10+</h4>           
          <p>Years of Experience</p>         
        </div>       
      </div>     
    </section>    
  ); 
}    

export default About;