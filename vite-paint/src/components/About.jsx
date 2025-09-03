import "../Styles/About.css"; 
import about from '../assets/about.jpg'; 
import Counter from "./Counter.jsx"; 

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
        we don't just sell paint or offer painting services—we deliver quality transformations. Our premium, long-lasting paints and skilled painters guarantee flawless finishes that brighten and beautify every space.
        Whether you're a homeowner, business owner, or contractor, we provide top-tier painting solution country-wide that bring your vision to life.
        Choose Gemasu for reliable, affordable, and professional painting services and make a lasting impression today.
        </p>                
      </div>       
      <div className="about__stats">
  <Counter target={600} label="Homes Transformed" />
  <Counter target={500} label="Happy Clients" />
  <Counter target={10} label="Years of Experience" />
</div>

    </section>    
  ); 
}    

export default About;