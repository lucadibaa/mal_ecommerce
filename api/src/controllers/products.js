const Product = require('../models/Product')

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
        res.status(201).json(products)
    } catch (err) {
        res.status(400).json({ err })
    }
}

exports.createProduct = async (req, res) => {
    const { name, brand, description, category, price, quantity, discount, images } = req.body
    const { id } = req.user

    const product = new Product({
        name, brand, description, category, price, quantity, discount, images, createdBy: id
    })

    try {
        const savedProduct = await product.save()

        res.status(201).json({ success: true, savedProduct })
    } catch (err) {
        const errors = handleErrors(err)
        res.status(400).json({ success: false, errors })
    }
}
