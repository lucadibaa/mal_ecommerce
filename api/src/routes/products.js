const router = require('express').Router()
const { getProducts, createProduct } = require('../controllers/products')
const { requireSeller, requireSignin } = require('../middlewares')

// get all products
router.get('/', getProducts)
router.post('/create', requireSignin, requireSeller, createProduct)

module.exports = router
