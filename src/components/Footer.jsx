import React from 'react';

const Footer = () => {
  return (
    <footer id="contact-artist" className="footer">
      <button onClick={() => window.location.href = "mailto:bakhtiar.khider@gmail.com"} className="order-button">
        Order Paintings
      </button>
      <p>&copy; {new Date().getFullYear()} Bakhtiar Ismail. All rights reserved.</p>
      <p>
        Email: <a href="mailto:bakhtiar.khider@gmail.com">bakhtiar.khider@gmail.com</a>
      </p>
      <p>
        Phone: <a href="tel:0409326961">0409326961</a>
      </p>
      {/* Add any additional footer links or information */}
    </footer>
  );
};

export default Footer;
