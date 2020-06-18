import { Body } from '@nestjs/common';
import { ApiController, ApiMethod } from '../utils/decorators/api.decorator';
import Note from './note.model';
import { NotesFindAllDto, NotesFindAllRes } from './notes.dto';
import { NotesService } from './notes.service';

@ApiController('notes')
export class NotesController {
  constructor(private service: NotesService) {}

  @ApiMethod()
  async findAll(@Body() dto: NotesFindAllDto): Promise<NotesFindAllRes> {
    return this.service.findAll(dto);
  }

  @ApiMethod()
  async create(@Body() data: Partial<Note>) {
    return this.service.create(data);
  }
}
