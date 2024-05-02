import { RequestHandler } from 'express';
import {
  getAllProducts,
  getProductById,
} from '../../services/products/get-products.service';
import { ERROR_MESSAGE, NOT_FOUND } from '../../utils/messages';

export const GetProductsController: RequestHandler = async (_req, res) => {
  try {
    const products = await getAllProducts();
    if (products.length) {
      res.status(200).json({
        response: products,
      });
    } else {
      res.status(404).json({
        response: NOT_FOUND,
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      response: ERROR_MESSAGE,
    });
  }
};

export const GetProductByIdController: RequestHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await getProductById(id);
    console.log(product);
    if (!product) {
      res.status(404).json({
        response: NOT_FOUND,
      });
    } else {
      res.status(200).json({
        response: product,
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      response: ERROR_MESSAGE,
    });
  }
};
