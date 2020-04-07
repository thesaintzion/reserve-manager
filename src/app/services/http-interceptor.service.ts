import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {

  constructor() { }
  intercept(req, next){
    const tokenRequest = req.clone({
 setHeaders: {
  API_KEY: `${localStorage.getItem('API_KEY')}`
 }
    });
    return next.handle(tokenRequest);
  }

}
