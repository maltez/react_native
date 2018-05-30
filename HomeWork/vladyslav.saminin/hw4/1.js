const IntegerGenerator = (function () {
    let instance;

    class IntegerGenerator {
        constructor(n) {
            this.n = n;
            this.integersArray = this.getNumbers();
        }

        _getNumbers() {
            let integersArray = [];
            let randomGenerator = this.randomGenerator();
            let nextValue = randomGenerator.next();
            while (!nextValue.done) {
                integersArray.push(nextValue.value);
                nextValue = randomGenerator.next();
            }

            return integersArray;
        }

        * randomGenerator() {
            for (let i = 0; i < this.n; i++) {
                yield Math.floor(Math.random() * 100) + 1;
            }
        }
    }
    return (n) => {
        if (!instance) {
            instance = new IntegerGenerator(n);
        }

        return instance;
    };
})();

let randomNumbers = IntegerGenerator(5).integersArray;
console.log(randomNumbers);

let desperatelyTryingToChangeRandomNumbers = IntegerGenerator(5).integersArray;
console.log(desperatelyTryingToChangeRandomNumbers);