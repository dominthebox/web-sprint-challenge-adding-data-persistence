// build your `Project` model here
const db = require('../../data/dbConfig');

function find() {

    return db('projects as p')
}

module.exports = {
    find
}
