import { useState } from "react";
import "./styles/Products.css";
import plasticEmulsion from "./assets/plasticEmulsion.jpg";
import primer from "./assets/primer.jpg";
import coverMatt from "./assets/coverMatt.jpg";
import silkVinyl from "./assets/silkVinyl.jpg";
import ecoGloss from "./assets/ecoGloss.jpg";
import texturePaint from "./assets/texturePaint.jpg"
// Import other images or use placeholders

function Products() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedName, setSelectedName] = useState(null);
  
  
  const openLightbox = (imageSrc, name) => {
    setSelectedImage(imageSrc);
  
  };
  
  const closeLightbox = () => {
    setSelectedImage(null);

  };
  
  // Product data - replace placeholders with your actual images when available
  const products = [
    {
      image: plasticEmulsion,
      
    },
    {
    
      // Replace with actual image
      image: primer,
      
    },
    {
    
      // Replace with actual image
      image: coverMatt,
      
    },
    {

      // Replace with actual image
      image: silkVinyl,
    },  
    {

      // Replace with actual image
      image: ecoGloss,
      
    },
    {
      // Replace with actual image
      image: texturePaint,
      
    }
  ];
  
  return (
    <div className="container">
      <h3 className="Title">Our Range Of Products</h3>
      
      <div className="product-intro">
        When you visit our shop located in Kisumu, we offer you a complete range of high-quality paints and finishes for all your needs. 
        Our premium products ensure exceptional coverage, durability, and beautiful finishes for both interior 
        and exterior surfaces. With our diverse selection, you'll find the perfect solution for any painting project, 
        from residential to commercial applications.
      </div>
      
      <div className="product-container">
        {products.map((product, index) => (
          <div
            key={index}
            className="product"
            onClick={() => openLightbox(product.image, product.name)}
          >
            <div className="img-container">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="product-name">{product.name}</div>
          </div>
        ))}
      </div>
      
      {selectedImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <span className="close-btn">&times;</span>
          <img className="lightbox-content" src={selectedImage} alt={selectedName} />
        </div>
      )}
    </div>
  );
}

export default Products;