import { Router } from 'express';
import {
  GetProductByIdController,
  GetProductsController,
} from '../controllers/products/GET-products.controller';
import { PostProductController } from '../controllers/products/POST-products.controller';
import { PutProductController } from '../controllers/products/PUT-products.controller';
import { DeleteProductController } from '../controllers/products/DELETE-products.controller';

const router = Router();

router.get('/', GetProductsController);

router.get('/:id', GetProductByIdController);

router.post('/', PostProductController);

router.put('/:id', PutProductController);

router.delete('/:id', DeleteProductController);

export default router;
