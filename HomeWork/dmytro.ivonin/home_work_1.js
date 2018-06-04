/*
 * Autor: Dmytro Ivoin
 * Task:  Create private member in class using Symbol primitive.
 */

'use strict'

let privateProperty = Symbol();

class Class {
    constructor() {
        this.publicProperty = 'unsecret';
        this[privateProperty] = 'secret';
    }

    printPrivateValue() {
        console.log(this[privateProperty]);
    }
}

let instance = new Class();

for (let prop in instance) {
    console.log(`${prop} = ${instance[prop]}`); // prints only one line: publicProperty = unsecret
                                                // privateProperty will not be printed
}

instance.printPrivateValue();   // secret
