import { Module } from '@nestjs/common';
import { CatsController } from './cats/cats.controller';
import { CatsService } from './cats/cats.service';
import { catProviders } from './cats/cats.providers';
import { DatabaseModule } from '../database/database.module';
import { TasksController } from './task/tasks.controller';
import { TasksService } from './task/tasks.service';
import { taskProviders } from './task/tasks.providers';

@Module({
    imports: [
        DatabaseModule
    ],
    controllers: [
        CatsController,
        TasksController
    ],
    providers: [
        CatsService,
        TasksService,
        ...catProviders,
        ...taskProviders
    ]
})
export class DemoModule {}
