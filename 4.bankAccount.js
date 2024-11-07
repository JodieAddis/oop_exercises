class BankAccount {
  constructor(account, balance) {
    this._account = account;
    this._balance = balance;
  }
  deposit(value) {
    return (this._account += value);
  }

  withdraw(value) {
    return (this._account -= value);
  }
}

const bankOne = new BankAccount(5000, 30);
console.log(bankOne.deposit(300));
const bankTwo = new BankAccount(6000, 100);
console.log(bankTwo.withdraw(560));
