import { Controller, Get, Post, Request, UseGuards, SetMetadata, Body } from '@nestjs/common';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { AuthService } from './auth.service';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { UsersService } from '../users/users.service';
import { MailerService } from '@nestjs-modules/mailer';
import { JwtAuthGuard } from './guards/jwt-auth.guard';

@Controller()
export class AuthController {

  constructor(
    private authService: AuthService,
    private usersService: UsersService,
    private mailerService: MailerService
  ) {}

  // @UseGuards(LocalAuthGuard)
  @UseGuards(LocalAuthGuard)
  @SetMetadata('allowUnauthenticatedRequest', true)
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  
  @Get('login')
  async current(@Request() req) {
    return req.user;
  }

  @Post('signup')
  @SetMetadata('allowUnauthenticatedRequest', true)
  create(@Body() createUserDto: CreateUserDto) {
    this.mailerService.sendMail({
      to: 'theo.godard@gmail.com',
      subject: 'Confirm your Email',
      template: './activation',
      context: {
        name: 'test',
        url: 'TEST URL',
      }
    });
    return this.usersService.create(createUserDto);
  }

}
