const express = require('express');
const db = require('../db/connection');
const jobs = db.get('jobs'); 

const router = express.Router();

router.get('/jobs', async (req, res, next) => {
  try {
    const allJobs = await jobs.find({});
    res.json(allJobs);
  } catch (error) {
    next(error);
  }
});

module.exports = router;