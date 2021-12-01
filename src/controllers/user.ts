import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { envs } from '../config';

import { UserModel as User } from '../models/User';

export const userController = {
  register: async (req: Request, res: Response) => {
    const { name, lastname, username, email, password, numberPhone } = req.body;

    try {
      const newUser = new User({ name, lastname, username, email, password, numberPhone });

      const userSaved = await newUser.save();

      const payload = {
        user: userSaved,
      };

      const token = jwt.sign(payload, envs.SECRECT_KEY_TOKEN, { expiresIn: '30d' });

      res.json({ token, success: true, message: 'User created successfully' });
    } catch (err) {
      throw err;
    }
  },
  authenticate: async (req: Request, res: Response) => {
    const { identifier, password } = req.body;

    try {
      const userFound = await User.findOne({
        $and: [{ $or: [{ email: identifier }, { username: identifier }] }, { password }],
      });

      if (!userFound) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }

      const token = jwt.sign(userFound.toObject(), envs.SECRECT_KEY_TOKEN, { expiresIn: '30d' });

      res.json({ token, success: true, message: 'User created successfully', user: userFound });
    } catch (err) {
      throw err;
    }
  },
};
