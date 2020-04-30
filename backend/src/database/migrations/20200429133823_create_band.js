
exports.up = function(knex) {
    return knex.schema.createTable('band', function(table){
        table.increments();
        table.string('name').notNullable();
        table.string('style').notNullable();
        table.string('bio').notNullable();
        //tabela com referencia a tabela musician com email, whatsapp e cidad
    });
};

exports.down = function(knex) {
  
};
