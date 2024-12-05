// src/components/Gallery.jsx
import React, { useState } from 'react';
import { useCart } from '../contexts/CartContext';

const paintings = [
  {
    id: 1,
    name: "Sunset Over the Ocean",
    size: "30x50 cm",
    price: "$500",
    category: "Landscape",
    style: "Impressionism",
    rating: 4,
    image: "/assets/painting5.jpg",
  },
  {
    id: 2,
    name: "Morning Tea at the Hotel Garden",
    size: "50x30 cm",
    price: "$750",
    category: "Impressionism",
    style: "Modern",
    rating: 5,
    image: "/assets/painting3.jpg",
  },
  {
    id: 3,
    name: "Old Church in Ussikaupunki-Finland",
    size: "50x30 cm",
    price: "$300",
    category: "Nature",
    style: "Realism",
    rating: 3,
    image: "/assets/painting2.jpg",
  },
  // Add more paintings as needed
];

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
