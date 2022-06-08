import { Controller, Post, Body, UseGuards, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Credentials } from './dto/credentials.dto';
import { User } from '@prisma/client';
import { AuthGuard } from '@nestjs/passport';
import AuthUser from './auth-user.decorator';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  login(@Body() dados: Credentials) {
    return this.authService.login(dados);
  }
  @UseGuards(AuthGuard())
  @Get('profile')
  profile(@AuthUser() user: User): User {
    return user;
  }
}
