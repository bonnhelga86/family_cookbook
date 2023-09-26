const { celebrate, Joi } = require('celebrate');

const saveRecipeValidator = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required(),
    image: Joi.string().required().pattern(/^https?:\/\/(www.)?[a-z0-9-]{2,}\.[a-z]{2,6}(S)*/),
    product: Joi.array().required(),
    description: Joi.string().required(),
    duration: Joi.number().integer().required(),
    level: Joi.number().integer().required(),
    trailerLink: Joi.string().required().pattern(/^https?:\/\/(www.)?[a-z0-9-]{2,}\.[a-z]{2,6}(S)*/),
  }),
}, {
  abortEarly: false,
  messages: {
    'string.empty': 'Не заполнено обязательное поле {#label}!',
    'any.required': 'Отсутствует обязательное поле {#label}',
    'string.pattern.base': 'Пожалуйста введите корректную ссылку.',
    'number.integer': 'Значение должно быть целым числом',
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
