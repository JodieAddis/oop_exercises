class Rectangle {
  constructor(width, height) {
    this._width = width;
    this._height = height;
  }

  area() {
    let area = this._width * this._height;
    return `L'aire du triangle est de ${area} centimètres cubes`;
  }

  perimeter() {
    let perimeter = (this._width + this._height) * 2;
    return `Le périmètre du rectangle est de ${perimeter} centimètres carrés`;
  }
}

const reactArea = new Rectangle(4, 5);
console.log(reactArea.area());
const rectPerim = new Rectangle(3, 8);
console.log(rectPerim.perimeter());
