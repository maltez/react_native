
function getToken(user, password) {
    return new Promise((resolve, reject) => {
        console.log(`Getting token... (${user}/${password})`);

        setTimeout(() => {
            let data = Math.random() > .5
                ? 'vV6xEfVgQZv4ABJ6VZDHlQfCaqKgFZuN' 
                : "Error: 401 Unauthorized";

            return data.includes("Error") 
                ? reject(data) 
                : resolve(data);
        }, Math.random() * 1000);
    });
}

function getUsers(token) {
    return new Promise(resolve => {
        console.log(`Getting users... (${token})`);

        setTimeout(() => {
            return resolve(["John", "Dave", "Bill", "Alice"])
        }, Math.random() * 1000);
    });
}

function getRoles(token) {
    return new Promise(resolve => {
        console.log(`Getting roles... (${token})`);

        setTimeout(() => {
            return resolve(["guest", "developer", "sales", "manager"])
        }, Math.random() * 1000);
    });
}

function getRights(token) {
    return new Promise(resolve => {
        console.log(`Getting rights... (${token})`);

        setTimeout(() => {
            return resolve(["read", "write", "read/write", "read/write"])
        }, Math.random() * 1000);
    });
}

function getCompanies(token) {
    return new Promise(resolve => {
        console.log(`Getting companies... (${token})`);

        setTimeout(() => {
            return resolve(["Apple", "Oracle", "Google", "Microsoft"])
        }, Math.random() * 1000);
    });
}

function findUser(users, role) {
    return new Promise(resolve => {
        console.log(`Finding users... (${role})`);

        setTimeout(() => {
            let user = users.find(item => { return item.role == role;});
            return resolve(user);
        }, Math.random() * 1000);
    });
}

function getUserInfo(user, protocol) {
    return new Promise(resolve => {
        console.log(`Getting user info... ${user.name} / ${protocol}`);

        setTimeout(() => {
            return resolve(`User Info (${protocol}): ${user.name}`);
        }, Math.random() * 1000);
    });
}

getToken('admin', '1234567890')
    .then(token => {
        console.log(`Token: ${token}`);

        return Promise.all([getUsers(token), getRoles(token), getRights(token), getCompanies(token)]);
    })
    .then(data => {
        console.log(data);
        
        // Build users objects
        let users = [];
        for (let i=0; i<data[0].length; ++i) {
            users[i] = {
                name: data[0][i],
                role: data[1][i],
                rights: data[2][i],
                company: data[3][i],
            };
        }

        console.log(users);

        return findUser(users, 'manager');
    })
    .then (manager => {
        console.log(manager);

        return Promise.race([getUserInfo(manager, "http"), getUserInfo(manager, "https"), getUserInfo(manager, "soap")]);
    })
    .then(info => {
        console.log(info);
    })
    .catch(error => {
        console.log(error);
    });

