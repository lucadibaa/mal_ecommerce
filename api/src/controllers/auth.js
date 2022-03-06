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

const maxAge = 10 * 24 * 60 * 60
const handleToken = (id, role) => {
    return jwt.sign(
        { id, role },
        process.env.JWT_SECRET,
        { expiresIn: maxAge })
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
        const token = handleToken(savedUser._id, savedUser._doc.role)
        const { password, address, ...others } = savedUser._doc
        res.status(201).json({ success: true, ...others, token })
    } catch (err) {
        const errors = handleErrors(err)
        res.status(400).json({ success: false, errors })
    }

}

exports.login = async (req, res) => {
    const { email } = req.body
    const bodyPsw = req.body.password

    try {
        const user = await User.findOne({ email })

        if (!user) return res.status(401).json({ message: 'Utente non registrato!' })

        const decryptedPassword = await bcrypt.compare(bodyPsw, user.password)

        if (!decryptedPassword) return res.status(400).json({ message: "Credenziali non corrette!" })

        const token = handleToken(user._id, user.role)
        const { password, ...others } = user._doc

        res.status(200).json({ success: true, ...others, token })
    } catch (err) {
        res.status(500).json({ success: false, err })
    }
}
