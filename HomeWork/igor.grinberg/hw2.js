const Module = (function(){

    const myPrivateProp = new WeakMap();
    const key1 = {};
    const key2 = {}
    myPrivateProp.set(key1, 37).set(key2, "Hi there!");

    const myPrivateMethod = () => {
        console.log('This is private!');
    }

    const myPublicMethod = () => {
        console.log('Here goes public function');
        myPrivateMethod();
        console.log('you can see private props here:');
        console.log(myPrivateProp.get(key1));
        console.log(myPrivateProp.get(key2));
    }


    return {
        myPublicMethod,
    }
})();

Module.myPublicMethod();





class fibonacciIterator {
    constructor(limit) {
        this.limit = limit;
    }

    [Symbol.iterator]() {
        let a =0;
        let b =1;
        let currentIndex = 0;
        let limit = this.limit;

        return {
            next() {
                const value  = a+b;
                a = b;
                b = value;
                currentIndex += 1;
                return {
                    value, done: currentIndex > limit
                }
            }
        }
    }
}

const fibonacciSequence = new fibonacciIterator(10);
for (let i of fibonacciSequence) {
    console.log(i);
}


const factorialGenerator = function * (limit) {
    yield 1;
    let factorial = 1;
    for (let i = 1; i < limit; i++) {
        factorial *= i;
        yield factorial;
    } 
    return;
}

const factorialGen = factorialGenerator(10);
for (i = 1; i<10; i++) {
    console.log(`${i-1}! equals ${factorialGen.next().value}`);
}