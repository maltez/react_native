/* # Homework 4
 
Author: Kucherenko Mikhail

Task 1: - Create singleton based on generator. Generator returns random n numbers. Numbers must be integers.
*/

const SingletonBasedOnGenerator = (function (num_numbers) {

    let instance;

    class IntegersGenerator {
        constructor(num_numbers) {
            this.count = num_numbers;
            this.intArray = this._generate();
        }

        * generator(num) {
            for(let i = 1; i <= num; i++) {
                yield Math.round(Math.random()*i*10);
            }        
        };

        _generate() {
            let gen = this.generator(this.count);
            return [...gen];
        }
    }

    return (num_numbers) => {
        if (!instance) {
            instance = new IntegersGenerator(num_numbers);
        }

        return instance;
    };
})();

let gen = SingletonBasedOnGenerator(5);
console.log("Plan \"A\"");
console.log("gen.count= " + gen.count);  // 5
for (let num of gen.intArray) {
    console.log(num);
}
console.log("Plan \"B\"");
generator = SingletonBasedOnGenerator(100500);
console.log("gen.count= " + gen.count);  // still 5
console.log([...gen.intArray])  // integers in array same as previous



/* Task 2 - Create proxy object that will be validate User class input. 
 *          Age - is integer, in range 0 - 100. Name is the string. Min length 2 max length 50. 
 *          Proxy should add full name field that would be concatination of First and last name.
*/
const User = (function(firstName, lastName, age) {
    class User {
        constructor(firstName, lastName, age) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
        }
    }
    return new Proxy(new User(firstName, lastName, age), {
        set(target, prop, value) {
            console.log(`Wright ${prop} ${value}`);
            switch(prop) {
                case "firstName":
                case "lastName":
                    if (typeof value === 'string') {
                        if (value.length > 2 && value.length < 50) {
                            target[prop] = value;
                            return true;
                        } else {
                            console.log(new Error(`Incorrect lenght of ${prop}! Must be between 2 - 50.`));
                            return false;
                        }
                    } else {
                        console.log(new Error(`Incompatible type assign for ${prop}! Must be string value.`));
                        return false;
                    }
                    break;
                case "age":
                    console.log("age = " + typeof prop + "  typeof value = " + typeof value );
                    if (typeof value === 'number') {
                        if (value >= 0 && value <= 100) {
                            target[prop] = value;
                            return true;
                        } else {
                            console.log(new Error('Incorect age! Must be between 0 - 100.'));
                            return false;
                        }
                    } else {
                        console.log(new Error(`Incompatible type! ${prop} must be integer value.`));
                        return false;
                    }
                    break;
                default: return false;
            }
        },
        get(target, prop) {
            if (prop == 'fullName') {
                return target.firstName + " " +target.lastName;
            }
            return target[prop];
        }
    })
})

let user = new User("Ivan", "Petrov", 30);

user.firstName = "Vasiya";
user.age = 33;
console.log("userProxy.firstName = " + user.firstName);
console.log("userProxy.age = " + user.age);
console.log("userProxy.fullName = " + user.fullName);
