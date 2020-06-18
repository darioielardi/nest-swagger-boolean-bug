import { Test, TestingModule } from '@nestjs/testing';
import { TagsService } from './tags.service';

describe('TagsService', () => {
  let provider: TagsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TagsService],
    }).compile();

    provider = module.get<TagsService>(TagsService);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
