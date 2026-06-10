import { hashPassword } from "../utils/hash.js";

function usersDB() {
    const users = [ 
        { id: 1, username: "vicente", password: hashPassword("password"), name: "Vicente Luna" },
        { id: 2, username: "josue", password: hashPassword("password"), name:  "Josue Cruz" },
    ];

    return {
        findUserByUsername: (username) => {
            const user = users.find(user => user.username === username);

            return user ? { ...user } : null;
        },
        findUserById: (id) => {
            const user =  users.find(user => user.id === id);

            return user ? { ...user } : null;
        },
        addUser: (username, password, name) => {
            const newUser = {
                id: users.length + 1,
                username,
                password: hashPassword(password),
                name
            };

            users.push(newUser);
            
            return newUser;
        }
    }
};


export default usersDB();