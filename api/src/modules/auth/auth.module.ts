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
import { jwtConstants } from './constants';

@Module({
  imports: [
    DatabaseModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    })
  ],
  providers: [
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
