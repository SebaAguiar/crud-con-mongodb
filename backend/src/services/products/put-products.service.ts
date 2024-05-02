import { ProductModel } from '../../schemas/product.schema';
import { IProductDTO } from '../../types';

export const updateProduct = async (product: IProductDTO, id: string) => {
  try {
    return await ProductModel.findByIdAndUpdate(id, product);
  } catch (error) {
    console.error('ERROR editProduct-service', error);
    throw new Error(error as string);
  }
};
