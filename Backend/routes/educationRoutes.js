const express = require('express');
const router = express.Router();
const Education = require('../models/Education');
const authMiddleware = require('../middleware/authMiddleware');

// Get all education entries (public)
router.get('/education', async (req, res) => {
  try {
    const education = await Education.find();
    res.json(education);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch education data' });
  }
});

// Add education (admin only)
router.post('/', authMiddleware, async (req, res) => {
  try {
    const education = new Education(req.body);
    await education.save();
    res.status(201).json(education);
  } catch (err) {
    res.status(400).json({ message: 'Invalid data' });
  }
});

// Update education (admin only)
router.put('/:id', authMiddleware, async (req, res) => {
  try {
    const education = await Education.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!education) return res.status(404).json({ message: 'Education not found' });
    res.json(education);
  } catch (err) {
    res.status(400).json({ message: 'Invalid data' });
  }
});

// Delete education (admin only)
router.delete('/:id', authMiddleware, async (req, res) => {
  try {
    const education = await Education.findByIdAndDelete(req.params.id);
    if (!education) return res.status(404).json({ message: 'Education not found' });
    res.json({ message: 'Education deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
