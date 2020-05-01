
exports.up = function(knex) {
    return knex.schema.createTable('band', function(table){
        table.increments();
        table.string('name').notNullable();
        table.string('style').notNullable();
        table.string('bio').notNullable();

        table.string('musician_id').notNullable();
        table.foreign('musician_id').references('id').inTable('musician');

        //tabela com referencia a tabela musician com email, whatsapp e cidade
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('band');
};
