import { Component, OnInit } from '@angular/core';
import {BookService} from '../book.service';
import {IBook} from '../IBook';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {

  constructor(
    private bookService: BookService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  create(book: IBook) {
    this.bookService.add(book).subscribe(success => alert('Done'));
    this.router.navigate(['']);
  }
}
