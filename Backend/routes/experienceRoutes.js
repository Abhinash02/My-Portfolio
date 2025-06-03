const express = require('express');
const router = express.Router();
const Experience = require('../models/Experience');
const authMiddleware = require('../middleware/authMiddleware');

// Get all experiences
router.get('/', async (req, res) => {
  try {
    const experiences = await Experience.find();
    res.json(experiences);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Add experience
router.post('/', authMiddleware, async (req, res) => {
  try {
    const experience = new Experience(req.body);
    await experience.save();
    res.status(201).json(experience);
  } catch (err) {
    res.status(400).json({ message: 'Invalid data' });
  }
});

// Update experience
router.put('/:id', authMiddleware, async (req, res) => {
  try {
    const experience = await Experience.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!experience) return res.status(404).json({ message: 'Experience not found' });
    res.json(experience);
  } catch (err) {
    res.status(400).json({ message: 'Invalid data' });
  }
});

// Delete experience
router.delete('/:id', authMiddleware, async (req, res) => {
  try {
    const experience = await Experience.findByIdAndDelete(req.params.id);
    if (!experience) return res.status(404).json({ message: 'Experience not found' });
    res.json({ message: 'Experience deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;