import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {

  constructor(private bookService: BookService, private router: Router) { }

  bookToBeUpdated = new Book();
  ngOnInit(): void {
    this.bookToBeUpdated = JSON.parse(JSON.stringify(this.bookService.getBookToBeUpdated()));
  }

  updateBook(): void {
    this.bookService.updateBook(this.bookToBeUpdated);
    this.router.navigate(['books']);
  }
  cancelUpdating(): void {
    this.router.navigate(['books']);
  }
}
