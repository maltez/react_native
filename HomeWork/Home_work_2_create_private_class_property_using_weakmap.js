console.log("Task 1 #############################");
let Car = (function () {
    let privateProperties = new WeakMap();
  
    class Car {
      constructor(name) {
        this.name = name; // public
        privateProperties.set(this, {color: 'White'}); // private
        privateProperties.set(this, {changeColor: (newColor) => {
            privateProperties.get(this).color = newColor;
        }}); // private
      }
  
      showCar() {
        console.log(`name: ${this.name}, color: ${privateProperties.get(this).color}`);
      }
      changeCarColor(newColor) {
        privateProperties.get(this).changeColor(newColor);
        console.log(`Car color changed to ${newColor}`);
      }
    }
  
    return Car;
  })();
  
  let myCar = new Car('Toyota');
  myCar.showCar();
  myCar.changeCarColor("Black");
  myCar.showCar();

  console.log("Task 2 #############################");

  class FibonacciNumbers {
    constructor(num) {
        this.num = num;
    }
    [Symbol.iterator]() {
        let a = 1, b = 1;
        let c;
        let num = this.num;
        let value;
        return {
            next() {
                c = a + b;
                a = b;
                b = c;
                value = b;
                return {
                    value, done: b >= num
                };
            }
        }
    } 
}

const fib = new FibonacciNumbers(7);

for (let i of fib) {
    console.log(i);
}

console.log("Task 3 #####################################");

function* fibo() {
    var current = 1; 
    var a = 1, b = 1;
  
    yield 1;
  
    while (true) {
      current = b;
  
      yield current;
  
      b = a + b;
      a = current;
    }
  }
  
  sequence = fibo();
  let n = 5;
  for (let i = 1; i<n; i++) {
    console.log(sequence.next().value);
  }
 