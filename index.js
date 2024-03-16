require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const mongoose = require('mongoose')

app.use(express.json())
app.use('/books', require('./controllers/books'))
app.use(cors())

app.get('/', (req, res) => {
    console.log('success')
    res.send('content')
})

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
app.listen(process.env.PORT)