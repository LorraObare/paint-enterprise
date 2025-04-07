import React from 'react';
import './Styles/Portfolio.css'; // Import your CSS styles for the portfolio section
import image1 from './assets/image1.jpg'; // Import your images
import image2 from './assets/image2.jpg'; // Import your images
import image3 from './assets/image3.jpg'; // Import your images
import image4 from './assets/image4.jpg'; // Import your images
import image5 from './assets/image5.jpg'; // Import your images   
import image6 from './assets/image6.jpg'; // Import your images
import image7 from './assets/image7.jpg';
import image8 from './assets/image8.jpg';
import image9 from './assets/image9.jpg';
import image10 from './assets/image10.jpg';
import image11 from './assets/image11.jpg';
import image12 from './assets/image12.jpg';




const Portfolio = () => {
  // Array of imported images
  const images = [
    image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12
    // Add more images as needed
    
  ];

  return (
    <section className="portfolio-section">
      <div className="container">
        <h2>Our Latest Features</h2>
        <div className="gallery-grid">
          {images.map((image, index) => (
            <div className="gallery-item" key={index}>
              <img 
                src={image} 
                alt={`Portfolio item ${index + 1}`}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;