import { Router } from 'express';
import { login, register } from '../controllers/auth.controller.js';

const routes = () => {
    const router = Router();

    router.post('/api/login', login);

    router.post('/api/register', register);

    return router;
};      

export default routes();

