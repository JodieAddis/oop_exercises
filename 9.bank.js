class Bank {
  constructor(name, branche) {
    this._name = "";
    this._branches = [];
  }
  modifyBranch(branch) {
    this._branches.push(branch);
    console.log(`${branch} a bien été ajouté`);
  }

  removeBranch(branch) {
    let index = this._branches.indexOf(branch);
    this._branches.splice(index, 1);
    console.log(`${branch} a été supprimé`);
  }

  displayBranch(branch) {
    if (this._branches.length === 0) {
      console.log("Aucune branche n'est disponible");
    } else
      this._branches.forEach((branch, index) => {
        console.log(`${index + 1}. ${branch}`);
      });
  }
}

const newBank = new Bank();

newBank.modifyBranch("Branch A");
newBank.modifyBranch("Branch B");
newBank.modifyBranch("Branch C");
newBank.displayBranch();

newBank.removeBranch("Branch B");
newBank.displayBranch();
