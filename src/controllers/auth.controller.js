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

export const register = function(req, res) {
    const { username, password, name } = req.body;

    if (!username || !password || !name) {
        return Responser.error(res, 'Username, password and name are required', 400);
    }

    const newUser = AuthService.createUser({ username, password, name });

    if (!newUser) {
        return Responser.error(res, 'Username already exists', 409);
    }

    delete newUser.password; // Eliminar la propiedad de contraseña del objeto de respuesta

    return Responser.success(res, newUser, 201);
}
