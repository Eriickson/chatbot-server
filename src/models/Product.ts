import { Schema, model } from 'mongoose';

class Product {
  _id: string;
  title: string;
  colors: string[];
  category: string;
  price: number;
  description: string;
  available: 10;
  image: string;
}

const productSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    colors: {
      type: [String],
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    available: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const ProductModel = model<Product>('Product', productSchema);
