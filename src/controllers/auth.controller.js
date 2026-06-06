import { Responser } from '../utils/responser.js';
import AuthService from '../services/auth.service.js';

export const login = function(req, res) {
    // Validar Datas de entrada
    const { username, password } = req.body;

    if (!username || !password) {
        return Responser.error(res, 'Username and password are required', 400);
    }
    // Consultar al servicio de autenticación
    const user = AuthService.validateUser({ username, password });

    // Responder al cliente
    if (!user) { 
        return Responser.error(res, 'Invalid username or password', 401);
    }

    const token = AuthService.createJWT(user);
    Responser.success(res, { token });
}
