const router = require('express').Router();
const { saveCategoryValidator } = require('../middlewares/categoryValidator');

const {
  getCategory,
  saveCategory,
  updateCategory,
} = require('../controllers/categories');

router.get('/', getCategory);
router.post('/', saveCategoryValidator, saveCategory);
router.patch('/:categoryId', saveCategoryValidator, updateCategory);

module.exports = router;
