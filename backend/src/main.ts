import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {NestExpressApplication} from "@nestjs/platform-express";

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {cors: true});

  await app.listen(process.env.APP_PORT);
}
bootstrap();

// http://localhost:3001

// http://localhost:3002 - mapa
