import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly svc: AuthService) {}

  @Post('signup')
  signup(@Body() body: any) {
    return this.svc.signup(body.email, body.password, body.name);
  }

  @Post('login')
  login(@Body() body: any) {
    return this.svc.login(body.email, body.password);
  }
}
