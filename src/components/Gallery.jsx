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
];

const Gallery = () => {
  const { addToCart } = useCart();

  const handleBuyClick = (painting) => {
    addToCart(painting); // Add the painting to the cart
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
            <button className="buy-button" onClick={() => handleBuyClick(painting)}>Buy</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
