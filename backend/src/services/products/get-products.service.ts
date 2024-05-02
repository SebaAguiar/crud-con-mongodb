import { ProductModel } from '../../schemas/product.schema';

export const getAllProducts = async () => {
  try {
    return await ProductModel.find({});
  } catch (error) {
    console.error('ERROR getAllProducts-service: ', error);
    throw new Error(error as string);
  }
};

export const getProductById = async (id: string) => {
  try {
    return await ProductModel.findById(id);
  } catch (error) {
    console.error('ERROR getProductById-service: ', error);
    throw new Error(error as string);
  }
};
