import { Module } from '@nestjs/common';
import { ObjectionModule } from 'nestjs-objection';
import NoteTag from './note-tag.model';
import Note from './note.model';
import { NotesController } from './notes.controller';
import { NotesRepository } from './notes.repository';
import { NotesService } from './notes.service';

@Module({
  controllers: [NotesController],
  imports: [ObjectionModule.forFeature([Note, NoteTag])],
  providers: [NotesService, NotesRepository],
  exports: [NotesService],
})
export class NotesModule {}
