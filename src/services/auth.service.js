import userDB from "../db/users.db.js";
import jwt from 'jsonwebtoken';
import { envs } from "../utils/dotenv.js";
import { comparePassword } from "../utils/hash.js";

export default {
    validateUser : ({username, password}) => {
        const user = userDB.findUserByUsername(username.toLowerCase());

        if (!user) return false;

        if (comparePassword(password, user.password)) return user;

        return false;
    },

    createJWT : (user) => {
        return jwt.sign(
            { id: user.id, name: user.name },
            envs.JWT_SECRET,
            { expiresIn: '72h' }
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

    createUser : ({username, password, name}) => {
        const existingUser = userDB.findUserByUsername(username.toLowerCase());

        if (existingUser) return false;

        return userDB.addUser(username.toLowerCase(), password, name);
    }
}