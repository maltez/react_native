/*
 * Author: Dmytro Ivonin
 * Task:   Create singleton based on generator. Generator returns random n numbers. Numbers must be integers.
 */

const RandomSingletonGenerator = (function(){
    let instance;

    class RandomGenerator {
        constructor(n){
            this.n = n;
            this.randomArr = []
            for (let i = 0; i < n; i++) {
                this.randomArr[i] = Math.floor(Math.random() * 10);
            }
        }
    }

    return (n) => {
        if (!instance) {
            instance = new RandomGenerator(n);
        }

        return instance;
    };
})();

console.log(RandomSingletonGenerator(10));
console.log(RandomSingletonGenerator(10));      // the output should be the same as it was on previous line
