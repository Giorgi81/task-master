import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, of} from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import {Company } from "./exp-forms/type";

@Injectable({
  providedIn: 'root'
})
export class JobService {
  private apiUrl = 'assets/jobs.json';

  constructor(private http: HttpClient) {}

  getJobs(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl)
      .pipe(
        catchError(this.handleError<any[]>('getJobs', []))
      );
  }

  saveJobs(jobs: any[]): Observable<any> {
    return this.http.put(this.apiUrl, jobs)
      .pipe(
        tap(_ => console.log('Saved jobs to JSON file')),
        catchError(this.handleError<any>('saveJobs'))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
