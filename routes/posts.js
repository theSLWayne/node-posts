const express = require('express')
const router = express.Router()
const Post = require('../models/Post')

router.get('/', async(req, res) => {
    try {
        // This will return all posts
        const posts = await Post.find()
        res.json(posts)
    } catch (err) {
        res.json({ message: err })
    }
})

router.post('/', async(req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    })

    // saving the post details to the database. This process is done as a promise.
    try {
        const savedPost = await post.save()
        res.json(savedPost)
    } catch (err) {
        res.json({ message: err })
    }
})

module.exports = router