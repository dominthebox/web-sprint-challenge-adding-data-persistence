const project_resources = [
    { project_id: 1, resource_id: 1 },
    { project_id: 2, resource_id: 2 },
    { project_id: 3, resource_id: 3 },
]

exports.project_resources = project_resources

exports.seed = async function (knex) {
    await knex('project_resources').insert(project_resources)
}
