import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, //Retira do corpo da requisição campos não listados no DTO
      forbidNonWhitelisted: true, //Dispara erro ao enviar campos não listados no DTO
    }),
  );
  await app.listen(3000);
}
bootstrap();
