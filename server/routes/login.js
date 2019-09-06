const express = require('express');
const router = express.Router();

const {
    verifyLogin
} = require('../services/loginService');

router
    .post('/', (req, res) => {
        verifyLogin(req.body.username, req.body.password).then(
            userInfo => res.status(200).send(userInfo),
            error => {
                if (error instanceof ReferenceError || error.message === 'Incorrect credentials') {
                    res.status(401).send('Incorrect credentials');
                }
                else {
                    res.status(500).send('Error occurred');
                }

            }
        );

    });

module.exports = router;