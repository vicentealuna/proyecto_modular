import userDB from "../db/users.db.js";
import jwt from 'jsonwebtoken';
import { envs } from "../utils/dotenv.js";

export default {
    validateUser : ({username, password}) => {
        const user = userDB.findUserByUsername(username.toLowerCase());

        if (!user) return false;

        if (user.password !== password) return false;

        return user;
    },

    createJWT : (user) => {
        return jwt.sign(
            { id: user.id, name: user.name },
            envs.JWT_SECRET,
            { expiresIn: '24h' }
        );
    },

    validateJWT : (JWT) => {
        try {
            const decoded = jwt.verify(JWT, envs.JWT_SECRET);
            
            const user = userDB.findUserById(decoded.id);// Agrega este log para verificar el contenido del token decodificado
            
            if (!user) return false;

            return true;
        } catch (error) {
            return false;
        }
    },
}