const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        lowercase: true,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    confirmPassword: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ['admin', 'seller', 'user'],
        default: 'user',
        required: true,
    },
    creditCard: { type: String },
    address: {
        country: { type: String },
        state: { type: String },
        city: { type: String },
        street: { type: String },
        streetNumber: { type: String },
        zipCode: { type: Number }
    },
    contactNumber: { type: String }
}, { timestamps: true })

module.exports = mongoose.model('User', userSchema)
