const mongoose = require('mongoose');

const resumeSchema = new mongoose.Schema({
  link: { type: String, required: true, trim: true },
}, { timestamps: true });

module.exports = mongoose.model('Resume', resumeSchema);