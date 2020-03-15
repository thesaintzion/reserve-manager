import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SharedService } from './shared.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private sharedService: SharedService,){}
  loggedId(){
    if(localStorage.getItem('API_KEY') === undefined || 
        localStorage.getItem('API_KEY') === '' ||
        localStorage.getItem('API_KEY') === "" ||
        localStorage.getItem('API_KEY')   === 'null' ||
        localStorage.getItem('API_KEY') === null
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
      this.sharedService.openSnackBar('Please login', 'Ok', 4000, '');
      return false;
    }
    }
  
}
