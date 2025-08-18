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
      return { status: 'DB OK' };
    } catch (e) {
      return { status: 'DB ERROR', error: e.message };
    }
  }
}
