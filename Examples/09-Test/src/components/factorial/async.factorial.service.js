import factorial from './factorial.service';

const asyncFactorial = (input, cb) => {
    if(typeof input !== 'number') {
        throw new Error('Expected number type');
    }

    if(input < 0) {
        throw new RangeError('Factorial is not defined for negative number');
    }

    setTimeout(()=> {
        const res = factorial(input);
        cb(res);
    }, 500);
}

export default asyncFactorial;