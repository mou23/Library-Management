import { Injectable } from '@angular/core';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  books: Book[] = [
    {id: 1, name: 'Debi', year: 2001, available: true},
    {id: 2, name: 'Megh boleche jabo jabo', year: 1995, available: false},
    {id: 3, name: 'kohen kobi kalidash', year: 1999, available: true},
  ];
  bookToBeUpdated: Book = new Book();
  bookToBeUpdatedIndex: number = 0;
  constructor() { }
  getBooks(): Book[] {
    return this.books;
  }

  addBook(newbook: Book): void {
    let id = this.books.length+1;
    newbook.id = id;
    this.books.push(newbook);
    console.log(this.books);
  }

  deleteBook(givenBook: Book): Book[] {
    this.books = this.books.filter(book => book.id != givenBook.id);
    return this.books;
  }

  setBookToBeUpdated(givenBook: Book, givenIndex: number) : void {
    this.bookToBeUpdated = givenBook;
    this.bookToBeUpdatedIndex = givenIndex;
  }

  getBookToBeUpdated(): Book {
    return this.bookToBeUpdated;
  }
  
  updateBook(givenBook: Book) {
    console.log(givenBook.id);
    this.books.splice(this.bookToBeUpdatedIndex, 1, givenBook);
    console.log(this.books);
  }
}
