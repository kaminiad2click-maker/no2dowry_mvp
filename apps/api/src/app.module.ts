import { Module } from 'nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
// import { PaymentsModule } from './modules/payments/payments.module';  // keep commented for now

@Module({
  imports: [AuthModule],
})
export class AppModule {}
