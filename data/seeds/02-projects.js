const projects = [
    { project_name: 'Complete the Sprint Challenge', project_description: 'Do it' },
    { project_name: 'Clean up my apartment' },
    { project_name: 'Run errands' },
]

exports.projects = projects

exports.seed = async function (knex) {
    await knex('projects').insert(projects)
}
