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
          <h1>Transforming Spaces with Professional Painting Solutions</h1>
          <p>
            We will help you to make an elegant and luxurious interior designed
            by professional interior designer.
          </p>
        </div>
      </div>
    </header>

    );
  }
  
  export default Home;
  