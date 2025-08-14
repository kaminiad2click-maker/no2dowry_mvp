// WRONG:  createOrder(@Req req: any)
// RIGHT:
import { Req } from '@nestjs/common';

createOrder(@Req() req: any) {
  // ...
}
