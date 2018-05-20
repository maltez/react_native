//Fibonacci Iterator
class FibonacciNumbers {
    constructor(maximum) {
        this.max = maximum;
    }

    [Symbol.iterator]() {
        return {
            max: this.max,
            previous: 0,
            current: 1,
            
            next() {
                let obj;
                if (this.current <= this.max) {
                    obj = { done: false, value: this.current };
                    let next = this.previous + this.current;
                    this.previous = this.current;
                    this.current = next;
                } else {
                    obj = { done: true };
                }
                return obj;
            }
        }
    }
}

let fibonacci = new FibonacciNumbers(30);
for (let num of fibonacci) {
    console.log(num);
}

// Factorials generator
function* factorialGenerator(ceil) {
    let current = 1;
    for (let i = 0; i <= ceil; i++) {
        yield i == 0 ? current : current *= i;
    }
}

let gen = factorialGenerator(10);
let count = 0;
for (let f of gen) {
    console.log(`${count++}! = ${f}`);
}

// Private member with a WeakMap??
class WithPrivate {
    constructor() {
        this.map = new WeakMap();
        this.map.set(this, 'I am a private value');
    }
}

let withPrivate = new WithPrivate();
console.log(withPrivate.map.get(withPrivate));