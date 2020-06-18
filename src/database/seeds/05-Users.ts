import * as Knex from 'knex';
import User from '../../users/user.model';

export async function seed(knex: Knex): Promise<any> {
  await User.query(knex).insert([
    {
      name: 'Dario',
    },
    {
      name: 'Matteo',
    },
    {
      name: 'Franco',
    },
    {
      name: 'Eugenio',
    },
    {
      name: 'Giuseppe',
    },
  ]);
}
