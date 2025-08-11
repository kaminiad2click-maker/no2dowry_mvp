
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';

@Injectable()
export class ProfileService {
  constructor(private prisma: PrismaService) {}
  get(userId: string) { return this.prisma.profile.findUnique({ where: { userId } }); }
  async upsert(userId: string, data: any) {
    const exists = await this.prisma.profile.findUnique({ where: { userId } });
    if (exists) return this.prisma.profile.update({ where: { userId }, data });
    return this.prisma.profile.create({ data: { userId, ...data } });
  }
}
