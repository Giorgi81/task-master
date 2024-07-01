import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {}

  get(title: string): Observable<any> {
    const url = `https://online-movie-database.p.rapidapi.com/title/v2/find?title=${title}&limit=20&paginationKey=0&sortarg=moviemeter%2Casc`;
    return this.http.get(url);
  }
}
