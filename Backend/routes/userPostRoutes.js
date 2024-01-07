const express = require('express');
const router = express.Router();
const { UserPost } = require('../models');
const { User } = require('../models');

router.get('/user-posts', (req, res) => {
    const { userId } = req.body;

    UserPost.findAll({ where: { userId: userId }})
        .then((userPosts) => {
            res.json(userPosts)
        })
        .catch((err) => {
            console.error('Error fetching users posts: ', err);
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
            console.error('Error fetching post: ', err);
            res.status(500).json({ error: 'Internal server error.' })
        })
});


router.post('/post', (req, res) => {
    const { postText, postTitle, userId, mediaLocation } = req.body;

    User.findOne({ where: { id: userId } })
        .then((user) => {
            user.createUserPost({
                postTitle: postTitle,
                postText: postText,
                mediaLocation: mediaLocation
            })
        })
        .then(() => {
            res.status(200).json("User post added successfully.");
        })
        .catch((err) => {
            res.status(500).json({ error: "Error with post" });
        })
})


module.exports = router;