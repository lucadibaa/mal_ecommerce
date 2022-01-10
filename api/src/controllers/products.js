const Product = require('../models/Product')

exports.getProducts = async (req, res) => {
    try {
        const products = await Product.find()
        res.status(201).json(products)
    } catch (err) {
        res.status(400).json({ err })
    }
}