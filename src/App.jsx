import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import './index.css';
import './App.css';


const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          {/* Define routes for your pages */}
          <Route path="/" element={<MainContent />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;