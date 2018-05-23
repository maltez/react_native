//1. WeakMap

var privateData = new WeakMap();

class Person {
    constructor(name) {
        privateData.set(this, {
            name: name
        });
    }

    get getName() {
        return privateData.get(this).name;
    };
}
let newPerson = new Person("Bruce");

console.log(newPerson.getName);
console.log(Object.getOwnPropertyNames(newPerson));

//2. Fibonacci iterator
function getFibonacciIterator(n) {
    let nextIndex = 1;
    let previousValue = 0;
    let beforePreviousValue = 0;

    return {
        next: function () {
            if (nextIndex <= n) {

                let currentValue = previousValue + beforePreviousValue;

                if (currentValue == 0) {
                    currentValue = 1;
                }

                beforePreviousValue = previousValue;
                previousValue = currentValue;
                nextIndex++;
                return {
                    value: currentValue,
                    done: false
                }
            } else {
                return {
                    done: true
                };
            }
        }
    }
}

let iterator = getFibonacciIterator(7);
nextValue = iterator.next();
while (!nextValue.done) {
    console.log(nextValue.value);
    nextValue = iterator.next();
}

//3. Factorial generator
function* getFactorialGenerator(n) {
    let index = 0;
    let currentValue = 1;
    while (index <= n) {
        currentValue = index == 0 ? 1 : currentValue * index;
        index++;
        yield currentValue;
    }
}

let iterator = getFactorialGenerator(7);
nextValue = iterator.next();
while (!nextValue.done) {
    console.log(nextValue.value);
    nextValue = iterator.next();
}