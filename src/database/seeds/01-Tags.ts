import * as Knex from 'knex';
import Tag from '../../tags/tag.model';

export async function seed(knex: Knex): Promise<any> {
  await Tag.query(knex).insert([
    {
      name: 'Workout',
    },
    {
      name: 'Food',
    },
    {
      name: 'Diary',
    },
    {
      name: 'Cinema',
    },
    {
      name: 'Books',
    },
  ]);
}
