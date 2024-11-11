class Product {
  constructor(ID, name, price) {
    this._ID = ID;
    this._name = name;
    this._price = price;
  }

  totalPrice(quantity) {
    let priceProduct = this._price * quantity;
    console.log(`Le prix total à payer est de ${priceProduct}euros`);
  }
}

class PersonalCareProduct extends Product {
  constructor(ID, name, price, warranty) {
    super(ID, name, price);
    this._warranty = warranty;
  }

  warrantyPeriod(quantity) {
    super.totalPrice(quantity);
    console.log(`et la garantie est de ${this._warranty} mois`);
  }
}

const buyProduct = new PersonalCareProduct(23, "Nike", 150, 36);
buyProduct.warrantyPeriod(2);
