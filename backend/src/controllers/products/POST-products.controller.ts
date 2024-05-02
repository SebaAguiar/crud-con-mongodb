import { RequestHandler } from 'express';
import { ERROR_MESSAGE } from '../../utils/messages';
import { createProduct } from '../../services/products/post-products.service';
import { faker } from '@faker-js/faker';

export const PostProductController: RequestHandler = async (req, res) => {
  const { body } = req;
  if (!body.image) {
    body.image = faker.image.url();
  }
  const newProduct = await createProduct(body);
  if (newProduct?._id) {
    res.status(300).json({
      response: 'Producto creado correctamente',
    });
  } else {
    res.status(400).json({
      response: 'No se ha podido crear el producto intente nuevamente',
    });
  }
  try {
  } catch (error) {
    console.error(error);
    res.status(500).json({
      response: ERROR_MESSAGE,
    });
  }
};
