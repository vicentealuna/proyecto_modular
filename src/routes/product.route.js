import { Router } from 'express';
import { test } from '../controllers/product.controller.js';
import articulosController from '../controllers/articulosController.js';
import authMiddleware from '../middlewares/auth.middleware.js';

const routes = () => {
    const router = Router();

    router.get('/api/test', authMiddleware, test);
    router.post('/api/productos', authMiddleware, articulosController.guardarProducto);
    router.get('/api/productos', authMiddleware, articulosController.obtenerProductos);

    return router;
};

export default routes();