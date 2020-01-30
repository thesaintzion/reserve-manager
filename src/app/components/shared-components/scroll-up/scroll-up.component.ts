import { Component, OnInit, Inject, HostListener  } from '@angular/core';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-scroll-up',
  templateUrl: './scroll-up.component.html',
  styleUrls: ['./scroll-up.component.scss']
})
export class ScrollUpComponent implements OnInit {
  windowScrolled: boolean;
  constructor(@Inject(DOCUMENT) private document: Document) { }


  @HostListener("window:scroll", [])
  onWindowScroll() {
      if (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop > 1200) {
          this.windowScrolled = true;
      } 
     else if (this.windowScrolled && window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop < 10) {
          this.windowScrolled = false;
      }
  }

  scrollToTop(){
    window.scrollTo(0, 0);
  }

  ngOnInit() {
    // setTimeout( () => {
    //   this.windowScrolled = true;
    //       }, 3000);
  }

}
