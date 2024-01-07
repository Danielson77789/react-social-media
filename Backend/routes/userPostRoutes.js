const express = require('express');
const router = express.Router();
const { UserPost } = require('../models');

router.get('/user-posts', (req, res) => {
    const { userId } = req.body;

    UserPost.findAll({ where: { userId: userId }})
        .then((userPosts) => {
            res.json(userPosts)
        })
        .catch((err) => {
            console.error('Error fetching users: ', err);
            res.status(500).json({ error: 'Internal server error.' })
        })
});

router.get('/post', (req, res) => {
    const { id } = req.body;

    UserPost.findOne({ where: { id: id }})
        .then((post) => {
            res.json(post)
        })
        .catch((err) => {
            console.error('Error fetching users: ', err);
            res.status(500).json({ error: 'Internal server error.' })
        })
});

// router.post('/post', (req, res) => {
//     const {}
// })


module.exports = router;