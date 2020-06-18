import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import 'dotenv/config';
import { AppModule } from './app.module';
import morgan = require('morgan');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
  }

  app.useGlobalPipes(new ValidationPipe({ transform: true }));

  app.setGlobalPrefix('api');

  const swaggerOptions = new DocumentBuilder()
    .setTitle('Notes API')
    .setVersion('0.1')
    .build();

  const swaggerDoc = SwaggerModule.createDocument(app, swaggerOptions);
  SwaggerModule.setup('api', app, swaggerDoc);

  await app.listen(3000);
}

bootstrap();
