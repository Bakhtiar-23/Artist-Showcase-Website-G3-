// src/components/Gallery.jsx
import React, { useState } from 'react';
import { useCart } from '../contexts/CartContext';

const paintings = [
    {
      id: 1,
      name: "The Stone Breakers",
      size: "65x102 inches",
      price: "$800",
      style: "Realism",
      category: "Labor Scene",
      imageUrl: "/assets/stone-breakers.jpg"
    },
    {
      id: 2,
      name: "A Burial at Ornans",
      size: "124x263 inches",
      price: "$1200",
      style: "Realism",
      category: "Historical",
      imageUrl: "/assets/burial-at-ornans.jpg"
    },
    {
      id: 3,
      name: "The Wave",
      size: "38x46 inches",
      price: "$600",
      style: "Realism",
      category: "Seascape",
      imageUrl: "/assets/the-wave.jpg"
    },
    {
      id: 4,
      name: "The Desperate Man",
      size: "18x22 inches",
      price: "$700",
      style: "Realism",
      category: "Portrait",
      imageUrl: "/assets/desperate-man.jpg"
    },
  ]

const Gallery = () => {
  const { addToCart } = useCart();
  const [ratings, setRatings] = useState(paintings.reduce((acc, painting) => {
    acc[painting.id] = painting.rating; // Initialize with current ratings
    return acc;
  }, {}));

  const handleBuyClick = (painting) => {
    addToCart(painting); // Add the painting to the cart
  };

  const handleRatingChange = (paintingId, rating) => {
    setRatings({
      ...ratings,
      [paintingId]: rating,
    });
  };

  const renderStars = (rating, paintingId) => {
    return [1, 2, 3, 4, 5].map((star) => (
      <span
        key={star}
        className={`star ${star <= rating ? 'filled' : ''}`}
        onClick={() => handleRatingChange(paintingId, star)}
      >
        &#9733;
      </span>
    ));
  };

  return (
    <div className="gallery-container">
      <h1>Gallery</h1>
      <div className="paintings-list">
        {paintings.map((painting) => (
          <div key={painting.id} className="painting-card">
            <img src={painting.image} alt={painting.name} className="painting-image" />
            <h2>{painting.name}</h2>
            <p><strong>Size:</strong> {painting.size}</p>
            <p><strong>Price:</strong> {painting.price}</p>
            <p><strong>Category:</strong> {painting.category}</p>
            <p><strong>Style:</strong> {painting.style}</p>
            <div className="rating">
              {renderStars(ratings[painting.id], painting.id)}
            </div>
            <button className="buy-button" onClick={() => handleBuyClick(painting)}>Buy</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
