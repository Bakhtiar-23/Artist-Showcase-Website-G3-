// src/components/MainContent.jsx

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';

const MainContent = () => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [ratings, setRatings] = useState({
    1: 4,
    2: 5,
    3: 3,
    4: 4,
  });

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');
  const [feedbacks, setFeedbacks] = useState([]);

  const paintings = [
    {
      id: 1,
      name: 'Sunset Serenity',
      size: '24x36 inches',
      price: '$500',
      style: 'Impressionism',
      category: 'Landscape',
      imageUrl: '/assets/painting1.jpg',
    },
    {
      id: 2,
      name: 'Abstract Waves',
      size: '30x40 inches',
      price: '$750',
      style: 'Abstract',
      category: 'Modern Art',
      imageUrl: '/assets/painting2.jpg',
    },
    {
      id: 3,
      name: 'Majestic Mountain',
      size: '36x48 inches',
      price: '$900',
      style: 'Realism',
      category: 'Nature',
      imageUrl: '/assets/painting3.jpg',
    },
    {
      id: 4,
      name: 'Golden Horizon',
      size: '48x60 inches',
      price: '$1200',
      style: 'Contemporary',
      category: 'Abstract',
      imageUrl: '/assets/painting4.jpg',
    },
  ];

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true); // Set logged-in state if a token exists
    }
  }, []);

  const handleRegister = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        console.log('User registered successfully');
        alert('Registration successful! You can now log in.');
      } else {
        const error = await response.json();
        console.error('Registration failed:', error.message);
        alert(`Registration failed: ${error.message}`);
      }
    } catch (error) {
      console.error('Error registering user:', error);
      alert('An error occurred during registration.');
    }
  };

  const handleLogin = async () => {
    console.log('Attempting login with:', { username, password }); // Debug log
  
    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log('Login successful:', data); // Debug log
        setIsLoggedIn(true);
        localStorage.setItem('token', data.token); // Save token locally
        alert('Login successful!');
      } else {
        const error = await response.json();
        console.error('Login failed:', error.message);
        alert(`Login failed: ${error.message}`);
      }
    } catch (error) {
      console.error('Error logging in:', error);
      alert('An error occurred during login.');
    }
  };
  
  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('token'); // Clear the token on logout
    alert('Logged out successfully.');
  };

  const handleRateClick = (paintingId, rating) => {
    setRatings((prevRatings) => ({
      ...prevRatings,
      [paintingId]: rating,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFeedback = { name, email, feedback };
    setFeedbacks((prevFeedbacks) => [...prevFeedbacks, newFeedback]);
    setName('');
    setEmail('');
    setFeedback('');
    alert('Feedback submitted successfully!');
  };

  const sortedPaintings = [...paintings].sort((a, b) => ratings[b.id] - ratings[a.id]);

  return (
    <main className="main-content">
      <div className="header">
        {isLoggedIn ? (
          <button onClick={handleLogout} className="login-button">
            Logout
          </button>
        ) : (
          <div>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="input-field"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-field"
            />
            <button onClick={handleLogin} className="login-button">
              Login
            </button>
            <button onClick={handleRegister} className="register-button">
              Register
            </button>
          </div>
        )}
      </div>

      <h1>WELCOME TO MY OFFICIAL ART WEB-PAGE</h1>
      <section className="about">
        <img src="/assets/profile.png" alt="Bakhtiar" className="bakhtiar" />
        <h1>About Me</h1>
        <h2>
          Hello, I'm Artist, a realistic artist with a passion for painting that started
          in childhood. With three exhibitions to my name, I specialize in oil painting on canvas,
          using various techniques to create depth and texture. My work captures the beauty of the
          world around me, blending technical precision with personal expression.
        </h2>
        <h2>
          I believe in the power of art to evoke emotions, spark conversations, and connect people
          from all walks of life. Feel free to browse my gallery and reach out if you want to
          collaborate or learn more!
        </h2>
      </section>

      <div className="painting-container">
        {sortedPaintings.map((painting) => (
          <div key={painting.id} className="painting-item">
            <img src={painting.imageUrl} alt={painting.name} className="painting-image" />
            <div className="painting-details">
              <h3>{painting.name}</h3>
              <p>
                <strong>Size:</strong> {painting.size}
              </p>
              <p>
                <strong>Price:</strong> {painting.price}
              </p>
              <p>
                <strong>Style:</strong> {painting.style}
              </p>
              <p>
                <strong>Category:</strong> {painting.category}
              </p>

              <div className="painting-rating">
                <span>Rating: </span>
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className={`star ${star <= ratings[painting.id] ? 'filled' : ''}`}
                    onClick={() => handleRateClick(painting.id, star)}
                  >
                    ★
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Feedback Section */}
      <div className="feedback-container">
        <h2>Leave your feedback!</h2>
        <form onSubmit={handleSubmit} className="feedback-form">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="feedback">Feedback:</label>
            <textarea
              id="feedback"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="Enter your feedback"
            />
          </div>
          <button type="submit">Submit Feedback</button>
        </form>

        <div className="feedback-list">
          <h3>Latest Feedbacks</h3>
          <ul>
            {feedbacks.map((item, index) => (
              <li key={index}>
                <strong>{item.name} ({item.email}):</strong>
                <p>{item.feedback}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
};

export default MainContent;
