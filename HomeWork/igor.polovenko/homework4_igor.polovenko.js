// Singleton with a generator method
let Singleton = (function() {

    class Single {
        constructor(n) {
            this.n = n;
        }

        *generate() {
            for (let i = 0; i < this.n; i++) {
                yield Math.random().toFixed(3) * 1000;
            }
        }
    }

    let instance;

    return {
        getInstance(n) {
            if (!instance) {
                instance = new Single(n);
            }
            return instance;
        }
    }
})();

// First instantiation
let instance = Singleton.getInstance(5);
for (let num of instance.generate()) {
    console.log(`${typeof num}: ${num}`);
}

console.log();

// One more time, try with n = 3, n is ignored
let instance2 = Singleton.getInstance(3);
for (let num of instance2.generate()) {
    console.log(`${typeof num}: ${num}`);
}




// Proxy for User objects
class User {
    constructor() {
        this.name = 'unset';
        this.lastName = 'unset';
        this.age = 'unset';
    }
}

let user = new Proxy(new User(), {
    get(target, prop) {
        if (prop == 'fullName') {
            return target['name'] + ' ' + target['lastName'];
        }
        return target[prop];
    },

    set(target, prop, value) {
        verified = false;
        switch(prop) {
            case 'name':
            case 'lastName':
                if (value.length < 2 || value.length > 50) {
                    console.log(`Error: "${prop}" length must be in the range 2..50! Received: "${value}".`);
                    return false;
                }
                verified = true;
                break;
            case 'age':
                if (+value < 0 || +value > 100) {
                    console.log(`Error: "${prop}" must be in the range 0..100! Received: "${value}".`);
                    return false;
                }
                verified = true;
                break;
        }
        target[prop] = value;
        if (verified) {
            console.log(`Value "${value}" for property "${prop}" is verified and set by proxy.`);
        }
        return true;
    }
})

user.name = 'a';
console.log(`User name: ${user.name}`);
user.name = 'Ivan';
console.log(`User name: ${user.name}`);
user.lastName = 'b';
console.log(`User last name: ${user.lastName}`);
user.lastName = 'Popov';
console.log(`User last name: ${user.lastName}`);
user.age = 300;
console.log(`User age: ${user.age}`);
user.age = 30;
console.log(`User age: ${user.age}`);
console.log(`User full name: ${user.fullName}`);