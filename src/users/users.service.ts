import { Injectable, NotFoundException } from '@nestjs/common';
import UsersRepository from './users.repository';
import User from './user.model';

@Injectable()
export class UsersService {
  constructor(private readonly repo: UsersRepository) {}

  public async findAll() {
    return this.repo.findAll();
  }

  public async findByName(name: string) {
    const user = await this.repo.findByName(name);

    if (!user) {
      throw new NotFoundException('a user with this name does not exists');
    }

    return user;
  }

  public async findByAge(age: number): Promise<User[]> {
    return this.repo.findByAge(age);
  }

  public async create(): Promise<User> {
    return this.repo.create();
  }
}
