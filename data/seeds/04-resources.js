const resources = [
    { resource_name: 'Module Projects' },
    { resource_name: 'Dyson Vacuum' },
    { resource_name: 'Subaru WRX' },
]

exports.resources = resources

exports.seed = async function (knex) {
    await knex('resources').insert(resources)
}
