import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { ObjectionModule } from 'nestjs-objection';
import { UsersController } from './users.controller';
import User from './user.model';
import UsersRepository from './users.repository';

@Module({
  imports: [ObjectionModule.forFeature([User])],
  providers: [UsersService, UsersRepository],
  controllers: [UsersController],
})
export class UsersModule {}
