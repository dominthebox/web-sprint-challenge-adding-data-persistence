// build your `Project` model here
const db = require('../../data/dbConfig');

function findProjects() {
    return db('projects as p')
}

function addProject(project) {
    return db('projects').insert(project)
        .then(([project_id]) => {
            return db('projects')
                .where('project_id', project_id)
                .first()
        })
}

module.exports = {
    findProjects,
    addProject
}
