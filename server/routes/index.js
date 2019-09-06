const messageRoutes = require('./messages');
const usersRoutes = require('./users');
const loginRoutes = require('./login');

module.exports = (app) => {
    app.use('/messages', messageRoutes);
    app.use('/users', usersRoutes);
    app.use('/login', loginRoutes);
};