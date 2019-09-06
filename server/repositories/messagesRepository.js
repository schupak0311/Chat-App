const BaseRepository = require('./baseRepository');

class MessagesRepository extends BaseRepository {
    constructor(filePath)  {
        super(filePath);
    }
}

module.exports = new MessagesRepository('data/messages.json');