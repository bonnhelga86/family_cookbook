const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  parent_id: {
    type: Number,
    required: true,
    default: 0,
  },
  title: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('category', categorySchema);
