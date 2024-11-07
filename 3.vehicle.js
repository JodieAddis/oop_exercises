class Vehicle {
  constructor(make, model, year) {
    this._make = make;
    this._model = model;
    this._year = year;
  }

  showDetails() {
    return this._make + this._model + this._year;
  }
}

class Car extends Vehicle {
  constructor(make, model, year, doors) {
    super(make, model, year);
    this._doors = doors;
  }

  showDetails() {
    return `Make: ${this._make}, Model: ${this._model}, Year: ${this._year}, Doors: ${this._doors} `;
  }
}

const newCar = new Car("bheu", "audi", "2024", 3);
console.log(newCar.showDetails());
