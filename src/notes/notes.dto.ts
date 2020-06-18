import { PaginationDto } from '../common/common.dto';
import { Pagination } from '../utils/decorators/validation.decorator';
import Note from './note.model';

export class NotesFindAllDto {
  @Pagination()
  pagination?: PaginationDto;
}

export class NotesFindAllRes {
  items: Note[];
  count?: number;
}

export class NotesFindOneDto {
  id: number;
}
