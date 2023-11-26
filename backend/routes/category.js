const router = require('express').Router();
const { saveCategoryValidator } = require('../middlewares/recipeValidator');

const {
  getRecipes,
  saveCategory,
  updateCategory,
} = require('../controllers/category');

router.get('/', getRecipes);
router.post('/', saveCategoryValidator, saveCategory);
router.patch('/:recipeId', saveCategoryValidator, updateCategory);

module.exports = router;
