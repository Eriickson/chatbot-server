import { Schema, model } from 'mongoose';

export class User {
  _id: string;
  name: string;
  lastname: string;
  username: string;
  email: string;
  password: string;
  numberPhone: string;
}

const userSchema = new Schema<User>({
  name: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  numberPhone: {
    type: String,
    required: true,
  },
});

export const UserModel = model<User>('User', userSchema);
