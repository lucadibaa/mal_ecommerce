const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const { isEmail } = require('validator')

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        trim: true,
        required: [true, 'Inserisci il tuo nome'],
    },
    lastName: {
        type: String,
        trim: true,
        required: [true, 'Inserisci il tuo cognome'],
    },
    email: {
        type: String,
        lowercase: true,
        trim: true,
        unique: true,
        validate: [isEmail, "Inserisci un'email valida"],
        required: [true, 'Inserisci la tua email'],
    },
    password: {
        type: String,
        minlength: [6, 'La password deve avere almeno 6 caratteri'],
        required: [true, 'Inserisci una password'],
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

userSchema.pre('save', async function (next) {
    const salt = await bcrypt.genSalt()
    this.password = await bcrypt.hash(this.password, salt)
    next()
})

module.exports = mongoose.model('User', userSchema)
