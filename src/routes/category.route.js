const { Router } = require("express");
const { getCategories, createCategory, getCategoryById, updateCategoryById, deleteCategoryById } = require("../controllers/category.controller");
const router = Router();

router.get('/getAll', getCategories)
router.get('/getById/:id', getCategoryById)
router.post('/create', createCategory)
router.post('/updateById/:id', updateCategoryById)
router.post('/deleteById/:id', deleteCategoryById)

module.exports = router;