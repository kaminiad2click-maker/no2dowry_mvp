import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './modules/auth/auth.module';
// import { PaymentsModule } from './modules/payments/payments.module'; // keep disabled for now

import { AppController } from './app.controller';

@Module({
  imports: [PrismaModule, AuthModule],
  controllers: [AppController],
})
export class AppModule {}
