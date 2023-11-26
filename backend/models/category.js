const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  parentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'category',
    required: true,
    default: 0,
  },
  title: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('category', categorySchema);
