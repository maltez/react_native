/*
 * Autor: Dmytro Ivoin
 * Task:  Create private member in class using WeakMap.
 */

'use strict'

let privateProperty = new WeakMap();

class Class {
    constructor() {
        this.publicProperty = 'unsecret';
        privateProperty.set(this, {privateProperty: 'secret'});
        this[privateProperty] = privateProperty[0];
    }

    printPrivateValue() {
        console.log(privateProperty.get(this).privateProperty);
    }
}

let instance = new Class();

for (let prop in instance) {
    console.log(`${prop} = ${instance[prop]}`); // prints two lines:    publicProperty = unsecret
                                                //                      [object WeakMap] = undefined
}

instance.printPrivateValue(); // secret
