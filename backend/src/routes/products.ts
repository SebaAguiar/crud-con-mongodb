import { Router } from 'express';
import {
  GetProductByIdController,
  GetProductsController,
} from '../controllers/products/GET-products.controller';

const router = Router();

router.get('/', GetProductsController);

router.get('/:id', GetProductByIdController);

// router.post('/');

// router.put('/:id');

// router.delete('/:id');

export default router;
