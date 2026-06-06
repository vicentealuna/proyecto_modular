
import { Responser } from '../utils/responser.js';
import AuthService from '../services/auth.service.js';

export default (req, res, next) => {
  const authorization = req.headers['authorization'];

  
  if (!authorization || !authorization.startsWith('Bearer ')) {
    return Responser.error(res, 'Access denied.', 401);
  }
  
  const token = authorization.substring(7); // Remove "Bearer " prefix
  
  if (!token) {
    return Responser.error(res, 'Access denied.', 401);
  }
  
  const isValid = AuthService.validateJWT(token);

  if (!isValid) {
    return Responser.error(res, 'Access denied.', 401);
  }
  next();
};
