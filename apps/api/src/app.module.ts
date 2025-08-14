import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
// import { PaymentsModule } from './modules/payments/payments.module'; // ⛔ TEMP disable

@Module({
  imports: [
    AuthModule,
    // PaymentsModule, // ⛔ TEMP disable
  ],
})
export class AppModule {}
