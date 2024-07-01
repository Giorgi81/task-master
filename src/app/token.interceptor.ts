import {Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const clonedRequest = req.clone({
      headers: req.headers.append('X-RapidAPI-Key', '4746a79472mshb4e32011cd91405p1d5108jsn8eddc658a3e7')
    });
    return next.handle(clonedRequest);
  }
}
