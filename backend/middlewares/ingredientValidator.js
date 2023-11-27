const { celebrate, Joi } = require('celebrate');

const saveIngredientValidator = celebrate({
  body: Joi.object().keys({
    title: Joi.string().required(),
  }),
}, {
  abortEarly: false,
  messages: {
    'string.empty': 'Не заполнено обязательное поле {#label}!',
    'any.required': 'Отсутствует обязательное поле {#label}',
  },
});

module.exports = { saveIngredientValidator };
