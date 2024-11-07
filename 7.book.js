class Book {
  constructor(title, author, publication) {
    this._title = title;
    this._author = author;
    this._publication = publication;
  }

  bookDetails() {
    return `Livre: ${this._title}, auteur: ${this._author}, année de publication: ${this._publication}`;
  }
}

class Ebook extends Book {
  constructor(title, author, publication, price) {
    super(title, author, publication);
    this._price = price;
  }

  bookDetails() {
    return super.bookDetails() + `, prix: ${this._price}`;
  }
}

const newBook = new Ebook("Contes de Fées", "Stephen King", 2020, "25 euros");
console.log(newBook.bookDetails());
