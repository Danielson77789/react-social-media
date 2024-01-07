const express = require('express');
const router = express.Router();
const { UserMessage } = require('../models');

router.get('/user-messages', (req, res) => {
    const { userId, recipientId } = req.body;

    UserMessage.findAll({ 
        where: { senderId:userId, recipientId:recipientId },
        order: [['sendDate', 'ASC']]})
        .then((msgs) => {
            res.json(msgs);
        })
        .catch((err) => {
            console.error('Error fetching users msgs: ', err);
            res.status(500).json({ error: 'Internal server error.' });
        })
});

router.post('/user-message', (req, res) => {
    const { messageText, senderId, recipientId } = req.body;

    UserMessage.create({
        messageText: messageText,
        senderId: senderId,
        recipientId: recipientId,
        sendDate: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
    }).then(() => {
        res.status(200).json({ msg: "Message created" })
    }).catch((err) => {
        console.error('Error posting users msgs: ', err);
        res.status(500).json({ error: 'Internal server error.' });
    })
})



module.exports = router;