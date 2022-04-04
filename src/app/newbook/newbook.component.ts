import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-newbook',
  templateUrl: './newbook.component.html',
  styleUrls: ['./newbook.component.css']
})
export class NewbookComponent implements OnInit {
  newbook = new Book();
  constructor(private bookService: BookService, private router: Router) { }

  ngOnInit(): void {
  }
  addBook(): void {
    console.log(this.newbook);
    this.bookService.addBook(this.newbook);
    this.router.navigate(['books']);
  }
}
