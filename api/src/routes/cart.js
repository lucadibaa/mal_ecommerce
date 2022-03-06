const router = require('express').Router()
const { addToCart, getCart, removeFromCart } = require('../controllers/cart')
const { requireSignin } = require('../middlewares')

// get all products
router.get('/', requireSignin, getCart)
router.post('/add', requireSignin, addToCart)
router.post('/remove', requireSignin, removeFromCart)

module.exports = router
