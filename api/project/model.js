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

    return db('projects as p').insert(project)
        .then(([project_id]) => {
            return db('projects as p') 
                .where('project_id', project_id)
                .first()
                .then(project_id => 
                    mappers.projectToBody(project_id))
        })
}

module.exports = {
    findProjects,
    addProject
}
