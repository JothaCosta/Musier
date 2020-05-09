
exports.up = function(knex) {
    return knex.schema.createTable('band', function(table){
        table.increments('id');
        table.string('name').notNullable();
        table.string('style').notNullable();
        table.string('bio').notNullable();

        table.string('musician_id').notNullable();
        table.foreign('musician_id').references('musician_id').inTable('musician');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('band');
};
