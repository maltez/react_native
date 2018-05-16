const privateMethod = Symbol('default property');
const someProperty = Symbol('default property');
class Homework1 {

    constructor(value) {
        this[someProperty] = value;
    }

    [privateMethod]() {
        console.log(`Private property ${this[someProperty]}`);
    }

    publicMethod() {
        this[privateMethod]();
    }
}

let hw = new Homework1('new property').publicMethod();