import { Component, OnInit } from '@angular/core';
import {IBook} from '../IBook';
import {BookService} from "../book.service";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: IBook[];
  count: number;
  constructor(
    private bookService: BookService
  ) { }

  ngOnInit(): void {
    this.bookService.getAll()
      .subscribe(
        (data: IBook[]) => {this.books = data; this.count = data.length; }
      );
    console.log(this.count);
  }

}
