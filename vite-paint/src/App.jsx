import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import About from "./components/About.jsx";
import Services from "./components/Services.jsx";
import Home from "./components/Home.jsx";
import BriefHistory from "./components/BriefHistory.jsx";
import Products from "./components/Products.jsx";
import Gallery from "./components/Gallery.jsx";
import Contact from "./components/Contact.jsx";

import ProductsPage from "./pages/ProductsPage.jsx";
import GalleryPage from "./pages/GalleryPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";

function MainPage() {
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
      <BriefHistory />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/gallery" element={<GalleryPage />} />
      <Route path="/contact" element={<ContactPage/>} />
      
      <Route path="about" element={< MainPage />} />
      <Route path="services" element={< Services />} />

    </Routes>
  );
}

export default App;