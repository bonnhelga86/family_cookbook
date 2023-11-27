const mongoose = require('mongoose');
const Ingredient = require('../models/ingredient');
const { ValidationError } = require('../errors/validation-error');

module.exports.getIngredient = async (req, res, next) => {
  try {
    const ingredient = await Ingredient.find({});
    res.send(ingredient);
  } catch (error) {
    next(error);
  }
};

module.exports.saveIngredient = async (req, res, next) => {
  const { title } = req.body;

  try {
    const ingredient = await Ingredient.create({ title });
    const newIngredient = await Ingredient.findById(ingredient._id);
    res.status(201).send(newIngredient);
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      next(new ValidationError('Некорректно заполнено одно из полей'));
    } else {
      next(error);
    }
  }
};

module.exports.updateIngredient = async (req, res, next) => {
  const { title } = req.body;

  try {
    const newIngredient = await Ingredient.findByIdAndUpdate(
      req.params.ingredientId,
      { title },
      { new: true, runValidators: true },
    );
    res.status(201).send(newIngredient);
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      next(new ValidationError('Некорректно заполнено одно из полей'));
    } else {
      next(error);
    }
  }
};
