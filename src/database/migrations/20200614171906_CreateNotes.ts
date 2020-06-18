import * as Knex from 'knex';

const tableName = 'notes';

export async function up(knex: Knex) {
  return knex.schema.createTable(tableName, t => {
    t.increments();

    t.text('text');

    t.integer('theme_id')
      .references('id')
      .inTable('themes');
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable(tableName);
}
