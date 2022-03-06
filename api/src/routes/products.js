const router = require('express').Router()
const { getProducts, createProduct, getProductBySlug } = require('../controllers/products')
const { requireSeller, requireSignin } = require('../middlewares')

// get all products
router.get('/', getProducts)
router.get('/:slug', getProductBySlug)
router.post('/create', requireSignin, requireSeller, createProduct)

module.exports = router
