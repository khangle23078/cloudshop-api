const express = require('express');
const { getProducts, getProduct, createProduct, updateProductById, deleteProductById } = require('./../controllers/product.controller')
const router = express.Router()

router.get('/getAll', getProducts)
router.get('/getById/:id', getProduct)
router.post('/create', createProduct)
router.post('/updateById/:id', updateProductById)
router.post('/deleteById/:id', deleteProductById)

module.exports = router