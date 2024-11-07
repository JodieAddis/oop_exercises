class Animal {
  constructor(species, sound) {
    this._species = species;
    this._sound = sound;
  }

  animal() {
    return `Le cri du ${this._species} est ${this._sound}`;
  }
}

class Dog extends Animal {
  constructor(species, sound, color) {
    super(species, sound);
    this._color = color;
  }
  animal() {
    return super.animal() + `et a une fourrure de couleur ${this._color}`;
  }
}

const dog = new Dog(
  "Berger Allemand",
  "japement",
  "fauve avec un manteau noir"
);
console.log(dog.animal());
