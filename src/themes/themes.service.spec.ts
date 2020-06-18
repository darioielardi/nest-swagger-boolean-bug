import { Test, TestingModule } from '@nestjs/testing';
import { ThemesService } from './themes.service';

describe('ThemesService', () => {
  let provider: ThemesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ThemesService],
    }).compile();

    provider = module.get<ThemesService>(ThemesService);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
