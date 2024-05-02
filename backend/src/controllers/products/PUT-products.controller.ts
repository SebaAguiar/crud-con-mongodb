import { RequestHandler } from 'express';
import { updateProduct } from '../../services/products/put-products.service';
import { ERROR_MESSAGE } from '../../utils/messages';

export const PutProductController: RequestHandler = async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  try {
    const updatedProduct = await updateProduct(body, id);
    if (updatedProduct?._id) {
      res.status(300).json({
        response: 'Producto modificado exitosamente',
      });
    } else {
      res.status(400).json({
        response: 'No se ha podido modificar, por favor intente nuevamente',
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      response: ERROR_MESSAGE,
    });
  }
};
