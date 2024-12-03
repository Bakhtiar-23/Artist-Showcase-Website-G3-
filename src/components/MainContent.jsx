// src/components/MainContent.jsx
import React from 'react';

const MainContent = () => {
  return (
    <main className="main-content">
      <h1>Welcome to My Artist Showcase</h1>
      <p>This is a place to showcase my artwork and achievements.</p>

      {/* About Section */}
      <section className="about">
        <h2>About Me</h2>
        <p>
          Hello, I'm Sanna, a passionate artist dedicated to creating digital art that tells unique stories. 
          This page is a collection of my work, a glimpse into my creative process, and the art that inspires me.
        </p>
        <p>
          I believe in the power of art to evoke emotions, spark conversations, and connect people from all walks of life. 
          Feel free to browse my gallery and reach out if you want to collaborate or learn more!
        </p>
      </section>

      {/* Image Section */}
      <img src="/public/assets/images (2).jpg" alt="Face" className="face" />
    </main>
  );
};

export default MainContent;
