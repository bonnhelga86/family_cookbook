const mongoose = require('mongoose');

const ratingSchema = new mongoose.Schema({
  rate: {
    type: Number,
    required: true,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  dateCreated: {
    type: Number,
    required: true,
  },
  dateUpdated: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model('rating', ratingSchema);
