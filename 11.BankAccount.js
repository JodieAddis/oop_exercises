class BankAccount {
  constructor(number, name, balance) {
    this._number = number;
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

    //A CONTINUER
  }

  transferMoney() {}
}
