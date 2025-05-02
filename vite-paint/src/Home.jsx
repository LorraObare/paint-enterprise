import Hero from './assets/Hero.jpg';  // ✅ Correct Import
import "./styles/Home.css"; // ✅ Correct Import



function Home() {
    return (
      <header class="section__container header__container" id="home">
      <div class="header__image">
      <img src={Hero} alt="hero" />
      </div>
      <div class="header__content">
        <div>
          <h1>Professional Painting Services in Kisumu | Gemasu Painters</h1>
          <p>
          Gemasu Painters offers expert painting services in Kisumu for homes, offices, and commercial buildings. <br/> From premium paint to flawless finishes, we help you transform your space with style and precision.
          </p>
        </div>
      </div>
    </header>

    );
  }
  
  export default Home;
  