const express = require('express');
const router = express.Router();
const { PostComment } = require('../models');

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



module.exports = router;