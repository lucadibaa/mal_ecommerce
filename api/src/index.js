const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')

const app = express()
dotenv.config()
app.use(express.json())
app.use(cors())

// routes
const authRoute = require('./routes/auth')
const productsRoute = require('./routes/products')

// use routes
app.use('/api/products', productsRoute)
app.use('/api/auth', authRoute)

// connect db
mongoose.connect(process.env.MONGODB_URL)
    .then(() => console.log('Database successfully connected!'))
    .catch(err => console.log(err))

app.listen(process.env.PORT || 5000, () => {
    console.log(`Server is up and running on port ${process.env.PORT || 5000}`)
})
