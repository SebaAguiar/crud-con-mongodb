import { Schema, Types, model } from 'mongoose';

export const ProductSchema = new Schema({
  id: {
    type: Types.ObjectId,
  },
  name: {
    type: String,
  },
  image: {
    type: String,
  },
  description: {
    type: String,
  },
  cost: {
    type: Number,
  },
});

export const ProductModel = model('Product', ProductSchema);
