import React from 'react';
import '../App.css'; // Import common styles


const galleryItems = [
  { id: 1, src: '/assets/abstract-nature-painted-with-watercolor-autumn-leaves-backdrop-generated-by-ai_188544-9806.avif', size: '24x36 cm', price: '€50' },
  { id: 2, src: '/assets/nail-polish-texture-macro_23-2148110962.avif', size: '30x40 cm', price: '€70' },
  { id: 3, src: '/assets/watercolor-floral-set_1340-4780.avif', size: '50x45 cm', price: '€100' },
];

const Gallery = () => {
  return (
    <div className="gallery-container">
      <h1>Artist Gallery</h1>
      <div className="gallery">
        {galleryItems.map((item) => (
          <div key={item.id} className="gallery-item">
            <img src={item.src} alt={`Artwork ${item.id}`} />
            <div className="item-info">
              <p>Size: {item.size}</p>
              <p>Price: {item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
