import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiKey: string = '4746a79472mshb4e32011cd91405p1d5108JSN8EDDC658A3E7';
  private apiHost: string = 'online-movie-database.p.rapidapi.com';

  constructor(private http: HttpClient) {}

  get(title: string): Observable<any> {
    const headers = new HttpHeaders({
      'X-RapidAPI-Key': this.apiKey,
      'X-RapidAPI-Host': this.apiHost
    });

    const url = `https://online-movie-database.p.rapidapi.com/title/v2/find?title=${title}&limit=20&paginationKey=0&sortarg=moviemeter%2Casc`;

    return this.http.get(url, { headers });
  }
}
