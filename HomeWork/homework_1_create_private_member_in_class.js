
function createEmployee(name) {

    let salary = Symbol('salary');

    class Employee {
        constructor(name) {
            
            this.name = name;
            this[salary] = 100500;
        }

        showSalary() {
            console.log(`Salary = ${this[salary]}`);
        }
    }
    return new Employee(name);
}

let vasya = createEmployee('Vasya');

for (let key in vasya) {
    console.log(`${key} = ${vasya[key]}` );   // name = Vasya
}

console.log(vasya.name);  // public property
//console.log(vasya[salary]); // ReferenceError: salary is not defined
vasya.showSalary();


