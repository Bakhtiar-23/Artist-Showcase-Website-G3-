import React from 'react';

const Footer = () => {
  return (
    <footer id="contact-artist" className="footer">
      <button onClick={() => window.location.href = "mailto:bakhtiar.khider@gmail.com"} className="order-button">
        Order Paintings
      </button>
      <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
      <p>
        <h3>example@gmail.com</h3>
      </p>
      <p>
        <h3>Number: 0123456789</h3>
      </p>
    </footer>
  );
};

export default Footer;