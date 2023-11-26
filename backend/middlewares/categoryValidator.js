const { celebrate, Joi } = require('celebrate');

const saveCategoryValidator = celebrate({
  body: Joi.object().keys({
    title: Joi.string().required(),
    parentId: Joi.string().required().hex().length(24),
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

module.exports = { saveCategoryValidator };
