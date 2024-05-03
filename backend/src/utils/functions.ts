import mongoose from 'mongoose';
import { MONGO_DB_URI } from '../constants';
import { ProductModel } from '../schemas/product.schema';
import { faker } from '@faker-js/faker';
import { IProductDTO } from '../types';

/**
 *
 */
export const connectToDb = () => {
  mongoose.set('strictQuery', false);

  mongoose
    .connect(MONGO_DB_URI as string, {
      serverSelectionTimeoutMS: 5000,
    })
    .then(() => {
      console.log('**** CONNECTED WITH DB ****');
    })
    .catch((err) => {
      console.log('**** DB CONNECTION FAILURE ****');
      console.error(err);
    });
};

/**
 *
 * @returns { IProductDTO[] }
 */
export const createProducts = () => {
  const products: IProductDTO[] = [];

  for (let i = 0; i <= 40; i++) {
    let prod = {
      name: faker.commerce.productName(),
      image: faker.image.url(),
      description: faker.commerce.productDescription(),
      cost: Number(faker.commerce.price()),
    };
    products.push(prod);
  }
  return products;
};

/**
 *
 */
export const productsToDb = async () => {
  try {
    const dbProducts = await ProductModel.find({});
    if (!dbProducts.length) {
      const newProducts = createProducts();
      await ProductModel.insertMany(newProducts);
    }
  } catch (error) {
    console.log(error);
    throw new Error(error as string);
  }
};

/**
 *
 * @param { String } filename
 * @returns { String }
 */
export const removeExtencion = (filename: string) => {
  return filename.split('.').shift();
};
