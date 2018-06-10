symbolId = Symbol("symbolId");

class Person {

    constructor(id) {
        this[symbolId] = id;
    }

    get getId() {
        return this[symbolId];
    }
}

newPerson = new Person("personId");
console.log(newPerson.getId);
console.log(Object.getOwnPropertyNames(newPerson));
