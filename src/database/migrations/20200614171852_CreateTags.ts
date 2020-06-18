import * as Knex from 'knex';

const tableName = 'tags';

export async function up(knex: Knex): Promise<any> {
  return knex.schema.createTable(tableName, t => {
    t.increments();

    t.string('name')
      .notNullable()
      .unique();
  });
}

export async function down(knex: Knex): Promise<any> {
  return knex.schema.dropTable(tableName);
}
