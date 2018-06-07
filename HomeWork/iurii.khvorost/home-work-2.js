// Create private member in class using WeakMap.

const Private = (function() {

    let map = new WeakMap();

    class Private {
        get _private() {
            return map.get(this);
        }

        set _private(value) {
            map.set(this, value);
        }

        test() {
            this._private = "Private member!";
            console.log(this._private);
        }
    }

    return Private;
})();

const private = new Private();
private.test();


// Create iterator. Generator has to reruns sequence of fibonacci numbers from first to n.

class Fibonacci {
    constructor(count) {
        this._count = count;
    }

    [Symbol.iterator]() {
        let number = [0, 1];
        let position = 0;
        let count = this._count;
        
        return {
            next() {
                let value =  (position < 2) ? number[position] : number[0] + number[1];
                if (position > 1) {
                    number[0] = number[1];
                    number[1] = value;
                }
                return { done: position++ > count, value: value };
            }
        }
    }
}

const fibonacci = new Fibonacci(10);
console.log("\nFibonacci:");
for (let value of fibonacci) {
    console.log(value);
}


// Create generator generator has to returns factorial sequence from 0 to n;

const factorial = function *(n) {
    yield 0;
    let value = 1;
    for (let i = 1; i < n; i++) {
        value *= i;
        yield value;
    }
    return value * n;
}

const gen = factorial(10);
console.log("\nFactorials:");
let result;
do {
    result = gen.next();
    console.log(result.value);
}
while (!result.done)
