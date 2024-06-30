import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable()
export class ApiService {

  constructor(
    public http: HttpClient
  ) {
  }
  get(name: string): Observable<any> {
    return this.http.get(`https://online-movie-database.p.rapidapi.com/title/v2/find?title=${name}&limit=20&paginationKey=0&sortArg=moviemeter%2Casc`)
  }
}

