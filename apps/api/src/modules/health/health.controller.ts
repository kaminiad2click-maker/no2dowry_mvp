import { Controller, Get } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Controller('health')
export class HealthController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  ok() {
    return { status: 'OK' };
  }

  // NEW: check DB connectivity and basic query
  @Get('db')
  async db() {
    try {
      const count = await this.prisma.user.count();
      return { ok: true, userCount: count };
    } catch (err: any) {
      // surface the error message so we can see what's wrong
      return {
        ok: false,
        name: err?.name,
        code: err?.code,
        message: err?.message,
      };
    }
  }
}
