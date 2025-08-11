
import * as dotenv from 'dotenv';
dotenv.config();
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cors from 'cors';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cors({ origin: true, credentials: true }));
  app.use(cookieParser());
  app.getHttpAdapter().getInstance().get('/', (req, res) => res.send('no2dowry API'));
  await app.listen(process.env.PORT || 4000);
  console.log(`API running on http://localhost:${process.env.PORT || 4000}`);
}
bootstrap();
