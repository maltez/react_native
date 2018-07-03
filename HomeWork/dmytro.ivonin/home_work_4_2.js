/*
 * Author:  Dmytro Ivonin
 * Task:    Create proxy object that will be validate User class input. 
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
        get(target, prop) {
            if (prop === 'fullName') {
                return `${target.firstName} ${target.lastName} (modified by proxy)`;
            }
            return target[prop];
        },
        set(target, prop, value) {
            console.log(`Write '${prop}' with '${value}'`);

            if (prop === 'age') {
                if (typeof value !== 'number') {
                    console.log(`Error: '${prop}' must be integer`);
                    return false;
                } 
                
                if (value < 0 || value > 100) {
                    console.log(`Error: '${prop}' must be in range 0 - 100`);
                    return false;
                }
            } else if (prop === 'firstName' || prop === 'lastName') {
                if (typeof value !== 'string') {
                    console.log(`Error: '${prop}' must be string`);
                    return false;
                } 

                if (value.length < 2 || value.length > 50) {
                    console.log(`Error: length of '${prop}' must be in range 2 - 50 chars`);
                    return false;
                }
            }

            target[prop] = value;
            return true;
        }
    })
})

var user = User('Ivan', 'Petrov', 50);

user.age = 'str';               // Error: 'age' must be integer
user.age = 40;                  
user.age = 500;                 // Error: 'age' must be in range 0 - 100
console.log(user.age);          // 40

user.firstName = 'P';           // Error: length of 'firstName' must be in range 2 - 50 chars
user.firstName = 55;            // Error: 'firstName' must be string
user.lastName = 'Sidorov';
console.log(user.fullName);     // Ivan Sidorov (modified by proxy)

