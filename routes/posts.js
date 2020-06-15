const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
    res.send("You're on posts")
})

router.get('/01', (req, res) => {
    res.send("You're on post #01.")
})

module.exports = router