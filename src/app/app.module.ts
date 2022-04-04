import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NewbookComponent } from './newbook/newbook.component';
import { UpdateBookComponent } from './update-book/update-book.component';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    NavbarComponent,
    HomepageComponent,
    NewbookComponent,
    UpdateBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
