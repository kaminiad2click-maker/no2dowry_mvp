import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  private sign(userId: string) {
    const secret = process.env.JWT_SECRET || 'devsecret';
    return jwt.sign({ sub: userId }, secret, { expiresIn: '7d' });
  }

  async signup(email: string, password: string, name?: string) {
    const lower = email.trim().toLowerCase();
    const exists = await this.prisma.user.findUnique({ where: { email: lower } });
    if (exists) return { ok: false, message: 'User already exists' };

    const hash = await bcrypt.hash(password, 10);
    const user = await this.prisma.user.create({
      data: { email: lower, password: hash, name },
      select: { id: true, email: true, name: true },
    });
    const token = this.sign(user.id);
    return { ok: true, token, user };
  }

  async login(email: string, password: string) {
    const lower = email.trim().toLowerCase();
    const user = await this.prisma.user.findUnique({ where: { email: lower } });
    if (!user) return { ok: false, message: 'Invalid credentials' };

    const match = await bcrypt.compare(password, user.password);
    if (!match) return { ok: false, message: 'Invalid credentials' };

    const token = this.sign(user.id);
    return { ok: true, token, user: { id: user.id, email: user.email, name: user.name } };
  }
}
