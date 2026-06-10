function usersDB() {
    const users = [ 
        { id: 1, username: "vicente", password: "password", name: "Vicente Luna" },
        { id: 2, username: "josue", password: "password", name:  "Josue Cruz" },
    ];

    return {
        findUserByUsername: (username) => {
            return users.find(user => user.username === username);
        },
        findUserById: (id) => {
            return users.find(user => user.id === id);
        },
    }
};


export default usersDB();