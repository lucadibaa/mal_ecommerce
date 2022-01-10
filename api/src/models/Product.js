const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    discount: {
        type: Number,
        default: 0
    },
    images: { type: Array },
    reviews: [
        {
            userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
            review: String
        }
    ],
    createdBy: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User',
        required: true
    },
}, { timestamps: true })

module.exports = mongoose.model('Product', productSchema)
