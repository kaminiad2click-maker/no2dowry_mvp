import { Injectable } from '@nestjs/common';

@Injectable()
export class PaymentsService {
  async completeOrder(input: { orderId: string; paymentId: string; status: 'success' | 'failed' }) {
    // TODO: yahan baad me Razorpay signature verify karenge.
    return {
      message: 'Payment completed (stub)',
      orderId: input.orderId,
      paymentId: input.paymentId,
      status: input.status,
    };
  }
}
