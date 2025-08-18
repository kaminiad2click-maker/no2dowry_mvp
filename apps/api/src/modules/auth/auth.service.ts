import { Injectable, UnauthorizedException, BadRequestException, ConflictException } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(private readonly prisma: PrismaService) {}

  private signToken(userId: string, email: string) {
    const secret = process.env.JWT_SECRET || 'dev_secret';
    return jwt.sign({ sub: userId, email }, secret, { expiresIn: '7d' });
  }

  async signup(email: string, password: string, name: string) {
    try {
      if (!email || !password || !name) {
        throw new BadRequestException('email, password, name are required');
      }
      const existing = await this.prisma.user.findUnique({ where: { email } });
      if (existing) {
        throw new ConflictException('Email already registered');
      }

      const hash = await bcrypt.hash(password, 10);
      const user = await this.prisma.user.create({
        data: { email, password: hash, name },
      });

      const token = this.signToken(user.id, user.email);
      return { ok: true, token, user: { id: user.id, email: user.email, name: user.name } };
    } catch (err: any) {
      // Prisma unique constraint
      if (err?.code === 'P2002') {
        throw new ConflictException('Email already exists');
      }
      // Log full error on server for us to see in Render logs
      console.error('[SIGNUP_ERROR]', err);
      // Re-throw a clean message to client
      throw new BadRequestException(err?.message || 'Signup failed');
    }
  }

  async login(email: string, password: string) {
    try {
      if (!email || !password) {
        throw new BadRequestException('email and password are required');
      }

      const user = await this.prisma.user.findUnique({ where: { email } });
      if (!user) throw new UnauthorizedException('Invalid credentials');

      const ok = await bcrypt.compare(password, user.password);
      if (!ok) throw new UnauthorizedException('Invalid credentials');

      const token = this.signToken(user.id, user.email);
      return { ok: true, token, user: { id: user.id, email: user.email, name: user.name } };
    } catch (err: any) {
      console.error('[LOGIN_ERROR]', err);
      throw new UnauthorizedException(err?.message || 'Login failed');
    }
  }
}
