import { connect } from 'mongoose';

import { envs } from '../config';

export const connectMongoose = async () => {
  await connect(envs.mongoose.uri);
  console.log('📙 - MongoDB connected');
};
