import { Module } from '@nestjs/common';
import { TagsController } from './tags.controller';
import { TagsService } from './tags.service';
import Tag from './tag.model';
import { ObjectionModule } from 'nestjs-objection';

@Module({
  controllers: [TagsController],
  imports: [ObjectionModule.forFeature([Tag])],
  providers: [TagsService],
})
export class TagsModule {}
