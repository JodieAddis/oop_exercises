class Shape {
  constructor() {}
  calculateArea() {}
}

class Circle extends Shape {
  constructor(rayon) {
    super();
    this._rayon = rayon;
  }
  calculateArea() {
    let pi = Math.PI;
    let area = (pi * this._rayon * this._rayon).toFixed(2);
    return `L'air du cercle est de ${area} unités cube`;
  }
}

class Triangle extends Shape {
  constructor(cote, hauteur) {
    super();
    this._cote = cote;
    this._hauteur = hauteur;
  }

  calculateArea() {
    let area = ((this._cote * this._hauteur) / 2).toFixed(2);
    return `L'air du triangle est de ${area} unités au cube`;
  }
}

const circleArea = new Circle(5);
console.log(circleArea.calculateArea());

const traingleArea = new Triangle(5, 10);
console.log(traingleArea.calculateArea());
