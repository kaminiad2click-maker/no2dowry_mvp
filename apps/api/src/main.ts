import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: [
      'https://no2dowry-nkssgfu2m-kaminis-projects-9c5497ef.vercel.app',
      'http://localhost:3000',
    ],
    methods: ['GET','POST','PUT','PATCH','DELETE','OPTIONS'],
    allowedHeaders: ['Content-Type','Authorization'],
    credentials: true,
  });

  await app.listen(process.env.PORT || 4000);
}
bootstrap();
