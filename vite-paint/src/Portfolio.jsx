import React, { useState } from 'react';
import './Styles/Portfolio.css';

// Import your images
import image1 from './assets/image1.jpg';
import image2 from './assets/image2.jpg';
import image3 from './assets/image3.jpg';
import image4 from './assets/image4.jpg';
import image5 from './assets/image5.jpg';
import image6 from './assets/image6.jpg';
import image7 from './assets/image7.jpg';
import image8 from './assets/image8.jpg';
import image9 from './assets/image9.jpg';
import image10 from './assets/image10.jpg';
import image11 from './assets/image11.jpg';
import image12 from './assets/image12.jpg';
// Add more imports for additional images
// import image13 from './assets/image13.jpg';
// ...up to image40

const Portfolio = () => {
  // State for modal
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Array of imported images - add all your images here (up to 40)
  const images = [
    image1, image2, image3, image4, image5, image6, 
    image7, image8, image9, image10, image11, image12,
    // Add more images as needed (up to image40)
  ];

  // Open modal with specific image
  const openModal = (index) => {
    setCurrentImageIndex(index);
    setModalOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };

  // Close modal
  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  };

  // Navigate to previous image
  const prevImage = (e) => {
    e.stopPropagation(); // Prevent modal from closing
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Navigate to next image
  const nextImage = (e) => {
    e.stopPropagation(); // Prevent modal from closing
    setCurrentImageIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Handle keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (!modalOpen) return;
      
      switch (e.key) {
        case 'ArrowLeft':
          setCurrentImageIndex((prevIndex) => 
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
          );
          break;
        case 'ArrowRight':
          setCurrentImageIndex((prevIndex) => 
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
          );
          break;
        case 'Escape':
          closeModal();
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [modalOpen, images.length]);

  return (
    <section className="portfolio-section">
      <div className="container">
        <h2>Our Latest Features</h2>
        <div className="gallery-grid">
          {images.map((image, index) => (
            <div 
              className="gallery-item" 
              key={index}
              onClick={() => openModal(index)}
            >
              <img
                src={image}
                alt={`Portfolio item ${index + 1}`}
                loading="lazy"
              />
              <div className="gallery-item-overlay">
                <span className="view-icon">+</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal / Lightbox */}
      {modalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>
            <button className="modal-nav modal-prev" onClick={prevImage}>‹</button>
            <div className="modal-image-container">
              <img
                src={images[currentImageIndex]}
                alt={`Large view of portfolio item ${currentImageIndex + 1}`}
                className="modal-image"
              />
              <div className="modal-counter">
                {currentImageIndex + 1} / {images.length}
              </div>
            </div>
            <button className="modal-nav modal-next" onClick={nextImage}>›</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;