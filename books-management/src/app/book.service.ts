import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {IBook} from './IBook';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  id = 3;
  url = 'http://localhost:3000/books/';
  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<IBook[]> {
    return this.http.get<IBook[]>(this.url);
  }

  getBook(id): Observable<IBook> {
    return this.http.get<IBook>(this.url + id);
  }
  add(book: IBook): Observable<IBook> {
    return this.http.post<IBook>(this.url, book);
  }

  update(book: IBook, id): Observable<IBook> {
    return this.http.put<IBook>(this.url + id, book);
  }

  delete(id): Observable<IBook> {
    return this.http.delete<IBook>(this.url + id);
  }
}
