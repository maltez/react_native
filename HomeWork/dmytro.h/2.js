// Create private member in class using WeakMap.

class BankAccount {
  constructor(balance = 0) {
    this.balanceStore = new WeakMap();
    this.balanceStore.set(this, balance);
  }

  printCheck() {
    debug('Balance is ' + this.balanceStore.get(this));
  }
}

const account = new BankAccount(100500);
account.printCheck(); // --> Balance is 100500

// Create iterator. Generator has to reruns sequence of fibonacci numbers from first to n.

class FibonacciNumbers {
  constructor(limit) {
    this.limit = limit;
  }

  [Symbol.iterator]() {
    let first = 0;
    let second = 1;
    let position = 0;
    let result = 0;
    let limit = this.limit;

    return {
      next() {
        if (!position) {
          result = first;
        } else if (position == 1) {
          result = second;
        } else {
          result = first + second;
          first = second;
          second = result;
        }
        return { done: position++ > limit, value: result };
      }
    };
  }
}

const [...numbers] = new FibonacciNumbers(10);
debug(numbers); // --> 0,1,1,2,3,5,8,13,21,34,55

// Create generator generator has to returns factorial sequence from 0 to n;

const factorial = function*(n) {
  yield 0;
  let value = 1;
  for (let i = 1; i < n; ++i) {
    value *= i;
    yield value;
  }
  return value * n;
};

const [...factorials] = factorial(10);
debug(factorials); // --> 0,1,2,6,24,120,720,5040,40320,362880
