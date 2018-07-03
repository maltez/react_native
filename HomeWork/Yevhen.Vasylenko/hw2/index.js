// Create private member in class using WeakMap.
const weakMap = new WeakMap();

class HomeWork {

    constructor(arg) {
        weakMap.set(this, arg);
    }
}

let homeWork = new HomeWork("Homework 2");

console.log(weakMap.get(homeWork));


// Create iterator. Generator has to reruns sequence of fibonacci numbers from first to n.
class FibonacciIterator {
    
    constructor(limit) {
        this.limit = limit;
    }

    [Symbol.iterator]() {
        let a = 0;
        let b = 1;
        let currentIndex = 0;
        let limit = this.limit;

        return {
            next() {
                const value  = a + b;
                a = b;
                b = value;
                currentIndex += 1;
                return {
                    value, done: currentIndex > limit
                }
            }
        }
    }
}

const fibSequence = new FibonacciIterator(10);
console.log(...fibSequence);


// Create generator generator has to returns factorial sequence from 0 to n;
const factorialGenerator = function* (n) {
    let value = 1;
    for (i = 1; i <= n; i++) {
        yield(value *= i);
    }
};

const count = 7;

const fGen = factorialGenerator(count);
console.log(...fGen);