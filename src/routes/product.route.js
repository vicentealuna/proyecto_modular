import { Router } from 'express';
import { test } from '../controllers/product.controller.js';
import articulosController from '../controllers/articulosController.js';
import authMiddleware from '../middlewares/auth.middleware.js';

const routes = () => {
    const router = Router();

    router.post('/api/productos', authMiddleware, articulosController.guardarProducto);
    router.get('/api/productos', authMiddleware, articulosController.obtenerProductos);
    router.get('/api/productos/:id', authMiddleware, articulosController.buscarProductoPorId);

    return router;
};

export default routes();