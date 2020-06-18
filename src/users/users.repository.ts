import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-objection';
import User, { UserGraph } from './user.model';

@Injectable()
export default class UsersRepository {
  constructor(@InjectModel(User) private readonly model: typeof User) {}

  private query = () => this.model.query();

  public findAll() {
    return this.query();
  }

  public findByName(name: string) {
    return this.query()
      .where<User>({ name })
      .load<UserGraph>({ notes: { theme: true } })
      .first();
  }

  public findByAge(age: number) {
    return this.model
      .query()
      .where<User>({ details: { age } })
      .load<UserGraph>({ notes: { theme: true } });
  }

  public create() {
    return this.model.query().insert({
      name: 'Test User',
      details: {
        age: 2,
      },
    });
  }
}
