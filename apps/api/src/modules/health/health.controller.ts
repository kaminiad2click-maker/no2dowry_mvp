import { Controller, Get } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Controller('health')
export class HealthController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  getStatus() {
    return { status: 'OK' };
  }

  @Get('db')
  async getDbStatus() {
    try {
      await this.prisma.$queryRaw`SELECT 1`;
      const userCount = await this.prisma.user.count().catch(() => 0);
      return { ok: true, status: 'DB OK', userCount };
    } catch (e: any) {
      return { ok: false, status: 'DB ERROR', error: e?.message ?? String(e) };
    }
  }
}
