import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import morgan from 'morgan';

import { envs, connectMongoose } from './config';

import { productsRoutes } from './routes/products.routes';

dotenv.config();

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api/products', productsRoutes);

app.listen(envs.port, () => {
  console.log(`Listen on http://localhost:${envs.port}.`);
  connectMongoose();
});

//
