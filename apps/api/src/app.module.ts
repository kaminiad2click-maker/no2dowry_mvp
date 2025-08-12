import { Module } from '@nestjs/common';
import { PaymentsModule } from './modules/payments/payments.module';
// ... other imports

@Module({
  imports: [
    // other modules here...
    PaymentsModule,
  ],
})
export class AppModule {}
