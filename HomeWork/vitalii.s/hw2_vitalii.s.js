//1
const wm_property = new WeakMap();
class HomeWork2 {
    constructor(value) {
        wm_property.set(this, value);
    }
    getProperty() {
        return wm_property.get(this);
    }
}
let hw2 = new HomeWork2("some value");
console.log(hw2.getProperty());

//2
class Fibonacci {
    constructor(n) {
        this.n = n;
    }
    [Symbol.iterator]() {
        let n = this.n,
            currentIndex = 0,
            a = 0,
            b = 1,
            value = 1;
        return {
            next() {
                if (currentIndex > 0) {
                    value = a + b;
                    a = b;
                    b = value;
                } else value;

                currentIndex++;
                return {
                    value,
                    done: currentIndex > n
                };
            }
        };
    }
}

let fibonacci = new Fibonacci(7);
for (let i of fibonacci) {
    console.log(i);
}

//3
const Factorial = function*(n) {
    let value = 1;
    for (i = 1; i <= n; i++) {
        yield (value *= i);
    }
};

let factorial = Factorial(10);
console.log(...factorial);
