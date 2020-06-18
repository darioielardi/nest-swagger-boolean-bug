import * as Knex from 'knex';

const tableName = 'users';

export async function up(knex: Knex): Promise<any> {
  return knex.schema.alterTable(tableName, t => {
    t.jsonb('details')
      .notNullable()
      .defaultTo(`{}`);
  });
}

export async function down(knex: Knex): Promise<any> {
  return knex.schema.alterTable(tableName, t => {
    t.dropColumn('details');
  });
}
