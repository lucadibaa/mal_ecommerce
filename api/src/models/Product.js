const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Inserisci il nome del prodotto'],
        unique: true
    },
    brand: {
        type: String,
        required: [true, 'Inserisci il brand del prodotto']
    },
    description: {
        type: String,
        required: [true, 'Inserisci la descrizione del prodotto']
    },
    category: {
        type: String,
        required: [true, 'Inserisci la categoria del prodotto']
    },
    price: {
        type: Number,
        required: [true, 'Inserisci il prezzo del prodotto']
    },
    quantity: {
        type: Number,
        required: [true, 'Inserisci la quantità del prodotto']
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
