import { Router } from 'express';

import { userController } from '../controllers';

export const usersRoutes = Router();

usersRoutes.post('/register', userController.register);
usersRoutes.post('/authenticate', userController.authenticate);
