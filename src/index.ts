import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import morgan from 'morgan';

import { envs, connectMongoose, startTelegramBot } from './config';

import { productsRoutes } from './routes/products.routes';
import { usersRoutes } from './routes/users.routes';

dotenv.config();

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api/product', productsRoutes);
app.use('/api/user', usersRoutes);

app.listen(envs.port, async () => {
  await Promise.all([connectMongoose(), startTelegramBot()]);
  console.log(`🚀 - Listen on http://localhost:${envs.port}.`);
});
