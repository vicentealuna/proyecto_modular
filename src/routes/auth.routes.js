import { Router } from 'express';
import { login } from '../controllers/auth.controller.js';

const routes = () => {
    const router = Router();

    router.post('/api/login', login);

    return router;
};      

export default routes();

