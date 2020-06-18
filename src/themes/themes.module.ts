import { Module } from '@nestjs/common';
import { ThemesController } from './themes.controller';
import { ThemesService } from './themes.service';
import Theme from './theme.model';
import { ObjectionModule } from 'nestjs-objection';

@Module({
  controllers: [ThemesController],
  imports: [ObjectionModule.forFeature([Theme])],
  providers: [ThemesService],
})
export class ThemesModule {}
