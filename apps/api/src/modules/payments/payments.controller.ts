import { Controller, Post, Req, Body } from '@nestjs/common';

@Controller('payments')
export class PaymentsController {
  @Post('create-order')
  createOrder(@Req() req: any) {
    // Stubbed response for now to unblock build
    return { ok: true, stub: 'create-order' };
  }

  @Post('complete-order')
  completeOrder(@Body() body: any) {
    // Stubbed response for now to unblock build
    return { ok: true, stub: 'complete-order', received: body };
  }
}
