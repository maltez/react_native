const s_property = Symbol("property");
const s_method = Symbol("method");

class HomeWork1 {
    constructor(property) {
        this[s_property] = property;
    }
    [s_method]() {
        console.log(`Home Work has a private property called '${this[s_property]}'`);
    }
    run() {
        this[s_method]();
        console.log("Also it has a method using Symbol!");
    }
}

let hw1 = new HomeWork1("new property");
hw1.run();
console.log(hw1[s_property]);//?
