import { Controller, Get } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Controller('health')
export class HealthController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  ok() {
    return { status: 'OK' };
  }

  @Get('db')
  async db() {
    try {
      const count = await this.prisma.user.count();
      return { ok: true, userCount: count };
    } catch (err: any) {
      return {
        ok: false,
        name: err?.name,
        code: err?.code,
        message: err?.message,
      };
    }
  }
}
