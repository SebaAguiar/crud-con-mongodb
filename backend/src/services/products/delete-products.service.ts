import { ProductModel } from '../../schemas/product.schema';

/**
 *
 * @param { String } id
 * @returns
 */
export const deleteOneProduct = async (id: string) => {
  try {
    return await ProductModel.findByIdAndDelete(id);
  } catch (error) {
    console.error('ERROR deleteOneProduct-service', error);
    throw new Error(error as string);
  }
};
