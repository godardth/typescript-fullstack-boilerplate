import { Module, ClassSerializerInterceptor } from '@nestjs/common';
import { RouterModule, Reflector } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AnimalsModule } from './modules/animals/animals.module';
import { AuthModule } from './modules/auth/auth.module';
import { JwtAuthGuard } from './modules/auth/auth/guards/jwt-auth.guard';
import { APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';

const routes = [
	{ path: 'animals', module: AnimalsModule },
	{ path: 'auth', module: AuthModule }
];

@Module({
  imports: [
    AnimalsModule,
    AuthModule,
    RouterModule.register(routes)
  ],
  controllers: [
    AppController
  ],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
    {
      provide: APP_INTERCEPTOR,
      inject: [ Reflector ],
      useFactory: (reflector: Reflector) => {
        return new ClassSerializerInterceptor(reflector, {
          enableImplicitConversion: true
        });
      }
    }
  ]
})
export class AppModule {}
