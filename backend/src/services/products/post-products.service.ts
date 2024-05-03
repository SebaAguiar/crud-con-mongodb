import { ProductModel } from '../../schemas/product.schema';
import { IProductDTO } from '../../types';

/**
 *
 * @param { IProductDTO } body
 * @returns { IProduct }
 */
export const createProduct = async (body: IProductDTO) => {
  try {
    return await ProductModel.create(body);
  } catch (error) {
    console.error('ERROR createProduct-service: ', error);
  }
};
