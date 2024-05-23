const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../models/user');

// User login
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  // Here, you would authenticate the user using your preferred method (e.g., comparing passwords)
  // For simplicity, let's assume we have a user in the database with a username and password
  const user = await User.findOne({ username, password });
  if (!user) {
    return res.status(401).json({ error: 'Invalid username or password' });
  }

  // If authentication is successful, generate and return a JWT token
  const token = jwt.sign({ username: user.username }, process.env.JWT_SECRET, { expiresIn: '1h' }); // replace 'your_secret_key' with your actual secret key
  res.json({ token });
});

module.exports = router;
