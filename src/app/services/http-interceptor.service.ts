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
  NO_W_XX: `${localStorage.getItem('NO_W_XX')}`
 }
    });
    return next.handle(tokenRequest);
  }

}
