import { Injectable } from '@nestjs/common';
import Note from './note.model';
import { NotesFindAllDto, NotesFindAllRes } from './notes.dto';
import { NotesRepository } from './notes.repository';

@Injectable()
export class NotesService {
  constructor(private readonly repo: NotesRepository) {}

  async findAll(dto: NotesFindAllDto): Promise<NotesFindAllRes> {
    const page = await this.repo.findAll(dto);

    return {
      items: page.results,
      count: page.total,
    };
  }

  findOne(id: number) {
    return this.repo.findOne(id);
  }

  create(data: Partial<Note>) {
    return this.repo.create(data);
  }

  update(id: number, data: Partial<Note>) {
    return this.repo.update(id, data);
  }

  delete(id: number) {
    return this.repo.delete(id);
  }

  unsetTheme(themeId: number) {
    return null;
  }

  async addTag(noteId: number, tagId: number) {
    return null;
  }

  async removeTag(noteId: number, tagId: number) {
    return null;
  }
}
