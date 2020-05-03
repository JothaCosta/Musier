
exports.up = function(knex) {
    return knex.schema.createTable('band', function(table){
        table.increments('id');
        table.string('name').notNullable();
        table.string('style').notNullable();
        table.string('bio').notNullable();

        table.string('musician_id').notNullable();
        table.foreign('musician_id').references('musician_id').inTable('musician');
        /*
        table.string('email').notNullable();
        table.foreign('email').references('email').inTable('musician');

        table.string('whatsapp').notNullable();
        table.foreign('whatsapp').references('whatsapp').inTable('musician');

        table.string('city').notNullable();
        table.foreign('city').references('city').inTable('musician');
        */


        //tabela com referencia a tabela musician com email, whatsapp e cidade
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('band');
};
