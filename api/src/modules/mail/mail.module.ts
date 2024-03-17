import { Module } from '@nestjs/common';
import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { MailService } from './services/mail.service';
import { join } from 'path';
import { env } from '../../env/env';

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: env.smtp_host,
        port: env.smtp_port,
        secure: false,
        auth: {
          user: env.smtp_user,
          pass: env.smtp_password,
        },
      },
      defaults: {
        from: '"No Reply" <noreply@example.com>',
      },
      template: {
        dir: join(__dirname, 'templates'),
        adapter: new HandlebarsAdapter(),
        options: {
          strict: true,
        },
      },
    }),
  ],
  providers: [
    MailService
  ],
  exports: [
    MailService
  ]
})
export class MailModule {}
