
exports.up = function(knex) {
    return knex.schema.createTable('event', function(table){
        table.increments();
        //table.string('avatar').notNullable();
        table.string('name').notNullable();
        table.string('city').notNullable();
        table.string('bio').notNullable();
        table.string('facebook').notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('event');
};
