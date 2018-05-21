const sym = Symbol("sym");

class HomeWork {
  constructor(arg) {
    this[sym] = arg;
  }
}
