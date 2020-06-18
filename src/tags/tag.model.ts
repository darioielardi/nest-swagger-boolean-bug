import { Column, columnTypes as ct, Table } from 'nestjs-objection';
import BaseModel from '../common/base-model';

@Table({ tableName: 'tags' })
export default class Tag extends BaseModel {
  @Column({ type: ct.increments })
  id: number;

  @Column({ type: ct.string, unique: true })
  name: string;
}

export type TagGraph = {};
