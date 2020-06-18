import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-objection';
import { Page } from 'objection';
import { MyQueryBuilder } from '../common/base-model';
import { paginate } from '../utils/pagination.utils';
import NoteTag from './note-tag.model';
import Note, { NoteGraph } from './note.model';
import { NotesFindAllDto } from './notes.dto';

@Injectable()
export class NotesRepository {
  constructor(
    @InjectModel(Note) private model: typeof Note,
    @InjectModel(NoteTag) private tagModel: typeof NoteTag,
  ) {}

  findAll(dto: NotesFindAllDto): MyQueryBuilder<Note, Page<Note>> {
    const query = this.model.query().load<NoteGraph>({
      user: true,
    });
    return paginate(query, dto.pagination);
  }

  findOne(id: number) {
    return this.model
      .query()
      .findById(id)
      .withGraphFetched({
        tags: true,
        theme: true,
        user: true,
      });
  }

  create(data: Partial<Note>) {
    return this.model
      .query()
      .insert(data)
      .returning('*');
  }

  update(id: number, data: Partial<Note>) {
    return this.model
      .query()
      .patch(data)
      .where({ id })
      .returning('*')
      .first();
  }

  async delete(id: number): Promise<void> {
    await this.model.transaction(async tx => {
      await this.tagModel
        .query()
        .delete()
        .where<NoteTag>({ noteId: id })
        .transacting(tx);

      return this.model
        .query()
        .delete()
        .where<Note>({ id })
        .transacting(tx);
    });
  }
}
