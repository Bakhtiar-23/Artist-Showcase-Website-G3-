//src/components/Header.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext'; // Import the CartContext to access cart items

const Header = () => {
  const { cartItems } = useCart(); // Get the cart items from the CartContext
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for toggling the menu visibility

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the menu open/close state
  };

  return (
    <header className="header">
      <div className="header-content">
        {/* Logo on the left */}
        <img src="/assets/logo.png" alt="Logo" className="logo" />

        {/* Your name as an image in the middle */}
        <img src="/assets/Bakhi-name.png" alt="Bakhi-name" className="bakhi-name" />

        {/* Navigation Menu */}
      <nav>
        <div className="menu-icon" onClick={toggleMenu}>
          <i className={isMenuOpen ? "fas fa-times" : "fas fa-bars"}></i> {/* Hamburger or Close Icon */}
        </div>

        <div className={isMenuOpen ? "nav-links-container open" : "nav-links-container"}>
          <ul className="nav-links">
            <li>
              <Link to="/" className="nav-link">
                <i className="fas fa-home"></i> {/* Home Icon */}
                Home
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="nav-link">
                <i className="fas fa-image"></i> {/* Gallery Icon */}
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/contact-artist" className="nav-link">
                <i className="fas fa-phone-alt"></i> {/* Contact Icon */}
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </nav>

        {/* Shopping Cart Icon */}
        <div className="cart-container">
          {/* Link to the Cart page, with the number of items in the cart */}
          <Link to="/cart">
            <img
              src="/assets/bag-icon.jpg" // Replace with the path to your cart image
              alt="Cart"
              className="cart-icon"
            />
            <span className="cart-count">{cartItems.length}</span> {/* Display the number of items */}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
