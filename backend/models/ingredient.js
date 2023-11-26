const mongoose = require('mongoose');

const ingredientSchema = new mongoose.Schema({
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

module.exports = mongoose.model('ingredient', ingredientSchema);
