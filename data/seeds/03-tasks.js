const tasks = [
    { task_description: 'Achieve MVP', task_notes: 'follow the README', project_id: 1 },
    { task_description: 'Tidy up', task_notes: 'Take out trash, do laundry, vacuum', project_id: 2 },
    { task_description: 'Get groceries', project_id: 3 },
]

exports.tasks = tasks

exports.seed = async function (knex) {
    await knex('tasks').insert(tasks)
}
