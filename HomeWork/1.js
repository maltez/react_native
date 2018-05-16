
function BankAccount (value = 0) {
	let balance = Symbol('balance')
	this[balance] = value;
	this.printCheck = function() {
		debug('Balance is ' + this[balance]);
	}
}

let account = new BankAccount(100500);
debug(account.balance);
account.printCheck();

// Output
// --> undefined
// --> Balance is 100500