import { ProductModel } from '../../schemas/product.schema';
import { IProduct } from '../../types';

interface IGetsReturns {
  products: IProduct[];
  totalProducts: number;
  productsOnPage: number | 0;
  totalPages: number;
  nextPage: number | null;
  prevPage: number | null;
}

/**
 *
 * @param { String } name
 * @param { Number } page
 * @param { Number } limit
 * @returns
 */
export const getProductsByName = async (
  name: string,
  page: number,
  limit: number,
): Promise<IGetsReturns> => {
  try {
    const totalProducts = await ProductModel.countDocuments({
      name: new RegExp(name, 'i'),
    });
    const products = await ProductModel.find({ name: new RegExp(name, 'i') })
      .skip((page - 1) * limit)
      .limit(limit)
      .exec();
    return {
      products: products.map((product) => ({
        _id: product._id.toString(),
        name: product.name || '',
        image: product.image || '',
        description: product.description || '',
        cost: product.cost || 0,
      })),
      productsOnPage: products.length,
      totalProducts: totalProducts,
      totalPages: Math.ceil(totalProducts / limit),
      nextPage: page < Math.ceil(totalProducts / limit) ? page + 1 : null,
      prevPage: page > 1 ? page - 1 : null,
    };
  } catch (error) {
    console.error('ERROR getProductsByName-service', error);
    throw new Error(error as string);
  }
};

export const getAllProducts = async (
  page: number,
  limit: number,
): Promise<IGetsReturns> => {
  try {
    const totalProducts = await ProductModel.countDocuments();
    const products = await ProductModel.find()
      .skip((page - 1) * limit)
      .limit(limit)
      .exec();
    return {
      products: products.map((product) => ({
        _id: product._id.toString(),
        name: product.name || '',
        image: product.image || '',
        description: product.description || '',
        cost: product.cost || 0,
      })),
      totalProducts: totalProducts,
      productsOnPage: products.length,
      totalPages: Math.ceil(totalProducts / limit),
      nextPage: page < Math.ceil(totalProducts / limit) ? page + 1 : null,
      prevPage: page > 1 ? page - 1 : null,
    };
  } catch (error) {
    console.error('ERROR getAllProducts-service', error);
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
