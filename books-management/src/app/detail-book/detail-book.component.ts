import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {BookService} from '../book.service';
import {IBook} from '../IBook';

@Component({
  selector: 'app-detail-book',
  templateUrl: './detail-book.component.html',
  styleUrls: ['./detail-book.component.css']
})
export class DetailBookComponent implements OnInit {
  book: IBook;
  bookId;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private bookService: BookService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.bookId = params.id;
      this.getBook(this.bookId);
    });
  }

  getBook(id) {
    this.bookService.getBook(id)
      .subscribe(
        (data: IBook) => this.book = data
      );
  }
}
