//back-end/routes/login.js

import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/Users.js';

router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  console.log('Login Attempt:', { username, password }); // Log provided credentials

  try {
    const user = await User.findOne({ username });
    if (!user) {
      console.log('User Not Found');
      return res.status(400).json({ message: 'Invalid username or password' });
    }

    console.log('Stored Hashed Password:', user.password); // Log the stored hash

    const isMatch = await bcrypt.compare(password, user.password);
    console.log('Password Match Result:', isMatch); // Log comparison result

    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid username or password' });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({ token });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ message: 'Server error' });
  }
});



export default router;
