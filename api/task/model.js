// build your `Task` model here
const db = require('../../data/dbConfig')

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
        })
}

module.exports = {
    findTasks,
    addTask
}
