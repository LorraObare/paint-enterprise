import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import About from "./About.jsx";
import Services from "./Services.jsx";
import Products from "./Products.jsx";
import Portfolio from "./Portfolio.jsx";
import Contact from "./Contact.jsx";
import Home from "./Home.jsx";

function App() {
  return (
    <>
      <Header />
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="products">
        <Products />
      </section>
      <section id="portfolio">
        <Portfolio />
      </section>
      <section id="contact">
        <Contact />
      </section>
    <Footer />
    </>
  );
}

export default App;
