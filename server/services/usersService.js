const usersRepository = require('../repositories/usersRepository');

const getAllUsers = () => usersRepository.getAll();

const getUserById = (id) => usersRepository.getById(id);

const getUserByUsername = (username) => usersRepository.getUserByUsername(username);

const addUser = (email, password, username, avatar) => usersRepository.add({ email, password, username, avatar, isAdmin: false });

const editUser = (id, data) => usersRepository.editById(id, data);

const deleteUser = (id) => usersRepository.deleteById(id);

module.exports = {
    getAllUsers,
    getUserById,
    getUserByUsername,
    addUser,
    editUser,
    deleteUser
};