const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const handleErrors = err => {
    let errors = { firstName: '', lastName: '', email: '', password: '' }

    // duplicate error code
    if (err.code === 11000) {
        errors.email = "Utente già registrato"
        return errors
    }

    // validation errors
    if (err.message.includes('User validation failed')) {
        Object.values(err.errors).forEach(({ properties }) => {
            errors[properties.path] = properties.message
        })
    }

    return errors
}

exports.register = async (req, res) => {
    const { firstName, lastName, email, password } = req.body

    const user = new User({
        firstName,
        lastName,
        email,
        password
    })

    try {
        const savedUser = await user.save()
        res.status(201).json(savedUser)
    } catch (err) {
        const errors = handleErrors(err)
        res.status(400).json({ errors })
    }

}

exports.login = async (req, res) => {
    const { email, password } = req.body

    try {
        const user = await User.findOne({ email })

        if (!user) return res.status(401).json({ message: 'Utente non registrato!' })

        const decryptedPassword = await bcrypt.compare(password, user.password)

        if (!decryptedPassword) return res.status(400).json({ message: "Credenziali non corrette!" })

        res.status(200).json({ user })
    } catch (err) {
        res.status(500).json(err)
    }
}
