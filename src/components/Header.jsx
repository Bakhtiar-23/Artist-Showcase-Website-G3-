// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext'; // Import the CartContext to access cart items

const Header = () => {
  const { cartItems } = useCart(); // Get the cart items from the CartContext

  return (
    <header className="header">
      <div className="header-content">
        {/* Logo on the left */}
        <img src="/assets/logo.png" alt="Logo" className="logo" />

        {/* Your name as an image in the middle */}
        <img src="/assets/Bakhi-name.png" alt="Bakhi-name" className="bakhi-name" />

        {/* Shopping Cart Icon */}
        <div className="cart-container">
          {/* Link to the Cart page, with the number of items in the cart */}
          <Link to="/cart">
            <span className="cart-icon">🛒</span>
            <span className="cart-count">{cartItems.length}</span> {/* Display the number of items */}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
