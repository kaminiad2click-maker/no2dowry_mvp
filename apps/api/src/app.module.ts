
import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { PrismaService } from './prisma.service';
import { ProfileModule } from './modules/profile/profile.module';
import { PaymentsModule } from './modules/payments/payments.module';
import { HealthModule } from './modules/health/health.module';

@Module({
  imports: [AuthModule, ProfileModule, PaymentsModule, HealthModule],
  providers: [PrismaService],
})
export class AppModule {}
