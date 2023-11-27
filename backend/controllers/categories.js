const mongoose = require('mongoose');
const Category = require('../models/category');
const { ValidationError } = require('../errors/validation-error');

module.exports.getCategory = async (req, res, next) => {
  try {
    const category = await Category.find({});
    res.send(category);
  } catch (error) {
    next(error);
  }
};

module.exports.saveCategory = async (req, res, next) => {
  const { parentId, title } = req.body;

  try {
    const category = await Category.create({ parentId, title });
    const newCategory = await Category.findById(category._id);
    res.status(201).send(newCategory);
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      next(new ValidationError('Некорректно заполнено одно из полей'));
    } else {
      next(error);
    }
  }
};

module.exports.updateCategory = async (req, res, next) => {
  const { parentId, title } = req.body;

  try {
    const newCategory = await Category.findByIdAndUpdate(
      req.params.categoryId,
      { parentId, title },
      { new: true, runValidators: true },
    );
    res.status(201).send(newCategory);
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      next(new ValidationError('Некорректно заполнено одно из полей'));
    } else {
      next(error);
    }
  }
};
