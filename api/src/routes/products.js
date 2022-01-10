const router = require('express').Router()
const { getProducts } = require('../controllers/products')

// get all products
router.get('/', getProducts)

module.exports = router
