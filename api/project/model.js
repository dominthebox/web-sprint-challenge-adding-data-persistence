// build your `Project` model here
const db = require('../../data/dbConfig');
const mappers = require('../../data/helpers/mappers');

function findProjects() {
    return db('projects as p')
        .then(projects => {
            return projects.map(project => 
                mappers.projectToBody(project))
        })
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
