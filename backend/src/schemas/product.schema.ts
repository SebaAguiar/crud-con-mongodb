import { Schema, Types, model } from 'mongoose';

export const ProductSchema = new Schema(
  {
    id: {
      type: Types.ObjectId
    },
    name: {
      type: String
    },
    image: {
      type: String
    },
    descrption: {
      type: String
    }
  }
)

export const ProductModel = model('Product', ProductSchema)
