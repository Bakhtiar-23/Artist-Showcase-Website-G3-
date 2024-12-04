import React from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom'; // Consolidated imports
import { useCart } from '../contexts/CartContext';
import '../App.css'; // Ensure your styles are applied correctly

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Get the current location
  const { cart } = useCart(); // Assuming 'cart' is the correct property from CartContext

  // Handle redirection based on the current page
  const handleRedirect = () => {
    navigate(location.pathname === '/gallery' ? '/' : '/gallery'); // Ternary for clarity
  };

  return (
    <header className="header">
      <div className="header-content">
        {/* Logo on the left */}
        <div className="logo-container">
          <img src="/assets/logo.png" alt="Logo" className="logo" />
        </div>

        {/* Button to redirect to either Gallery or Home */}
        <div className="navigation-container">
          <button onClick={handleRedirect} className="navigation-button">
            {location.pathname === '/gallery' ? 'Go to Home' : 'Go to Gallery'}
          </button>
        </div>

        {/* Cart container */}
        <div className="cart-container">
          <Link to="/cart" className="cart-link">
            <span className="cart-icon">🛒</span>
            <span className="cart-count">{cart?.length || 0}</span> {/* Safeguard for undefined cart */}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
