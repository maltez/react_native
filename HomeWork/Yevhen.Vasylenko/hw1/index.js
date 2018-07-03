const sym = Symbol("sym");

class HomeWork {
  constructor(arg) {
    this[sym] = arg;
  }

  get symValue() {
    return this[sym];
  }

  set symValue(value) {
    this[sym] = value;
  }
}

let hw = new HomeWork(7);
console.log(hw.symValue);
hw.symValue = 3;
console.log(hw.symValue);