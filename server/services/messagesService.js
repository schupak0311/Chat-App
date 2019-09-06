const messagesRepository = require('../repositories/messagesRepository');

const getAllMessages = () => messagesRepository.getAll();

const getMessageById = (id) => messagesRepository.getById(id);

const addMessage = (user, avatar, created_at, message) => messagesRepository.add({ user, avatar, created_at, message, marked_read: false });

const editMessage = (id, data) => messagesRepository.editById(id, data);

const deleteMessage = (id) => messagesRepository.deleteById(id);

module.exports = {
    getAllMessages,
    getMessageById,
    addMessage,
    editMessage,
    deleteMessage
};