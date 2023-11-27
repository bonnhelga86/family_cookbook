const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  parentId: {
    type: String,
    // ref: 'category',
    default: '0',
  },
  title: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('category', categorySchema);
