const express = require('express');
const router = express.Router();
const { PostComment } = require('../models');
const { User } = require('../models');

router.get('/post-comments', (req, res) => {
    const { postId } = req.body;

    PostComment.findAll({ where: { postId: postId }})
        .then((postComments) => {
            res.json(postComments);
        })
        .catch((err) => {
            console.error('Error fetching users: ', err);
            res.status(500).json({ error: 'Internal server error.' });
        })
});

router.get('/post-comments', (req, res) => {
    const { postId } = req.body;

    PostComment.findAll({ where: { id:postId } })
        .then((post) => {
            res.getPostReacts()
        })
        .catch((err) => {
            console.error('Error fetching users: ', err);
            res.status(500).json({ error: "Internal server error." })
        })
})

// router.post('/user', (req, res) => {
//     const { commentText, userId} = req.body;
    
//     User.findOne({ where: { id: userId } })
//     }).then((user) => {
//         user.createPost({
//             commentText: commentText,
//             createdAt: new Date(),
//             updatedAt: new Date()
//     }).then(() => {
//         res.status(200).json({ msg: "User Created" })
//     }).catch(() => {
//         console.error('Error fetching user: ', err);
//         res.status(500).json({ error: 'Internal server error.' })
//     })
// })

module.exports = router;