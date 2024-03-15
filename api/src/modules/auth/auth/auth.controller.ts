import { Controller, Get, Post, Request, UseGuards, SetMetadata, Body, Delete } from '@nestjs/common';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { AuthService } from './auth.service';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { UsersService } from '../users/users.service';
import { MailerService } from '@nestjs-modules/mailer';
import { User } from '../users/entities/user.entity'
import { UpdateUserDto } from '../users/dto/update-user.dto';

@Controller()
export class AuthController {

  constructor(
    private authService: AuthService,
    private usersService: UsersService,
    private mailerService: MailerService
  ) {}

  @UseGuards(LocalAuthGuard)
  @SetMetadata('allowUnauthenticatedRequest', true)
  @SetMetadata('allowUnactivatedRequest', true)
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }
  
  @SetMetadata('allowUnactivatedRequest', true)
  @Post('activate')
  async activate(@Request() req, @Body('activationToken') activationToken: string) {
    let user = await this.usersService.findOne(req.user.id);
    if (activationToken == user.activationToken) user.activationToken = null;
    return this.usersService.update(user);
  }

  @SetMetadata('allowUnactivatedRequest', true)
  @Get('sendmail')
  async sendmail(@Request() req) {
    this.sendActivationMail(req.user);
    return req.user;
  }

  @Get('login')
  async current(@Request() req) {
    return req.user;
  }

  @Delete('delete')
  async delete(@Request() req) {
    return this.usersService.remove(req.user.id);
  }

  @Post('signup')
  @SetMetadata('allowUnauthenticatedRequest', true)
  async create(@Body() createUserDto: CreateUserDto) {
    const user = await this.usersService.create(createUserDto);
    this.sendActivationMail(user);
    return user;
  }

  private sendActivationMail(user: User) {
    this.mailerService.sendMail({
      to: user.email,
      subject: 'Confirm your Email',
      template: './activation',
      context: {
        name: user.firstName,
        url: `http://localhost/login?email=${user.email}&activationToken=${user.activationToken}`,
      }
    });
  }

}
