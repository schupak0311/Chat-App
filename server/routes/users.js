const express = require('express');
const router = express.Router();

const {
    getAllUsers,
    getUserById,
    addUser,
    editUser,
    deleteUser
} = require('../services/usersService');

router
    .get('/', (req, res) => {
        getAllUsers().then(
            users => res.status(200).send(users),
            error => res.status(500).send('Error occurred')
        );

    })
    .get('/:id', (req, res) => {
        getUserById(req.params.id).then(
            user => res.status(200).send(user),
            error => {
                if (error instanceof ReferenceError) {
                    res.status(404).send('User not found');
                } else {
                    res.status(500).send('Error occurred');
                }
            }
        );
    })
    .post('/', (req, res) => {
        const { email, password, username, avatar = '' } = req.body;
        addUser(email, password, username, avatar).then(
            () => res.sendStatus(200),
            error => res.status(500).send('Error occurred')
        );
    })
    .put('/:id', (req, res) => {
        editUser(req.params.id, req.body).then(
            () => res.sendStatus(200),
            error => {
                if (error instanceof ReferenceError) {
                    res.status(404).send('User not found');
                } else {
                    res.status(500).send('Error occurred');
                }
            }
        );
    })
    .delete('/:id', (req, res) => {
        deleteUser(req.params.id).then(
            () => res.sendStatus(200),
            error => {
                if (error instanceof ReferenceError) {
                    res.status(404).send('User not found');
                } else {
                    res.status(500).send('Error occurred');
                }
            }
        );
    });

module.exports = router;