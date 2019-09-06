const { getUserByUsername } = require('./usersService');

const verifyLogin = (username, password) => {
    return getUserByUsername(username).then(
        user => {
            if (user.password !== password) {
                throw new Error('Incorrect credentials');
            }

            return { username: user.username, avatar: user.avatar, isAdmin: user.isAdmin };
        },
        error => { throw error; });
};

module.exports = { verifyLogin };