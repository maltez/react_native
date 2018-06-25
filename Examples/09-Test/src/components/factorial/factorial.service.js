const factorial = (input) => {
    if(typeof input !== 'number') {
        throw new Error('Expected number type');
    }

    if(input < 0) {
        throw new RangeError('Factorial is not defined for negative number');
    }


    if(input === 0){
        return 1;
    } else {
        return factorial(input - 1) * input;
    }
};

export default factorial;