import { useState } from "react";
import "./styles/Products.css";
import plasticEmulsion from "./assets/plasticEmulsion.jpg";
import primer from "./assets/primer.jpg";
// Import other images or use placeholders

function Products() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedName, setSelectedName] = useState("");

  const openLightbox = (imageSrc, name) => {
    setSelectedImage(imageSrc);
    setSelectedName(name);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    setSelectedName("");
  };

  // Product data - replace placeholders with your actual images when available
  const products = [
    {
      name: "Plastic Emulsion",
      image: plasticEmulsion
    },
    {
      name: "Cover Matt",
      // Replace with actual image
      image: primer
    },
    {
      name: "Vinyl Matt",
      // Replace with actual image
      image: "https://via.placeholder.com/150?text=Vinyl+Matt"
    },
    {
      name: "Silk Vinyl",
      // Replace with actual image
      image: "https://via.placeholder.com/150?text=Silk+Vinyl"
    },
    {
      name: "Textured Paints",
      // Replace with actual image
      image: "https://via.placeholder.com/150?text=Textured+Paints"
    },
    {
      name: "Gloss-economy",
      // Replace with actual image
      image: "https://via.placeholder.com/150?text=Gloss+Economy"
    }
  ];

  return (
    <div className="container">
      <h3 className="Title">Our Range Of Products</h3>
      
      <div className="product-container">
        {products.map((product, index) => (
          <div 
            key={index} 
            className="product" 
            onClick={() => openLightbox(product.image, product.name)}
          >
            <img src={product.image} alt={product.name} />
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