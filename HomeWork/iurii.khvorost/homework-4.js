"use strict";

// 1. Create singletone based on generator. Generator returns random n niumbers. Numbers must be integers.

const random = (function(n) {

    let instance = null;

    const generator = function *() {
        const random = function() {
            return (Math.random() * 10).toFixed(0);
        }

        for (let i = n-1;  i > 0; --i) {
            yield random();
        }
        return random();
    }

    if (!instance) {
        instance = generator();
    }
    return instance;
})(3);

let result;
do {
    result = random.next();
    console.log(result.value);
}
while (!result.done)


// 2. Create proxy object that will be validate User class input. 
// Age - is integer, in range 0 - 100. 
// Name is the string. Min length 3 max length 50. 
// Proxy should add full name field that would be concatination of First nad last name.

const user = {
};

let proxy = new Proxy(user, {
    get(target, property) {
        if (property == "fullName") {
            return `${target["firstName"]} ${target["lastName"]}`;
        }
        return target[property];
    },
    set(target, property, value) {
        switch(property){
            case "firstName":
            case "lastName":
                if (typeof value === "string") {
                    if (value.length < 3 || value.length > 50) {
                        throw new RangeError("The name length is invalid");
                    }
                } else {
                    throw new TypeError("The name is not a string");
                }
                break;

            case "age":
                if (Number.isInteger(value)) {
                    if (value < 0 || value > 100) {
                        throw new RangeError("The age is invalid");
                    }
                } else {
                    throw new TypeError("The age is not an integer");
                }
                break;
        }

        target[property] = value;
        return true;
    }
});

proxy.firstName = "John";
proxy.lastName = "Right";
proxy.age = 33;
console.log(proxy.fullName);

try {
    proxy.age = 150;
}
catch (error) {
    console.log(`Error: ${error.message}`);
}

try {
    proxy.firstName = "Hi";
}
catch (error) {
    console.log(`Error: ${error.message}`);
}


