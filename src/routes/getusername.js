const express = require('express');
const db = require('../db/connection');
const users = db.get('users');
const router = express.Router();

router.get('/username/:username', async (req, res, next) => {
  try {
    const { username } = req.params;
    const user = await users.findOne({ username: username });
    
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    
    res.json(user);
  } catch (error) {
    next(error);
  }
});