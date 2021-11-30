import { Router } from 'express';

import { productControllers } from '../controllers';

export const productsRoutes = Router();

productsRoutes.get('/', productControllers.findAll);

productsRoutes.post('/', productControllers.create);
