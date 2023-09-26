const router = require('express').Router();

const {
  saveRecipeValidator,
  recipeIdValidator,
} = require('../middlewares/recipeValidator');

const {
  getRecipes,
  saveRecipe,
  updateRecipe,
  deleteRecipe,
  likeRecipe,
  dislikeRecipe,
} = require('../controllers/recipes');

router.get('/', getRecipes);
router.post('/', saveRecipeValidator, saveRecipe);
router.patch('/:recipeId', saveRecipeValidator, updateRecipe);
router.delete('/:recipeId', recipeIdValidator, deleteRecipe);
router.put('/:recipeId/likes', recipeIdValidator, likeRecipe);
router.delete('/:recipeId/likes', recipeIdValidator, dislikeRecipe);

module.exports = router;
