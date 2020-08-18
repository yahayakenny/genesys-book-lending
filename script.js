console.log('Hey There, kindly name new books appropriately');
console.log('To check if book is available for borrowing, call newBook.available()');

function Book(title, author, status, booksLeft) {
    this.title = title;
    this.author = author;
    this.status = status;
    this.booksLeft = booksLeft;
}

Book.prototype.available = function() {
    if (this.status == true && this.booksLeft > 0) {
        return `The book ${this.title} by ${this.author} is currently available to lend to customer`;
    } else {
      return `The book ${this.title} by ${this.author} is not currently available to lend to customer`;
    } 
}


const newBook1 = new Book('The third Door', 'Alex Banayan', false, 0);
const newBook2 = new Book('The course of love', 'Alain De Botton', true , 3);
const newBook3 = new Book('Atomic Habit', 'James clear', true, 0);
const newBook4 = new Book('Clinically oriented Anatomy', 'Harper', true, 1);

console.log(newBook1);
console.log(newBook1.available());
console.log(newBook2.available());
console.log(newBook3.available());
console.log(newBook4.available());
