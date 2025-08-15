import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { ProfileService } from './profile.service';

@Controller('profile')
export class ProfileController {
  constructor(private readonly svc: ProfileService) {}

  @Get(':userId')
  get(@Param('userId') userId: string) {
    return this.svc.get(userId);
  }

  @Post(':userId')
  upsert(@Param('userId') userId: string, @Body() body: any) {
    return this.svc.upsert(userId, body);
  }
}
