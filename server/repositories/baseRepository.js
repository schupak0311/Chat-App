const fs = require('fs');

class BaseRepository {
    constructor(filePath) {
        this.filePath = filePath;
    }

    readFile() {
        return new Promise((resolve, reject) => {
            fs.readFile(this.filePath, (error, data) => {
                if (error) reject(error);
                resolve(JSON.parse(data));
            });
        });
    }

    writeFile(data) {
        fs.writeFile(this.filePath, JSON.stringify(data), (error) => {
            if (error) throw error;
        });
    }

    getAll() {
        return this.readFile();
    }

    getById(id) {
        return this.readFile().then(
            entities => {
                const entity = entities.find(entity => entity.id === +id);
                if (!entity) throw ReferenceError('Not found');

                return entity;
            },
            error => { throw error; }
        );
    }

    add(entity) {
        return this.readFile().then(
            entities => {
                entities.sort((entityA, entityB) => {
                    return entityA.id - entityB.id;
                });
                const entityWithId = Object.assign({ id: entities[entities.length - 1].id + 1 }, entity);
                this.writeFile([...entities, entityWithId])
            },
            error => { throw error; }
        );
    }

    editById(id, data) {
        return this.readFile().then(
            entities => {
                const entityIndex = entities.findIndex(entity => entity.id === +id);
                if (entityIndex === -1) throw ReferenceError('Not found');

                entities[entityIndex] = Object.assign(entities[entityIndex], data);
                this.writeFile(entities);
            },
            error => { throw error; }
        );
    }

    deleteById(id) {
        return this.readFile().then(
            entities => {
                const entityIndex = entities.findIndex(entity => entity.id === +id);
                if (entityIndex === -1) throw ReferenceError('Not found');

                entities.splice(entityIndex, 1);
                this.writeFile(entities);
            },
            error => { throw error; }
        );
    }
}

module.exports = BaseRepository;