import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

const ORIGIN = 'http://localhost:3000';
const PORT = 8080;

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Recipe API')
    .setDescription('')
    .setVersion('1.0')
    .addTag('recipe')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.enableCors({
    origin: ORIGIN,
    methods: 'GET,POST',
    credentials: true,
  });

  await app.listen(PORT);
}

bootstrap();
