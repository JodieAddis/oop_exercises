class Person {
  constructor(name, age, country) {
    this._name = name;
    this._age = age;
    this._country = country;
  }

  personDetails() {
    return `${this._name}, agé de ${this._age} ans, habite en ${this._country}`;
  }
}

const personOne = new Person("Jodie", 31, "Belgique");
console.log(personOne.personDetails());
const personTwo = new Person("Pietro", 60, "Sardaigne");
console.log(personTwo.personDetails());
