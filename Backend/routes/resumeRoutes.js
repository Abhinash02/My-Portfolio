const express = require('express');
const router = express.Router();
const Resume = require('../models/Resume');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/', async (req, res) => {
  try {
    const resume = await Resume.findOne();
    res.json(resume || {});
  } catch (err) {
    console.error('Get resume error:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

router.post('', authMiddleware, async (req, res) => {
  try {
    const { link } = req.body;
    if (!link) {
      return res.status(400).json({ error: 'Link is required' });
    }
    let resume = await Resume.findOne();
    if (resume) {
      resume.link = link;
      await resume.save();
    } else {
      resume = await Resume.create({ link });
    }
    res.status(201).json(resume);
  } catch (err) {
    console.error('Save resume error:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

router.delete('', authMiddleware, async (req, res) => {
  try {
    const resume = await Resume.findOneAndDelete();
    if (!resume) {
      return res.status(404).json({ error: 'Resume not found' });
    }
    res.json({ message: 'Resume deleted successfully' });
  } catch (err) {
    console.error('Delete resume error:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;