import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Use useNavigate from react-router-dom v6
import { useCart } from '../contexts/CartContext'; // Import the custom CartContext

const MainContent = () => {
  const { addToCart } = useCart(); // Get addToCart from context
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');
  const [feedbacks, setFeedbacks] = useState([]);

  const [ratings, setRatings] = useState({
    1: 4, // painting id 1 has 4 stars initially
    2: 5, // painting id 2 has 5 stars initially
    3: 3, // painting id 3 has 3 stars initially
    4: 4, // painting id 4 has 4 stars initially
  });

  const paintings = [
    {
      id: 1,
      name: 'Sunset Serenity',
      size: '24x36 inches',
      price: '$500',
      style: 'Impressionism',
      category: 'Landscape',
      imageUrl: '/public/assets/painting1.jpg',
    },
    {
      id: 2,
      name: 'Abstract Waves',
      size: '30x40 inches',
      price: '$750',
      style: 'Abstract',
      category: 'Modern Art',
      imageUrl: '/public/assets/painting2.jpg',
    },
    {
      id: 3,
      name: 'Majestic Mountain',
      size: '36x48 inches',
      price: '$900',
      style: 'Realism',
      category: 'Nature',
      imageUrl: '/public/assets/painting3.jpg',
    },
    {
      id: 4,
      name: 'Golden Horizon',
      size: '48x60 inches',
      price: '$1200',
      style: 'Contemporary',
      category: 'Abstract',
      imageUrl: '/public/assets/painting5.jpg',
    },
  ];

  // Handle feedback form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (name && email && feedback) {
      const newFeedback = {
        name,
        email,
        feedback,
      };
      setFeedbacks([newFeedback, ...feedbacks].slice(0, 5)); // Limit feedbacks to 5
      setName('');
      setEmail('');
      setFeedback('');
    }
  };

  // Handle adding painting to the cart and navigating to cart page
  const handleBuyClick = (painting) => {
    addToCart(painting); // Add painting to cart
  };

  // Handle rating submission
  const handleRateClick = (paintingId, rating) => {
    setRatings((prevRatings) => ({
      ...prevRatings,
      [paintingId]: rating, // Update the rating of the painting
    }));
  };

  // Sort paintings by rating in descending order (highest rating first)
  const sortedPaintings = [...paintings].sort((a, b) => ratings[b.id] - ratings[a.id]);

  return (
    <main className="main-content">
      <h1>WELCOME TO MY OFFICIAL ART WEB-PAGE</h1>
      <section className="about">
        <img src="/public/assets/Bakhtiar1.png" alt="Bakhtiar" className="bakhtiar" />
        <h1>About Me</h1>
        <h2>
          Hello, I'm Bakhtiar, a realistic artist with a passion for painting that started 
          in childhood. With three exhibitions to my name, I specialize in oil painting on canvas, 
          using various techniques to create depth and texture. My work captures the beauty of the 
          world around me, blending technical precision with personal expression. I’m constantly 
          exploring new methods to bring my subjects to life, inviting viewers to experience 
          the world through my eyes.
        </h2>
        <h2>
          I believe in the power of art to evoke emotions, spark conversations, and connect people from all walks of life. 
          Feel free to browse my gallery and reach out if you want to collaborate or learn more!
        </h2>
      </section>
      

      {/* Painting display section */}
      <div className="painting-container">
        {sortedPaintings.slice(0, 6).map((painting) => (  // Show top 6 rated paintings
          <div key={painting.id} className="painting-item">
            <img src={painting.imageUrl} alt={painting.name} className="painting-image" />
            <div className="painting-details">
              <h3>{painting.name}</h3>
              <p><strong>Size:</strong> {painting.size}</p>
              <p><strong>Price:</strong> {painting.price}</p>
              <p><strong>Style:</strong> {painting.style}</p>
              <p><strong>Category:</strong> {painting.category}</p>

              {/* Rating display */}
              <div className="painting-rating">
                <span>Rating: </span>
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className={`star ${star <= ratings[painting.id] ? 'filled' : ''}`}
                    onClick={() => handleRateClick(painting.id, star)}  // Update rating
                  >
                    ★
                  </span>
                ))}
              </div>

              <button onClick={() => handleBuyClick(painting)}>Buy</button>
            </div>
            <a href="/gallery">To See More</a>
          </div>
        ))}
      </div>

      <img src="/public/assets/Image10.jpg" alt="Shape" className="shape" />

      {/* Feedback and Comments Section */}
      <div className="feedback-container">
        <h2>Leave your feedback!</h2>

        {/* Feedback Form */}
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

        {/* Display Latest Feedbacks */}
        <div className="feedback-list">
          <h3>Latest Feedbacks</h3>
          <ul>
            {feedbacks.map((feedback, index) => (
              <li key={index}>
                <strong>{feedback.name} ({feedback.email}):</strong>
                <p>{feedback.feedback}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
};

export default MainContent;
