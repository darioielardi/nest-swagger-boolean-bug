import { Module } from '@nestjs/common';
import { ObjectionModule } from 'nestjs-objection';
import { knexSnakeCaseMappers } from 'objection';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import BaseModel from './common/base-model';
import { NotesModule } from './notes/notes.module';
import { TagsModule } from './tags/tags.module';
import { ThemesModule } from './themes/themes.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ObjectionModule.forRoot({
      Model: BaseModel,
      config: {
        client: 'pg',
        connection: process.env.DATABASE_URL,
        useNullAsDefault: true,
        ...knexSnakeCaseMappers(),
      },
    }),
    NotesModule,
    ThemesModule,
    TagsModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
