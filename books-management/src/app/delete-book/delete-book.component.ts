import { Component, OnInit } from '@angular/core';
import {IBook} from "../IBook";
import {ActivatedRoute, Router} from "@angular/router";
import {BookService} from "../book.service";

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.css']
})
export class DeleteBookComponent implements OnInit {
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
  delete(id) {
    this.bookService.delete(id).subscribe(
      success => alert('Done')
    );
    this.router.navigate(['']);
  }
}
