const express = require('express')
const router = express.Router()
const Post = require('../models/Post')

// Retrieves posts
router.get('/', async(req, res) => {
    try {
        // This will return all posts
        const posts = await Post.find()
        res.json(posts)
    } catch (err) {
        res.json({ message: err })
    }
})

// Submits posts
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

// Specific post
router.get('/:postId', async(req, res) => {
    try {
        const post = await Post.findById(req.params.postId)
        res.json(post)
    } catch (err) {
        res.json({ message: err })
    }
})

module.exports = router