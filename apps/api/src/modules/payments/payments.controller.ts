
import { Body, Controller, Post } from '@nestjs/common';
import { PaymentsService } from './payments.service';

@Controller('payments')
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @Post('complete-order')
  async completeOrder(
    @Body() body: { orderId: string; paymentId: string; status: 'success' | 'failed' },
  ) {
    return this.paymentsService.completeOrder(body);
  }
}
