import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: 'db',
        port: 5432,
        username: 'root',
        password: 'root',
        database: 'app',
        entities: [
            __dirname + '/../**/*.entity{.ts,.js}',
        ],
        synchronize: true
      });

      return dataSource.initialize();
    },
  },
];