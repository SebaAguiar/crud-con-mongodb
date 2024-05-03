import { ProductModel } from '../../schemas/product.schema';
import { IProduct } from '../../types';

/**
 *
 * @returns { Promise<IProduct[]> }
 */
export const getAllProducts = async (): Promise<IProduct[]> => {
  try {
    return await ProductModel.find({});
  } catch (error) {
    console.error('ERROR getAllProducts-service: ', error);
    throw new Error(error as string);
  }
};

/**
 *
 * @param { String } id
 * @returns { IProduct }
 */
export const getProductById = async (id: string) => {
  try {
    return await ProductModel.findById(id);
  } catch (error) {
    console.error('ERROR getProductById-service: ', error);
    throw new Error(error as string);
  }
};

/**
 *
 * @param { String } name
 * @returns { IProduct[] }
 */
export const getProductsByName = async (name: string) => {
  try {
    const products = await ProductModel.find({
      name: new RegExp(name, 'i'),
    }).exec();
    return products?.map((product) => ({
      _id: product?._id.toString() || '',
      name: product?.name || '',
      image: product?.image || '',
      description: product?.description || '',
      cost: product?.cost || 0,
    }));
  } catch (error) {
    console.error('ERROR getProductsByName-service', error);
    throw new Error(error as string);
  }
};
