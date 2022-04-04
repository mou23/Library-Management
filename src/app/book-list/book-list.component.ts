import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  constructor(private bookService: BookService, private router: Router) { }
  
  searchString:string = ""; 
  books: Book[] = [];

  ngOnInit(): void {
    console.log("init")
    this.books = this.bookService.getBooks();
    console.log(this.bookService.getBooks());
  }

  searchBook(): void {
    if(this.searchString=="") {
      this.books = this.bookService.getBooks();
    }
    else {
      this.books = this.books.filter(book => book.name.toLowerCase() == this.searchString.toLowerCase());
      if(this.books.length==0) {
        alert("No book found");
      }
    }
  }

  clearSearch(): void {
    this.searchString = "";
    this.books = this.bookService.getBooks();
  }

  deleteBook(givenBook: Book): void{
    this.books = this.bookService.deleteBook(givenBook);
  }
  addNewbook(): void {
    this.router.navigate(['newbook']);
  }
  updateBook(givenBook: Book, givenIndex: number): void{
    this.bookService.setBookToBeUpdated(givenBook,givenIndex);
    this.router.navigate(['updatebook']);
  }
}
