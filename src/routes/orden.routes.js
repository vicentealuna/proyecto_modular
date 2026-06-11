import { Router } from 'express';
import ordenController from '../controllers/ordenCcontroller.js';
import authMiddleware from '../middlewares/auth.middleware.js';

const routes = () => {
    const router = Router();

    router.post('/api/ordenes', authMiddleware, ordenController.crearOrdenController);
    router.get('/api/ordenes', authMiddleware, ordenController.obtenerOrdenesController);
    router.get('/api/ordenes/:id', authMiddleware, ordenController.buscarOrdenPorIdController);
    router.get('/api/ordenes/pendientes', authMiddleware, ordenController.obtenerPendientesController);
    router.put('/api/ordenes/despachar/:id', authMiddleware, ordenController.despacharOrdenController);

    return router;
};

export default routes();