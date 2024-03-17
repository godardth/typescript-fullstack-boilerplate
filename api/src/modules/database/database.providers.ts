import { DataSource } from 'typeorm';
import { env } from '../../env/env'; 

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: env.database_type,
        host: env.database_host,
        port: env.database_port,
        username: env.database_user,
        password: env.database_password,
        database: env.database_name,
        entities: [
            __dirname + '/../**/*.entity{.ts,.js}',
        ],
        synchronize: env.database_sync == 'true'
      });
      return dataSource.initialize();
    },
  },
];