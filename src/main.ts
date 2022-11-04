import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { json, urlencoded } from 'express';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // habilitando o cors para permitir que o frontend envie informações ao servidor 
  app.use(json());
  app.use(urlencoded({extended: true}));
  app.enableCors();

  app.useGlobalPipes(new ValidationPipe());
  
  await app.listen(3000);
}
bootstrap();