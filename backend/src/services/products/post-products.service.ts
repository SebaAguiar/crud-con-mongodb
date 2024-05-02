import { ProductModel } from '../../schemas/product.schema';
import { IProductDTO } from '../../types';

export const createProduct = async (body: IProductDTO) => {
  try {
    return await ProductModel.create(body);
  } catch (error) {
    console.error('ERROR createProduct-service: ', error);
  }
};
