const Generaton = (function(){
    let instance;
    class Singleton {
        constructor(n) {
            this.n = n
            instance = instance ? instance : this;
            return instance
        }

        *generator() {
            for (let i =0; i< this.n; i++) {
                yield Math.floor(Math.random()*1000);
            }
        } 
    }

    //instance = instance ? instance : new Singleton(this.n);
    return Singleton;
})();


let num = 5;
let myGeneraton = new Generaton(num);
console.log(...myGeneraton.generator());

let newNum = 10;
let newGeneraton = new Generaton(newNum);
console.log(...newGeneraton.generator());




const User = (function(name, secondName, age){
    class User {
        constructor(name, secondName, age){
            this.name = name;
            this.secondName = secondName;
            this.age = age;
        }
    }

    return new Proxy(new User(name, secondName, age), {
        get(target, prop) {
            return prop === 'fullName' ? `${name} ${secondName} is here`  : target[prop];
        },
        set(target, prop, value) {
            switch (prop) {
                case 'name':
                case 'secondName':
                  if (typeof value !== 'string' || value.length < 2 || value.length > 50) {
                      console.log(`Wrong ${prop}`);
                      break;
                  }
                case 'age': 
                  if (typeof value !== 'number' || value < 0 || value > 100) {
                      console.log('Wrong age');
                      break;
                  }
                default:
                  target[prop] = value;
                  return true;
            }
        }
    })
})

var user = User('Captain', 'America', 30);
console.log(user.name, user.secondName);
console.log(user.fullName);
user.secondName = 'A';
console.log(user.secondName);
user.age = 300;
console.log(user.age);
