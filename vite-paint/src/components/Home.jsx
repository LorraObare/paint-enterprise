import { useEffect } from "react"; 
import Hero from '../assets/Hero.jpg'; 
import "../styles/Home.css";  

function Home() {   
  useEffect(() => {const observer = new IntersectionObserver(       
    (entries) => {   entries.forEach(entry => {           
    if (entry.isIntersecting) {entry.target.classList.add("visible");}         
  });       
  },{ threshold: 0.6 } );const elements = document.querySelectorAll(".animate-on-scroll");     
  elements.forEach(el => observer.observe(el));      
  return () => {elements.forEach(el => observer.unobserve(el));};   
}, 
[]);    
  return (     
  
  <header className="section__container header__container" id="home">      
   <div className="header__image">         
    <img src={Hero} alt="hero" />       
    </div>       
    <div className="header__content">         
      <div>         
        <h1 className="hero__title animate-on-scroll">Professional Painting Services<span className="brand-name"> Gemasu Paint</span></h1> 
        <p className="hero__description">Gemasu Paint offers expert painting services for homes, offices, and commercial buildings. <br />   From premium paint to flawless finishes, we help you transform your   space with style and precision. </p>          
        </div>       
        </div>     
        </header>   
        );
}  export default Home;