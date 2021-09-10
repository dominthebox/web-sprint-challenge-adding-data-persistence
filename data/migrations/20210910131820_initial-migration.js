exports.up = function(knex) {
    return knex.schema
        .createTable('projects', table => {
            table.increments('project_id')
        })
        .createTable('resources', table => {
            table.increments('resource_id')
        })
        .createTable('tasks', table => {
            table.increments('task_id')
        })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('tasks')
        .dropTableIfExists('resources')
        .dropTableIfExists('projects')
};
