
const express = require('express');
const db = require('../db/connection');
const users = db.get('users');
const router = express.Router();

router.get('/range', async (req, res, next) => {
  try {
    const { start, end } = req.query;
    
    if (!start || !end) {
      return res.status(400).json({ 
        message: 'Start and end parameters are required' 
      });
    }
    

    const usersInRange = await users.find({
      _id: { 
        $gte: parseInt(start), 
        $lte: parseInt(end) 
      }
    });
    
    
    res.json(usersInRange);
  } catch (error) {
    next(error);
  }
});

module.exports = router;