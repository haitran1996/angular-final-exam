import { Component, OnInit } from '@angular/core';
import {BookService} from '../book.service';
import {ActivatedRoute, Router} from '@angular/router';
import {IBook} from '../IBook';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
  book: IBook;
  bookId;
  constructor(
    private bookService: BookService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.bookId = params.id;
    });
    this.bookService.getBook(this.bookId).subscribe(
      (data: IBook) => this.book = data
    );
  }
  edit(book: IBook) {
    this.bookService.update(book, this.bookId).subscribe(success => alert('Done'));
    this.router.navigate(['']);
  }
}
