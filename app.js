const express = require('express')
const mongoose = require('mongoose')
const app = express()
require('dotenv/config')

// Import routes
const postsRoute = require('./routes/posts')

// Setting up middleware to execute postsRoute everytime /posts is requested.
app.use('/posts', postsRoute)

// Routes
app.get('/', (req, res) => {
    res.send("This is home!")
})

// Connecting to database
mongoose.connect(process.env.MongoConnect, { useNewUrlParser: true }, () => {
    console.log("Successfully connected to the database!!")
})

// Listening to the server
app.listen(8000)