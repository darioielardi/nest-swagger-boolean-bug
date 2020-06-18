import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import UsersRepository from './users.repository';

describe('UsersService', () => {
  let provider: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersService, { provide: UsersRepository, useValue: {} }],
    }).compile();

    provider = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
