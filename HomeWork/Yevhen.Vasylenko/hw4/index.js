"use strict";
// Part 1
// Create singleton based on generator.
// Generator returns random n numbers.
// Numbers must be integers.
const Singleton = {
    
    getInstance() { return this; },

    *generateSequence(count) {
        for (let i = 0; i < count; i++) {
            yield Math.round(Math.random() * 1000);
        }
    }
 };

let instance = Singleton.getInstance();
for (let num of instance.generateSequence(5)) {
    console.log(`${typeof num}: ${num}`);
}

let instance2 = Singleton.getInstance();
for (let num of instance2.generateSequence(3)) {
    console.log(`${typeof num}: ${num}`);
}

// Part 2
// Create proxy object that will be validate User class input.
// Age - is integer, in range 0 - 100. Name is the string.
// Min length 2 max length 50. Proxy should add full name 
// field that would be concatination of First and last name.
function User() {
}

const user = new User();

const proxy = new Proxy(user, {
    
    get(target, prop) {
        if (prop == "fullName") {
            return target.name + " " + target.secondName;
        }
        return target[prop];
    },

    set(target, prop, value) {
        if (prop == "age") {
            if (value >= 0 && value <= 100) {
                target.prop = value;
            }
        } else if (prop == "name") {
            if (value.length >= 2 && value.length <= 50) {
                target[prop] = value;
            }
        } else {
            target[prop] = value;
        }
        return true;
    }
});

proxy.name = "Yevhen";
proxy.secondName = "Vasylenko";
proxy.age = 30;

alert(proxy.fullName);