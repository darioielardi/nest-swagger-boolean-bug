import * as Knex from 'knex';

export async function up(knex: Knex): Promise<any> {
  return knex.schema.alterTable('themes', t => {
    t.enum('variant', ['LIGHT', 'DARK'], {
      useNative: true,
      enumName: 'theme_variant',
    });
  });
}

export async function down(knex: Knex): Promise<any> {
  await knex.schema.alterTable('themes', t => {
    t.dropColumn('variant');
  });

  await knex.raw(/*sql*/ `DROP TYPE theme_variant`);
}
