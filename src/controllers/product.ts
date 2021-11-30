import { Request, Response } from 'express';
import { ProductModel as Product } from '../models';

export const productControllers = {
  findAll: async (_: Request, res: Response) => {
    try {
      const products = await Product.find();
      res.json(products);
    } catch (err) {
      throw err;
    }
  },

  create: async (req: Request, res: Response) => {
    const { title, colors, category, price, description, available, image } = req.body;

    try {
      const product = new Product({ title, colors, category, price, description, available, image });

      await product.save();
      res.json(product);
    } catch (err) {
      throw err;
    }
  },
};
