// build your `Task` model here
const db = require('../../data/dbConfig')
const mappers = require('../../data/helpers/mappers')

function findTasks() {
    return db('tasks as t')
        .join('projects as p', 'p.project_id', 't.project_id')
        .select('t.*', 'project_name', 'project_description')
        .then(tasks => {
            return tasks.map(tasks =>
                mappers.taskToBody(tasks))
        })
}

function addTask(task) {
    return db('tasks').insert(task)
        .then(([task_id]) => {
            return db('tasks')
                .where('task_id', task_id)
                .first()
                .then(task_id => 
                    mappers.taskToBody(task_id))
        })
}

module.exports = {
    findTasks,
    addTask
}
