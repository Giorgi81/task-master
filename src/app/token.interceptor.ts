import {HttpEvent, HttpHandler, HttpInterceptor, HttpInterceptorFn, HttpRequest} from '@angular/common/http';
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";

@Injectable()
export class TokenInterceptor implements HttpInterceptor{

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const headers = {
        'X-RapidAPI-Key': '4746a79472mshb4e32011cd91405p1d5108jsn8eddc658a3e7'
    }
    return  next.handle(req.clone({setHeaders: headers}))
  }

}
