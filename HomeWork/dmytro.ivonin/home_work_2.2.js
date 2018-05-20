/*
 * Autor: Dmytro Ivoin
 * Task:  Create iterator. Generator has to reruns sequence of fibonacci numbers from first to n.
 */

'use strict'

function fibonacciIterator(n) {
    let nextIndex = 0;
    let a = 1, b = 0;
    
    return  {
        next: function() {
            let c = a + b;
            a = b;
            b = c;

            return nextIndex++ < n
                ? {value: c, done: false}
                : {done: true};
        }
    }
}

let n = 18;

let sequence = {
    [Symbol.iterator]() {
        return fibonacciIterator(n);
    }
};

for (let index of sequence) {
    console.log(index);
}
