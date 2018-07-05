let Singleton = (function () {

    class SingletonGen {
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
                instance = new SingletonGen(n);
            }
            return instance;
        }
    }
})();

let instance = Singleton.getInstance(15);
for (let num of instance.generate()) {
    console.log(`${typeof num}: ${num}`);
}

const User = (function (name, lastName, age) {

    class User {
        constructor(name, lastName, age) {
            this.name = name;
            this.lastName = lastName;
            this.age = age;
        }
    }

    return new Proxy(new User(name, lastName, age), {
        get(target, prop) {
            return target[prop];
        },

        set(target, prop, value) {
            verified = false;
            switch (prop) {
                case 'name':
                case 'lastName':
                    if (value.length < 2 || value.length > 50) {
                        console.log(`Error: "${prop}" length must be in the range 2..50!`);
                        return false;
                    }
                    verified = true;
                    break;
                case 'age':
                    if (value < 0 || value > 100) {
                        console.log(`Error: "${prop}" must be in the range 0..100!`);
                        return false;
                    }
                    verified = true;
                    break;
            }
            target[prop] = value;
            if (verified) {
                console.log(`Property "${prop}" is verified.`);
            }
            return true;
        }
    })
})

var user = User('Norman', 'Peter', 32);
console.log('Name:' + user.name, 'Last Name:' + user.lastName, "Age:" + user.age);
user.name = 'ALex';
user.age = 45;
console.log('Name:' + user.name, 'Last Name:' + user.lastName, "Age:" + user.age);