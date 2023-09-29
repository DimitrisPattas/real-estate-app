import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Ad } from '../entity/ad.entity';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'real_estate_db',
  entities: [Ad],
  synchronize: true,
  logging: false,
});
