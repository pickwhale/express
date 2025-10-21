const express = require('express');
const db = require('../db/connection');
const users = db.get('users');
const router = express.Router();


router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const users = await users.findOne({
      _id: id,
    });

    if (!users) {
      const error = new Error('Users does not exist');
      return next(error);
    }

    res.json(users);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
