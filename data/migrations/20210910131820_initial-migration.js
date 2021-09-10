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
        .createTable('tasks', column => {
            column.increments('task_id')
            column.string('task_description', 255)
                .notNullable()
            column.string('task_notes', 255)
            column.boolean('task_completed')
                .defaultTo(false)
            column.integer('project_id')
                .unsigned()
                .notNullable()
                .references('project_id')
                .inTable('projects')
                .onDelete('RESTRICT')
                .onUpdate('RESTRICT')
        })
        .createTable('project_resources', column => {
            column.increments('project_resource_id')
            column.timestamps(true, true)
            column.integer('project_id')
                .unsigned()
                .notNullable()
                .references('project_id')
                .inTable('projects')
                .onDelete('RESTRICT')
                .onUpdate('RESTRICT')
            column.integer('resource_id')
                .unsigned()
                .notNullable()
                .references('resource_id')
                .inTable('resources')
                .onDelete('RESTRICT')
                .onUpdate('RESTRICT')
        })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('tasks')
        .dropTableIfExists('resources')
        .dropTableIfExists('projects')
};
