import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
sharedSlug =  this.router.url.split('/')[1];
  goUp(){
      window.scrollTo(0, 0);
  }
  constructor(private router: Router) { }
}
