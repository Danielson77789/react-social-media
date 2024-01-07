const express = require('express');
const router = express.Router();
const { User } = require('../models');

router.get('/user', (req, res) => {
    const { id } = req.body;

    User.findOne({ where: { id: id }})
        .then((user) => {
            res.json(user)
        })
        .catch((err) => {
            console.error('Error fetching users: ', err);
            res.status(500).json({ error: 'Internal server error.' })
        })
});

router.post('/user', (req, res) => {
    const { fn, ln, un, em, ps, dob, at} = req.body;
    User.create({
        firstName: fn,
        lastName: ln,
        username: un,
        email: em,
        password: ps,
        dateOfBirth: dob,
        lastLogin: new Date(),
        aboutText: at,
        createdAt: new Date(),
        updatedAt: new Date()
    }).then(() => {
        res.status(200).json({ msg: "User Created" })
    }).catch(() => {
        console.error('Error fetching user: ', err);
        res.status(500).json({ error: 'Internal server error.' })
    })
})

module.exports = router;