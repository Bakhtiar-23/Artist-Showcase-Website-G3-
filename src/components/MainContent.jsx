// src/components/MainContent.jsx
import React from 'react';

const MainContent = () => {
  return (
    <main className="main-content">
      <h1>Welcome to My Artist Showcase</h1>
      <p>This is a place to showcase my artwork and achievements.</p>
      {/* Add more content as needed */}
      <img src="/public/assets/Bakhtiar1.png" alt="Bakhtiar" className="bakhtiar" />
      <img src="/public/assets/shape1.png" alt="Shape" className="shape" />
    </main>
  );
};

export default MainContent;
