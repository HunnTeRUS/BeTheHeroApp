exports.up = function(knex) {
    return knex.schema.createTable('incidents', (table) => {
        table.increments();

        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable();

        table.string('ong_id').notNullable();
      
        table.foreign('ong_id').references('id').inTable('ongs');
    })
};

//migrate:roolback
//migrade:latest
//migrate:status

exports.down = function(knex) {
  table.schema.dropTable('incidents');
};
