import { Router } from 'express';
import { login } from '../controllers/auth.controller.js';
import articulosController from '../controllers/articulosController.js';
import authMiddleware from '../middlewares/auth.middleware.js';
const routes = () => {
    const router = Router();

    router.post('/api/login', login);
    router.post('/api/productos', authMiddleware, articulosController.guardarProducto);
    router.get('/api/productos', authMiddleware, articulosController.obtenerProductos);

    return router;
};

//crear api/productos para agregar productos a la lista de productos disponibles



export default routes();

