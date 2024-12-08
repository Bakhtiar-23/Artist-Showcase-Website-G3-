//src/components/Footer.jsx

import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from React Router

const Footer = () => {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleButtonClick = () => {
    navigate('/contact-artist'); // Navigate to the "Contact Artist" page
  };

  return (
    <footer className="footer">
      <button onClick={handleButtonClick} className="order-paintings">
        Order Paintings
      </button>
      <p>&copy; {new Date().getFullYear()} Artist All rights reserved.</p>
      <p>
        Email: <a href="Artist-Official@gmail.com">test@gmail.com</a>
      </p>
      <p>
        Phone: <a href="tel:12345678">12345678</a>
      </p>
      
    </footer>
  );
};

export default Footer;
