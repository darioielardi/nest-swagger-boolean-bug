import { Test, TestingModule } from '@nestjs/testing';
import { NotesRepository } from './notes.repository';
import { NotesService } from './notes.service';
import { QueryBuilder } from 'objection';
import Note from './note.model';

const qb = QueryBuilder.forClass(Note);

const mockRepo = {
  findAll: () => {
    const results = [Note.mock({ id: 1 }), Note.mock({ id: 2 })];

    return qb.resolve({
      total: results.length,
      results,
    });
  },
  findOne: (id: number) => {
    if (id === -1) {
      return qb.resolve(undefined);
    }
    return qb.resolve(Note.mock({}));
  },
};

describe('NotesService', () => {
  let service: NotesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        NotesService,
        { provide: NotesRepository, useValue: mockRepo },
      ],
    }).compile();

    service = module.get<NotesService>(NotesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findAll', () => {
    it('should work', async () => {
      const res = await service.findAll({});
      expect(res).toBeDefined();
      expect(res.count).toBe(2);
      expect(res.items).toHaveLength(2);
      expect(res.items[0].id).toBe(1);
      expect(res.items[1].id).toBe(2);
    });
  });

  describe('findOne', () => {
    it('should work with id 1', async () => {
      const res = await service.findOne(1);
      expect(res).toBeDefined();
      expect(res.id).toBe(1);
    });

    it('should not work with id -1', async () => {
      const res = await service.findOne(-1);
      expect(res).toBeUndefined();
    });
  });
});
