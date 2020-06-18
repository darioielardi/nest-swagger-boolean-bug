import { Column, columnTypes as ct, Table } from 'nestjs-objection';
import BaseModel from '../common/base-model';

@Table({ tableName: 'note_tags' })
export default class NoteTag extends BaseModel {
  @Column({ type: ct.increments })
  id: number;

  @Column({ type: ct.integer })
  noteId: number;

  @Column({ type: ct.integer })
  tagId: number;
}
