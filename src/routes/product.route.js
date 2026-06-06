import { Router } from 'express';
import { test } from '../controllers/product.controller.js';
import authMiddleware from '../middlewares/auth.middleware.js';

const routes = () => {
    const router = Router();

    router.get('/api/test', authMiddleware, test);

    return router;
};

export default routes();