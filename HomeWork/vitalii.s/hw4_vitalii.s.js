// 1. Create singleton based on generator. Generator returns random n numbers. Numbers must be integers.

const SingleGen = (function() {
    let instance;

    class Singleton {
        constructor(numbers) {
            if (!instance) {
                instance = this;
            }

            this.numbers = numbers;

            return instance;
        }

        *generator () {
            for (let i = 1; i <= this.numbers; i++) {
                yield ( Math.floor(Math.random() * Math.floor(this.numbers)));
            }
        };
    }
    return Singleton;
})();

let singleGen = new SingleGen(23);
console.log(...singleGen.generator());

// 2. Create proxy object that will be validate User class input. Age - is integer, in range 0 - 100.
// Name is the string. Min length 2 max length 50. Proxy should add full name field that would be
// concatination of First and last name.

const User = (function(firstName,lastName, age){
    class User {
        constructor(firstName,lastName, age){
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
            this.fullName = firstName + ' ' + lastName;
        }
    }

    return new Proxy(new User(firstName,lastName, age), {
        get(target, prop) {
            console.log(`Read ${prop}`);
            return target[prop];
        },
        set(target, prop, value) {
            if(typeof value === 'string' && value.length > 2 && value.length <= 50){
                console.log(`Property ${prop} updated`);
                target[prop] = value;
                return true;
            }
            else if(typeof value ===  'number' && value >= 0 && value <= 100){
                console.log(`Property ${prop} updated`);
                target[prop] = value;
                return true;
            } else {
                console.log('Wrong data');
                return false;
            }
        }
    })
})

var user = User('Chris', 'Poul', 33);
console.log('First Name:' + user.firstName, 'Last Name:' + user.lastName, "Age:" + user.age, 'Full Name:' + user.fullName);
user.firstName = 'C';
user.age = 101;
console.log('First Name:' + user.firstName, 'Last Name:' + user.lastName, "Age:" + user.age, 'Full Name:' + user.fullName);
