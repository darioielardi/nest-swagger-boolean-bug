import { ApiHideProperty } from '@nestjs/swagger';
import { Column, columnTypes as ct, Relation, Table } from 'nestjs-objection';
import BaseModel from '../common/base-model';
import Tag, { TagGraph } from '../tags/tag.model';
import Theme, { ThemeGraph } from '../themes/theme.model';
import User, { UserGraph } from '../users/user.model';

@Table({ tableName: 'notes' })
export default class Note extends BaseModel {
  @Column({ type: ct.increments })
  id: number;

  @Column({ type: ct.text })
  text: string;

  @Column({ type: ct.integer })
  themeId: number;

  @Relation({
    modelClass: Theme,
    relation: BaseModel.BelongsToOneRelation,
    join: { from: 'notes.themeId', to: 'themes.id' },
  })
  theme: Theme;

  @Column({ type: ct.integer })
  userId: number;

  @Relation({
    modelClass: User,
    relation: BaseModel.BelongsToOneRelation,
    join: { from: 'notes.userId', to: 'users.id' },
  })
  user: User;

  @Relation({
    modelClass: Tag,
    relation: BaseModel.ManyToManyRelation,
    join: {
      from: 'notes.id',
      through: { from: 'note_tags.noteId', to: 'note_tags.tagId' },
      to: 'tags.id',
    },
  })
  tags: Tag[];

  @ApiHideProperty()
  static mock = ({ id = 1, text = 'Unknown', userId = 1 }): Note => {
    const note = new Note();
    note.id = id;
    note.text = text;
    note.userId = userId;
    return note;
  };
}

export type NoteGraph = {
  theme?: true | ThemeGraph;
  user?: true | UserGraph;
  tags?: true | TagGraph;
};
