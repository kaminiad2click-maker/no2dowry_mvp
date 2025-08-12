import { Injectable } from '@nestjs/common';

@Injectable()
export class PaymentsService {
  createOrder(amount = 19900) {
    const orderId = 'order_' + Math.random().toString(36).slice(2, 10);
    return { orderId, amount, currency: 'INR' };
  }

  completeOrder(orderId: string, paymentId: string, status: string) {
    // stub: no real verification yet
    return { message: 'Payment completed (stub)', orderId, paymentId, status };
  }
}
