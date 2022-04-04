import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NewbookComponent } from './newbook/newbook.component';
import { UpdateBookComponent } from './update-book/update-book.component';

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'books', component: BookListComponent},
  {path: 'home', component: HomepageComponent},
  {path: 'newbook', component: NewbookComponent},
  {path: 'updatebook', component: UpdateBookComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
