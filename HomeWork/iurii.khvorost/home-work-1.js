class Private {
   constructor () {
        this._symbol = Symbol("_private");
   }

   get _private() {
        return this[this._symbol];
   }

   set _private(value) {
        this[this._symbol] = value;
   }

   test () {
       this._private = "Private!";
       console.log(this._private);
   }
}

const private = new Private();
private.test();