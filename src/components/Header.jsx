// src/components/Header.jsx
import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        {/* Logo on the left */}
        <img src="/public/assets/logo.png" alt="Logo" className="logo" />

        {/* Your name as an image in the middle */}
        <img src="/public/assets/Bakhi-name.png" alt="Bakhi-name" className="bakhi-name" />

        {/* Official web page in the bottom right */}
        <img src="/public/assets/official.png" alt="Official" className="official" />
      </div>
    </header>
  );
};

export default Header;
