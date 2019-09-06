const express = require('express');
const router = express.Router();

const {
    getAllMessages,
    getMessageById,
    addMessage,
    editMessage,
    deleteMessage
} = require('../services/messagesService');

router
    .get('/', (req, res) => {
        getAllMessages().then(
            messages => res.status(200).send(messages),
            error => res.status(500).send('Error occurred')
        );

    })
    .get('/:id', (req, res) => {
        getMessageById(req.params.id).then(
            message => res.status(200).send(message),
            error => {
                if (error instanceof ReferenceError) {
                    res.status(404).send('Message not found');
                } else {
                    res.status(500).send('Error occurred');
                }
            }
        );
    })
    .post('/', (req, res) => {
        const { user, avatar = '', created_at, message } = req.body;
        addMessage(user, avatar, created_at, message).then(
            () => res.sendStatus(200),
            error => res.status(500).send('Error occurred')
        );
    })
    .put('/:id', (req, res) => {
        editMessage(req.params.id, req.body).then(
            () => res.sendStatus(200),
            error => {
                if (error instanceof ReferenceError) {
                    res.status(404).send('Message not found');
                } else {
                    res.status(500).send('Error occurred');
                }
            }
        );
    })
    .delete('/:id', (req, res) => {
        deleteMessage(req.params.id).then(
            () => res.sendStatus(200),
            error => {
                if (error instanceof ReferenceError) {
                    res.status(404).send('Message not found');
                } else {
                    res.status(500).send('Error occurred');
                }
            }
        );
    });

module.exports = router;