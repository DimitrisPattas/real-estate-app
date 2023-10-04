import 'dotenv/config';
import 'reflect-metadata';
import express from 'express';
import cors from 'cors';

import { AppDataSource } from './config/database.config';
import router from './routes';

const connentDatabase = async () => {
  try {
    await AppDataSource.initialize();
    console.log('Connected to the database');
  } catch (error) {
    console.error('Error connecting to the database:', error);
  }
};

connentDatabase();

const app = express();

app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: ['http://localhost:3000'],
  })
);

app.use('/api', router);

app.listen(8080, () => {
  console.log('Listening to port 8080');
});
