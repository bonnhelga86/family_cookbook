const router = require('express').Router();
const { saveIngredientValidator } = require('../middlewares/ingredientValidator');

const {
  getIngredient,
  saveIngredient,
  updateIngredient,
} = require('../controllers/ingredients');

router.get('/', getIngredient);
router.post('/', saveIngredientValidator, saveIngredient);
router.patch('/:ingredientId', saveIngredientValidator, updateIngredient);

module.exports = router;
