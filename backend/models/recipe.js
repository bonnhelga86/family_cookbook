const mongoose = require('mongoose');
// const validator = require('validator');

const recipeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  ingredients: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'ingredient',
    required: true,
  },
  steps: {
    type: [String],
    required: true,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'category',
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  level: {
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
  likes: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'user',
    default: [],
  },
  rating: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'rating',
    default: [],
  },
});

module.exports = mongoose.model('recipe', recipeSchema);
