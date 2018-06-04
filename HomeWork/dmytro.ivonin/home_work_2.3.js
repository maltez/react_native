/*
 * Autor: Dmytro Ivoin
 * Task:  Create generator generator has to returns factorial sequence from 0 to n;
 */

'use strict'

function* factorialGenerator(n) {
    let result = 1;

    for (let i = 0; i <= n; i++) {
        yield (i !== 0) ? result *= i : 1; 
    }
}

let n = 11;
let sequence = [...factorialGenerator(n)];
console.log(sequence);