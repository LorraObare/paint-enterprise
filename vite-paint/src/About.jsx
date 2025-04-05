import "./Styles/About.css";
import about from './assets/about.jpg';

function About() {
  return (
    <section className="about">
      <div className="about__image">
      <img src={about} alt="About Us" className="about__img" />
      </div>
      <div className="about__content">
        <h2 className="section__header">We Provide You<br />The Best Experience</h2>
        <p>
            At Gemasu, we do not just sell paint or offer painting services—we create an experience. From premium, long-lasting paints to expert craftsmanship, we ensure vibrant, flawless finishes that transform your space. Whether you’re a homeowner, business, or contractor, we provide the best products and services to bring your vision to life. Let us help you create a beautiful, lasting impression.
        </p>
        <div className="about__btn">
          <button className="btn">View Our Work</button>
        </div>
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