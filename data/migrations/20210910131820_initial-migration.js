exports.up = function(knex) {
    return knex.schema
        .createTable('projects', column => {
            column.increments('project_id')
            column.string('project_name', 128)
                .notNullable()
                .unique()
            column.string('project_description', 255)
            column.boolean('project_completed')
                .defaultTo(false)
        })
        .createTable('resources', column => {
            column.increments('resource_id')
            column.string('resource_name', 128)
                .notNullable()
                .unique()
            column.string('resource_description', 255)
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
