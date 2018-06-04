class BankAccount {
	constructor(balance = 0) {
		this.balanceSymbol = Symbol('balance');
		this[this.balanceSymbol] = balance;
   }

printCheck() {
		debug('Balance is ' + this[this.balanceSymbol]);
   }

}

let account = new BankAccount(100500);
debug(account.balance); // --> undefined
account.printCheck(); // --> Balance is 100500
