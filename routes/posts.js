const express = require('express')
const router = express.Router()
const Post = require('../models/Post')

router.get('/', (req, res) => {
    res.send("You're on posts")
})

router.post('/', (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    })

    // saving the post details to the database. This process is done as a promise.
    post.save()
        .exec()
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.json({ message: err })
        })
})

module.exports = router