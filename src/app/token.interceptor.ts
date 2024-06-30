import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor{
  private apiKey: string = '8JSN8EDDC658A3E7';

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const clonedRequest = req.clone({
      setHeaders: {
        'X-RapidAPI-Key': this.apiKey,
        'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
      }
    });
    return next.handle(clonedRequest);
  }
}
