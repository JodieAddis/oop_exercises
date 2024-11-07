class Employee {
  constructor(name, salary) {
    this._name = name;
    this._salary = salary;
  }

  calculateSalary() {
    let salary = this._salary * 12;
    return salary;
  }
}

class Manager extends Employee {
  constructor(name, salary, department) {
    super(name, salary);
    this._department = department;
  }
  calculateSalary() {
    return super.calculateSalary() + 3000;
  }
}

const employeeOne = new Manager("Jean", 2100, "Informatique");
console.log(employeeOne.calculateSalary());

const employeeTwo = new Manager("Loic", 100, "Architecte");
console.log(employeeTwo.calculateSalary());
