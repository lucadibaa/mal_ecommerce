const router = require('express').Router()
const { getProducts, createProduct, getProductBySlug, deleteProduct } = require('../controllers/products')
const { requireSeller, requireSignin } = require('../middlewares')

// get all products
router.get('/', getProducts)
router.get('/:slug', getProductBySlug)
router.post('/create', requireSignin, requireSeller, createProduct)
router.delete('/delete', requireSignin, requireSeller, deleteProduct)

module.exports = router
