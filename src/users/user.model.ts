import { Column, columnTypes as ct, Relation, Table } from 'nestjs-objection';
import BaseModel from '../common/base-model';
import Note, { NoteGraph } from '../notes/note.model';
import path = require('path');

export class UserDetails {
  age: number;
}

@Table({ tableName: 'users' })
export default class User extends BaseModel {
  @Column({ type: ct.increments })
  id: number;

  @Column({ type: ct.string, unique: true })
  name: string;

  @Column({ type: ct.jsonb })
  details: UserDetails;

  @Relation({
    modelClass: path.join(__dirname, '../notes/note.model'),
    relation: BaseModel.HasManyRelation,
    join: { from: 'users.id', to: 'notes.userId' },
  })
  notes?: Note[];
}

export type UserGraph = {
  notes?: true | NoteGraph;
};
