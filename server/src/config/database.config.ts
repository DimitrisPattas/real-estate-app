import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Ad } from '../entity/ad.entity';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: process.env.DATABASE_HOST,
  port: parseInt(process.env.DATABASE_PORT),
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_SCHEMMA,
  entities: [Ad],
  synchronize: true,
  logging: false,
});
