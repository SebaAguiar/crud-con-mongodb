import { RequestHandler } from 'express';
import {
  getAllProducts,
  getProductById,
  getProductsByName,
} from '../../services/products/get-products.service';
import { ERROR_MESSAGE, NOT_FOUND } from '../../utils/messages';

export const GetProductsController: RequestHandler = async (req, res) => {
  const { name, page = '1', limit = '10' } = req.query;

  const pageNumber = Number(page);
  const limitNumber = Number(limit);
  let result;
  try {
    if (name) {
      result = await getProductsByName(name as string, pageNumber, limitNumber);
    } else {
      result = await getAllProducts(pageNumber, limitNumber);
    }
    if (result.products.length) {
      res.status(200).json({
        response: result,
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
