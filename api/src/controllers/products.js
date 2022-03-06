const Product = require('../models/Product')
const slugify = require('slugify')

const handleErrors = err => {
    let errors = { name: '', brand: '', description: '', category: '', price: '', quantity: '' }

    // duplicate error code
    if (err.code === 11000) {
        errors.name = "Prodotto già esistente"
        return errors
    }

    // validation errors
    if (err.message.includes('Product validation failed')) {
        Object.values(err.errors).forEach(({ properties }) => {
            errors[properties.path] = properties.message
        })
    }

    return errors
}

exports.getProducts = async (req, res) => {
    try {
        const products = await Product.find()
        res.status(200).json({ success: true, products })
    } catch (err) {
        res.status(400).json({ success: false, err })
    }
}

exports.getProductBySlug = async (req, res) => {
    const { slug } = req.params

    try {
        const product = await Product.findOne({ slug })

        if (!product) return res.status(404).json({ success: false, message: 'Product not found' })

        res.status(200).json({ success: true, product })
    } catch (err) {
        res.status(400).json({ success: false, err })
    }
}

exports.createProduct = async (req, res) => {
    const { name, brand, description, category, price, quantity, discount, images } = req.body
    const { id } = req.user

    const product = new Product({
        name, slug: slugify(name, { lower: true }), brand, description, category, price, quantity, discount, images, createdBy: id
    })

    try {
        const savedProduct = await product.save()

        res.status(201).json({ success: true, savedProduct })
    } catch (err) {
        const errors = handleErrors(err)
        res.status(400).json({ success: false, errors })
    }
}
