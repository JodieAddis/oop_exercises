class University {
  constructor(universityName, departments) {
    this._universityName = universityName;
    this._departments = [];
  }

  addDepartment(name) {
    this._departments.push(name);
    console.log(`The new department is ${name}`);
  }

  removeDepartment(name) {
    if (name.length === 0) {
      console.log("The department name is invalid");
    } else {
      let index = this._departments.indexOf(name);
      this._departments.splice(index, 1);
    }
  }

  displayDepartments() {
    console.log(
      `There are all departments of the University ${this._universityName}: ${this._departments}`
    );
  }
}

const university = new University("Umons");

university.addDepartment("Zoologie");
university.displayDepartments();

university.addDepartment("Biomar, Biocell, Biochimie");
university.displayDepartments();

university.removeDepartment("Zoologie");
university.displayDepartments();
