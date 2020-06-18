import { Body } from '@nestjs/common';
import { ApiController, ApiMethod } from '../utils/decorators/api.decorator';
import { UsersFindByNameDto, UsersFindByAgeDto } from './users.dto';
import { UsersService } from './users.service';
import User from './user.model';

@ApiController('users')
export class UsersController {
  constructor(private service: UsersService) {}

  @ApiMethod()
  async findAll() {
    return this.service.findAll();
  }

  @ApiMethod()
  async findByName(@Body() dto: UsersFindByNameDto) {
    return this.service.findByName(dto.name);
  }

  @ApiMethod()
  async findByAge(@Body() dto: UsersFindByAgeDto) {
    return this.service.findByAge(dto.age);
  }

  @ApiMethod()
  async create(): Promise<User> {
    return this.service.create();
  }
}
