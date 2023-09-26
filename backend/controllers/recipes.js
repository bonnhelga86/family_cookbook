const mongoose = require('mongoose');
const Recipe = require('../models/recipe');
const { ValidationError } = require('../errors/validation-error');
const { NotFoundError } = require('../errors/not-found-error');
const { ForbiddenError } = require('../errors/forbidden-error');

module.exports.getRecipes = async (req, res, next) => {
  const owner = req.user;
  try {
    const recipe = await Recipe.find({ owner }).populate('owner').populate('likes');
    res.send(recipe);
  } catch (error) {
    next(error);
  }
};

module.exports.saveRecipe = async (req, res, next) => {
  const {
    name,
    image,
    product,
    description,
    duration,
    level,
    trailerLink,
  } = req.body;

  const owner = req.user;

  try {
    const recipe = await Recipe.create({
      name,
      image,
      product,
      description,
      duration,
      level,
      trailerLink,
      owner,
    });
    const newRecipe = await Recipe.findById(recipe._id).populate('owner');
    res.status(201).send(newRecipe);
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      next(new ValidationError('Некорректно заполнено одно из полей'));
    } else {
      next(error);
    }
  }
};

module.exports.updateRecipe = async (req, res, next) => {
  const {
    name,
    image,
    product,
    description,
    duration,
    level,
    trailerLink,
  } = req.body;

  const owner = req.user;

  try {
    const newRecipe = await Recipe.findByIdAndUpdate(
      req.params.recipeId,
      {
        name,
        image,
        product,
        description,
        duration,
        level,
        trailerLink,
        owner,
      },
      { new: true, runValidators: true },
    ).populate('owner').populate('likes');
    res.status(201).send(newRecipe);
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      next(new ValidationError('Некорректно заполнено одно из полей'));
    } else {
      next(error);
    }
  }
};

module.exports.deleteRecipe = async (req, res, next) => {
  try {
    const recipe = await Recipe.findById(req.params.recipeId).populate('owner');
    if (!recipe) throw new NotFoundError('Рецепт не найден');
    if (!recipe.owner._id.equals(req.user._id)) throw new ForbiddenError('Вы можете удалять только свои рецепты');
    await Recipe.findByIdAndRemove(req.params.recipeId);
    res.send({ message: 'Рецепт удален из сохраненных' });
  } catch (error) {
    if (error instanceof mongoose.Error.CastError) {
      next(new ValidationError('Не валидный id!'));
    } else {
      next(error);
    }
  }
};

module.exports.likeRecipe = async (req, res, next) => {
  try {
    const recipe = await Recipe.findByIdAndUpdate(
      req.params.recipeId,
      { $addToSet: { likes: req.user._id } },
      { new: true },
    ).populate('owner').populate('likes');
    if (!recipe) throw new NotFoundError('Рецепт не найден');
    res.send(recipe);
  } catch (error) {
    if (error instanceof mongoose.Error.CastError) {
      next(new ValidationError('Не валидный id!'));
    } else {
      next(error);
    }
  }
};

module.exports.dislikeRecipe = async (req, res, next) => {
  try {
    const recipe = await Recipe.findByIdAndUpdate(
      req.params.recipeId,
      { $pull: { likes: req.user._id } },
      { new: true },
    ).populate('owner');
    if (!recipe) throw new NotFoundError('Рецепт не найден');
    res.send(recipe);
  } catch (error) {
    if (error instanceof mongoose.Error.CastError) {
      next(new ValidationError('Не валидный id!'));
    } else {
      next(error);
    }
  }
};
