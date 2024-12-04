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
      <p>&copy; {new Date().getFullYear()} Bakhtiar Ismail. All rights reserved.</p>
      <p>
        Email: <a href="mailto:bakhtiar.khider@gmail.com">bakhtiar.khider@gmail.com</a>
      </p>
      <p>
        Phone: <a href="tel:0409326961">0409326961</a>
      </p>
      
    </footer>
  );
};

export default Footer;
