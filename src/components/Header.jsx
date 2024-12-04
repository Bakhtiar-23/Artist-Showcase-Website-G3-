import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../App.css'; // Ensure your styles are applied correctly

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Get the current location

  // Handle redirection based on the current page
  const handleRedirect = () => {
    if (location.pathname === '/gallery') {
      navigate('/'); // Go to Home if currently on Gallery page
    } else {
      navigate('/gallery'); // Go to Gallery if currently on Home page
    }
  };


  return (
    <header className="header">
      <div className="header-content">
        {/* Logo on the left */}
        <div className="logo-container">
          <img src="/assets/logo.png" alt="Logo" className="logo" />
        </div>

        {/* Button to redirect to either Gallery or Home */}
        <div className="gallery-button-container">
          <button onClick={handleRedirect} className="gallery-button">
            {location.pathname === '/gallery' ? 'Go to Home' : 'Go to Gallery'}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
