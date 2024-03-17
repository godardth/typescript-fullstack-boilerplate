import { Module } from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './auth/strategies/local.strategy';
import { JwtStrategy } from './auth/strategies/jwt.strategy';
import { AuthController } from './auth/auth.controller';
import { UsersService } from './users/users.service';
import { userProviders } from './users/users.providers';
import { DatabaseModule } from '../database/database.module';
import { UsersController } from './users/users.controller';
import { JwtModule } from '@nestjs/jwt';
import { MailModule } from '../mail/mail.module';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { ActivatedGuard } from './auth/guards/activated.guard';
import { env } from '../../env/env';

@Module({
  imports: [
    DatabaseModule,
    PassportModule,
    JwtModule.register({
      secret: env.jwt_secret,
      signOptions: { expiresIn: '1d' },
    }),
    MailModule
  ],
  providers: [
    JwtAuthGuard,
    ActivatedGuard,
    AuthService,
    JwtStrategy,
    LocalStrategy,
    UsersService,
    ...userProviders
  ],
  controllers: [
    AuthController,
    UsersController
  ]
})
export class AuthModule {}
