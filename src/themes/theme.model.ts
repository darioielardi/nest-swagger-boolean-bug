import { Column, columnTypes as ct, Table } from 'nestjs-objection';
import BaseModel from '../common/base-model';

export enum ThemeVariant {
  LIGHT = 'LIGHT',
  DARK = 'DARK',
}

@Table({ tableName: 'themes' })
export default class Theme extends BaseModel {
  @Column({ type: ct.increments })
  id: number;

  @Column({ type: ct.string })
  name: string;

  @Column({ type: ct.string })
  variant: ThemeVariant;

  @Column({ type: ct.string })
  fontFamily: string;

  @Column({ type: ct.integer })
  fontSize: number;

  @Column({ type: ct.string })
  background: string;

  @Column({ type: ct.string })
  foreground: string;
}

export type ThemeGraph = {};
