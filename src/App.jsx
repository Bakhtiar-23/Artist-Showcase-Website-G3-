// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import ContactArtist from './components/ContactArtist';
import { CartProvider } from './contexts/CartContext';
import Cart from './components/Cart';
import './index.css';

const App = () => {
  return (
    <CartProvider>
      <Router>
        <div className="app">
          <Header />
          {/* Main Content for different pages */}
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact-artist" element={<ContactArtist />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>

          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;
