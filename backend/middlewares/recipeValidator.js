const { celebrate, Joi } = require('celebrate');

const saveRecipeValidator = celebrate({
  body: Joi.object().keys({
    title: Joi.string().required(),
    ingredients: Joi.array().required(),
    steps: Joi.array().required(),
    category: Joi.string().required().hex().length(24),
    duration: Joi.number().integer().required(),
    level: Joi.number().integer().required(),
  }),
}, {
  abortEarly: false,
  messages: {
    'string.empty': 'Не заполнено обязательное поле {#label}!',
    'any.required': 'Отсутствует обязательное поле {#label}',
    'string.pattern.base': 'Пожалуйста введите корректную ссылку.',
    'number.integer': 'Значение должно быть целым числом',
    'string.length': 'Не валидный id!',
    'string.hex': 'id должен содержать только hex символы',
  },
});

const recipeIdValidator = celebrate({
  params: Joi.object().keys({
    recipeId: Joi.string().required().hex().length(24),
  }),
}, {
  abortEarly: false,
  messages: {
    'string.empty': 'Не заполнено обязательное поле {#label}!',
    'any.required': 'Отсутствует обязательное поле {#label}',
    'string.length': 'Не валидный id!',
    'string.hex': 'id должен содержать только hex символы',
  },
});

module.exports = {
  saveRecipeValidator,
  recipeIdValidator,
};
