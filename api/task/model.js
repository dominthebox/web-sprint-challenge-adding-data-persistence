// build your `Task` model here
const db = require('../../data/dbConfig')
const mappers = require('../../data/helpers/mappers')

function findTasks() {
    return db('tasks as t')
        .leftJoin('projects as p', 't.task_id', 'p.project_id')
        .select('t.*', 'p.project_name', 'p.project_description')
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
