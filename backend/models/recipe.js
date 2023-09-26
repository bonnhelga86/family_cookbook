const mongoose = require('mongoose');
const validator = require('validator');

const recipeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
    validate: {
      validator: (str) => validator.isURL(str),
      message: ({ value }) => `${value} Не валидная ссылка`,
    },
  },
  product: {
    type: [String],
    required: true,
  },
  description: {
    type: String,
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
  trailerLink: {
    type: String,
    validate: {
      validator: (str) => validator.isURL(str),
      message: ({ value }) => `${value} Не валидная ссылка`,
    },
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  likes: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'user',
    default: [],
  },
});

module.exports = mongoose.model('recipe', recipeSchema);
