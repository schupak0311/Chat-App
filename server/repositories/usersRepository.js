const BaseRepository = require('./baseRepository');

class UsersRepository extends BaseRepository {
    constructor(filePath)  {
        super(filePath);
    }

    getUserByUsername(username) {
        return this.readFile().then(
            entities => {
                const entity = entities.find(entity => entity.username === username);
                if (!entity) throw ReferenceError('Not found');

                return entity;
            },
            error => { throw error; }
        );
    }
}

module.exports = new UsersRepository('data/users.json');