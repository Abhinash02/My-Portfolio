const express = require('express');
const router = express.Router();
const About = require('../models/About');
const authMiddleware = require('../middleware/authMiddleware');

// Get about (single entry)
router.get('/', async (req, res) => {
  try {
    const about = await About.findOne();
    res.json(about || {});
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Update about
router.put('/', authMiddleware, async (req, res) => {
  try {
    let about = await About.findOne();
    if (!about) {
      about = new About(req.body);
    } else {
      about.bio = req.body.bio;
    }
    await about.save();
    res.json(about);
  } catch (err) {
    res.status(400).json({ message: 'Invalid data' });
  }
});

module.exports = router;