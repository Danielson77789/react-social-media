const express = require('express');
const router = express.Router();
const { UserMessage } = require('../models');

// router.get('/user-message', (req, res) => {
    // const { postId } = req.body;

    // PostComment.findAll({ where: { postId: postId }})
    //     .then((postComments) => {
    //         res.json(postComments);
    //     })
    //     .catch((err) => {
    //         console.error('Error fetching users: ', err);
    //         res.status(500).json({ error: 'Internal server error.' });
    //     })
// });



module.exports = router;