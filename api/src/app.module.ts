import { Module, ClassSerializerInterceptor } from '@nestjs/common';
import { RouterModule, Reflector, APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import { DemoModule } from './modules/demo/demo.module';
import { AuthModule } from './modules/auth/auth.module';
import { JwtAuthGuard } from './modules/auth/auth/guards/jwt-auth.guard';
import { ActivatedGuard } from './modules/auth/auth/guards/activated.guard';
import { routes } from './app.routing';

@Module({
  imports: [
    DemoModule,
    AuthModule,
    RouterModule.register(routes)
  ],
  controllers: [],
  providers: [
    { provide: APP_GUARD, useClass: JwtAuthGuard },
    { provide: APP_GUARD, useClass: ActivatedGuard },
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
