import { Component, OnInit, Inject, HostListener  } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  showMenu = false;

  constructor(private router: Router, @Inject(DOCUMENT) private document: Document) { }
  windowScrolled: boolean; 
  headerFullWidth: boolean;

  @HostListener("window:scroll", [])
  onWindowScroll() {
      if (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop > 1200) {
        this.headerFullWidth = true;
      } 
     else if (this.windowScrolled && window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop < 10) {
      this.headerFullWidth = false;
      }
  }



  dataTest(e): void{
// alert(e);
this.router.navigate(['/register'], {queryParams: {
  'user': 'Saint'
}});
  }

  ngOnInit() {
    
  }

}
