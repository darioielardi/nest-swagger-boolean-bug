import * as Knex from 'knex';

export async function up(knex: Knex): Promise<any> {
  return knex.schema.alterTable('notes', t => {
    t.integer('user_id')
      .references('id')
      .inTable('users');
  });
}

export async function down(knex: Knex): Promise<any> {
  return knex.schema.alterTable('notes', t => {
    t.dropColumn('user_id');
  });
}
