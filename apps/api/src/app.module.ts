import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { HealthModule } from './modules/health/health.module';
import { AuthModule } from './modules/auth/auth.module';
import { ProfileModule } from './modules/profile/profile.module';
// If payments is unstable you can remove its module import for now

@Module({
  imports: [
    PrismaModule,
    HealthModule,
    AuthModule,
    ProfileModule,
  ],
})
export class AppModule {}
