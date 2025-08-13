import { Body, Controller, Post, Req } from '@nestjs/common';

@Controller('payments')
export class PaymentsController {
  // 👇 this is the route your frontend is calling
  @Post('create-order')
  createOrder(@Req() req: any) {
    // Return a stubbed order for ₹199
    return {
      orderId: 'order_test_123',
      amount: 19900, // in paise
      currency: 'INR',
    };
  }

  // You already added this earlier for completing the order
  @Post('complete-order')
  completeOrder(@Body() body: any) {
    const { orderId, paymentId, status } = body;
    return {
      message: 'Payment completed (stub)',
      orderId,
      paymentId,
      status,
    };
  }
}
