class BankAccount {
  constructor(accountNumber, name, balance) {
    this._accountNumber = accountNumber;
    this._name = name;
    this._balance = balance;
  }
  //Deposer de l'argent
  depositMoney(amount) {
    this._balance += amount;
    console.log(`Argent déposé: ${amount}. Nouveau sold: ${this._balance}`);
  }

  //Retirer de l'argent
  withdrawMoney(amount) {
    //Si la quantité d'argent à prélever est plus petite ou égale au solde présent
    if (amount <= this._balance) {
      this._balance -= amount;
      console.log(`Solde retiré: ${amount}, solde restant: ${this._balance}`);
    } else {
      console.log("Opération impossible, solde insuffisant");
    }
  }

  //Transférer de l'argent depuis un compte
  transferMoney(amount, recipientAccount) {
    if (amount <= this._balance) {
      this._balance -= amount;
      recipientAccount.depositMoney(amount);
      console.log(
        `Le solde de ${amount} euros a été transférer depuis le compte ${this._accountNumber}`
      );
    } else {
      console.log(
        `Le solde sur le compte ${this._accountNumber} est insuffisant pour un transfert`
      );
    }
  }

  //Afficher les infos du compte
  displayBalance() {
    console.log(
      `Compte: ${this._accountNumber} balance: ${this._balance}euros`
    );
  }
}

const account1 = new BankAccount("SB-012", "Jodie Addis", 2000);
const account2 = new BankAccount("BS-019", "  Cassandra Addis", 3000);

account1.displayBalance();
account2.displayBalance();

account1.depositMoney(5000);
account1.displayBalance();

account1.withdrawMoney(1500);
account1.displayBalance();

account1.transferMoney(3500, account2);
account1.displayBalance();
account2.displayBalance();
