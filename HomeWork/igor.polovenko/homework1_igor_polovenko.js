class WithPrivate {
    constructor() {
        this[Symbol.for('private')] = 'value';
    }
}

let withPrivate = new WithPrivate();
console.log(withPrivate[Symbol.for('private')]);

for (let prop in withPrivate) {
    console.log(`Read property: ${prop}`);
}
