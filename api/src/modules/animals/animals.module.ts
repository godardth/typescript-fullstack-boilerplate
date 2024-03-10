import { Module } from '@nestjs/common';
import { CatsController } from './cats/cats.controller';
import { CatsService } from './cats/cats.service';

@Module({
    controllers: [
        CatsController
    ],
    providers: [
        CatsService
    ]
})
export class AnimalsModule {}
