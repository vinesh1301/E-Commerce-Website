import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BookDetails } from './BookDetails';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {
  //HttpClient
  configUrl = "https://jsonplaceholder.typicode.com/todos/";
  constructor(private http: HttpClient) { }

  getBookDetails(): Observable<BookDetails[]> {
    return this.http.get<BookDetails[]>(this.configUrl);

  }

  addBook() {

  }

}
