const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth.js');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json()); // Middleware to parse JSON
app.use('/api/auth', authRoutes); // Register API routes

const PORT = 5000;

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
