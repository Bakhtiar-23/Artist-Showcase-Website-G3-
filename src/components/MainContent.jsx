// src/components/MainContent.jsx
import React from 'react';

const MainContent = () => {
  return (
    <main className="main-content">
      <h1>WELCOME TO MY OFFICIAL ART WEB-PAGE</h1>
      <p>ABOUT ME.</p>
      {/* Add more content as needed */}
      <img src="/public/assets/Bakhtiar1.png" alt="Bakhtiar" className="bakhtiar" />
      <div class="painting-container">
        <img src="/public/assets/painting1.jpg" alt="Painting1" class="painting1" />
        <img src="/public/assets/painting2.jpg" alt="Painting2" class="painting2" />
        <img src="/public/assets/painting3.jpg" alt="Painting3" class="painting3" />
        <img src="/public/assets/painting5.jpg" alt="Painting5" class="painting5" />
      </div>
      <img src="/public/assets/shape1.png" alt="Shape" className="shape" />
      
    </main>
  );
};

export default MainContent;
