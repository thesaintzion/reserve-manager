import { Component, OnInit, OnDestroy } from '@angular/core';
import { filter } from 'rxjs/operators'
import { Subscription } from 'rxjs';
import {
  Event,
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router
} from '@angular/router';
import { SharedService } from './services/shared.service';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'reserves-m';
sub: Subscription;

loading = false;

  constructor(private router: Router, public sharedService: SharedService, public apiService: ApiService){
    this.router.events.subscribe((event: Event) => {
      switch (true) {
        case event instanceof NavigationStart: {
          this.loading = true;
          break;
        }

        case event instanceof NavigationEnd:
        case event instanceof NavigationCancel:
        case event instanceof NavigationError: {
          this.loading = false;
          break;
        }
        default: {
          break;
        }
      }
    });
  }

  scrollToTop(){

  }

  ngOnInit(){
   

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(
      () => window.scrollTo(0, 0));  
  }

  ngOnDestroy(){
this.sub.unsubscribe();
  }
}
