import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router){}
  loggedId(){
    if(localStorage.getItem('NO_W_XX') === undefined || 
        localStorage.getItem('NO_W_XX') === '' ||
        localStorage.getItem('NO_W_XX') === "" ||
        localStorage.getItem('NO_W_XX')   === 'null' ||
        localStorage.getItem('NO_W_XX') === null
        ){
          return false
        }else{
          return true
        }
  }
  canActivate(): boolean {
    if(this.loggedId()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
    }
  
}
