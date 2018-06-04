// 2.1 Create a private member in class using WeakMap

const User = (function() {
    let private = new WeakMap();

    function _User(name, id) {
        this.name = name;
        private.set(this, id);
    }

    _User.prototype.getId = function() {
        return private.get(this);
    }

    return _User;
})();

const user = new User("Roger", 5);
console.log(`User ${user.name} has id=${user.getId()}`); // User Roger has id=5

// 2.2 Create iterator of fibonacci numbers from first to n

class Fibonacci {
    constructor(max) {
        this.max = max;
    }

    [Symbol.iterator] () {
        let num1 = 0;
        let num2 = 1;
        let count = 0;
        const max = this.max;

        return {
            next() {
                const val = num1 + num2;
                num1 = num2;
                num2 = val;
                count++;
                return {
                    value: val, done: count > max
                }
            }
        }
    }
}

const fibonacci = new Fibonacci(8);
for (let num of fibonacci) {
    console.log(num);
    /*
    1
    2
    3
    5
    8
    13
    21
    34
    */
 }


// 2.3 Create of factorial sequence from 0 to n;

function* factorial(max) {
    yield 1;
    let val = 1;
    for (let i = 1; i <= max; i++) {
        yield val *= i;
    }
}

const generator = factorial(6);
for (let val of generator) {
    console.log(val)
    /*
    1
    1
    2
    6
    24
    120
    720
    */
}
