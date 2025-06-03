// const mongoose = require('mongoose');

// const projectSchema = new mongoose.Schema({
//   title: { type: String, required: true },
//   description: { type: String, required: true },
// }, { timestamps: true });

// module.exports = mongoose.model('Project', projectSchema);
const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  description: { type: String, required: true, trim: true },
  images: [{
    data: { type: Buffer, required: true },
    contentType: { type: String, required: true },
  }],
}, { timestamps: true });

module.exports = mongoose.model('Project', projectSchema);