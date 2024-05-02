import { RequestHandler } from 'express';
import { deleteOneProduct } from '../../services/products/delete-products.service';
import { ERROR_MESSAGE } from '../../utils/messages';

export const DeleteProductController: RequestHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedProduct = await deleteOneProduct(id);
    if (deletedProduct?._id) {
      res.status(300).json({
        response: 'Producto eliminado correctamente',
      });
    } else {
      res.status(400).json({
        response: 'No se ha podido eliminar, intente nuevamente',
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      response: ERROR_MESSAGE,
    });
  }
};
