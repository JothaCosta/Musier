
exports.up = function(knex) {
    return knex.schema.createTable('musician', function(table){
        table.increments();
        table.string('name').notNullable();
        table.integer('age').notNullable();
        table.string('email').notNullable();
        table.string('city').notNullable();
        table.string('whatsapp').notNullable();
        table.string('instrument').notNullable();
        table.string('password').notNullable();
        table.string('bio').notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('musician');
};
