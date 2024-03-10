import { Module } from '@nestjs/common';
import { CatsController } from './cats/cats.controller';
import { CatsService } from './cats/cats.service';
import { catProviders } from './cats/cats.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
    imports: [
        DatabaseModule
    ],
    controllers: [
        CatsController
    ],
    providers: [
        CatsService,
        ...catProviders
    ]
})
export class AnimalsModule {}
