
let myProp = Symbol('symbProp');

class myClass {
    constructor(value) {
        this[myProp] = value;
    }

    get propValue() {
        return this[myProp];
    }
    set propValue(value) {
        this[myProp] = value;
    }
  }

let a = new myClass(2);
console.log(a.propValue);
a.propValue = 5;
console.log(a.propValue);