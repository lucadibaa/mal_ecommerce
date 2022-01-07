const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')
const Product = require('./models/Product')

const app = express()
dotenv.config()
app.use(express.json())
app.use(cors())

// routes
app.get('/prodotti', async (req, res) => {
    const products = await Product.find()
    res.json(products)
})

// use routes

// connect db
mongoose.connect(process.env.MONGODB_URL)
    .then(() => console.log('Database successfully connected!'))
    .catch(err => console.log(err))

app.listen(process.env.PORT, () => {
    console.log(`Server is up and running on port ${process.env.PORT}`)
})
